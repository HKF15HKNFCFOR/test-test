var text = '';
 
$.ajax({
	url: 'https://google.com',
	method: 'get',
	dataType: 'html',
	async: false,
	success: function(data){
		text = data;
	}
});
 
alert(text);
alert('df')
