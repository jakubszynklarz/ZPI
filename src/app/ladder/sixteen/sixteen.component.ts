import { Component, OnInit } from '@angular/core';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LadderService } from '../sheard/ladder.service';

@Component({
  selector: 'app-sixteen',
  templateUrl: './sixteen.component.html',
  styleUrls: ['./sixteen.component.css']
})


export class SixteenComponent implements OnInit {
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  zawColection: poprawnyZawodnik[];
  public poz1:string;
  public poz2:string;
  public poz3:string;
  public poz4:string;
  public poz5:string;
  public poz6:string;
  public poz7:string;
  public poz8:string;
  public poz9:string;
  public poz10:string;
  public poz11:string;
  public poz12:string;
  public poz13:string;
  public poz14:string;
  public poz15:string;
  public poz16:string;
  

  constructor(private db: AngularFirestore,private ladServ: LadderService) {
    ladServ.getzawo(this.current,'heavy','czarny','man').subscribe(data => {this.zawColection = data});

   }

   
    // ('/turnieje/'+ current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});

    fukcja(){
      for (let zaw of this.zawColection) {
        if (zaw.pozycjaStartowa == '0') {
          this.poz1=zaw.nazwa
       } if (zaw.pozycjaStartowa == '1') {
        this.poz2=zaw.nazwa
      }if (zaw.pozycjaStartowa == '2') {
        this.poz3=zaw.nazwa
      }if (zaw.pozycjaStartowa == '3') {
        this.poz4=zaw.nazwa
      }if (zaw.pozycjaStartowa == '4') {
        this.poz5=zaw.nazwa
      }if (zaw.pozycjaStartowa == '5') {
        this.poz6=zaw.nazwa
      }if (zaw.pozycjaStartowa == '6') {
        this.poz7=zaw.nazwa
      }if (zaw.pozycjaStartowa == '7') {
        this.poz8=zaw.nazwa
      }if (zaw.pozycjaStartowa == '8') {
        this.poz9=zaw.nazwa
      }if (zaw.pozycjaStartowa == '9') {
        this.poz10=zaw.nazwa
      }if (zaw.pozycjaStartowa == '10') {
        this.poz11=zaw.nazwa
      }if (zaw.pozycjaStartowa == '11') {
        this.poz12=zaw.nazwa
      }if (zaw.pozycjaStartowa == '12') {
        this.poz13=zaw.nazwa
      }if (zaw.pozycjaStartowa == '13') {
        this.poz14=zaw.nazwa
      }if (zaw.pozycjaStartowa == '14') {
        this.poz15=zaw.nazwa
      }if (zaw.pozycjaStartowa == '15') {
        this.poz16=zaw.nazwa
      }




    }




  }

    
  
  ngOnInit() {
  }

}
