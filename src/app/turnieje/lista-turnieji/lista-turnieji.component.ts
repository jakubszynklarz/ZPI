import { TurniejService } from './../shared/turniej.service';
import { Component, OnInit } from '@angular/core';
import { Turniej } from '../shared//turniej.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-lista-turnieji',
  templateUrl: './lista-turnieji.component.html',
  styleUrls: ['./lista-turnieji.component.css']
})
export class ListaTurniejiComponent implements OnInit {
  turniej: Turniej[];
  constructor(private _turniejService: TurniejService) { }

  ngOnInit() {
    this.turniej = this._turniejService.getTurnieje();

  }

}
