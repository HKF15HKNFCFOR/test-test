let hyptext=[]

function sendok(id){
  let value=document.getElementById('textbox'+id).value
if(value =='' || value==' '){
alert('Введите url')
} else {
document.getElementById('textout'+id).innerHTML="Статус: началась загрузка"
let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 
xhr.onprogress = function() { document.getElementById('textout'+id).innerHTML="Статус: загрузка..." }
xhr.onload = function() {
hyptext[id]=xhr.response
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
let count=1
function add(){
document.getElementById('outing').innerHTML+=`Ваш url:
<input type="text" id="textbox`+count+`" />
<input type="button" value="Загрузить url" onclick="window.sendok(`+count+`);" />
  <div id="textout`+count+`"></div>`
count++
}
function dell_all(){
count=1
let save=hyptext[0]
hyptext=[]
hyptext[0]=save
 alert('opp')
document.getElementById('outing').innerHTML=''
}
