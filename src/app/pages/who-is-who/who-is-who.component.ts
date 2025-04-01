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
      name: 'Mandeep Kaur, IAS',
      position: 'Deputy Commissioner -cum- President',
      image: 'assets/mandeep.jpeg',
      bio: 'I am very happy to know that the District Red Cross Society, Faridabad has started its website to reach out to the people of Red Cross activities. The People living thousands of miles away can know the smallest thing of the world and the bigger can also be learned through the website in the era of Digital India. ',
    },
    {
      name: 'Sh.Ramji Lal',
      position: 'Secretary',
      image: 'assets/RamjiLal.jpg',
      bio: 'It is very great pleasure for us to launch the website of District Red Cross Society Fatehabad.This website will be a very useful tool for the effective working of Red Cross and St. John.',
    },
    {
      name: 'Sh.Surender Chugh',
      position: 'Dy Superintendent',
      image: 'assets/surender.jpg',
      bio: 'Red Cross alleviates human suffering, upholds dignity, and protects life. It prevents disasters like floods and epidemics while promoting impartiality, humanity, and unity. It also organizes blood donation camps, disability support, first aid training, and vocational programs',
    },
  ];
}
