import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiscoverSignals } from './learnings/discover-signals/discover-signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DiscoverSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('main-app');
}
