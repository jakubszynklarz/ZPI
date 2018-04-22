import { Component, OnInit } from '@angular/core';
import {ZarzadService} from '../../shared/zarzad.service'
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Modeloo} from '../../shared/modeloo.model'
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'lista-zapisane',
  templateUrl: './lista-zapisane.component.html',
  styleUrls: ['./lista-zapisane.component.css']
})
export class ListaZapisaneComponent implements OnInit {
  
public username:string='OskaczHejter';

public value:boolean=true;

private turnieCollection: AngularFirestoreCollection<Modeloo>;
private turnieje: Observable<any[]>;


  constructor(private zarzadService: ZarzadService,db: AngularFirestore) { 
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

