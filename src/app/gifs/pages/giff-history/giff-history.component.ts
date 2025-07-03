import { Component, computed, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { ActivatedRoute} from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GiffListComponent } from "../../components/side-menu/giff-list/giff-list.component";

@Component({
  selector: 'app-giff-history',
  standalone: true,
  imports: [GiffListComponent],
  templateUrl: './giff-history.component.html',

})
export default class GiffHistoryComponent {

  GifsService = inject(GifsService)


  query =  toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'] ?? undefined)
    )

  )

  GifsByKey = computed(() => {
    return this.GifsService.GetHistoryGifs(this.query())
  }

  )




}
