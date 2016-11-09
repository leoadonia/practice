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
    selector: "product-image",
    inputs: ["product"],
    template: `
    <img class="img-thumbnail" [src]="product.imageuri">
    `
})
class ProductImage {
    product: Product;
}

@Component({
    selector: "product-sort",
    inputs: ["product"],
    template: `
    <div>
        <span *ngFor="#name of product.sortName; #i = index">
            <a href="#">{{name}}</a>
            <span>{{i < (product.sortName.length - 1) ? '>' : ''}}</span>
        </span>
    </div>
    `
})
class ProductSort {
    product: Product;
}

@Component({
    selector: "price-display",
    inputs: ["price"],
    template: `
    <span>\${{price}}</span>
    `
})
class PriceDisplay {
    price: number;
}

@Component({
    selector: "product-row",
    inputs: ["product"],
    host: {'class': 'row', 'style': 'margin: 10px;'},
    directives: [ProductImage, ProductSort, PriceDisplay],
    template: `
    <div class="col-sm-2">
        <product-image [product]="product"></product-image>
    </div>
    <div class="col-sm-5">
        <h3>{{product.name}}</h3>
        <div>SKU #{{product.sku}}</div>
        <div>
            <product-sort [product]="product"></product-sort>
        </div>
    </div>
    <div class="col-sm-1">
        <price-display [price]="product.price"></price-display>
    </div>
    `
})
class ProductRow {
    product: Product;
}

@Component({
    selector: 'product-list',
    directives: [ProductRow],
    inputs: ['productList'],
    outputs: ['onProductSelected'],
    template: `
    <div>
        <product-row *ngFor="#product of productList"
            [product]="product"
            (click)="clicked(product)"
            [class.active]="isSelected(product)">
        </product-row>
    </div>
    `
})
class ProductList {
    /**
     * @input 外部传入的商品列表
     */
    productList: Product[];

    /**
     * @output 向外发布当前选中的商品信息
     */
    onProductSelected: EventEmitter<Product>;

    /**
     * @property 跟踪当前选中的商品
     */
    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    /**
     * @function 点击商品时，维护当前选中的商品，同时，将选中的商品发布出去
     */
    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    /**
     * @function 判断当前商品是否为选中状态
     */
    isSelected(product: Product): boolean {
        if(!product || !this.currentProduct) {
            return false;
        }

        return product.sku === this.currentProduct.sku;
    }
}

@Component({
    selector: 'inventory-app',
    directives: [ProductList],
    template: `
    <div>
        <product-list
            [productList]="products"
            (onProductSelected)="productWasSelected($event)">
        </product-list>
    </div>
    `
})
class InventoryApp {
    products: Product[];

    constructor() {
        this.products = [
            new Product('MyShoes', '黑色运动鞋', '/resources/images/black-shoes.jpg',
                        ['男士', '鞋子', '运动鞋'], 109.99),
            new Product('NeatoJacket', '蓝色夹克衫', '/resources/images/blue-jacket.jpg',
                        ['女士', '上衣', '夹克&马甲'], 238.99),
            new Product('NiceHat', '一款很不错的黑色帽子', '/resources/images/black-hat.jpg',
                        ['男士', '装饰品', '帽子'], 29.99)
        ];
    }

    productWasSelected(product: Product): void {
        console.log("Select product: " + product);
    }
}

bootstrap(InventoryApp);