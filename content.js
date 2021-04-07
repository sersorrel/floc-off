let s = document.createElement("script");
s.src = chrome.runtime.getURL("injected.js");
document.addEventListener("flocRequested", function(e) {
  chrome.runtime.sendMessage({});
});
(document.head || document.documentElement).appendChild(s);
