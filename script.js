const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();         //whenever we write a task savedata will be called
}


//how to store data in local storage?, so that data doesn't go away when refresed ->
//what ever content is there in "listcontainer" will be stored in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
} 


//checking the task done or not
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");      // its chcek the task is done
        saveData();    //same goes here 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();           //it  removes a task
        saveData();    //same goes here 
    }
}, false);


// Add task on Enter key press
inputBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Display the data when the page is loaded
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();