import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SidemenuComponent } from './pages/sidemenu/sidemenu.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'principal', component:PrincipalComponent},
      {path:'side', component:SidemenuComponent},
      {path:'**', redirectTo:'principal'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
