import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
    selector: 'reddit',
    template: `
    <div>Simple reddir</div>
    `
})

class Reddit {}

bootstrap(Reddit);

