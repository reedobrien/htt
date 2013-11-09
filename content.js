$( document ).ready(function() {

  $("form").submit(function (e) {
    e.preventDefault(); // disables form submit from continueing

    $(this).find(':input').each(function() {

      console.log($(this).attr('name'));
    });


    /*inputs = $(this, ':input');
    console.log(inputs.count);
        var values = {};
        inputs.each(function() {
          console.log($(this).val());
            values[this.name] = $(this).val();
        });*/

  });
});
