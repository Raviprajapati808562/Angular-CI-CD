import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [MatToolbarModule,MatIconModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
