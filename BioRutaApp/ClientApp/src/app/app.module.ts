import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ComponentsModule } from './components/components.module';
import { RegistroUsuarioComponent } from './components/auth/registro-usuario/registro-usuario.component';
import { JwtInterceptor } from './services/auth/jwt-interceptor';
import { AuthGuard } from './services/auth/auth-guard';
import { AdminComponent } from './components/admin/admin/admin.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ListProductsComponent } from './components/admin-products/list-products/list-products.component';
import { AdminGuard } from './services/auth/users/admin-guard.service';
import { EditProductComponent } from './components/admin-products/edit-product/edit-product.component';
import { ListCollectsComponent } from './components/admin-collects/list-collects/list-collects.component';
import { EditCollectsComponent } from './components/admin-collects/edit-collects/edit-collects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
      { path: 'login', component: LoginComponent},
      { path: 'user-register', component: RegistroUsuarioComponent},

      { path: 'admin', component: AdminComponent, canActivate:[AuthGuard, AdminGuard] },
      { path: 'adminEdit/:Id', component: EditUserComponent, canActivate:[AuthGuard, AdminGuard] },
      { path: 'adminEdit', component: EditUserComponent, canActivate:[AuthGuard, AdminGuard] },

      { path: 'listProducts', component: ListProductsComponent, canActivate:[AuthGuard, AdminGuard] },
      { path: 'productEdit/:Id', component: EditProductComponent, canActivate:[AuthGuard, AdminGuard] },
      { path: 'productEdit', component: EditProductComponent, canActivate:[AuthGuard, AdminGuard] },

      { path: 'listCollects', component: ListCollectsComponent, canActivate:[AuthGuard, ] },
      { path: 'collectEdit/:Id', component: EditCollectsComponent, canActivate:[AuthGuard, ] },
      { path: 'collectEdit', component: EditCollectsComponent, canActivate:[AuthGuard, ] },

      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
