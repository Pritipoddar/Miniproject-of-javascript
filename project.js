// function myFunction() {
//     let date = new Date();
//     document.getElementById("main").innerHTML = date;
//     document.getElementById("button").style.display = 'none'
// }
// function RefreshPage(){
//    location.reload();
function newdate() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d;
    document.getElementById("btn").style.display = "none";
    document.getElementById("reload").style.display = "block";
    document.getElementById("reload").innerHTML = "Reload";
  }