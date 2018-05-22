import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kontakt } from './shared/kontakt.model';
import { KontaktServService } from './shared/kontakt-serv.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(private kontaktSev: KontaktServService) { }

  ngOnInit() {
  }
  czywyslany: boolean = false;

  ss(f: NgForm) {
    let kon: Kontakt = new Kontakt();
    kon.email = f.value.email;
    kon.pytanie = f.value.pytanie;
    this.kontaktSev.setKontakt(kon);
    this.czywyslany = true;
    f.resetForm();
  }

}
