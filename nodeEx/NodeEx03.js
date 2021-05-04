//자세한 내용은 node.txt를 참고하자.

var a = 0; //a는 함수 스코프 0으로 선언되었다.

/*b,c는 블록 스코프로 선언
let b = 1;
const c = 2;

실행해본 결과 scof test console.png 참고
*/

console.log("함수 밖");
console.log("var : " + a);
console.log("let, const 선언안됨 ");

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
    b = 200;
    //c = 300;
    //애초에 실행 자체가 안됨.

    console.log("Revise Scof 함수 재선언");
    console.log("var : " + a);
    console.log("let : " + b);
    console.log("const : " + c);

}

reviseScof();