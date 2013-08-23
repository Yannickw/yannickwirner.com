if(document.all)        // IE
        var extraHeight=0;
else
        var extraHeight=16

function resizeCaller() {
        resizeLPFrame();
        var f = document.getElementById("lpframe");
        if (f.addEventListener) {
                f.addEventListener("load", resizeLPFrame, false);
        } else if (f.attachEvent){
                f.detachEvent("onload", resizeLPFrame);
                f.attachEvent("onload", resizeLPFrame);
        }
}

function resizeLPFrame() {
        var f = document.getElementById("lpframe");
        if (f && !window.opera){
                f.style.display = "block";
                if (f.contentDocument) { // firefox
                        var doc = f.contentDocument;
                        if(doc.body && doc.body.offsetHeight)
                                f.height = doc.body.offsetHeight + extraHeight;
                        if (doc.childNodes[1] && doc.childNodes[1].scrollWidth)
                                f.width = doc.childNodes[1].scrollWidth;
                } else if (f.Document) { // IE
                        var doc = f.Document;
                        if (doc.body && doc.body.scrollHeight)
                                f.height = doc.body.scrollHeight + extraHeight;
                        if (doc.body && doc.body.scrollWidth)
                                f.width = doc.body.scrollWidth;
                }
        }
}