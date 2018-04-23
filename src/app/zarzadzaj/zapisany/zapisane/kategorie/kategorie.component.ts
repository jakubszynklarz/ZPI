import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Kategorie } from '../../../shared/kategorie.model';

@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.css']
})
export class KategorieComponent implements OnInit {

  private kategorie: Observable<any[]>;
  private kateCollection: AngularFirestoreCollection<Kategorie>;

  constructor(private db: AngularFirestore) { 
    this.kateCollection=db.collection<Kategorie>('/Kategorie');
    this.kategorie=this.kateCollection.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;
        return {id,...data};
      })
    })
  }

  
  ngOnInit() {
  }

}
