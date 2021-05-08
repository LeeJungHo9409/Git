
var Human = function(type){
    this.type = type || 'human';
    //this.type은 휴먼 내부 생성된 프로토타입 type

    //console.log(this.type, type);
};

//Human('bang');

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function(){
    alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName){
    Human.apply(this,arguments);
    this.firstName = firstName;
    this.lastName = lastName;

   console.log(this.firstName, this.lastName);
}

//이부분은 이해 어렵..
Zero.prototype = Object.create(Human.prototype); //new 함수와 같은 기능 프로토타입 객체 생성
Zero.prototype.constructor = Zero; //상속!
Zero.prototype.sayName = function(){
    alert(this.firstName+''+this.lastName);
    //줄바꿈 왜 하는지 아직 잘 모르겠음.
};

var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero);