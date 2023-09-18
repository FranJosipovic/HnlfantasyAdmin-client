import { Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  public menu = cloneDeep(MENU_ITEMS);

  constructor() {}
}
