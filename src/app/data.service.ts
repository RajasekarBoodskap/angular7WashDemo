import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserDetails(name,pass){

    const API_BASE_PATH = "https://api.boodskap.io";
    const url = API_BASE_PATH + "/domain/login/" + name + "/" + pass
    console.log(url);
    return this.http.get(url)
  }

}
