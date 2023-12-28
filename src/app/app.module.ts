import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import {HttpClientModule} from '@angular/common/http'
import { PipeModule } from './pipe/pipe.module';
import {CarouselModule} from 'primeng/carousel'
import { SkeletonModule } from './shared/skeleton/skeleton.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PipeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    SkeletonModule,
    CarouselModule
  ],
  // exports: [
  //   PipeModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
