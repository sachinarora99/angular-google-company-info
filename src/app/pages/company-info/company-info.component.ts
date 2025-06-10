import { Component } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent {
  images: string[] = [
    'assets/img1.jpeg',
    'assets/img2.jpeg',
    'assets/img3.jpeg',
    'assets/img4.jpeg',
    'assets/img5.jpeg',
    'assets/img6.jpeg',
    'assets/img7.jpeg',
    'assets/img8.jpeg'
  ];
}
