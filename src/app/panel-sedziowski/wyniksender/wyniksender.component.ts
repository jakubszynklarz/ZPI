import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wyniksender',
  templateUrl: './wyniksender.component.html',
  styleUrls: ['./wyniksender.component.css']
})
export class WyniksenderComponent implements OnInit {

  private zapisaniCollection: AngularFirestoreCollection<Walka>;
  private zapisani: Observable<any[]>;
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);


  constructor(private db: AngularFirestore) { 

    this.zapisaniCollection=db.collection<Walka>('wyniki').doc('0QohvIdT9ZnW7hxzOXFs').collection('pary');
    this.zapisani=this.zapisaniCollection.snapshotChanges().map(actions =>{
      return actions.map( a=>{
        const data = a.payload.doc.data() as Walka;
        const id = a.payload.doc.id;
        return {id,...data,};
      })
      
    })
  }

  ngOnInit() {
  }

}

export class Walka {
  public zawodnik1:Zawondik;
  public zawodnik2:Zawondik;
}
export class Zawondik {
  public punkty?: number ;
  public wygrany?: boolean ;
}