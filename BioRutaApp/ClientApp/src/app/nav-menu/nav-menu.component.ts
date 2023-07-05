import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Controllers } from 'src/environments/environment';
import { AppComponent } from '../app.component';
import { User } from '../models/User';
import { DataService } from '../services/data.service';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input() IsAuth : boolean = false;
  public User: User = new User();

  constructor(private router : Router, private dataService: DataService, private securityService : SecurityService){
    this.dataService.post<User>(Controllers.User.GetInfo,{}).subscribe(result => {this.User = result});
  }

  ngOnInit(): void {
    this.Create([
       "pcoded.min.js",
    ]);
  }

  private Create(scripts: string[]){
    scripts.forEach(element => {
      var node = document.createElement('script');
      node.type = 'text/javascript';
      node.async = true;
      node.src = 'assets/js/' + element;
      document.getElementsByTagName('body')[0].append(node);
    });
  }

  LogIn(){
    this.securityService.ResetToken();
    this.router.navigate(['/login']);
  }

  Admin(){
    this.router.navigate(['/admin']);
  }

  Home(){
    this.router.navigate(['/']);
  }

  EditUser(){
    console.log(this.User.Id);
    this.router.navigate(['/adminEdit', this.User.Id]);
  }
}
