import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private SERVER_URL = "https://united-administrator.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  public fetchData(chat_id) {
    return this.httpClient.get(`${this.SERVER_URL}/chat/`+chat_id);
  }

}
