function fillForm() {
    var fromAirport = document.getElementsByName("fromAirport")[0];
    var toAirport = document.getElementsByName("toAirport")[0];
    var leaveDate = document.getElementsByName("leaveDate")[0];
    var returnDate = document.getElementsByName("returnDate")[0];
    fromAirport.value = 'DEN';
    toAirport.value = 'MCO';
    leaveDate.value = '06/28/2016';
    returnDate.value = '06/30/2016';
    var searchButton = findSearchLinkButton('Search');
    searchButton.click();
    setTimeout(function() {
    	clickThroughWarningMessage();
	}, 1500);


}

function findSearchLinkButton(searchText) {
	var aTags = document.getElementsByTagName("a");

	for (var i = 0; i < aTags.length; i++) {
	  if (aTags[i].textContent == searchText) {
	    return aTags[i];
	  }
	}
}

function clickThroughWarningMessage() {
    if (findSearchLinkButton('Continue Listing')) {
        var warningMessage = document.getElementsByClassName("popupTextContainer")[0].textContent.trim();
        chrome.runtime.sendMessage({
            action: "warningMessage",
            message: warningMessage
        });
        findSearchLinkButton('Continue Listing').click();
    }
}

fillForm();