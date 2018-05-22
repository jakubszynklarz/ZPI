import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';

@Component({
  selector: 'app-wynikion',
  templateUrl: './wynikion.component.html',
  styleUrls: ['./wynikion.component.css']
})
export class WynikionComponent implements OnInit {

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

  // czarny heavy
  zawColection8: poprawnyZawodnik[];


 



  zawodnicy;
  pasy = ['bialy', 'brązowy', 'czarny', 'niebieski', 'purpurowy'];
  wagi = ['heavy', 'rooster'];
  constructor(private db: AngularFirestore, private ladServ: LadderService,private podzialServ: TurniejPodzialSerService) { 
    ladServ.getzawo(this.current, this.wagi[0], this.pasy[2], 'man').subscribe(data => { this.zawColection8 = data });

  }

  ngOnInit() {
  }
test(){
  for (let zaw of this.zawColection8) {
    console.log(zaw);
  }
  
}


}
