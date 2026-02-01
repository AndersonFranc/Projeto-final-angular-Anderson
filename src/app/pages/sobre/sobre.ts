import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule], // ✅ necessário para *ngFor
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css']
})

  

export class SobreComponent {}

