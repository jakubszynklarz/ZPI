import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Kategorie } from '../zarzadzaj/shared/kategorie.model';
import { Modeloo } from '../zarzadzaj/shared/modeloo.model';
import { KeysPipePipe } from '../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';

@Component({
  selector: 'app-panel-sedziowski',
  templateUrl: './panel-sedziowski.component.html',
  styleUrls: ['./panel-sedziowski.component.css']
})
export class PanelSedziowskiComponent implements OnInit {

  public zawodnik1:string;
  public zawodnik2:string;

  private zapisaniCollection: AngularFirestoreCollection<Kategorie>;
  private zapisani: Observable<any[]>;
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

  private pasyColection: AngularFirestoreCollection<any[]>;
  private pasy: Observable<any[]>;

  private wagiColection: AngularFirestoreCollection<any[]>;
  private wagi: Observable<any[]>;

  //#region zmienne
  duzePunktyZawodnik1: number = 0;
  duzePunktyZawodnik2: number = 0;
  
  przewagiZawodnik1: number = 0;
  przewagiZawodnik2: number = 0;
  
  karyZawodnik1: number = 0;
  karyZawodnik2: number = 0;
  
  licznik = 0;
  flagaStart = 0;
  

  ZegarCzas: string = "00:00";
  btnZegar:string = "start"
  //#endregion

  
  constructor(private db: AngularFirestore) { 

    this.zapisaniCollection=db.collection<Modeloo>('turnieje').doc(this.current).collection('zapisani').doc('gi').collection('zawodnicy');
    this.zapisani=this.zapisaniCollection.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        return {id,...data,};
      })
      
    })

    this.pasyColection = db.collection<any[]>('pasy');
    this.pasy = this.pasyColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });


    this.wagiColection = db.collection<any[]>('KATegorie').doc('man').collection('gi');
    this.wagi = this.wagiColection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kategorie;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    
  }

  ngOnInit() {

  }
  zaw1(x){
    this.zawodnik1=x; 
  }
  zaw2(x){
    this.zawodnik2=x;
  }



  //#region  obslugaPunktow
  zwiekszDuzeZawodnik1(ilePunktow){
    this.duzePunktyZawodnik1 += ilePunktow;
    if (this.duzePunktyZawodnik1 < 0){
      this.duzePunktyZawodnik1 = 0;
    }
  }
  zwiekszDuzeZawodnik2(ilePunktow){
    this.duzePunktyZawodnik2 += ilePunktow;
    if (this.duzePunktyZawodnik2 < 0){
      this.duzePunktyZawodnik2 = 0;
    }
  }

  zwiekszKaryZawodnik1(ilePunktow){
    this.karyZawodnik1 += ilePunktow;
    if (this.karyZawodnik1 > 0){
      this.karyZawodnik1 = 0;
    }
  }
  zwiekszKaryZawodnik2(ilePunktow){
    this.karyZawodnik2 += ilePunktow;
    if (this.karyZawodnik2 > 0){
      this.karyZawodnik2 = 0;
    }
  }
  zwiekszPrzewagiZawodnik1(ilePunktow){
    this.przewagiZawodnik1 += ilePunktow;
    if (this.przewagiZawodnik1 < 0){
      this.przewagiZawodnik1 = 0;
    }
  }
  zwiekszPrzewagiZawodnik2(ilePunktow){
    this.przewagiZawodnik2 += ilePunktow;
    if (this.przewagiZawodnik2 < 0){
      this.przewagiZawodnik2 = 0;
    }
  }
  //#endregion 
  
  //#region zegar
  zegar() {
    //console.log(flagaStart);
    if (this.flagaStart === 1) {
      this.licznik++;
        let sekundy = this.licznik % 60;
        let minuty = Math.floor(this.licznik / 60);
        this.wyswietlCzas(minuty, sekundy);
        setTimeout(()=>{ this.zegar() ;} ,1000);
    }
  }

   wyswietlCzas(minuty:number, sekundy:number): any {
    if (minuty < 10 && sekundy < 10) {
        this.ZegarCzas = "0" + minuty + ":0" + sekundy;
    }
    else if (minuty < 10) {
        this.ZegarCzas = "0" + minuty + ":" + sekundy;
    } else {
        this.ZegarCzas = + minuty + ":" + sekundy;
    }
}

  StartStop() {

    if (this.flagaStart <= 1) {
      this.flagaStart++;
      this.zegar();
      this.btnZegar= "Stop";
    }
    this.StopTimer();
  }

  StopTimer() {
    if (this.flagaStart === 2) {
      this.btnZegar= "Start";
      this.flagaStart = 0;
    }
  }

   zresetujZegarIpunkty() {
    this.flagaStart = 2;
    this.StartStop();
    this.licznik = 0;
    this.ZegarCzas = "00:00";
    this.duzePunktyZawodnik1 = 0;
    this.duzePunktyZawodnik2 = 0;
    this.przewagiZawodnik1 = 0;
    this.przewagiZawodnik2 = 0;
    this.karyZawodnik1 = 0;
    this.karyZawodnik2 = 0;
}
//#endregion
}
