let item = document.querySelectorAll(".Content");

let toDoBox = document.getElementById("ToDo");
let inProgressBox = document.getElementById("InProgress");
let underReviewBox = document.getElementById("UnderReview");
let finishedBox = document.getElementById("Finished");

for(list of item){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        

        toDoBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        toDoBox.addEventListener("drop", function(e){
            toDoBox.appendChild(selected);
            selected = null;
        });

        inProgressBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        inProgressBox.addEventListener("drop", function(e){
            inProgressBox.appendChild(selected);
            selected = null;
        });

        underReviewBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        underReviewBox.addEventListener("drop", function(e){
            underReviewBox.appendChild(selected);
            selected = null;
        });

        finishedBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        finishedBox.addEventListener("drop", function(e){
            finishedBox.appendChild(selected);
            selected = null;
        });

        
    });
}