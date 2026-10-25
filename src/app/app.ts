import { Component, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Footer} from './mycomponent/footer/footer';

@Component({
  selector: 'app-rootmain',
  standalone: true,
  imports: [ MatButtonModule, MatSnackBarModule, MatButtonToggleModule
    , RouterOutlet,MatToolbarModule,MatIconModule,MatProgressSpinnerModule, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly _title = signal('Transaction Management System');
  protected get title() {
    return this._title;
  }
}
