import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Match {
  id: number;
  teams: {
    team1: string;
    team2: string;
  };
  score: {
    team1: {
      runs: number;
      wickets: number;
      overs: number;
    };
    team2: {
      runs: number;
      wickets: number;
      overs: number;
    };
  };
  status: string;
  venue: string;
  matchType: string;
}

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent {
  matches: Match[] = [
    {
      id: 1,
      teams: {
        team1: 'India',
        team2: 'Australia'
      },
      score: {
        team1: {
          runs: 285,
          wickets: 4,
          overs: 45.2
        },
        team2: {
          runs: 156,
          wickets: 3,
          overs: 28.4
        }
      },
      status: 'In Progress',
      venue: 'Melbourne Cricket Ground',
      matchType: 'T20I'
    },
    {
      id: 2,
      teams: {
        team1: 'England',
        team2: 'South Africa'
      },
      score: {
        team1: {
          runs: 312,
          wickets: 6,
          overs: 50
        },
        team2: {
          runs: 0,
          wickets: 0,
          overs: 0
        }
      },
      status: 'Yet to Start',
      venue: 'Lords Cricket Ground',
      matchType: 'ODI'
    }
  ];
}
