let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
function send(value){
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 

xhr.onload = function() {document.write(xhr.response) }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();
}
