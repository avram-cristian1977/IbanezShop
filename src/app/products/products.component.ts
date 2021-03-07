import { Component, OnInit } from '@angular/core';
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
  types: any[] = [];
  hot_deal: any[] = [];
  currency: any;
  selectedColor: string;
  selectedType: string;
  modified: string;

  filteredByType: any[] = [];

  constructor(private currencyService: CurrencyService, private guitarService: GuitarService) {
  }

  ngOnInit(): void {
    this.currencyService.getCurrency('RON').subscribe(currency => {
      this.currency = currency;
      this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
        let i = 0;
        guitars.forEach(guitar => {
          this.guitars[i] = guitar.payload.val();
          this.guitars[i]['db_key'] = guitar.payload.key;
          this.guitars[i]['priceRON'] = (this.guitars[i]['price'] * this.currency.rates.RON).toFixed(2);
          if (this.guitars[i]['hot_deal']) {
            this.hot_deal = this.guitars[i];
          }
          if (this.colors.indexOf(this.guitars[i]['color']) == -1) {
            this.colors.push(this.guitars[i]['color']);
          }
          if (this.types.indexOf(this.guitars[i]['type']) == -1) {
            this.types.push(this.guitars[i]['type']);
          }
          i++;
        });
        this.search = this.guitars;
        this.selectedColor = "Select color";
        this.selectedType = 'Select type';
      });
    });
    console.log("hot_deal", this.hot_deal);
  }

  onGuitarSelected(val: any) {
    this.customFunction(val)
  }

  filterByType(val: string) {
    this.guitars = this.guitars.filter(guitar => {
      return guitar['type'] == val;
    });
    return;
  }

  customFunction(val: any) {
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

  

  resetFilter() {
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
