import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'ng-model',
    template: `
    <p>请输入您的姓名：</p>
    <input type="text" [(ngModel)]="name" placeholder="请输入您的姓名">
    <h4 *ngIf="name">Welcome, {{name}}</h4>
    `
})
class NgModelComponent {
}

@Component({
    selector: 'ng-if',
    template: `
    <!-- 当前angular2版本暂不支持在radio中使用NgModel，只能使用output代替 -->
    <label class="radio-inline"><input type="radio" name="levelradio" (click)="levelValue = 0">info</label>
    <label class="radio-inline"><input type="radio" name="levelradio" (click)="levelValue = 1">warn</label>
    <label class="radio-inline"><input type="radio" name="levelradio" (click)="levelValue = 2">error</label>
    <h5 *ngIf="levelValue == 0">NgIf示例内容，选择的级别为<span class="label label-info">Info</span></h5>
    <h5 *ngIf="levelValue == 1">NgIf示例内容，选择的级别为<span class="label label-warning">warn</span></h5>
    <h5 *ngIf="levelValue == 2">NgIf示例内容，选择的级别为<span class="label label-danger">error</span></h5>
    `
})
class NgIfComponent {
}

@Component({
    selector: 'ng-switch',
    template: `
    <label class="radio-inline"><input type="radio" name="levelradio" (click)="levelValue1 = 0">info</label>
    <label class="radio-inline"><input type="radio" name="levelradio" (click)="levelValue1 = 1">warn</label>
    <label class="radio-inline"><input type="radio" name="levelradio" (click)="levelValue1 = 2">error</label>
    <div [ngSwitch]="levelValue1">
        <h5 *ngSwitchWhen="0">NgSwitch示例内容，选择的级别为<span class="label label-info">Info</span></h5>
        <h5 *ngSwitchWhen="1">NgSwitch示例内容，选择的级别为<span class="label label-warning">warn</span></h5>
        <h5 *ngSwitchWhen="2">NgSwitch示例内容，选择的级别为<span class="label label-danger">error</span></h5>
        <h5 *ngSwitchDefault>NgSwitch示例内容，选择的级别为<span class="label label-default">default</span></h5>
    </div>
    `
})
class NgSwitchComponent {
}

@Component({
    selector: 'build-in',
    directives: [NgModelComponent, NgIfComponent, NgSwitchComponent],
    template: `
    <h3>欢迎来到<b>Angular2</b>内置组件示例。</h3>
    <h4>NgModel示例：</h4>
    <ng-model></ng-model>
    <hr>
    <h4>NgIf示例：</h4>
    <ng-if></ng-if>
    <hr>
    <h4>NgSwitch示例：</h4>
    <ng-switch></ng-switch>
    `
})
class BuildInApp {
}

bootstrap(BuildInApp);

