import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  senha = '';

  login() {
    console.log('Login:', this.email, this.senha);
    alert('Login enviado!');
  }

}
