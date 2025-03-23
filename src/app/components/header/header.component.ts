import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('navbarNav', { static: false }) navbarNav!: ElementRef;

  closeNavbar() {
    const navbar = this.navbarNav.nativeElement;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
