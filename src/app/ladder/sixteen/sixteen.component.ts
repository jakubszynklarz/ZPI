import { Component, OnInit } from '@angular/core';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';
import {} from '@types/node'
@Component({
  selector: 'app-sixteen',
  templateUrl: './sixteen.component.html',
  styleUrls: ['./sixteen.component.css']
})


export class SixteenComponent implements OnInit {

  pasy = ['bialy', 'brązowy', 'czarny', 'niebieski', 'purpurowy'];
  wagi = ['heavy', 'rooster'];


  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  zawColection: poprawnyZawodnik[];
  public poz1: string;
  public poz2: string;
  public poz3: string;
  public poz4: string;
  public poz5: string;
  public poz6: string;
  public poz7: string;
  public poz8: string;
  public poz9: string;
  public poz10: string;
  public poz11: string;
  public poz12: string;
  public poz13: string;
  public poz14: string;
  public poz15: string;
  public poz16: string;

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


  constructor(private db: AngularFirestore, private ladServ: LadderService, private podzielone: TurniejPodzialSerService) {
    ladServ.getzawo(this.current, 'heavy', 'czarny', 'man').subscribe(data => { this.zawColection = data });
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
    setTimeout(() => {
      this.fukcja()
    }, 2000);

    // this.mojaFun(); 
  }


  // ('/turnieje/'+ current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});

  opusmagnum() {


    setTimeout(() => {
      this.podziel();
    }, 1100);
    this.mojaFun();
    setTimeout(() => {
      this.fukcja();
    }, 1200);

  }

  fukcja() {
    for (let zaw of this.zawColection) {
      if (zaw.pozycjaStartowa == '0') {
        this.poz1 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '1') {
        this.poz2 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '2') {
        this.poz3 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '3') {
        this.poz4 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '4') {
        this.poz5 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '5') {
        this.poz6 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '6') {
        this.poz7 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '7') {
        this.poz8 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '8') {
        this.poz9 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '9') {
        this.poz10 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '10') {
        this.poz11 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '11') {
        this.poz12 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '12') {
        this.poz13 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '13') {
        this.poz14 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '14') {
        this.poz15 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '15') {
        this.poz16 = zaw.nazwa
      }




    }


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
    var shuffle = require('shuffle-array'),
      collection3 = this.zawColection3;

    shuffle(collection3);

    console.log(collection3);
    for (let zaw of collection3) {
      // if (i< 8){

      zaw.pozycjaStartowa = '' + i;
      i++;
      // }
      this.db.collection<poprawnyZawodnik[]>('/turnieje/' + this.current + '/' + this.pasy[2] + '/' + this.wagi[0] + '/man').doc(zaw.id).set(JSON.parse(JSON.stringify(zaw)))
      // add(JSON.parse(JSON.stringify(zaw)));
    }
    let pusty: poprawnyZawodnik = new poprawnyZawodnik();
    pusty.nazwa = 'Brak zawodnika';
    pusty.klub = ' ';
    for (let k = i; k <= 16; k++) {
      pusty.pozycjaStartowa = '' + k;
      if (k >= i) {
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

  mojaFun() {
    // console.log("dupa");
    let cos = this.ladServ.getzawo(this.current, 'heavy', 'czarny', 'man').subscribe(data2 => {
      // console.log("dupa");
      setTimeout(() => {

        for (let i = 0; i < data2.length; i++) {

          this.db.doc('/turnieje/AU7pzccJaqxZAGtwjk6N/czarny/heavy/man/' + data2[i].id).delete();
        }
        ;
      }, 500);
    });

    setTimeout(() => {
      cos.unsubscribe();
    }, 1000);


  }




  ngOnInit() {

  }

}
