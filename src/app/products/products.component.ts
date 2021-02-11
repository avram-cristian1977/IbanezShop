import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitarInterface'
import { AngularFireDatabase } from 'angularfire2/database';
import { GuitarsComponent } from '../guitars/guitars.component';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  guitars: any[] = [];
  search: any[] = [];
  currency: any;

  filteredByType: any[] = [];

  constructor(db: AngularFireDatabase, currencyService: CurrencyService) {
    currencyService.getCurrency('RON').subscribe(currency => {
      this.currency = currency;
    });
    
    db.list('/guitars').valueChanges().subscribe(guitars => {
      // guitars.forEach(guitar => {
      //   guitar['priceRON'] = (guitar['price'] * this.currency.rates.RON).toFixed(2); 
      // });
      this.guitars = guitars;
      this.search = guitars;
    });
  }
O
  

  ngOnInit(): void {
  }

  filterByTypeBass() {
    this.guitars = this.guitars.filter((guitar) => { return guitar.type == "bass" })

    return;
  }

  filterByColorBlacks() {
    this.guitars = this.guitars.filter((guitar) => { return guitar.color == "black" })
    return;
  }

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
