import { Component } from '@angular/core';
import { PdfGeneratorService } from '../services/pdf-generator.service';
@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {
  constructor(private pdfGenerator: PdfGeneratorService) {}

  downloadPDF(): void {
    
    const sectionIds = ['header', 'sectionId', 'timeline'];
this.pdfGenerator.generatePDF(sectionIds);
  }
}
