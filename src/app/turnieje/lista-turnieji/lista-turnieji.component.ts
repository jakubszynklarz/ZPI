import { TurniejService } from './../shared/turniej.service';
import { Component, OnInit } from '@angular/core';
import { Turniej } from '../shared//turniej.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
@Component({
  selector: 'app-lista-turnieji',
  templateUrl: './lista-turnieji.component.html',
  styleUrls: ['./lista-turnieji.component.css']
})
export class ListaTurniejiComponent implements OnInit {
  
  private turnieCollection: AngularFirestoreCollection<Modeloo>;
  private turnieje: Observable<any[]>;
  
  constructor(private db: AngularFirestore) { 
    this.turnieCollection=db.collection<Modeloo>('/turnieje');
    this.turnieje=this.turnieCollection.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        return {id,...data};
      })
    })
  }
  ngOnInit() {
    

  }

}
