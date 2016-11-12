import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'build-in',
    template: `
    <h3>欢迎来到<b>Angular2</b>内置组件示例。</h3>
    <p>请输入您的姓名：</p>
    <input type="text" [(ngModel)]="name" placeholder="请输入您的姓名">
    <h4 *ngIf="name">Welcome, {{name}}</h4>
    `
})
class BuildInApp {
    constructor() {
    }
}

bootstrap(BuildInApp);

