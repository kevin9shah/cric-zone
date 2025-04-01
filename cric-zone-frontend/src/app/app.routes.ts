import { Routes } from '@angular/router';
import { LiveScoreComponent } from './Component/live-score/live-score.component';
import { MatchesComponent } from './Component/matches/matches.component';
import { PointTableComponent } from './Component/point-table/point-table.component';
import { PlayersComponent } from './Component/players/players.component';
import { RankingComponent } from './Component/ranking/ranking.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';

export const routes: Routes = [
  { path: '', component: LiveScoreComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'pointtable', component: PointTableComponent },  { path: 'ranking', component: RankingComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];
