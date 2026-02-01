// src/app/pages/login/login.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Importa FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // importante se não estiver em um NgModule
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule] // ✅ necessário para [(ngModel)]
})
export class LoginComponent {
  email = '';
  senha = '';

  login() {
    console.log('Login:', this.email, this.senha);
    alert('Login enviado!');
  }
}
