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

