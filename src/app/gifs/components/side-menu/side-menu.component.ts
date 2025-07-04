import {  Component } from '@angular/core';
import { GifsSideMenuOptionsComponent } from "./side-menu-options/gifs-side-menu-options.component";
import { GifsSideMenuHeaderComponent } from "./side-menu-header/gifs-side-menu-header.component";

@Component({
  selector: 'gifs-side-menu',
  standalone: true,
  imports: [GifsSideMenuOptionsComponent, GifsSideMenuHeaderComponent],
  templateUrl: './side-menu.component.html',

})
export class SideMenuComponent { }
