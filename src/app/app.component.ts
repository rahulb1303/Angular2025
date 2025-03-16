import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productList: any;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => {
      this.productList = data.products;
      console.log(this.productList);
    });
  }

  // allValue: any = ""
  // profileForm = new FormGroup(
  //   {
  //     name : new FormControl(),
  //     email : new FormControl(),
  //     password : new FormControl(),
  //   }

  // );

  // onSubmit(){
  //   this.allValue = this.profileForm.value;
  //   console.log(this.allValue);

  // }
}
