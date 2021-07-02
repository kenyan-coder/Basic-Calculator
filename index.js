let num1 = 8;
let num2 = 2;
document.getElementById("num1").textContent=num1;
document.getElementById("num2").textContent=num2;
let sumEl= document.getElementById("sum-el");

// Addition function here
function add(){
    let total= num1 + num2
    sumEl.textContent= "Sum: " + total;

}
// Subtract function here
function subtract(){
    let total=num1 -num2;
    sumEl.textContent= "Sum: " + total;
}
// Divide function here
function divide(){
   let total= num1/num2
   sumEl.textContent= "Sum: " + total;
}
// Multiply function here
function multiply(){
    let total =num1*num2
    sumEl.textContent= "Sum: " + total;
}