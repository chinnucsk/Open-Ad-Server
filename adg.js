var phpAds_adg=true;var phpAds_adSenseDeliveryDone;var phpAds_adSensePx;var phpAds_adSensePy;function phpAds_adSenseClick(_1,_2){var cb=new String(Math.random());cb=cb.substring(2,11);var i=new Image();i.src=_1+"/adclick.php?"+_2+"&trackonly=1&cb="+cb;}function phpAds_adSenseLog(_5){var _6;if(_6=_5.src.match(/^(.*)\/adframe\.php\?n=([a-z0-9]+)/i)){phpAds_adSenseClick(_6[1],"n="+_6[2]);}else{if(typeof _5.parentNode!="undefined"){var t=_5.parentNode.innerHTML;if(_6=t.match(/\/\* openads=([^ ]*) bannerid=([^ ]*) zoneid=([^ ]*) source=([^ ]*) \*\//)){phpAds_adSenseClick(_6[1],"bannerid="+_6[2]+"&zoneid="+_6[3]+"&source="+_6[4]);}}}}function phpAds_adSenseGetMouse(e){if(typeof e.pageX=="number"){phpAds_adSensePx=e.pageX;phpAds_adSensePy=e.pageY;}else{if(typeof e.clientX=="number"){phpAds_adSensePx=e.clientX;phpAds_adSensePy=e.clientY;if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){phpAds_adSensePx+=document.body.scrollLeft;phpAds_adSensePy+=document.body.scrollTop;}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){phpAds_adSensePx+=document.documentElement.scrollLeft;phpAds_adSensePy+=document.documentElement.scrollTop;}}}}}function phpAds_adSenseFindX(_9){var x=0;while(_9){x+=_9.offsetLeft;_9=_9.offsetParent;}return x;}function phpAds_adSenseFindY(_b){var y=0;while(_b){y+=_b.offsetTop;_b=_b.offsetParent;}return y;}function phpAds_adSensePageExit(e){var ad=document.getElementsByTagName("iframe");if(typeof phpAds_adSensePx=="undefined"){return;}for(var i=0;i<ad.length;i++){var _10=phpAds_adSenseFindX(ad[i]);var _11=phpAds_adSenseFindY(ad[i]);var _12=parseInt(_10)+parseInt(ad[i].width)+15;var _13=parseInt(_11)+parseInt(ad[i].height)+10;var _14=(phpAds_adSensePx>(_10-10)&&phpAds_adSensePx<_12);var _15=(phpAds_adSensePy>(_11-10)&&phpAds_adSensePy<_13);if(_15&&_14){if(ad[i].src.indexOf("googlesyndication.com")>-1||ad[i].src.indexOf("adframe.php?n=")>-1){phpAds_adSenseLog(ad[i]);}}}}function phpAds_adSenseInit(){if(document.all&&typeof window.opera=="undefined"){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].src.indexOf("googlesyndication.com")>-1){el[i].onfocus=function(){phpAds_adSenseLog(this);};}}}else{if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",phpAds_adSensePageExit,false);window.addEventListener("mousemove",phpAds_adSenseGetMouse,true);}}}function phpAds_adSenseDelivery(){if(typeof phpAds_adSenseDeliveryDone!="undefined"&&phpAds_adSenseDeliveryDone){return;}phpAds_adSenseDeliveryDone=true;if(typeof window.addEventListener!="undefined"){window.addEventListener("load",phpAds_adSenseInit,false);}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",phpAds_adSenseInit,false);}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",phpAds_adSenseInit);}else{if(typeof window.onload=="function"){var _18=onload;window.onload=function(){_18();phpAds_adSenseInit();};}else{window.onload=phpAds_adSenseInit;}}}}}phpAds_adSenseDelivery();