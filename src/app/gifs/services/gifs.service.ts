import { HttpClient } from '@angular/common/http';
import {computed, effect, inject ,Injectable, Query, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable, tap } from 'rxjs';


import type  { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';



  const Gif_Key = 'gifs'

 const LoadFromLocalStorage = () => {

  const gifsFromLocalStorage = localStorage.getItem(Gif_Key) ?? '{}'
  const gifs = JSON.parse(gifsFromLocalStorage)



  return gifs

}


@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private http = inject(HttpClient)

  trendingGif = signal<Gif[]>([])
  trendingGifsLoading = signal(true)

 searchHistory = signal<Record<string, Gif[]>>(LoadFromLocalStorage())
 searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))

 constructor(){
  this.loadTrendingGifs();
 }



  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,
    {
      params:{
        api_key : environment.apiKey,
        limit: 20
      }

    }).subscribe((resp) =>{
      const gifs = GifMapper.MapGiphyItemsToGifArray(resp.data)
      this.trendingGif.set(gifs)
      this.trendingGifsLoading.set(false)
      console.log(gifs)
    })




  }

  SearGifs(query:string): Observable<Gif[]>{
   return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,
    {
      params:{
        api_key : environment.apiKey,
        limit: 20,
        q: query
      }

    }).pipe(

      map(({data}) =>  data),
      map((items) =>  GifMapper.MapGiphyItemsToGifArray(items)),

      //Manejar Hisotrial
      tap(items => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: items,

        }));
      })
    );



  }



  GetHistoryGifs(query:string): Gif[]{
    return this.searchHistory()[query] ?? []
  }


  SaveToLocalStorage = effect(() => {
      localStorage.setItem(Gif_Key, JSON.stringify(this.searchHistory()))
  })



}
