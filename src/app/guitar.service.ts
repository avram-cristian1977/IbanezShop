import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  private dbPath = '/guitars';
  guiatarRef: AngularFireList<any> = null;
  constructor(private db: AngularFireDatabase) {
    this.guiatarRef = db.list(this.dbPath);
  }

  getGuitarList():AngularFireList<any> {
    return this.guiatarRef;
  }

}


