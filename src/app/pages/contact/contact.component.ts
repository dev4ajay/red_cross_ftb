import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail: string = "drcsftb@rediffmail.com";
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert(`Thank you ${this.contact.name}, your message has been sent!`);
      this.contact = { name: '', email: '', message: '' }; // Reset form after submission
    } else {
      alert('Please fill all fields before submitting.');
    }
  }
}
