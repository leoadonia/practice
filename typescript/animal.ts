// 类的定义与继承
class Animal {
    constructor(public name: string) {

    }

    move(distance: number = 0) {
        console.log(`${this.name} moves ${distance}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance = 5) {
        console.log('slithering...');
        super.move(distance);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance = 10) {
        console.log('galloping...');
        super.move(distance);
    }
}

let snake = new Snake('A snake');
let horse = new Horse('A horse');

snake.move();
horse.move(12);