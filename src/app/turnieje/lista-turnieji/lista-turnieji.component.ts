import { TurniejService } from './../shared/turniej.service';
import { Component, OnInit } from '@angular/core';
import { Turniej } from '../shared//turniej.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { TurniejeService } from '../zapisz-sie/serwisy/turniej.service';
@Component({
  selector: 'app-lista-turnieji',
  templateUrl: './lista-turnieji.component.html',
  styleUrls: ['./lista-turnieji.component.css']
})
export class ListaTurniejiComponent implements OnInit {

  // public turnieCollection: AngularFirestoreCollection<Modeloo>;
  // public turnieje: Observable<any[]>;
  values: string = '';
  turnieje: Modeloo[];
  constructor(private db: AngularFirestore, turServ: TurniejeService) {
    turServ.getTurnieje().subscribe(data => this.turnieje = data)


  }
  onKey(event: any) {
    this.values = event.target.value;
  }

  ngOnInit() {


  }

}
