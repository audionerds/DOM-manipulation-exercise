//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

// Select all of the list items with a class of “second”.
document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

//Give the section with an id of container the text “Hello!”.
document.getElementById("container").innerText = "Hello!";

//Add the class main to the div with a class of footer. + console.log
let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer.classList);

//Remove the class main on the div with a class of footer. + console.log
footer.classList.remove("main");
console.log(footer.classList);

//Create a new li element.
let newLi = document.createElement("li");

//Give the li the text “four”.
newLi.innerText = "four";

//Append the li to the ul element.
let list = document.querySelector("ul");
list.appendChild(newLi);

//Loop over all of the lis inside the ol tag and give them a background color of “green”.
let listItems = document.querySelectorAll("ol li");
listItems.forEach(function (li) {
  li.style.backgroundColor = "green";
});

//Remove the div with a class of footer
footer.remove();
console.log(document.querySelector(".footer"));
