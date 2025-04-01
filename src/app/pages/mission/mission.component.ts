import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-mission',
  imports: [CommonModule,],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent {
  // Mission Details
  missions = [
    {
      icon: '🚑',
      title: 'Emergency Response',
      description: 'Quick assistance in disasters, accidents, and crises.',
    },
    {
      icon: '🩸',
      title: 'Blood Donation',
      description: 'Organizing blood donation camps to save lives.',
    },
    {
      icon: '💖',
      title: 'Health & Medical Aid',
      description: 'Providing healthcare and first aid training.',
    },
    {
      icon: '📚',
      title: 'Community Welfare',
      description: 'Helping senior citizens, children, and differently-abled.',
    },
 
  ];

  constructor(private router :Router){}
  // Join Button Action
  joinNow() {
this.router.navigate(['/join-now'])
    alert('Thank you for joining the Red Cross Fatehabad Mission! ❤️');
  }
}
