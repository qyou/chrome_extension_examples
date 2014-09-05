var msg;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    msg = request.title;
    console.log("get message ..." + msg);
  }
  );