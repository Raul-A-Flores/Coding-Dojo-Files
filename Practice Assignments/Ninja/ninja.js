

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

