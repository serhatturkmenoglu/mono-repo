import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend2';

  hello(){
    console.log("hello")
  }
  ngOnInit(): void {
    console.log("frontend 2 working");
  }
}
