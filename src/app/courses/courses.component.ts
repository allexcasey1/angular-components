import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "Courses list:";
  courses;
  @Output() change = new EventEmitter();

  constructor(service: CoursesService) {
    this.courses = service.getCourses()
   }

  ngOnInit(): void {
  }

  favoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite changed:", eventArgs)
  }
}