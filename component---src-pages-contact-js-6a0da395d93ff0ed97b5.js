"use strict";(self.webpackChunkgmlunesa_github_io=self.webpackChunkgmlunesa_github_io||[]).push([[501],{2535:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(7294),r=a(2025),n=a(6439);var s=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"}))}));var c=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}))}));var m=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}))}));var o=e=>{let{status:t}=e;return l.createElement("div",{className:"flex mt-4 shadow gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-white dark:bg-gray-800 dark:text-gray-100 divide-gray-700"},l.createElement("div",{className:"flex flex-1 flex-col p-3 border-l-8 "+(t?"border-green-600":"border-red-600")},l.createElement("span",{className:"text-xl"},t?"Successfully sent!":"Oops! There was an error."),l.createElement("span",{className:"text-xs text-gray-600 dark:text-gray-400"},t?"Thank you for your message.":"Please try again later.")))};const i=()=>l.createElement("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),l.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}));var d=()=>{const{0:e,1:t}=(0,l.useState)(!1),{0:a,1:r}=(0,l.useState)(!1),{0:n,1:s}=(0,l.useState)(!1),{0:c,1:m}=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(!n)return void m(!1);m(!0);const e=setTimeout((()=>{m(!1),s(!1)}),5e3);return()=>clearTimeout(e)}),[a]),l.createElement("form",{className:"container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 dark:bg-gray-900 ng-untouched ng-pristine ng-valid",onSubmit:async e=>{e.preventDefault();const{name:a,email:l,message:n}=e.target.elements,c={name:a.value,email:l.value,message:n.value};t(!0);try{const e=await fetch("https://script.google.com/macros/s/AKfycbzTayu1Cd3Nz3xVClk6h_IcuLEp3pmc_jTf5xuTnB80Xwm15A81IFg5EgmrjBcmmkiaMQ/exec",{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(c)});if("OK"!==(await e.json()).status)throw new Error("Unsuccessful");t(!1),r(!0),s(!0)}catch(e){t(!1),r(!1),s(!0)}e.target.reset()}},l.createElement("h2",{className:"w-full text-3xl font-bold leading-tight"},"Get in touch"),l.createElement("div",null,l.createElement("label",{htmlFor:"name",className:"block mb-1 ml-1"},"Name"),l.createElement("input",{id:"name",name:"name",type:"text",placeholder:"Your name",required:!0,className:"block w-full p-2 rounded bg-gray-200 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 dark:bg-gray-800"})),l.createElement("div",null,l.createElement("label",{htmlFor:"email",className:"block mb-1 ml-1"},"Email"),l.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Your email",required:!0,className:"block w-full p-2 rounded bg-gray-200 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 dark:bg-gray-800"})),l.createElement("div",null,l.createElement("label",{htmlFor:"message",className:"block mb-1 ml-1"},"Message"),l.createElement("textarea",{id:"message",name:"message",type:"text",placeholder:"Write message here...",className:"block w-full p-2 rounded bg-gray-200 autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 dark:bg-gray-800"})),l.createElement("div",null,l.createElement("button",{type:"submit",className:"inline-flex justify-center w-full py-3 px-6 sm:mt-2 bg-rose-500 hover:bg-rose-400 dark:hover:bg-rose-600 focus:ring-rose-300 focus:ring-offset-rose-300 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ",disabled:e},e?l.createElement(i,null):"Send"),c&&l.createElement(o,{status:a})))};var u=()=>l.createElement("section",{className:"bg-white dark:bg-gray-800 py-20 px-4"},l.createElement("div",{className:"mx-auto max-w-6xl flex flex-col md:flex-row dark:text-white"},l.createElement("div",{className:"lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center"},l.createElement("div",{className:"lg:col-start-2 md:pl-20"},l.createElement("h2",{className:"text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9"},"Contact me for..."),l.createElement("ul",{className:"mt-10"},l.createElement("li",null,l.createElement("div",{className:"flex"},l.createElement("div",{className:"flex-shrink-0"},l.createElement("div",{className:"flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 rounded-md"},l.createElement(s,{className:"flex-shrink-0 h-6 w-6"}))),l.createElement("div",{className:"ml-4"},l.createElement("h5",{className:"text-lg font-bold leading-6 text-gray-900 dark:text-white"},"Project collaborations"),l.createElement("p",{className:"mt-1 text-base leading-6 text-gray-500 dark:text-gray-300"},"Work on exciting concepts")))),l.createElement("li",{className:"mt-10"},l.createElement("div",{className:"flex"},l.createElement("div",{className:"flex-shrink-0"},l.createElement("div",{className:"flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 rounded-md"},l.createElement(c,{className:"flex-shrink-0 h-6 w-6"}))),l.createElement("div",{className:"ml-4"},l.createElement("h5",{className:"text-lg font-bold leading-6 text-gray-900 dark:text-white"},"Code troubleshooting"),l.createElement("p",{className:"mt-1 text-base leading-6 text-gray-500 dark:text-gray-300"},"Investigate issues regarding my open-source projects")))),l.createElement("li",{className:"mt-10"},l.createElement("div",{className:"flex"},l.createElement("div",{className:"flex-shrink-0"},l.createElement("div",{className:"flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 rounded-md"},l.createElement(m,{className:"flex-shrink-0 h-6 w-6"}))),l.createElement("div",{className:"ml-4"},l.createElement("h5",{className:"text-lg font-bold leading-6 text-gray-900 dark:text-white"},"Career opportunities"),l.createElement("p",{className:"mt-1 text-base leading-6 text-gray-500 dark:text-gray-300"},"See if I'll be a great addition to your team!")))))),l.createElement("div",{className:"relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1"},l.createElement(d,null))))),g=a(2908);var f=()=>l.createElement(r.Z,null,l.createElement(n.Z,{title:"Contact | Goldy Mariz Lunesa"}),l.createElement(u,null),l.createElement(g.Z,null))},2908:function(e,t,a){var l=a(7294);t.Z=()=>l.createElement("section",{className:"bg-rose-50 dark:bg-gray-700 py-20 px-4"},l.createElement("div",{className:"mx-auto max-w-6xl flex flex-col md:flex-row dark:text-white"},l.createElement("h2",{className:"mr-8 mb-8 w-full md:w-1/3 text-3xl font-extrabold leading-9"},"Frequently-asked questions"),l.createElement("dl",{className:"w-full md:w-2/3"},l.createElement("dt",{className:"mb-4"},l.createElement("h3",{className:"text-xl font-semibold"},"What did you use to build this website?")),l.createElement("dd",{className:"mb-16"},l.createElement("p",null,"The current version of this website is built with the static site generator Gatsby, styled with Tailwind and hosted on Github Pages.")),l.createElement("dt",{className:"mb-4"},l.createElement("h3",{className:"text-xl font-semibold"},"What are you currently learning at the moment?")),l.createElement("dd",{className:"mb-16"},l.createElement("p",null,"I am currently learning Data Science and Machine Learning with Python! If you check my Github profile, you may see repositories of me playing with machine learning.")),l.createElement("dt",{className:"mb-4"},l.createElement("h3",{className:"text-xl font-semibold"},"What skills do you wish to improve on?")),l.createElement("dd",{className:"mb-16"},l.createElement("p",null,"I would like to improve on my frontend design skills! I have enrolled in a couple of courses that cover topics regarding the following:"),l.createElement("ul",{className:"list-disc list-inside ml-2 mt-2"},l.createElement("li",null,"Web design"),l.createElement("li",null,"User Interface (UI)"),l.createElement("li",null,"User Experience (UX)"))))))}}]);
//# sourceMappingURL=component---src-pages-contact-js-6a0da395d93ff0ed97b5.js.map