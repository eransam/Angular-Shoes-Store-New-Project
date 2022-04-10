import { environment } from './../../../../environments/environment';
import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public productImagesUrl = environment.productImagesUrl;
    
    public product: ProductModel;

    constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

    async ngOnInit() {
        try {
            const id = this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

}
