import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  devwaresLinks = [
    { label: 'Resources', url: '/' },
    { label: 'About Us', url: '/' },
    { label: 'Contact', url: '/' },
    { label: 'Blog', url: '/' },
  ];

  helpLinks = [
    { label: 'Support', url: '/' },
    { label: 'Sign Up', url: '/' },
    { label: 'Sign In', url: '/' },
  ];

  productLinks = [
    { label: 'Windframe', url: '/' },
    { label: 'Loop', url: '/' },
    { label: 'Contrast', url: '/' },
  ];

  socialIcons = [
    { class: 'fab fa-facebook-f' },
    { class: 'fab fa-twitter' },
    { class: 'fab fa-instagram' },
  ];
}
