import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../../store';
import { selectAllWookiees } from '../../store/wookiees.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-display-list-wookiees',
  imports: [],
  templateUrl: './display-list-wookiees.html',
  styleUrl: './display-list-wookiees.css',
})
export class DisplayListWookiees {
  //protected readonly wookiees$ = inject(Store<ApplicationState>).pipe(select(selectAllWookiees));
  //protected readonly wookiees$ = inject(Store<ApplicationState>).select(selectAllWookiees);
  protected readonly wookieesSignal = inject(Store<ApplicationState>).selectSignal(selectAllWookiees);
  //protected readonly wookieesSignal = toSignal(this.wookiees$);
}
