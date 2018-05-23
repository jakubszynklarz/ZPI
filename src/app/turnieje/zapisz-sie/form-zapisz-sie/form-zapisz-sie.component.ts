import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeysPipePipe } from '../../../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';
import { NgForm } from '@angular/forms';
import { KategorieService, KatGiNogi } from '../../shared/kategorie.service';
import { TurniejeService } from '../serwisy/turniej.service';
import { Modeloo } from '../../../zarzadzaj/shared/modeloo.model';


@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {


  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);


  menWomen: any[];
  facetGi: any[];
   facetNoGi: any[];
   kobietaNoGi: any[];
   kobietaGi: any[];
   pasy: any[]
   turniejGiNogi: KatGiNogi;
   kategorieCollection: AngularFirestoreCollection<Kategorie>;
   kategorie: Observable<any[]>;
  turniej:Modeloo = null;

  kmenNogi:KategorieService = new KategorieService(this.db);
  kwomenGi:KategorieService = new KategorieService(this.db);
  kwomenNogi:KategorieService = new KategorieService(this.db);
  
  
  constructor(private db: AngularFirestore, private katServ: KategorieService,private turn:TurniejeService) {
    turn.getTurnieje().subscribe(data => {this.turniej = data.find(t=> t.id == this.current)})
    
    // katServ.getKatGiNogi(this.current).subscribe(data => { this.turniejGiNogi = data[0] });

    katServ.getPasy().subscribe(data => { this.pasy = data });
    
    katServ.getManWoman(this.current).subscribe(data => { this.menWomen = data });
    
    katServ.getWagi('man', "gi").subscribe(data => { this.facetGi = data });
    
    katServ.getWagi('man', 'nogi').subscribe(data => { this.facetNoGi = data });
    katServ.getWagi('women', 'nogi').subscribe(data => { this.kobietaNoGi = data });
    
    katServ.getWagi('women', "gi").subscribe(data => { this.kobietaGi = data });
    
    

  }



  zapiszSie(formularz: NgForm) {
    
    let dobryZawonidk: poprawnyZawodnik = new poprawnyZawodnik();
    // dobryZawonidk.kategoria = formularz.kategoria;
    dobryZawonidk.klub = formularz.value.Klub;
    dobryZawonidk.nazwa = formularz.value.ImieNazwisko;
    dobryZawonidk.oplacone = false;
    dobryZawonidk.pas = formularz.value.selectBelt;
    dobryZawonidk.plec = formularz.value.selectSex;
    dobryZawonidk.waga = formularz.value.selectWeight;
    dobryZawonidk.kategoria = this.turniej.kategoria;
    // console.log(dobryZawonidk)
      // formularz.resetForm();
    
    this.db.collection<any>('turnieje').doc('' + this.current).
      collection('zapisani').doc(this.turniej.kategoria).collection<any>('zawodnicy').
      add(JSON.parse(JSON.stringify(dobryZawonidk)));
      
    // console.log("dodano zawodnika");
  }


  ngOnInit() {
  }

}
export class Kategorie {


}



export class poprawnyZawodnik {
  constructor() { }
  public id?:string;
  public nazwa?: string;
  public oplacone?: boolean;
  public pas?: string;
  public waga?: string;
  public klub?: string;
  public plec?: string;
  public kategoria?: string;
  public pozycjaStartowa?:string;
  // cwierc finaly
  public pierwszyoQ?:string;
  public drugioQ?:string;
  public trzecioQ?:string;
  public czwartyoQ?:string;
  public piatyoQ?:string;
  public szustyoQ?:string;
  public siuoQ?:string;
  public osmyuoQ?:string;
  // polfinaly
  public pierwszySFinal?:string;
  public drugiSFinal?:string;
  public trzeciSFinal?:string;
  public czwartySFinal?:string;
  // final
  public pierwszyFinal?:string;
  public drugiFinal?:string;
  public winner?:string;

  // punkty
  public duzePunkty?:string;
  public przewagi?:string;
  public kary?:string;
  

  
  
  
}

export class nowyZawodnik {
  public ImieNazwisko?: string;
  public Klub?: string;
  public email?: string;
  public selectSex?: string;
  public selectBelt?: string;
  public kategoria?: string;
  public selectWeight?: string;
}

