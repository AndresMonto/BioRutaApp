import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit, OnDestroy {

  public formRegister: FormGroup;
  public minLength: number = 5;
  public loading: boolean = false;
  private subRef$: Subscription | undefined;

  constructor(public User: User, private dataService: DataService,private formBuilder: FormBuilder, private securityService: SecurityService, private router: Router) {
    this.securityService.ResetToken();

    this.formRegister = this.formBuilder.group({
      Name:['Name', [Validators.required, Validators.minLength(this.minLength)]],
      Email:['Email', [Validators.required, Validators.email]],
      Password:['Password', [Validators.required, Validators.minLength(this.minLength)]],
    });
  }

  ngOnInit(): void {
    this.User = new User();
  }

  ngOnDestroy(): void {
    this.subRef$?.unsubscribe();
  }

  Registrar(){
    if(this.formRegister.valid){
      this.User.Error = false;
      this.loading = true;

      this.dataService.post<User>(Controllers.User.Create,this.User).subscribe({
        next: (v) => {
          this.loading = false;
          if(v.Error){
            this.User = v;
            this.User.Role = new Role();
          }else{
            this.router.navigate(['/login']);
          }
        },
        error: (e) => {
          this.loading = false;
          this.User.Error = true;
          this.User.Message = e.message;
          console.error(e);
        },
      });
    }
  }

  Clean(){
    this.User.Message = "";
    this.User.Error = false;
  }

  UserSigIn(){
    this.router.navigate(['/login']);
  }

}
