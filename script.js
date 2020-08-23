let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();

xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://google.com/', true); 

xhr.onload = function() {document.write(xhr.response)
                         location.href = 'n2.kinoroom.cam'
                        
                        }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ); } 
xhr.send();
