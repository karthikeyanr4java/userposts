import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  API_URL = 'http://localhost:7000/';
  
  constructor(private httpClient: HttpClient) { }

  public publishPost(post) {
    return this.httpClient
    .post(this.API_URL + 'publish', post);
  }
}
