import { Component, OnInit } from '@angular/core';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';
import {} from '@types/node'
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
@Component({
  selector: 'app-sixteen',
  templateUrl: './sixteen.component.html',
  styleUrls: ['./sixteen.component.css']
})


export class SixteenComponent implements OnInit {

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  
  // public poz1: string;
  // public poz2: string;
  // public poz3: string;
  // public poz4: string;
  // public poz5: string;
  // public poz6: string;
  // public poz7: string;
  // public poz8: string;
  // public poz9: string;
  // public poz10: string;
  // public poz11: string;
  // public poz12: string;
  // public poz13: string;
  // public poz14: string;
  // public poz15: string;
  // public poz16: string;
  public nazwaturnieju: string;
  
  // czarny heavy
  zawColection11: poprawnyZawodnik[];
  zawColection12: poprawnyZawodnik[];
 
    // czarny rooster
  zawColection21: poprawnyZawodnik[];
  zawColection22: poprawnyZawodnik[];

  
  turnieje: Modeloo;

  pasy = ['bialy', 'brązowy', 'czarny', 'niebieski', 'purpurowy'];
  wagi = ['heavy', 'rooster'];

  public url:string[] = window.location.href.split('/');

  constructor(private db: AngularFirestore, private ladServ: LadderService, private podzielone: TurniejPodzialSerService) {

    ladServ.getTur().subscribe(data => { this.turnieje = data.filter(turn => turn.id == this.current)[0];});

    console.log(this.url);

    // heavy czarny 
    

    
      
    setTimeout(() => {
      this.nazwaturnieju=this.turnieje.nazwa
          }, 1000);
          }


// pod guzikiem
  opusmagnum(waga:string,pas:string) {
    let fun=
      this.
        // Przed podziałem
        ladServ.getZawonikow(this.current, waga, pas, 'man','gi').subscribe(data => { this.zawColection12 = data });
   let nul= this. 
      // dzieli
      ladServ.getzawo(this.current, waga,pas, 'man').subscribe(data => { this.zawColection11 = data });

    this.mojaFun(waga,pas);
    
    setTimeout(() => {
      this.podziel(waga,pas);
    }, 1300);
    setTimeout(() => {
      fun.unsubscribe();
      nul.unsubscribe();
    }, 1500);
    
  }

  // czyszczenie bazy
  mojaFun(waga?:string, pas?:string) {
    
    let cos = this.ladServ.getzawo(this.current, waga, pas, "man").subscribe(data2 => {
      setTimeout(() => {

        for (let i = 0; i < data2.length; i++) {
         
          this.db.doc('/turnieje/' +this.current+'/'+pas+'/'+waga+'/man/'+ data2[i].id).delete();
          
        }
        ;
      }, 100);
    });

    setTimeout(() => {
      cos.unsubscribe();
    }, 1000);
  }
  


// podzial na kategorie
  podziel(waga?:string, pas?:string) {

    let i = 0;
    var shuffle = require('shuffle-array'),
      collection3 = this.zawColection12;

    shuffle(collection3);

    console.log(collection3);
    for (let zaw of collection3) {
      

      zaw.pozycjaStartowa = '' + i;
      zaw.pierwszyoQ = "false";
      zaw.drugioQ = "false";
      zaw.trzecioQ = "false";
      zaw.czwartyoQ = "false";
      zaw.piatyoQ = "false";
      zaw.szustyoQ = "false";
      zaw.siuoQ = "false";
      zaw.osmyuoQ = "false";

      zaw.pierwszySFinal = "false";
      zaw.drugiSFinal = "false";
      zaw.trzeciSFinal = "false";
      zaw.czwartySFinal = "false";

      zaw.pierwszyFinal = "false";
      zaw.drugiFinal = "false";
       
      zaw.winner = "false";
      i++;
      
      this.db.collection<poprawnyZawodnik[]>('/turnieje/' + this.current + '/' + pas + '/' + waga + '/man').doc(zaw.id).set(JSON.parse(JSON.stringify(zaw)))
    }
    let pusty: poprawnyZawodnik = new poprawnyZawodnik();
    pusty.nazwa = 'Brak zawodnika';
    pusty.klub = ' ';
    for (let k = i; k <= 16; k++) {
      pusty.pozycjaStartowa = '' + k;
      pusty.pierwszyoQ = "false";
      pusty.drugioQ = "false";
      pusty.trzecioQ = "false";
      pusty.czwartyoQ = "false";
      pusty.piatyoQ = "false";
      pusty.szustyoQ = "false";
      pusty.siuoQ = "false";
      pusty.osmyuoQ = "false";

      pusty.pierwszySFinal = "false";
      pusty.drugiSFinal = "false";
      pusty.trzeciSFinal = "false";
      pusty.czwartySFinal = "false";

      pusty.pierwszyFinal = "false";
      pusty.drugiFinal = "false";
       
      pusty.winner = "false";
      if (k >= i) {
        this.db.collection<poprawnyZawodnik[]>('/turnieje/' + this.current + '/' +pas + '/' +waga + '/man').add(JSON.parse(JSON.stringify(pusty)));
      }
    }
  }

  

  ngOnInit() {

  }

}
