document.querySelector(".submit-form").onclick = myClick
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange == function(){
  if(this.readyState == 4 && this.status == 200){
    myFunction(this.responseText)
  }
}


function myClick() {
  xhttp.open("POST", "http://127.0.0.1:8000/baton_api/");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", "qgWDOpdPdKFtAyTt4Ffn8XHYzuPcUQzeuxWP6jRyRM5NbmFiO83g7EeasldHNnwz");  // т окен для неавторизированных пользователей
  xhttp.send();


  xhttp.onload = function() {
    console.log(xhttp.response);
  }

}
