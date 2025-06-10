import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css']
})
export class ContactCardsComponent {

  constructor(private router: Router) {}

  cards = [
    {
      title: 'Careers',
      text: 'Join our team and help shape the future.',
      image: 'assets/careers.jpg',
      route: '/careers',
      link: '#'
    },
    {
      title: 'Location',
      text: 'Find our global offices and campuses.',
      image: 'assets/location.jpg',
      route: '/location',
      link: '#'
    },
    {
      title: 'Contact Us',
      text: 'We’d love to hear from you. Reach out!',
      image: 'assets/contactus.jpg',
      route: '/contact',
      link: '#'
    }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
