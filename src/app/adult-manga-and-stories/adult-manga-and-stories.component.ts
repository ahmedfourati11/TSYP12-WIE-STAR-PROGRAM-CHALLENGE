import { Component } from '@angular/core';

@Component({
  selector: 'app-adult-manga-and-stories',
  standalone: true,
  imports: [],
  templateUrl: './adult-manga-and-stories.component.html',
  styleUrl: './adult-manga-and-stories.component.css'
})
export class AdultMangaAndStoriesComponent {

  downloadPDF(pdfName: string): void {
    const link = document.createElement('a');
    link.href = `../../assets/${pdfName}`;
    link.download = pdfName;
    link.click();
  }
  
}
