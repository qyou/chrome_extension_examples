document.addEventListener('DOMContentLoaded', function() {
  console.log("Entering popup...");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log("enter query...");
    chrome.tabs.sendMessage(tabs[0].id, {'msg': 'title'}, function(response) {
      console.log("begin to response...");
      var data = response.title;
      console.log("data is "+  data);
      var content;
      if (data === undefined) {
        content = document.createTextNode("正在获取中...");
      } else {
        content = document.createTextNode(data);
        console.log("use message...");
      }
      var h1 = document.createElement("h1");
      h1.appendChild(content);
      document.body.appendChild(h1);
      var img = document.createElement("img");
      img.src = chrome.extension.getURL("images/bgimage.jpg"); // chrome.extension.getURL to transform the relative url to abstract url
      document.body.appendChild(img);
    });
  });
});