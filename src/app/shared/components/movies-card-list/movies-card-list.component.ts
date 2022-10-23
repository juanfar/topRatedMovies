import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-movies-card-list',
  templateUrl: './movies-card-list.component.html',
  styleUrls: ['./movies-card-list.component.scss']
})
export class MoviesCardListComponent implements OnInit {

  @Input() movies!: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
