// Importar los modulos del router
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PortafolioComponent } from "./components/portafolio/portafolio.component";
import { PortadaComponent } from "./components/portada/portada.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";

const AppRoutes: Routes = [
   
    { path: '', component: PortadaComponent },
    { path: 'inicio', component: PortadaComponent },
    { path:'portafolio', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

//Exportar la configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes)