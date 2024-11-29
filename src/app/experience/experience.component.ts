
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  jobs = [
    {
      title: 'Angular Developer',
      company: 'Umbrella Room Ventures Private Limited',
      startDate: 'Oct 2024',
      endDate: 'Present',
      responsibilities: [
        'Developed and maintained web applications.',
        'Collaborated with cross-functional teams to define and achieve project goals.',
        'Optimized application performance by refactoring code.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'We Frame Tech',
      startDate: 'Jan 2024',
      endDate: 'May 2024',
      responsibilities: [
        'Created responsive websites using modern frameworks.',
        'Managed deployment pipelines for client projects.',
        'Provided technical support and training for clients.',
      ],
    },
  ];

  selectedJob: any = null;

  @ViewChild('jobModal') jobModal: ElementRef | undefined;

  openModal(job: any) {
    this.selectedJob = job;

    // Open Bootstrap modal using JavaScript
    const modalElement = this.jobModal?.nativeElement;
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeModalOnClickOutside(event: MouseEvent) {
    const modalElement = this.jobModal?.nativeElement;
    if (modalElement && !modalElement.contains(event.target as Node)) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.hide();
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelector('.work-experience')?.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );
  
    const target = document.querySelector('.work-experience');
    if (target) observer.observe(target);
  }
  

  ngOnDestroy() {
    // Remove the event listener when the component is destroyed
    document.body.removeEventListener('click', (event: MouseEvent) => this.closeModalOnClickOutside(event));
  }
}
