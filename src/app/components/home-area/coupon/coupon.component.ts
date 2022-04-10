import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

    public amount: number = 60;
    public total: number = 3;
    public now = new Date();


    constructor() { }

    ngOnInit(): void {
    }

    

}
