// Copyright 2013 Reed O'Brien <reed@reedobrien.com> and contributors. 
// All rights reserved. Use of this source code is governed by a 
// BSD-style license that can be found in the LICENSE file.

var title;
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	//title = "Blacklight";
	console.log(message);
	if(message.method === 'setOutput'){
		title = message.output;
		console.log(title);
	}
	else if(message.method === 'getOutput') {
		sendResponse({title:title});
		console.log(title);
	}
});
