import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component2Component } from './component-2/component-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Component2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio-3';
}
