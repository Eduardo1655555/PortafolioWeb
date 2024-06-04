import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: 'perfil',component: PerfilComponent},
  {path: 'portafolio',component: PortafolioComponent},
  {path: 'experience',component: ExperienceComponent},
  {path: 'contact',component: ContactComponent},
  {path: '**',component: PerfilComponent,pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }