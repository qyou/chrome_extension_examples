chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("on message...");
    if (request.msg == 'images') {
      var images = document.querySelectorAll('img');
      if (images === undefined) {
        sendResponse({'type':0,'returnval': 'error'})
      }
      else {
        var imgsrc = [];
        for (var i=0; i<images.length; i++) {
            imgsrc[i] = images[i].src;
        }
        sendResponse({'type':1, 'returnval': imgsrc});
      }
      console.log("send message...");
    } 
});
