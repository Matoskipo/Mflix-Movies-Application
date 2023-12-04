import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tvShows: any;
  nowPlaying: any;
  responsiveOptions: any;
  loader = true;
  
  constructor(
    private movies: MoviesService,
    private tv: TvService,
    ) {
      this.responsiveOptions =[
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }

  ngOnInit(): void {
    this.tvShow(1)
    this.trendingMovies(1)
  }

  tvShow(page: number){
    this.tv.getTvOnTheAir(page).pipe(delay(2000)).subscribe((res: any)=>{
      this.tvShows = res.results;

      console.log('shows:',this.tvShows)
    })
  }
   trendingMovies(page:number){
    this.movies.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any)=>{
      this.nowPlaying = res.results;
      this.loader = false;
      console.log('now playing:', this.nowPlaying)
    })
   }

}
