import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    // Two-Way binding must be into an empty existing object:
    public product = new ProductModel();

    constructor(private productsService: ProductsService, private router: Router) { }

    async add() {
        try {
            console.log(this.product);
            
            // const addedProduct = await this.productsService.addProduct(this.product);
            // alert("Product has been added, id: " + addedProduct.id);
            // this.router.navigateByUrl("/products");
        }
        catch(err: any) {
            alert(err.message);
        }
    }
    
}
