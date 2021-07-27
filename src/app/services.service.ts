import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private SERVER_URL = "https://united-administrator.herokuapp.com";
  private SERVER_URL2 = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  public fetchData(token: string) {
    if(!token){
      return;
    }
    let chat_id: string = token.split("token")[0];
    return this.httpClient.get(`${this.SERVER_URL}/chat/` + chat_id);
  }

  public getAccessToAdminPanel(id: string) {
    return this.httpClient.get(`${this.SERVER_URL}/access/adminpanel/` + id);
  }

}
