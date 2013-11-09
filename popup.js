// Copyright 2013 Reed O'Brien <reed@reedobrien.com>. 
// All rights reserved. Use of this source code is governed by a 
// BSD-style license that can be found in the LICENSE file.

// First Check if 

var autofillEnabled;

$(document).ready(function() {
  // Set autofill enabled
  chrome.privacy.services.autofillEnabled.get({}, setAutoFillEnabled);

});


function setAutoFillEnabled(details){
  if (details.value) {
    autofillEnabled=true;
    $("#autofill-enabled").html("AutoFill is enabled");
  }
  else {
    autofillEnabled=false;
    $("#autofill-enabled").html("AutoFill is not enabled");
  }
}
