import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  baseUrl!: string;
  apiKey!: string;
  language!: string;
  region!: string;


  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = 'dd4d819639705d332d531217b4f7c6b6';
    this.language = 'en-US';
    this.region = 'US';
   }

   getTvOnTheAir(page: number): Observable<any>{
    return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
   }
}
