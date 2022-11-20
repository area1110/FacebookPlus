const sendMessageId = document.getElementById("sendmessageId");
if(sendMessageId){
    sendMessageId.onclick = function(){
        chrome.tabs.query({active: true, currentWindow: true}, 
            function(tabs){
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        url:chrome.runtime.getURL("images/forestJungle.png"),
                        imageDivId: `${guidGenerator()}`,
                        tabId: tabs[0].id
                    },
                    function(response){
                        window.close();
                    }
                );
                function guidGenerator(){
                    const S4 = function(){
                        return ((1 + Math.random));
                    }
                }
            }
            );
    }
}