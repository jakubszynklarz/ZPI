import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { TurniejeService } from '../zapisz-sie/serwisy/turniej.service';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-turniej-details',
  templateUrl: './turniej-details.component.html',
  styleUrls: ['./turniej-details.component.css']
})
export class TurniejDetailsComponent implements OnInit {

  // _turniejSerivce: any;
  // tworca: string;
  // selectedModeloo: Modeloo = new Modeloo();
  // public zapisani: Observable<any[]>;
  constructor(private db: AngularFirestore, private turn:TurniejeService) { }

  ngOnInit() {
  }
  // public add() {
  //   let turniej: Modeloo = new Modeloo();
  //   turniej.opis = this.selectedModeloo.opis,
  //     turniej.kiedy = this.selectedModeloo.kiedy,
  //     turniej.do_kiedyrej = this.selectedModeloo.do_kiedyrej,
  //     turniej.miejsce = this.selectedModeloo.miejsce,
  //     turniej.nazwa = this.selectedModeloo.nazwa,
  //     turniej.nr_konta = this.selectedModeloo.nr_konta,
  //     turniej.wpisowe = this.selectedModeloo.wpisowe,
  //     turniej.tworca = this.tworca
  //   turniej.kategoria = this.selectedModeloo.kategoria;

  //   this._turniejSerivce.setTurniej(turniej);
  // }
}
