import { Component, OnInit } from '@angular/core';
import {TVShow} from '../tvshow';
import { TVSHOWS } from '../mock-tvshows';
import { TvshowService } from '../tvshow.service';
import { MessageService } from '../message.service';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent implements OnInit {

selectedTVShow?: TVShow;

tvshows: TVShow[] = [];

  constructor(private tvshowService: TvshowService, private messageService: MessageService) {}


  ngOnInit(): void {
    this.getTVShows(); 
  }

  getTVShows(): void{
   this.tvshowService.getTVShows()
   .subscribe(tvshows => this.tvshows = tvshows);
  }
}
