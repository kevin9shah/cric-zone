import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private loggedInKey = "loggedIn";

  constructor() { }

  login() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.loggedInKey, 'true');
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.loggedInKey);
    }
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.loggedInKey) === 'true';
    }
    return true;
  }
}