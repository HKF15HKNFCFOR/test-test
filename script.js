function sendok(){
 let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://google.com', true); 
xhr.onprogress = function(event) {
  document.getElementById('but').value="Загрузка..."
}
xhr.onload = function() {
 document.getElementById('but').value="Загружено!"
document.getElementById('butpos').innerHTML='<input type="button" value="Перейти!" onclick="document.write(xhr.response)" />'
  }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();

}
