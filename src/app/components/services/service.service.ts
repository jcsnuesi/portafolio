import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Global } from './global';


@Injectable()
export class UserService {
  public url:string;
  public identity:any;
  public token:any;

  constructor(private _http: HttpClient) {
     this.url =  Global.url
   }

   register(user:any):Observable<any>{

    //Convertir los parametros en string para ser enviados
    let param = JSON.stringify(user)

    let header = new HttpHeaders().set('Content-Type', 'application/json');

     return this._http.post(this.url + 'register', param, {headers:header});
   }

  login(user: any, gettoken:any): Observable<any> {

    //Comprobar si llega el token
    if (gettoken != false) {
      
      user.gettoken = gettoken
      
    }

    let param = JSON.stringify(user)

    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'login', param, { headers: header });
  }

  getUserId(user:any):Observable<any>{
   
    return this._http.get(this.url + 'user/' + user)


  }
  
  getUser(): Observable<any> {

    return this._http.get(this.url + 'user')


  }
  
  getFile(id:any):Observable<any>{

    return this._http.get( this.url + 'avatar' + id)
  }

  // PROJECTS SERVICES

  getProject(): Observable<any> {

    return this._http.get(this.url + 'projects')
  }


  geTech():Observable<any>{

    return this._http.get(this.url + '/techs')
  }

  geTechImg(img:any): Observable<any> {

    return this._http.get(this.url + '/tech/' + img)
  }


}


