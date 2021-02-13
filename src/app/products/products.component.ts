import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitarInterface'
import { AngularFireDatabase } from 'angularfire2/database';
import { GuitarsComponent } from '../guitars/guitars.component';
import { CurrencyService } from '../currency.service';
import { GuitarService } from '../guitar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  guitars: any[] = [];
  search: any[] = [];
  colors: any[] = [];
  currency: any;
  selectedGuitar:string;
  modified:string;

  filteredByType: any[] = [];

  constructor(db: AngularFireDatabase, currencyService: CurrencyService, guitarService: GuitarService) {
    currencyService.getCurrency('RON').subscribe(currency => {
      this.currency = currency;
      guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
        let i = 0;
        guitars.forEach(guitar => {
          this.guitars[i] = guitar.payload.val();
          this.guitars[i]['db_key'] = guitar.payload.key;
          this.guitars[i]['priceRON'] = (guitar['price'] * this.currency.rates.RON).toFixed(2); 
          if (this.colors.indexOf(guitar['color']) == -1) {
            this.colors.push(guitar['color']);
          }
          i++;
      }); 
        this.guitars = guitars;
        this.search = guitars;
        this.selectedGuitar="red";
      });
    });
    this.guitars.filter(guitar => {
     
    });
    
  }

  ngOnInit(): void {
    
  }

  onGuitarSelected(val:any){
      this.customFunction(val)
  }

  customFunction(val:any){
      this.modified = "The guitar " + val + " was selected from DD";
      let colors = [];
      this.guitars = this.guitars.filter(guitar => {
        return guitar['color'] == val;
      });
    return;

  }

  filterByTypeBass() {
    this.guitars = this.guitars.filter((guitar) => { return guitar.type == "bass" })

    return;
  }

  // filterByColorBlacks() {
  //   this.guitars = this.guitars.filter((guitar) => { return guitar.color == "black" })
  //   return;
  // }

  resetFilter(){
    this.guitars = this.search;
    return;
  }




  sortById() {
    this.guitars.sort((a, b) => {
      return (a.id - b.id)
    })
  }


  sortByPrice() {
    this.guitars.sort((a, b) => {
      return (a.price - b.price)
    })
  }

}
