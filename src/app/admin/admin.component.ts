import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitarInterface'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GuitarsComponent } from '../guitars/guitars.component';
import { GuitarService } from '../guitar.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  guitars: any[] = [];
  search: any[] = [];

 

  constructor(private guitarService: GuitarService, public dialog: MatDialog) {
  };

  getGuitarList() {
      this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
        let i = 0;
        guitars.forEach(guitar => {
          this.guitars[i] = guitar.payload.val();
          this.guitars[i]['db_key'] = guitar.payload.key;
          i++;
      }); 
      this.search = this.guitars;
    });
  }
  
  deleteGuitar(key:string):void {
    
    
      this.guitarService.deleteGuitar(key);
      this.guitars.forEach((guitar, array_key) => {
        if (guitar.db_key == key) {
          this.guitars.splice(array_key, 1);
        }
      });
    
  }

  ngOnInit() {
    this.getGuitarList();
  }

  openDialog(guitarKey:string){
    let dialogRef = this.dialog.open(DialogDeleteComponent, {data:{
      guitarKey:guitarKey
    }});
    dialogRef.afterClosed().subscribe(result => {
      if(result !== "false"){
        this.deleteGuitar(result)
      }
    })

    
  }

}
