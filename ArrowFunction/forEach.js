//this에 관한 예제이지만 반복문에 대한 예제이기도함
//es5
//항상 주의할건 자바스크립트는 작성할 때 위에서부터 읽는다.

console.log('relationship_EX01 : ES5');
var relationship_EX01 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends : function(){
        var that = this;
        this.friends.forEach(function(friend){ //friends 안에서 forEach를 한셈이다.
            //forEach는 배열 객체에서만 사용이 가능하다.
            console.log(that.name, friend);
        });
        
        /*
        var arr = ['가','나','다','라'];
        arr.forEach(function(item,index,arr2){//arr이 배열이 끝날때까지 돌아라
            console.log(item, index, arr2[index+1]);
            //1번째 아이템, 두번째 돌아간 횟수(index), 배열
        });*/
        //fun = (item, index) => console.log(index));
    },
};
relationship_EX01.logFriends();

console.log('relationship_EX02 : ES6');
const relationship_EX02 = {
    name : 'zero',
    friends: ['nero','hero','xero'],
    logFriends(){
        /*
        this라는 친구는 function 함수선언문을 이용하게되면 해당 함수로 접근합니다.
        es5에선 화살표함수가 존재하지 않으므로 스코프를 생성해야만해서
        따로 변수에 상위 스코프 this를 간접접근했지만,
        es6부턴 화살표함수가 존재함으로 스코프 선언이 필요없어졌으므로
        this를 이용해 상위 스코프에 바로 접근가능해졌음.

        코딩 간단화.
        */
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship_EX02.logFriends();