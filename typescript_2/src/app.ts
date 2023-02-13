// const userName = 'Max';

// let age = 30;

// age = 29;

// const add = (a:number, b:number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button){
//   button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30
};

// 포인터 복사가 아닌 완전한 복사를 하는 법
const copiedPerson = { ...person };

// ...은 모든 파라미터들을 넣어주는 역할을 한다. 그 후 가공한다.
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

// 이렇게 넣으면 firstName이 userName으로 overwritten이 된다.
const { firstName: userName, age } = person;

console.log(userName, age)
