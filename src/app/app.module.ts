import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importar routing
import { routing, appRoutingProviders } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortadaComponent } from './components/portada/portada.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
