import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(public User: User, private dataService: DataService, private securityService: SecurityService, private router: Router) {
    this.securityService.ResetToken();
  }

  ngOnInit(): void {
  }

  Registrar(User: User){
    User.RoleId = 14;
    this.dataService.post<User>(Controllers.User.Create,User).subscribe({
      next: (v) => {
        if(v.Error){
          this.User = v;
        }else{
          this.router.navigate(['/login']);
        }
      },
      error: (e) => console.error(e),
    });
  }

}
