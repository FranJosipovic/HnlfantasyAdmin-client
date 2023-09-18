import { Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private sidebarService: NbSidebarService,
    private nbThemeService: NbThemeService
  ) {}

  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

  toggleTheme() {
    if (this.nbThemeService.currentTheme == 'default') {
      this.nbThemeService.changeTheme('dark');
    } else {
      this.nbThemeService.changeTheme('default');
    }
    console.log(this.nbThemeService.currentTheme);
  }
}
