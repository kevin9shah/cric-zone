import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Player {
  name: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  age: number;
  image: string;
}

interface Team {
  name: string;
  flag: string;
  players: Player[];
}

interface Category {
  name: string;
  teams: Team[];
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {
  selectedCategory: string = 'Men';
  categories: Category[] = [
    {
      name: 'Men',
      teams: [
        {
          name: 'India',
          flag: 'https://media.cricbuzz.com/cricket-flags-new/IND.svg',
          players: [
            {
              name: 'Rohit Sharma',
              role: 'Batsman',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm off break',
              age: 36,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468137'
            },
            {
              name: 'Virat Kohli',
              role: 'Batsman',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm medium',
              age: 35,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468135'
            },
            {
              name: 'Jasprit Bumrah',
              role: 'Bowler',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm fast',
              age: 30,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468141'
            },
            {
              name: 'Ravindra Jadeja',
              role: 'All-rounder',
              battingStyle: 'Left-handed',
              bowlingStyle: 'Left-arm orthodox',
              age: 35,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468147'
            },
            {
              name: 'KL Rahul',
              role: 'Batsman',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm medium',
              age: 31,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468148'
            }
          ]
        },
        {
          name: 'Australia',
          flag: 'https://media.cricbuzz.com/cricket-flags-new/AUS.svg',
          players: [
            {
              name: 'Steve Smith',
              role: 'Batsman',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm leg break',
              age: 34,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468134'
            },
            {
              name: 'Pat Cummins',
              role: 'Bowler',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm fast',
              age: 30,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468142'
            },
            {
              name: 'David Warner',
              role: 'Batsman',
              battingStyle: 'Left-handed',
              bowlingStyle: 'Right-arm leg break',
              age: 37,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468149'
            },
            {
              name: 'Mitchell Starc',
              role: 'Bowler',
              battingStyle: 'Left-handed',
              bowlingStyle: 'Left-arm fast',
              age: 34,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468150'
            },
            {
              name: 'Glenn Maxwell',
              role: 'All-rounder',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm off break',
              age: 35,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468151'
            }
          ]
        }
      ]
    },
    {
      name: 'Women',
      teams: [
        {
          name: 'India',
          flag: 'https://media.cricbuzz.com/cricket-flags-new/IND.svg',
          players: [
            {
              name: 'Harmanpreet Kaur',
              role: 'All-rounder',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm off break',
              age: 34,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468143'
            },
            {
              name: 'Smriti Mandhana',
              role: 'Batsman',
              battingStyle: 'Left-handed',
              bowlingStyle: 'Right-arm leg break',
              age: 27,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468144'
            },
            {
              name: 'Jemimah Rodrigues',
              role: 'Batsman',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm off break',
              age: 23,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468152'
            },
            {
              name: 'Renuka Singh',
              role: 'Bowler',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm medium',
              age: 27,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468153'
            },
            {
              name: 'Deepti Sharma',
              role: 'All-rounder',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm off break',
              age: 26,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468154'
            }
          ]
        },
        {
          name: 'Australia',
          flag: 'https://media.cricbuzz.com/cricket-flags-new/AUS.svg',
          players: [
            {
              name: 'Meg Lanning',
              role: 'Batsman',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm medium',
              age: 31,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468145'
            },
            {
              name: 'Ellyse Perry',
              role: 'All-rounder',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm fast',
              age: 33,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468146'
            },
            {
              name: 'Alyssa Healy',
              role: 'Wicket-keeper',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm medium',
              age: 33,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468155'
            },
            {
              name: 'Ashleigh Gardner',
              role: 'All-rounder',
              battingStyle: 'Right-handed',
              bowlingStyle: 'Right-arm off break',
              age: 26,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468156'
            },
            {
              name: 'Beth Mooney',
              role: 'Batsman',
              battingStyle: 'Left-handed',
              bowlingStyle: 'Right-arm medium',
              age: 29,
              image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/ds/photo/2024/02/14/3/7468157'
            }
          ]
        }
      ]
    }
  ];

  currentCategory: Category | null = null;

  constructor() {
    this.updateCurrentCategory();
  }

  ngOnInit(): void {}

  updateCurrentCategory() {
    this.currentCategory = this.categories.find(category => category.name === this.selectedCategory) || null;
  }

  onCategoryChange() {
    this.updateCurrentCategory();
  }
}
