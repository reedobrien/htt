$( document ).ready(function() {

  $("form").each(function(){ 
    var form = $(this).serialize();
    chrome.runtime.sendMessage({method:'setOutput', output:form});
  });

  /*
    Write HTML string to page.
   */
  writeDialog = function(html, form) {
    open = '<div style="background-color: white; border-style: solid; border-width: 10px; border-color: rgb(51, 0, 51) !important; background-position: initial initial !important; background-repeat: initial initial !important;">';
    close = '</div>';
    //$('body').prepend(open + html + close);

    $('<div style="border-style: solid; border-width: 10px; border-color: rgb(51, 0, 51) !important; background-position: initial initial !important; background-repeat: initial initial !important"></div>').appendTo('body')
      .html('<div><h6>' + html + '</h6></div>')
      .dialog({
          modal: true, title: 'message', zIndex: 10000, autoOpen: true,
          width: 'auto', resizable: false,
          buttons: {
              Yes: function () {
                  $(this).dialog("close");
                  formSubmit(form);
              },
              No: function () {
                  console.log('no');
                  $(this).dialog("close");
              }
          },
          close: function (event, ui) {
              $(this).remove();
          }
    });
  }

  formSubmit = function(form) {
    form.submit();
  }

  $("form").submit(function (e) {
    // Disable form submit from continuing until dialog allows
    e.preventDefault();

    var forminfo = "";
	
	var autofilledColor = 'rgb(250, 255, 189)';

    $(this).find(':text').each(function() {
	  var autofilled = $(this).css('backgroundColor');
	  if(autofilled==autofilledColor)
	    forminfo = forminfo.concat($(this).attr("name")) + ": " + $(this).val() + "<br/>";
      console.log($(this).attr('name'));
    });

    writeDialog(forminfo, this);

  });


});


