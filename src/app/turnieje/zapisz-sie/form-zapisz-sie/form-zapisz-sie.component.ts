import { Component, OnInit, Input } from '@angular/core';
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
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

  private menWomenColection: AngularFirestoreCollection<any[]>;
  private menWomen: Observable<any[]>;

  private facetGiColection: AngularFirestoreCollection<any[]>;
  private facetGi: Observable<any[]>;

  private facetNoGiColection: AngularFirestoreCollection<any[]>;
  private facetNoGi: Observable<any[]>;

  private kobietaNoGiColection: AngularFirestoreCollection<any[]>;
  private kobietaNoGi: Observable<any[]>;

  private kobietaGiColection: AngularFirestoreCollection<any[]>;
  private kobietaGi: Observable<any[]>;
  
  private pasyColection: AngularFirestoreCollection<any[]>;
  private pasy: Observable<any[]>;
  

  private kategorieCollection: AngularFirestoreCollection<Kategorie>;
  private kategorie: Observable<any[]>;
  // private fuckcole: AngularFirestoreDocument<any[]>;
  // private fuck : Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.kategorieCollection = db.collection<Kategorie>('turnieje').
    doc(''+this.current).collection('zapisani');
    // , ref =>{return ref.where('tworca','==','Endzik')}
    this.kategorie = this.kategorieCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;

        return { id, ...data };
      })
    });


    this.menWomenColection = db.collection<any[]>('KATegorie');
    this.menWomen = this.menWomenColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    
    this.pasyColection = db.collection<any[]>('pasy');
    this.pasy = this.pasyColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    this.facetGiColection = db.collection<any[]>('KATegorie').doc('man').collection('gi');
    this.facetGi = this.facetGiColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

  

    // this.plecjColection = db.collection('KATegorie');
    // this.plec = this.plecjColection.valueChanges();


    // doc('AU7pzccJaqxZAGtwjk6N').collection('zapisani').doc('gi').
    // collection('zawodnicy', ref =>{return ref.where('pas','==','czarny' ).where('waga','==','heavy') });
    
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