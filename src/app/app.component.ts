import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/styles.css']
})
export class AppComponent {
 public title:string;

 constructor(){
  this.title = "NEDOM"
 }
}
