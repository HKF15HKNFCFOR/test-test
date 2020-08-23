$("#form").on("submit", function(){
	$.ajax({
		url: '/handler.php',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
			$('#message').html(data);
		}
	});
});
alert('ok')
