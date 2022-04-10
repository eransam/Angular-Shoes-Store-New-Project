import { Component, OnInit } from '@angular/core';

// Two-Way Binding

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    public item: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    public makeOrder(): void {
        alert("Ordering: " + this.item);
        this.item = "";
    }

}
