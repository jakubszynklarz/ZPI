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

  public url:string[] = window.location.href.split('/');
  zawodnicy;
  // pasy = ['bialy', 'brązowy', 'czarny', 'niebieski', 'purpurowy'];
  // wagi = ['heavy', 'rooster'];
  // this.url[4] - pasy
  // this.url[5] - wagi

  pas :string;
  waga :string;

  constructor(private db: AngularFirestore, private ladServ: LadderService,private podzialServ: TurniejPodzialSerService) { 
    // console.log(this.url);
    this.pas = this.url[4];
    this.waga = this.url[5];
    ladServ.getzawo(this.current, this.url[5], this.url[4], 'man').subscribe(data => { this.zawColection8 = data });
  }

  ngOnInit() {
  }



}
