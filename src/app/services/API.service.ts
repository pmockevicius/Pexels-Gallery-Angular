import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.appData.baseApiUrl;
  apiKey = environment.appData.apiKey;

  constructor(private http: HttpClient) { }

  getImages(query: string, perPage: number): Observable<any> {
    const data = {
      query: query,
      per_page: perPage
    };
  
    // const headers = new HttpHeaders().set('Authorization', this.apiKey);
    // const options = { headers: headers, params: data };
    // const headers = new HttpHeaders().set('Authorization', this.apiKey);
    const options = { params: data };
  
    return this.http.get<any>(`${this.baseUrl}/search`, options);
  }

}
