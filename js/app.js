window.onload = load;

function load() {
  //----STORING THE HTML ELEMENTS INTO A VARIABLE -------------------------
  var textInput = document.getElementById("note");
  var selectInput = document.getElementById("select");
  var buttonSub = document.getElementById("btn");
  var invalidMsg = document.getElementById("invalidMsg");
  var notes = document.getElementById("notes");

  // ----SETTING THE ONCLICK TRIGGER TO POST THE NOTES-------------------------
  buttonSub.onclick = send;


  // ----CREATING THE FUNCTION-------------------------
  function send() {
    // ----CREATING THE NOTES CONTAINER-------------------------
    var newBox = document.createElement("Div");
    newBox.classList.add("notes");
    // --CREATING THE IMAGE TAG -------------------------
    var image = document.createElement("img");
    image.classList.add("img");
    // --CREATING THE DELETE X BUTTON -------------------------
    var delx = document.createElement("img");
    delx.classList.add("x");
    delx.setAttribute("src", "images/x-mark-24.ico")
    // --CREATING THE PARAGRAPH TAG FOR THE CODE -------------------------
    var text = document.createElement("p");
    text.classList.add("textStyle");
    image.setAttribute("src", "")
    // --PUSHING THE CREATED ELEMENTS ON USER SUBMISION -------------------------
    newBox.appendChild(image);
    newBox.appendChild(delx);
    newBox.appendChild(text);
    text.innerHTML = textInput.value;
    document.body.appendChild(newBox);

    // --SETTING AN ALERT IF THE USER MISSES AN INPUT FIELD (NO VALIDATION REQUIRED) -------------------------
    if (textInput.value === "" || textInput.value === null) {
      textInput.style.borderColor = "red";
      invalidMsg.innerHTML = "Ooopsie! you forgot to select one of the input fields, no worries!:)";
    } else {
      textInput.style.borderColor = "#000";
      invalidMsg.innerHTML = "";
    }



    if (selectInput.value === "c#") {
      text.style.color = "orange";
      image.src = "images/c-sharp.png"
      selectInput.style.borderColor = "#000";
    } else if (selectInput.value === "mysql") {
      text.style.color = "red";
      image.src = "images/logo-mysql.png"
      selectInput.style.borderColor = "#000";

    } else if (selectInput.value === "js") {
      text.style.color = "blue";
      image.src = "images/js.png";
      selectInput.style.borderColor = "#000";
    } else if (selectInput.value === "css") {
      text.style.color = "green";
      image.src = "images/css.png"
      selectInput.style.borderColor = "#000";
    } else {
      selectInput.focus();
      invalidMsg.innerHTML = "Ooopsie! you forgot to select one of the input fields, no worries!:)";
      selectInput.style.borderColor = "red";
    }




    // ------FUNCTION TO DELETE SINGLE NOTE-------------------------
    $('.x').click(function() {
     $(this).parent().remove();
  })




  }

}
