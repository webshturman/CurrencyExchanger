// console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum (arg:number) {
    return function (arg1:number) {
       return  arg+arg1
    }
}
console.log(sum(3)(6))
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
//@ts-ignore
function makeCounter () {
    let count = 0
    return function() {
        return ++count
    }
}
const counter = makeCounter();
//@ts-ignore
console.log(counter()); // 1
//@ts-ignore
console.log(counter()); // 2
const counter2 = makeCounter()
console.log(counter2()); // 1
console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2 (value:number) {
    let currentValue = value
    return {
        increase: function() {
            return ++currentValue
        },
        decrease: function() {
            return --currentValue
        },
        reset: function() {
            return currentValue = 0
        },
        set: function() {
            return value = currentValue
        },
    }
}
let newCounter = makeCounter2(5)
console.log(newCounter.increase())
console.log(newCounter.decrease())
console.log(newCounter.reset())
console.log(newCounter.set())
console.log(newCounter.increase())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
function superSum (num:number) {
    if (num <=0 || num === null || num === undefined) return 0;
    if (num===1) return (n:number) => n;
    let argArray:Array<number> = [];

    function helper(...args:Array<number>) {
        argArray = [...argArray, ...args]
        if(argArray.length >= num){
            argArray.length = num;
            return argArray.reduce((acc:number,el:number) => acc + el)
        } else {
            return helper;
        }
    }
    return helper;
}
// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(3)(2)(5,3)) //10
// @ts-ignore
console.log(superSum(3)(2,5,3)) //10
// @ts-ignore
console.log(superSum(3)(2,5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2,5)(3,9)) //10
//----------------------------------------------------------------------------------------------------
// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
const sumTo = (num:number) => {
    let sum = 0;
    for (let i=num; i >= 1; i--){
        sum += i
    }
    return sum
}
console.log(sumTo(100))
//@ts-ignore
const sumTo2 = (num:number) => {
   let sum = 0;
   if(num >=1){
       return sum
   } else {
       return sum = num + sumTo2(num-1)
   }
}

console.log(sumTo(100))
//-------------------------------------------------------------------------------------------------
//@ts-ignore
function factorial(n:number) {
    if(n ===1) return 1
    return n * factorial(n-1)
}
console.log(factorial(5))
//----------------------------------------------------------------------------------------
//@ts-ignore
function fib(n:number) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(7))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};