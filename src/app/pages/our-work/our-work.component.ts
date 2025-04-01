import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-work',
  imports: [CommonModule, ],
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent {
  works = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1664299503603-237d266dc7cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlZCUyMGNyb3NzfGVufDB8fDB8fHww',
      title: 'Tech Innovation',
      description: 'Building the future with advanced technology solutions.'
    },
    {
      image: 'https://media.istockphoto.com/id/2157081569/photo/emergency-medical-team-attending-to-a-patient-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=HgR3-c1bCJ3f6P-OVWXFTIXTtoSFe_qoGQStT4lTycg=',
      title: 'Education',
      description: 'Empowering the next generation through quality education.'
    },
    {
      image: 'https://media.istockphoto.com/id/471886447/photo/rescue-team-save-lives.webp?a=1&b=1&s=612x612&w=0&k=20&c=wYJLVljJmyf8Q8NI2MS7_6sieIkBG72vhxTrRua7fog=',
      title: 'Healthcare',
      description: 'Providing medical assistance to those in need.'
    },
    {
      image: 'https://media.istockphoto.com/id/872749478/photo/a-group-of-young-children-learning-about-first-aid.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kq5jdnfiWH88Vy2PXQQ2BPWajqEib_Y7_at7o6ddeEQ=',
      title: 'Business Growth',
      description: 'Helping businesses scale and innovate.'
    }
  ];
}
