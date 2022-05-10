

class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;

    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Name:"+ this.name, "\nStrengh:"+ this.strength, "\nSpeed:"+ this.speed, "\nHealth:"+ this.health);
    }

    drinkSake(){
        this.health +=10;
        console.log(this.health);
        
    }
}


const ninja = new Ninja("Raul")
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();


class Sensei extends Ninja{
    constructor(name){
        
        super(name);
        this.wisdom = 10;


    }
    speakWisdom(){
        console.log("I am full of knowledge")
    }
    
}

const sensei = new Sensei("Raul Sr.")
sensei.speakWisdom();
sensei.showStats();
console.log(sensei.wisdom);
