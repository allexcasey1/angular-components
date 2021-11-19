import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AppError } from '../common/app-error';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any;

  constructor(
    private service: FollowersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .subscribe((combined: any) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        // this.service.getAll({ id: id, page: page });
        this.service.getAll()
          .subscribe(followers => {
            this.followers = followers;
          })
      });


    
  }

}
