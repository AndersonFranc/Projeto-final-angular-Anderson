import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true, // se não estiver em um módulo
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class ReviewsComponent {
  reviews = [
    { user: 'Anderson', text: 'Ótimo jogo!' },
    { user: 'Maria', text: 'Gostei muito!' }
  ];
}
