var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
	deleteButton(items[i]);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li);
	input.value = "";
	deleteButton(li);
}

function deleteButton(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
} 

function removeParent(del) {
	del.target.parentElement.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikethrough(done){
	if (done.target.tagName === "LI") {
        done.target.classList.toggle("done");
    }
}




button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
ul.addEventListener("click", strikethrough);