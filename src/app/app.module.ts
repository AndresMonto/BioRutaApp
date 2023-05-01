import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './components/login/login.component';
import { ComponentsModule } from './components/components.module';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { JwtInterceptor } from './services/auth/jwt-interceptor';
import { AuthGuard } from './services/auth/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
      { path: 'counter', component: CounterComponent, canActivate:[AuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent , canActivate:[AuthGuard] },
      { path: 'login', component: LoginComponent},
      { path: 'user-register', component: RegistroUsuarioComponent},
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
