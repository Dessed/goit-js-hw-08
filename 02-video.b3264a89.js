!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("timeupdate",(function(e){console.log(e),localStorage.setItem("videoplayer-current-time",e)}))}();
//# sourceMappingURL=02-video.b3264a89.js.map
