import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-sedziowski',
  templateUrl: './panel-sedziowski.component.html',
  styleUrls: ['./panel-sedziowski.component.css']
})
export class PanelSedziowskiComponent implements OnInit {
  
  

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
  constructor() { }

  ngOnInit() {

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

}
