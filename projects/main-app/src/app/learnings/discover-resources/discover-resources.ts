import { Component, resource, signal } from '@angular/core';
import { Wookiee, wookiees } from './models/wookiee';

@Component({
  selector: 'app-discover-resources',
  imports: [],
  templateUrl: './discover-resources.html',
  styleUrl: './discover-resources.css',
})
export class DiscoverResources {
  private readonly query = signal('');

  protected readonly wookieesResource = resource({
    defaultValue: [],
    
    params: this.query,

    loader: (query) => new Promise<Wookiee[]>(resolve => {
      setTimeout(() => {
        const filter = query.params

        resolve(wookiees.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())));
      }, 1000);
    })
  })
}
