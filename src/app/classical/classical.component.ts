import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-classical',
  templateUrl: './classical.component.html',
  styleUrls: ['./classical.component.css']
})
export class ClassicalComponent implements OnInit {
  guitars: any[] = [];
  constructor(db: AngularFireDatabase) {
    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      this.guitars = this.guitars.filter((guitar) => { return guitar.type == "classical" })
       console.log("constructor", this.guitars);
      });
   }

  ngOnInit(): void {
  }

}
