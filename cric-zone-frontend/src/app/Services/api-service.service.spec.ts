import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private isAuthenticated = false; // Tracks login state

  constructor() {
    // Check if user was previously logged in
    const savedAuthState = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = savedAuthState === 'true';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  login(): void {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true'); // Save state
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated'); // Clear state
  }
}
