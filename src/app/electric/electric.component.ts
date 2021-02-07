import { Component, Input, OnInit } from '@angular/core';
import { analytics } from 'firebase';
import { GuitarsComponent } from '../guitars/guitars.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.css']
})
export class ElectricComponent implements OnInit {
  guitars: any[] = [];
  
  constructor(db: AngularFireDatabase) {
      
    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      this.guitars = this.guitars.filter((guitar) => { return guitar.type == "electric" })
       console.log("constructor", this.guitars);
      });
    }
    
  ngOnInit() {
    // this.guitars = this.guitars.filter((guitar) => { return guitar.type == "bass" })
    // console.log("ngOnInit", this.guitars)

    
    }
  
 
  
  // @Input() hero:Hero;
    

  

}
