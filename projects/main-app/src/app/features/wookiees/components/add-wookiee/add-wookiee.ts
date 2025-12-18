import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../../store';
import { addWookieeAction } from '../../store/wookiees.actions';
import { Wookiee, WookieeList, wookieeSchema } from '../../models/wookiee';
import { Field, form, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-add-wookiee',
  imports: [Field],
  templateUrl: './add-wookiee.html',
  styleUrl: './add-wookiee.css',
})
export class AddWookiee {
  private readonly item = signal<Wookiee>({ name: '', age: 0, id: 1, planet: { id: 1, name: '', climate: '', terrain: '' }, visitedPlanets: [] });
  protected wookieeForm = form(this.item, wookieeSchema);
  private readonly store = inject(Store<ApplicationState>);

  async save(): Promise<void> {
    const itemToSendToStore = {
      item: this.item()
    }

    // await submit(this.wookieeForm, form => {

    // });

    this.store.dispatch(addWookieeAction(itemToSendToStore))
  }
}
