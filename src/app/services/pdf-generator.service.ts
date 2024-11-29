
import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  generatePDF(sectionIds: string[]): void {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    let currentHeight = 0;
  
    const generateCanvasForSection = (sectionId: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const section = document.getElementById(sectionId);
        if (!section) {
          console.error(`Section with id "${sectionId}" not found!`);
          reject(`Section with id "${sectionId}" not found!`);
          return;
        }
  
        html2canvas(section,{ useCORS: true }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const canvasHeight = (canvas.height * pdfWidth) / canvas.width;
  
          // Add a new page if the content exceeds the PDF's page height
          if (currentHeight + canvasHeight > pdf.internal.pageSize.getHeight()) {
            pdf.addPage();
            currentHeight = 0;
          }
  
          pdf.addImage(imgData, 'PNG', 0, currentHeight, pdfWidth, canvasHeight);
          currentHeight += canvasHeight;
          resolve();
        }).catch((error) => {
          console.error(`Error generating canvas for section ${sectionId}:`, error);
          reject(error);
        });
      });
    };
  
    // Iterate through section IDs and generate the PDF content
    Promise.all(sectionIds.map((id) => generateCanvasForSection(id)))
      .then(() => {
        pdf.save('multiple-sections.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  }
  
}
