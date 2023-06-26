import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  IsAuth = false;
  title = 'BioRuta';
  private subsAuth$: Subscription;

  constructor(private securityService: SecurityService){
    this.IsAuth = this.securityService.IsAuth;
    this.subsAuth$ = this.securityService.authChange$.subscribe((isAuth) => {
      this.IsAuth = isAuth;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      if(this.subsAuth$){
        this.subsAuth$.unsubscribe();
      }
  }
}
