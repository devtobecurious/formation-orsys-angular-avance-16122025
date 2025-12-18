import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../../store';
import { addWookieeAction } from '../../store/wookiees.actions';
import { Wookiee, WookieeList } from '../../models/wookiee';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-add-wookiee',
  imports: [],
  templateUrl: './add-wookiee.html',
  styleUrl: './add-wookiee.css',
})
export class AddWookiee {
  private readonly item = signal<Wookiee>({ name: '', age: 0, id: 1 });
  protected wookieeForm = form(this.item);
  private readonly store = inject(Store<ApplicationState>);

  save(): void {
    const itemToSendToStore = {
      item: this.item()
    }

    this.store.dispatch(addWookieeAction(itemToSendToStore))
  }
}
