import {Component, OnInit} from '@angular/core';
import {GuitarService} from '../guitar.service';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Guitar } from '../guitarInterface';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  guitar: Guitar;
  brand: string;
  model: string;
  color: string;
  hasCase: string;
  noOfStrings: number;
  price: number;
  type: string;
  img: string;
  id: number;

  constructor(private guitarService: GuitarService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    const dbKey = this.route.snapshot.paramMap.get('id');
    this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
      guitars.forEach(guitar => {
        if (dbKey === guitar.payload.key) {
          this.guitar = guitar.payload.val();
          this.brand = this.guitar.brand;
          this.model = this.guitar.model;
          this.color = this.guitar.color;
          this.hasCase = this.guitar.hasCase;
          this.noOfStrings = this.guitar.noOfStrings;
          this.price = this.guitar.price;
          this.type = this.guitar.type;
          this.img = this.guitar.img;
          this.id = this.guitar.id;
        }
      });
    });
  }

  updateGuitar(): void {
    const dbKey = this.route.snapshot.paramMap.get('id');
    const data = {
      brand: this.brand,
      model: this.model,
      img: this.img,
      price: this.price,
      noOfStrings: this.noOfStrings,
      type: this.type,
      color: this.color,
      hasCase: this.hasCase,
      id: this.id
    };
    this.guitarService.updateGuitar(dbKey, data);
    window.location.href='/admin';
  }
}
