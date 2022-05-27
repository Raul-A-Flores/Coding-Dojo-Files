var count = 3;
var countElement = document.querySelector("#count");

console.log(countElement);

function likes(){
    count++;
    countElement.innerText = count + " likes(s)";
    console.log(count);
}