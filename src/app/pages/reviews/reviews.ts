import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class ReviewsComponent {

  reviews = [
    { game: 'Cyber Quest', texto: 'História incrível e gráficos top.', nota: 9 },
    { game: 'Battle Core', texto: 'Multiplayer muito competitivo.', nota: 8 }
  ];

}
