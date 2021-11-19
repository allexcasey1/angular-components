import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getCourses() {
    return [
      {course: "Course 1", favorite: true, isLiked: false, totalLikes: 10}, 
      {course: "Course 2", favorite: false, isLiked: false, totalLikes: 10}, 
      {course: "Course 3", favorite: true, isLiked: false, totalLikes: 10}, 
      {course: "Course 4", favorite: true, isLiked: false, totalLikes: 10}]
  }
}
