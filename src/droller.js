export default class DiceRoller {
    roll(sides, num) {
        if(isNaN(sides) || isNaN(num)){
            throw 'invalid argument, expects numbers';
        }

        let tempSum = 0;
        for ( var i = 0; i < num; i++){
            tempSum += Math.ceil(Math.random() * sides);
        }
        return tempSum;
    }

    getDice(sides) {
        return new Dice(sides);
    }
}

class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    roll(num = 1) {
        if( num === 1){
            return Math.ceil(Math.random() * this.sides);
        }

        return Math.ceil(Math.random() * this.sides) + roll(num - 1);
    }
}
