import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.html',
  styleUrls: ['./games.css']
})
export class GamesComponent {

  games = [
    { nome: 'Cyber Quest', genero: 'RPG', plataforma: 'PC' },
    { nome: 'Speed Night', genero: 'Corrida', plataforma: 'PS5' },
    { nome: 'Battle Core', genero: 'FPS', plataforma: 'Xbox' },
    { nome: 'Mystic Land', genero: 'Aventura', plataforma: 'PC' }
  ];

}
