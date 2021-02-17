import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Guitar } from '../guitarInterface';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
  guitars: any[];

  constructor(private db: AngularFireDatabase) {
    db.list('/guitars').valueChanges().subscribe(guitars => { 
      this.guitars = guitars;
    });
   }

  ngOnInit(): void {
  }

  createGuitar(guitar: Guitar) {
    guitar.id = this.guitars.length > 0 ? Math.max(...this.guitars.map(guitar => guitar.id)) + 1 : 20;
    this.db.list('guitars').push(guitar);
    alert('Guitar created.');
    return;
  }

}
