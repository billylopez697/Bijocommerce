import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmiComponent } from './admi/admi.component';
import { LadingComponent } from './lading/lading.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistraradmiComponent } from './registraradmi/registraradmi.component';
import { LoginempresasComponent } from './loginempresas/loginempresas.component';
import { ListaempresasComponent } from './listaempresas/listaempresas.component';
import { NavadministradorComponent } from './navadministrador/navadministrador.component';
import { AdmiCompaniComponent } from './admi-compani/admi-compani.component';
import { ProductoComponent } from './producto/producto.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginaComponent } from './pagina/pagina.component';
import { SubirimagenComponent } from './subirimagen/subirimagen.component';
import { AppclienteComponent } from './appcliente/appcliente.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lading', component: LadingComponent  },
  { path: 'Registrarse', component:RegistraradmiComponent   },
  { path: 'admi', component: AdmiComponent },
  { path: 'listadoempresa', component: ListaempresasComponent },
  {path:'loginempresas',component:LoginempresasComponent},
  {path:'admi-compani',component:AdmiCompaniComponent},
  {path:'admi-compani/GuardarProducto',component:ProductoComponent},
  {path:'admi-compani/GuardarImagen',component:SubirimagenComponent},
  {path:'lading/:id',component:PaginaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AdmiComponent,
    LadingComponent,
    RegistraradmiComponent,
    LoginempresasComponent,
    ListaempresasComponent,
    NavadministradorComponent,
    AdmiCompaniComponent,
    ProductoComponent,
    FileUploadComponent,
    PaginaComponent,
    SubirimagenComponent,
    AppclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
