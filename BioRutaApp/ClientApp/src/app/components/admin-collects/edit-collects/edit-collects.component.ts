import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collect } from 'src/app/models/Collect';
import { DataService } from 'src/app/services/data.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-edit-collects',
  templateUrl: './edit-collects.component.html',
  styleUrls: ['./edit-collects.component.css']
})
export class EditCollectsComponent {

  public Collect: Collect = new Collect();

  public formEdit: FormGroup;
  public minLength: number = 5;
  public loading: boolean = false;

  public edit: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router){

    var id = this.route.snapshot.paramMap.get('Id');

    if(id != null){
      this.edit = true;
      this.dataService.post<Collect>(Controllers.Collects.GetCollectById, JSON.stringify(id)).subscribe(result => { this.Collect = result;});
    }else{
      this.Collect.RegistrationDate = "";
    }


    this.formEdit = this.formBuilder.group({
      RegistrationDate:['RegistrationDate', [Validators.required, Validators.minLength(this.minLength)]],
      ClientName:['ClientName', [Validators.required, Validators.minLength(this.minLength)]],
      StateName:['StateName', [Validators.required, Validators.minLength(this.minLength)]],
      Addres:['Addres', [Validators.required, Validators.minLength(this.minLength)]],
      CollecterName:['CollecterName', [Validators.required, Validators.minLength(this.minLength)]],
    });
  }

  Home(){
    this.router.navigate(['/']);
  }

  List(){
    this.router.navigate(['/listCollects']);
  }

  Save(){

    if(this.formEdit.valid){
      this.Collect.Error = false;
      this.loading = true;

      var url = this.edit ? Controllers.Collects.UpdateCollect : Controllers.Collects.CreateCollect ;

      this.dataService.post<Collect>(url,this.Collect).subscribe({
        next: (v) => {
          this.loading = false;
          if(v.Error){
            this.Collect = v;
          }else{
            alert(`Recolección ${this.edit ? "actualizada" : "creada" }!`);
            this.router.navigate(['/listProducts']);
          }
        },
        error: (e) => {
          this.loading = false;
          this.Collect.Error = true;
          this.Collect.Message = e.message;
          console.error(e);
        },
      });
    }

  }

}
