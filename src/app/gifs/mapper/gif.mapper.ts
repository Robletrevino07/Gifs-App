
import { Gif } from '../interfaces/gif.interface';
import { GiphyItem,  } from '../interfaces/giphy.interfaces';




export class GifMapper {


 static MapGiphyItemToGif(Item:GiphyItem ): Gif {
  return{
    Id:Item.id,
    tittle: Item.title,
    url: Item.images.original.url,
  }
 }


 static MapGiphyItemsToGifArray(Item:GiphyItem[] ): Gif[] {
  return Item.map(this.MapGiphyItemToGif)


 }

}
