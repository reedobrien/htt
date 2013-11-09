// Copyright 2013 Reed O'Brien <reed@reedobrien.com>. 
// All rights reserved. Use of this source code is governed by a 
// BSD-style license that can be found in the LICENSE file.

// First Check if 

chrome.privacy.services.autofillEnabled.get({}, function(details) {
  if (details.value) {
	$(document).ready(function() {
	$("#autofill-enabled").html("AutoFill is enabled");
	});	
  }
  else {
	$(document).ready(function() {
	$("#autofill-enabled").html("AutoFill is not enabled");
	});	
  }
});


