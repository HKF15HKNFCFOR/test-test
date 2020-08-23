let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 

xhr.onload = function() {document.write(xhr.response)
                         location.href = 'yandex.ru'
                        
                        }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ); } 
xhr.send();
});
