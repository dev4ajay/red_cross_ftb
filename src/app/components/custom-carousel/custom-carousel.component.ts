import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  imports: [CommonModule],
  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.scss',
})
export class CustomCarouselComponent {
  images = [
    {
      src: 'assets/image1.jpg',
      name: 'Shri Vijay Khatri',
      position: 'Vice Chairman - Indian Red Cross Society, Rajasthan',
    },
    {
      src: 'assets/image1.jpg',
      name: 'Shri Jagdish Jindal',
      position: 'General Secretary - Indian Red Cross Society, Rajasthan',
    },
    {
      src: 'assets/image1.jpg',
      name: 'Shri Ramesh Mundra',
      position: 'Treasurer - Indian Red Cross Society, Rajasthan',
    },
    {
      src: 'assets/image1.jpg',
      name: 'Smt. Draupadi Murmu',
      position:
        "Hon'ble President of India - Indian Red Cross Society, New Delhi",
    },
  ];

  currentIndex = 0;
  visibleSlides = 3;

  nextSlide() {
    if (this.currentIndex < this.images.length - this.visibleSlides) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - this.visibleSlides;
    }
  }
}
