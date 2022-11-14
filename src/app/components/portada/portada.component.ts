import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  providers:[UserService]
})
export class PortadaComponent implements OnInit {
  public title;
  public user:any;
  constructor(

    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {

    this.title = 'titulo'

   }

  ngOnInit(): void {

    this.getUser()
   
    
  
  }

  getUser(){

    this._userService.getUserId('63589e509b134831b1b2ce6e').subscribe(
      response => {
        this.title = response.user_details.name + ' ' + response.user_details.lastname
        this.user = response.user_details
        console.log(this.user)

      },
      error => {
        console.log(error)
      }
    )

  }

 
  

}
