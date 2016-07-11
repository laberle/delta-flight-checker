chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // query the active tab, which will be only one tab
    //and inject the script in it
    chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
});

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "warningMessage") {
    message.innerText = request.message;
  }
});

// chrome.tabs.onUpdated.addListener(function(tabId, info) {
//             console.log('updated');
//     if (info.status == "complete") {
//             console.log('loaded');
//     }
// });