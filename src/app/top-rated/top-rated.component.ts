import { Component, OnInit } from '@angular/core';
import { TopRatedService } from './services/top-rated.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  constructor(
    private topRatedService: TopRatedService
  ) { }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.topRatedService.getTopRatedMovies().subscribe(console.log);
  }

  refreshSelection() {
    console.log('refreshed');
  }

}
