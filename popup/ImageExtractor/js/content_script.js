chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("on message...");
    if (request.msg == 'images') {
      var images = document.querySelectorAll('img');
      if (images === undefined) {
        sendResponse({'type':0,'returnval': 'error'})
      }
      else {
        var imgsrc = [];
        var j=0;
        for (var i=0; i<images.length; i++) {
			
			if (images[i].width > 100 && images[i].height > 100) {
			   var imgurl = images[i].src;
				if (['jpg', 'png', 'gif', 'bmp', 'tif'].indexOf(imgurl.substr(imgurl.lastIndexOf('.')+1).toLowerCase()) != -1) {
					imgsrc[j] = imgurl;
					j++;
				}
			}
        }
        
        
        sendResponse({'type':1, 'returnval': imgsrc});
      }
      console.log("send message...");
    } 
});
