class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            console.log(this.name + " attacked " + target.name + " with a power level of " + this.power);
            target.res -= this.power;
            if (target.res <= 0) {
                target.res = 0;
                console.log(target.name + "'s resilience has been reduced to " + target.res)
                console.log(target.name + " was defeated by " + this.name)
            }
            else {
                console.log(target.name + "'s resilience has been reduced to " + target.res)
            }
        }
        else {
            throw new Error("Target improper class instance");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    use(target) {
        if (target instanceof Unit) {
            console.log(this.name + " was played on " + target.name);
            console.log("Effect: " + this.text)
            if (this.stat == "reselience") {
                target.res += this.mag;
                console.log(target.name + "'s resilience is now " + target.res)
            }
            else if (this.stat == "power") {
                target.power += this.mag;
                console.log(target.name + "'s power is now " + target.res)
            }
        }
        else {
            throw new Error("Target improper class instance");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "reselience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's reselience by 2", "reselience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)


hardAlgorithm.use(redBeltNinja);
unhandledPromiseRejection.use(redBeltNinja);
pairProgramming.use(redBeltNinja);
redBeltNinja.attack(blackBeltNinja)