import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';

@Component({
  selector: 'app-wynikion',
  templateUrl: './wynikion.component.html',
  styleUrls: ['./wynikion.component.css']
})
export class WynikionComponent implements OnInit {

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

  // czarny heavy
  zawColection8: poprawnyZawodnik[];


  para1: poprawnyZawodnik[];
  para2: poprawnyZawodnik[];
  para3: poprawnyZawodnik[];
  para4: poprawnyZawodnik[];
  para5: poprawnyZawodnik[];
  para6: poprawnyZawodnik[];
  para7: poprawnyZawodnik[];
  para8: poprawnyZawodnik[];

  aktualnaPara: number = -1;
  wyswietlPara: string;

  wagadoFun: string;
  pasdoFun: string;

  zawodnicy;
  pasy = ['bialy', 'brązowy', 'czarny', 'niebieski', 'purpurowy'];
  wagi = ['heavy', 'rooster'];
  constructor(private db: AngularFirestore, private ladServ: LadderService,private podzialServ: TurniejPodzialSerService) { 
    ladServ.getzawo(this.current, this.wagi[0], this.pasy[2], 'man').subscribe(data => { this.zawColection8 = data });

  }

  ngOnInit() {
  }
test(){
  for (let zaw of this.zawColection8) {
    console.log(zaw);
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
}
