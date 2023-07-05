import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';
import { Controllers } from 'src/environments/environment';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  public Users: User[] = [];
  public Search: string = "";
  public loading: boolean = false;

  constructor(private dataService: DataService, private router: Router) {
    this.loading = true;
    this.dataService.post<User[]>(Controllers.User.GetUsers, JSON.stringify("")).subscribe(result => { this.Users = result, this.loading = false; });
  }

  EditUser(User: User) {
    this.router.navigate(['/adminEdit', User.Id]);
  }

  CreateUser() {
    this.router.navigate(['/adminEdit']);
  }

  Home() {
    this.router.navigate(['/']);
  }


  DeleteUser(User: User) {
    if (confirm(`¿Seguro desea eliminar el registro ${User.Name}?`)) {
      this.loading = true;
      this.dataService.post<User>(Controllers.User.DeleteUser, User).subscribe(result => {
        this.dataService.post<User[]>(Controllers.User.GetUsers, JSON.stringify("")).subscribe(result => { this.Users = result; this.loading = false; });
      });
    }
  }

  SearchWord() {
    this.loading = true;
    this.dataService.post<User[]>(Controllers.User.GetUsers, JSON.stringify((this.Search.trim() != "") ? this.Search : "")).subscribe(result => { this.Users = result; this.loading = false });
  }
}
