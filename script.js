let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
let hyptext=[]

function sendok(value){
if(value =='' || value==' '){
alert('Введите url')
} else {
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 
xhr.onprogress = function() { document.getElementById('textout1').innerHTML="Статус: загрузка..." }
xhr.onload = function() {
hyptext.append(xhr.response)
document.getElementById('textout1').innerHTML="Статус: загружено!"
document.getElementById('textout1').innerHTML+='<input type="button" value="Перейти!" onclick="opend(hyptext[0])" />'
}
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();
}
}
function opend(val){
localStorage.setItem('url_str', val);
window.open('pindex.html');
}
