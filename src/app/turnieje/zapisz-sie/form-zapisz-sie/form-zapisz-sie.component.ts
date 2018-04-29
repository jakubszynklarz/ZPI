import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeysPipePipe } from '../../../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';
import { NgForm } from '@angular/forms';
import { KategorieService, KatGiNogi } from '../../shared/kategorie.service';


@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {


  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);


  menWomen: any[];
  facetGi: any[];
  private facetNoGi: any[];
  private kobietaNoGi: any[];
  private kobietaGi: any[];
  private pasy: any[]
  private turniejGiNogi: KatGiNogi[];
  private kategorieCollection: AngularFirestoreCollection<Kategorie>;
  private kategorie: Observable<any[]>;

  constructor(private db: AngularFirestore, private katServ: KategorieService) {
    
    katServ.getKatGiNogi(this.current).subscribe(data => { this.turniejGiNogi = data });

    katServ.getPasy().subscribe(data => { this.pasy = data });
    
    katServ.getManWoman(this.current).subscribe(data => { this.menWomen = data });
    
    katServ.getWagi('man', 'gi').subscribe(data => { this.facetGi = data })
    
    katServ.getWagi('man', 'nogi').subscribe(data => { this.facetNoGi = data })
    
    katServ.getWagi('women', 'gi').subscribe(data => { this.kobietaGi = data })
    
    katServ.getWagi('women', 'nogi').subscribe(data => { this.kobietaNoGi = data })

  }


  zapiszSie(formularz: nowyZawodnik) {
    let dobryZawonidk: poprawnyZawodnik = new poprawnyZawodnik();
    // dobryZawonidk.kategoria = formularz.kategoria;
    dobryZawonidk.klub = formularz.Klub;
    dobryZawonidk.nazwa = formularz.ImieNazwisko;
    dobryZawonidk.oplacone = false;
    dobryZawonidk.pas = formularz.selectBelt;
    dobryZawonidk.plec = formularz.selectSex;
    dobryZawonidk.waga = formularz.selectWeight;
    dobryZawonidk.kategoria = "gi";
    console.log(dobryZawonidk)
    this.db.collection<any>('turnieje').doc('' + this.current).
      collection('zapisani').doc('gi').collection<any>('zawodnicy').
      add(JSON.parse(JSON.stringify(dobryZawonidk)));
    console.log("dodano zawodnika");
  }


  ngOnInit() {
  }

}
export class Kategorie {


}



export class poprawnyZawodnik {
  constructor() { }
  public nazwa?: string;
  public oplacone?: boolean;
  public pas?: string;
  public waga?: string;
  public klub?: string;
  public plec?: string;
  public kategoria?: string;

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

