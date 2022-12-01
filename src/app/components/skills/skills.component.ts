import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/service.service';
import { Global } from '../services/global';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers:[UserService]
})
export class SkillsComponent implements OnInit {
  public skills: any;
  public status:any;
  public url:any;
  public level:any;
  public exp:any;
  public certification:any;
  constructor(
    private _userService: UserService
  ) {
    this.url =  Global.url;
   }

  ngOnInit(): void {
    this.getInfo()
    this.getcert()
    
  }

  getInfo(){

    this._userService.geTech().subscribe(

      tech =>{
        
        if (tech.status == 'success') {
          this.status = 'success'
          this.skills = tech.Tech
          

          for (let i = 0; i < this.skills.length; i++) {
            this.level =  this.skills[i]["timeOfKnowledge"]
           
          }

                
        }else{
          this.status = 'error'

        }
      
  

      },
      error => {
        this.status = 'error'
        console.log(error)
      }
    )


  }

  getcert(){

    this._userService.getCert().subscribe(

      response => {
        this.certification = response.certifications
        console.log(this.certification[0].certName)
      },
      error =>{

        console.log(error)
      }
    )

  }


  


}
