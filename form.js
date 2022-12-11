function validateForm() {
    let x = document.forms["myForm"]["mobile no","password"].value;
    if(x == "") {
        alert("mobile no and password must be filled out");
        return false;
    }
}