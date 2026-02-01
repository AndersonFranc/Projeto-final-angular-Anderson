import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Main } from './component/main/main';
import { Footer } from './component/footer/footer';
import { LoginComponent } from './pages/login/login'; 

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer, LoginComponent, RouterOutlet], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('Projeto-final-angular-Anderson');
}
