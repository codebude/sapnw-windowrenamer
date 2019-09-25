// Copyright 2019 Raffael Herrmann / RealCore Group. All rights reserved.


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "check_for_sap_nwa" ) {		
		var titleOld = $("title").text();
		if (titleOld == "User Management, SAP AG"){
			console.log('Detected SAP NetWeaver logon page')			
			var titleNew = titleOld + ' | ' + window.location.hostname;
			console.log('Replacing title from "'+titleOld+'" to "'+titleNew+'".');
			document.title = titleNew;
		}
	}
  }
);