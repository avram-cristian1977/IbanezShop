import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { GuitarService } from './guitar.service';
import { Guitar } from './guitarInterface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bannerImg: string = "assets/images/12nobk.png";
  ibanezLogo: string = "assets/images/ibanezLogo.png";
  nasaLogo: string = "assets/images/nasa.jpg";
  silhouette1: string = "assets/images/silhouette1.png";
  silhouette2: string = "assets/images/silhouette2.png";
  guitarist: string = "assets/images/chitaristnb.png";
  diMarzio: string = "assets/images/pateners/di marzio.png";
  dunlop: string = "assets/images/pateners/dunlop picls.jpg";
  elixir: string = "assets/images/pateners/elixir.png";
  vox: string = 'assets/images/pateners/vox.png';
  boss: string = 'assets/images/pateners/boss.png';
  title = 'guitar-shop';
  guitars: Guitar[] = [];
  hot_deal: Guitar;

  constructor(private guitarService: GuitarService, private currencyService: CurrencyService, private location: Location) {
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
         } else if (this.guitars[i]['hot_deal'] === false) {
           delete this.hot_deal;
         }
         i++;
     }); 
     });
   });
 }


}
