import { Component } from '@angular/core';

@Component({
  selector: 'app-student-manga-stories',
  standalone: true,
  imports: [],
  templateUrl: './student-manga-stories.component.html',
  styleUrl: './student-manga-stories.component.css'
})
export class StudentMangaStoriesComponent {
  // Méthode pour télécharger un PDF
  downloadPDF(pdfName: string): void {
    const link = document.createElement('a');
    link.href = `../../assets/${pdfName}`;
    link.download = pdfName;
    link.click();
  }
}
