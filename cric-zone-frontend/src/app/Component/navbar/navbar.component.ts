import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true, // Important!
  imports:[RouterLink,RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private service: ApiServiceService){}
  
  isLoggedIn()  :boolean{
    return this.service.isLoggedIn();
  }
 }
