import { TurniejService } from './../shared/turniej.service';
import { Turniej } from '../shared//turniej.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-stworz-turniej',
  templateUrl: './form-stworz-turniej.component.html',
  styleUrls: ['./form-stworz-turniej.component.css']
})
export class FormStworzTurniejComponent implements OnInit {

  turniej: Turniej  =
  {
    id: null,
    name: null,
    opis: null,
    miasto: null,
    nrkonta:null,
    wpisowe:null,
    dataturnieju: null,
    kategoria: null,
    datakonca: null

  };
  
  

  constructor(private _turniejSerivce: TurniejService,
  private _router: Router) { 

  }

  ngOnInit() {
  }
  
  zapiszTurniej(): void{
    this._turniejSerivce.save(this.turniej);
    this._router.navigate(['Lista Turniejów']);
  }

}
