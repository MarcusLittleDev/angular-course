import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .details {
      color: white;
    }`]
})
export class AppComponent {
  title = 'directive-demo';
  showParagraph = false;
  buttonClicks = [];

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(new Date());
  }
}
