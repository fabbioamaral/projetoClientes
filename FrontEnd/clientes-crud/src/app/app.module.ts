import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CriarClienteComponent } from './cliente/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { HeaderComponent } from './header/header.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CpfPipe } from './cpf.pipe';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}; //para rpdar p ngx-mask

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    HeaderComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: ClienteComponent},
      {path:'clientes', component: ClienteComponent},
      {path:'clientes/criar-cliente', component: CriarClienteComponent},
      {path:'clientes/editar-cliente/:id', component: EditarClienteComponent}
      
    ]),
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
