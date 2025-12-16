import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Selfie, Selfies } from '../models/selfie';
import { GetListSelfiesInfra } from './get-list-selfies.infra';

@Injectable()
export class GetListSelfiesBusiness {
  private readonly infra = inject(GetListSelfiesInfra);
  private readonly selfies$ = this.infra.getAll()//.pipe(shareReplay(1));

  protected getAll(): Observable<Selfies> {
    return this.selfies$;
  }
}
