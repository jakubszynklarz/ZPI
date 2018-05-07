import { Component, OnInit } from '@angular/core';
import { KategorieService } from '../../turnieje/shared/kategorie.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { TurniejeService } from '../../turnieje/zapisz-sie/serwisy/turniej.service';
import { Zawondik } from '../../panel-sedziowski/wyniksender/wyniksender.component';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { LadderService } from '../sheard/ladder.service';

@Component({
  selector: 'app-generuj-ladder',
  templateUrl: './generuj-ladder.component.html',
  styleUrls: ['./generuj-ladder.component.css']
})
export class GenerujLadderComponent implements OnInit {
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  zawColection: poprawnyZawodnik[];

  constructor(private db: AngularFirestore, private ladServ: LadderService) {
     ladServ.getZawonikow(this.current,'heavy','czarny','man').subscribe(data => {this.zawColection = data});
    // this.zawColection = this.db.collection<poprawnyZawodnik>('/turnieje/'+ this.current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});
   }

  ngOnInit() {
  }

}
