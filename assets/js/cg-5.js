(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(t,e,n){"use strict";var o=n(2),r=n(91).PROPER,i=n(16),a=n(8),s=n(36),c=n(15),l=n(3),p=n(203),u=RegExp.prototype,d=u.toString,g=o(p),f=l((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),h=r&&"toString"!=d.name;(f||h)&&i(RegExp.prototype,"toString",(function(){var t=a(this),e=c(t.source),n=t.flags;return"/"+e+"/"+c(void 0===n&&s(u,t)&&!("flags"in u)?g(t):n)}),{unsafe:!0})},386:function(t,e,n){},423:function(t,e,n){var o=n(2),r=n(16),i=Date.prototype,a=o(i.toString),s=o(i.getTime);"Invalid Date"!=String(new Date(NaN))&&r(i,"toString",(function(){var t=s(this);return t==t?a(this):"Invalid Date"}))},424:function(t,e,n){"use strict";var o=n(1),r=n(2),i=n(15),a=r("".charAt),s=r("".charCodeAt),c=r(/./.exec),l=r(1..toString),p=r("".toUpperCase),u=/[\w*+\-./@]/,d=function(t,e){for(var n=l(t,16);n.length<e;)n="0"+n;return n};o({global:!0},{escape:function(t){for(var e,n,o=i(t),r="",l=o.length,g=0;g<l;)e=a(o,g++),c(u,e)?r+=e:r+=(n=s(e,0))<256?"%"+d(n,2):"%u"+p(d(n,4));return r}})},425:function(t,e,n){n(1)({target:"Date",proto:!0},{toGMTString:Date.prototype.toUTCString})},426:function(t,e,n){"use strict";n(386)},440:function(t,e,n){"use strict";n.r(e);var o,r=n(84),i=(n(132),n(128),n(201),n(7),n(28),n(88),n(30),n(423),n(358),n(200),n(424),n(425),n(119),{name:"LockArticle",data:function(){return{}},mounted:function(){var t=this;setInterval((function(){if(t.isLock()){var e=t.articleObj();t._detect(e,t)}}),1500)},methods:{isLock:function(){return"need"===this.$page.frontmatter.lock},articleObj:function(){var t=$(".theme-default-content");return t.length<=0?null:{article:t,height:t[0].clientHeight}},_detect:function(t,e){null!=t&&("success"!==this.getCookie("_unlock")&&e.getToken().then((function(n){$.ajax({url:"https://api.bugstack.cn/interfaces/BlogApi.php",type:"GET",dataType:"text",data:{token:n},success:function(n){"refuse"===n?e._lock(t):(e._unlock(t),e.setCookie("_unlock","success",1))},error:function(n){e._unlock(t)}})})))},_lock:function(t){var e=t.article,n=t.height;if(!(e.length<=0)){var o=.3*n;this.os().isPc&&o>800&&this.getToken().then((function(t){if($("#fustack-token").text(t),!e.hasClass("lock")){e.css({height:o+"px"}),e.addClass("lock"),e.remove("#read-more-wrap");var n=$(".read-more-wrap").clone();n.attr("id","read-more-wrap"),n.css("display","block"),n.find("#read-more-btn").click((function(){n.find("#btw-modal-wrap").css("display","block")})),n.find("#btw-modal-close-btn").click((function(){n.find("#btw-modal-wrap").css("display","none")})),e.append(n)}}))}},_unlock:function(t){var e=t.article;e.hasClass("lock")&&(e.css("height","initial"),e.removeClass("lock"),$("#read-more-wrap").remove())},getToken:(o=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getFingerprintId();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),getFingerprintId:function(){return new Promise((function(t){(new Fingerprint2).get((function(e,n){var o=e.toUpperCase(),r=o.substring(o.length-6).toUpperCase();t(r)}))}))},getUUID:function(){return"xxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},getCookie:function(t){var e=("; "+document.cookie).split("; "+t+"=");if(2===e.length)return e.pop().split(";").shift()},setCookie:function(t,e,n){var o=new Date;o.setTime(o.getTime()+60*n*60*1e3),document.cookie=t+"="+escape(e)+";path=/;expires="+o.toGMTString()},os:function(){var t=navigator.userAgent,e=/(?:Windows Phone)/.test(t),n=/(?:SymbianOS)/.test(t)||e,o=/(?:Android)/.test(t),r=/(?:Firefox)/.test(t),i=(/(?:Chrome|CriOS)/.test(t),/(?:iPad|PlayBook)/.test(t)||o&&!/(?:Mobile)/.test(t)||r&&/(?:Tablet)/.test(t)),a=/(?:iPhone)/.test(t)&&!i;return{isTablet:i,isPhone:a,isAndroid:o,isPc:!a&&!o&&!n}}}}),a=(n(426),n(34)),s=Object(a.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"read-more-wrap",staticStyle:{display:"none",position:"absolute",bottom:"0px","z-index":"9999",width:"100%","margin-top":"-100px","font-family":"PingFangSC-Regular, sans-serif"}},[n("div",{staticStyle:{position:"relative",height:"200px",background:"-webkit-gradient(linear, 0 0%, 0 100%, from(rgba(255, 255, 255, 0)), to(rgb(255, 255, 255)))"},attrs:{id:"read-more-mask"}}),t._v(" "),n("a",{staticStyle:{position:"absolute",left:"50%",top:"70%",bottom:"30px",transform:"translate(-50%, -50%)",width:"160px",height:"36px","line-height":"36px","font-size":"15px","text-align":"center",border:"1px solid rgb(222, 104, 109)",color:"rgb(222, 104, 109)",background:"rgb(255, 255, 255)",cursor:"pointer","border-radius":"6px"},attrs:{id:"read-more-btn",target:"_self"}},[t._v("阅读全文")]),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"btw-modal-wrap"}},[n("div",{staticStyle:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",opacity:"0.7","z-index":"999",background:"rgb(0, 0, 0)"},attrs:{id:"btw-mask"}}),t._v(" "),n("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300px","text-align":"center","font-size":"13px",background:"rgb(255, 255, 255)","border-radius":"10px","z-index":"9999","font-family":"PingFangSC-Regular, sans-serif"},attrs:{id:"btw-modal"}},[n("span",{staticStyle:{position:"absolute",top:"5px",right:"15px","line-height":"34px","font-size":"34px",cursor:"pointer",opacity:"0.2","z-index":"9999",color:"rgb(0, 0, 0)",background:"none",border:"none",outline:"none"},attrs:{id:"btw-modal-close-btn"}},[t._v("×")]),t._v(" "),n("p",{staticStyle:{"margin-top":"40px","line-height":"1.8","font-size":"13px"},attrs:{id:"btw-modal-header"}},[t._v("\n                扫码或搜索："),n("span",{staticStyle:{color:"#E9405A","font-weight":"bold"}},[t._v("bugstack虫洞栈")]),t._v(" "),n("br"),t._v("发送："),n("span",{staticClass:"token",staticStyle:{color:"#e9415a","font-weight":"bold","font-size":"17px","margin-bottom":"45px"},attrs:{id:"fustack-token"}},[t._v("290992")]),t._v(" "),n("br"),t._v("即可"),n("span",{staticStyle:{color:"#e9415a","font-weight":"bold"}},[t._v("立即永久")]),t._v("解锁本站全部文章")]),t._v(" "),n("img",{staticStyle:{width:"180px","margin-top":"10px","margin-bottom":"30px",border:"8px solid rgb(230, 230, 230)"},attrs:{src:"/images/personal/qrcode.png"}})])])])}],!1,null,null,null);e.default=s.exports}}]);