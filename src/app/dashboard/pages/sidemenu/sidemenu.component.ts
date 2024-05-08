import { Component, inject } from '@angular/core';
import { Router } from 'express';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  // router = inject(Router)
  constructor( ) { }
  
  logout() { 
    
  }
}
