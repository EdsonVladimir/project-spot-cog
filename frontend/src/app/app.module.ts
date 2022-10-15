import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// Componentes del proyecto
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { SpotifyComponent } from './Components/spotify/spotify.component';
import { NavbarComponent } from './Components/spotify/navbar/navbar.component';
import { SidebarComponent } from './Components/spotify/sidebar/sidebar.component';
import { InicioComponent } from './Components/spotify/componentes-spotify/inicio/inicio.component';

// Librerias de PrimeNg
import {ChipsModule} from 'primeng/chips';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {PanelMenuModule} from 'primeng/panelmenu';
import { BuscadorComponent } from './Components/spotify/componentes-spotify/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    SpotifyComponent,
    NavbarComponent,
    SidebarComponent,
    InicioComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChipsModule,
    ButtonModule,
    ToastModule,
    PanelMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
