
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', rating: 4, ratingText: 'Intermediate' },
    { name: 'CSS', rating: 4, ratingText: 'Intermediate' },
    { name: 'Angular', rating: 5, ratingText: 'Advanced' },
  ];

  hoveredSkill: any = null; // To track the skill being hovered over
  selectedSkill: any = null; // To track the skill being clicked on

  // Method to show the rating when hovering over the skill
  showRating(skill: any): void {
    this.hoveredSkill = skill;
  }

  // Method to hide the rating when the hover ends
  hideRating(): void {
    this.hoveredSkill = null;
  }

  // Method to toggle the detailed rating on click
  toggleRating(skill: any): void {
    if (this.selectedSkill === skill) {
      this.selectedSkill = null; // Deselect if the same skill is clicked again
    } else {
      this.selectedSkill = skill;
    }
  }

}
