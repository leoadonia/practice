import {EventEmitter} from "angular2/core";
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'single-component',
    outputs: ['putRingOnit'],
    template: `
        <button (click)="liked()">like it?</button>
    `
})
class SingleComponent {
    putRingOnit: EventEmitter<string>;

    constructor() {
        this.putRingOnit = new EventEmitter();
    }

    liked(): void {
        this.putRingOnit.emit('oh oh oh...');
    }
}


@Component({
    selector: 'club',
    directives: [SingleComponent],
    template: `
        <div>
            <single-component (putRingOnit)="ringWasPlaced($event)"></single-component>
        </div>
    `
})
class ClubComponent {
    ringWasPlaced(msg: string): void {
        console.log(`Puts your hands up: ${msg}`);
    }
}

bootstrap(ClubComponent);