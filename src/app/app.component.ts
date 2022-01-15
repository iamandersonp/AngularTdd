import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myVar = 'Hola Mundo';
  nombre = 'Jhon Doe';

  par(num: number): boolean {
    return num % 2 === 0 ? true : false;
  }
}
