import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private service: ApiServiceService,
    private router: Router
  ){}
  
  isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }

  login() {
    console.log('Login clicked'); // Debug log
    this.router.navigate(['/login']).then(() => {
      console.log('Navigation completed'); // Debug log
    }).catch(err => {
      console.error('Navigation failed:', err); // Debug log
    });
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/']);
  }
}
