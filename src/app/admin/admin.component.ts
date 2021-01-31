import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitarInterface'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GuitarsComponent } from '../guitars/guitars.component';
import { GuitarService } from '../guitar.service';

 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  guitars: any[] = [];
  search: any[] = [];

  filteredByType: any[] = [];

  constructor(private guitarService: GuitarService) {
  };

  getGuitarList() {
    this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
      guitars.forEach(guitar => {
        if (guitar.payload.val() !== null) {
          this.guitars[guitar.payload.key] = guitar.payload.val();
          this.guitars[guitar.payload.key]['db_key'] = guitar.payload.key;
        }
      }); 
    })
  }
  ngOnInit() {
    this.getGuitarList();
  }

}
