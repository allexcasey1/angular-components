import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isLiked') isLiked! : boolean;
  @Input('totalLikes') totalLikes! : number;

  toggle() {
    this.isLiked = !this.isLiked;
    this.update();
  }
  update() {
    this.totalLikes += this.isLiked ? 1 : -1;
    console.log(this.totalLikes)
  }

}
