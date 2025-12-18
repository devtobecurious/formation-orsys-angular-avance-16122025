import { Component, output } from '@angular/core';

@Component({
  selector: 'lib-add-like',
  imports: [],
  templateUrl: './add-like.html',
  styleUrl: './add-like.css',
})
export class AddLike {
  likeAdded = output<number>();

  addLike() {
    this.likeAdded.emit(1);
  }
}
