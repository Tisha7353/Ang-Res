import { Component, OnInit } from '@angular/core';
import 'intersection-observer';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = [
    { degree: 'Computer Science', institution: 'Guru Jambeshwar University Of Science & Technology', graduationDate: '2022 - Present' }
  ];

  ngOnInit() {
    // Intersection Observer to detect when the education section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add 'in-view' class when the section is visible
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    // Target the education section for animation
    const educationSection = document.querySelector('.education');
    if (educationSection) {
      observer.observe(educationSection); // Start observing the section
    }
  }
}
