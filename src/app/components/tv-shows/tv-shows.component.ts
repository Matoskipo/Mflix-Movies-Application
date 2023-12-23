import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { delay } from 'rxjs';
import { TvService } from 'src/app/services/tv.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit{

  topRatedTv: any;
  loader = true;
  searchRes: any;
  searchStr!: string;
  totalResults: any;
  constructor(private tvService: TvService) {}
  ngOnInit() {
    this.TopRatedTvShows(1)
  }

  TopRatedTvShows(page:number) {
    this.tvService.getTopRatedTvShows(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRatedTv = res.results
      this.totalResults = res.total_results;
      this.loader = false
      console.log('tv shows:', this.topRatedTv,this.totalResults)
    },
      error => console.log(error)
    )
  }
  searchMovies() {
    this.tvService.searchTv(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

  changePage(event: PageEvent) {
    this.TopRatedTvShows(event.pageIndex + 1)
    this.loader = false;
  }
}
