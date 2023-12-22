import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path:'movies',
    loadChildren: ()=> import('./components/movies/movies.module').then(m=> m.MoviesModule)
  },
  {
    path: 'tv',
    loadChildren: ()=> import('./components/tv-shows/tv-shows.module').then(m=> m.TvShowsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
