import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeysPipePipe } from '../../../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';
import { NgForm } from '@angular/forms';
import { KategorieService, KatGiNogi } from '../../shared/kategorie.service';


@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {


  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);


  menWomen: any[];

  facetGi: any[];

  // private facetNoGiColection: AngularFirestoreCollection<any[]>;
  private facetNoGi: any[];

  // private kobietaNoGiColection: AngularFirestoreCollection<any[]>;
  private kobietaNoGi: any[];

  // private kobietaGiColection: AngularFirestoreCollection<any[]>;
  private kobietaGi: any[];

  // private pasyColection: AngularFirestoreCollection<any[]>;
  private pasy: any[]

  private turniejGiNogi: KatGiNogi[];


  private kategorieCollection: AngularFirestoreCollection<Kategorie>;
  private kategorie: Observable<any[]>;

  constructor(private db: AngularFirestore, private katServ: KategorieService) {
    // this.kategorieCollection = db.collection<Kategorie>('turnieje').
    //   doc('' + this.current).collection('zapisani');
    // // , ref =>{return ref.where('tworca','==','Endzik')}
    // this.kategorie = this.kategorieCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });
    katServ.getKatGiNogi(this.current).subscribe(data => { this.turniejGiNogi = data });

    katServ.getPasy().subscribe(data => { this.pasy = data });
    
    katServ.getManWoman(this.current).subscribe(data => { this.menWomen = data });
    
    katServ.getWagi('man', 'gi').subscribe(data => { this.facetGi = data })
    
    katServ.getWagi('man', 'nogi').subscribe(data => { this.facetNoGi = data })
    
    katServ.getWagi('women', 'gi').subscribe(data => { this.kobietaGi = data })
    
    katServ.getWagi('women', 'nogi').subscribe(data => { this.kobietaNoGi = data })


    // this.menWomenColection = db.collection<any[]>('KATegorie');
    // this.menWomen = this.menWomenColection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });

    // this.pasyColection = db.collection<any[]>('pasy');
    // this.pasy = this.pasyColection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });

    // this.facetGiColection = db.collection<any[]>('KATegorie').doc('man').collection('gi');
    // this.facetGi = this.facetGiColection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });

    // this.facetNoGiColection = db.collection<any[]>('KATegorie').doc('man').collection('nogi');
    // this.facetNoGi = this.facetGiColection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });

    // this.kobietaNoGiColection = db.collection<any[]>('KATegorie').doc('women').collection('nogi');
    // this.kobietaNoGi = this.facetGiColection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });

    // this.kobietaGiColection = db.collection<any[]>('KATegorie').doc('women').collection('nogi');
    // this.kobietaGi = this.facetGiColection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Kategorie;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });
  }


  zapiszSie(formularz: nowyZawodnik) {
    let dobryZawonidk: poprawnyZawodnik = new poprawnyZawodnik();
    // dobryZawonidk.kategoria = formularz.kategoria;
    dobryZawonidk.klub = formularz.Klub;
    dobryZawonidk.nazwa = formularz.ImieNazwisko;
    dobryZawonidk.oplacone = false;
    dobryZawonidk.pas = formularz.selectBelt;
    dobryZawonidk.plec = formularz.selectSex;
    dobryZawonidk.waga = formularz.selectWeight;
    dobryZawonidk.kategoria = "gi";
    console.log(dobryZawonidk)
    this.db.collection<any>('turnieje').doc('' + this.current).
      collection('zapisani').doc('gi').collection<any>('zawodnicy').
      add(JSON.parse(JSON.stringify(dobryZawonidk)));
    console.log("dodano zawodnika");
  }


  ngOnInit() {
  }

}
export class Kategorie {


}



export class poprawnyZawodnik {
  constructor() { }
  public nazwa?: string;
  public oplacone?: boolean;
  public pas?: string;
  public waga?: string;
  public klub?: string;
  public plec?: string;
  public kategoria?: string;

}

export class nowyZawodnik {
  public ImieNazwisko?: string;
  public Klub?: string;
  public email?: string;
  public selectSex?: string;
  public selectBelt?: string;
  public kategoria?: string;
  public selectWeight?: string;
}

