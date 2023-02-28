
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// object인 경우에는 조합을 한다.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

// union 타입은 교집합을 꺼낸다. Universal은 number다
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


// 해당 함수가 어떤 형태로 나올수 있는지 타입스크립트에 알려주는 방식
function add(a: number, b: number): number;
function add(a: string, b: number): number;
function add(a: number, b: string): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add('Max', ' Schwarz');
result.split('');

const fethcedUserData = {
  id: 'u1',
  name: 'Max',
  // job: { title: 'CEO', description: 'My own company' }
};

// 타입스크립트는 백엔드나 외부에서 온 데이터를 판별(해당 요소가 내부에있는지 판단)을 못하기 때문에 있으면 하는 식으로 런타임 에러를 막는다.
// console.log(fethcedUserData?.job?.title);

const userInput = '';

// ?? => null question null 또는 undefined면 뒤에있는 것을 해라
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges)
//   }

//   if ('startDate' in emp) {
//     console.log('Privileges: ' + emp.startDate)
//   }
// }

// printEmployeeInformation({name: 'Manu', startDate: new Date()});

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ...' + amount);
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // 방법 1 typeGuard
//   // if ('loadCargo' in vehicle) {
//   //   vehicle.loadCargo(1000);
//   // }
//   // 방법 2 typeGuard
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break
//     case 'horse':
//       speed = animal.runningSpeed;
//   }

//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // 방법 1(형변환)
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // 방법 2(형변환)
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// // userInputElement.value = 'Hi there!';

// // 만약 확실히 그 값이 있는지 모른다면
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
//   // 인덱스 타입이 정해졌기 때문에 그 이외의 타입을 사용 못함 id: number은 에러를 일으킨다.
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character!'
// };

// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  console.log(element)
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Max'}, 'name'));

