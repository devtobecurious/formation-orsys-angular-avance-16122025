import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GetListSelfiesBusiness } from '../../services/get-list-selfies.business';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'lib-one-selfie',
  imports: [],
  templateUrl: './one-selfie.html',
  styleUrl: './one-selfie.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneSelfie {
  //private readonly business = inject(GetListSelfiesBusiness);
  readonly selfie = input.required<Selfie>();
}
