class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("You can call me " + this.name);
    }
    showStats() {
        console.log("This ninja's name is " + this.name);
        console.log(this.name + "'s health is " + this.health);
        console.log(this.name + "'s speed is " + this.speed);
        console.log(this.name + "'s strength is " + this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + "'s health has increased to " + this.health + " from the sake!");
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
