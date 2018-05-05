import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { KeysPipePipe } from '../../zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';
import { TurniejeService } from './serwisy/turniej.service';

@Component({
  selector: 'app-zapisz-sie',
  templateUrl: './zapisz-sie.component.html',
  styleUrls: ['./zapisz-sie.component.css']
})
export class ZapiszSieComponent implements OnInit {




  selectedModeloo: Modeloo = new Modeloo();

  public current: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  turnieje: Modeloo;

  constructor(private db: AngularFirestore, public turnjServe: TurniejeService) {

    this.turnjServe.getTurnieje().subscribe(data => { this.turnieje = data.find(turn => turn.id == this.current);});

  }


  ngOnInit() {
    // this.turnjServe.getTurnieje().subscribe(data => { this.turnieje = data.find(turn => turn.id == this.current);});

  }

  

}

