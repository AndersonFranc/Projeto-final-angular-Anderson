import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { GamesComponent } from './pages/games/games';
import { ReviewsComponent } from './pages/reviews/reviews';
import { SobreComponent } from './pages/sobre/sobre';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: '' }

];
