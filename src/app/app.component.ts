import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Home Page';

  getTitle() {          //eğer title private olursa bu şekilde alabiliyoruz.
    return this.title;
  }
}


