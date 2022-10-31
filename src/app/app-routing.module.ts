import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './componentes/expcard/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/expcard/new-experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NeweducacionComponent } from './componentes/educacionrow/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacionrow/editeducacion/editeducacion.component';

const routes: Routes = [

{path:'login', component: LoginComponent},

{path:'', component: HomeComponent},

{path: 'nuevaexp', component: NewExperienciaComponent},

{path: 'editexp/:id', component: EditExperienciaComponent},

{ path: 'nuevaeducacion', component: NeweducacionComponent},

{ path: 'editedu/:id', component: EditeducacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
