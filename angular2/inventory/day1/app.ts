import {EventEmitter} from "angular2/core";
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageuri: string,
        public sortName: string[],
        public price: number
    ){
    };
}

@Component({
    selector: 'inventory-app',
    template: `
    <div>
        <h2>{{product.name}}</h2>
        <span>{{product.sku}}</span>
    </div>
    `
})
class InventoryApp {
    product: Product;

    constructor() {
        this.product = new Product('NiceHat', '一款很不错的黑色帽子', '/resources/images/black-hat.jpg',
        ['男士', '装饰品', '帽子'], 29.99);
    }
}

bootstrap(InventoryApp);