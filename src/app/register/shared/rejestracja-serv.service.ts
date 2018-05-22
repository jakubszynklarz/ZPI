import { Observable } from 'rxjs/Observable';
import { Rejestracja } from './rejestracja.model';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable()
export class RejestracjaServService {

  rejestracjaDoc:AngularFirestoreDocument<Rejestracja>;
  rejestracjaCollection:AngularFirestoreCollection<Rejestracja[]>;
  rejestracja:Observable<Rejestracja[]>;

  constructor(public db: AngularFirestore) { 
    this.rejestracjaCollection = db.collection<Rejestracja[]>('/rejestracja');
  
  }
  getKurs() {
    let kursCollection = this.db.collection<Rejestracja[]>('/rejestracja');
    this.rejestracja = kursCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Rejestracja;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.rejestracja;
}
DeleteRejestracja(idDokumentu) {
  this.rejestracjaDoc = this.db.doc('/rejestracja/' + idDokumentu);
  this.rejestracjaDoc.delete();
}

updateRejestracja(rejestracja: Rejestracja, idDokumentu) {
  this.rejestracjaDoc = this.db.doc('/rejestracja/' + idDokumentu);
  this.rejestracjaDoc.update(rejestracja);
}
setRejestracja (rejestracja: Rejestracja) {
  this.rejestracjaCollection.add(JSON.parse(JSON.stringify(rejestracja)));
}

}
