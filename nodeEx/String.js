//es5
var num1 = 1;
var num2 = 2;
var result_es5 = 3;
var string_es5 = num1 + '더하기' + num2 + '는 ' + result_es5;
console.log('es5 문법으로 사용 ' + string_es5);

//es6
const num3 = 1;
const num4 = 2;
const result_es6 = 3;
const string_es6 = `es6 문법으로 사용 ${num3} 더하기 ${num4}는 '${result_es6}'`;
console.log(string_es6);
//따옴표(')아님 백틱(`) 사용.