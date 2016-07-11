chrome.tabs.onUpdated.addListener(function(tabId, info) {
    console.log('updated');
    if (info.status == "complete") {
      console.log('loaded');
    }
});

chrome.runtime.onMessage.addListener(function(request, sender) {
  // if (request.action == "warningMessage") {
  	console.log('event page message')
  // }
});

chrome.browserAction.onClicked.addListener(function () {
	console.log('browserAction.onClicked')
})
