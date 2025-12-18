import { Component, inject, isDevMode } from '@angular/core';
import { GetListSelfiesInfra } from './services/get-list-selfies.infra';
import { delay, Observable, of } from 'rxjs';
import { GetListSelfiesBusiness } from './services/get-list-selfies.business';
import { Selfies } from './models/selfie';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OneSelfie } from './components/one-selfie/one-selfie';

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
  imports: [AsyncPipe, OneSelfie],
  template: `
      <h1>Liste des Selfies</h1>

      @let selfies = selfies$ | async;

      @for(selfie of selfies; track selfie.id) {
        <lib-one-selfie [selfie]="selfie" />
      }
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
  protected readonly selfies$ = this.business.getAll()//.pipe(takeUntilDestroyed());
}
