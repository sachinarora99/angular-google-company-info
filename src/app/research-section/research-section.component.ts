import { Component } from '@angular/core';

@Component({
  selector: 'app-research-section',
  templateUrl: './research-section.component.html',
  styleUrls: ['./research-section.component.css']
})
export class ResearchSectionComponent {
  researchCards = [
    {
      title: 'Google DeepMind',
      image: 'assets/deepmind.jpg',
      link: '#'
    },
    {
      title: 'Google Research',
      image: 'assets/deepmind1.jpg',
      link: '#'
    }
  ];
}
