
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  references = [
    {
      quote: 'John is a highly skilled professional with a keen eye for detail.',
      name: 'Jane Doe',
      position: 'Project Manager, XYZ Company'
    },
    {
      quote: 'A true leader who motivates the team and drives results.',
      name: 'Mike Smith',
      position: 'CEO, ABC Corp'
    },
    {
      quote: 'Exceptional communication skills and a great problem solver.',
      name: 'Sarah Lee',
      position: 'Head of Marketing, DEF Ltd'
    },
    {
      quote: 'Exceptional communication skills and a great problem solver.',
      name: 'Sarah Lee',
      position: 'Head of Marketing, DEF Ltd'
    },
    {
      quote: 'Exceptional communication skills and a great problem solver.',
      name: 'Sarah Lee',
      position: 'Head of Marketing, DEF Ltd'
    }
  ];
}
