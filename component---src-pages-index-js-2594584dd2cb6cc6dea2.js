(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),c=i(a("8OQS")),l=i(a("pVnL")),o=i(a("q1tI")),M=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=f([].concat(t.fluid))),t.fixed&&(t.fixed=f([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(T&&!!window.matchMedia(t).matches)},N=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(T&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},L=Object.create({}),g=function(e){var t=u(e),a=N(t);return L[a]||!1},j="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,T="undefined"!=typeof window,D=T&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),o.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function f(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function z(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function h(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var p=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",M=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?h(e,!0):"")+h(e)})).join("")+"<img "+o+s+c+a+i+t+n+r+l+M+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=o.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,c=o.default.createElement(S,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?o.default.createElement("picture",null,r(i),c):c})),S=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,M=e.onError,u=e.loading,d=e.draggable,N=e.ariaHidden,m=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":N,sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:M,ref:t,loading:u,draggable:d,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));S.propTypes={style:M.default.object,onError:M.default.func,onLoad:M.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=T&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!j&&D&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||T&&(j||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=p(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=N(t),L[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,c=void 0===s?{}:s,M=e.placeholderStyle,d=void 0===M?{}:M,N=e.placeholderClassName,L=e.fluid,g=e.fixed,j=e.backgroundColor,T=e.durationFadeIn,D=e.Tag,E=e.itemProp,f=e.loading,h=e.draggable,p=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,l.default)({opacity:p?1:0,transition:x?"opacity "+T+"ms":"none"},c),b="boolean"==typeof j?"lightgray":j,v={transitionDelay:T+"ms"},Y=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},x&&v),c),d),C={title:t,alt:this.state.isVisible?"":a,style:Y,className:N,itemProp:E};if(L){var k=L,U=m(L);return o.default.createElement(D,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:U.maxWidth?U.maxWidth+"px":null,maxHeight:U.maxHeight?U.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},o.default.createElement(D,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),b&&o.default.createElement(D,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&v)}),U.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:C,imageVariants:k,generateSources:z}),U.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:C,imageVariants:k,generateSources:y}),this.state.isVisible&&o.default.createElement("picture",null,w(k),o.default.createElement(S,{alt:a,title:t,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:f,draggable:h})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)((0,l.default)({alt:a,title:t,loading:f},U),{},{imageVariants:k}))}}))}if(g){var Q=g,R=m(g),W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete W.display,o.default.createElement(D,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},b&&o.default.createElement(D,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:b,width:R.width,opacity:this.state.imgLoaded?0:1,height:R.height},x&&v)}),R.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:R.base64,spreadProps:C,imageVariants:Q,generateSources:z}),R.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:R.tracedSVG,spreadProps:C,imageVariants:Q,generateSources:y}),this.state.isVisible&&o.default.createElement("picture",null,w(Q),o.default.createElement(S,{alt:a,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:f,draggable:h})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)((0,l.default)({alt:a,title:t,loading:f},R),{},{imageVariants:Q}))}}))}return null},t}(o.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var A=M.default.shape({width:M.default.number.isRequired,height:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string,media:M.default.string}),b=M.default.shape({aspectRatio:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,sizes:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string,media:M.default.string,maxWidth:M.default.number,maxHeight:M.default.number});x.propTypes={resolutions:A,sizes:b,fixed:M.default.oneOfType([A,M.default.arrayOf(A)]),fluid:M.default.oneOfType([b,M.default.arrayOf(b)]),fadeIn:M.default.bool,durationFadeIn:M.default.number,title:M.default.string,alt:M.default.string,className:M.default.oneOfType([M.default.string,M.default.object]),critical:M.default.bool,crossOrigin:M.default.oneOfType([M.default.string,M.default.bool]),style:M.default.object,imgStyle:M.default.object,placeholderStyle:M.default.object,placeholderClassName:M.default.string,backgroundColor:M.default.oneOfType([M.default.string,M.default.bool]),onLoad:M.default.func,onError:M.default.func,onStartLoad:M.default.func,Tag:M.default.string,itemProp:M.default.string,loading:M.default.oneOf(["auto","lazy","eager"]),draggable:M.default.bool};var v=x;t.default=v},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),c=a("Z6vF"),l=a("czNK"),o=a("ZD67"),M=a("0/R4"),u=a("s5qY"),d=a("s5qY"),N=!r.ActiveXObject&&"ActiveXObject"in r,m=c.getWeak,L=Object.isExtensible,g=o.ufstore,j=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},T={get:function(e){if(M(e)){var t=m(e);return!0===t?g(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return o.def(u(this,"WeakMap"),e,t)}},D=e.exports=a("4LiD")("WeakMap",j,T,o,!0,!0);d&&N&&(l((i=o.getConstructor(j,"WeakMap")).prototype,T),c.NEED=!0,n(["delete","has","get","set"],(function(e){var t=D.prototype,a=t[e];s(t,e,(function(t,r){if(M(t)&&!L(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},LrWj:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iYWJjNmYwZmUtYWM1OS00OTAxLWE0NmEtOTNhNWVlZDYzYmY4IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg2NS44MDE3MyIgaGVpZ2h0PSI2NTAuNDYyOCIgdmlld0JveD0iMCAwIDg2NS44MDE3MyA2NTAuNDYyOCI+PHBhdGggZD0iTTU3My4wOTkxMyw3NTUuNDM5MjNjMCw5Ljk0MTEyLTkxLDExLTIwMywxOC0xMTEuODk1NDcsNi45OTM0Ni0yMDMtOC4wNTg4OC0yMDMtMThzOTEuNTI0MjItMjkuOTQzODQsMjAzLTE4QzQ4Mi4wOTkxMyw3NDkuNDM5MjMsNTczLjA5OTEzLDc0NS40OTgxLDU3My4wOTkxMyw3NTUuNDM5MjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNMTAwMS4xNDIyNywxMjQuNzY5NjhINzYwLjUyNjhBNTEuMTUwMTQsNTEuMTUwMTQsMCwwLDAsNzEwLjYyOSwxNjQuNjcwMjlMNTg5LjA1MDgxLDcwMy45Mzc1NmE0MS4zNDA0NSw0MS4zNDA0NSwwLDAsMCwzOC4yOTM3Niw1MC4zODIzM0w4NzQuNjk5LDc2Ni41MDdhNTQuNjE0OTEsNTQuNjE0OTEsMCwwLDAsNTYuNDMwNDgtNDQuODI3NDVsNjguOTY2NjEtMzgxLjI2OCw1LjEzMDgsMS40NjZMMTAxOC40MjMsMjY5LjYxM2wtNS4yODE0My0xLjMyMDM4LDE5LjI1MS0xMDYuNDI1NThhMzEuNDkyNzYsMzEuNDkyNzYsMCwwLDAtMzEuMjUwMjUtMzcuMDk3MzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNzkyLjIwMzQzLDEzNi4zOTQ4N2gtMjguMDg3YTM1LjM0ODY1LDM1LjM0ODY1LDAsMCwwLTM0LjUzNjE5LDI3LjgxMzQ3TDYxMi44ODE4MSw2OTkuMDc1ODdhMjEuOTAzMzUsMjEuOTAzMzUsMCwwLDAsMTkuOTY3MzcsMjYuNTI1MzlsMjQ2LjU1NDE0LDE2LjE1ODkzYTI4LjM2NjgsMjguMzY2OCwwLDAsMCwyOS43NzI3Ny0yMy4yNzc0Nmw5OS41Nzk1My01NTIuODM3N2EyNC44NDU3NSwyNC44NDU3NSwwLDAsMC0yNC40NTIyNy0yOS4yNTAxNmgtMjYuNjQ1YTExLjcyNTgzLDExLjcyNTgzLDAsMCwwLTExLjMyMjY0LDguNjc3NDFoMGExMC4zNTE4MSwxMC4zNTE4MSwwLDAsMS05Ljk5NTkxLDcuNjYwNjNIODA5Ljg0NjU2YTE3LjY5NTIyLDE3LjY5NTIyLDAsMCwxLTE3LjY0MzEzLTE2LjMzODA2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTUyOC4yODgsNDExLjUxMzM4bDIxLjczOTEzLDQzLjAzNzJMNjE1LjAyOCw0ODQuMTAwODljNi45NDE1MSwxMS43MzExMSwyOC45OTkzNSwxMi42MjksMzAuNjAzNTIsNS4wNDI3NSwxLjc5OTYyLTguNTEwNTgtMjYuNzg1NjktMjIuMjA4NjUtMjYuNzg1NjktMjIuMjA4NjVsLTU0LjM2ODE5LTM2Ljc3MzU0LTQuNzU3LTMxLjY1NzI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjYTA2MTZhIi8+PHBvbHlnb24gcG9pbnRzPSIzNjMuNzUzIDU3NS41NTkgMzU5Ljc0NCA2MDcuNjMyIDM4Mi45OTcgNjA5LjIzNiAzODUuNDAyIDU3NS41NTkgMzYzLjc1MyA1NzUuNTU5IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTUzNC4wNTk4NCw3MjcuNTg5NjlhNjIuOTY2MDksNjIuOTY2MDksMCwwLDEtNS43Mzc4NS03LjAxN2MtMy4zMzI0Ny00LjYxMTUtNi4yODk0NCwxOS4wNDQzNC02LjI4OTQ0LDE5LjA0NDM0cy0zLjIwNzI2LDkuNjIxOC0yLjQwNTQ1LDE0LjQzMjc3LDE5LjI0Mzc1LDQuODExLDIyLjQ1MSw0LjAwOTEyLDE5LjI0MzcxLDAsMTkuMjQzNzEsMGgyNC4wNTQ2NGMyMC44NDczNS05LjYyMTgsMC0xNi4wMzY0MSwwLTE2LjAzNjQxLTYuNDE0NTctLjgwMTc4LTI4LjA2Mzc2LTIwLjg0NzM4LTI4LjA2Mzc2LTIwLjg0NzM4bC00LjgxMDk0LTguODJjLTMuMjA3MjctLjgwMTg1LTYuNDE0NTcsMTEuMjI1NTEtNi40MTQ1NywxMS4yMjU1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjcuMDk5MTMgLTEyNC43Njg2KSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMzAzLjYxNyA1NzUuOTYgMjk5LjYwNyA2MDguMDMzIDMyMi44NiA2MDkuNjM3IDMyNS4yNjYgNTc1Ljk2IDMwMy42MTcgNTc1Ljk2IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQ3My45MjMyMyw3MjcuOTkwNTRhNjIuOTYzLDYyLjk2MywwLDAsMS01LjczNzg1LTcuMDE3Yy0zLjMzMjQ3LTQuNjExNDktNi4yODk0NCwxOS4wNDQzNC02LjI4OTQ0LDE5LjA0NDM0cy0zLjIwNzMsOC44Mi0yLjQwNTQ1LDEzLjYzMSwxOS4yNDM3NCw0LjgxMDkxLDIyLjQ1MSw0LjAwOTEyLDE5LjI0MzcxLjgwMTg2LDE5LjI0MzcxLjgwMTg2aDI0LjA1NDY1YzIwLjg0NzM0LTkuNjIxODEsMC0xNi4wMzY0MSwwLTE2LjAzNjQxLTYuNDE0NTctLjgwMTg1LTI4LjA2Mzc3LTIwLjg0NzM4LTI4LjA2Mzc3LTIwLjg0NzM4bC00LjgxMDk0LTguODJjLTMuMjA3My0uODAxODUtNi40MTQ1NywxMS4yMjU1MS02LjQxNDU3LDExLjIyNTUxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTQ5Ny4xNzYxMyw0OTMuODU4ODNjLTMuMjA3MzEsNC4wMDkwNS0xLjYwMzY3LDE3LjY0LTEuNjAzNjcsMTcuNjRzLTUuNjEyNzYsNDQuMTAwMzgtMy4yMDczMSw0OC4xMDk1LTEuNjAzNjMsNy4yMTYzOS00LjAwOTEyLDEyLjgyOTE0LTQuODEwOTMsMTkuMjQzNzUtNC44MTA5MywxOS4yNDM3NWMtMTMuNjMxLDExLjIyNTQzLTEyLjgyOTE0LDYyLjU0Mi0xMi44MjkxNCw2Mi41NDJMNDY1LjkwNSw2OTkuOTI3MDZjMS42MDM2NCw0LjgxMDksMjQuMDU0NjEsNS42MTI3NSwyNy4yNjE5Miw0LjgxMDlzMTIuODI5MTQtNzIuOTY1NzksMTIuODI5MTQtNzIuOTY1NzlsMjEuNjQ5MTktNDAuODkyOTFTNTI2LjA0MTY0LDY5OS45MjcsNTI2LjA0MTY0LDcwNC43MzhzMjEuNjQ5MTYsMi40MDU0OSwyNi40NjAwOSwyLjQwNTQ5LDQuODEwOTQtODAuMTgyMTgsNC44MTA5NC04MC4xODIxOGw0LjgxMDk0LTIwLjg0NzM4LDI1LjY1ODI4LTk1LjQxNjhWNDk5LjQ3MTU4bC00LjAwOTA5LTUuNjEyNzVTNTAwLjM4MzQzLDQ4OS44NDk3OCw0OTcuMTc2MTMsNDkzLjg1ODgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjMmYyZTQxIi8+PGNpcmNsZSBjeD0iMzY1LjM1NzA5IiBjeT0iMTYyLjIyMDI1IiByPSIyNC44NTY0NiIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik01NDQuODg0NDksMjk4LjYxNTI1Yy01LjAzODQ1LDExLjIxOTQ3LTIuMDU1MDYsMjYuODkwMjYsOC4wMTgyMSw0NC4xMDAybC00MC44OTI5MS0xOS4yNDM3MSw2LjQxNDU3LTUuNjEyNzUtMS42MDM2My0xNi4wMzY0NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjcuMDk5MTMgLTEyNC43Njg2KSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik01NDQuODg0NDIsMzI0LjI3MzY3YzUuMzU1LDMuMTgzNTYsOC41NTgzMyw5LjAzMjkzLDEwLjM5NzIsMTQuOTg1MTdhMTQyLjAwODg4LDE0Mi4wMDg4OCwwLDAsMSw2LjEwMjQyLDMzLjkyODkzbDEuOTQyMjcsMzQuNDc1MzFMNTg3LjM4MSw0OTkuMDcwNzNjLTIwLjg0NzM0LDE3LjY0LTMyLjg3NDc0LDEzLjYzMS02MC45Mzg0My0uODAxODZzLTMxLjI3MSw0LjgxMDktMzEuMjcxLDQuODEwOS0yLjQwNTQ5LS44MDE3OCwwLTMuMjA3MjYsMCwwLTIuNDA1NDUtMi40MDU0OSwwLDAsLjgwMTgyLTIuNDA1NDgsMC0uODAxNzktLjgwMTgyLTEuNjAzNjQsMy4yMDcyNy04LjAxODI0LDMuMjA3MjctOC4wMTgyNEw0ODkuNTU4NzgsNDI1LjMwM2wtOC4wMTgyMS04NC45OTNjOS42MjE4OC0xMi4wMjczMywzNi44ODM3OS0yMi40NTEsMzYuODgzNzktMjIuNDUxTDU0My4yODA4MiwzMzUuNDk5YzguMDE4MjEsMy4yMDcyNywxLjYwMzY0LTkuNjIxODcsMS42MDM2NC05LjYyMTg3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjZjQwMDg4Ii8+PHBhdGggZD0iTTQ2OC4zMTA0NywzOTEuMjI1NTdsLTMuMjA3MjYsNDguMTA5MjksNDAuODkyOSw1OC41MzNjMCwxMy42MzEsNy4yMTYzOSwxNi44MzgyNiw3LjIxNjM5LDE2LjgzODI2YTEwNS45OTE4MSwxMDUuOTkxODEsMCwwLDAsNy4yMTYzOC0xMy42MzFjNC4wMDkxMi04LjgyLTIuNDA1NDUtMTYuMDM2NC0yLjQwNTQ1LTE2LjAzNjRsLTI4LjA2MzczLTU5LjMzNDhMNTAxLjk4NywzOTYuMDM2NTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNNDgxLjk0MTU0LDM0MC43MTA4NmMtMTMuNjMxLDQuODEwOS0xNi4wMzY0NSw1Ni45MjkzMS0xNi4wMzY0NSw1Ni45MjkzMSwxNi4wMzY0NS04LjgyLDM1LjI4MDE2LDUuNjEyNzUsMzUuMjgwMTYsNS42MTI3NXM0LjAwOS0xMy42MzA5Miw4LjgyLTMxLjI3MWEzMC42NDQxOCwzMC42NDQxOCwwLDAsMC02LjQxNDU3LTI4Ljg2NTU5UzQ5NS41NzI1MywzMzUuOSw0ODEuOTQxNTQsMzQwLjcxMDg2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjZjQwMDg4Ii8+PHBhdGggZD0iTTUwOS42MDQzNCwyOTQuNjA2MTNjMy4xNjQzMS0yLjUzMTUsNy40ODEyMSwyLjA3LDcuNDgxMjEsMi4wN2wyLjUzMTQ3LTIyLjc4MzI3czE1LjgyMTczLDEuODk4NjUsMjUuOTQ3NjEtLjYzMjg1LDExLjcwODA4LDkuMTc2NTgsMTEuNzA4MDgsOS4xNzY1OGE4MS4yNjM5Miw4MS4yNjM5MiwwLDAsMCwuMzE2NDMtMTQuMjM5NTRjLS42MzI4NS01LjY5NTgxLTguODYwMTItMTEuMzkxNjYtMjMuNDE2MTItMTUuMTg4ODVzLTIyLjE1MDQzLDEyLjY1NzM4LTIyLjE1MDQzLDEyLjY1NzM4QzUwMS44OTY3MSwyNzAuNzI4NTIsNTA2LjQ0LDI5Ny4xMzc2Miw1MDkuNjA0MzQsMjk0LjYwNjEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wOTkxMyAtMTI0Ljc2ODYpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTkzMi4xMjI1Nyw1MTAuMzEzMjVhMi4wMjU3OSwyLjAyNTc5LDAsMCwwLDIuMDY0NDUtMS42Mzc3bDU1LjI4NTE2LTMwMC45MTY1YTIuMDAwMTYsMi4wMDAxNiwwLDAsMC0xLjk0MzM2LTIuMzYxMzNsLTI1MS41MjU4OC0yLjkzMDE3SDczNS45OGEyLjAwOTg4LDIuMDA5ODgsMCwwLDAtMS45NTIxNSwxLjU2MjVMNjY4Ljg1NCw0OTUuMTc5NDZhMS45OTkzMiwxLjk5OTMyLDAsMCwwLDEuODU0LDIuNDMzNTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNzEzLjIyOTUsNTI5LjUzNDkzYS45OTgyNi45OTgyNiwwLDAsMC0uOTcyNjUuNzczNDRsLTIuMzIyNzYsOS45NTYwNWExLjAwMDI0LDEuMDAwMjQsMCwwLDAsLjkwMjg0LDEuMjI0NjFsMTMxLjIzLDkuMzI3MTVhMS4wMDkwNywxLjAwOTA3LDAsMCwwLDEuMDUyNzMtLjgwNjY0bDIuMjMzODktMTEuNTE4NTZhLjk5OTEuOTk5MSwwLDAsMC0uOTIxODgtMS4xODg0N0w3MTMuMjksNTI5LjUzNjg4QzcxMy4yNyw1MjkuNTM1OTEsNzEzLjI0OTUyLDUyOS41MzQ5Myw3MTMuMjI5NSw1MjkuNTM0OTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNODcyLjY2NTU0LDU4Ny44MDgzN2ExLjAwMzY2LDEuMDAzNjYsMCwwLDAsMS4wNTA3OC0uNzU3ODJsMi44NDM3NS0xMS41NDNhMS4wMDExLDEuMDAxMSwwLDAsMC0uOTAyMzQtMS4yMzczMWwtMTY3LjU4NTk0LTExLjcyMDdhLjk4ODgxLjk4ODgxLDAsMCwwLTEuMDI4ODEuNzEyODlsLTIuOTU1MDgsOS45NzQ2MWEuOTk4NTguOTk4NTgsMCwwLDAsLjg3ODQyLDEuMjgwMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNODYzLjY2NTU0LDYyNC44MDgzN2ExLDEsMCwwLDAsMS4wNTA3OC0uNzU3ODJsMi44NDM3NS0xMS41NDNhMS4wMDExLDEuMDAxMSwwLDAsMC0uOTAyMzQtMS4yMzczMWwtMTY3LjU4NTk0LTExLjcyMDdhLjk4ODY1Ljk4ODY1LDAsMCwwLTEuMDI4ODEuNzEyODlsLTIuOTU1MDgsOS45NzQ2MWEuOTk4NTguOTk4NTgsMCwwLDAsLjg3ODQyLDEuMjgwMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3LjA5OTEzIC0xMjQuNzY4NikiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNzg2LjQ4MTQ2LDY4OC4yODNhLjk4ODg3Ljk4ODg3LDAsMCwwLDEuMDY0NDUtLjc1MzkxbDYuMDEyNy0yNC4wNTA3OGExLjAwMDcxLDEuMDAwNzEsMCwwLDAtLjg4NjIzLTEuMjQwMjRsLTEwMi45MTYtOC42NTYyNWExLjAxODI3LDEuMDE4MjcsMCwwLDAtMS4wNjAwNi43NzkzbC01LjEyOTM5LDIzLjA4M2ExLjAwMSwxLjAwMSwwLDAsMCwuODgyODEsMS4yMTI4OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjcuMDk5MTMgLTEyNC43Njg2KSIgZmlsbD0iI2Y0MDA4OCIvPjwvc3ZnPg=="},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,c=function(e,t,a,i){var r=String(n(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Bl7J"),s=a("ezAz"),c=a("9eSz"),l=a.n(c),o=function(){var e=s.data;return r.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},M=a("IP2g"),u=a("wHSu"),d=a("8tEE");function N(){return r.a.createElement("section",{className:"hero",id:"about"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 justify-content-around"},r.a.createElement("div",{className:"col-lg-5 my-auto"},r.a.createElement("div",{className:"hero-introduction"},r.a.createElement("h1",null,r.a.createElement("span",{className:"wave"},"👋")),r.a.createElement("h1",null,"Hi. Hola. Bonjour."),r.a.createElement("p",null,"Nice to meet you! I am Goldy Mariz, and I write code for a living. Currently open for interesting collaborations!"),r.a.createElement("ul",{className:"list-group list-group-horizontal"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"mailto:gmlunesa@gmail.com"},r.a.createElement(M.a,{icon:u.d}))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"https://github.com/gmlunesa"},r.a.createElement(M.a,{icon:d.a}))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"https://linkedin.com/gmlunesa"},r.a.createElement(M.a,{icon:d.b}))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"https://twitter.com/gmlunesa"},r.a.createElement(M.a,{icon:d.c})))))),r.a.createElement("div",{className:"col-lg-4 my-auto"},r.a.createElement("div",{className:"hero-bio"},r.a.createElement("div",{className:"card shadow-sm mb-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"icon"},r.a.createElement(o,null)),r.a.createElement("h5",{className:"card-title"},"@gmlunesa"),r.a.createElement("h6",null,"📍 Cebu City ",r.a.createElement("br",null)),r.a.createElement("p",{className:"card-text"},"software engineer. imaginary astronaut."),r.a.createElement("a",{href:"https://twitter.com/gmlunesa",className:"follow-button btn btn-primary shadow-lg",target:"_blank"},"Follow"))))))))}var m=a("vrFN"),L=(a("tUrg"),a("fjrJ")),g=a("Wbzz");var j=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){return r.a.createElement(g.StaticQuery,{query:"4246024920",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"subsection"},r.a.createElement("h1",null,"What do I ",r.a.createElement("span",null,"do"),"?"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,"NCR Corporation"),r.a.createElement("h6",null,r.a.createElement(M.a,{icon:u.a,className:"mr-2"})," ","Software Engineer"),r.a.createElement("h6",null,r.a.createElement(M.a,{icon:u.b,className:"mr-2"})," ","Jul 2018 - Present")),r.a.createElement("div",{className:"card-text"},"◆ Wrote high quality source code using C++, C# and Microsoft scripting and GUI tools to reprogram, update, and add new features to complex NCR system applications.",r.a.createElement("br",null),"◆ Worked in a customer facing team, wherein interpersonal and communication skills are also utilized and refined.")))),r.a.createElement("div",{className:"subsection"}," ",r.a.createElement("h1",{className:"mt-5"},"What do I ",r.a.createElement("span",null,"know"),"?"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,"Languages")),r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","C"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","C++"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","C#"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","HTML"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Java"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Javascript"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Python")))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,"Workflows")),r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Agile"))))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,"Frameworks")),r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Node"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","React"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","GatsbyJS")))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,"Technologies")),r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Machine Learning"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Artificial Intelligence"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Robotic Process Automation"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Web Development"),r.a.createElement("div",{className:"card-item"},r.a.createElement(M.a,{icon:u.f,className:"mr-2 item-icon"})," ","Android Mobile Development"))))))),r.a.createElement("div",{className:"subsection"},r.a.createElement("h1",{className:"mt-5"},"What did I ",r.a.createElement("span",null,"study"),"?"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,"University of the Philippines Cebu"),r.a.createElement("h6",null,r.a.createElement(M.a,{icon:u.e,className:"mr-2"}),"Computer Science"),r.a.createElement("h6",null,r.a.createElement(M.a,{icon:u.g,className:"mr-2"})," ","Jun 2018")),r.a.createElement("div",{className:"card-text"},"I earned my Bachelor's Degree in Computer Science in University of the Philippines, with Cum Laude honors. For my undergraduate thesis, I wrote a study called Video Game Recommender System using Recurrent LSTM.")))),r.a.createElement("div",{className:"subsection"},r.a.createElement("h1",{className:"mt-5"},"What have I ",r.a.createElement("span",null,"experimented with"),"?"),r.a.createElement("div",{className:"row"},e.allProjectsJson.edges.map((function(e,t){var a=e.node;return r.a.createElement("div",{className:"col-lg-4",key:t},r.a.createElement("div",{className:"card mb-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,a.project),r.a.createElement("h6",null,r.a.createElement(M.a,{icon:u.c,className:"mr-2"}),a.language)),r.a.createElement("div",{className:"card-text"},a.description)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("a",{href:a.link,target:"_blank"},"View"))))})))))))},data:L})},i}(i.Component),T=a("WQw/");t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(m.a,{title:"Home"}),r.a.createElement(N,null),r.a.createElement(j,null),r.a.createElement(T.a,null))}},"WQw/":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var i=a("q1tI"),r=a.n(i),n=a("LrWj"),s=a.n(n);var c=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=i.prototype;return n.render=function(){var e=this.state.status;return r.a.createElement("section",{className:"contactform"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("span",{className:"ring mr-1"},"📱"),"Got any ideas? Let's talk!"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 my-auto"},r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/meqrkoep",method:"POST",id:"contactId"},r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("label",{htmlFor:"contactEmail"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"contactEmail","aria-describedby":"emailHelp",placeholder:"Please enter a valid email address.",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"contactMessage"},"Message"),r.a.createElement("textarea",{className:"form-control",form:"contactId",name:"message",id:"contactMessage",placeholder:"Any fun project ideas?"})),"SUCCESS"===e?r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Thank you for your message! I'll get back to you soon."):r.a.createElement("button",{className:"btn btn-xl shadow-sm"}," Let's talk!"),"ERROR"===e&&r.a.createElement("div",{className:"alert alert-danger mt-2",role:"alert"},"Uh oh! There was an error. Please refresh and we'll try again."))),r.a.createElement("div",{className:"col-lg-4 my-auto"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:s.a}))))))},n.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,i=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(i)},i}(i.Component)},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),c=a("9gX7"),l=a("SlkY"),o=a("CkkT"),M=a("aagx"),u=a("s5qY"),d=o(5),N=o(6),m=0,L=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},j=function(e,t){return d(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=j(this,e);if(t)return t[1]},has:function(e){return!!j(this,e)},set:function(e,t){var a=j(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=N(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var o=e((function(e,i){c(e,o,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=i&&l(i,a,e[n],e)}));return i(o.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?L(u(this,t)).delete(e):a&&M(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?L(u(this,t)).has(e):a&&M(a,this._i)}}),o},def:function(e,t,a){var i=r(n(t),!0);return!0===i?L(e).set(t,a):i[e._i]=a,e},ufstore:L}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},fjrJ:function(e){e.exports=JSON.parse('{"data":{"allProjectsJson":{"edges":[{"node":{"project":"fareye","link":"https://github.com/gmlunesa/fareye-static","description":"Reading adjusted for the near-sighted.","language":"NodeJS, TensorFlow"}},{"node":{"project":"Norde Chat","link":"https://github.com/gmlunesa/norde-chat","description":"Real time anonymous chatroom on the web.","language":"NodeJS, VueJS, Socket.io"}},{"node":{"project":"teezeepee","link":"https://github.com/gmlunesa/teezeepee","description":"Explore TCP connections through chat.","language":"Python"}},{"node":{"project":"Recyclopedia","link":"https://github.com/gmlunesa/Recyclopedia","description":"Android app to promote responsible waste management.","language":"Java, Android"}},{"node":{"project":"StudyUP","link":"https://github.com/gmlunesa/studyup","description":"Platform designed for students to share study materials.","language":"NodeJS, MongoDB"}}]}}}')},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-2594584dd2cb6cc6dea2.js.map