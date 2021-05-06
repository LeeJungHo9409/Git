//구조분해 할당
console.log("es5");

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

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

console.log(count);

const{ getCandy,status:{count}} = candyMachine;