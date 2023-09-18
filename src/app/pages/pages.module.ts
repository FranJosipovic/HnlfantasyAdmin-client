import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {
  NbActionsModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbToggleModule,
} from '@nebular/theme';
import { PlayersComponent } from './players/players.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatchdaysComponent } from './matchdays/matchdays.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  declarations: [PagesComponent, PlayersComponent, MatchdaysComponent, ClubsComponent],
  imports: [
    PagesRoutingModule,
    NbSidebarModule,
    NbLayoutModule,
    NbIconModule,
    NbActionsModule,
    MatMenuModule,
    MatIconModule,
    NbToggleModule,
    NbMenuModule,
    SharedModule,
  ],
  providers: [],
})
export class PagesModule {}
