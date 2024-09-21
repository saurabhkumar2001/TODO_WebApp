let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let taskValue = input.value.trim();
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskValue;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    
    ul.appendChild(li);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let list = event.target.parentElement;
        list.remove();
    }
});
