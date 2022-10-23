import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie, MoviesResponse } from '../../shared/models/';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getTopRatedMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${environment.url}/top_rated?api_key=${environment.appKey}`)
      .pipe(
        map((response) => {
          return {
            page: response.page,
            results: this.moviesMapper(response.results),
            total_pages: response.total_pages,
            total_results: response.total_results
          }
        })
      );
  }

  moviesMapper(movies: any): Movie[] {
    return movies.map((movie: any) => {
      return {
        title: movie.title,
        average: movie.vote_average,
        release_date: movie.release_date,
        poster: `${environment.imageUrl}/${movie.poster_path}`
      }
    })
  }
}
