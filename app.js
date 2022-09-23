let btn1 = document.querySelector("#btn_1");
let inputEl = document.querySelector("#input");
let btn2 = document.querySelector("#btn_2");
let btn3 = document.querySelector("#btn_3");
let btn4 = document.querySelector("#btn_plus");
let btn5 = document.querySelector("#btn_4");
let btn6 = document.querySelector("#btn_5");
let btn7 = document.querySelector("#btn_6");
let btn8 = document.querySelector("#btn_minus");
let btn9 = document.querySelector("#btn_7");
let btn10 = document.querySelector("#btn_8");
let btn11 = document.querySelector("#btn_9");
let btn12 = document.querySelector("#btn_same");

btn1.addEventListener("click" , (e) => {
    inputEl.value += '1';
})

btn2.addEventListener("click" , (e) => {
    inputEl.value += '2';
})

btn3.addEventListener("click" , (e) => {
    inputEl.value += '3';
})

btn4.addEventListener("click" , (e) => {
    inputEl.value += '+';
})

btn5.addEventListener("click" , (e) => {
    inputEl.value += '4';
})

btn6.addEventListener("click" , (e) => {
    inputEl.value += '5';
})

btn7.addEventListener("click" , (e) => {
    inputEl.value += '6';
})

btn8.addEventListener("click" , (e) => {
    inputEl.value += '-';
})

btn9.addEventListener("click" , (e) => {
    inputEl.value += '7';
})

btn10.addEventListener("click" , (e) => {
    inputEl.value += '8';
})

btn11.addEventListener("click" , (e) => {
    inputEl.value += '9';
})

btn12.addEventListener("click" , (e) => {
    inputEl.value = eval(inputEl.value);

})