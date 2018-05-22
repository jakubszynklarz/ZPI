import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Kontakt } from './kontakt.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KontaktServService {

  kontaktDoc: AngularFirestoreDocument<Kontakt>;
  kontaktCollection: AngularFirestoreCollection<Kontakt[]>;
  Kontakt: Observable<Kontakt[]>;
  constructor(public db: AngularFirestore) {
    this.kontaktCollection = db.collection<Kontakt[]>('/Kontakt');

  }


  getKurs() {
    let kursCollection = this.db.collection<Kontakt[]>('/Kontakt');
    this.Kontakt = kursCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kontakt;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return this.Kontakt;
  }
  DeleteKontakt(idDokumentu) {
    this.kontaktDoc = this.db.doc('/Kontakt/' + idDokumentu);
    this.kontaktDoc.delete();
  }



  updateKontakt(kontakt: Kontakt, idDokumentu) {
    this.kontaktDoc = this.db.doc('/Kontakt/' + idDokumentu);
    this.kontaktDoc.update(kontakt);
  }

  setKontakt(kontakt: Kontakt) {
    this.kontaktCollection.add(JSON.parse(JSON.stringify(kontakt)));
  }

}
