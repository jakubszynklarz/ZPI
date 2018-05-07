import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';

@Injectable()
export class TurniejPodzialSerService {

  constructor(public db: AngularFirestore) { }

  getPodzial(current: string, waga: string, pas: string, plec: string) {
    
    // ('/turnieje/'+ current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});

    let zawoCollection = this.db.collection<poprawnyZawodnik>('/turnieje/' + current+ '/' + pas +'/'+waga+'/'+plec)
    let turniej = zawoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as poprawnyZawodnik;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return turniej;
  }
  
}
