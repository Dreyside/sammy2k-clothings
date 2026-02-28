import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule],
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent {}

