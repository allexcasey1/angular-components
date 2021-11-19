import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  followers: any;

  constructor( 
    private route: ActivatedRoute,
    private service: FollowersService
    ) { }

  ngOnInit(): void {
  }
}