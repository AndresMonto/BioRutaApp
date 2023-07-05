import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';
import { Controllers } from 'src/environments/environment';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  public Products: Product[] = [];
  public Search: string = "";
  public loading: boolean = false;

  constructor(private dataService: DataService, private router: Router) {
    this.loading = true;
    this.dataService.post<Product[]>(Controllers.Products.GetProducts, JSON.stringify("")).subscribe(result => { this.Products = result, this.loading = false; });
  }

  EditProduct(Product: Product) {
    this.router.navigate(['/productEdit', Product.Id]);
  }

  CreateProduct() {
    this.router.navigate(['/productEdit']);
  }

  Home() {
    this.router.navigate(['/']);
  }

  DeleteProduct(Product: Product) {
    if (confirm(`¿Seguro desea inhabilitar el registro ${Product.Name}?`)) {
      this.loading = true;
      this.dataService.post<User>(Controllers.Products.DeleteProduct, Product).subscribe(result => {
        this.dataService.post<Product[]>(Controllers.Products.GetProducts, JSON.stringify("")).subscribe(result => { this.Products = result; this.loading = false; });
      });
    }
  }

  SearchWord() {
    this.loading = true;
    this.dataService.post<Product[]>(Controllers.Products.GetProducts, JSON.stringify((this.Search.trim() != "") ? this.Search : "")).subscribe(result => { this.Products = result; this.loading = false });
  }
}
