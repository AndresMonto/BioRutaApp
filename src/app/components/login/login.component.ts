import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/models/login';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public formLogin: FormGroup;
  public minLength: number = 5;
  public loading: boolean = false;
  private subRef$: Subscription | undefined;

  constructor(
     public login: Login,
     private formBuilder: FormBuilder,
     private dataService: DataService,
     private securityService: SecurityService,
     private router: Router) {

    this.formLogin = this.formBuilder.group({
      Email:['Email', [Validators.required, Validators.email]],
      Password:['Password', [Validators.required, Validators.minLength(this.minLength)]],
    });

    this.securityService.ResetToken();
   }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subRef$?.unsubscribe();
  }

  SignIn(){
    if(this.formLogin.valid){
      this.login.Error = false;
      this.loading = true;

      this.subRef$ = this.dataService.post<Login>(Controllers.User.SignIn, this.login).subscribe({
        next: (v) => {
          this.loading = false;
          if(v.Error){
            this.login = v;
          }else{
            this.securityService.SetToken(v.Token);
            this.router.navigate(['/home']);
          }
        },
        error: (e) => {
          this.loading = false;
          this.login.Error = true;
          this.login.Message = e.message;
          console.error(e)
        },
      });

    }
  }

  UserRegister(){
    this.router.navigate(['/user-register']);
  }

  Clean(){
    this.login.Message = "";
    this.login.Error = false;
  }

}

