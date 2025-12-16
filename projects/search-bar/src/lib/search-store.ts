import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultItem, SearchState } from './models/search-state';

@Injectable({
  providedIn: 'root',
})
export class SearchStore {
  private readonly store = new BehaviorSubject<SearchState>(defaultItem);

  dispatch(item: string): void {
    this.store.next({ item });
  }

  get asObservable() {
    return this.store.asObservable(); // lecture seule depuis l'extérieur
  }
}
