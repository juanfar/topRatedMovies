import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {

  @Input() movieData!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
