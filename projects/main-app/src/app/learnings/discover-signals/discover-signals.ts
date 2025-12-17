import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-discover-signals',
  imports: [],
  templateUrl: './discover-signals.html',
  styleUrl: './discover-signals.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverSignals {
  private readonly title = signal('hello');
  protected readonly titleAsMaj = computed(() => this.title().toUpperCase());
  protected readonly list = computed(() => signal([this.title() + " (nantes) ", "le cellier", "saint herblain"]));

addCity() {
  const cities = this.list();
  cities.set([...cities(), 'new city ' + Math.random()]);
}

setNewTitle() {
  this.title.set('new title ' + Math.random());
}

  coucou() {
    console.info('coucou called');
    return 'coucou';
  }

  get nbItems() {
    console.info('nbItems called');
    return 3;
  }

  ngOnInit() {
    this.title.set('salut'); // SYNC

    // setTimeout(() => {
    //   this.title.set('ca va'); // ASYNC
    //   console.info(this.title);
    // }, 10);
    
    // setTimeout(() => {
    //   this.title.update(old => old + ' !'); // ASYNC
    //   console.info(this.title);
    // }, 20);

    // this.title.set('yes !'); // SYNC
  }
}
