(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,e,n,i)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=t):o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(o=this.keys,e=n=0,i=o.length;i>n;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(r=this.keys,n=i=0,o=r.length;o>i;n=++i)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;i>n;n++)r=e[n],s.push(function(){var t,e,n,i;for(n=r.addedNodes||[],i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;i=[];for(n in e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,l;for(s=this.vendors,l=[],e=0,i=s.length;i>e;e++)r=s[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(l=i(t),s=l.getPropertyCSSValue(e),r=this.vendors,n=0,o=r.length;o>n;n++)a=r[n],s=s||l.getPropertyCSSValue("-"+a+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvdy5taW4uanMiXSwibmFtZXMiOlsiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnIiwiaW5kZXhPZiIsInRoaXMiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJleHRlbmQiLCJpc01vYmlsZSIsInRlc3QiLCJjcmVhdGVFdmVudCIsImRvY3VtZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJldmVudFR5cGUiLCJldmVudE5hbWUiLCJlbWl0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYWRkRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImlubmVySGVpZ2h0Iiwid2luZG93IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiV2Vha01hcCIsIk1veldlYWtNYXAiLCJrZXlzIiwidmFsdWVzIiwiZ2V0Iiwic2V0IiwicHVzaCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJraXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsImNvbnNvbGUiLCJ3YXJuIiwibm90U3VwcG9ydGVkIiwib2JzZXJ2ZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwiY3VycmVudFN0eWxlIiwiV09XIiwic2Nyb2xsQ2FsbGJhY2siLCJzY3JvbGxIYW5kbGVyIiwicmVzZXRBbmltYXRpb24iLCJzdGFydCIsInNjcm9sbGVkIiwiY29uZmlnIiwidXRpbCIsImRlZmF1bHRzIiwiYW5pbWF0aW9uTmFtZUNhY2hlIiwid293RXZlbnQiLCJib3hDbGFzcyIsImFuaW1hdGVDbGFzcyIsIm9mZnNldCIsIm1vYmlsZSIsImxpdmUiLCJjYWxsYmFjayIsImluaXQiLCJlbGVtZW50IiwicmVhZHlTdGF0ZSIsImZpbmlzaGVkIiwic3RvcHBlZCIsImJveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGwiLCJhbGwiLCJkaXNhYmxlZCIsInJlc2V0U3R5bGUiLCJhcHBseVN0eWxlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImFkZGVkTm9kZXMiLCJkb1N5bmMiLCJib2R5IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInN0b3AiLCJjbGVhckludGVydmFsIiwic3luYyIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsInNob3ciLCJjbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJhbmltYXRlIiwiY3VzdG9tU3R5bGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwidHJpbSIsImNhY2hlQW5pbWF0aW9uTmFtZSIsInZlbmRvclNldCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvbk5hbWUiLCJjYWNoZWRBbmltYXRpb25OYW1lIiwidmVuZG9ycyIsImgiLCJjaGFyQXQiLCJzdWJzdHIiLCJ2ZW5kb3JDU1MiLCJpIiwiZ2V0UHJvcGVydHlDU1NWYWx1ZSIsImNzc1RleHQiLCJpc1Zpc2libGUiLCJvZmZzZXRUb3AiLCJvZmZzZXRQYXJlbnQiLCJwYWdlWU9mZnNldCIsIk1hdGgiLCJtaW4iLCJfdXRpbCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCJdLCJtYXBwaW5ncyI6IkNBQ0EsV0FBQSxHQUFBQSxHQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBLFNBQUFMLEVBQUFDLEdBQUEsTUFBQSxZQUFBLE1BQUFELEdBQUFNLE1BQUFMLEVBQUFNLGFBQUFDLEtBQUFDLFNBQUEsU0FBQVQsR0FBQSxJQUFBLEdBQUFDLEdBQUEsRUFBQUMsRUFBQVEsS0FBQUMsT0FBQVQsRUFBQUQsRUFBQUEsSUFBQSxHQUFBQSxJQUFBUyxP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QUFnRCxLQUFBLFdBQUEsTUFBQSxPQUFBbEQsS0FBQXNILE1BQUF0SCxLQUFBc0gsTUFBQXRILEtBQUFzSCxNQUFBLEdBQUEvSCxJQUFBRyxFQUFBUSxVQUFBbUUsU0FBQSxXQUFBLE9BQUFyRSxLQUFBaUQsT0FBQVEsUUFBQXpELEtBQUFrRCxPQUFBOUMsU0FBQW1ILFVBQUFDLFlBQUE5SCxPQUFBeUUsS0FBQW5FIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBXT1cgLSB2MS4xLjIgLSAyMDE1LTA0LTA3XHJcbiogQ29weXJpZ2h0IChjKSAyMDE1IE1hdHRoaWV1IEF1c3NhZ3VlbDsgTGljZW5zZWQgTUlUICovKGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX0sZz1bXS5pbmRleE9mfHxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMubGVuZ3RoO2M+YjtiKyspaWYoYiBpbiB0aGlzJiZ0aGlzW2JdPT09YSlyZXR1cm4gYjtyZXR1cm4tMX07Yj1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt9cmV0dXJuIGEucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7Zm9yKGMgaW4gYilkPWJbY10sbnVsbD09YVtjXSYmKGFbY109ZCk7cmV0dXJuIGF9LGEucHJvdG90eXBlLmlzTW9iaWxlPWZ1bmN0aW9uKGEpe3JldHVybi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChhKX0sYS5wcm90b3R5cGUuY3JlYXRlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU7cmV0dXJuIG51bGw9PWImJihiPSExKSxudWxsPT1jJiYoYz0hMSksbnVsbD09ZCYmKGQ9bnVsbCksbnVsbCE9ZG9jdW1lbnQuY3JlYXRlRXZlbnQ/KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSxlLmluaXRDdXN0b21FdmVudChhLGIsYyxkKSk6bnVsbCE9ZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3Q/KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKSxlLmV2ZW50VHlwZT1hKTplLmV2ZW50TmFtZT1hLGV9LGEucHJvdG90eXBlLmVtaXRFdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiBudWxsIT1hLmRpc3BhdGNoRXZlbnQ/YS5kaXNwYXRjaEV2ZW50KGIpOmIgaW4obnVsbCE9YSk/YVtiXSgpOlwib25cIitiIGluKG51bGwhPWEpP2FbXCJvblwiK2JdKCk6dm9pZCAwfSxhLnByb3RvdHlwZS5hZGRFdmVudD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGwhPWEuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKTpudWxsIT1hLmF0dGFjaEV2ZW50P2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyk6YVtiXT1jfSxhLnByb3RvdHlwZS5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGwhPWEucmVtb3ZlRXZlbnRMaXN0ZW5lcj9hLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKTpudWxsIT1hLmRldGFjaEV2ZW50P2EuZGV0YWNoRXZlbnQoXCJvblwiK2IsYyk6ZGVsZXRlIGFbYl19LGEucHJvdG90eXBlLmlubmVySGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuXCJpbm5lckhlaWdodFwiaW4gd2luZG93P3dpbmRvdy5pbm5lckhlaWdodDpkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fSxhfSgpLGM9dGhpcy5XZWFrTWFwfHx0aGlzLk1veldlYWtNYXB8fChjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3RoaXMua2V5cz1bXSx0aGlzLnZhbHVlcz1bXX1yZXR1cm4gYS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7Zm9yKGY9dGhpcy5rZXlzLGI9ZD0wLGU9Zi5sZW5ndGg7ZT5kO2I9KytkKWlmKGM9ZltiXSxjPT09YSlyZXR1cm4gdGhpcy52YWx1ZXNbYl19LGEucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGc9dGhpcy5rZXlzLGM9ZT0wLGY9Zy5sZW5ndGg7Zj5lO2M9KytlKWlmKGQ9Z1tjXSxkPT09YSlyZXR1cm4gdm9pZCh0aGlzLnZhbHVlc1tjXT1iKTtyZXR1cm4gdGhpcy5rZXlzLnB1c2goYSksdGhpcy52YWx1ZXMucHVzaChiKX0sYX0oKSksYT10aGlzLk11dGF0aW9uT2JzZXJ2ZXJ8fHRoaXMuV2Via2l0TXV0YXRpb25PYnNlcnZlcnx8dGhpcy5Nb3pNdXRhdGlvbk9ic2VydmVyfHwoYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmbnVsbCE9PWNvbnNvbGUmJmNvbnNvbGUud2FybihcIk11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZudWxsIT09Y29uc29sZSYmY29uc29sZS53YXJuKFwiV09XLmpzIGNhbm5vdCBkZXRlY3QgZG9tIG11dGF0aW9ucywgcGxlYXNlIGNhbGwgLnN5bmMoKSBhZnRlciBsb2FkaW5nIG5ldyBjb250ZW50LlwiKX1yZXR1cm4gYS5ub3RTdXBwb3J0ZWQ9ITAsYS5wcm90b3R5cGUub2JzZXJ2ZT1mdW5jdGlvbigpe30sYX0oKSksZD10aGlzLmdldENvbXB1dGVkU3R5bGV8fGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWU9ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuXCJmbG9hdFwiPT09YiYmKGI9XCJzdHlsZUZsb2F0XCIpLGUudGVzdChiKSYmYi5yZXBsYWNlKGUsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSksKG51bGwhPShjPWEuY3VycmVudFN0eWxlKT9jW2JdOnZvaWQgMCl8fG51bGx9LHRoaXN9LGU9LyhcXC0oW2Etel0pezF9KS9nLHRoaXMuV09XPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtudWxsPT1hJiYoYT17fSksdGhpcy5zY3JvbGxDYWxsYmFjaz1mKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssdGhpcyksdGhpcy5zY3JvbGxIYW5kbGVyPWYodGhpcy5zY3JvbGxIYW5kbGVyLHRoaXMpLHRoaXMucmVzZXRBbmltYXRpb249Zih0aGlzLnJlc2V0QW5pbWF0aW9uLHRoaXMpLHRoaXMuc3RhcnQ9Zih0aGlzLnN0YXJ0LHRoaXMpLHRoaXMuc2Nyb2xsZWQ9ITAsdGhpcy5jb25maWc9dGhpcy51dGlsKCkuZXh0ZW5kKGEsdGhpcy5kZWZhdWx0cyksdGhpcy5hbmltYXRpb25OYW1lQ2FjaGU9bmV3IGMsdGhpcy53b3dFdmVudD10aGlzLnV0aWwoKS5jcmVhdGVFdmVudCh0aGlzLmNvbmZpZy5ib3hDbGFzcyl9cmV0dXJuIGUucHJvdG90eXBlLmRlZmF1bHRzPXtib3hDbGFzczpcIndvd1wiLGFuaW1hdGVDbGFzczpcImFuaW1hdGVkXCIsb2Zmc2V0OjAsbW9iaWxlOiEwLGxpdmU6ITAsY2FsbGJhY2s6bnVsbH0sZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLmVsZW1lbnQ9d2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImludGVyYWN0aXZlXCI9PT0oYT1kb2N1bWVudC5yZWFkeVN0YXRlKXx8XCJjb21wbGV0ZVwiPT09YT90aGlzLnN0YXJ0KCk6dGhpcy51dGlsKCkuYWRkRXZlbnQoZG9jdW1lbnQsXCJET01Db250ZW50TG9hZGVkXCIsdGhpcy5zdGFydCksdGhpcy5maW5pc2hlZD1bXX0sZS5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYixjLGQsZTtpZih0aGlzLnN0b3BwZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBhLGMsZCxlO2ZvcihkPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY29uZmlnLmJveENsYXNzKSxlPVtdLGE9MCxjPWQubGVuZ3RoO2M+YTthKyspYj1kW2FdLGUucHVzaChiKTtyZXR1cm4gZX0uY2FsbCh0aGlzKSx0aGlzLmFsbD1mdW5jdGlvbigpe3ZhciBhLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxhPTAsYz1kLmxlbmd0aDtjPmE7YSsrKWI9ZFthXSxlLnB1c2goYik7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5ib3hlcy5sZW5ndGgpaWYodGhpcy5kaXNhYmxlZCgpKXRoaXMucmVzZXRTdHlsZSgpO2Vsc2UgZm9yKGU9dGhpcy5ib3hlcyxjPTAsZD1lLmxlbmd0aDtkPmM7YysrKWI9ZVtjXSx0aGlzLmFwcGx5U3R5bGUoYiwhMCk7cmV0dXJuIHRoaXMuZGlzYWJsZWQoKXx8KHRoaXMudXRpbCgpLmFkZEV2ZW50KHdpbmRvdyxcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciksdGhpcy51dGlsKCkuYWRkRXZlbnQod2luZG93LFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyKSx0aGlzLmludGVydmFsPXNldEludGVydmFsKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssNTApKSx0aGlzLmNvbmZpZy5saXZlP25ldyBhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYyxkLGUsZixnO2ZvcihnPVtdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspZj1iW2NdLGcucHVzaChmdW5jdGlvbigpe3ZhciBhLGIsYyxkO2ZvcihjPWYuYWRkZWROb2Rlc3x8W10sZD1bXSxhPTAsYj1jLmxlbmd0aDtiPmE7YSsrKWU9Y1thXSxkLnB1c2godGhpcy5kb1N5bmMoZSkpO3JldHVybiBkfS5jYWxsKGEpKTtyZXR1cm4gZ319KHRoaXMpKS5vYnNlcnZlKGRvY3VtZW50LmJvZHkse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSk6dm9pZCAwfSxlLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcHBlZD0hMCx0aGlzLnV0aWwoKS5yZW1vdmVFdmVudCh3aW5kb3csXCJzY3JvbGxcIix0aGlzLnNjcm9sbEhhbmRsZXIpLHRoaXMudXRpbCgpLnJlbW92ZUV2ZW50KHdpbmRvdyxcInJlc2l6ZVwiLHRoaXMuc2Nyb2xsSGFuZGxlciksbnVsbCE9dGhpcy5pbnRlcnZhbD9jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpOnZvaWQgMH0sZS5wcm90b3R5cGUuc3luYz1mdW5jdGlvbigpe3JldHVybiBhLm5vdFN1cHBvcnRlZD90aGlzLmRvU3luYyh0aGlzLmVsZW1lbnQpOnZvaWQgMH0sZS5wcm90b3R5cGUuZG9TeW5jPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7aWYobnVsbD09YSYmKGE9dGhpcy5lbGVtZW50KSwxPT09YS5ub2RlVHlwZSl7Zm9yKGE9YS5wYXJlbnROb2RlfHxhLGU9YS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY29uZmlnLmJveENsYXNzKSxmPVtdLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspYj1lW2NdLGcuY2FsbCh0aGlzLmFsbCxiKTwwPyh0aGlzLmJveGVzLnB1c2goYiksdGhpcy5hbGwucHVzaChiKSx0aGlzLnN0b3BwZWR8fHRoaXMuZGlzYWJsZWQoKT90aGlzLnJlc2V0U3R5bGUoKTp0aGlzLmFwcGx5U3R5bGUoYiwhMCksZi5wdXNoKHRoaXMuc2Nyb2xsZWQ9ITApKTpmLnB1c2godm9pZCAwKTtyZXR1cm4gZn19LGUucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYXBwbHlTdHlsZShhKSxhLmNsYXNzTmFtZT1hLmNsYXNzTmFtZStcIiBcIit0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsbnVsbCE9dGhpcy5jb25maWcuY2FsbGJhY2smJnRoaXMuY29uZmlnLmNhbGxiYWNrKGEpLHRoaXMudXRpbCgpLmVtaXRFdmVudChhLHRoaXMud293RXZlbnQpLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJhbmltYXRpb25lbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwib2FuaW1hdGlvbmVuZFwiLHRoaXMucmVzZXRBbmltYXRpb24pLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJ3ZWJraXRBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwiTVNBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSxhfSxlLnByb3RvdHlwZS5hcHBseVN0eWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO3JldHVybiBkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctZHVyYXRpb25cIiksYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWRlbGF5XCIpLGU9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1pdGVyYXRpb25cIiksdGhpcy5hbmltYXRlKGZ1bmN0aW9uKGYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBmLmN1c3RvbVN0eWxlKGEsYixkLGMsZSl9fSh0aGlzKSl9LGUucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gd2luZG93P2Z1bmN0aW9uKGEpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEpfTpmdW5jdGlvbihhKXtyZXR1cm4gYSgpfX0oKSxlLnByb3RvdHlwZS5yZXNldFN0eWxlPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKylhPWRbYl0sZS5wdXNoKGEuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIik7cmV0dXJuIGV9LGUucHJvdG90eXBlLnJlc2V0QW5pbWF0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBhLnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiYW5pbWF0aW9uZW5kXCIpPj0wPyhiPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQsYi5jbGFzc05hbWU9Yi5jbGFzc05hbWUucmVwbGFjZSh0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsXCJcIikudHJpbSgpKTp2b2lkIDB9LGUucHJvdG90eXBlLmN1c3RvbVN0eWxlPWZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGImJnRoaXMuY2FjaGVBbmltYXRpb25OYW1lKGEpLGEuc3R5bGUudmlzaWJpbGl0eT1iP1wiaGlkZGVuXCI6XCJ2aXNpYmxlXCIsYyYmdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uRHVyYXRpb246Y30pLGQmJnRoaXMudmVuZG9yU2V0KGEuc3R5bGUse2FuaW1hdGlvbkRlbGF5OmR9KSxlJiZ0aGlzLnZlbmRvclNldChhLnN0eWxlLHthbmltYXRpb25JdGVyYXRpb25Db3VudDplfSksdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uTmFtZTpiP1wibm9uZVwiOnRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShhKX0pLGF9LGUucHJvdG90eXBlLnZlbmRvcnM9W1wibW96XCIsXCJ3ZWJraXRcIl0sZS5wcm90b3R5cGUudmVuZG9yU2V0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY7ZD1bXTtmb3IoYyBpbiBiKWU9YltjXSxhW1wiXCIrY109ZSxkLnB1c2goZnVuY3Rpb24oKXt2YXIgYixkLGcsaDtmb3IoZz10aGlzLnZlbmRvcnMsaD1bXSxiPTAsZD1nLmxlbmd0aDtkPmI7YisrKWY9Z1tiXSxoLnB1c2goYVtcIlwiK2YrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cigxKV09ZSk7cmV0dXJuIGh9LmNhbGwodGhpcykpO3JldHVybiBkfSxlLnByb3RvdHlwZS52ZW5kb3JDU1M9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGk7Zm9yKGg9ZChhKSxnPWguZ2V0UHJvcGVydHlDU1NWYWx1ZShiKSxmPXRoaXMudmVuZG9ycyxjPTAsZT1mLmxlbmd0aDtlPmM7YysrKWk9ZltjXSxnPWd8fGguZ2V0UHJvcGVydHlDU1NWYWx1ZShcIi1cIitpK1wiLVwiK2IpO3JldHVybiBnfSxlLnByb3RvdHlwZS5hbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3ZhciBiO3RyeXtiPXRoaXMudmVuZG9yQ1NTKGEsXCJhbmltYXRpb24tbmFtZVwiKS5jc3NUZXh0fWNhdGNoKGMpe2I9ZChhKS5nZXRQcm9wZXJ0eVZhbHVlKFwiYW5pbWF0aW9uLW5hbWVcIil9cmV0dXJuXCJub25lXCI9PT1iP1wiXCI6Yn0sZS5wcm90b3R5cGUuY2FjaGVBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5zZXQoYSx0aGlzLmFuaW1hdGlvbk5hbWUoYSkpfSxlLnByb3RvdHlwZS5jYWNoZWRBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYSl9LGUucHJvdG90eXBlLnNjcm9sbEhhbmRsZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY3JvbGxlZD0hMH0sZS5wcm90b3R5cGUuc2Nyb2xsQ2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4hdGhpcy5zY3JvbGxlZHx8KHRoaXMuc2Nyb2xsZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBiLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWE9ZFtiXSxhJiYodGhpcy5pc1Zpc2libGUoYSk/dGhpcy5zaG93KGEpOmUucHVzaChhKSk7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5ib3hlcy5sZW5ndGh8fHRoaXMuY29uZmlnLmxpdmUpP3ZvaWQgMDp0aGlzLnN0b3AoKX0sZS5wcm90b3R5cGUub2Zmc2V0VG9wPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYjt2b2lkIDA9PT1hLm9mZnNldFRvcDspYT1hLnBhcmVudE5vZGU7Zm9yKGI9YS5vZmZzZXRUb3A7YT1hLm9mZnNldFBhcmVudDspYis9YS5vZmZzZXRUb3A7cmV0dXJuIGJ9LGUucHJvdG90eXBlLmlzVmlzaWJsZT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO3JldHVybiBjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctb2Zmc2V0XCIpfHx0aGlzLmNvbmZpZy5vZmZzZXQsZj13aW5kb3cucGFnZVlPZmZzZXQsZT1mK01hdGgubWluKHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsdGhpcy51dGlsKCkuaW5uZXJIZWlnaHQoKSktYyxkPXRoaXMub2Zmc2V0VG9wKGEpLGI9ZCthLmNsaWVudEhlaWdodCxlPj1kJiZiPj1mfSxlLnByb3RvdHlwZS51dGlsPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPXRoaXMuX3V0aWw/dGhpcy5fdXRpbDp0aGlzLl91dGlsPW5ldyBifSxlLnByb3RvdHlwZS5kaXNhYmxlZD1mdW5jdGlvbigpe3JldHVybiF0aGlzLmNvbmZpZy5tb2JpbGUmJnRoaXMudXRpbCgpLmlzTW9iaWxlKG5hdmlnYXRvci51c2VyQWdlbnQpfSxlfSgpfSkuY2FsbCh0aGlzKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
