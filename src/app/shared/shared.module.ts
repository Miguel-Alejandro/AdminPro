import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],

  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    SidenavComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }
