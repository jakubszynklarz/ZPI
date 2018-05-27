import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Modeloo } from '../../shared/modeloo.model';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { Kategorie } from '../../shared/kategorie.model';
import { poprawnyZawodnik } from '../../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { TurniejeService } from '../../../turnieje/zapisz-sie/serwisy/turniej.service';
@Component({
  selector: 'app-myeven',
  templateUrl: './myeven.component.html',
  styleUrls: ['./myeven.component.css']
})
export class MyevenComponent implements OnInit {


  public pas:string = 'black';
  public waga:string='heavy';

  public check:number;
  public defula:number=0;
  selectedModeloo: Modeloo = new Modeloo();

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  public turnieCollection: AngularFirestoreCollection<Modeloo>;
  public turnieje: Observable<any[]>;

  public zapisaniCollection: AngularFirestoreCollection<Kategorie>;
  public zapisani: Observable<any[]>;

  public zapisaniCollectionNogi: AngularFirestoreCollection<Kategorie>;
  public zapisaniNogi: Observable<any[]>;

  tenTurniej :Modeloo;
  
  constructor(private db: AngularFirestore, private turServ:TurniejeService) { 
    // turServ.getTurnieje().subscribe(data =>this.tenTurniej = data.find(d => d.id== this.current))


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


    this.zapisaniCollectionNogi=db.collection<Modeloo>('/turnieje').doc(this.current).collection('zapisani').doc('nogi').collection('zawodnicy');
    this.zapisaniNogi=this.zapisaniCollectionNogi.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        
        return {id,...data};
      })
    })
    
  }

  zaplacone(zawo:poprawnyZawodnik){
    
    zawo.oplacone = true;
    // console.log(zawo.kategoria);
    if (zawo.kategoria =="gi"){
      this.db.doc('/turnieje/'+this.current+'/zapisani/gi/zawodnicy/'+zawo.id).update(JSON.parse(JSON.stringify(zawo)));
    }
    else{
      zawo.oplacone = true;
      this.db.doc('/turnieje/'+this.current+'/zapisani/nogi/zawodnicy/'+zawo.id).update(JSON.parse(JSON.stringify(zawo)));
    }

  }
  ngOnInit() {

    
  }
  def(x){
    this.check=1;
    this.selectedModeloo.nazwa=x.nazwa
    this.selectedModeloo.opis=x.opis
    this.selectedModeloo.miejsce=x.miejsce
    this.selectedModeloo.nr_konta=x.nr_konta
    this.selectedModeloo.wpisowe=x.wpisowe
    this.selectedModeloo.kiedy=x.kiedy
    this.selectedModeloo.do_kiedyrej=x.do_kiedyrej
  }
    
  public update(){
    let updateNested = this.db.collection('turnieje').doc(this.current).update({
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
