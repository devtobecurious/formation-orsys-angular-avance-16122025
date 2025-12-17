import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'lib-edit-one-selfie',
  imports: [],
  templateUrl: './edit-one-selfie.html',
  styleUrl: './edit-one-selfie.css',
})
export class EditOneSelfie {
  selfie = input.required<Selfie>();
  // selfieTemp = computed(() => signal(this.selfie()));
  selfieTemp = linkedSignal(() => this.selfie());

  // private readonly selfie = signal<Selfie>({ id: 1, url: '', title: 'regarder moi avec dark vador' });
  // protected readonly title = computed(() => this.selfie().title);
  // protected readonly titleTemp = computed(() => signal(this.title()));

 
  

  // newSelfie() {
  //   this.selfie.set({ id: 2, url: '', title: 'regarder moi avec yoda' });
  // }

  // changeTitle() {
  //   this.selfieTemp().set({ ...this.selfieTemp()(), title: 'nouveau titre' });
  // }

  // changeTitle() {
  //   this.titleTemp().set('nouveau titre');
  // }
}
