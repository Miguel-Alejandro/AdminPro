import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    NoPageFoundComponent,
    ProgressComponent,
    Grafica1Component,
    AccountSettingsComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],

  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AccountSettingsComponent,
    FormsModule,
  ]
})
export class PagesModule { }
