import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-acoustic',
  templateUrl: './acoustic.component.html',
  styleUrls: ['./acoustic.component.css']
})
export class AcousticComponent implements OnInit {

  guitars: any[] = [];
  
  constructor(db: AngularFireDatabase) {
      
    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      this.guitars = this.guitars.filter((guitar) => { return guitar.type == "acoustic" })
       console.log("constructor", this.guitars);
      });
    }

  ngOnInit(): void {
  }

}
