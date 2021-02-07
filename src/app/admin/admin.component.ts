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
      let i = 0;
      guitars.forEach(guitar => {
          this.guitars[i] = guitar.payload.val();
          this.guitars[i]['db_key'] = guitar.payload.key;
          i++;
      }); 
    })
  }
  
  deleteGuitar(key:string):void {
    let deleteConfirm = confirm("Are you sure you want to delete ?");
    if (deleteConfirm) {
      this.guitarService.deleteGuitar(key);
      this.guitars.forEach((guitar, array_key) => {
        if (guitar.db_key == key) {
          this.guitars.splice(array_key, 1);
        }
      });
    }
  }

  ngOnInit() {
    this.getGuitarList();
  }

}
