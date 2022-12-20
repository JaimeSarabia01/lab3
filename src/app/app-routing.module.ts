import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvshowComponent } from './tvshow/tvshow.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
const routes:Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tvshows', component: TvshowComponent},
  {path: 'detail/:id', component: TvshowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
