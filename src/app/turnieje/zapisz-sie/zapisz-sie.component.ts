import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeysPipePipe } from '../../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';

@Component({
  selector: 'app-zapisz-sie',
  templateUrl: './zapisz-sie.component.html',
  styleUrls: ['./zapisz-sie.component.css']
})
export class ZapiszSieComponent implements OnInit {



  public check: number;
  public defula: number = 0;
  selectedModeloo: Modeloo = new Modeloo();

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  private turnieCollection: AngularFirestoreCollection<Modeloo>;
  private turnieje: Observable<any[]>;
  
  private turniejDoc: AngularFirestoreDocument<any[]>;
  private turn;

  constructor(private db: AngularFirestore) {
    this.turnieCollection = db.collection<Modeloo>('/turnieje');
    this.turnieje = this.turnieCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        
        return { id, ...data };
      })
    });
    
    this.turniejDoc = db.collection('turnieje').doc(''+this.current);
    this.turn = this.turniejDoc.valueChanges();

    // console.log("statr")
    
    // this.itemsCollection = db.collection<Item>('Kategorie');
    // this.items = this.itemsCollection.valueChanges();
    // this.items.subscribe(data => {console.log( this.item.belts= data['0']['belts'])})
    
    // console.log("stop")
    
    
   
  }

 
  ngOnInit() {

    // console.log("statr")
    
    // const list: AngularFirestoreCollection<string[]> = this.db.collection('Kategorie')

    // list.valueChanges().subscribe((data) => { this.zwrocDane( data['0']['belts'])})
    // console.log(this.pojecia);
    
    // this.check = 0;
    // console.log("stop")



  }

  def(x) {
    
    this.check = 1;
    this.selectedModeloo.nazwa = x.nazwa
    this.selectedModeloo.opis = x.opis
    this.selectedModeloo.miejsce = x.miejsce
    this.selectedModeloo.nr_konta = x.nr_konta
    this.selectedModeloo.wpisowe = x.wpisowe
    this.selectedModeloo.kiedy = x.kiedy
    this.selectedModeloo.do_kiedyrej = x.do_kiedyrej
  }

  private update() {
  
    var updateNested = this.db.collection('turnieje').doc(this.current).update({
      opis: this.selectedModeloo.opis,
      kiedy: this.selectedModeloo.kiedy,
      do_kiedyrej: this.selectedModeloo.do_kiedyrej,
      miejsce: this.selectedModeloo.miejsce,
      nazwa: this.selectedModeloo.nazwa,
      nr_konta: this.selectedModeloo.nr_konta,
      wpisowe: this.selectedModeloo.wpisowe
    });
  }

}

