import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedComponent } from './top-rated.component';
import { TopRatedRoutingModule } from './top-rated-routing.module';



@NgModule({
  declarations: [
    TopRatedComponent
  ],
  imports: [
    CommonModule,
    TopRatedRoutingModule
  ]
})
export class TopRatedModule { }
