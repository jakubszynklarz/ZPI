import { Component, OnInit } from '@angular/core';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';

@Component({
  selector: 'app-drabinka-wyswietl',
  templateUrl: './drabinka-wyswietl.component.html',
  styleUrls: ['./drabinka-wyswietl.component.css']
})
export class DrabinkaWyswietlComponent implements OnInit {

 
  poz1:poprawnyZawodnik;
  poz2:poprawnyZawodnik;
  poz3:poprawnyZawodnik;
  poz4:poprawnyZawodnik;
  poz5:poprawnyZawodnik;
  poz6:poprawnyZawodnik;
  poz7:poprawnyZawodnik;
  poz8:poprawnyZawodnik;
  poz9:poprawnyZawodnik;
  poz10:poprawnyZawodnik;
  poz11:poprawnyZawodnik;
  poz12:poprawnyZawodnik;
  poz13:poprawnyZawodnik;
  poz14:poprawnyZawodnik;
  poz15:poprawnyZawodnik;
  poz16:poprawnyZawodnik;

  q1:poprawnyZawodnik;
  q2:poprawnyZawodnik;
  q3:poprawnyZawodnik;
  q4:poprawnyZawodnik;
  q5:poprawnyZawodnik;
  q6:poprawnyZawodnik;
  q7:poprawnyZawodnik;
  q8:poprawnyZawodnik;

  
  sf1:poprawnyZawodnik;
  sf2:poprawnyZawodnik;
  sf3:poprawnyZawodnik;
  sf4:poprawnyZawodnik;

  fi1:poprawnyZawodnik;
  fi2:poprawnyZawodnik;

  zwyciezca:poprawnyZawodnik;

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  zawodnicy: poprawnyZawodnik[];
  turnieje: Modeloo[];
  public url:string[] = window.location.href.split('/');
  zawColection: poprawnyZawodnik[];
  turn;
  turniej;

  constructor(private db: AngularFirestore, private ladServ: LadderService, private podzielone: TurniejPodzialSerService) {

    // ladServ.getzawo(this.current, this.url[5], this.url[4], 'man').subscribe(data => { this.zawColection = data });
 
    ladServ.getTur().subscribe(data => {
      this.turnieje = data;
        if (data) {
          this.turniej = data.filter(z => z.id == this.url[6])[0];
        }
      })
      this.ladujZawodnikow()
     
    
          
   }

  ngOnInit() {
    
  }
  ladujZawodnikow() {
 
    
    this.ladServ.getzawo(this.current, this.url[5], this.url[4], 'man').subscribe(data => {
    this.zawodnicy = data;
      if (data) {
          this.poz1 = data.find(z => z.pozycjaStartowa == "0");
          this.poz2 = data.find(z => z.pozycjaStartowa == "1");
          this.poz3 = data.find(z => z.pozycjaStartowa == "2");
          this.poz4 = data.find(z => z.pozycjaStartowa == "3");
          this.poz5 = data.find(z => z.pozycjaStartowa == "4");
          this.poz6 = data.find(z => z.pozycjaStartowa == "5");
          this.poz7 = data.find(z => z.pozycjaStartowa == "6");
          this.poz8 = data.find(z => z.pozycjaStartowa == "7");
          this.poz9 = data.find(z => z.pozycjaStartowa == "8");
          this.poz10 = data.find(z => z.pozycjaStartowa == "9");
          this.poz11 = data.find(z => z.pozycjaStartowa == "10");
          this.poz12 = data.find(z => z.pozycjaStartowa == "11");
          this.poz13 = data.find(z => z.pozycjaStartowa == "12");
          this.poz14 = data.find(z => z.pozycjaStartowa == "13");
          this.poz15 = data.find(z => z.pozycjaStartowa == "14");
          this.poz16 = data.find(z => z.pozycjaStartowa == "15");

          this.q1=data.find(z => z.pierwszyoQ == "true");
          this.q2=data.find(z => z.drugioQ == "true");
          this.q3=data.find(z => z.trzecioQ == "true");
          this.q4=data.find(z => z.czwartyoQ == "true");
          this.q5=data.find(z => z.piatyoQ == "true");
          this.q6=data.find(z => z.szustyoQ == "true");
          this.q7=data.find(z => z.siuoQ == "true");
          this.q8=data.find(z => z.osmyuoQ == "true");

          this.sf1=data.find(z => z.pierwszySFinal == "true");
          this.sf2=data.find(z => z.drugiSFinal == "true");
          this.sf3=data.find(z => z.trzeciSFinal == "true");
          this.sf4=data.find(z => z.czwartySFinal == "true");

          this.fi1=data.find(z => z.pierwszyFinal == "true");
          this.fi2=data.find(z => z.drugiFinal == "true");
          
          this.zwyciezca=data.find(z => z.winner == "true");
          

      }
   
    });


  }
  

}
