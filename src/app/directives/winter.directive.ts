import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// <p *winter>...</p>
// 
// <ng-container> </ng-container>
// <ng-container> <p>...</p> </ng-container>

@Directive({
    selector: '[winter]'
})
export class WinterDirective implements OnInit {

    // ViewContainerRef is a container tag around our host.
    // TemplateRef is our host.
    
    constructor(private viewContainerRef: ViewContainerRef, private host: TemplateRef<any>) { }

    ngOnInit(): void {
        if(this.isWinter()) {
            // Tells Angular to build the host inside the container:
            this.viewContainerRef.createEmbeddedView(this.host);
        }
    }

    private isWinter(): boolean {
        const now = new Date();
        const month = now.getMonth() + 1;
        return month <= 2 || month >= 11
    }

}
