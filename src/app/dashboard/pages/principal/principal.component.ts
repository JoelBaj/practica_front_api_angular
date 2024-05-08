import { Component } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [SidemenuComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
