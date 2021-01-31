import { Component, OnInit } from '@angular/core';
import {Guitar} from '../guitarInterface'
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css']
})
export class GuitarsComponent implements OnInit {

  guitars: any[];

  constructor( db: AngularFireDatabase) {
    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      console.log(this.guitars);
    });
   }

  ngOnInit(): void {
     

  }

}
