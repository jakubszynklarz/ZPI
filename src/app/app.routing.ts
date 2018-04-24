import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { PanelSedziowskiComponent } from './panel-sedziowski/panel-sedziowski.component';
import { LoginComponent } from './login/login.component';
import { NonRouteLinkComponent } from './non-route-link/non-route-link.component';
import { FormStworzTurniejComponent } from './turnieje/form-stworz-turniej/form-stworz-turniej.component';
import { ListaTurniejiComponent } from './turnieje/lista-turnieji/lista-turnieji.component';
import { TurniejeComponent } from './turnieje/turnieje.component';
import { ZarzadzajComponent } from './zarzadzaj/zarzadzaj.component';
import { MyevenComponent } from './zarzadzaj/myevent/myeven/myeven.component';
import { ZapiszSieComponent } from './turnieje/zapisz-sie/zapisz-sie.component';
import { ZapisanyComponent } from './zarzadzaj/zapisany/zapisany.component';
import { ZapisaneComponent } from './zarzadzaj/zapisany/zapisane/zapisane.component';



const appRoutes: Routes = [
    { path: '', component:HomepageComponent },
    // {path:'',component: HomepageComponent},
    { path: 'homepage', component: HomepageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'panelsedziego', component: PanelSedziowskiComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error',component: NonRouteLinkComponent },
    { path: 'stworz_turniej', component: FormStworzTurniejComponent },
    { path: 'lista_turniejow', component: ListaTurniejiComponent },
    { path: 'turnieje', component: TurniejeComponent },
    { path: 'zapiszSie/:def_number', component: ZapiszSieComponent },    
    { path: 'zarzadzanie', component: ZarzadzajComponent },
    {path:'turnieje/:def_number',component: MyevenComponent},
    {path:'sedziowski/:def_number',component: PanelSedziowskiComponent},
    {path:'zapisany/:def_number',component: ZapisaneComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'error' }
];

export const routing = RouterModule.forRoot(appRoutes);