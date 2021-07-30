// document.title = "To-Do DOM"
// console.log(document.all);


let newTask = document.querySelector('#newtask');
let newTask = document.querySelector('#formOne');

let todoItems = document.querySelector('#items');

let todoItem = document.querySelector('#item');

let completeElement = document.querySelector('.clist ol');



let createTask = function(task){
    let listItem = document.createElement('li');

    let checkBox = document.createElement('input');

    let label = document.createElement('label');

    label.innerText = task;

    checkBox.type = 'checkbox';

}
