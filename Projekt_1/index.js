// $env:Path += ";C:\Program Files\nodejs\" et läheks tööle terminalis ka
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = 'Hello ' + username;  
}