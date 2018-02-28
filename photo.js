// 设置事件监听，DOM内容加载完成，和jQuery的$.ready() 效果差不多。 
window.addEventListener("DOMContentLoaded", function() { 
    // canvas 元素将用于抓拍 
    var canvas = document.getElementById("canvas"), 
    context = canvas.getContext("2d"), 
    // video 元素，将用于接收并播放摄像头 的数据流 
    video = document.getElementById("video"), 
    videoObj = { "video": true }, 
    // 一个出错的回调函数，在控制台打印出错信息 
    errBack = function(error) { 
        if("object" === typeof window.console){ 
            console.log("Video capture error: ", error.code); 
        } 
    }; 
    // Put video listeners into place 
    // 针对标准的浏览器 
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    }
     else if(navigator.webkitGetUserMedia) { // WebKit-prefixed 
        navigator.webkitGetUserMedia(videoObj, function(stream){ 
            video.src = window.webkitURL.createObjectURL(stream); 
            video.play(); 
        }, errBack); 
        // console.log(2);
        
    } 
    // 对拍照按钮的事件监听 
    document.getElementById("snap").addEventListener("click", function() { 
        // 画到画布上 
        context.drawImage(video, 0, 0, 200, 200); 
    }); 
}, false); 