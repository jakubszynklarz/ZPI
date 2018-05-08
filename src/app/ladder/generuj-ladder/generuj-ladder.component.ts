import { Component, OnInit } from '@angular/core';
import { KategorieService } from '../../turnieje/shared/kategorie.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { TurniejeService } from '../../turnieje/zapisz-sie/serwisy/turniej.service';
import { Zawondik } from '../../panel-sedziowski/wyniksender/wyniksender.component';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';


@Component({
  selector: 'app-generuj-ladder',
  templateUrl: './generuj-ladder.component.html',
  styleUrls: ['./generuj-ladder.component.css']
})
export class GenerujLadderComponent implements OnInit {
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  zawColection1: poprawnyZawodnik[];
  zawColection2: poprawnyZawodnik[];
  zawColection3: poprawnyZawodnik[];
  zawColection4: poprawnyZawodnik[];
  zawColection5: poprawnyZawodnik[];

  zawColection6: poprawnyZawodnik[];
  zawColection7: poprawnyZawodnik[];
  zawColection8: poprawnyZawodnik[];
  zawColection9: poprawnyZawodnik[];
  zawColection10: poprawnyZawodnik[];

  pasy = ['bialy', 'brązowy', 'czarny', 'niebieski', 'purpurowy'];
  wagi = ['heavy', 'rooster'];
  // kolekcje=[  this.zawColection1,this.zawColection2,this.zawColection3,this.zawColection4,this.zawColection5,]
  constructor(private db: AngularFirestore, private ladServ: LadderService, private podzielone: TurniejPodzialSerService) {

    //  ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[0],'man').subscribe(data => {this.zawColection1 = data});
    //  ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[1],'man').subscribe(data => {this.zawColection2 = data});
    ladServ.getZawonikow(this.current, this.wagi[0], this.pasy[2], 'man').subscribe(data => { this.zawColection3 = data });
    //  ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[3],'man').subscribe(data => {this.zawColection4 = data});
    //  ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[4],'man').subscribe(data => {this.zawColection5 = data});

    //  ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[0],'man').subscribe(data => {this.zawColection6 = data});
    //  ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[1],'man').subscribe(data => {this.zawColection7 = data});
    ladServ.getZawonikow(this.current, this.wagi[1], this.pasy[2], 'man').subscribe(data => { this.zawColection8 = data });
    //  ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[3],'man').subscribe(data => {this.zawColection9 = data});
    //  ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[4],'man').subscribe(data => {this.zawColection10 = data});
    // this.zawColection = this.db.collection<poprawnyZawodnik>('/turnieje/'+ this.current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});

    // this.mojaFun(); 
    

  }

  mojaFun() {
    // console.log("dupa");
     let usuwanieZbazy = this.ladServ.getzawo(this.current, 'heavy', 'czarny', 'man').subscribe(data2 => {
      // console.log("dupa");
      setTimeout(() => {
        console.log(data2.length);
        for (let i = 0; i < data2.length; i++) {
          console.log(data2[i]);
          this.db.doc('/turnieje/AU7pzccJaqxZAGtwjk6N/czarny/heavy/man/' + data2[i].id).delete();
        }
        ;
      }, 500);
    });
    
    setTimeout(() => {
        usuwanieZbazy.unsubscribe();
    }, 1000);
    

  }

  ngOnInit() {

  }

  podziel() {
    
    // this.mojaFun(); 
     
    //     for (let zaw of this.zawColection1) {
    //       this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[0]+'/'+this.wagi[0]+'/man').
    //       add(JSON.parse(JSON.stringify(zaw)));
    //   }
    //   for (let zaw of this.zawColection2) {
    //     this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[1]+'/'+this.wagi[0]+'/man').
    //     add(JSON.parse(JSON.stringify(zaw)));
    // }

    // this.db.doc('/turnieje/AU7pzccJaqxZAGtwjk6N/czarny/heavy/man').delete();
    // this.slowoDocument.delete();

    let i = 0;
    for (let zaw of this.zawColection3) {
      // if (i< 8){

      zaw.pozycjaStartowa = '' + i;
      i++;
      // }
      this.db.collection<poprawnyZawodnik[]>('/turnieje/' + this.current + '/' + this.pasy[2] + '/' + this.wagi[0] + '/man').doc(zaw.id).set(JSON.parse(JSON.stringify(zaw)))
        // add(JSON.parse(JSON.stringify(zaw)));
    }
    let pusty: poprawnyZawodnik = new poprawnyZawodnik();
    pusty.nazwa = ' ';
    pusty.klub = ' ';
    for (let k = i; k <= 16; k++) {
      pusty.pozycjaStartowa = '' + k;
      if (k > i) {
        this.db.collection<poprawnyZawodnik[]>('/turnieje/' + this.current + '/' + this.pasy[2] + '/' + this.wagi[0] + '/man').add(JSON.parse(JSON.stringify(pusty)));
      }
    }

    // for (let zaw of this.zawColection4) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[3]+'/'+this.wagi[0]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }
    // for (let zaw of this.zawColection5) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[4]+'/'+this.wagi[0]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }

    //   for (let zaw of this.zawColection6) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[0]+'/'+this.wagi[1]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }
    // for (let zaw of this.zawColection7) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[1]+'/'+this.wagi[1]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }


    // for (let zaw of this.zawColection8) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[2]+'/'+this.wagi[1]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }
    // for (let zaw of this.zawColection9) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[3]+'/'+this.wagi[1]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }
    // for (let zaw of this.zawColection10) {
    //   this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/'+this.pasy[4]+'/'+this.wagi[1]+'/man').
    //   add(JSON.parse(JSON.stringify(zaw)));
    // }
  }



}

