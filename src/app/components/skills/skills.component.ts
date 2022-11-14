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
  constructor(
    private _userService: UserService
  ) {
    this.url =  Global.url;
   }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){

    this._userService.geTech().subscribe(

      tech =>{
        
        if (tech.status == 'success') {
          this.status = 'success'
          this.skills = tech.Tech
          console.log(this.skills)

          for (let i = 0; i < this.skills.length; i++) {
            this.level =  this.skills[i]["timeOfKnowledge"]
            
          }
          if (this.level === 1){
            this.exp = "50%"

          }

          if (this.skills.timeOfKnowledge > 1) {
            this.level = "70%"
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


  


}
