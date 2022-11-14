// Importar los modulos del router
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PortafolioComponent } from "./components/portafolio/portafolio.component";
import { PortadaComponent } from "./components/portada/portada.component";
import { AboutComponent } from "./components/about/about.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { SkillsComponent } from "./components/skills/skills.component";


const AppRoutes: Routes = [
   
    { path: '', component: PortadaComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'assets/en_hector_santos.pdf', component: LoginComponent },
    { path: 'inicio', component: PortadaComponent },
    { path:'portafolio', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skill', component: SkillsComponent }
    
];

//Exportar la configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes)