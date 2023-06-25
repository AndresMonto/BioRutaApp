import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  IsAuth = false;
  title = 'BioRuta';
  private subsAuth$: Subscription;

  constructor(private securityService: SecurityService){
    this.IsAuth = this.securityService.IsAuth;
    console.log(this.IsAuth);
    this.subsAuth$ = this.securityService.authChange$.subscribe((isAuth) => {
      this.IsAuth = isAuth;
      console.log(this.IsAuth);
    });
  }

  ngOnDestroy(): void {
      if(this.subsAuth$){
        this.subsAuth$.unsubscribe();
      }
  }
}
