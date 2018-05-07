import { Component, OnInit } from '@angular/core';
import { Modeloo } from '../../shared/modeloo.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Kategorie } from '../../shared/kategorie.model';
import { TurniejPodzialSerService } from '../../shared/turniej-podzial-ser.service';
import { poprawnyZawodnik } from '../../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';

@Component({
  selector: 'app-zapisane',
  templateUrl: './zapisane.component.html',
  styleUrls: ['./zapisane.component.css']
})
export class ZapisaneComponent implements OnInit {

  public check:number;
  public defula:number=0;
  selectedModeloo: Modeloo = new Modeloo();

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  private turnieCollection: AngularFirestoreCollection<Modeloo>;

  private turnieje: Observable<any[]>;
  private kategorie: Observable<any[]>;
  private kateCollection: AngularFirestoreCollection<Kategorie>;

  private zapisaniCollection: AngularFirestoreCollection<Kategorie>;
  private zapisani: Observable<any[]>;
  zawoCzarnyHeavy :poprawnyZawodnik[]
  zawoCzarnyRooster :poprawnyZawodnik[]
  
  
  constructor(private db: AngularFirestore,podzial:TurniejPodzialSerService) { 
    podzial.getPodzial(this.current, 'heavy','czarny' , 'man').subscribe(data => {this.zawoCzarnyHeavy = data})
    podzial.getPodzial(this.current, 'rooster','czarny' , 'man').subscribe(data => {this.zawoCzarnyRooster = data})
    
    
    this.turnieCollection=db.collection<Modeloo>('/turnieje');
    this.turnieje=this.turnieCollection.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        
        return {id,...data};
      })
    })

    this.zapisaniCollection=db.collection<Modeloo>('/turnieje').doc(this.current).collection('zapisani').doc('gi').collection('zawodnicy');
    this.zapisani=this.zapisaniCollection.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        
        return {id,...data};
      })
    })

    
    
  }
  ngOnInit() {
   
    
   
    
    
  }
 
  private update(){
    var updateNested = this.db.collection('turnieje').doc(this.current).update({
      opis: this.selectedModeloo.opis,
      kiedy:this.selectedModeloo.kiedy,
      do_kiedyrej:this.selectedModeloo.do_kiedyrej,
      miejsce:this.selectedModeloo.miejsce,
      nazwa:this.selectedModeloo.nazwa,
      nr_konta:this.selectedModeloo.nr_konta,
      wpisowe:this.selectedModeloo.wpisowe
    });
  }
  

}
