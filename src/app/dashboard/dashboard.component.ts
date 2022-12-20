import { Component, OnInit } from '@angular/core';
import { TVShow } from '../tvshow';
import { TvshowService } from '../tvshow.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tvshows:TVShow[] =[];
  
  constructor(private tvshowService: TvshowService) {}

  ngOnInit(): void {
    this.getTVShows();
  }

  getTVShows(): void{
    this.tvshowService.getTVShows()
    .subscribe(tvshows => this.tvshows = tvshows.slice(1,5));
  }
}
