import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { TurniejeService } from '../zapisz-sie/serwisy/turniej.service';

@Component({
  selector: 'app-turniej-details',
  templateUrl: './turniej-details.component.html',
  styleUrls: ['./turniej-details.component.css']
})
export class TurniejDetailsComponent implements OnInit {

  constructor(private db: AngularFirestore, private turn:TurniejeService) { }

  ngOnInit() {
  }

}
