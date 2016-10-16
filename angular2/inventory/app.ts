import {EventEmitter} from "angular2/core";
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageuri: string,
        public sortName: string,
        public price: string
    ){
    };
}

@Component({
    selector: 'inventory-app',
    template: `
    <div>
        (Products will go here soon~)
    </div>
    `
})
class InventoryApp {

}

bootstrap(InventoryApp);