(self["webpackChunkthundersdata_frontend"]=self["webpackChunkthundersdata_frontend"]||[]).push([[9617],{70599:function(){},92945:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(58948);n(34116)},92429:function(e,t,n){"use strict";n.r(t);var l=n(57689),r=n(23757),a=n(67341),c=n(49669),u=l.memo((e=>{var t=e.demos,n=t["gaugedemo-demo1"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a"},l.createElement(r.AnchorLink,{to:"#\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u5c5e\u6027"),l.createElement("th",null,"\u5fc5\u586b"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"max"),l.createElement("td",null,l.createElement("code",null,"true")),l.createElement("td",null,"\u6700\u5927\u503c"),l.createElement("td",null,l.createElement("code",null,"number")),l.createElement("td",null,l.createElement("code",null,"100"))),l.createElement("tr",null,l.createElement("td",null,"value"),l.createElement("td",null,l.createElement("code",null,"true")),l.createElement("td",null,"\u5f53\u524d\u503c"),l.createElement("td",null,l.createElement("code",null,"number")," | ",l.createElement("code",null,"string")),l.createElement("td",null)),l.createElement("tr",null,l.createElement("td",null,"style"),l.createElement("td",null,l.createElement("code",null,"false")),l.createElement("td",null,"\u81ea\u5b9a\u4e49\u6837\u5f0f"),l.createElement("td",null,l.createElement("code",null,"CSSProperties")),l.createElement("td",null)))),l.createElement("h2",{id:"\u6548\u679c\u56fe"},l.createElement(r.AnchorLink,{to:"#\u6548\u679c\u56fe","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u56fe")),l.createElement(a.default,t["gaugedemo-demo1"].previewerProps,l.createElement(n,null))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(u,{demos:n})}},49669:function(e,t,n){"use strict";var l=n(57689),r=n(35975),a=n.n(r);n(70599);function c(e,t){return i(e)||d(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(o){u=!0,r=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw r}}return a}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=(0,l.useRef)(),r=(0,l.useState)(!1),u=c(r,2),o=u[0],m=u[1],d=(0,l.useState)(!1),i=c(d,2),s=i[0],E=i[1];return(0,l.useEffect)((function(){var e=n.current,t=a()((function(){m(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.createElement("div",{className:"__dumi-default-table"},l.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},l.createElement("table",null,t)))};t["Z"]=s}}]);