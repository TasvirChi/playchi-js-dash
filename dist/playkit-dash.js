!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("playkit-js"),require("shaka-player")):"function"==typeof define&&define.amd?define(["playkit-js","shaka-player"],t):"object"==typeof exports?exports.dash=t(require("playkit-js"),require("shaka-player")):(e.playkit=e.playkit||{},e.playkit.dash=t(e.playkit.core,e.shaka))}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NAME=t.VERSION=void 0;var r=n(0),i=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=a.default,t.VERSION="1.5.5",t.NAME="playkit-js-dash",a.default.isSupported()&&(0,r.registerMediaSourceAdapter)(a.default)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(r)},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),d=r(c),f=n(0),h=n(4),_=r(h),p=n(5),v=r(p),g=n(6),y=r(g),k={ERROR:"error",ADAPTION:"adaption",BUFFERING:"buffering"},b=function(e){function t(e,n){var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a(this,t),t._logger.debug("Creating adapter. Shaka version: "+d.default.Player.version);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,s));return u._adapterEventsBindings=(r={},i(r,k.ERROR,function(e){return u._onError(e)}),i(r,k.ADAPTION,function(){return u._onAdaptation()}),i(r,k.BUFFERING,function(e){return u._onBuffering(e)}),i(r,f.EventType.WAITING,function(){return u._onWaiting()}),i(r,f.EventType.PLAYING,function(){return u._onPlaying()}),r),u._buffering=!1,u._waitingSent=!1,u._playingSent=!1,u.VIDEO_ERROR_CODE=3016,u._config=f.Utils.Object.mergeDeep({},u._config,y.default),u}return s(t,e),l(t,null,[{key:"createAdapter",value:function(e,t,n){var r={};return f.Utils.Object.hasPropertyPath(n,"playback.options.html5.dash")&&(r=n.playback.options.html5.dash),new this(e,t,r)}},{key:"canPlayType",value:function(e){var n="string"==typeof e&&e.toLowerCase()===t._dashMimeType;return t._logger.debug("canPlayType result for mimeType: "+e+" is "+n.toString()),n}},{key:"canPlayDrm",value:function(e){var n=!1,r=!0,i=!1,a=void 0;try{for(var o,s=t._drmProtocols[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;if(u.canPlayDrm(e)){t._drmProtocol=u,n=!0;break}}}catch(e){i=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return t._logger.debug("canPlayDrm result is "+n.toString(),e),n}},{key:"isSupported",value:function(){var e=!1;window.VTTCue||(e=!0),d.default.polyfill.installAll();var n=d.default.Player.isBrowserSupported();return e&&(window.VTTCue=void 0),t._logger.debug("isSupported:"+n),n}}]),l(t,[{key:"_init",value:function(){d.default.polyfill.installAll(),this._shaka=new d.default.Player(this._videoElement),this._maybeSetDrmConfig(),this._shaka.configure(this._config),this._shaka.setTextTrackVisibility(!1),this._addBindings()}},{key:"_maybeSetDrmConfig",value:function(){t._drmProtocol&&this._sourceObj&&this._sourceObj.drmData&&t._drmProtocol.setDrmPlayback(this._config,this._sourceObj.drmData)}},{key:"_addBindings",value:function(){this._shaka.addEventListener(k.ADAPTION,this._adapterEventsBindings.adaption),this._shaka.addEventListener(k.ERROR,this._adapterEventsBindings.error),this._shaka.addEventListener(k.BUFFERING,this._adapterEventsBindings.buffering),this._videoElement.addEventListener(f.EventType.WAITING,this._adapterEventsBindings.waiting),this._videoElement.addEventListener(f.EventType.PLAYING,this._adapterEventsBindings.playing)}},{key:"_removeBindings",value:function(){this._shaka.removeEventListener(k.ADAPTION,this._adapterEventsBindings.adaption),this._shaka.removeEventListener(k.ERROR,this._adapterEventsBindings.error),this._shaka.removeEventListener(k.BUFFERING,this._adapterEventsBindings.buffering),this._videoElement.removeEventListener(f.EventType.WAITING,this._adapterEventsBindings.waiting),this._videoElement.removeEventListener(f.EventType.PLAYING,this._adapterEventsBindings.playing)}},{key:"load",value:function(e){var n=this;return this._loadPromise||(this._init(),this._loadPromise=new Promise(function(r,i){n._sourceObj&&n._sourceObj.url&&(n._trigger(f.EventType.ABR_MODE_CHANGED,{mode:n.isAdaptiveBitrateEnabled()?"auto":"manual"}),n._shaka.load(n._sourceObj.url,e).then(function(){var e={tracks:n._getParsedTracks()};t._logger.debug("The source has been loaded successfully"),r(e)}).catch(function(e){i(new f.Error(e.severity,e.category,e.code,e.data))}))})),this._loadPromise}},{key:"destroy",value:function(){var e=this;return u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this).then(function(){if(t._logger.debug("destroy"),e._loadPromise=null,e._buffering=!1,e._waitingSent=!1,e._playingSent=!1,e._shaka)return e._removeBindings(),e._shaka.destroy();e._adapterEventsBindings={}})}},{key:"_getVideoTracks",value:function(){var e=this._shaka.getVariantTracks(),t=e.filter(function(e){return e.active})[0];return e.filter(function(e){return e.audioId===t.audioId})}},{key:"_getAudioTracks",value:function(){var e=this._shaka.getVariantTracks(),t=e.filter(function(e){return e.active})[0];return e.filter(function(e){return e.videoId===t.videoId})}},{key:"_getParsedTracks",value:function(){if(this._shaka){var e=this._getParsedVideoTracks(),t=this._getParsedAudioTracks(),n=this._getParsedTextTracks();return e.concat(t).concat(n)}return[]}},{key:"_getParsedVideoTracks",value:function(){var e=this._getVideoTracks(),t=[];if(e)for(var n=0;n<e.length;n++){var r={id:e[n].id,bandwidth:e[n].bandwidth,width:e[n].width,height:e[n].height,active:e[n].active,label:e[n].label,index:n};t.push(new f.VideoTrack(r))}return t}},{key:"_getParsedAudioTracks",value:function(){var e=this._getAudioTracks(),t=[];if(e)for(var n=0;n<e.length;n++){var r={id:e[n].id,active:e[n].active,label:e[n].label,language:e[n].language,index:n};t.push(new f.AudioTrack(r))}return t}},{key:"_getParsedTextTracks",value:function(){var e=this._shaka.getTextTracks(),t=[];if(e)for(var n=0;n<e.length;n++){var r={kind:e[n].kind?e[n].kind+"s":"",active:!1,label:e[n].label,language:e[n].language,index:n};t.push(new f.TextTrack(r))}return t}},{key:"selectVideoTrack",value:function(e){if(this._shaka){var t=this._getVideoTracks();if(e instanceof f.VideoTrack&&t){var n=t[e.index];n&&(this.isAdaptiveBitrateEnabled()&&(this._shaka.configure({abr:{enabled:!1}}),this._trigger(f.EventType.ABR_MODE_CHANGED,{mode:"manual"})),n.active||(this._shaka.selectVariantTrack(t[e.index],!0),this._onTrackChanged(e)))}}}},{key:"selectAudioTrack",value:function(e){this._shaka&&e instanceof f.AudioTrack&&!e.active&&(this._shaka.selectAudioLanguage(e.language),this._onTrackChanged(e))}},{key:"selectTextTrack",value:function(e){this._shaka&&e instanceof f.TextTrack&&!e.active&&("subtitles"===e.kind||"captions"===e.kind)&&(this._shaka.selectTextLanguage(e.language),this._shaka.setTextTrackVisibility(!1),this._onTrackChanged(e))}},{key:"hideTextTrack",value:function(){this._shaka&&this._shaka.setTextTrackVisibility(!1)}},{key:"enableAdaptiveBitrate",value:function(){this._shaka&&!this.isAdaptiveBitrateEnabled()&&(this._trigger(f.EventType.ABR_MODE_CHANGED,{mode:"auto"}),this._shaka.configure({abr:{enabled:!0}}))}},{key:"isAdaptiveBitrateEnabled",value:function(){if(this._shaka){return this._shaka.getConfiguration().abr.enabled}return!1}},{key:"_getLiveEdge",value:function(){return this._shaka?this._shaka.seekRange().end:NaN}},{key:"seekToLiveEdge",value:function(){this._shaka&&(this._videoElement.currentTime=this._shaka.seekRange().end)}},{key:"isLive",value:function(){return!!this._shaka&&this._shaka.isLive()}},{key:"_onAdaptation",value:function(){var e=this._getParsedVideoTracks().filter(function(e){return e.active})[0];this._onTrackChanged(e)}},{key:"_onError",value:function(e){if(e&&e.detail){var n=e.detail;if(n.code===this.VIDEO_ERROR_CODE)return;this._trigger(f.EventType.ERROR,new f.Error(n.severity,n.category,n.code,n.data)),t._logger.error(n)}}},{key:"_onBuffering",value:function(e){e.buffering?this._waitingSent||(this._videoElement.dispatchEvent(new window.Event(f.EventType.WAITING)),this._buffering=!0):(this._buffering=!1,this._videoElement.paused||this._playingSent||this._videoElement.dispatchEvent(new window.Event(f.EventType.PLAYING)))}},{key:"_onWaiting",value:function(){this._waitingSent=!0,this._playingSent=!1}},{key:"_onPlaying",value:function(){this._playingSent=!0,this._waitingSent=!1,this._buffering&&this._videoElement.dispatchEvent(new window.Event(f.EventType.WAITING))}},{key:"getStartTimeOfDvrWindow",value:function(){return this.isLive()&&this._shaka?this._shaka.seekRange().start:0}},{key:"src",get:function(){return this._loadPromise&&this._sourceObj?this._sourceObj.url:""}}]),t}(f.BaseMediaSourceAdapter);b.id="DashAdapter",b._logger=f.BaseMediaSourceAdapter.getLogger(b.id),b._dashMimeType="application/dash+xml",b._drmProtocols=[_.default,v.default],b._drmProtocol=null,t.default=b},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=u.BaseDrmProtocol.DrmSupport,c=u.BaseDrmProtocol.DrmScheme,d=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,null,[{key:"canPlayDrm",value:function(e){return t._logger.debug("Can play DRM scheme of: "+c.WIDEVINE),l.isProtocolSupported(c.WIDEVINE,e)}},{key:"setDrmPlayback",value:function(e,n){t._logger.debug("Sets drm playback");var i=u.Env.browser.name,a=n.find(function(e){return e.scheme===c.WIDEVINE});a&&(e.drm={servers:r({},c.WIDEVINE,a.licenseUrl),advanced:{}},"Chrome"===i&&(e.drm.advanced=r({},c.WIDEVINE,{videoRobustness:"SW_SECURE_CRYPTO",audioRobustness:"SW_SECURE_CRYPTO"})))}}]),t}(u.BaseDrmProtocol);d._logger=u.BaseDrmProtocol.getLogger("Widevine"),t.default=d},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=u.BaseDrmProtocol.DrmSupport,c=u.BaseDrmProtocol.DrmScheme,d=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,null,[{key:"canPlayDrm",value:function(e){return t._logger.debug("Can play DRM scheme of: "+c.PLAYREADY),l.isProtocolSupported(c.PLAYREADY,e)}},{key:"setDrmPlayback",value:function(e,n){t._logger.debug("Sets drm playback");var i=n.find(function(e){return e.scheme===c.PLAYREADY});i&&(e.drm={servers:r({},c.PLAYREADY,i.licenseUrl)})}}]),t}(u.BaseDrmProtocol);d._logger=u.BaseDrmProtocol.getLogger("PlayReady"),t.default=d},function(e,t){e.exports={streaming:{ignoreTextStreamFailures:!0}}}])});
//# sourceMappingURL=playkit-dash.js.map