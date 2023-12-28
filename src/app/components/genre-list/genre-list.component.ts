import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {
  genresList: any;
  loader = true;
  constructor(private movie: MoviesService) { }

  ngOnInit(): void {
    this.MovieGenre()
  }

  MovieGenre() {
    this.movie.getGenres().pipe(delay(2000)).subscribe(res => {
      this.genresList = res.genres
      this.loader = false;
      console.log('genres:', this.genresList)
    })
  }
}
