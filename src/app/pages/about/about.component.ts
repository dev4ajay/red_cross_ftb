import { Component } from '@angular/core';
import { AboutRedComponent } from '../../components/about-red/about-red.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [AboutRedComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
