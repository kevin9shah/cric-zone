import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Team {
  name: string;
  played: number;
  won: number;
  lost: number;
  draw: number;
  points: number;
  nrr: number;
}

interface League {
  name: string;
  teams: Team[];
}

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {
  selectedLeague: string = 'IPL 2024';
  leagues: League[] = [
    {
      name: 'IPL 2024',
      teams: [
        { name: 'Gujarat Titans', played: 8, won: 7, lost: 1, draw: 0, points: 14, nrr: 0.698 },
        { name: 'Kolkata Knight Riders', played: 7, won: 5, lost: 2, draw: 0, points: 10, nrr: 1.206 },
        { name: 'Chennai Super Kings', played: 7, won: 4, lost: 3, draw: 0, points: 8, nrr: 0.529 },
        { name: 'Sunrisers Hyderabad', played: 7, won: 4, lost: 3, draw: 0, points: 8, nrr: 0.314 },
        { name: 'Lucknow Super Giants', played: 7, won: 4, lost: 3, draw: 0, points: 8, nrr: 0.123 },
        { name: 'Mumbai Indians', played: 7, won: 2, lost: 5, draw: 0, points: 6, nrr: -0.133 },
        { name: 'Delhi Capitals', played: 8, won: 3, lost: 5, draw: 0, points: 6, nrr: -0.477 },
        { name: 'Rajasthan Royals', played: 7, won: 7, lost: 0, draw: 0, points: 6, nrr: -0.538 },
        { name: 'Punjab Kings', played: 7, won: 2, lost: 5, draw: 0, points: 4, nrr: -0.251 },
        { name: 'Royal Challengers Bangalore', played: 8, won: 1, lost: 7, draw: 0, points: 2, nrr: -1.046 }
      ]
    },
    {
      name: 'T20 World Cup 2024',
      teams: [
        { name: 'India', played: 3, won: 3, lost: 0, draw: 0, points: 6, nrr: 1.137 },
        { name: 'Australia', played: 3, won: 2, lost: 1, draw: 0, points: 4, nrr: 0.876 },
        { name: 'England', played: 3, won: 2, lost: 1, draw: 0, points: 4, nrr: 0.633 },
        { name: 'South Africa', played: 3, won: 2, lost: 1, draw: 0, points: 4, nrr: 0.521 },
        { name: 'New Zealand', played: 3, won: 2, lost: 1, draw: 0, points: 4, nrr: 0.412 },
        { name: 'Pakistan', played: 3, won: 1, lost: 2, draw: 0, points: 2, nrr: -0.234 },
        { name: 'Sri Lanka', played: 3, won: 1, lost: 2, draw: 0, points: 2, nrr: -0.456 },
        { name: 'West Indies', played: 3, won: 1, lost: 2, draw: 0, points: 2, nrr: -0.678 }
      ]
    }
  ];

  currentLeague: League | null = null;

  constructor() { }

  ngOnInit(): void {
    // Sort teams by points and NRR
    this.leagues.forEach(league => {
      league.teams.sort((a, b) => {
        if (b.points !== a.points) {
          return b.points - a.points;
        }
        return b.nrr - a.nrr;
      });
    });
    
    // Set the initial league
    this.updateCurrentLeague();
  }

  updateCurrentLeague() {
    this.currentLeague = this.leagues.find(league => league.name === this.selectedLeague) || null;
  }

  onLeagueChange() {
    this.updateCurrentLeague();
  }
}