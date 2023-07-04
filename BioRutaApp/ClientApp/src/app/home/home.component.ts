import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Controllers } from 'src/environments/environment';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public User: User = new User();
  constructor(private dataService: DataService, private router: Router){
    this.dataService.post<User>(Controllers.User.GetInfo,{}).subscribe(result => {this.User = result});
  }

  Admin(){
    this.router.navigate(['/admin']);
  }

  Home(){
    this.router.navigate(['/']);
  }
}
