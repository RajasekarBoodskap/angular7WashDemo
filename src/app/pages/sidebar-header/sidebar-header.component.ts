import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styles: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
