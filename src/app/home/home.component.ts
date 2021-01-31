import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  steveVai:string="assets/images/guitarists/stevevai300400.jpg"
  joeSatriani:string="assets/images/guitarists/satriani300400.jpg"
  kikoLoureiro:string="assets/images/guitarists/kiko300400.jpg"
  johnPetrucci:string="assets/images/guitarists/petrucci300400.jpg"
  tosinAbasi:string="assets/images/guitarists/tosin300400.jpg"
  paulGilbert:string="assets/images/guitarists/paulG300400.jpg"
  nitaStrauss:string="assets/images/guitarists/nitastrauss300400.jpg"
  martyFriedman:string="assets/images/guitarists/friedman300400.jpg"
  silhouette1:string="assets/images/silhouette1.png"
  silhouette2:string="assets/images/silhouette2.png"
  musikmesse:string="assets/images/exhibitions/Musikmesse_Frankfurt400300.png"
  namm:string="assets/images/exhibitions/NAMM400300.png"
  palm:string="assets/images/exhibitions/PalmExpo400300.png"

  constructor() { }

  ngOnInit(): void {
  }

}
