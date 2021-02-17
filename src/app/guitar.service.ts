import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GuitarsComponent } from './guitars/guitars.component';
import { Guitar } from './guitarInterface';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  private dbPath = '/guitars';
  guiatarRef: AngularFireList<Guitar> = null;
  constructor(private db: AngularFireDatabase) {
    this.guiatarRef = db.list(this.dbPath);
  }

  getGuitarList():AngularFireList<Guitar> {
    return this.guiatarRef;
  }

  deleteGuitar(key: string): void {
    this.guiatarRef.remove(key).catch(error => {console.log(error)});
  }

  updateGuitar(key: string, data: Guitar) {
    this.guiatarRef.update(key,data).catch(error => {console.log(error)});
  }
}
