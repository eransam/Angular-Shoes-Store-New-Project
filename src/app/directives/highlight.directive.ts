import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// Usage: 
// <p highlight>...</p>
// <p highlight="red">...</p>
// <h2 highlight>...</h2>
// <h2 highlight="red">...</h2>

// "Host Element": the element using the directive - above p or h2

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @Input("highlight")
    public color: string; // Will get the assigned color

    @HostBinding("style.background-color")
    public backColor: string = "";

    public ngOnInit(): void {
        if(!this.color) {
            this.color = "Yellow";
        }
    }

    @HostListener("mouseenter")
    public setColor(): void {
        this.backColor = this.color;
    }

    @HostListener("mouseleave")
    public resetColor(): void {
        this.backColor = "";
    }
}
