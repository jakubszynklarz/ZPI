import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Kategorie } from '../zarzadzaj/shared/kategorie.model';
import { Modeloo } from '../zarzadzaj/shared/modeloo.model';
import { KeysPipePipe } from '../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';
import { TurniejPodzialSerService } from '../zarzadzaj/shared/turniej-podzial-ser.service';
import { poprawnyZawodnik } from '../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';


@Component({
  selector: 'app-panel-sedziowski',
  templateUrl: './panel-sedziowski.component.html',
  styleUrls: ['./panel-sedziowski.component.css']
})
export class PanelSedziowskiComponent implements OnInit {

  public zawodnik1: string;
  public zawodnik2: string;

  aktualnaPara: number = -1;
  wyswietlPara: string;
  para1: poprawnyZawodnik[];
  para2: poprawnyZawodnik[];
  para3: poprawnyZawodnik[];
  para4: poprawnyZawodnik[];
  para5: poprawnyZawodnik[];
  para6: poprawnyZawodnik[];
  para7: poprawnyZawodnik[];
  para8: poprawnyZawodnik[];


  // private zapisaniCollection: AngularFirestoreCollection<Kategorie>;
  // private zapisani: Observable<any[]>;

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  wagadoFun: string;
  pasdoFun: string;
  private pasyColection: AngularFirestoreCollection<any[]>;
  private pasy: Observable<any[]>;

  private wagiColection: AngularFirestoreCollection<any[]>;
  private wagi: Observable<any[]>;
  zawodnicy;


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
  btnZegar: string = "start"
  //#endregion


  constructor(private db: AngularFirestore, private podzialServ: TurniejPodzialSerService) {

    //#region pasyWagi
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
    //#endregion

  }
  
  ladujPare() {
    this.aktualnaPara++;
    if (this.aktualnaPara == 0) {
      this.wyswietlPara = this.para1[0].nazwa + " " + this.para1[1].nazwa;
    } if (this.aktualnaPara == 1) {

      this.wyswietlPara = this.para2[0].nazwa + " " + this.para2[1].nazwa;
    } if (this.aktualnaPara == 2) {

      this.wyswietlPara = this.para3[0].nazwa + " " + this.para3[1].nazwa;
    } if (this.aktualnaPara == 3) {

      this.wyswietlPara = this.para4[0].nazwa + " " + this.para4[1].nazwa;
    } if (this.aktualnaPara == 4) {

      this.wyswietlPara = this.para5[0].nazwa + " " + this.para5[1].nazwa;
    } if (this.aktualnaPara == 5) {

      this.wyswietlPara = this.para6[0].nazwa + " " + this.para6[1].nazwa;
    } if (this.aktualnaPara == 6) {

      this.wyswietlPara = this.para7[0].nazwa + " " + this.para7[1].nazwa;
    } if (this.aktualnaPara == 7) {
      this.wyswietlPara = this.para8[0].nazwa + " " + this.para8[1].nazwa;
    }
  }


  ladujZawodnikow(waga: string, pas: string) {
    this.wagadoFun = waga;
    this.pasdoFun = pas;
    this.aktualnaPara = 0;
    this.podzialServ.getPodzial(this.current, waga, pas, 'man').subscribe(data => {
      this.zawodnicy = data;
      // console.log(data);
      setTimeout(() => {
        if (data) {
          this.para1 = data.filter(z => z.pozycjaStartowa == "0" || z.pozycjaStartowa == "15");
          this.para2 = data.filter(z => z.pozycjaStartowa == "1" || z.pozycjaStartowa == "14");
          this.para3 = data.filter(z => z.pozycjaStartowa == "7" || z.pozycjaStartowa == "8");
          this.para4 = data.filter(z => z.pozycjaStartowa == "6" || z.pozycjaStartowa == "9");
          this.para5 = data.filter(z => z.pozycjaStartowa == "4" || z.pozycjaStartowa == "11");
          this.para6 = data.filter(z => z.pozycjaStartowa == "5" || z.pozycjaStartowa == "10");
          this.para7 = data.filter(z => z.pozycjaStartowa == "3" || z.pozycjaStartowa == "12");
          this.para8 = data.filter(z => z.pozycjaStartowa == "2" || z.pozycjaStartowa == "13");
        }
      }, 1000);
    });
  }

  ngOnInit() {

  }
  zaw1(x) {
    this.zawodnik1 = x;
  }
  zaw2(x) {
    this.zawodnik2 = x;
  }


  updateZawodnika(slo: poprawnyZawodnik, idDokumentu) {
    // console.log(idDokumentu);
    this.db.doc('/turnieje/'+this.current+'/'+this.pasdoFun+'/'+this.wagadoFun+'/man/'+idDokumentu).update(slo);

  }


  aktualizujZawodnikow(ktoryZawo: number) {


    if (this.aktualnaPara == 0) {
      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para1[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para1[0].id);
      } else {
        this.para1[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para1[1], this.para1[1].id);
      }

    } if (this.aktualnaPara == 1) {

      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para2[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para2[0].id);
      } else {
        this.para2[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para2[1], this.para2[1].id);
      }

    } if (this.aktualnaPara == 2) {

      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para3[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para3[0].id);
      } else {
        this.para3[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para3[1], this.para3[1].id);
      }
    } if (this.aktualnaPara == 3) {

      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para4[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para4[0].id);
      } else {
        this.para4[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para4[1], this.para4[1].id);
      }
    } if (this.aktualnaPara == 4) {

      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para5[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para5[0].id);
      } else {
        this.para5[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para5[1], this.para5[1].id);
      }
      
    } if (this.aktualnaPara == 5) {

      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para6[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para6[0].id);
      } else {
        this.para6[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para6[1], this.para6[1].id);
      }
      
    } if (this.aktualnaPara == 6) {

      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para7[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para7[0].id);
      } else {
        this.para7[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para7[1], this.para7[1].id);
      }
    } if (this.aktualnaPara == 7) {
      if (ktoryZawo == 1) {
        let pop: poprawnyZawodnik = new poprawnyZawodnik();
        pop = this.para8[0];
        pop.duzePunkty = '' + this.duzePunktyZawodnik1;
        this.updateZawodnika(pop, this.para8[0].id);
      } else {
        this.para8[1].duzePunkty = '' + this.duzePunktyZawodnik2;
        this.updateZawodnika(this.para8[1], this.para8[1].id);
      }
    }
  }





  //#region  obslugaPunktow
  zwiekszDuzeZawodnik1(ilePunktow) {

    this.duzePunktyZawodnik1 += ilePunktow;
    if (this.duzePunktyZawodnik1 < 0) {
      this.duzePunktyZawodnik1 = 0;
    }
    this.aktualizujZawodnikow(1);
  }
  zwiekszDuzeZawodnik2(ilePunktow) {
    
    this.duzePunktyZawodnik2 += ilePunktow;
    if (this.duzePunktyZawodnik2 < 0) {
      this.duzePunktyZawodnik2 = 0;
    }
    this.aktualizujZawodnikow(2);
  }

  zwiekszKaryZawodnik1(ilePunktow) {
    this.karyZawodnik1 += ilePunktow;
    if (this.karyZawodnik1 > 0) {
      this.karyZawodnik1 = 0;
    }
  }
  zwiekszKaryZawodnik2(ilePunktow) {
    this.karyZawodnik2 += ilePunktow;
    if (this.karyZawodnik2 > 0) {
      this.karyZawodnik2 = 0;
    }
  }
  zwiekszPrzewagiZawodnik1(ilePunktow) {
    this.przewagiZawodnik1 += ilePunktow;
    if (this.przewagiZawodnik1 < 0) {
      this.przewagiZawodnik1 = 0;
    }
  }
  zwiekszPrzewagiZawodnik2(ilePunktow) {
    this.przewagiZawodnik2 += ilePunktow;
    if (this.przewagiZawodnik2 < 0) {
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
      setTimeout(() => { this.zegar(); }, 1000);
    }
  }

  wyswietlCzas(minuty: number, sekundy: number): any {
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
      this.btnZegar = "Stop";
    }
    this.StopTimer();
  }

  StopTimer() {
    if (this.flagaStart === 2) {
      this.btnZegar = "Start";
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
