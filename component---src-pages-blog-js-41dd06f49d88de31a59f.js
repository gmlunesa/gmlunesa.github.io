(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"BlogList",(function(){return i})),a.d(t,"Slider",(function(){return m}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),s=a("Bl7J"),o=a("vrFN"),c=a("zPM8"),i="1095029840",m=function(){var e=n.a.useState("1"),t=e[0],a=e[1],r=null;return"0"===t?r="👈":"1"===t?r="👍":"2"===t&&(r="👉"),n.a.createElement("div",null,n.a.createElement("h4",null,r)," ",n.a.createElement("input",{type:"range",step:"1",max:"2",min:"0",value:t,onChange:function(e){return a(e.target.value)}}))};t.default=function(e){var t=e.data;return n.a.createElement(s.a,null,n.a.createElement(o.a,{title:"Blog"}),n.a.createElement("section",{className:"blog"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Blog | My digital garden"),n.a.createElement("h4",{key:t.allMdx.totalCount},t.allMdx.totalCount," Posts")),n.a.createElement("div",null,t.allMdx.nodes.map((function(e){var t=e.frontmatter,a=e.fields,r=e.id;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Link,{to:a.slug,key:a.slug},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"col-8",key:r},t.title)))))}))),n.a.createElement(c.a,null))))}},zPM8:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),n=a.n(r);var l=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.render=function(){var e=this.state.status;return n.a.createElement("section",{className:"subscribeform"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"}," ",n.a.createElement("div",{className:"col-lg-6 col-md-6 col-s-12"},n.a.createElement("div",{className:"card shadow-sm"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",null,"Tech content to your inbox"),n.a.createElement("p",null,"Thank you for reading! Join my mailing list to be the first to read about my thoughts on the web."),n.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mleojznb",method:"POST",id:"contactId"},n.a.createElement("div",{className:"form-group mt-4"},n.a.createElement("input",{type:"text",name:"firstName",className:"form-control",id:"subscribeName","aria-describedby":"emailHelp",placeholder:"Your first name",required:!0})),n.a.createElement("div",{className:"form-group mt-2"},n.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"subscribeEmail","aria-describedby":"emailHelp",placeholder:"Your email address",required:!0})),"SUCCESS"===e?n.a.createElement("div",{className:"alert alert-success",role:"alert"},"Thank you for your message! I'll get back to you soon."):n.a.createElement("button",{className:"btn btn-xl shadow-sm"},"Subscribe"),"ERROR"===e&&n.a.createElement("div",{className:"alert alert-danger mt-2",role:"alert"},"Uh oh! There was an error. Please refresh and we'll try again.")),n.a.createElement("p",{className:"disclaimer"},"Strictly no spam. Unsubscribe anytime.")))))))},l.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,r=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},n.send(r)},r}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-js-41dd06f49d88de31a59f.js.map