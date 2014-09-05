chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("on message...");
    if (request.msg == 'title') {
      sendResponse({'title': document.title});
      console.log("send message...");
    } 
});
