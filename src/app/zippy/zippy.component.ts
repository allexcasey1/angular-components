import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input("title") title? : string;
  @Input("bodyContent") bodyContent? : string;
  isActive : boolean = true;

  onClick() {
    this.isActive = !this.isActive;
  }
}
