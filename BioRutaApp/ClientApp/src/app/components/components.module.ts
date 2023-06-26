import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUsuarioComponent } from './auth/registro-usuario/registro-usuario.component';
import { AdminComponent } from './admin/admin/admin.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    RegistroUsuarioComponent,
    AdminComponent
  ]
})
export class ComponentsModule { }
