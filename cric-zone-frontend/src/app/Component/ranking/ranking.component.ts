import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Player {
  name: string;
  country: string;
  rating: number;
  position: number;
  matches: number;
  runs: number;
  wickets: number;
  average: number;
  strikeRate: number;
  image: string;
}

interface Format {
  name: string;
  players: Player[];
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent implements OnInit {
  selectedFormat: string = 'Test';
  formats: Format[] = [
    {
      name: 'Test',
      players: [
        {
          name: 'Kane Williamson',
          country: 'New Zealand',
          rating: 893,
          position: 1,
          matches: 94,
          runs: 8124,
          wickets: 29,
          average: 54.89,
          strikeRate: 52.44,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468132'
        },
        {
          name: 'Joe Root',
          country: 'England',
          rating: 859,
          position: 2,
          matches: 137,
          runs: 11416,
          wickets: 60,
          average: 50.29,
          strikeRate: 55.12,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468133'
        },
        {
          name: 'Steve Smith',
          country: 'Australia',
          rating: 818,
          position: 3,
          matches: 105,
          runs: 9514,
          wickets: 19,
          average: 58.01,
          strikeRate: 54.23,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468134'
        }
      ]
    },
    {
      name: 'ODI',
      players: [
        {
          name: 'Virat Kohli',
          country: 'India',
          rating: 889,
          position: 1,
          matches: 292,
          runs: 13848,
          wickets: 4,
          average: 58.97,
          strikeRate: 93.62,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468135'
        },
        {
          name: 'Babar Azam',
          country: 'Pakistan',
          rating: 824,
          position: 2,
          matches: 117,
          runs: 5729,
          wickets: 0,
          average: 56.66,
          strikeRate: 89.23,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468136'
        },
        {
          name: 'Rohit Sharma',
          country: 'India',
          rating: 801,
          position: 3,
          matches: 262,
          runs: 10709,
          wickets: 8,
          average: 49.12,
          strikeRate: 90.97,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468137'
        }
      ]
    },
    {
      name: 'T20I',
      players: [
        {
          name: 'Suryakumar Yadav',
          country: 'India',
          rating: 889,
          position: 1,
          matches: 60,
          runs: 2141,
          wickets: 0,
          average: 44.60,
          strikeRate: 171.55,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468138'
        },
        {
          name: 'Phil Salt',
          country: 'England',
          rating: 802,
          position: 2,
          matches: 25,
          runs: 778,
          wickets: 0,
          average: 35.36,
          strikeRate: 169.43,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468139'
        },
        {
          name: 'Muhammad Rizwan',
          country: 'Pakistan',
          rating: 796,
          position: 3,
          matches: 85,
          runs: 2797,
          wickets: 0,
          average: 49.07,
          strikeRate: 127.30,
          image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468140'
        }
      ]
    }
  ];

  currentFormat: Format | null = null;

  constructor() {
    this.updateCurrentFormat();
  }

  ngOnInit(): void {
    // Sort players by rating
    this.formats.forEach(format => {
      format.players.sort((a, b) => b.rating - a.rating);
    });
  }

  updateCurrentFormat() {
    this.currentFormat = this.formats.find(format => format.name === this.selectedFormat) || null;
  }

  onFormatChange() {
    this.updateCurrentFormat();
  }
}
