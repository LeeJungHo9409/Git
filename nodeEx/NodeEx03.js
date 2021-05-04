//자세한 내용은 node.txt를 참고하자.

var a = 0; //a는 함수 스코프 0으로 선언되었다.
let b = 1;
const c = 2;

console.log("함수 밖");
console.log("var : " + a);
console.log("let : " + b);
console.log("const : " + c);

function scof(){
    
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Main Scof 함수");
    console.log("var : " + a);
    console.log("let : " + b);
    console.log("const : " + c);

}

scof();

function reviseScof(){
    
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Revise Scof 함수 초기값");
    console.log("var : " + a);
    console.log("let : " + b);
    console.log("const : " + c);

    var a = 100;
    let b = 200;
    const c = 300;

    console.log("Revise Scof 함수 재선언");
    console.log("var : " + a);
    console.log("let : " + b);
    console.log("const : " + c);

}