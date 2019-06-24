var arr = Array ();
taskInput=document.getElementById("main-list");
addButton=document.getElementsByTagName("button")[0];
incompleteTaskHolder=document.getElementById("perform-list");
completedTasksHolder=document.getElementById("done-list");
console.log("TODOLIST");
    newElement=function(tasks){
     listItem=document.createElement("li");
     checkBox=document.createElement("input");
     label=document.createElement("label");
     editInput=document.createElement("input");
     editButton=document.createElement("button");
     deleteButton=document.createElement("button");

    label.innerText=tasks;
    checkBox.type="checkbox";
    editInput.type="text";
    editButton.innerText="Edit";
    editButton.className="edit";
    deleteButton.innerText="Delete";
    deleteButton.className="delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}
 var addTask=function(){
    console.log("Add...");
    listItem=newElement(taskInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value="";
    console.log("Added word -", label.innerText);
}
  var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");

    editInput=listItem.querySelector('input[type=text]');
    label=listItem.querySelector("label");
    containsClass=listItem.classList.contains("editMode");
    if(containsClass){
        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }
    listItem.classList.toggle("editMode");
    console.log("...change",label.innerText);
    console.log(editTask);
}
  var deleteTask=function(){
    console.log("Delete Task...", label.innerText);
    ul=listItem.parentNode;
    ul.removeChild(listItem);
    console.log(deleteTask);
}
   var taskCompleted=function(){
    console.log("Complete Task..." , label.innerText);
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
    console.log(taskCompleted);
}
   var  taskIncomplete=function(){
    console.log("Incomplete Task...", label.innerText);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
    console.log(taskIncomplete);
}
    addButton.onclick=addTask;

   var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    checkBox=taskListItem.querySelector("input[type=checkbox]");
    editButton=taskListItem.querySelector("button.edit");
    deleteButton=taskListItem.querySelector("button.delete");
    editButton.onclick=editTask;
    deleteButton.onclick=deleteTask;
    checkBox.onchange=checkBoxEventHandler;
    console.log(bindTaskEvents);
}
console.log(Array);