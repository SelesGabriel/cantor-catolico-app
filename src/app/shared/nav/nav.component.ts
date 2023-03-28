import { Component, OnInit } from '@angular/core';
import { faCoffee,faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  isCollapsed = true;

  faCoffee = faCoffee;
  faSearch = faSearch;
  ngOnInit() {}
}
