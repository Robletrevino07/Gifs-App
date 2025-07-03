import {  Component, input } from '@angular/core';

@Component({
  selector: 'giff-list-item',
  standalone: true,
  imports: [],
  templateUrl: './giff-list-item.component.html',

})
export class GiffListItemComponent {

  imageUrl = input.required<string>();


 }
