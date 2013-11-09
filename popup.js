// Copyright 2013 Reed O'Brien <reed@reedobrien.com>. 
// All rights reserved. Use of this source code is governed by a 
// BSD-style license that can be found in the LICENSE file.

// First Check if 

var autofillEnabled

chrome.privacy.services.autofillEnabled.get({}, function(details) {
  if (details.value) {
    autofillEnabled=true;
    console.log("It is enabled");  
  }
  else {
    autofillEnabled=false;
    console.log("It is NOT enabled");
  }
});


$( document ).ready(function() {
  console.log(autofillEnabled);
  if (autofillEnabled===true) {
      $("#autofill-enabled").html("AutoFill is enabled");
    }
  else
  { 
    $("#autofill-enabled").html("AutoFill is disabled");
  }
}); 
