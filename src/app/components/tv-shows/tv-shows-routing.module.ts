import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowsComponent } from './tv-shows.component';
import { Router } from 'express';

const routes: Routes = [
  {
    path: '',
    component:TvShowsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TvShowsRoutingModule { }
