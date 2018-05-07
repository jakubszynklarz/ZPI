import { TurniejService } from './../shared/turniej.service';
import { Turniej } from '../shared//turniej.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { TurniejeService } from '../zapisz-sie/serwisy/turniej.service';
@Component({
  selector: 'app-form-stworz-turniej',
  templateUrl: './form-stworz-turniej.component.html',
  styleUrls: ['./form-stworz-turniej.component.css']
})
export class FormStworzTurniejComponent implements OnInit {

  private tworca: string = "Endzik"
  selectedModeloo: Modeloo = new Modeloo();
  private turnieCollection: AngularFirestoreCollection<Modeloo>;
  private turnieje: Observable<any[]>;


  constructor(private _turniejSerivce: TurniejeService,
    private _router: Router, private db: AngularFirestore) {
    this.turnieCollection = db.collection<Modeloo>('/turnieje');
    this.turnieje = this.turnieCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;

        return { id, ...data };
      })
    })

  }

  ngOnInit() {
  }
  private add() {
    let turniej: Modeloo = new Modeloo();
    turniej.opis = this.selectedModeloo.opis,
      turniej.kiedy = this.selectedModeloo.kiedy,
      turniej.do_kiedyrej = this.selectedModeloo.do_kiedyrej,
      turniej.miejsce = this.selectedModeloo.miejsce,
      turniej.nazwa = this.selectedModeloo.nazwa,
      turniej.nr_konta = this.selectedModeloo.nr_konta,
      turniej.wpisowe = this.selectedModeloo.wpisowe,
      turniej.tworca = this.tworca
    turniej.kategoria = this.selectedModeloo.kategoria;

    this._turniejSerivce.setTurniej(turniej);

    
    // var updateNested = this.db.collection('turnieje').add({
    //   opis: this.selectedModeloo.opis,
    //   kiedy: this.selectedModeloo.kiedy,
    //   do_kiedyrej: this.selectedModeloo.do_kiedyrej,
    //   miejsce: this.selectedModeloo.miejsce,
    //   nazwa: this.selectedModeloo.nazwa,
    //   nr_konta: this.selectedModeloo.nr_konta,
    //   wpisowe: this.selectedModeloo.wpisowe,
    //   tworca: this.tworca

    // });

  }
}
