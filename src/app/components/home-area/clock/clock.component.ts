import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, DoCheck, OnChanges {

    public time: string;
    public timerId: number;

    constructor() { }

    // Same as componentDidMount
    ngOnInit(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            this.time = now.toLocaleTimeString();
        }, 1000);
    }

    // Same as componentWillUnmount
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

    // Similar to componentDidUpdate
    ngOnChanges(changes: SimpleChanges): void {
        console.log("Something changed...", changes);
    }

    ngDoCheck(): void {
        console.log("Performs whenever Angular check for changes...");
    }

}
