import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KategorieService {

  private kategorie: AngularFirestoreCollection<KatGiNogi[]>;
  // private katGiNogi: Observable<KatGiNogi[]>;
  // private menWomen: Observable<any[]>;
  // private facetGi: Observable<any[]>;
  // private facetNoGi: Observable<any[]>;
  // private kobietaNoGi: Observable<any[]>;
  // private kobietaGi: Observable<any[]>;
  // private wagi: Observable<any[]>;

  // private pasyColection: AngularFirestoreCollection<any[]>;
  // private pasy: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.kategorie = this.db.collection<any[]>('KATegorie');
  }

  getKatGiNogi(current: string) {
    // zwraca kategorie [{id:gi},{id: nogi}} dla danego turnieju
    let kategorie = this.db.collection<KatGiNogi[]>('turnieje').doc('' + current).collection('zapisani');;
    let katGiNogi = kategorie.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as KatGiNogi;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return katGiNogi;
  }

  getManWoman(current: string) {
    //zwraca man women
    let kategorie = this.db.collection<any[]>('KATegorie');
    let menWomen = kategorie.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return menWomen;
  }


  getPasy() {
    let pasyColection = this.db.collection<any[]>('pasy');
    let pasy = pasyColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return pasy;
  }


  getWagi(menOrWomen: string, giOrNogi: string) {
    let kat = this.db.collection<any[]>('KATegorie');
    let kategorie = kat.doc(menOrWomen).collection(giOrNogi);
    let wagi = kategorie.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return wagi;
  }

}



export class KatGiNogi {
  id?: string;

}

export class pasy {
  id?: string;

}