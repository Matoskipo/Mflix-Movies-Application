import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  topRated:any;
  loader =true;
  searchRes: any;
  searchStr!:string

constructor(private movieService: MoviesService){}
  ngOnInit() {
    this.getTopRatedMovies(1)
  }

  getTopRatedMovies=(page: number)=>{
    this.movieService.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res:any)=>{
      this.topRated = res.results;
      this.loader = false;
      console.log('top rated:',this.topRated)
    })
  }

  searchMovies(){
    this.movieService.searchMovies(this.searchStr).subscribe((res:any)=>{
      this.searchRes = res.results;
      console.log('search res:',this.searchRes)
    })
  }
}
