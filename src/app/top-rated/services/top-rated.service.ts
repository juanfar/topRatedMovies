import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getTopRatedMovies() {
    return this.http.get<any>(`${environment.url}/top_rated?api_key=${environment.appKey}`);
  }
}
