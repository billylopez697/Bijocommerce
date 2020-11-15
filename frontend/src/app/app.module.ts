import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrosEComponent } from './registros-e/registros-e.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdmiCompaniesComponent } from './admi-companies/admi-companies.component';
import { NavEmpresasComponent } from './nav-empresas/nav-empresas.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ProductoComponent } from './producto/producto.component';
import { FooterComponent } from './footer/footer.component';
import { ProduComponent } from './produ/produ.component';
import { SliderComponent } from './slider/slider.component';
import { ModalComponent } from './modal/modal.component';
import { CargarPComponent } from './cargar-p/cargar-p.component';


const routes: Routes = [
  { path: 'registro', component: RegistrosEComponent},
  { path: 'login', component: LoginComponent },
  { path:'admi-compani',component:AdmiCompaniesComponent},
  { path:'admi-compani/:id',component:PaginaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrosEComponent,
    NavComponent,
    LoginComponent,
    AdmiCompaniesComponent,
    NavEmpresasComponent,
    PaginaComponent,
    ProductoComponent,
    FooterComponent,
    ProduComponent,
    SliderComponent,
    ModalComponent,
    CargarPComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
