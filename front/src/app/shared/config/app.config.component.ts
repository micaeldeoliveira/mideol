import {Component, OnInit} from '@angular/core';
import { AppComponent } from '../../app.component';
import {AppMainComponent} from '../main/app.main.component';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit {

    specialThemes: any[];

    themes: any[];

    constructor(public appMain: AppMainComponent, public app: AppComponent) {
    }

    ngOnInit() {
        this.themes = [
            {name: 'blue', color: '#0071bc'},
            {name: 'cyan', color: '#00bfe7'},
            {name: 'green', color: '#4AA564'},
            {name: 'yellow', color: '#F9C642'},
            {name: 'purple', color: '#6A4AA5'},
            {name: 'pink', color: '#9f4488'},
            {name: 'bluegrey', color: '#4B6D7E'},
            {name: 'teal', color: '#07A089'},
            {name: 'orange', color: '#fe875d'},
            {name: 'grey', color: '#5B616B'},
        ];

        this.specialThemes = [
            {name: 'cappuccino', image: 'cappuccino'},
            {name: 'montreal', image: 'montreal'},
            {name: 'hollywood', image: 'hollywood'},
            {name: 'peak', image: 'peak'},
            {name: 'alive', color1: '#CB356B', color2: '#BD3F32'},
            {name: 'emerald', color1: '#348F50', color2: '#56B4D3'},
            {name: 'ash', color1: '#606c88', color2: '#3f4c6b'},
            {name: 'noir', color1: '#4b6cb7', color2: '#182848'},
            {name: 'mantle', color1: '#514A9D', color2: '#24C6DC'},
            {name: 'predawn', color1: '#00223E', color2: '#FFA17F'},
        ];
    }

    changeTheme(theme: string) {
        this.app.theme = theme;

        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
        this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
