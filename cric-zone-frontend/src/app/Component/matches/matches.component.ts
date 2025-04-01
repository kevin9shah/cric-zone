import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MatchesComponent {
  selectedFilter: string = 'all';

  matches = [
    { matchType: 'T20I', teams: { team1: 'India', team2: 'Australia' }, score: { team1: { runs: 180, wickets: 5, overs: 20 }, team2: { runs: 175, wickets: 6, overs: 20 } }, venue: 'Mumbai', date: 'April 10, 2025', time: '7:00 PM', status: 'Completed' },
    { matchType: 'IPL', teams: { team1: 'CSK', team2: 'MI' }, score: { team1: { runs: 200, wickets: 3, overs: 20 }, team2: { runs: 180, wickets: 7, overs: 20 } }, venue: 'Chennai', date: 'April 12, 2025', time: '8:00 PM', status: 'In Progress' },
    { matchType: 'Domestic', teams: { team1: 'Delhi', team2: 'Bangalore' }, score: { team1: { runs: 250, wickets: 8, overs: 50 }, team2: { runs: 220, wickets: 9, overs: 50 } }, venue: 'Delhi', date: 'April 14, 2025', time: '5:00 PM', status: 'Completed' },
    { matchType: 'T20I', teams: { team1: 'England', team2: 'Pakistan' }, score: { team1: { runs: 170, wickets: 4, overs: 20 }, team2: { runs: 165, wickets: 6, overs: 20 } }, venue: 'London', date: 'April 16, 2025', time: '6:30 PM', status: 'Upcoming' }
  ];

  filteredMatches = [...this.matches];

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    this.filteredMatches = filter === 'all' ? [...this.matches] : this.matches.filter(match => match.matchType === filter);
  }

  getStatusClass(status: string): string {
    return status === 'In Progress' ? 'bg-danger' : 'bg-light text-dark';
  }
}
