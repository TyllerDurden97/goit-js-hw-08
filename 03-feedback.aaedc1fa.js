function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var o,r,u,f,a,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=y();if(b(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function O(e){return a=void 0,m&&o?v(e):(o=r=void 0,f)}function T(){var e=y(),n=b(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(w,t),s?v(e):f}(c);if(d)return a=setTimeout(w,t),v(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=h(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(h(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},T.flush=function(){return void 0===a?f:O(y())},T}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):f.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const w=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),T=document.getElementsByName("message"),S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(O.value=S.email,T[0].value=S.message),w.addEventListener("input",e(t)((function(){const e={email:O.value,message:T[0].value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),w.reset()}));
//# sourceMappingURL=03-feedback.aaedc1fa.js.map
