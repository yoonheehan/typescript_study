// any 와 다르게 unkown은 어떠한 변수에 대입될수가 없다.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// 타입을 확실히 알아야 한다.
if (typeof userInput === 'string'){
  userName = userInput;
}

function generateError(message: string, code: number): never{
  throw {message: message, errorCode: code};
  // while(true){}
}

const result = generateError('An error occurred!', 500);
console.log(result)