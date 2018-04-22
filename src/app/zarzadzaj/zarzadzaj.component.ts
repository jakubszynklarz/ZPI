import { Component, OnInit } from '@angular/core';
import {ZarzadService} from './shared/zarzad.service'
@Component({
  selector: 'app-zarzadzaj',
  templateUrl: './zarzadzaj.component.html',
  styleUrls: ['./zarzadzaj.component.css'],
  providers:[ZarzadService]
})
export class ZarzadzajComponent implements OnInit {

  constructor(private zarzadService: ZarzadService) { }

  ngOnInit() {
  }

}
