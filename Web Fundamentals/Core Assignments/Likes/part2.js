var count = 9;
var countElement = document.querySelector("#count");

console.log(countElement);

function likes(){
    count++;
    countElement.innerText = count + " likes(s)";
    console.log(count);
}

var count1 = 12;
var count1Element = document.querySelector("#count1");

console.log(count1Element);

function likes1(){
    count1++;
    count1Element.innerText = count1 + " likes(s)";
    console.log(count1);
}

var count2 = 9;
var count2Element = document.querySelector("#count2");

console.log(count2Element);

function likes2(){
    count2++;
    count2Element.innerText = count2 + " likes(s)";
    console.log(count2);
}