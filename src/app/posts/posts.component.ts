import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { };
  
  ngOnInit() {
    this.service.getAll()
      .subscribe(
        allPosts => this.posts = allPosts, 
        error => {
          if (error instanceof AppError)
            alert("Application Error: The server is down.");
          else throw error;
      });
  };

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value}
    this.posts.splice(0, 0, post); 

    input.value = '';

    this.service.create(post)
      .subscribe((
        newPost: any) => {
          post['id'] = newPost.id;
      }, 
      error => {
        this.posts.splice(0,1);
        // this.form.setErrors(error.originalError);
        if (error instanceof BadInput)
          alert('Application Error: Your post is not valid');
        else throw error;
      })
  }
  updatePost(post: Object) {
    this.service.update(post)
      .subscribe(
        updatedPost => console.log("Post Service: " + updatedPost), 
        error => {
          if (error instanceof AppError)
            alert('Application Error: Nothing found to update');
          else throw error;
      })
  }
  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => null, 
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if(error instanceof NotFoundError)
            alert("Application Error: This post has already been deleted.");
          else throw error;
      })
  }  
}
