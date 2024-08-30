// let input = document.getElementById('input-text');
// let inputValue = input.value.trim();

// let taskNumber =1;

// // Create and append a div element with the input value
// let createDiv = document.createElement("div");
// createDiv.textContent = inputValue;
// document.body.appendChild(createDiv);

// // Function to add a list item when a button is clicked
// function addBtn() {
//   let btnId = document.getElementById("btn");
//   let ul = document.getElementById("list"); // Make sure you have a <ul> or <ol> with id "list"
//   let createLi = document.createElement("li");
  
//   // Get the current value of the input field
//   let newValue = input.value.trim(); // Update inputValue with the latest input value
//   createLi.innerHTML = `Task ${taskNumber} <br> ${newValue}`
// //   createLi.createElement("button")
//   taskNumber++;




//   // Append the new list item to the list
//   ul.appendChild(createLi);

//   input.value =''
// }

// // Add an event listener to the button to call addBtn function when clicked
// document.getElementById("btn").addEventListener("click", addBtn);

// function createButton() {
//     // Create the button element
//     let button = document.createElement("button");
    
//     // Set the button's id and text content
//     button.id = "btn";
//     button.textContent = "Add Task";
    
//     // Attach the addBtn function to the button's click event
//     button.addEventListener("click", addBtn);
    
//     // Append the button to the body (or any other container element)
//     document.body.appendChild(button);
//   }
  
//   // Call the createButton function to add the button to the page
//   createButton();





// for (let i=0; i <ul.length;i++){
//     let item =ul[i]
//     item.textContent=`Task ${i+newValue}`
//     ul.appendChild(item)
//   }


//method 2
// let taskNumber = 1; // Initialize a variable to keep track of task numbers

// // Function to add a list item when a button is clicked
// function addBtn() {
//   let ul = document.getElementById("list");
//   let input = document.getElementById('input-text');
//   let inputValue = input.value.trim();

//   if (inputValue === '') {
//     alert('Please enter a task.');
//     return;
//   }

//   // Create the list item (li) and set its text
//   let createLi = document.createElement("li");
//   createLi.textContent = `Task ${taskNumber}: ${inputValue}`;

//   // Create the button to be added to the li
//   let taskButton = document.createElement("button");
//   taskButton.textContent = "Do Something";
//   taskButton.addEventListener("click", function() {
//     alert(`You clicked the button for Task ${taskNumber}`);
//   });

//   // Append the button to the li
//   createLi.appendChild(taskButton);

//   // Append the new list item (with the button) to the list
//   ul.appendChild(createLi);

//   // Increment the task number
//   taskNumber++;

//   // Clear the input field
//   input.value = '';
// }

// // Function to create the initial button that triggers adding tasks
// function createMainButton() {
//   let button = document.createElement("button");
//   button.id = "btn";
//   button.textContent = "Add Task";
//   button.addEventListener("click", addBtn);
//   document.body.appendChild(button);
// }

// // Call the function to create the main button
// createMainButton();





// new
// Function to add a new task
// let addNumber =1;

// function addTask() {
//     let input = document.getElementById('input-text');
//     let taskValue = input.value.trim();

//     if (taskValue === '') {
//         alert('Please enter a task.');
//         return;
//     }

//     let ul = document.getElementById("task-list");

//     // Create a new list item (li) for the task
//     let li = document.createElement("li");

//     // Create a text node for the task value and append it to the list item
//     let taskText = document.createElement("span");
//     taskText.innerHTML = `Task ${addNumber}: <br> ${taskValue}`                                       //enter
//     li.appendChild(taskText);
//     //`Task ${taskNumber}: ${inputValue}`;

//     // Create an Edit button
//     let editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.id ="editbtn";
//     editBtn.className='editbtn1'
//     editBtn.addEventListener("click", function() {
//         let newTaskValue = prompt("Edit your task:", taskText.textContent);
//         if (newTaskValue !== null && newTaskValue.trim() !== "") {
//             taskText.textContent = newTaskValue.trim();
//         }
//     });
//     li.appendChild(editBtn);

//     // Create a Delete button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.className='dltbtn1'
//     deleteBtn.addEventListener("click", function() {
//         ul.removeChild(li);
//     });
//     li.appendChild(deleteBtn);

//     // Append the list item to the task list
//     ul.appendChild(li);

//     // Clear the input field
//     input.value = '';
// }

// // Attach the addTask function to the "Add Task" button
// document.getElementById("add-task-btn").addEventListener("click", addTask);



// //practice
// let editbutton1 =createElement("button")
// editbutton1.textContent="edit";
// editbutton1.addEventListener("click",function(){
//     let prompt1 = prompt("Please edit task ", taskText.textContent)
//     if (prompt1 !== null && prompt1.trim() !== ''){
//         prompt1.textContent =prompt1.trim()
//     }
// })
// li.appendChild(editbutton1)




//second try for css
let addNumber =1;

function addTask() {
    let input = document.getElementById('input-text');
    let taskValue = input.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    let ul = document.getElementById("task-list");

    // Create a new list item (li) for the task
    let li = document.createElement("li");

    // Create a text node for the task value and append it to the list item
    let taskText = document.createElement("span");
    let creatediv = document.createElement("span")
    creatediv.className="div-btn"
    taskText.innerHTML = `Task ${addNumber}: <br> ${taskValue}`;                                       //enter
    li.appendChild(taskText);
    //`Task ${taskNumber}: ${inputValue}`;
    addNumber++;

    // Create an Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.id ="editbtn";
    editBtn.className='editbtn1'
    editBtn.addEventListener("click", function() {
        let newTaskValue = prompt("Edit your task:", taskText.textContent);
        if (newTaskValue !== null && newTaskValue.trim() !== "") {
            taskText.textContent = newTaskValue.trim();
        }
    });
    taskText.appendChild(editBtn);

    // Create a Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className='dltbtn1'
    deleteBtn.addEventListener("click", function() {
        ul.removeChild(li);
    });
    taskText.appendChild(deleteBtn); //span k under hai is liye taskTest call kiyar

    //delete all
    // let deleteAll =document.getElementById("delete-all");
    // deleteAll.addEventListener("click",function (){
    //     deleteAll.removeChild(ul)
    // })

    // Append kareingay list item to the task list
    ul.appendChild(li);

    // Clear kareingay input field
    input.value = '';
}

// Attach the addTask function to the "Add Task" button
document.getElementById("add-task-btn").addEventListener("click", addTask);


