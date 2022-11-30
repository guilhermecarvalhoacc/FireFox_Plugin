const getLinks = () => {
    var external_links = Array.prototype.map.call(
            document.querySelectorAll("link, img, script, iframe, source, embed, video, audio"),
            (HTMLtag) => {
                return HTMLtag.src || HTMLtag.href;
            }
    )
    return external_links;
};

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.method) {
      case "getLinks":
        sendResponse({ 
          data: getLinks()
        });
        break;
      case "localStorage":
        sendResponse({ 
          data: Object.entries(localStorage)
        });
        break;
      default:
        sendResponse({ 
          data: null 
        });
    }
});



