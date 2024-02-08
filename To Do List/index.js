function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.innerHTML += taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";

}

function deleteTask() {
    var taskList = document.getElementById("taskList");
    var taskItems = taskList.getElementsByTagName("li");
    

    for (var i = taskItems.length - 1; i >= 0; i--) {
        var checkbox = taskItems[i].querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            taskList.removeChild(taskItems[i]);
        }
        else{
            alert("No tasks have been selected");
            console.log("Hello");
        }
    }
}