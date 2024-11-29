import { Component } from '@angular/core';
import { PdfGeneratorService } from '../services/pdf-generator.service';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private pdfGenerator: PdfGeneratorService,private pageScrollService: PageScrollService) {}
  jobs = [
    {
      title: 'Software Engineer',
      company: 'Tech Corp',
      startDate: 'Jan 2020',
      endDate: 'Present',
      responsibilities: [
        'Developed and maintained web applications.',
        'Collaborated with cross-functional teams to define and achieve project goals.',
        'Optimized application performance by refactoring code.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Web Solutions',
      startDate: 'Aug 2018',
      endDate: 'Dec 2019',
      responsibilities: [
        'Created responsive websites using modern frameworks.',
        'Managed deployment pipelines for client projects.',
        'Provided technical support and training for clients.',
      ],
    },
  ];

  selectedJob: any = null;

  openModal(job: any) {
    this.selectedJob = job;

    // Open Bootstrap modal using JavaScript
    const modalElement = document.getElementById('jobModal');
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  downloadPDF(): void {
    
    const sectionIds = ['header', 'sectionId', 'timeline','profile-picture','work-experience','skill','hobbies-section','portfolio'];
this.pdfGenerator.generatePDF(sectionIds);
  }
}
