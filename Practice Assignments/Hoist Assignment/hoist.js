
// GIVEN

console.log(example);
var example = "I'm the example!";

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//1


var hello;
console.log(hello);                                   
hello = 'world';  


// Original will have var hello hoisted to top 

//2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// var needle and test function will get hoisted to top 

//3 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// var brendan and function will be hoisted to top 

//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// function eat will be hoisted under var food  and in the function var food will be hoisted inisde of function 

// 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean will be hoisted to top but will get error since we tried to invoke it before assisnged a function


// 6 

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// function will get hoisted to top and var food inside function will get hoisted to top within function


// 7 

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// function will be hoisted to top and inside var dojo will be hoisted as well

// Bonus 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;

    // function will produce error, const functions are not initialized 