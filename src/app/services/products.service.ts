import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        const products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        return product;
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {
        const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, product));
        return addedProduct;
    }

}
