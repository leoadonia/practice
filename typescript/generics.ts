// 泛型

class Greeter<T> {
    greeting: T;

    constructor(public message: T) {
        this.greeting = message;
    }

    greet() {
        console.log(this.greeting);
    }
}

let hello = new Greeter<string>('hello');
let num = new Greeter<number>(2);

hello.greet();
num.greet();