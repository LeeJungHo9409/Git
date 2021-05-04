//이벤트기반 이벤트루트를 위한 첫번째예제

console.log('예제01');

function first(){
    second();
    console.log('1빠');
}

function second(){
    third();
    console.log('2빠');
}

function third(){
    console.log('3빠');
}
first();