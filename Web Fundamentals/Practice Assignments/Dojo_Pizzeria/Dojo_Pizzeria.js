

var pizza = { 
    crustType: ["deep dish", "hand tosssed", 'thin crust'],
    sauceType: ["traditional", "marinara", "light"],
    cheeses: ["mozzarella", "extra", "feta"],
    toppings: ["pepperoni", "sausage", "olives", "onions", "green peppers", ]
};

console.log(pizza);

function pizzaOven(crustType, sauceType, cheeees, toppings){

    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeees = cheeees;
    pizza.toppings = toppings;
    return pizza;
};

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni", "sausage");
console.log(pizza1);

console.log("Your Pizza has " + pizza1)