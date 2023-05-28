// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(saveEl);

let count = 0
function increment() {
    count  +=  1
    countEl.textContent = count
}
// 1. Create a function, save(), which logs out the count when it's called
function save(){

    
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count +  " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent +=  countStr;
    countEl.textContent=0;
    count=0;
    

    // NB: Make sure to not delete the existing content of the paragraph
    
}
