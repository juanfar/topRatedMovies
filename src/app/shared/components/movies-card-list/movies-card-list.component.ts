import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models';

@Component({
  selector: 'app-movies-card-list',
  templateUrl: './movies-card-list.component.html',
  styleUrls: ['./movies-card-list.component.scss']
})
export class MoviesCardListComponent implements OnInit {

  @Input() movies!: Movie[] | null;
  @Output() onBottom = new EventEmitter<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

  onScrollDown(): void {
    this.onBottom.emit(true);
  }

}
