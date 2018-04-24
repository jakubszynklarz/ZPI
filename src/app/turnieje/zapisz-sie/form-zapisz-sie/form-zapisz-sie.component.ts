import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeysPipePipe } from '../../../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';


@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {
  
  itemsCollection: AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;

  private kategorieCollection: AngularFirestoreCollection<Kategorie>;
  private kategorie: Observable<any[]>;
  private fuckcole: AngularFirestoreDocument<any[]>;
  private fuck : Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.kategorieCollection = db.collection<Kategorie>('KATEGORIA').doc('plec').
    collection('men',ref => {return ref.where('id','==','nogi')});
    // ,ref => {return ref.where('wagi','==','gi')}
    this.kategorie = this.kategorieCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;

        return { id, ...data };
      })
    });
    console.log(this.kategorie)
    
    // // this.items  = this.db.collection('/kategorie').valueChanges();
    // this.fuckcole = db.collection('kategorie').doc('men').collection('').doc('gi');
    // this.fuck = this.fuckcole.valueChanges();
  
  }
  getItems(){
    
    // let i :Item = new Item();
    // i.id = "da";
    // i.opis = "adsf";
    // i.title = "adfas";
    // this.db.collection('items').add(i);
    console.log(this.items)
    return this.items;

  }


  dodajZawodnika(){
    // to bedzie funkcja dodajaca zawodniak do turnieju
  }

 
  ngOnInit() {
  }

}
export class Kategorie {
  
  
}


export class Item {
  // public id?:string;
  
  public gi?:string;
  
  // public title?:string;
  // public opis?:string;
  constructor(){
  }
}