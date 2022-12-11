var password=document.getElementById("password");

function genpassword() {
    var chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthpassword= 15;
    var password = "";
    for(var i = 0; i<= lengthpassword; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password +=chars.substring(randomNumber,randomNumber + 1);

    }    
    document.getElementById("password").value = password;
}

function copypassword(){
    var copytext = document.getElementById("password");
    copytext.select();
    document.execCommand("copy");
}

