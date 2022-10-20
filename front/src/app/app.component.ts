import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    theme = 'noir';
    layoutMode = 'static';
    megaMenuMode = 'gradient';
    menuMode = 'light';
    profileMode = 'inline';
    inputStyle = 'outlined';
    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;
    }
}
