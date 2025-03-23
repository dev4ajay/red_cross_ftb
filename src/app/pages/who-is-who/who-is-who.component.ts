import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-who-is-who',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './who-is-who.component.html',
  styleUrl: './who-is-who.component.scss'
})
export class WhoIsWhoComponent {
  slides = [
    { img: 'https://haryanaredcross.in/images_assets/governer.png', name: 'Sh. Bandaru Dattatraya' },
    { img: 'https://haryanaredcross.in/images_assets/newgeneralsectary.png', name: 'Dr.Mukesh Aggarwal ' },
    { img: 'https://haryanaredcross.in/images_assets/treasure.png', name: 'Smt. Sushma Sharma' },
    { img: 'https://haryanaredcross.in/images_assets/cm.jpg', name: 'Sh. Nayab Singh Saini' },
    { img: 'https://haryanaredcross.in/images_assets/vice_chairaman.png', name: 'Shri Ankush Miglani ' }
  ];

  currentIndex = 0;
  autoSlideInterval: any;
  slidesToShow = 4; // Default: Show 4 slides for desktop

  ngOnInit() {
    this.updateSlidesToShow(); // Check screen size on load
    this.startAutoSlide();
  }

  /** ✅ Adjust visible slides based on screen size */
  @HostListener('window:resize', [])
  updateSlidesToShow() {
    this.slidesToShow = window.innerWidth <= 768 ? 1 : 4; // Mobile: 1 slide, Desktop: 4 slides
  }

  get visibleSlides() {
    return this.slides.slice(this.currentIndex, this.currentIndex + this.slidesToShow);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    if (this.currentIndex + this.slidesToShow < this.slides.length) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - this.slidesToShow;
    }
  }
  teamMembers = [
    {
      name: 'John Doe',
      position: 'Chairman',
      image: 'https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Leading humanitarian efforts worldwide.'
    },
    {
      name: 'Jane Smith',
      position: 'Secretary',
      image: 'https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Ensuring smooth operations and coordination.'
    },
    {
      name: 'Mike Johnson',
      position: 'Director',
      image: 'https://plus.unsplash.com/premium_photo-1679429320552-ec9038ccd550?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW18ZW58MHx8MHx8fDA%3D',
      bio: 'Overseeing all health and emergency services.'
    }
  ];
}
