"use strict"

let localArray = []

const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("localArray"))


if (leadsFromLocalStorage) {
    localArray = leadsFromLocalStorage
    // clear hole localStorage !!!
    renderLocalArray()
} 
   

function renderLocalArray() {
    let listItems = ""
    for(let i= 0; i < localArray.length; i++) {
        
        listItems += `
        <li> 
        ${localArray[i]} 
        <button id="clear-btn" onclick="remove(this)">X</button>
        </li>
        `  
    }  
    ulEl.innerHTML = listItems  
}


function remove(e) {
    e.parentElement.remove()
    // clears whole localStorage !!
    localStorage.clear()
 }

 
saveBtn.addEventListener('click', () => {
    if(inputEl.value.length > 1) {
    localArray.push(inputEl.value)
    }
    inputEl.value = ""
    renderLocalArray()   
    localStorage.setItem("localArray", JSON.stringify(localArray))
})
