import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Collect } from 'src/app/models/Collect';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-list-collects',
  templateUrl: './list-collects.component.html',
  styleUrls: ['./list-collects.component.css']
})
export class ListCollectsComponent {
  public Collects: Collect[] = [];
  public User: User = new User();
  public DateIni: string = "";
  public DateFin: string = "";

  public loading: boolean = false;

  constructor(private dataService: DataService, private router: Router, private securityService: SecurityService) {
    this.User = this.securityService.GetUserInfo();
    this.loading = true;
    this.dataService.post<Collect[]>(Controllers.Collects.GetCollects, JSON.stringify("")).subscribe(result => { this.Collects = result, this.loading = false; });
  }

  ViewCollect(Collect: Collect) {
    this.router.navigate(['/collectEdit', Collect.Id]);
  }

  CreateCollect() {
    this.router.navigate(['/collectEdit']);
  }

  Home() {
    this.router.navigate(['/']);
  }

  SearchDate() {
    this.loading = true;
    if(this.DateIni.trim().length > 0 && this.DateFin.trim().length > 0){
      this.dataService.post<Collect[]>(Controllers.Collects.GetCollectsDate, {DateIni: this.DateIni, DateFin: this.DateFin}).subscribe(result => { this.Collects = result; this.loading = false });
    }else{
      this.dataService.post<Collect[]>(Controllers.Collects.GetCollects, JSON.stringify("")).subscribe(result => { this.Collects = result; this.loading = false; });
    }
  }
}
