import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getPosts() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });

    return this.http.get(`${environment.apiUrl}/posts`, { headers });
  }
}
