//this function gathers the input from the form
function processForm(){
    //This makes the div visible
    document.getElementById("userInfo").style.display = ""; 
    //This shows Username in the userInfo div
    document.getElementById("Username").innerText = document.getElementById("uname").value;
    //This shows the weapon in the userInfo div
    document.getElementById("weapon").innerText = document.getElementById("weapons").value;
    //This shows the health/damage in the userInfo div
    document.getElementById("health/damage").innerText = document.getElementById("health").value;
    //This shows the Point total in the userInfo div
    document.getElementById("pointtotal").innerText = document.getElementById("ptotal").value;
}