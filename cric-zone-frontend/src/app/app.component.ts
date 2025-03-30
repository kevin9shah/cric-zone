import { Component } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component';  // Correct import path
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [NavbarComponent,RouterOutlet],  // Add NavbarComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
