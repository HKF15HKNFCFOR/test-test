let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();

xhr.open('GET', 'https://cors.io/?https://google.com', true); 

xhr.onload = function() {alert( 'Успешно! '); }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ); } 
xhr.send();
