let countBtn = document.getElementById("count");
let countDecrementBtn = document.getElementById("countDecrement");
let resetBtn = document.getElementById("reset");
let result = document.getElementById("result");
let count = 0;
countBtn.addEventListener("click", function(){
    ++count
    result.innerText = count
})
countDecrementBtn.addEventListener("click", function(){
    --count
    result.innerText = count
})
resetBtn.addEventListener("click", function(){
    count = 0
    result.innerText = count
})