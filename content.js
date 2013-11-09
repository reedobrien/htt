$( document ).ready(function() {

   
  $("form").each(function(){ 
    var form = $(this).serialize();
    chrome.runtime.sendMessage({method:'setOutput', output:form});
  });

  $("form").submit(function (e) {
    e.preventDefault(); // disables form submit from continueing
    $(this).find(':input').each(function() {
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
