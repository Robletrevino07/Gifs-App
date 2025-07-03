import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';



interface  MenuOption{
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  standalone: true,
  imports: [
    RouterLink,RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {


  gifservisce = inject(GifsService)


  menuOptions:MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending'
    },

    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: 'buscar gifs',
      route: '/dashboard/search'
    }
  ];


 }
