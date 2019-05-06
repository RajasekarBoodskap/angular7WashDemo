import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from './../environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private addCookie:CookieService) { 
    
  }

  

  getUserDetails(name,pass){

    const url = environment.apiUrl + "/domain/login/" + name + "/" + pass
   // console.log(url);
    return this.http.get(url)
  }

  getUserProperty(user_name){

    const url =  environment.apiUrl + "/user/property/get/" + this.addCookie.get('api_token') + "/" + this.addCookie.get('email') + "/" + user_name
   //console.log(url);
    return this.http.get(url)
  }

}
