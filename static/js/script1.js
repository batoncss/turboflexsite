console.log("Hello!")
document.querySelector(".submit-form").onclick = myClick
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange == function(){
  if(this.readyState == 4 && this.status == 200){
    myFunction(this.responseText)
  }
}

function myClick() {
  var json = JSON.stringify({name: document.getElementsByName("Mobilephone")[0].value});
  xhttp.open("POST", "baton_api/");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", "qgWDOpdPdKFtAyTt4Ffn8XHYzuPcUQzeuxWP6jRyRM5NbmFiO83g7EeasldHNnwz");  // токен для неавторизированных пользователей
  xhttp.send(json);
  xhttp.onload = function() {
    console.log(xhttp.response);
    var p;
    p = document.getElementById('out');
    p.placeholder = xhttp.response;
  }
}