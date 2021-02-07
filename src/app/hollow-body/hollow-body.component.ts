import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-hollow-body',
  templateUrl: './hollow-body.component.html',
  styleUrls: ['./hollow-body.component.css']
})
export class HollowBodyComponent implements OnInit {
  guitars: any[] = [];

  constructor(db: AngularFireDatabase) {
      
    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      this.guitars = this.guitars.filter((guitar) => { return guitar.type == "hollow" })
       console.log("constructor", this.guitars);
      });
    }

  ngOnInit(): void {
  }

}
