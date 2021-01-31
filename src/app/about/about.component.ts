import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  store1:string ="/assets/images/about us/1-600400.jpg"

  store2:string ="/assets/images/about us/2-600400.jpg"

  store3:string ="/assets/images/about us/3-600400.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  

}
