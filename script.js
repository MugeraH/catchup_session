let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let errorLabel = document.getElementById("errorMessage");
let errorLabel1 = document.getElementById("errorMessage1");
let submitButton = document.getElementById("btn");

// change Element css property
// add/remove a class on an element

// validation
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("start");

  if (ageInput.value === "") {
    // errorLabel1.classList.add("show");
    errorLabel1.style.display = "unset";
    return;
  }

  let personAge = parseInt(ageInput.value);

  if (personAge < 18) {
    // errorLabel.style.display = "unset";
    // errorLabel.classList.remove("hide");
    errorLabel.classList.add("show");
    return;
  } else {
    // sending data to a backend
    console.log("You are an adult");
    console.log("end");
//append





  }
});
