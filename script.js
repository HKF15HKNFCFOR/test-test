let hyptext=[]

function sendok(id){
  let value=document.getElementById('textbox'+id).value
if(value =='' || value==' '){
alert('Введите url')
} else {
let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 
 alert('https://cors-anywhere.herokuapp.com/http://www.'+value)
xhr.onprogress = function() { document.getElementById('textout'+id).innerHTML="Статус: загрузка..." }
xhr.onload = function() {
hyptext.push(xhr.response)
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
