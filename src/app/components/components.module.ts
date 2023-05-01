import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    RegistroUsuarioComponent
  ]
})
export class ComponentsModule { }
