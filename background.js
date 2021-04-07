chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  chrome.browserAction.setBadgeText({tabId: sender.tab.id, text: "!"});
  chrome.browserAction.setBadgeBackgroundColor({tabId: sender.tab.id, color: "#FF0000"});
});
