// 基础类型
function basicType() {
    let isDone: boolean = false;

    let totle: number = 6;
    
    let color: string = 'red';
    
    let comment: string = `
    This is a sample comment within multiple lines.
    This is the first line.
    It is the second line.
    Oops, the last one.
    `;
    
    console.log("Boolean value: " + isDone);
    console.log("Number value: " + totle);
    console.log("String value: " + color);
    console.log("Multiple lines: " + comment);

    // 任意类型，在定义时不确定类型，不做编译时校验
    let notSure: any = 4;
    console.log("value: " + notSure + ", type: " + typeof(notSure));

    notSure = "hello, i have changed.";
    console.log("value: " + notSure + ", type: " + typeof(notSure));

    notSure = true;
    console.log("value: " + notSure + ", type: " + typeof(notSure));
}

// 字符串模板

class StringTemplate {
    // 两种定义构造方法的方式:
    // 1. 直接在构造方法参数中指定类的共有属性，此处带有public的参数，即为类的属性
    constructor(public message: string) {
    }

    // 2. 先申明类的共有属性，之后在构造方法中，通过入参的方式赋值；注意构造方法的参数名不能与共有属性名相同
    // message: string;
    // constructor(msg: string) {
    //     this.message = msg;
    // }


    print() {
        console.log(`The message info is : ${this.message}.`);
    }
}

let st = new StringTemplate("Run!");
st.print();

// 数组(Array)，两种定义方式
function arrayExample() {
    // 1. 通过方括号 '[]' 声明
    let nums: number[] = [1, 2, 3];
    nums.forEach(function(value, index, array) {
        console.log("Number " + index + " is " + value);
    });
    // 2. 通过Array<Type>的方式声明
    let strs: Array<string> = ["a", "b", "c"];
}


// 元组(Tuple)，元素类型可以不同
function tupleExample() {
    let list: [string, number];
    list = ["hello", 2];
    
    console.log("Type of list: " + typeof(list));
    console.log("The second item is " + list[1] + ", type is " + typeof(list[1]));
    
    list[2] = "leo";
    console.log("The second item is " + list[1] + ", now type is " + typeof(list[1]));
}

// 枚举(Enum)
function enumExample() {
    enum Color {RED, GREEN, BLACK};
    let color: Color;
    color = Color.RED;

    console.log(color); // 输出枚举对应的Number
    console.log(Color[color]); // 输出枚举对应的名称

    // 枚举可在定义时指定对应的数值，其后不指定的，均在前一个值的基础上加1
    enum City {NJ = 2, BJ = 4, SH};
    let nj: City = City.NJ;
    let bj: string = City[4];  // 获取枚举对应的名称，注意此处的4是枚举值，不是索引
    let sh: City = City.SH;
    console.log(nj);
    console.log(bj);
    console.log(sh);
}

let someValue: any = "This is a string.";
let strLength: number = someValue.length;
console.log(strLength);