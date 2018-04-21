import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { PanelSedziowskiComponent } from './panel-sedziowski/panel-sedziowski.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NonRouteLinkComponent } from './non-route-link/non-route-link.component';
import { FormsModule }    from '@angular/forms';
import { TurniejeComponent } from './turnieje/turnieje.component';
import { ListaTurniejiComponent } from './turnieje/lista-turnieji/lista-turnieji.component';
import { FormStworzTurniejComponent } from './turnieje/form-stworz-turniej/form-stworz-turniej.component';
import { TurniejService } from './turnieje/shared/turniej.service';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomepageComponent,
    FooterComponent,
    PanelSedziowskiComponent,
    LoginComponent,
    RegisterComponent,
    NonRouteLinkComponent,
    TurniejeComponent,
    ListaTurniejiComponent,
    FormStworzTurniejComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [TurniejService],
  bootstrap: [AppComponent]
})
export class AppModule { }
