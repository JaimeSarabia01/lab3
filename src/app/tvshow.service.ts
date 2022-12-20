import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TVShow } from './tvshow';
import { TVSHOWS } from './mock-tvshows';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private messageService: MessageService) { }

  getTVShows(): Observable<TVShow[]> { 
    const tvshows = of(TVSHOWS);
    this.messageService.add('TVShowService: fetched tvshows');
    return tvshows;
  }

  getTVShow(id: number): Observable<TVShow> { 
  const tvshow = TVSHOWS.find(h => h.id === id)!;
  this.messageService.add('TVShowService: fetched tvshows');
  return of(tvshow);
}

  
}
