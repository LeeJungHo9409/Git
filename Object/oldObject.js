//객체에 동적
//리터널이란 문자 그대로의 값을 의미합니다.
//즉 배열리터널 ex) const num = []; 여기서 [] 이걸 리터널이라 부름.
//객체 리터널 const num = {}; {} 의미.


var sayNode = function(){
    console.log("Node");
};

var es = 'ES';
//ex) var oldObject = {1,2,'안녕', 0.7}
var oldObject = {
    sayJs: function(){ //새로운 함수를 생성
        console.log('JS');
    },
    sayNode:sayNode, //객체리터널 안에 함수를 가르키는 것.

};
oldObject[es+6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJs();
console.log(oldObject.ES6);
