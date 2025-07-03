import {  Component, computed, inject, signal } from '@angular/core';
import { GiffListComponent } from "../../components/side-menu/giff-list/giff-list.component";
import { GifsService } from '../../services/gifs.service';






@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [GiffListComponent],
  templateUrl: './trending-page.component.html',

})
export  default class TrendingPageComponent {


  gifService = inject(GifsService );





 }
