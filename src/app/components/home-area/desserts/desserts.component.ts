import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-desserts',
    templateUrl: './desserts.component.html',
    styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

    public desserts = [
        { id: 1, name: "Ice Cream"},
        { id: 2, name: "Pavlova"},
        { id: 3, name: "Eclair"},
        { id: 4, name: "Apple Pie"},
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
