import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [TvShowsComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    SkeletonModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class TvShowsModule { }
