import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {RegistroComponent} from "./Components/registro/registro.component";
import {SpotifyComponent} from "./Components/spotify/spotify.component";
import {InicioComponent} from "./Components/spotify/componentes-spotify/inicio/inicio.component";
import {BuscadorComponent} from "./Components/spotify/componentes-spotify/buscador/buscador.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'spotify', component: SpotifyComponent, children:[
      {path: 'inicio', component: InicioComponent},
      {path: 'buscador', component: BuscadorComponent},
      {path: '**', component: InicioComponent}
    ]},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
