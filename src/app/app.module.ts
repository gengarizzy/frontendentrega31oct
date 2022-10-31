import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoapComponent } from './componentes/logoap/logoap.component';
import { LogolinkedinComponent } from './componentes/logolinkedin/logolinkedin.component';
import { LogogithubComponent } from './componentes/logogithub/logogithub.component';
import { BotonedicionComponent } from './componentes/botonedicion/botonedicion.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { TextobannerComponent } from './componentes/textobanner/textobanner.component';
import { FotoperfilComponent } from './componentes/fotoperfil/fotoperfil.component';
import { AcercabootstrapComponent } from './componentes/acercabootstrap/acercabootstrap.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardsoftskillsComponent } from './componentes/hardsoftskills/hardsoftskills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BsheaderComponent } from './componentes/bsheader/bsheader.component';
import { ExpcardComponent } from './componentes/expcard/expcard.component';
import { EducacionrowComponent } from './componentes/educacionrow/educacionrow.component';
import { FooterComponent } from './componentes/footer/footer.component'; 
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/home/home.component';

import { LoginComponent } from './componentes/login/login.component';

import { FormsModule } from '@angular/forms'
import { AuthInterceptorProvider } from './auth-interceptor.service';
import { NewExperienciaComponent } from './componentes/expcard/new-experiencia/new-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EditExperienciaComponent } from './componentes/expcard/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacionrow/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacionrow/editeducacion/editeducacion.component';






  
@NgModule({
  declarations: [
    AppComponent,
    LogoapComponent,
    LogolinkedinComponent,
    LogogithubComponent,
    BotonedicionComponent,
    BannerComponent,
    TextobannerComponent,
    FotoperfilComponent,
    AcercabootstrapComponent,
    HardsoftskillsComponent,
    ProyectosComponent,
    BsheaderComponent,
    ExpcardComponent,
    EducacionrowComponent,
    FooterComponent,
    InicioComponent,
   
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent
   
    
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
