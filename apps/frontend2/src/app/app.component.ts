import { Component } from '@angular/core';

@Component({
  selector: 'mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend2';

  hello(){
    console.log("hello")
  }
}
