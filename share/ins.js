!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}o.m=n,o.c=r,o.p="/dist/",o(0)}([function(t,e,n){"use strict";n(1);var r,o=n(2),u=(r=o)&&r.__esModule?r:{default:r};var i;function f(t){t.getBoundingClientRect(),getComputedStyle(t,null);var e=document.createElement("i");e.className="icon-film",e.style.color="#fff",e.style.fontSize="26px",e.style.position="absolute",e.style.right="10px",e.style.bottom="10px",e.style.zIndex=1,t.parentNode.appendChild(e)}var a=function(t){for(var e="",n=0,r=t.list.length;n<r;n++){for(var o=t.list[n].arr,i="",a=0,l=o.link.length;a<l;a++){o.link[a];var s="http://easydecode.coding.me/share/photos/"+o.link[a],c=o.type[a];i+='<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">                  <a href="'+(s+="")+'" itemprop="contentUrl" data-size="1080x1080" data-type="'+c+'" data-target="'+s+'">                    <img class="reward-img" data-type="'+c+'" data-src="'+s+'" src="./assets/empty.jpeg" itemprop="thumbnail" onload="lzld(this)">                  </a>                  <figcaption style="display:none" itemprop="caption description">'+o.text[a]+"</figcaption>              </figure>"}e=e+'<section class="archives album"><h1 class="year">'+o.year+"年<em>"+o.month+'月</em></h1>          <ul class="img-box-ul">'+i+"</ul>          </section>"}document.querySelector(".instagram").innerHTML='<div class="photos" itemscope="" itemtype="http://schema.org/ImageGallery">'+e+"</div>",function(){for(var t=document.querySelectorAll('.thumb a[data-type="video"]'),e=0,n=t.length;e<n;e++)f(t[e])}(),u.default.init()};(function(){!function(e){if(i)e(i);else{var t=new XMLHttpRequest;t.open("GET","./data.json?t="+ +new Date,!0),t.onload=function(){if(200<=this.status&&this.status<300){var t=JSON.parse(this.response);e(i=t)}else console.error(this.statusText)},t.onerror=function(){console.error(this.statusText)},t.send()}}(function(t){a(t)})})()},function(r,t,o){(function(n){"use strict";var i=o(3),a=["data-src"];function t(r){var t;console.log("lazyload"),"string"==typeof(r=function(t,e){for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e}({offset:333,src:"data-src",container:!1},r||{})).src&&(t=r.src,-1===l.call(a,t)&&a.push(t));var o=[];function e(t){var e,n=(e=t,"function"!=typeof r.src?e.getAttribute(r.src):r.src(e));n&&(t.src=n),t.setAttribute("data-lzled",!0),o[l.call(o,t)]=null}return function(t){t.onload=null,t.removeAttribute("onload"),t.onerror=null,t.removeAttribute("onerror"),-1===l.call(o,t)&&i(t,r,e)}}function e(t){var e="HTML"+t+"Element";if(e in n!=!1){var o=n[e].prototype.getAttribute;n[e].prototype.getAttribute=function(t){if("src"!==t)return o.call(this,t);for(var e,n=0,r=a.length;n<r&&!(e=o.call(this,a[n]));n++);return e||o.call(this,t)}}}function l(t){for(var e=this.length;e--&&this[e]!==t;);return e}n.lzld=t(),e("Image"),e("IFrame"),r.exports=t}).call(t,function(){return this}())},function(t,e){"use strict";var n=function(t){for(var e=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var e=function t(e,n){return e&&(n(e)?e:t(e.parentNode,n))}(t.target||t.srcElement,function(t){return t.tagName&&"FIGURE"===t.tagName.toUpperCase()});if(e){for(var n,r=e.parentNode,o=document.getElementsByClassName("thumb"),i=o.length,a=0,l=0;l<i;l++)if(1===o[l].nodeType){if(o[l]===e){n=a;break}a++}return 0<=n&&s(n,r),!1}},s=function(t,e,n,r){var o,i,a,l=document.querySelectorAll(".pswp")[0];if(a=function(t){for(var e,n,r,o,i,a,l=(t=t.parentNode.parentNode).getElementsByClassName("thumb"),s=l.length,c=[],u=0;u<s;u++)1===(e=l[u]).nodeType&&(r=(n=e.children[0]).getAttribute("data-size").split("x"),o=n.getAttribute("data-type"),i=n.getAttribute("data-target"),a={src:n.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},1<e.children.length&&(a.title=e.children[1].innerHTML),0<n.children.length&&(a.msrc=n.children[0].getAttribute("src"),a.type=o,a.target=i,a.html='<video src="'+i+'" controls="controls" autoplay="autoplay"></video>'),a.el=e,c.push(a));return c}(e),i={galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=a[t].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=e.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}},r)if(i.galleryPIDs){for(var s=0;s<a.length;s++)if(a[s].pid==t){i.index=s;break}}else i.index=parseInt(t,10)-1;else i.index=parseInt(t,10);if(!isNaN(i.index)){var c;n&&(i.showAnimationDuration=0),(o=new PhotoSwipe(l,PhotoSwipeUI_Default,a,i)).init();var u=function(){c&&(c.remove(),c=null)},f=function(){var t=o.currItem;if(u(),"video"===t.type){var e=t.container,n=e.getElementsByClassName("pswp__img")[0].style,r=document.createElement("video");r.setAttribute("autoplay","autoplay"),r.setAttribute("controls","controls"),r.setAttribute("src",t.target),r.style.width=n.width,r.style.height=n.height,r.style.position="absolute",r.style.zIndex=2,c=r,e.appendChild(r)}};o.listen("initialZoomIn",f),o.listen("afterChange",f),o.listen("initialZoomOut",u)}},n=document.querySelectorAll(t),r=0,o=n.length;r<o;r++)n[r].setAttribute("data-pswp-uid",r+1),n[r].onclick=e;var i=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var n=t.split("&"),r=0;r<n.length;r++)if(n[r]){var o=n[r].split("=");o.length<2||(e[o[0]]=o[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e}();i.pid&&i.gid&&s(i.pid,n[i.gid-1],!0,!0)},r={init:function(){n(".photos")}};t.exports=r},function(t,e){(function(u){t.exports=function(t,e,n){var r={container:u.document.body,offset:0};void 0!==e&&"function"!=typeof e||(n=e,e={});for(var o=r.container=e.container||r.container,i=r.offset=e.offset||r.offset,a=0;a<l.length;a++)if(l[a].container===o)return l[a].isInViewport(t,i,n);return l[l.push(function(a){var l=function(){var r=[];function n(t){for(var e=r.length-1;0<=e;e--)if(r[e][0]===t)return e;return-1}function o(t){return-1!==n(t)}return{add:function(t,e,n){o(t)||r.push([t,e,n])},remove:function(t){var e=n(t);-1!==e&&r.splice(e,1)},isWatched:o,checkAll:function(e){return function(){for(var t=r.length-1;0<=t;t--)e.apply(this,r[t])}}}}(),t=a===u.document.body?u:a,e=(r=l.checkAll(function(t,e,n){c(t,e)&&(l.remove(t),n(t))}),o=15,function(){var t=this,e=arguments,n=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||r.apply(t,e)},o),n&&r.apply(t,e)});var r,o,i,s;d(t,"scroll",e),t===u&&d(u,"resize",e);f&&function(n,t,e){var r=new MutationObserver(function(t){!0===t.some(a)&&setTimeout(e,0)}),o=Array.prototype.filter,i=Array.prototype.concat;function a(t){var e=i.call([],Array.prototype.slice.call(t.addedNodes),t.target);return 0<o.call(e,n.isWatched).length}r.observe(t,{childList:!0,subtree:!0,attributes:!0})}(l,a,e);function c(t,e){if(!p(u.document.documentElement,t)||!p(u.document.documentElement,a))return!1;if(!t.offsetWidth||!t.offsetHeight)return!1;var n=t.getBoundingClientRect(),r={};if(a===u.document.body)r={top:-e,left:-e,right:u.document.documentElement.clientWidth+e,bottom:u.document.documentElement.clientHeight+e};else{var o=a.getBoundingClientRect();r={top:o.top-e,left:o.left-e,right:o.right+e,bottom:o.bottom+e}}var i=n.right>r.left&&n.left<r.right&&n.bottom>r.top&&n.top<r.bottom;return i}return setInterval(e,150),{container:a,isInViewport:function(t,e,n){if(!n)return c(t,e);var r,o,i,a=(r=t,o=e,i=n,{watch:function(){l.add(r,o,i)},dispose:function(){l.remove(r)}});return a.watch(),a}}}(o))-1].isInViewport(t,i,n)};var l=[],f="function"==typeof u.MutationObserver;function d(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}var p=function(){return!u.document||(u.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:u.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1})}}).call(e,function(){return this}())}]);