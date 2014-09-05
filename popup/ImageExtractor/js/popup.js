document.addEventListener('DOMContentLoaded', function() {
  console.log("Entering popup...");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log("enter query...");
    chrome.tabs.sendMessage(tabs[0].id, {'msg': 'images'}, function(response) {
      console.log("begin to response...");
      console.log(response);
      if (response === undefined) {return;}
        
        if (response.type === 0) {
          var img = document.createElement('img');
          img.src = chrome.extension.getURL("images/icon.png");
          document.body.appendChild(img);
        }
         else  { 
           srcs = response.returnval;
           for (var i=0; i<srcs.length; i++) {
             var img = document.createElement('img');
             img.src = srcs[i];
             document.body.appendChild(img);
           }
           
         }
        
    });
  });
});