import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })
  addTopic(topic : HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  onRemove(topic : AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray
  }
}