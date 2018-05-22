import { Component, OnInit } from '@angular/core';
import { KontaktServService } from '../shared/kontakt-serv.service';
import { Kontakt } from '../shared/kontakt.model';

@Component({
  selector: 'app-lista-pytan',
  templateUrl: './lista-pytan.component.html',
  styleUrls: ['./lista-pytan.component.css']
})
export class ListaPytanComponent implements OnInit {

  pytania: Kontakt[];

  constructor(private konServ: KontaktServService) {
    konServ.getKontakt().subscribe(data => this.pytania = data);
  }

  ngOnInit() {
  }

}
