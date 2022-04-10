import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-best-product',
    templateUrl: './best-product.component.html',
    styleUrls: ['./best-product.component.css']
})
export class BestProductComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public displayBestProduct(args: Event): void {
        console.log(args);
        alert("Best Product: Irish Coffee ");
    }

}
