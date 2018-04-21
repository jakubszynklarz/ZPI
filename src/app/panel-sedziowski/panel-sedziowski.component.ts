import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-sedziowski',
  templateUrl: './panel-sedziowski.component.html',
  styleUrls: ['./panel-sedziowski.component.css']
})
export class PanelSedziowskiComponent implements OnInit {
  duzePunktyZawodnik1: number = 0;
  duzePunktyZawodnik2: number = 0;
  
  przewagiZawodnik1: number = 0;
  przewagiZawodnik2: number = 0;
  
  karyZawodnik1: number = 0;
  karyZawodnik2: number = 0;
  
  licznik = 0;
  flagaStart = 0;
  
  ZegarCzas: string = "0";
  btnZegar:string = "start"
  //#endregion
  constructor() { }

  ngOnInit() {

  }

  //#region  obslugaPunktow
  zwiekszDuzeZawodnik1(ilePunktow){
    this.duzePunktyZawodnik1 += ilePunktow;
  }
  zwiekszDuzeZawodnik2(ilePunktow){
    this.duzePunktyZawodnik2 += ilePunktow;
  }

  zwiekszKaryZawodnik1(ilePunktow){
    this.karyZawodnik1 += ilePunktow;
  }
  zwiekszKaryZawodnik2(ilePunktow){
    this.karyZawodnik2 += ilePunktow;
  }
  zwiekszPrzewagiZawodnik1(ilePunktow){
    this.przewagiZawodnik1 += ilePunktow;
  }
  zwiekszPrzewagiZawodnik2(ilePunktow){
    this.przewagiZawodnik2 += ilePunktow;
  }
  //#endregion 
  
  
  zegar() {
    //console.log(flagaStart);
    if (this.flagaStart === 1) {
      this.licznik++;
        // let sekundy = this.licznik % 60;
        // let minuty = Math.floor(this.licznik / 60);
        // wyswietlCzas(minuty, sekundy);
        // setTimeout('zegar()',1000);
        setTimeout(()=>{ this.zegar() ;} ,1000);
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

}
