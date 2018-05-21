import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';
import { Modeloo } from '../../../zarzadzaj/shared/modeloo.model';

@Injectable()
export class TurniejeService {

  turniejDocument: AngularFirestoreDocument<Modeloo>;
  turniejCollection: AngularFirestoreCollection<Modeloo[]>;
  turniej: Observable<Modeloo[]>;
  constructor(public db: AngularFirestore) {

    this.turniejCollection = db.collection<Modeloo[]>('/turnieje');
    this.turniej = this.turniejCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

  }

  getZapisanych(){
    
  }

  getTurnieje() {
    let turniejCollection = this.db.collection<Modeloo[]>('/turnieje');
    this.turniej = turniejCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return this.turniej;
  }
  DeleteTurniej(idDokumentu) {

    //uwaga bardzo ważne slesz jest wymagany na poczatku
    // idDokumentu to np cDLIW476ASD7W5
    this.turniejDocument = this.db.doc('/turnieje/' + idDokumentu);
    this.turniejDocument.delete();
  }
  updateTurniej(turn:Modeloo, idDokumentu) {
    //uwaga bardzo ważne slesz jest wymagany na poczatku
    // idDokumentu to np cDLIW476ASD7W5
    this.turniejDocument = this.db.doc('/turnieje/' + idDokumentu);
    this.turniejDocument.update(turn);
  }


  setTurniej(turn: Modeloo) {
    
    this.turniejCollection.add(JSON.parse(JSON.stringify(turn)));
  }

}

