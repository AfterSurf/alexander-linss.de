(()=>{var e={};e.id=21,e.ids=[21,660],e.modules={8480:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5415:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>f,getStaticPaths:()=>P,getStaticProps:()=>p,reportWebVitals:()=>b,routeModule:()=>v,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>g});var s=r(6957),n=r(6281),i=r(8480),a=r(2203),l=r.n(a),u=r(8671),o=r.n(u),c=r(1418);let d=(0,i.l)(c,"default"),p=(0,i.l)(c,"getStaticProps"),P=(0,i.l)(c,"getStaticPaths"),f=(0,i.l)(c,"getServerSideProps"),h=(0,i.l)(c,"config"),b=(0,i.l)(c,"reportWebVitals"),g=(0,i.l)(c,"unstable_getStaticProps"),x=(0,i.l)(c,"unstable_getStaticPaths"),m=(0,i.l)(c,"unstable_getStaticParams"),S=(0,i.l)(c,"unstable_getServerProps"),j=(0,i.l)(c,"unstable_getServerSideProps"),v=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/PRIVAT/Home",pathname:"/PRIVAT/Home",bundlePath:"",filename:""},components:{App:o(),Document:l()},userland:c})},2041:(e,t,r)=>{"use strict";r.d(t,{Y:()=>l});var s=r(6689),n=r.n(s);let i=e=>{let[t,r]=(0,s.useState)(!1),n=new IntersectionObserver(([e])=>r(e.isIntersecting),{threshold:[.25,.5,.75]});return(0,s.useEffect)(()=>(n.observe(e.current),()=>{n.disconnect()})),t};r(997);let a=n().createContext(),l=e=>{let t=(0,s.useRef)(null),{setActiveNavLinkId:r}=(0,s.useContext)(a),n=i(t);return(0,s.useEffect)(()=>{n&&r(e)},[n,r,e]),t}},1418:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(997);r(6689);var n=r(2041);r(4785);let i=()=>{let e=(0,n.Y)("Home");return s.jsx("section",{ref:e,id:"homeContainerPrivat",children:s.jsx("pre",{children:(0,s.jsxs)("div",{className:"homePrivatText",children:[(0,s.jsxs)("div",{children:[s.jsx("h4",{className:"aboutText",children:'"Learn the rules like a pro,'}),s.jsx("h4",{className:"aboutText",children:'so you can break them like an artist."'}),s.jsx("h4",{className:"aboutTextAutor",children:"- P. Picasso"})]}),s.jsx("p",{children:"Gesagt, getan."}),s.jsx("br",{}),s.jsx("p",{children:"Das Coden gibt Freiheiten, gleichzeitig zu Recht"}),s.jsx("p",{children:"etablierte Standards und best practices."}),s.jsx("p",{children:"Es gibt einem die M\xf6glichkeit etwas zu erschaffen."}),s.jsx("br",{}),s.jsx("p",{children:"Frontend bedeutet f\xfcr mich Technik + Design."})]})})})}},8671:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let s=r(9970),n=r(997),i=s._(r(6689)),a=r(8451);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,a.loadGetInitialProps)(t,r)}}class u extends i.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}u.origGetInitialProps=l,u.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4785:()=>{},6281:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[203],()=>r(5415));module.exports=s})();