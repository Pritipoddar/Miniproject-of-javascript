function validateNumber(){
    let x = document.forms["myForm"]["number"].value;
    if (x >= 1 && x <= 10){
        alert("valid number");
        // return false;

    }
    else if (x >= 11 && x <= 50){
        alert("number in in b/w 11 and 50")
    }
    else{
        alert("number is greater than 50")
    }

}

document.getElementById("main").style.backgroundColor = "purple";
document.getElementById("main").style.Color = "white";
document.getElementById("main").style.padding = "10px";
document.getElementById("main").style.textAlign = "centre";