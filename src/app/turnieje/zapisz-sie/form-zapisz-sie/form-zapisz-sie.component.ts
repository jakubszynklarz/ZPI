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
    
    


  
  }
  dodajZawodnika(){
    // to bedzie funkcja dodajaca zawodniak do turnieju
  }

 
  ngOnInit() {
  }

}
export class Kategorie {
  
  
}
