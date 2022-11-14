import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/service.service';
import { Projects } from 'src/app/models/projects';
import { Global } from '../services/global';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  providers:[UserService]
})
export class PortafolioComponent implements OnInit {
  public projects: Projects | any;
  public url;
  public status:any;
  
  constructor(
    private _userService: UserService
  ) { 

    this.projects = new Projects('','','','','','','')
    this.url = Global.url

  }

  ngOnInit(): void {

    this.getProject()
  }

  getProject(){

    this._userService.getProject().subscribe(
      response => {

        if (response.status == 'success') {
          
        this.projects =  response.projects
         
        }else{
         this.status = "error"
        }
  

      },
      error =>{
        this.status = "error"
        console.log(error)

      }
    )

  }

 
  

}
