import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule  ,FormsModule ,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail: string ="contact@redcross.org"
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert(`Thank you ${this.contact.name}, your message has been sent!`);
    this.contact = { name: '', email: '', message: '' }; // Reset form after submission
  }
}
