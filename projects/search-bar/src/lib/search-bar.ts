import { Component, inject } from '@angular/core';
import { SearchStore } from './search-store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-search-bar',
  imports: [FormsModule],
  template: `
    <input type="text" [(ngModel)]="searchTerm" /> <button (click)="search()">Recherche</button>
  `
})
export class SearchBar {
  protected searchTerm = '';
  private readonly searchStore = inject(SearchStore);

  search(): void {
    this.searchStore.dispatch(this.searchTerm);
  }
}
