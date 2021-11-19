import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  log(x:any) { console.log(x) }
  submit(course:Object) {console.log(course)}
  categories = [
    {id: 1, name: "Development"},
    {id: 2, name: "Sciences"},
    {id: 3, name: "Arts"}
  ]
}
