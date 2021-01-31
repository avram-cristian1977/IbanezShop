import { Component, Input, OnInit } from '@angular/core';
import { analytics } from 'firebase';
import { GuitarsComponent } from '../guitars/guitars.component';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.css']
})
export class ElectricComponent implements OnInit {
  guitars: any[] = [];
  constructor() { }

  ngOnInit(): void {
    

    // @Input() hero:Hero;
    

      this.guitars = this.guitars.filter((guitar) => { return guitar.type == "electric" })
      console.log("electri")
  
      
    
  
    
    }

    

  

}
