let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
let hyptext=''

function sendok(){
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://google.com', true); 
xhr.onprogress = function(event) {
  document.getElementById('but').value="Загрузка..."
}
xhr.onload = function() {
 hyptext= xhr.response
 document.getElementById('but').value="Загружено!"
document.getElementById('but').innerHTML+='<input type="button" value="Перейти!" onclick="document.write(hyptext)" />'
  }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();

}
function opend(){
window.open('https://cors-anywhere.herokuapp.com/https://google.com');
}
