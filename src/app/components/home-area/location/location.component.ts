import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public displayLocation(location: string): void {
        alert("My location: " + location)
    }

    

}
