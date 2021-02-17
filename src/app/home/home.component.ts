import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { GuitarService } from '../guitar.service';
import { Guitar } from '../guitarInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  steveVai:string="assets/images/guitarists/stevevai300400.jpg";
  joeSatriani:string="assets/images/guitarists/satriani300400.jpg";
  kikoLoureiro:string="assets/images/guitarists/kiko300400.jpg";
  johnPetrucci:string="assets/images/guitarists/petrucci300400.jpg";
  tosinAbasi:string="assets/images/guitarists/tosin300400.jpg";
  paulGilbert:string="assets/images/guitarists/paulG300400.jpg";
  nitaStrauss:string="assets/images/guitarists/nitastrauss300400.jpg";
  martyFriedman:string="assets/images/guitarists/friedman300400.jpg";
  silhouette1:string="assets/images/silhouette1.png";
  silhouette2:string="assets/images/silhouette2.png";
  musikmesse:string="assets/images/exhibitions/Musikmesse_Frankfurt400300.png";
  namm:string="assets/images/exhibitions/NAMM400300.png";
  palm:string="assets/images/exhibitions/PalmExpo400300.png";
  guitars: Guitar[] = [];
  hot_deal: Guitar;


  constructor(private guitarService: GuitarService, private currencyService: CurrencyService) {
   }

  ngOnInit(): void {
    this.currencyService.getCurrency('RON').subscribe(currency => {
      this.guitarService.getGuitarList().snapshotChanges().subscribe(guitars => {
        let i = 0;
        guitars.forEach(guitar => {
          this.guitars[i] = guitar.payload.val();
          this.guitars[i]['db_key'] = guitar.payload.key;
          this.guitars[i]['priceRON'] = (this.guitars[i]['price'] * currency['rates'].RON).toFixed(2); 
          if (this.guitars[i]['hot_deal'] === true) {
            this.hot_deal = this.guitars[i];
          }
          i++;
      }); 
      });
    });
  }

}
