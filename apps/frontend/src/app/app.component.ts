import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {data} from '@mono-repo/data';
@Component({
  selector: 'mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  title = 'frontend';

  ngOnInit(): void {
   console.log(data());
   console.log("frontend working");
  }
  
  constructor(public http: HttpClient){
    http.get('/api').subscribe(console.log)
  }
}
