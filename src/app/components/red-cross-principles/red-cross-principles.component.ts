import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-red-cross-principles',
  imports: [CommonModule],
  templateUrl: './red-cross-principles.component.html',
  styleUrl: './red-cross-principles.component.scss'
})
export class RedCrossPrinciplesComponent {
  activeIndex: number | null = null;

  principles = [
    {
      title: 'Humanity',
      content:
        'The International Red Cross and Red Crescent Movement, born of a desire to bring assistance without discrimination to the wounded on the battlefield, endeavors, in its international and national capacity, to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being. It promotes mutual understanding, friendship, cooperation, and lasting peace amongst all peoples.',
    },
    {
      title: 'Impartiality',
      content:
        'It makes no discrimination as to nationality, race, religious beliefs, class, or political opinions. It endeavors to relieve the suffering of individuals, being solely by their needs, and to give priority to the most urgent cases of distress.',
    },
    {
      title: 'Neutrality',
      content:
        'In order to enjoy the confidence of all, the Movement may not take sides in hostilities or engage in controversies of a political, racial, religious, or ideological nature.',
    },
    {
      title: 'Independence',
      content:
        'The Movement is independent. The National Societies, while auxiliaries in the humanitarian services of their governments and subject to the laws of their respective countries, must always maintain their autonomy so that they may be able at all times to act in accordance with the principles of the Movement.',
    },
    {
      title: 'Voluntary Service',
      content:
        'It is a voluntary relief movement not prompted in any manner by desire for gain.',
    },
    {
      title: 'Unity',
      content:
        'There can be only one Red Cross or one Red Crescent Society in any one country.',
    },
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
