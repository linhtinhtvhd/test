<<<<<<< HEAD
<<<<<<< HEAD
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EditorModule } from '@tinymce/tinymce-angular';
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
>>>>>>> f0c24a4 (sd)
=======
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EditorModule } from '@tinymce/tinymce-angular';
>>>>>>> c1b7c1b (s)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [RouterOutlet, CommonModule, TranslateModule, EditorModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  constructor(public translate: TranslateService) {

  }

  data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 }
  ];

  excel() {
    const header = '<th>ID</th><th>Name</th><th>Age</th>';
    const rows = this.data.map(item => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td></tr>`).join('');
    const html = `<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.xls';
    a.click();
    URL.revokeObjectURL(url);
  }
}

=======
  imports: [RouterOutlet],
=======
  imports: [RouterOutlet, CommonModule, TranslateModule, EditorModule, RouterModule],
>>>>>>> c1b7c1b (s)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  constructor(public translate: TranslateService) {

  }

  data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 }
  ];

  excel() {
    const header = '<th>ID</th><th>Name</th><th>Age</th>';
    const rows = this.data.map(item => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td></tr>`).join('');
    const html = `<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.xls';
    a.click();
    URL.revokeObjectURL(url);
  }
}
<<<<<<< HEAD
>>>>>>> f0c24a4 (sd)
=======

>>>>>>> c1b7c1b (s)
