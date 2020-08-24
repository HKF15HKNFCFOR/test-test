let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
let hyptext=[]

function sendok(id){
  value=document.getElementById('textbox'+id).value
if(value =='' || value==' '){
alert('Введите url')
} else {
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 
xhr.onprogress = function() { document.getElementById('textout'+id).innerHTML="Статус: загрузка..." }
xhr.onload = function() {
hyptext.append(xhr.response)
document.getElementById('textout'+id).innerHTML="Статус: загружено!"
document.getElementById('textout'+id).innerHTML+='<input type="button" value="Перейти!" onclick="opend(hyptext['+id+'])" />'
}
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();
}
}
function opend(val){
localStorage.setItem('url_str', val);
window.open('pindex.html');
}
