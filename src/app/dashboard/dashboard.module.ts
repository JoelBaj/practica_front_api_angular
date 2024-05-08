import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuComponent } from '../shared/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './pages/sidemenu/sidemenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class DashboardModule { }
