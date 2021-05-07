//구조분해 할당

//객체
console.log("es5");

//공통문법
var candyMachine = {
    status:{
        name:'node',
        count:5,
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    }
}

//구문법 es5
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

console.log(count);

//신문법 es6+
const{ getCandy,status:{count}} = candyMachine;

//배열
var array = ['nodejs', {}, 10, true];

//구문법
var node = array[0];
var obj = array[1];
var bool = array[3];

//신문법 es6+
const [node2,obj2, bool2] = array;