!function(s,r){var c={};(window.acf=c).data={},c.get=function(t){return this.data[t]||null},c.has=function(t){return null!==this.get(t)},c.set=function(t,e){return this.data[t]=e,this};var n=0;c.uniqueId=function(t){var e=++n+"";return t?t+e:e},c.uniqueArray=function(t){return t.filter(function(t,e,n){return n.indexOf(t)===e})};var i="";c.uniqid=function(t,e){void 0===t&&(t="");function n(t,e){return e<(t=parseInt(t,10).toString(16)).length?t.slice(t.length-e):e>t.length?Array(e-t.length+1).join("0")+t:t}return i=i||Math.floor(123456789*Math.random()),i++,t=t,t+=n(parseInt((new Date).getTime()/1e3,10),8),t+=n(i,5),e&&(t+=(10*Math.random()).toFixed(8).toString()),t},c.strReplace=function(t,e,n){return n.split(t).join(e)},c.strCamelCase=function(t){t=t.match(/([a-zA-Z0-9]+)/g);return t?t.map(function(t,e){var n=t.charAt(0);return(0===e?n.toLowerCase():n.toUpperCase())+t.slice(1)}).join(""):""},c.strPascalCase=function(t){t=c.strCamelCase(t);return t.charAt(0).toUpperCase()+t.slice(1)},c.strSlugify=function(t){return c.strReplace("_","-",t.toLowerCase())},c.strSanitize=function(t){var e={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","ß":"s","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o"," ":"_","'":"","?":"","/":"","\\":"",".":"",",":"","`":"",">":"","<":"",'"':"","[":"","]":"","|":"","{":"","}":"","(":"",")":""};return t=(t=t.replace(/\W/g,function(t){return e[t]!==r?e[t]:t})).toLowerCase()},c.strMatch=function(t,e){for(var n=0,i=Math.min(t.length,e.length),o=0;o<i&&t[o]===e[o];o++)n++;return n},c.strEscape=function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return(""+t).replace(/[&<>"']/g,function(t){return e[t]})},c.strUnescape=function(t){var e={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return(""+t).replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,function(t){return e[t]})},c.escAttr=c.strEscape,c.escHtml=function(t){return(""+t).replace(/<script|<\/script/g,function(t){return c.strEscape(t)})},c.decode=function(t){return s("<textarea/>").html(t).text()},c.parseArgs=function(t,e){return s.extend({},e="object"!=typeof e?{}:e,t="object"!=typeof t?{}:t)},window.acfL10n==r&&(acfL10n={}),c.__=function(t){return acfL10n[t]||t},c._x=function(t,e){return acfL10n[t+"."+e]||acfL10n[t]||t},c._n=function(t,e,n){return 1==n?c.__(t):c.__(e)},c.isArray=function(t){return Array.isArray(t)},c.isObject=function(t){return"object"==typeof t};c.serialize=function(t,e){var n={},i=c.serializeArray(t);e!==r&&(i=i.filter(function(t){return 0===t.name.indexOf(e)}).map(function(t){return t.name=t.name.slice(e.length),t}));for(var o=0;o<i.length;o++)!function(t,e,n){var i=(e=e.replace("[]","[%%index%%]")).match(/([^\[\]])+/g);if(i)for(var o=i.length,r=t,a=0;a<o;a++){var s=String(i[a]);a==o-1?"%%index%%"===s?r.push(n):r[s]=n:("%%index%%"===i[a+1]?c.isArray(r[s])||(r[s]=[]):c.isObject(r[s])||(r[s]={}),r=r[s])}}(n,i[o].name,i[o].value);return n},c.serializeArray=function(t){return t.find("select, textarea, input").serializeArray()},c.serializeForAjax=function(t){var e={};return c.serializeArray(t).map(function(t){"[]"===t.name.slice(-2)?(e[t.name]=e[t.name]||[],e[t.name].push(t.value)):e[t.name]=t.value}),e},c.addAction=function(t,e,n,i){return c.hooks.addAction.apply(this,arguments),this},c.removeAction=function(t,e){return c.hooks.removeAction.apply(this,arguments),this};var e={};c.doAction=function(t){return e[t]=1,c.hooks.doAction.apply(this,arguments),e[t]=0,this},c.doingAction=function(t){return 1===e[t]},c.didAction=function(t){return e[t]!==r},c.currentAction=function(){for(var t in e)if(e[t])return t;return!1},c.addFilter=function(t){return c.hooks.addFilter.apply(this,arguments),this},c.removeFilter=function(t){return c.hooks.removeFilter.apply(this,arguments),this},c.applyFilters=function(t){return c.hooks.applyFilters.apply(this,arguments)},c.arrayArgs=function(t){return Array.prototype.slice.call(t)};try{var o=JSON.parse(localStorage.getItem("acf"))||{}}catch(t){o={}}function a(t){return t="this."===t.substr(0,5)?t.substr(5)+"-"+c.get("post_id"):t}c.getPreference=function(t){return t=a(t),o[t]||null},c.setPreference=function(t,e){t=a(t),null===e?delete o[t]:o[t]=e,localStorage.setItem("acf",JSON.stringify(o))},c.removePreference=function(t){c.setPreference(t,null)},c.remove=function(t){t instanceof jQuery&&(t={target:t}),t=c.parseArgs(t,{target:!1,endHeight:0,complete:function(){}}),c.doAction("remove",t.target),(t.target.is("tr")?u:l)(t)};var l=function(t){var e=t.target,n=e.height(),i=e.width(),o=e.css("margin"),r=e.outerHeight(!0),a=e.attr("style")+"";e.wrap('<div class="acf-temp-remove" style="height:'+r+'px"></div>');var s=e.parent();e.css({height:n,width:i,margin:o,position:"absolute"}),setTimeout(function(){s.css({opacity:0,height:t.endHeight})},50),setTimeout(function(){e.attr("style",a),s.remove(),t.complete()},301)},u=function(t){var e=t.target,n=e.height(),i=e.children().length,o=s('<td class="acf-temp-remove" style="padding:0; height:'+n+'px" colspan="'+i+'"></td>');e.addClass("acf-remove-element"),setTimeout(function(){e.html(o)},251),setTimeout(function(){e.removeClass("acf-remove-element"),o.css({height:t.endHeight})},300),setTimeout(function(){e.remove(),t.complete()},451)};c.duplicate=function(t){t instanceof jQuery&&(t={target:t}),(t=c.parseArgs(t,{target:!1,search:"",replace:"",rename:!0,before:function(t){},after:function(t,e){},append:function(t,e){t.after(e)}})).target=t.target||t.$el;var e=t.target;t.search=t.search||e.attr("data-id"),t.replace=t.replace||c.uniqid(),t.before(e),c.doAction("before_duplicate",e);var n=e.clone();return t.rename&&c.rename({target:n,search:t.search,replace:t.replace,replacer:"function"==typeof t.rename?t.rename:null}),n.removeClass("acf-clone"),n.find(".ui-sortable").removeClass("ui-sortable"),t.after(e,n),c.doAction("after_duplicate",e,n),t.append(e,n),c.doAction("duplicate",e,n),c.doAction("append",n),n},c.rename=function(i){i instanceof jQuery&&(i={target:i});var t=(i=c.parseArgs(i,{target:!1,destructive:!1,search:"",replace:"",replacer:null})).target;i.search||(i.search=t.attr("data-id")),i.replace||(i.replace=c.uniqid("acf")),i.replacer||(i.replacer=function(t,e,n,i){return e.replace(n,i)});function e(n){return function(t,e){return i.replacer(n,e,i.search,i.replace)}}var n;return i.destructive?(n=c.strReplace(i.search,i.replace,t.outerHTML()),t.replaceWith(n)):(t.attr("data-id",i.replace),t.find('[id*="'+i.search+'"]').attr("id",e("id")),t.find('[for*="'+i.search+'"]').attr("for",e("for")),t.find('[name*="'+i.search+'"]').attr("name",e("name"))),t},c.prepareForAjax=function(t){return t.nonce=c.get("nonce"),t.post_id=c.get("post_id"),c.has("language")&&(t.lang=c.get("language")),t=c.applyFilters("prepare_for_ajax",t)},c.startButtonLoading=function(t){t.prop("disabled",!0),t.after(' <i class="acf-loading"></i>')},c.stopButtonLoading=function(t){t.prop("disabled",!1),t.next(".acf-loading").remove()},c.showLoading=function(t){t.append('<div class="acf-loading-overlay"><i class="acf-loading"></i></div>')},c.hideLoading=function(t){t.children(".acf-loading-overlay").remove()},c.updateUserSetting=function(t,e){e={action:"acf/ajax/user_setting",name:t,value:e};s.ajax({url:c.get("ajaxurl"),data:c.prepareForAjax(e),type:"post",dataType:"html"})},c.val=function(t,e,n){var i=t.val();return e!==i&&(t.val(e),t.is("select")&&null===t.val()?(t.val(i),!1):(!0!==n&&t.trigger("change"),!0))},c.show=function(t,e){return e&&c.unlock(t,"hidden",e),!c.isLocked(t,"hidden")&&(!!t.hasClass("acf-hidden")&&(t.removeClass("acf-hidden"),!0))},c.hide=function(t,e){return e&&c.lock(t,"hidden",e),!t.hasClass("acf-hidden")&&(t.addClass("acf-hidden"),!0)},c.isHidden=function(t){return t.hasClass("acf-hidden")},c.isVisible=function(t){return!c.isHidden(t)};function f(t,e){return!t.hasClass("acf-disabled")&&(e&&c.unlock(t,"disabled",e),!c.isLocked(t,"disabled")&&(!!t.prop("disabled")&&(t.prop("disabled",!1),!0)))}c.enable=function(t,e){if(t.attr("name"))return f(t,e);var n=!1;return t.find("[name]").each(function(){f(s(this),e)&&(n=!0)}),n};function d(t,e){return e&&c.lock(t,"disabled",e),!t.prop("disabled")&&(t.prop("disabled",!0),!0)}c.disable=function(t,e){if(t.attr("name"))return d(t,e);var n=!1;return t.find("[name]").each(function(){d(s(this),e)&&(n=!0)}),n},c.isset=function(t){for(var e=1;e<arguments.length;e++){if(!t||!t.hasOwnProperty(arguments[e]))return!1;t=t[arguments[e]]}return!0},c.isget=function(t){for(var e=1;e<arguments.length;e++){if(!t||!t.hasOwnProperty(arguments[e]))return null;t=t[arguments[e]]}return t},c.getFileInputData=function(t,e){var n=t.val();if(!n)return!1;var i={url:n},o=!!t[0].files.length&&c.isget(t[0].files,0);o?(i.size=o.size,i.type=o.type,-1<o.type.indexOf("image")?(n=window.URL||window.webkitURL,(t=new Image).onload=function(){i.width=this.width,i.height=this.height,e(i)},t.src=n.createObjectURL(o)):e(i)):e(i)},c.isAjaxSuccess=function(t){return t&&t.success},c.getAjaxMessage=function(t){return c.isget(t,"data","message")},c.getAjaxError=function(t){return c.isget(t,"data","error")},c.getXhrError=function(t){return t.responseJSON&&t.responseJSON.message?t.responseJSON.message:t.statusText||""},c.renderSelect=function(t,e){var n=t.val(),o=[],r=function(t){var i="";return t.map(function(t){var e=t.text||t.label||"",n=t.id||t.value||"";o.push(n),t.children?i+='<optgroup label="'+c.escAttr(e)+'">'+r(t.children)+"</optgroup>":i+='<option value="'+c.escAttr(n)+'"'+(t.disabled?' disabled="disabled"':"")+">"+c.strEscape(e)+"</option>"}),i};return t.html(r(e)),-1<o.indexOf(n)&&t.val(n),t.val()};function h(t,e){return t.data("acf-lock-"+e)||[]}function p(t,e,n){t.data("acf-lock-"+e,n)}var g,v,m,y;function w(){g.forEach(function(t){c.isInView(t.el)&&(t.callback.apply(this),y(t.id))})}c.lock=function(t,e,n){var i=h(t,e);i.indexOf(n)<0&&(i.push(n),p(t,e,i))},c.unlock=function(t,e,n){var i=h(t,e),n=i.indexOf(n);return-1<n&&(i.splice(n,1),p(t,e,i)),0===i.length},c.isLocked=function(t,e){return 0<h(t,e).length},c.isGutenberg=function(){return!!(window.wp&&wp.data&&wp.data.select&&wp.data.select("core/editor"))},c.objectToArray=function(e){return Object.keys(e).map(function(t){return e[t]})},c.debounce=function(n,i){var o;return function(){var t=this,e=arguments;clearTimeout(o),o=setTimeout(function(){n.apply(t,e)},i)}},c.throttle=function(t,e){var n=!1;return function(){n||(n=!0,setTimeout(function(){n=!1},e),t.apply(this,arguments))}},c.isInView=function(t){t=(t=t instanceof jQuery?t[0]:t).getBoundingClientRect();return t.top!==t.bottom&&0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},c.onceInView=(g=[],v=0,m=c.debounce(w,300),y=function(e){(g=g.filter(function(t){return t.id!==e})).length||s(window).off("scroll resize",m).off("acfrefresh orientationchange",w)},function(t,e){t instanceof jQuery&&(t=t[0]),c.isInView(t)?e.apply(this):(t=t,e=e,g.length||s(window).on("scroll resize",m).on("acfrefresh orientationchange",w),g.push({id:v++,el:t,callback:e}))}),c.once=function(t){var e=0;return function(){return 0<e++?t=r:t.apply(this,arguments)}},c.focusAttention=function(t){var e=1e3;t.addClass("acf-attention -focused");c.isInView(t)||(s("body, html").animate({scrollTop:t.offset().top-s(window).height()/2},500),e+=500);setTimeout(function(){t.removeClass("-focused"),setTimeout(function(){t.removeClass("acf-attention")},250)},e)},c.onFocus=function(e,n){function t(){o=!0,setTimeout(function(){o=!1},1),a(!0)}function i(){o||a(!1)}var o=!1,r=!1,a=function(t){r!==t&&(t?(s(document).on("click",i),e.on("blur","input, select, textarea",i)):(s(document).off("click",i),e.off("blur","input, select, textarea",i)),n(r=t))};e.on("click",t),e.on("focus","input, select, textarea",t)},s.fn.exists=function(){return 0<s(this).length},s.fn.outerHTML=function(){return s(this).get(0).outerHTML},Array.prototype.indexOf||(Array.prototype.indexOf=function(t){return s.inArray(t,this)}),c.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},c.refresh=c.debounce(function(){s(window).trigger("acfrefresh"),c.doAction("refresh")},0),s(document).ready(function(){c.doAction("ready")}),s(window).on("load",function(){setTimeout(function(){c.doAction("load")})}),s(window).on("beforeunload",function(){c.doAction("unload")}),s(window).on("resize",function(){c.doAction("resize")}),s(document).on("sortstart",function(t,e){c.doAction("sortstart",e.item,e.placeholder)}),s(document).on("sortstop",function(t,e){c.doAction("sortstop",e.item,e.placeholder)})}(jQuery),function(){"use strict";acf.hooks=new function(){var o={removeFilter:function(t,e){"string"==typeof t&&n("filters",t,e);return o},applyFilters:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();return"string"!=typeof e?o:i("filters",e,t)},addFilter:function(t,e,n,i){"string"==typeof t&&"function"==typeof e&&(n=parseInt(n||10,10),r("filters",t,e,n,i));return o},removeAction:function(t,e){"string"==typeof t&&n("actions",t,e);return o},doAction:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();"string"==typeof e&&i("actions",e,t);return o},addAction:function(t,e,n,i){"string"==typeof t&&"function"==typeof e&&(n=parseInt(n||10,10),r("actions",t,e,n,i));return o},storage:function(){return s}},s={actions:{},filters:{}};function n(t,e,n,i){if(s[t][e])if(n){var o,r=s[t][e];if(i)for(o=r.length;o--;){var a=r[o];a.callback===n&&a.context===i&&r.splice(o,1)}else for(o=r.length;o--;)r[o].callback===n&&r.splice(o,1)}else s[t][e]=[]}function r(t,e,n,i,o){i={callback:n,priority:i,context:o},o=(o=s[t][e])?(o.push(i),function(t){for(var e,n,i,o=1,r=t.length;o<r;o++){for(e=t[o],n=o;(i=t[n-1])&&i.priority>e.priority;)t[n]=t[n-1],--n;t[n]=e}return t}(o)):[i];s[t][e]=o}function i(t,e,n){var i=s[t][e];if(!i)return"filters"===t&&n[0];var o=0,r=i.length;if("filters"===t)for(;o<r;o++)n[0]=i[o].callback.apply(i[o].context,n);else for(;o<r;o++)i[o].callback.apply(i[o].context,n);return"filters"!==t||n[0]}return o}}(window),function(i){var o=/^(\S+)\s*(.*)$/,t=acf.Model=function(){this.cid=acf.uniqueId("acf"),this.data=i.extend(!0,{},this.data),this.setup.apply(this,arguments),this.$el&&!this.$el.data("acf")&&this.$el.data("acf",this);function t(){this.initialize(),this.addEvents(),this.addActions(),this.addFilters()}this.wait&&!acf.didAction(this.wait)?this.addAction(this.wait,t):t.apply(this)};i.extend(t.prototype,{id:"",cid:"",$el:null,data:{},busy:!1,changed:!1,events:{},actions:{},filters:{},eventScope:"",wait:!1,priority:10,get:function(t){return this.data[t]},has:function(t){return null!=this.get(t)},set:function(t,e,n){var i=this.get(t);return i==e||(this.data[t]=e,n||(this.changed=!0,this.trigger("changed:"+t,[e,i]),this.trigger("changed",[t,e,i]))),this},inherit:function(t){return t instanceof jQuery&&(t=t.data()),i.extend(this.data,t),this},prop:function(){return this.$el.prop.apply(this.$el,arguments)},setup:function(t){i.extend(this,t)},initialize:function(){},addElements:function(t){if(!(t=t||this.elements||null)||!Object.keys(t).length)return!1;for(var e in t)this.addElement(e,t[e])},addElement:function(t,e){this["$"+t]=this.$(e)},addEvents:function(t){if(!(t=t||this.events||null))return!1;for(var e in t){var n=e.match(o);this.on(n[1],n[2],t[e])}},removeEvents:function(t){if(!(t=t||this.events||null))return!1;for(var e in t){var n=e.match(o);this.off(n[1],n[2],t[e])}},getEventTarget:function(t,e){return t||this.$el||i(document)},validateEvent:function(t){return!this.eventScope||i(t.target).closest(this.eventScope).is(this.$el)},proxyEvent:function(n){return this.proxy(function(t){var e;this.validateEvent(t)&&(e=acf.arrayArgs(arguments).slice(1),e=[t,i(t.currentTarget)].concat(e),n.apply(this,e))})},on:function(t,e,n,i){var o,r,e=t instanceof jQuery?i?(a=t,o=e,r=n,i):(a=t,o=e,n):n?(o=t,r=e,n):(o=t,e),a=this.getEventTarget(a);"string"==typeof e&&(e=this.proxyEvent(this[e])),o=o+"."+this.cid,a.on.apply(a,r?[o,r,e]:[o,e])},off:function(t,e,n){var i,o,r;t instanceof jQuery?n?(i=t,o=e,r=n):(i=t,o=e):e?(o=t,r=e):o=t,i=this.getEventTarget(i),o=o+"."+this.cid,i.off.apply(i,r?[o,r]:[o])},trigger:function(t,e,n){var i=this.getEventTarget();return(n?i.trigger:i.triggerHandler).apply(i,arguments),this},addActions:function(t){if(!(t=t||this.actions||null))return!1;for(var e in t)this.addAction(e,t[e])},removeActions:function(t){if(!(t=t||this.actions||null))return!1;for(var e in t)this.removeAction(e,t[e])},addAction:function(t,e,n){n=n||this.priority,"string"==typeof e&&(e=this[e]),acf.addAction(t,e,n,this)},removeAction:function(t,e){acf.removeAction(t,this[e])},addFilters:function(t){if(!(t=t||this.filters||null))return!1;for(var e in t)this.addFilter(e,t[e])},addFilter:function(t,e,n){n=n||this.priority,"string"==typeof e&&(e=this[e]),acf.addFilter(t,e,n,this)},removeFilters:function(t){if(!(t=t||this.filters||null))return!1;for(var e in t)this.removeFilter(e,t[e])},removeFilter:function(t,e){acf.removeFilter(t,this[e])},$:function(t){return this.$el.find(t)},remove:function(){this.removeEvents(),this.removeActions(),this.removeFilters(),this.$el.remove()},setTimeout:function(t,e){return setTimeout(this.proxy(t),e)},time:function(){console.time(this.id||this.cid)},timeEnd:function(){console.timeEnd(this.id||this.cid)},show:function(){acf.show(this.$el)},hide:function(){acf.hide(this.$el)},proxy:function(t){return i.proxy(t,this)}}),t.extend=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)};return i.extend(n,e),n.prototype=Object.create(e.prototype),i.extend(n.prototype,t),n.prototype.constructor=n},acf.models={},acf.getInstance=function(t){return t.data("acf")},acf.getInstances=function(t){var e=[];return t.each(function(){e.push(acf.getInstance(i(this)))}),e}}(jQuery),function(e){acf.models.Popup=acf.Model.extend({data:{title:"",content:"",width:0,height:0,loading:!1},events:{'click [data-event="close"]':"onClickClose","click .acf-close-popup":"onClickClose"},setup:function(t){e.extend(this.data,t),this.$el=e(this.tmpl())},initialize:function(){this.render(),this.open()},tmpl:function(){return['<div id="acf-popup">','<div class="acf-popup-box acf-box">','<div class="title"><h3></h3><a href="#" class="acf-icon -cancel grey" data-event="close"></a></div>','<div class="inner"></div>','<div class="loading"><i class="acf-loading"></i></div>',"</div>",'<div class="bg" data-event="close"></div>',"</div>"].join("")},render:function(){var t=this.get("title"),e=this.get("content"),n=this.get("loading"),i=this.get("width"),o=this.get("height");this.title(t),this.content(e),i&&this.$(".acf-popup-box").css("width",i),o&&this.$(".acf-popup-box").css("min-height",o),this.loading(n),acf.doAction("append",this.$el)},update:function(t){this.data=acf.parseArgs(t,this.data),this.render()},title:function(t){this.$(".title:first h3").html(t)},content:function(t){this.$(".inner:first").html(t)},loading:function(t){var e=this.$(".loading:first");t?e.show():e.hide()},open:function(){e("body").append(this.$el)},close:function(){this.remove()},onClickClose:function(t,e){t.preventDefault(),this.close()}}),acf.newPopup=function(t){return new acf.models.Popup(t)}}(jQuery),function(i){acf.models.Modal=acf.Model.extend({data:{title:"",content:"",toolbar:""},events:{"click .acf-modal-close":"onClickClose"},setup:function(t){i.extend(this.data,t),this.$el=i(),this.render()},initialize:function(){this.open()},render:function(){var t=this.get("title"),e=this.get("content"),n=this.get("toolbar"),n=i(["<div>",'<div class="acf-modal">','<div class="acf-modal-title">',"<h2>"+t+"</h2>",'<button class="acf-modal-close" type="button"><span class="dashicons dashicons-no"></span></button>',"</div>",'<div class="acf-modal-content">'+e+"</div>",'<div class="acf-modal-toolbar">'+n+"</div>","</div>",'<div class="acf-modal-backdrop acf-modal-close"></div>',"</div>"].join(""));this.$el&&this.$el.replaceWith(n),this.$el=n,acf.doAction("append",n)},update:function(t){this.data=acf.parseArgs(t,this.data),this.render()},title:function(t){this.$(".acf-modal-title h2").html(t)},content:function(t){this.$(".acf-modal-content").html(t)},toolbar:function(t){this.$(".acf-modal-toolbar").html(t)},open:function(){i("body").append(this.$el)},close:function(){this.remove()},onClickClose:function(t,e){t.preventDefault(),this.close()}}),acf.newModal=function(t){return new acf.models.Modal(t)}}(jQuery),jQuery,new acf.Model({events:{"click .acf-panel-title":"onClick"},onClick:function(t,e){t.preventDefault(),this.toggle(e.parent())},isOpen:function(t){return t.hasClass("-open")},toggle:function(t){this.isOpen(t)?this.close(t):this.open(t)},open:function(t){t.addClass("-open"),t.find(".acf-panel-title i").attr("class","dashicons dashicons-arrow-down")},close:function(t){t.removeClass("-open"),t.find(".acf-panel-title i").attr("class","dashicons dashicons-arrow-right")}}),function(e){var n=acf.Model.extend({data:{text:"",type:"",timeout:0,dismiss:!0,target:!1,close:function(){}},events:{"click .acf-notice-dismiss":"onClickClose"},tmpl:function(){return'<div class="acf-notice"></div>'},setup:function(t){e.extend(this.data,t),this.$el=e(this.tmpl())},initialize:function(){this.render(),this.show()},render:function(){this.type(this.get("type")),this.html("<p>"+this.get("text")+"</p>"),this.get("dismiss")&&(this.$el.append('<a href="#" class="acf-notice-dismiss acf-icon -cancel small"></a>'),this.$el.addClass("-dismiss"));var t=this.get("timeout");t&&this.away(t)},update:function(t){e.extend(this.data,t),this.initialize(),this.removeEvents(),this.addEvents()},show:function(){var t=this.get("target");t&&t.prepend(this.$el)},hide:function(){this.$el.remove()},away:function(t){this.setTimeout(function(){acf.remove(this.$el)},t)},type:function(t){var e=this.get("type");e&&this.$el.removeClass("-"+e),this.$el.addClass("-"+t),"error"==t&&this.$el.addClass("acf-error-message")},html:function(t){this.$el.html(acf.escHtml(t))},text:function(t){this.$("p").html(acf.escHtml(t))},onClickClose:function(t,e){t.preventDefault(),this.get("close").apply(this,arguments),this.remove()}});acf.newNotice=function(t){return new n(t="object"!=typeof t?{text:t}:t)};new acf.Model({wait:"prepare",priority:1,initialize:function(){var t=e(".acf-admin-notice");t.length&&e("h1:first").after(t)}})}(jQuery),function(u){acf.newTooltip=function(t){return void 0!==(t="object"!=typeof t?{text:t}:t).confirmRemove?(t.textConfirm=acf.__("Remove"),t.textCancel=acf.__("Cancel"),new n(t)):new(void 0!==t.confirm?n:e)(t)};var e=acf.Model.extend({data:{text:"",timeout:0,target:null},tmpl:function(){return'<div class="acf-tooltip"></div>'},setup:function(t){u.extend(this.data,t),this.$el=u(this.tmpl())},initialize:function(){this.render(),this.show(),this.position();var t=this.get("timeout");t&&setTimeout(u.proxy(this.fade,this),t)},update:function(t){u.extend(this.data,t),this.initialize()},render:function(){this.html(this.get("text"))},show:function(){u("body").append(this.$el)},hide:function(){this.$el.remove()},fade:function(){this.$el.addClass("acf-fade-up"),this.setTimeout(function(){this.remove()},250)},html:function(t){this.$el.html(t)},position:function(){var t,e,n,i,o,r,a,s,c=this.$el,l=this.get("target");l&&(c.removeClass("right left bottom top").css({top:0,left:0}),t=l.outerWidth(),e=l.outerHeight(),n=l.offset().top,i=l.offset().left,o=c.outerWidth(),s=n-(r=c.outerHeight())-(a=c.offset().top),(l=i+t/2-o/2)<10?(c.addClass("right"),l=i+t,s=n+e/2-r/2-a):l+o+10>u(window).width()?(c.addClass("left"),l=i-o,s=n+e/2-r/2-a):s-u(window).scrollTop()<10?(c.addClass("bottom"),s=n+e-a):c.addClass("top"),c.css({top:s,left:l}))}}),n=e.extend({data:{text:"",textConfirm:"",textCancel:"",target:null,targetConfirm:!0,confirm:function(){},cancel:function(){},context:!1},events:{'click [data-event="cancel"]':"onCancel",'click [data-event="confirm"]':"onConfirm"},addEvents:function(){acf.Model.prototype.addEvents.apply(this);var t=u(document),e=this.get("target");this.setTimeout(function(){this.on(t,"click","onCancel")}),this.get("targetConfirm")&&this.on(e,"click","onConfirm")},removeEvents:function(){acf.Model.prototype.removeEvents.apply(this);var t=u(document),e=this.get("target");this.off(t,"click"),this.off(e,"click")},render:function(){var t=[this.get("text")||acf.__("Are you sure?"),'<a href="#" data-event="confirm">'+(this.get("textConfirm")||acf.__("Yes"))+"</a>",'<a href="#" data-event="cancel">'+(this.get("textCancel")||acf.__("No"))+"</a>"].join(" ");this.html(t),this.$el.addClass("-confirm")},onCancel:function(t,e){t.preventDefault(),t.stopImmediatePropagation();var n=this.get("cancel"),i=this.get("context")||this;n.apply(i,arguments),this.remove()},onConfirm:function(t,e){t.preventDefault(),t.stopImmediatePropagation();var n=this.get("confirm"),i=this.get("context")||this;n.apply(i,arguments),this.remove()}});acf.models.Tooltip=e,acf.models.TooltipConfirm=n;new acf.Model({tooltip:!1,events:{"mouseenter .acf-js-tooltip":"showTitle","mouseup .acf-js-tooltip":"hideTitle","mouseleave .acf-js-tooltip":"hideTitle"},showTitle:function(t,e){var n=e.attr("title");n&&(e.attr("title",""),this.tooltip?this.tooltip.update({text:n,target:e}):this.tooltip=acf.newTooltip({text:n,target:e}))},hideTitle:function(t,e){this.tooltip.hide(),e.attr("title",this.tooltip.get("text"))}})}(jQuery);