import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { GetListSelfiesBusiness } from '../../services/get-list-selfies.business';
import { Selfie } from '../../models/selfie';
import { AddLike } from '../add-like/add-like';

@Component({
  selector: 'lib-one-selfie',
  imports: [AddLike],
  templateUrl: './one-selfie.html',
  styleUrl: './one-selfie.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneSelfie {
  //private readonly business = inject(GetListSelfiesBusiness);
  readonly selfie = input.required<Selfie>();
  protected readonly nbLikes = computed(() => this.selfie().nbLikes);

  addLike(likesToAdd: number) {
    this.selfie().nbLikes += likesToAdd;
  }
}
