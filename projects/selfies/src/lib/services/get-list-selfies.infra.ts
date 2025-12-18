import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Selfies } from '../models/selfie';

@Injectable()
export class GetListSelfiesInfra {
  private readonly httpClient = inject(HttpClient);

  getAll(filter = ''): Observable<Selfies> {
    return this.httpClient.get<Selfies>('/api/selfies').pipe(retry(2));
  }
}
