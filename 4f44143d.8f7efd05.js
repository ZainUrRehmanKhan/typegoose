(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||i;return n?a.a.createElement(u,s(s({ref:t},l),{},{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(133)),c={id:"model-options",title:"Model Options"},s={unversionedId:"api/decorators/model-options",id:"api/decorators/model-options",isDocsHomePage:!1,title:"Model Options",description:"@modelOptions(options: object) is used for setting options like schema options, an existing connect and/or an existing Mongoose.",source:"@site/../docs/api/decorators/modelOptions.md",slug:"/api/decorators/model-options",permalink:"/typegoose/docs/api/decorators/model-options",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/modelOptions.md",version:"current",sidebar:"docs",previous:{title:"Array Prop",permalink:"/typegoose/docs/api/decorators/array-prop"},next:{title:"Hooks",permalink:"/typegoose/docs/api/decorators/hooks"}},r=[{value:"Options",id:"options",children:[{value:"schemaOptions",id:"schemaoptions",children:[]},{value:"existingConnection",id:"existingconnection",children:[]},{value:"existingMongoose",id:"existingmongoose",children:[]},{value:"options",id:"options-1",children:[]}]}],l={toc:r};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@modelOptions(options: object)")," is used for setting options like schema options, an existing connect and/or an existing Mongoose."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"schemaoptions"},"schemaOptions"),Object(i.b)("p",null,"Please check the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/guide.html#options"}),"Mongoose docs")," for more info about these options."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ schemaOptions: { collection: 'NotSomething' } })\nclass Something {}\n")),Object(i.b)("h3",{id:"existingconnection"},"existingConnection"),Object(i.b)("p",null,"An existing Mongoose connection can also be passed down. If given, Typegoose uses this Mongoose instance's ",Object(i.b)("inlineCode",{parentName:"p"},"model")," methods.",Object(i.b)("br",{parentName:"p"}),"\n","[UNTESTED]"),Object(i.b)("h3",{id:"existingmongoose"},"existingMongoose"),Object(i.b)("p",null,"An existing Mongoose instance can also be passed down. If given, Typegoose uses this Mongoose instance's ",Object(i.b)("inlineCode",{parentName:"p"},"model")," methods.",Object(i.b)("br",{parentName:"p"}),"\n","[UNTESTED]"),Object(i.b)("h3",{id:"options-1"},"options"),Object(i.b)("p",null,"Typegoose's custom options"),Object(i.b)("h4",{id:"customname"},"customName"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"customName")," can be used to set custom model names."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ options: { customName: 'Something' } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('Something');\n")),Object(i.b)("p",null,"You can generate more dynamic names, if ",Object(i.b)("inlineCode",{parentName:"p"},"customName")," is given a function. The parameter object of the ",Object(i.b)("inlineCode",{parentName:"p"},"modelOptions")," decorator is injected into the function for possible further use.  "),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({\n  schemaOptions: { collection: 'SomethingDifferent' },\n  options: {\n    automaticName: false,\n    customName: (options) => `${options.schemaOptions?.collection}_someSuffix`\n  }\n})\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('SomethingDifferent_someSuffix');\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a function is used, ",Object(i.b)("inlineCode",{parentName:"p"},"automaticName")," will be ignored. Also, if the function doesn't return a string, an error will be thrown."))),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"customName")," is used with ",Object(i.b)("inlineCode",{parentName:"p"},"automaticName"),", it will be a suffix of the class name."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),Object(i.b)("h4",{id:"automaticname"},"automaticName"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"automaticName")," can be used to automatically generate custom model names based on ",Object(i.b)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," or ",Object(i.b)("inlineCode",{parentName:"p"},"{ options: { customName } }"),Object(i.b)("br",{parentName:"p"}),"\n","-> ",Object(i.b)("inlineCode",{parentName:"p"},"customName")," will be prioritzed over ",Object(i.b)("inlineCode",{parentName:"p"},"collection"),Object(i.b)("br",{parentName:"p"}),"\n","-> if ",Object(i.b)("inlineCode",{parentName:"p"},"automaticName")," is true, ",Object(i.b)("inlineCode",{parentName:"p"},"customName")," will be a ",Object(i.b)("em",{parentName:"p"},"suffix")," of the base class name"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"// yes this is the same example as the one above\n@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'On request, this was made "opt-in" instead of "opt-out".'))),Object(i.b)("h4",{id:"allowmixed"},"allowMixed"),Object(i.b)("p",null,"Set this to a Severity you want."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ALLOW"),": allow the use and execution of ",Object(i.b)("inlineCode",{parentName:"li"},"mongoose.Schema.Types.Mixed"),", if the inferred type cannot be set otherwise"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WARN"),": ","[default]"," Warn for it in the logger, but still allow the use of it"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ERROR"),": Error out when it comes to it")),Object(i.b)("h4",{id:"runsyncindexes"},"runSyncIndexes"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"model.syncIndexes")," when model is finished compiling?"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Only run this while in development. It could cause race-conditions because ",Object(i.b)("inlineCode",{parentName:"p"},"getModelForClass")," is not async."))))}p.isMDXComponent=!0}}]);