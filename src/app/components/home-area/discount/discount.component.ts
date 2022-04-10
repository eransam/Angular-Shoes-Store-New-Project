import { Component, OnInit } from '@angular/core';

// Interpolation

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html'
})
export class DiscountComponent implements OnInit {

    public discount: number = 10;

    constructor() { }

    ngOnInit(): void {
    }

}
