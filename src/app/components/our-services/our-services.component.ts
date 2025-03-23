import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent implements OnInit, OnDestroy {
  slides = [
    { img: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-06-at-19.21.11-1-1200x554.jpeg.webp', name: 'Sh. Bandaru Dattatraya' },
    { img: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-06-at-19.24.04-1-1-800x1732.jpeg.webp', name: 'Dr. Mukesh Aggarwal' },
    { img: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-06-at-19.26.06-1-1-scaled-e1718007867476.jpeg.webp', name: 'Smt. Sushma Sharma' },
    { img: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-06-at-19.26.06-1-1200x554.jpeg.webp', name: 'Sh. Nayab Singh Saini' },
    { img: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-06-at-19.28.02-1-1200x554.jpeg.webp', name: 'Shri Ankush Miglani' }
  ];
  
  currentIndex = 0;
  autoSlideInterval: any;
  visibleSlides: any[] = [];
  slidesToShow = 4; // Default for desktop

  ngOnInit() {
    this.updateSlidesToShow();
    this.updateVisibleSlides();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSlidesToShow();
    this.updateVisibleSlides();
  }

  updateSlidesToShow() {
    this.slidesToShow = window.innerWidth <= 768 ? 1 : 4; // Show 1 image on mobile, 4 on desktop
  }

  updateVisibleSlides() {
    this.visibleSlides = this.slides.slice(this.currentIndex, this.currentIndex + this.slidesToShow);
    
    if (this.visibleSlides.length < this.slidesToShow) {
      this.visibleSlides = [...this.visibleSlides, ...this.slides.slice(0, this.slidesToShow - this.visibleSlides.length)];
    }
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateVisibleSlides();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateVisibleSlides();
  }
}
