import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/models';
import { TopRatedService } from './services/top-rated.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  subscription!: Subscription;
  movies!: Movie[];
  movies$ = this.topRatedService.movies$;
  pageNum = 1;

  constructor(
    private topRatedService: TopRatedService
  ) { }

  ngOnInit(): void {
  }

  onScrollDown(event: boolean): void {
    if (event === true) {
      this.pageNum ++;
      this.topRatedService.getTopRatedMoviesByPage(this.pageNum);
    }
  }

  refreshSelection() {
    console.log('refreshed');
  }

}
