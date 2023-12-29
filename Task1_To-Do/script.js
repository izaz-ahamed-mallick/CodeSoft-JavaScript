let inputBox = document.querySelector("#inputBox");
let addTaskButton = document.querySelector("#addTaskButton");
let ulContainer = document.querySelector("#ul-box");
let errMsg = document.querySelector("#errmsg");

function showSavedData() {
  ulContainer.innerHTML = localStorage.getItem("data");
}
showSavedData();

// AddTask

addTaskButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    errMsg.innerHTML = "You Must write Something.";
  } 
  else{

    errMsg.innerHTML = "";
    let li = document.createElement("li");
    let span = document.createElement("span");
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("editBtn")
    li.appendChild(document.createTextNode(inputBox.value));
    span.innerHTML = "&#x2715";
    li.appendChild(span);
    li.appendChild(editButton);

    ulContainer.appendChild(li);
    inputBox.value = "";
    saveStorage();
    editHandeler(li,inputBox)
  }
});

// RemoveTask

function removeTask() {
  ulContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
      event.target.parentNode.remove();
      saveStorage();
    }
    else if (event.target.tagName === "BUTTON") {
      editTask(event.target.parentNode, inputBox);
    }
  });
}
removeTask();

// saveLocal Storage

function saveStorage() {
  localStorage.setItem("data", ulContainer.innerHTML);
}


// EditFunction

function editTask(li,inputBox){
   let currentTask = li.firstChild.nodeValue;
   inputBox.value = currentTask
   li.remove()
   saveStorage()
}

function  editHandeler(li,inputBox){
  li.addEventListener("click",(event)=>{
   if(event.target.tagName !== "BUTTON"){
    editTask(li,inputBox)
   }
  })
}
