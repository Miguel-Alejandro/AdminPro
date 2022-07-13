import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public menuItem:any[];

  constructor( private sienavSrv:SidenavService ) { 
    this.menuItem = this.sienavSrv.menu;
  }

  ngOnInit(): void {
  }

}
