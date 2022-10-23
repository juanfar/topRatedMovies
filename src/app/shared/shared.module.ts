import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesCardListComponent } from './components/movies-card-list/movies-card-list.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { RoundProgressModule } from 'angular-svg-round-progressbar';



@NgModule({
  declarations: [
    MovieCardComponent,
    MoviesCardListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RoundProgressModule
  ],
  exports: [
    MovieCardComponent,
    MoviesCardListComponent
  ]
})
export class SharedModule { }
