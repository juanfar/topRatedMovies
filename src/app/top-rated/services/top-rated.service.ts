import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, pluck, take, tap, withLatestFrom } from 'rxjs';
import { Movie, MoviesResponse } from '../../shared/models/';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    return this.http.get<MoviesResponse>(`${environment.url}/top_rated?api_key=${environment.appKey}`)
      .pipe(
        take(1),
        tap(({results}) => {
          this.moviesSubject.next(this.moviesMapper(results))
        })
      ).subscribe();
  }

  getTopRatedMoviesByPage(pageNumber: number): void {
    this.http.get<MoviesResponse>(`${environment.url}/top_rated?api_key=${environment.appKey}&page=${pageNumber}`)
      .pipe(
        take(1),
        map(response => this.moviesMapper(response.results)),
        withLatestFrom(this.movies$),
        tap(([newMovies, movies]) => {
          this.moviesSubject.next([...movies, ...newMovies]);
        })
      ).subscribe();
  }

  private moviesMapper(movies: any): Movie[] {
    return movies.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        average: movie.vote_average,
        release_date: movie.release_date,
        poster: `${environment.imageUrl}/${movie.poster_path}`
      }
    })
  }
}
