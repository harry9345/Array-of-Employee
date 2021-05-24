var employee = ["Ali Rezaye", "Hasan Abassi", "Ghasem Soleymani"];
var firstName = document.getElementById("fName");
var familyName = document.getElementById("familyName");
var add = document.getElementById("add");
var first = document.getElementById("first");
var family = document.getElementById("family");
var ulList = document.getElementById("ulList");

employee.forEach(employeeList);

function employeeList(item) {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var removebtn = document.createElement("button");
  removebtn.innerHTML = "-";
  div.innerHTML += item;
  div.appendChild(removebtn);
  removebtn.setAttribute("onclick", "removeFromList(this)");
  li.appendChild(div);
  ulList.appendChild(li);
}

function removeFromList(e) {
  e.parentElement.remove();
}

add.addEventListener("click", function () {
  if (firstName.value !== "" || familyName.value !== "") {
    var fullName = firstName.value + " " + familyName.value;
    employee.push(fullName);
    console.log("fullName: " + fullName);
    console.log(employee);
    firstName.value = "";
    familyName.value = "";
  } else {
    first.innerHTML = "Please enter your name";
    family.innerHTML = "Please enter your family name";
    setTimeout(() => {
      first.innerHTML = "";
      family.innerHTML = "";
    }, 3000);
  }
  employeeList(fullName);
});
