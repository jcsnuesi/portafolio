import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[UserService]
})
export class AboutComponent implements OnInit {
  public title:string;

  constructor(
    private _userService: UserService
  ) { 
    this.title = 'Soy el titulo de about'
  }

  ngOnInit(): void {
  }




}
