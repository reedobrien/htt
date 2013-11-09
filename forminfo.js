$( document ).ready(function () {
	$( "h1" ).text("TEXT");
	$( "form" ).submit(function(eventObj) {
		var forminfo = "";
		$(this).find(':text').each (function() {
			forminfo = forminfo.concat($(this).attr("name")) + ": " + $(this).attr("value") + "\n"; 
			});
		alert(forminfo);
	}); 
});