import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GuitarsComponent } from './guitars/guitars.component';
import { Guitar } from './guitarInterface';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  private dbPath = '/guitars';
  guiatarRef: AngularFireList<any> = null;
  dbo: AngularFireDatabase;
  constructor(private db: AngularFireDatabase) {
    this.guiatarRef = db.list(this.dbPath);
    this.dbo = db;
  }

  getGuitarList():AngularFireList<any> {
    return this.guiatarRef;
  }

  deleteGuitar(key: string): void {
    this.guiatarRef.remove(key).catch(error => {console.log(error)});
  }

  updateGuitar(key: string, data: any[]) {
    this.guiatarRef.update(key,data).catch(error => {console.log(error)});
  }

}


