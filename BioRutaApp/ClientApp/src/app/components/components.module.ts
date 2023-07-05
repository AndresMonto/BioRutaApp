import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUsuarioComponent } from './auth/registro-usuario/registro-usuario.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListProductsComponent } from './admin-products/list-products/list-products.component';
import { EditProductComponent } from './admin-products/edit-product/edit-product.component';
import { ListCollectsComponent } from './admin-collects/list-collects/list-collects.component';
import { EditCollectsComponent } from './admin-collects/edit-collects/edit-collects.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent,
    AdminComponent,
    EditUserComponent,
    ListProductsComponent,
    EditProductComponent,
    ListCollectsComponent,
    EditCollectsComponent
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
    EditUserComponent,
    ListProductsComponent,
    ListCollectsComponent
  ]
})
export class ComponentsModule { }
