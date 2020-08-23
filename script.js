let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
xhr.open('GET', 'https://google.com', true); 
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');
xhr.setRequestHeader('Access-Control-Max-Age', '86400');
xhr.onload = function() {alert( 'Успешно! '); }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ); } 
xhr.send();
