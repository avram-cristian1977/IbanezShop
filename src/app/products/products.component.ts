import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitarInterface'
import { AngularFireDatabase } from 'angularfire2/database';
import { GuitarsComponent } from '../guitars/guitars.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  guitars: any[] = [];
  filteredByType: any[] = [];

  constructor(db: AngularFireDatabase) {
    db.list('/guitars').valueChanges().subscribe(guitars => {
      this.guitars = guitars;
      console.log(this.guitars);

    });
  }

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
