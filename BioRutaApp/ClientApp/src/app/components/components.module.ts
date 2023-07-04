import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUsuarioComponent } from './auth/registro-usuario/registro-usuario.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent,
    AdminComponent,
    EditUserComponent
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
    AdminComponent,
    EditUserComponent
  ]
})
export class ComponentsModule { }
