(function(){var scale=window.localStorage['no_retina']?1.0:window.devicePixelRatio;var canvas=document.getElementById('canvas');var typing=false;function onMouseWheel(e){e.preventDefault();if(!window['input'])return;window['input']['wheel'](e.wheelDelta/-120||e.detail||0);}
if(/firefox/i.test(navigator.userAgent)){document.addEventListener("DOMMouseScroll",onMouseWheel,false);}else{document.body['onmousewheel']=onMouseWheel;}
canvas.onmousemove=function(e){if(!window['input'])return;window['input']['mouse'](e.clientX*scale,e.clientY*scale);}
canvas.onmousedown=function(e){if(!window['input'])return;e=e||window.event;e.preventDefault();if(!e.which&&e.button!==undefined){e.which=(e.button&1?1:(e.button&2?3:(e.button&4?2:0)));}
if(e.which>=1&&e.which<=3)window['input']['keyDown'](e.which);}
canvas.onmouseup=function(e){if(!window['input'])return;e=e||window.event;e.preventDefault();if(!e.which&&e.button!==undefined){e.which=(e.button&1?1:(e.button&2?3:(e.button&4?2:0)));}
if(e.which>=1&&e.which<=3)window['input']['keyUp'](e.which);}
window.onkeydown=function(e){if(!window['input'])return;if(e.keyCode>=112&&e.keyCode<=130)return;window['input']['keyDown'](e.keyCode);if(!typing&&!e.ctrlKey&&!e.metaKey)e.preventDefault();}
window.onkeyup=function(e){if(!window['input'])return;if(e.keyCode>=112&&e.keyCode<=130)return;window['input']['keyUp'](e.keyCode);if(!typing&&!e.ctrlKey&&!e.metaKey)e.preventDefault();}
canvas.ondragstart=function(e){e.preventDefault();}
window.onblur=function(){if(!window['input'])return;window['input'].blur();}
canvas.oncontextmenu=function(e){e.preventDefault();}
window['setLoadingStatus']=function(str){document.getElementById('loading').innerText=str;}
window['setTyping']=function(v){typing=v;}
window['unscale']=function(v){return v/scale;}
function onResize(){canvas.width=window.innerWidth*scale;canvas.height=window.innerHeight*scale;}
window.onerror=function(message,source,lineno,colno,error){window.onerror=null;var e=JSON.stringify({message:message,source:source,lineno:lineno,colno:colno,error:error?error.toString():error});console.log("Uncaught error: "+ e);var xhr=new XMLHttpRequest();xhr.open("POST","//lb.diep.io/v1/error",true);xhr.send(e);}
window.onresize=onResize;onResize();})();