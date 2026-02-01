import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  email = '';
  senha = '';

  login(loginForm: any) {
    if (loginForm.valid) {
      console.log('Login enviado:', this.email, this.senha);
      alert('Login enviado com sucesso!');
    } else {
      console.log('Formulário inválido');
      alert('Por favor, preencha corretamente todos os campos!');
    }
  }
}
