import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class CarouselComponent {
  images: string[] = ['https://media.istockphoto.com/id/2157081569/photo/emergency-medical-team-attending-to-a-patient-outdoors.jpg?s=612x612&w=0&k=20&c=JEI_x-qjjuV799xv_kyqlww0DjeTLfGVP4pcDcvhBv8=', 'https://media.istockphoto.com/id/1390440589/photo/may-8th-world-red-cross-symbol-with-globe-on-white-background-and-red-paper-people-low-poly.jpg?s=612x612&w=0&k=20&c=Ia8e3CsBc7z1xQk0FJaD50szngTrvzFPFmA4tqmOUDI=' ,'https://media.istockphoto.com/id/475997666/photo/rescue-team-providing-first-aid.jpg?s=612x612&w=0&k=20&c=-ivZn1IoUTNuzYwf-MTW1rRkGmWU0AzCAfCuJW96FZo=' ,'https://media.istockphoto.com/id/450087517/photo/portrait-of-a-paramedic-worker-in-front-an-opened-ambulance.jpg?s=612x612&w=0&k=20&c=sB5tr1Xc0pyn0nXdVjhGWwCo0gItle7wYyzX4hZGdSA=' ,'https://media.istockphoto.com/id/459163341/photo/medical-emergency-team-in-the-ambulance.jpg?s=612x612&w=0&k=20&c=Ob_C0qx1hw2zfRxJlVf4yv50mZsU2kbhuW1aOKnWqKg='];
}
