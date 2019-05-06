import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private  jsonString : any;

  constructor(private Auth: DataService, private router: Router, private addCookie:CookieService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    
    const name = target.querySelector("#username").value
    const pass = target.querySelector("#password").value

    console.log(name, pass);
    
    this.Auth.getUserDetails(name,pass).subscribe(data => {
     
        this.jsonString = data;
        console.log(this.jsonString.apiKey);
        this.addCookie.set('apikey', this.jsonString.apiKey);
        this.addCookie.set('domainKey', this.jsonString.domainKey);
        this.addCookie.set('api_token', this.jsonString.token);
        this.addCookie.set('firstName', this.jsonString.user.firstName);
        this.addCookie.set('lastname', this.jsonString.user.lastName);
        this.addCookie.set('email', this.jsonString.user.email);

        console.info(this.jsonString);
       
          this.router.navigate(['/pages/wash']);
     
      
    });
    
  }

}
