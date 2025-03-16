let item = document.querySelectorAll(".Content");

let toDoBox = document.getElementById("ToDo");
let inProgressBox = document.getElementById("InProgress");
let underReviewBox = document.getElementById("UnderReview");
let finishedBox = document.getElementById("Finished");

// for(list of item){
//     list.addEventListener("dragstart", function(e){
//         let selected = e.target;
        

//         toDoBox.addEventListener("dragover", function(e){
//             e.preventDefault();
//         });
//         toDoBox.addEventListener("drop", function(e){
//             toDoBox.appendChild(selected);
//             selected = null;
//         });

//         inProgressBox.addEventListener("dragover", function(e){
//             e.preventDefault();
//         });
//         inProgressBox.addEventListener("drop", function(e){
//             inProgressBox.appendChild(selected);
//             selected = null;
//         });

//         underReviewBox.addEventListener("dragover", function(e){
//             e.preventDefault();
//         });
//         underReviewBox.addEventListener("drop", function(e){
//             underReviewBox.appendChild(selected);
//             selected = null;
//         });

//         finishedBox.addEventListener("dragover", function(e){
//             e.preventDefault();
//         });
//         finishedBox.addEventListener("drop", function(e){
//             finishedBox.appendChild(selected);
//             selected = null;
//         });

        
//     });
// }


let taskList = [
    { id: 1, title: "Design UI", category: "ToDo" },
    { id: 2, title: "Fix bugs", category: "InProgress" },
    { id: 3, title: "Learn", category: "UnderReview" },
    { id: 4, title: "Practice", category: "Finished" }
];

function addTask() {
    let taskTitle = document.getElementById("taskTitle").value.trim();
    let taskCategory = document.getElementById("taskCategory").value;

    if (taskTitle === "" || taskCategory === "") {
        alert("Please enter task title and select a category!");
        return;
    }

    let newTask = {
        id: taskList.length + 1,
        title: taskTitle,
        category: taskCategory
    };

    taskList.push(newTask);
    closeModal();
    displayTasks();
}

function displayTasks() {
    let categories = ["ToDo", "InProgress", "UnderReview", "Finished"];

    categories.forEach(category => {
        let section = document.getElementById(category);
        
        section.innerHTML = ""; 

        let heading = document.createElement("h4");
        heading.textContent = category.replace(/([A-Z])/g, " $1").trim();
        // section.appendChild(heading);

        let addButton = document.createElement("button");
        addButton.classList.add("add-btn");
        addButton.textContent = "Add Task";
        addButton.onclick = openModal;
        // section.appendChild(addButton);

        taskList.filter(task => task.category === category).forEach(task => {
            let taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.draggable = true;
            taskElement.id = `task-${task.id}`;
            taskElement.textContent = task.title;
            taskElement.ondragstart = drag;
            section.appendChild(taskElement);
        });
    });
}



function openModal() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskCategory").value = ""; 
    document.getElementById("overlay").style.display = "block";
    document.getElementById("taskModal").style.display = "block";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("taskModal").style.display = "none";
}



function drag(event) {
    event.dataTransfer.setData("taskId", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, newCategory) {
    event.preventDefault();
    let taskId = event.dataTransfer.getData("taskId");
    let taskIndex = taskList.findIndex(task => `task-${task.id}` === taskId);

    if (taskIndex !== -1) {
        taskList [taskIndex].category = newCategory;
        displayTasks();
    }
}

displayTasks();