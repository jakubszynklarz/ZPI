import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {


  // selectedKategorie: Kategorie = new Kategorie();

  // public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  private kategorieCollection: AngularFirestoreCollection<Kategorie>;
  private kategorie: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.kategorieCollection = db.collection<Kategorie>('/kategorie');
    this.kategorie = this.kategorieCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;

        return { id, ...data };
      })
    });
    console.log(this.kategorie)

    // const list: AngularFirestoreCollection<string[]> = this.db.collection('Kategorie')

    // list.valueChanges().subscribe((data) => { ( data['0']['belts'])})
    // console.log(this.pojecia);
    

    // console.log("stop")
  
  }
  ngOnInit() {
  }

}
export class Kategorie {
  
  
}
