import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input() IsAuth : boolean = false;

  constructor(private router : Router){}

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
    this.router.navigate(['/login']);
  }

  Admin(){
    this.router.navigate(['/admin']);
  }
}
