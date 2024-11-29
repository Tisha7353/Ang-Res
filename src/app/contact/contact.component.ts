
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenWordsValidator } from '../services/validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.required,
          Validators.maxLength(500),
          forbiddenWordsValidator(['spam', 'junk']),
        ],
      ],
    });
    
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Form submitted successfully!');
      this.contactForm.reset();
    }
  }
}
