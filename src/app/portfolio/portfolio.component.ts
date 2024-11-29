import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolio = [
    {
      title: 'Project One',
      description: 'A web application built with Angular and Node.js.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGcI6K196MUHbF3n5tSwRAmVqaeEojdMF1Q&s',
    },
    {
      title: 'Project One',
      description: 'A web application built with Angular and Node.js.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGcI6K196MUHbF3n5tSwRAmVqaeEojdMF1Q&s',
    },
    {
      title: 'Project Two',
      description: 'A mobile app developed using Flutter.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGcI6K196MUHbF3n5tSwRAmVqaeEojdMF1Q&s',
    },
    {
      title: 'Project Three',
      description: 'A data visualization project using D3.js.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGcI6K196MUHbF3n5tSwRAmVqaeEojdMF1Q&s',
    },
  ];
}
