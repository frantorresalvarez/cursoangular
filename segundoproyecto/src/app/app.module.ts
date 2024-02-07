import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabaceraComponent } from './cabacera/cabacera.component';
import { PrincipalComponent } from './principal/principal.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { MenuComponent } from './menu/menu.component';
import { PancartaComponent } from './pancarta/pancarta.component';
import { DestacadosComponent } from './destacados/destacados.component';

@NgModule({
  declarations: [
    AppComponent,
    CabaceraComponent,
    PrincipalComponent,
    PiedepaginaComponent,
    MenuComponent,
    PancartaComponent,
    DestacadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
