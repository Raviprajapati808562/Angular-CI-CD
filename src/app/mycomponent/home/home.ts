
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  sidebarOpen: boolean = true;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
