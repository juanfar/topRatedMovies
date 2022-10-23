import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesCardListComponent } from './components/movies-card-list/movies-card-list.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MoviesCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent,
    MoviesCardListComponent
  ]
})
export class SharedModule { }
