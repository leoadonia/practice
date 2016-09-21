import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'reddit',
    template: `
    <div>Hello {{name}}</div>
    `
})
class Reddit {
    name: string;

    constructor() {
        this.name = 'reddit';
    }
}
bootstrap(Reddit);

import {NgFor} from "angular2/common";

@Component({
    selector: 'reddit02',
    template: `
    <ul>
        <li *ngFor="#name of names">{{name}}</li>
    </ul>
    `
})
class Reddit02 {
    names: string[];

    constructor() {
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
}

bootstrap(Reddit02);

