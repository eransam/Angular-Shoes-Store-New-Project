import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

    @Output()
    public report = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    // public reportVeryGood(): void {
    //     this.report.emit("Very Good");
    // }
    
    // public reportMedium(): void {
    //     this.report.emit("Medium");
    // }
    
    // public reportPoor(): void {
    //     this.report.emit("Poor");
    // }

    public sendResult(result: string): void {
        this.report.emit(result);
    }

}
