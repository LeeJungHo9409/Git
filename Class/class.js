//ES6+ 이후로 클래스가 나왔지만, 자바스크립트는 프로토타입 기반으로 동작한다는 것을 명심하자.

class Human {
    constructor(type = 'human'){
        this.type = type;
    }

    static isHuman(human){
        return humam instanceof Human;
    }

    breathe(){
        alert('h-a-a-a-m');
    }
}

class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lasstName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);