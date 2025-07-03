import {  Component,inject, signal } from '@angular/core';
import { GiffListComponent } from '../../components/side-menu/giff-list/giff-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';


@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GiffListComponent],
  templateUrl: './search-page.component.html',
})
export default  class SearchPageComponent {


  gifService = inject(GifsService );
  gifs = signal<Gif[]>([])

  OnSearch(query:string){
    this.gifService.SearGifs(query).subscribe( (resp) => {
      this.gifs.set(resp)
    }

    )
  }


 }
