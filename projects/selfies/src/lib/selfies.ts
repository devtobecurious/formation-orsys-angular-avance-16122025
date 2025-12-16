import { Component, inject, isDevMode } from '@angular/core';
import { GetListSelfiesInfra } from './services/get-list-selfies.infra';
import { delay, Observable, of } from 'rxjs';
import { GetListSelfiesBusiness } from './services/get-list-selfies.business';
import { Selfies } from './models/selfie';

const fakeInfra = {
  getAll: (): Observable<Selfies>  => {
    return of([
      { id: 1, url: 'http://example.com/selfie1.jpg', title: 'Selfie 1' },
      { id: 2, url: 'http://example.com/selfie2.jpg', title: 'Selfie 2' },
    ]).pipe(delay(1000));
  },
};

@Component({
  selector: 'lib-selfies',
  imports: [],
  template: `
    
  `,
  styles: ``,
  //providers: [{ provide: GetListSelfiesInfra, useValue: fakeInfra }],
  providers: [
    { provide: GetListSelfiesInfra, useFactory: () => isDevMode() ? fakeInfra : new GetListSelfiesInfra() },
    GetListSelfiesBusiness
  ],
})
export class DisplaySelfies {
  private readonly business = inject(GetListSelfiesBusiness);

}
