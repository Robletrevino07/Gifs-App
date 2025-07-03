import { Component, input } from '@angular/core';
import { GiffListItemComponent } from './giff-list-item/giff-list-item.component';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'giff-list',
  standalone: true,
  imports: [GiffListItemComponent],
  templateUrl: './giff-list.component.html',

})
export class GiffListComponent {

  gifs = input.required<Gif[]>()




}
