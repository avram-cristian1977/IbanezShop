import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-basses',
  templateUrl: './basses.component.html',
  styleUrls: ['./basses.component.css']
})
export class BassesComponent implements OnInit {
  guitars: any[] = [];
  constructor(db: AngularFireDatabase) {

    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      this.guitars = this.guitars.filter((guitar) => { return guitar.type == "bass" })
       console.log("constructor", this.guitars);
      });
   }

  ngOnInit(): void {
  }

}
