import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GuitarService } from '../guitar.service';
import { Guitar } from '../guitarInterface';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  guitar: Guitar;
  db_key: any;
  guitars: any[] = [];
  currency: any;



  constructor(
    private currencyService: CurrencyService,
    private route: ActivatedRoute,
    private guitarService: GuitarService,
    
  )
  {
    
  }

  

  ngOnInit() { 
    
    this.db_key = this.route.snapshot.paramMap.get('id');
    this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
      guitars.forEach(guitar => {
        if (this.db_key == guitar.payload.key) {
          this.guitar = guitar.payload.val();
          
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
