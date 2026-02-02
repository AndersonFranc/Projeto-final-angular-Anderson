import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule], // necessário para *ngFor
  templateUrl: './games.html',
  styleUrls: ['./games.css']
})
export class GamesComponent {
  games = [
    { name: 'Game 1', genre: 'Ação' },
    { name: 'Game 2', genre: 'RPG' },
    { name: 'Game 3', genre: 'Estratégia' }
  ];

  constructor(private router: Router) {} // ✅ injetar Router

  goToreviews() {
    this.router.navigate(['/reviews']); // agora funciona
  }
}
