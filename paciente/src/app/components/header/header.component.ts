import { Component, OnInit } from '@angular/core';

import { navbarData } from './nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  collapsed = false;

  navData = navbarData;
}
