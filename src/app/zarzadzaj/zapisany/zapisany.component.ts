import { Component, OnInit } from '@angular/core';
import {ZarzadService} from '../shared/zarzad.service'

@Component({
  selector: 'app-zapisany',
  templateUrl: './zapisany.component.html',
  styleUrls: ['./zapisany.component.css'],
  providers:[ZarzadService]
})
export class ZapisanyComponent implements OnInit {

  constructor(private zarzadService: ZarzadService) { }

  ngOnInit() {
  }

}
