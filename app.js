"use strict"

const inputTodo = document.getElementById("input-todo");
const addBtn = document.getElementById("add-btn");
const ulTodo = document.getElementById("ul-Todo");

addBtn.addEventListener('click', () => {
    //console.log("click")
    let input = inputTodo.value
    let newTodo = document.createElement("li")

    newTodo.innerText = input
    ulTodo.appendChild(newTodo)

    // clear input field
    inputTodo.value = ""

    // done/ clear button
    let doneBtn = document.createElement('button')
    doneBtn.innerText = "delete" 
    newTodo.appendChild(doneBtn)
    doneBtn.addEventListener('click', () => {
        newTodo.remove()
    })  
})