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
    selector: 'ng-style',
    template: `
    <div [style.background-color]="'yellow'">
        <p>This is a fixed area with yellow background.</p>
    </div>
    <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
        This is a fixed white text on blue background.
    </div>

    <div *ngIf="colorInput.value" [style.color]="color" [style.font-size.px]="fontInput.value" [ngStyle]="{'margin': '10px 0px', 'border': '1px solid'}">
        {{text}}
    </div>
    
    <form class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-sm-2">请输入字体颜色：</label>
            <div class="col-sm-8">
                <input type="text" class="form-control input-form" #colorInput>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2">请输入字体大小：</label>
            <div class="col-sm-8">
                <input type="text" class="form-control input-form" #fontInput>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2">请输入文字内容：</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" #textInput>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2">
                <button class="btn btn-info" (click)="apply(colorInput.value, fontInput.value, textInput.value)">提交</button>
            </div>
        </div>
    </form>
    `
})
class NgStyleComponent {
    color: string;
    fontSize: number;
    text: string;

    constructor() {
        this.color = 'pink';
        this.fontSize = 15;
    }

    apply(color, fontSize, text): void {
        this.color = color;
        this.fontSize = fontSize;
        this.text = text ? text : color + ' text';
    }
}

@Component({
    selector: 'ng-class',
    template: `
    <div [ngClass]="{bordered: isBordered}" (click)="toggleBorder()">
        <p>点击文字区域，设置／取消边框。</p>
    </div>

    <div [ngClass]="['bordered', 'blue-text']">
        <p>带有边框的绿色文字区域。</p>
    </div>

    <div [ngClass]="classList">
        <p>带有边框的粉红色背景字体区域。</p>
    </div>
    `
})
class NgClassComponent {
    isBordered: boolean;

    classList: Array<string>;

    constructor() {
        this.classList = ['bordered', 'pink-background'];
    }

    toggleBorder(): void {
        this.isBordered = ! this.isBordered;
    }
}

@Component({
    selector: 'ng-for',
    template: `
    <div *ngFor="#item of peopleByCity">
        <h5>{{item.city}}</h5>
        <table class="table table-hover">
            <thead>
                <th>Index</th>
                <th>Name</th>
                <th>Age</th>
            </thead>
            <tr *ngFor="#p of item.people; #i = index">
                <td>{{i}}</td>
                <td>{{p.name}}</td>
                <td>{{p.age}}</td>
            </tr>
        </table>
    </div>
    `
})
class NgForComponent {
    peopleByCity: Array<Object>;

    constructor() {
        this.peopleByCity = [
            {
                city: 'Miami',
                people: [
                    {name: 'John', age: 12},
                    {name: 'Angel', age: 22}
                ]
            },
            {
                city: 'Sao Paulo',
                people: [
                    {name: 'Anderson', age: 35},
                    {name: 'Flipse', age: 23}
                ]
            }
        ];
    }
}

@Component({
    selector: 'ng-non-bindable',
    template:`
    <div>
        <span class="bordered">{{content}}</span>
        <span class="pre" ngNonBindable>
            &larr; This is what {{content}} rendered.
        </span>
    </div>
    `
})
class NgNonBindComponent {
    content: string;

    constructor() {
        this.content = 'content text';
    }
}

@Component({
    selector: 'build-in',
    directives: [NgModelComponent, NgIfComponent, NgSwitchComponent, NgStyleComponent, NgClassComponent, NgForComponent, NgNonBindComponent],
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
    <hr>
    <h4>NgStyle示例：</h4>
    <ng-style></ng-style>
    <hr>
    <h4>NgClass示例：</h4>
    <ng-class></ng-class>
    <hr>
    <h4>NgFor示例：</h4>
    <ng-for></ng-for>
    <hr>
    <h4>NgNonBindable示例：</h4>
    <ng-non-bindable></ng-non-bindable>
    `
})
class BuildInApp {
}

bootstrap(BuildInApp);

