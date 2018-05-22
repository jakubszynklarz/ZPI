import { Rejestracja } from './shared/rejestracja.model';
import { NgForm } from '@angular/forms';
import { RejestracjaServService } from './shared/rejestracja-serv.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regServ:RejestracjaServService) { }

  ngOnInit() {
   
  }
  nvm(f:NgForm){
    let regi: Rejestracja = new Rejestracja()
    regi.email = f.value.e_mail;
    regi.haslo = f.value.password;
    regi.login = f.value.user_name;
    this.regServ.setRejestracja(regi);
    f.resetForm();



  }

}
