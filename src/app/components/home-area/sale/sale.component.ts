import { Component, OnInit } from '@angular/core';

// Property Binding

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

    public tooltip: string = "Only Now!";

    constructor() { }

    ngOnInit(): void {
    }

}
