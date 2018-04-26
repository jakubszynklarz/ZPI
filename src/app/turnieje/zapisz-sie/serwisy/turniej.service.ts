import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';

@Injectable()
export class TurniejService {

  itemsCollection: AngularFirestoreCollection<any>;
  items:Observable<any[]>;
  constructor(public afs:AngularFirestore) { 
    this.items  = this.afs.collection('items').valueChanges();
  }
  // ii:Item ;
  getItems(){
    
    // let i :Item = new Item();
    // i.id = "da";
    // i.opis = "adsf";
    // i.title = "adfas";
    // this.afs.collection('items').add(i);
    return this.items;

  }

}


// constructor(public itemService: ItemService) { }

// ngOnInit() {
//   this.itemService.getItems().subscribe(items => {console.log(items)})
// }