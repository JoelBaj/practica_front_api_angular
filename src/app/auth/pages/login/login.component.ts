import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../dashboard/models/Usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  usuario:Usuario[]=[];

  miFormulario: FormGroup = this.fb.group({
    usuario:['admin', [Validators.required]],
    password:['admin', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private router:Router,
    private authService: AuthService) { 

  }
  
  ngOnInit(): void { 
    this.listarUsuarios();
   }

  Iniciar() {
    
      this.router.navigate(['/dash/principal']);  
      
  }

  listarUsuarios(){
    this.authService.getlist().subscribe(
     usuario => {
      this.usuario = usuario
      console.log(this.usuario);
      
    }
    )
  }
}
