import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activities',
  imports: [CommonModule ,RouterLink],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  activities = [
    {
      title: 'World Redcross Day',
      date: 'May 8, 2024',
      image: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/Khandelwal-3.jpeg.webp'
    },
    {
      title: 'Blood Donation Camp – Fatehabad',
      date: 'May 12, 2024',
      image: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/Kota-Bd2.jpeg.webp'
    },
    {
      title: 'Blood Donation Camp – Fatehabad',
      date: 'March 28, 2024',
      image: 'https://redcrossrajasthan.in/wp-content/uploads/2024/06/Jhalawar-28-mar-56-unit.jpeg'
    }
  ];

}
