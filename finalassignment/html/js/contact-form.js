
// Pop up message for invalid entry

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Code must be entered for EMPYREUS to reach you");
    return false;
  } 
}
