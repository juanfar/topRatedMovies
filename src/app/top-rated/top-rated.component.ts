import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models';
import { TopRatedService } from './services/top-rated.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  movies!: Movie[];

  constructor(
    private topRatedService: TopRatedService
  ) { }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.topRatedService.getTopRatedMovies().subscribe(response => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }

  refreshSelection() {
    console.log('refreshed');
  }

}
