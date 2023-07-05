import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  public User: User = new User();

  public formEdit: FormGroup;
  public minLength: number = 5;
  public Roles: Role[] = [];
  public loading: boolean = false;

  public edit: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router){

    var id = this.route.snapshot.paramMap.get('Id');

    if(id == null){
       this.dataService.post<Role[]>(Controllers.Role.GetRoles, {}).subscribe(result => { this.Roles = result});
    }else{
      this.edit = true;
      this.dataService.post<User>(Controllers.User.GetUserById, JSON.stringify(id)).subscribe(result => { this.User = result; this.Roles.push(this.User.Role);});

    }


    this.formEdit = this.formBuilder.group({
      Name:['Name', [Validators.required, Validators.minLength(this.minLength)]],
      Email:['Email', [Validators.required, Validators.email]],
      Role:['Role', [Validators.required]],
      Password:['Password', []],
      State:['State', [Validators.required]]
    });
  }

  Home(){
    this.router.navigate(['/']);
  }

  Admin(){
    this.router.navigate(['/admin']);
  }

  Save(){

    if(this.formEdit.valid){
      this.User.Error = false;
      this.loading = true;

      var url = this.edit ? Controllers.User.UpdateUser : Controllers.User.CreateUser ;

      this.dataService.post<User>(url,this.User).subscribe({
        next: (v) => {
          this.loading = false;
          if(v.Error){
            this.User = v;
            this.Roles.push(this.User.Role);
          }else{
            alert(`Usuario ${this.edit ? "actualizado" : "creado" }!`);
            this.router.navigate(['/admin']);
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

}
