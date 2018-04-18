import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { HomepageComponent } from './homepage/homepage.component';
import { PanelSedziowskiComponent } from './panel-sedziowski/panel-sedziowski.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // {path:'',component: HomepageComponent},
    { path: 'homepage', component: HomepageComponent },
    { path: 'panelsedziego', component: PanelSedziowskiComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);