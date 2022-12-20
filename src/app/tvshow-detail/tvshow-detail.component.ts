import { Component, OnInit, Input } from '@angular/core';
import { TVShow } from '../tvshow';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.css']
})
export class TvshowDetailComponent implements OnInit {
  @Input() tvshow?: TVShow;

  constructor(
    private route: ActivatedRoute,
    private tvshowService: TvshowService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTVShow();
  }
getTVShow(): void{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.tvshowService.getTVShow(id)
  .subscribe(tvshow => this.tvshow = tvshow);
}

goBack(): void{
  this.location.back();
}
}