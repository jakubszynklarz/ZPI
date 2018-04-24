import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  frangmentLoremIpsum: string = "Nullam in vestibulum lacus, id venenatis elit.   "
  constructor() { }

  ngOnInit() {
  }

}
