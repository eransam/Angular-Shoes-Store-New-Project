import { ColorsService } from './../../../services/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-colorful',
    templateUrl: './colorful.component.html',
    styleUrls: ['./colorful.component.css'],
    // providers: [ColorsService] // Angular creates an object on component's scope.
})
export class ColorfulComponent implements OnInit {

    public randomColor: string;

    // DI - Dependency Injection
    constructor(private colorsService: ColorsService) { } // Constructor Assignment

    ngOnInit(): void {
        this.randomColor = this.colorsService.getRandomColor();
    }

}
