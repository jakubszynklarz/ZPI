import { Component, OnInit } from '@angular/core';
import { KategorieService } from '../../turnieje/shared/kategorie.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { TurniejeService } from '../../turnieje/zapisz-sie/serwisy/turniej.service';
import { Zawondik } from '../../panel-sedziowski/wyniksender/wyniksender.component';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { LadderService } from '../sheard/ladder.service';

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

  pasy =['bialy', 'brązowy','czarny', 'niebieski', 'purpurowy'];
  wagi = ['heavy', 'rooster'];
  constructor(private db: AngularFirestore, private ladServ: LadderService) {

     ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[0],'man').subscribe(data => {this.zawColection1 = data});
     ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[1],'man').subscribe(data => {this.zawColection2 = data});
     ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[2],'man').subscribe(data => {this.zawColection3 = data});
     ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[3],'man').subscribe(data => {this.zawColection4 = data});
     ladServ.getZawonikow(this.current,this.wagi[0],this.pasy[4],'man').subscribe(data => {this.zawColection5 = data});

     ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[0],'man').subscribe(data => {this.zawColection6 = data});
     ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[1],'man').subscribe(data => {this.zawColection7 = data});
     ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[2],'man').subscribe(data => {this.zawColection8 = data});
     ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[3],'man').subscribe(data => {this.zawColection9 = data});
     ladServ.getZawonikow(this.current,this.wagi[1],this.pasy[4],'man').subscribe(data => {this.zawColection10 = data});
    // this.zawColection = this.db.collection<poprawnyZawodnik>('/turnieje/'+ this.current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});
   }

  ngOnInit() {
    
  }

  podziel(){
    for (let zaw of this.zawColection1) {
      console.log(zaw);
      this.db.collection<poprawnyZawodnik[]>('/turnieje/'+this.current+'/niebieski/heavy/man'+'/'+this.pasy[0]+'/'+this.wagi[0]+'/man').add(JSON.parse(JSON.stringify(zaw)));
  }

  
 
    
  
 
}
}
