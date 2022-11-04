import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  public title:string
  public status:any;
  public user: User;
  public identity:any;
  public token:any;

  constructor(

    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
    
  ) { 

    this.title = "Bienvenido al login"
    this.user = new User('', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(login:any){

    this._userService.login(this.user, false).subscribe(
      response => {

        if (response) {
          this.status = 'success'
          this._router.navigate(['/inicio'])
          console.log(response)
          
        }

      },
      error => {
        this.status = 'error'
        console.log(error)
      }
    )


  }



}
