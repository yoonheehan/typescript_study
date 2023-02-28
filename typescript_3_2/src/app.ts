interface AddFn {
  (a: number, b: number): number
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// 상속은 하나의 클래스로부터 밖에 상속이 안되지만, 인터페이스는 여러개를 참조해서 사용할수 있다. ( ~~~ implements A_interface, B_interface ...)
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + '' + this.name);
    } else {
      console.log('Hi!');
    }
    
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am ');

console.log(user1)