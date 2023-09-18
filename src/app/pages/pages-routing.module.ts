import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PlayersComponent } from './players/players.component';
import { MatchdaysComponent } from './matchdays/matchdays.component';
import { ClubsComponent } from './clubs/clubs.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'players', component: PlayersComponent },
      { path: 'matchdays', component: MatchdaysComponent },
      { path: 'clubs', component: ClubsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
