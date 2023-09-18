import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NbActionsModule, NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [HeaderComponent],
  imports: [NbActionsModule, MatIconModule, MatMenuModule, NbIconModule],
  providers: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
