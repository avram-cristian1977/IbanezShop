import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GuitarService } from '../guitar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   
  constructor(
    private route: ActivatedRoute,
    private guitarService: GuitarService,
    private location: Location
  ) {}

  guitar: any[];
  db_key: any;

  ngOnInit(): void { 
    this.db_key = this.route.snapshot.paramMap.get('id');
    this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
    let i = 0;
    guitars.forEach(guitar => {
      if (this.db_key == guitar.payload.key) {
        this.guitar = guitar.payload.val();
        this.guitar['db_key'] = guitar.payload.key;
        i++;
      }
    }); 
    
  });
  }

//   updateGuitar(data: any[]) {
//     this.guitarService.updateGuitar(this.db_key, data);
// }

// getGuitar(data:any[]){
//   this.guitarService.getGuitar(this.db_key, data);
// }



 
  

}
