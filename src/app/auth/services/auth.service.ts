import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario} from '../../dashboard/models/Usuario';
@Injectable({
  
  providedIn: 'root'
  
})

export class AuthService {

// private http = inject(HttpClient)

  constructor(private http:HttpClient){}

  getlist():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/api/v1/usuarios');
  }

}
