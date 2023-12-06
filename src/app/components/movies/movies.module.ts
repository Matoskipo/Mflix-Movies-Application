import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PipeModule,
    SkeletonModule,
    FormsModule
  ]
})
export class MoviesModule { }
