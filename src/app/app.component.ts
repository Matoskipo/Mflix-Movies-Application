import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core'
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MFMovies';
  loading = false;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate'
  value = 50;

  constructor(private route: Router) {
    
    route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      
        this.loading = true;
        console.log('start loading:', this.loading)
      } else if (event instanceof NavigationEnd) {
        setTimeout (() => {
          this.loading = false;
          console.log('end loading:', this.loading)
       }, 1000);
      }
    });
  }


}
