import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input() favorite? : boolean;
  @Output() change = new EventEmitter();

  constructor() { }
  
  ngOnInit() : void {
  }

  toggle() {
    this.favorite = !this.favorite;
    this.change.emit({newValue:this.favorite});
  }
}
export interface FavoriteChangedEventArgs {
  newValue : boolean,
}