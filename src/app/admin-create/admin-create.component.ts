import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
  db: AngularFireDatabase;
  guitars: any[];

  constructor(db: AngularFireDatabase) {
    this.db = db;
    db.list('/guitars').valueChanges().subscribe(guitars => { 
      this.guitars = guitars;
    });
   }

  ngOnInit(): void {
  }

  createGuitar(data) {
    data.id = this.guitars.length > 0 ? Math.max(...this.guitars.map(guitar => guitar.id)) + 1 : 20;
    this.db.list('guitars').push(data);
    alert('Guitar created.');
    return;
  }

}
