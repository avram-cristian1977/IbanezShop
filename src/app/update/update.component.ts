import { Component, OnInit } from '@angular/core';
import { GuitarService } from '../guitar.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  guitar: any[];
  db_key: any;

  constructor(private guitarService : GuitarService, private route: ActivatedRoute) {
    this.db_key = this.route.snapshot.paramMap.get('id');
    this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
      guitars.forEach(guitar => {
        if (this.db_key == guitar.payload.key) {
          this.guitar = guitar.payload.val();
          this.guitar['db_key'] = guitar.payload.key;
        }
      }); 
    }); 
  }

  ngOnInit(): void { 
    
  }

  updateGuitar(data: any[]) {
      this.guitarService.updateGuitar(this.db_key, data);
  }



}
