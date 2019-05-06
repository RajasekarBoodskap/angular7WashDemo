import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from '../../data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cookieValue = "";

   prifile_name = '';
   private  src : any;
   private  error : any;
   
  constructor(private Auth: DataService, private addCookie:CookieService) { }

  ngOnInit() {

    this.prifile_name = this.addCookie.get('firstName') + ' ' +this.addCookie.get('lastname');
   console.log(this.prifile_name);

  
    if (!this.addCookie.get('user_picture')) {
      console.log("call services");
      
        this.Auth.getUserProperty(this.prifile_name).subscribe( (data) => {

          console.log('----->>>', data);
          
         // console.log("getUserProperty");
         // console.log(data);
         //console.log(status);
            if (status) {
                
                this.src = data;
                //console.log(this.src);
                this.addCookie.set('user_picture', this.src.picture);
                $(".user_profile_picture").attr('src', this.addCookie.get('apikey') + '/files/download/' + this.addCookie.get('api_token') + '/' + this.src.picture);
            } else {
              console.log("user_profile_picture");
                $(".user_profile_picture").attr('src', "assets/images/avatar.png");
            }

        })
        error => {
          this.error = error // error path
         // console.log(this.error);
        }
    } else {
        $(".user_profile_picture").attr('src', this.addCookie.get('apikey') + '/files/download/' + this.addCookie.get('api_token') + '/' + this.addCookie.get('user_picture'));
    }
 

  }

  

  openNav(){

    this.cookieValue = this.addCookie.get('user_details');
    console.log(this.addCookie.get('apikey'));
    console.log(this.addCookie.get('api_token'));
    console.log(this.cookieValue);
     if($("#sideNavBar").hasClass('barwidth')){
                $(".barmenu").html('<i class="fa fa-bars"></i>')
                $("#sideNavBar").removeClass('barwidth')
                $("#sideNavBar").hide();
            }else{
                $(".barmenu").html('<i class="fa fa-times"></i>')
                $("#sideNavBar").addClass('barwidth')
                $("#sideNavBar").show()
            }

  }

}
