import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent implements OnInit {
  visions = [
    {
      title: 'Humanity First',
      description: 'We strive to serve those in need, providing aid and assistance.',
      icon: 'fas fa-hand-holding-heart'
    },
    {
      title: 'Medical Assistance',
      description: 'Providing first aid and health care to those in emergencies.',
      icon: 'fas fa-briefcase-medical'
    },
    {
      title: 'Blood Donation Drives',
      description: 'Encouraging voluntary blood donation to save lives.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Disaster Response',
      description: 'Rapid response teams for natural disasters and crises.',
      icon: 'fas fa-ambulance'
    },

  ];
  

  ngOnInit() {
    setTimeout(() => {
      const boxes = document.querySelectorAll('.vision-box');
      boxes.forEach((box, index) => {
        setTimeout(() => {
          box.classList.add('fade-in');
        }, index * 300);
      });
    }, 500);
  }
}
