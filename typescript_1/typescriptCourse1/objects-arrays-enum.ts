// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// person.role.push('admin'); push는 tuple에 적용이된다.
// tuple => 길이가 제한적이고 각 요소들의 type을 정해진 하나의 array형태


// const ADMIN = 0;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
  console.log('is author')
}