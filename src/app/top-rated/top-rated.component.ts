import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/models';
import { TopRatedService } from './services/top-rated.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  movies!: Movie[];

  constructor(
    private topRatedService: TopRatedService
  ) { }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTopRatedMovies() {
    this.subscription = this.topRatedService.getTopRatedMovies().subscribe(response => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }

  refreshSelection() {
    console.log('refreshed');
  }

}
