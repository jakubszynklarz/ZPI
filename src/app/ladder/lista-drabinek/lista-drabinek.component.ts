import { Component, OnInit } from '@angular/core';
import { KategorieService } from '../../turnieje/shared/kategorie.service';
import { TurniejeService } from '../../turnieje/zapisz-sie/serwisy/turniej.service';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';

@Component({
  selector: 'app-lista-drabinek',
  templateUrl: './lista-drabinek.component.html',
  styleUrls: ['./lista-drabinek.component.css']
})
export class ListaDrabinekComponent implements OnInit {
  // url od 4 to jest id turnieju
  public url:string[] = window.location.href.split('/');
  current:string;
  pasy:string[];
  turniej:Modeloo;
  katwagowe:string[];
  constructor(private katServ:KategorieService,tunServ:TurniejeService) {
    this.current = this.url[4];
    tunServ.getTurnieje().subscribe(data => this.turniej =data.find(t => t.id == this.url[4]))
    katServ.getWagi('man','gi').subscribe(data=> this.katwagowe = data);
    katServ.getPasy().subscribe(data => this.pasy = data)
   }

  ngOnInit() {

  }

}
