import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { LaLegaComponent } from './components/la-lega/la-lega.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { CupComponent } from './components/cup/cup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LaLegaComponent,
    NewsComponent,
    NextMatchComponent,
    VideosComponent,
    OurBlogComponent,
    CupComponent,
    AddMatchComponent,
    AddPlayerComponent,
    DashboardComponent,
    MatchesComponent,
    MatchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
