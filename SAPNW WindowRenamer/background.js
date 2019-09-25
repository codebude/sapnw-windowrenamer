// Copyright 2019 Raffael Herrmann / RealCore Group. All rights reserved.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
	alert("Thanks for installing this beautiful extension by \"Die Decke\"");
});

chrome.webNavigation.onCompleted.addListener(function() {
	var activeTab;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		activeTab = tabs[0];
		console.log('Set active tab to...');
		console.log(activeTab);		
		console.log('Sent out message to content.js');
		chrome.tabs.sendMessage(activeTab.id, {"message": "check_for_sap_nwa"});
	});	
});