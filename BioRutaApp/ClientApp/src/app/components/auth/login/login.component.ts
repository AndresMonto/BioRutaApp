import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/models/Login';
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
     public Login: Login,
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
    this.Login =  new Login();
  }

  ngOnDestroy(): void {
    this.subRef$?.unsubscribe();
  }

  SignIn(){
    if(this.formLogin.valid){
      this.Login.Error = false;
      this.loading = true;

      this.subRef$ = this.dataService.post<Login>(Controllers.User.SignIn, this.Login).subscribe({
        next: (v) => {
          this.loading = false;
          if(v.Error){
            this.Login = v;
          }else{
            this.securityService.SetToken(v.Token);
            this.router.navigate(['/home']);
          }
        },
        error: (e) => {
          this.loading = false;
          this.Login.Error = true;
          this.Login.Message = e.message;
          console.error(e)
        },
      });

    }
  }

  UserRegister(){
    this.router.navigate(['/user-register']);
  }

  Clean(){
    this.Login.Message = "";
    this.Login.Error = false;
  }

}

