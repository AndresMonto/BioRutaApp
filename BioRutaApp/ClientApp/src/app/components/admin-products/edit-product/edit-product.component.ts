import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';
import { Controllers } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  public Product: Product = new Product();

  public formEdit: FormGroup;
  public minLength: number = 5;
  public loading: boolean = false;

  public edit: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router){

    var id = this.route.snapshot.paramMap.get('Id');

    if(id != null){
      this.edit = true;
      this.dataService.post<Product>(Controllers.Products.GetProductById, JSON.stringify(id)).subscribe(result => { this.Product = result;});
    }


    this.formEdit = this.formBuilder.group({
      Name:['Name', [Validators.required, Validators.minLength(this.minLength)]],
      Score:['Score', [Validators.required, Validators.minLength(1)]],
      State:['State', [Validators.required]]
    });
  }

  Home(){
    this.router.navigate(['/']);
  }

  List(){
    this.router.navigate(['/listProducts']);
  }

  Save(){

    if(this.formEdit.valid){
      this.Product.Error = false;
      this.loading = true;

      var url = this.edit ? Controllers.Products.UpdateProduct : Controllers.Products.CreateProduct ;

      this.dataService.post<Product>(url,this.Product).subscribe({
        next: (v) => {
          this.loading = false;
          if(v.Error){
            this.Product = v;
          }else{
            alert(`Producto ${this.edit ? "actualizado" : "creado" }!`);
            this.router.navigate(['/listProducts']);
          }
        },
        error: (e) => {
          this.loading = false;
          this.Product.Error = true;
          this.Product.Message = e.message;
          console.error(e);
        },
      });
    }

  }
}
