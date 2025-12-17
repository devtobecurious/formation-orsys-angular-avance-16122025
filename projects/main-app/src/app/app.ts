import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiscoverSignals } from './learnings/discover-signals/discover-signals';
import { EditOneSelfie } from 'selfies';
import { concatMap, fromEvent, interval, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DiscoverSignals, EditOneSelfie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('main-app');
  protected readonly counter = signal(0);
  private startButton = viewChild<ElementRef<HTMLButtonElement>>('startButton');

  constructor() {
    // setInterval(() => {
    //   this.counter.update((c) => c + 1);
    // }, 1000);
  }

  ngOnInit() {
    const button = this.startButton();

    if (button) {
      const obs$ = fromEvent(button.nativeElement, 'click');

      // interval(1000).subscribe(
      //   {
      //     next: index => this.counter.set(index)
      //   }
      // )

      obs$.pipe(
        //mergeMap(() => interval(1000))
        //concatMap(() => interval(1000)))
        switchMap(() => interval(1000))
      )
      .subscribe({
        next: count => this.counter.set(count)
      });
    }
  }
}