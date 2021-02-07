import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private  URL : string;

  constructor(private http:HttpClient) { 
  }

  getCurrency(symbol: string){
    this.URL = `https://api.exchangeratesapi.io/latest?symbols=${symbol}`;
    return this.http.get(this.URL);
  }
}
