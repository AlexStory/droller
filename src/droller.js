export default class DiceRoller {
    roll(dice, num) {
        if(isNaN(dice) || isNaN(num)){
            throw 'invalid argument, expects numbers';
        }

        let tempSum = 0;

        for ( var i = 0; i < num; i++){
            tempSum += Math.ceil(Math.random() * dice);
        }
        return tempSum;
    }
}
