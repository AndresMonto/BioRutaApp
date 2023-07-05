import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Collect } from 'src/app/models/Collect';
import { DataService } from 'src/app/services/data.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-list-collects',
  templateUrl: './list-collects.component.html',
  styleUrls: ['./list-collects.component.css']
})
export class ListCollectsComponent {
  public Collects: Collect[] = [];
  // public Search: string = "";
  public DateIni: string = "";
  public DateFin: string = "";

  public loading: boolean = false;

  constructor(private dataService: DataService, private router: Router) {
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

  // DeleteCollect(Collect: Collect) {
  //   if (confirm(`¿Seguro desea inhabilitar el registro de ${Collect.Client.Name}?`)) {
  //     this.loading = true;
  //     this.dataService.post<Collect>(Controllers.Collects.DeleteCollect, Collect).subscribe(result => {
  //       this.dataService.post<Collect[]>(Controllers.Collects.GetCollects, JSON.stringify("")).subscribe(result => { this.Collects = result; this.loading = false; });
  //     });
  //   }
  // }

  SearchDate() {
    this.loading = true;
    if(this.DateIni.trim().length > 0 && this.DateFin.trim().length > 0){
      this.dataService.post<Collect[]>(Controllers.Collects.GetCollectsDate, {DateIni: this.DateIni, DateFin: this.DateFin}).subscribe(result => { this.Collects = result; this.loading = false });
    }else{
      this.dataService.post<Collect[]>(Controllers.Collects.GetCollects, JSON.stringify("")).subscribe(result => { this.Collects = result; this.loading = false; });

      this.loading = false;
    }
  }
}
