$( document ).ready(function() {

  $("form").submit(function (e) {
    e.preventDefault(); // disables form submit from continueing

	var forminfo = "";
	
    $(this).find(':text').each(function() {
	  forminfo = forminfo.concat($(this).attr("name")) + ": " + $(this).val() + "\n"; 
      console.log($(this).attr('name'));
    });
	alert(forminfo);

    /*inputs = $(this, ':input');
    console.log(inputs.count);
        var values = {};
        inputs.each(function() {
          console.log($(this).val());
            values[this.name] = $(this).val();
        });*/

  });
});
