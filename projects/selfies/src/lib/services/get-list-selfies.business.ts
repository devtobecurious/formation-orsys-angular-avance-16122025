import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Selfie, Selfies } from '../models/selfie';
import { GetListSelfiesInfra } from './get-list-selfies.infra';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import {SearchStore} from 'searchBar';

@Injectable()
export class GetListSelfiesBusiness {
  private readonly infra = inject(GetListSelfiesInfra);
  private readonly selfies$ = this.infra.getAll()//.pipe(shareReplay(1));

  private searchStore = inject(SearchStore);
  
  readonly selfiesAsSignal = toSignal(this.selfies$);

  private readonly filterValue = toSignal(this.searchStore.asObservable);

  selfiesFiltered$ = rxResource({
    defaultValue: [] as Selfies,
    params: this.filterValue,
    stream: (query) => this.infra.getAll(query.params.item) // il reste à filtrer
  });

  getAll(): Observable<Selfies> {
    return this.selfies$;
  }
}
