import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../services/service.service';
import { Global } from '../services/global';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  public page_title:string;
  public status:any;
  public user: User | any;
  public url:string;

  
  constructor(
    private _userService: UserService,
    
  ) {

    this.page_title = 'Register'
    this.url = Global.url
    this.user = new User('', '', '', '', '', '', '', '')
   }


  ngOnInit(): void {
        
  }

  onSubmit(form:any){

    this._userService.register(this.user).subscribe(
      response =>{
        
        if (response) {
          this.status = 'success';
          form.reset()
        }
        
      },
      error => {

        this.status = 'error'
        console.log(error)
      }
    )
  }


}
