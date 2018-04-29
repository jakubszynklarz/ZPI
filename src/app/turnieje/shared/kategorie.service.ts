import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KategorieService {

  private kategorie: AngularFirestoreCollection<KatGiNogi[]>;
  private katGiNogi: Observable<KatGiNogi[]>;
  private menWomen: Observable<any[]>;
  private facetGi: Observable<any[]>;
  private facetNoGi: Observable<any[]>;
  private kobietaNoGi: Observable<any[]>;
  private kobietaGi: Observable<any[]>;
  private wagi: Observable<any[]>;

  private pasyColection: AngularFirestoreCollection<any[]>;
  private pasy: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.kategorie = this.db.collection<any[]>('KATegorie');
    // this.kategorie = db.collection<KatGiNogi[]>('/turnieje');
  }

  getKatGiNogi(current: string) {
    // zwraca kategorie [{id:gi},{id: nogi}} dla danego turnieju
    this.kategorie = this.db.collection<KatGiNogi[]>('turnieje').doc('' + current).collection('zapisani');;
    this.katGiNogi = this.kategorie.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as KatGiNogi;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.katGiNogi;
  }

  getManWoman(current: string) {
    //zwraca man women
    this.kategorie = this.db.collection<any[]>('KATegorie');
    this.menWomen = this.kategorie.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.menWomen;
  }

  // getfacetGi() {
  //   // zwraca kategorie wagowe dla man gi
  //   this.kategorie = this.kategorie.doc('man').collection('gi');
  //   this.facetGi = this.kategorie.snapshotChanges().map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     })
  //   });
  //   return this.facetGi;
  // }

  // getfacetNoGi() {
  //   this.kategorie = this.kategorie.doc('man').collection('nogi');
  //   this.facetNoGi = this.kategorie.snapshotChanges().map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     })
  //   });
  // }

  // getkobietaNoGi() {
  //   this.kategorie = this.kategorie.doc('women').collection('nogi');
  //   this.kobietaNoGi = this.kategorie.snapshotChanges().map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     })
  //   });
  // }

  // getkobietaGi() {
  //   this.kategorie = this.kategorie.doc('women').collection('nogi');
  //   this.kobietaGi = this.kategorie.snapshotChanges().map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     })
  //   });
  // }
  getPasy(){
    this.pasyColection = this.db.collection<any[]>('pasy');
    this.pasy = this.pasyColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.pasy;
  }


  getWagi(menOrWomen: string, giOrNogi) {
    this.kategorie = this.kategorie.doc(menOrWomen).collection(giOrNogi);
    this.wagi = this.kategorie.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.wagi;
    
  }


}






export class KatGiNogi {
  id?: string;

}