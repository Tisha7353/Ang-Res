import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent {
  hobbies = ['Reading', 'Gardening', 'Photography', 'Traveling'];
  showHobbies = false; // Controls visibility
 
  timeline = [
    { date: '2022-01-01', title: 'Event 1', description: 'Description of Event 1' },
    { date: '2022-02-01', title: 'Event 2', description: 'Description of Event 2' },
    { date: '2022-03-01', title: 'Event 3', description: 'Description of Event 3' },
  ];

  selectedEventIndex: number | null = null;

  // Select the event and show its details
  selectEvent(event: any, index: number): void {
    // Toggle visibility of event details
    this.selectedEventIndex = this.selectedEventIndex === index ? null : index;
  }

  // Close the event details view
  clearSelection(): void {
    this.selectedEventIndex = null;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}
