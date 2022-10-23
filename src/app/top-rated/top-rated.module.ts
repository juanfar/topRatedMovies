import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './top-rated.component';
import { TopRatedRoutingModule } from './top-rated-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatGridListModule
]

@NgModule({
  declarations: [
    TopRatedComponent
  ],
  imports: [
    CommonModule,
    TopRatedRoutingModule,
    MaterialModules
  ]
})
export class TopRatedModule { }
