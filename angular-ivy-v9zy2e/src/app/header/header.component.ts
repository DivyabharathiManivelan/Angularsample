import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import {ActivatedRoute} from '@angular/router';
import { Users } from '../models/users.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userId = -1;
  userDetails = new Users;

  ngOnInit() {

    // get userId from service and assign it to userId property

    // call getProfileDetails method to get user details

  }

  getProfileDetails() {

  // call getUserDetails method of dataService and assign response to userDetails property
    
  }

}
