(()=>{var A={};A.id=791,A.ids=[791,660],A.modules={8480:(A,e)=>{"use strict";Object.defineProperty(e,"l",{enumerable:!0,get:function(){return function A(e,t){return t in e?e[t]:"then"in e&&"function"==typeof e.then?e.then(e=>A(e,t)):"function"==typeof e&&"default"===t?e:void 0}}})},4507:A=>{A.exports={aufgabenTitle:"Aufgabe_aufgabenTitle__EWmgg",aufgabenText:"Aufgabe_aufgabenText__1N_jM",aufgabenImage:"Aufgabe_aufgabenImage__C8Rna"}},3143:A=>{A.exports={frontText:"itStyles_frontText__HXcCu",marquee:"itStyles_marquee__8V2qf",socialmedia:"itStyles_socialmedia__rbVBB",projectImage:"itStyles_projectImage__FAjn0",projectText:"itStyles_projectText__uInuH",aufgaben:"itStyles_aufgaben__5QKyS"}},4066:(A,e,t)=>{"use strict";t.r(e),t.d(e,{config:()=>E,default:()=>o,getServerSideProps:()=>p,getStaticPaths:()=>d,getStaticProps:()=>c,reportWebVitals:()=>P,routeModule:()=>Q,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>f});var r=t(6957),a=t(6281),s=t(8480),i=t(2203),n=t.n(i),l=t(8671),u=t.n(l),g=t(5990);let o=(0,s.l)(g,"default"),c=(0,s.l)(g,"getStaticProps"),d=(0,s.l)(g,"getStaticPaths"),p=(0,s.l)(g,"getServerSideProps"),E=(0,s.l)(g,"config"),P=(0,s.l)(g,"reportWebVitals"),f=(0,s.l)(g,"unstable_getStaticProps"),h=(0,s.l)(g,"unstable_getStaticPaths"),b=(0,s.l)(g,"unstable_getStaticParams"),x=(0,s.l)(g,"unstable_getServerProps"),C=(0,s.l)(g,"unstable_getServerSideProps"),Q=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/IT/Projekte",pathname:"/IT/Projekte",bundlePath:"",filename:""},components:{App:u(),Document:n()},userland:g})},2041:(A,e,t)=>{"use strict";t.d(e,{Y:()=>n});var r=t(6689),a=t.n(r);let s=A=>{let[e,t]=(0,r.useState)(!1),a=new IntersectionObserver(([A])=>t(A.isIntersecting),{threshold:[.25,.5,.75]});return(0,r.useEffect)(()=>(a.observe(A.current),()=>{a.disconnect()})),e};t(997);let i=a().createContext(),n=A=>{let e=(0,r.useRef)(null),{setActiveNavLinkId:t}=(0,r.useContext)(i),a=s(e);return(0,r.useEffect)(()=>{a&&t(A)},[a,t,A]),e}},196:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});var r=t(997),a=t(4507),s=t.n(a);let i=A=>{let{title:e,description:t,img:a,link2project:i}=A;return(0,r.jsxs)("div",{children:[r.jsx("h1",{className:s().aufgabenTitle,children:e}),r.jsx("a",{href:i,target:"_blank",rel:"noreferrer",children:r.jsx("img",{className:s().aufgabenImage,src:a,alt:"symbolic"})}),r.jsx("p",{className:s().aufgabenText,children:t})]})}},5990:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var r=t(997);t(6689);var a=t(2041),s=t(3143),i=t.n(s);let n={src:"/_next/static/media/products.a3a78e50.jpg",height:3325,width:4e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsAN//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAASESMx/9oACAEBAAE/AKj2gi9JWRFG8gmPDN6Drn//xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIS/9oACAECAQE/AMFVBZ//xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIREv/aAAgBAwEBPwDttihP/9k=",blurWidth:8,blurHeight:7},l={src:"/_next/static/media/laptop.bf58509a.jpg",height:4480,width:6720,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAL8R/8QAHhAAAAQHAAAAAAAAAAAAAAAAAQMEIQACERIxUVL/2gAIAQEAAT8APQEKmOC6TnD7qEf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5},u={src:"/_next/static/media/heaven.8f8cb08e.jpg",height:2297,width:3445,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAgHb/xAAbEAABBAMAAAAAAAAAAAAAAAABAAIEEgMhQf/aAAgBAQABPwCVOc++SgbbgOgv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAECAQE/AFyf/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECAxIx/9oACAEDAQE/AJWpbD//2Q==",blurWidth:8,blurHeight:5};var g=t(196);let o=()=>{let A=(0,a.Y)("Projects");return r.jsx(r.Fragment,{children:(0,r.jsxs)("section",{ref:A,id:"projectsItContainer",children:[r.jsx("img",{src:u,alt:"unsplash-img",className:i().projectImage}),r.jsx("pre",{className:i().projectText,children:(0,r.jsxs)("div",{children:[r.jsx("h3",{children:"Projekt(e)"}),(0,r.jsxs)("div",{className:i().aufgaben,children:[r.jsx(g.default,{title:"Product Overview (react.js and graphQL)",description:"Style uns verschiedene Produkte, zeige sie nach Kategorien (responsive) an und mach die Artikel likeable ",img:n,link2project:"https://github.com/AfterSurf/SPARX"}),r.jsx(g.default,{title:"www.alexander-linss.de",description:"Hier das Repo zu dieser Website",img:l,link2project:"https://github.com/AfterSurf/alexander-linss.de"})]})]})})]})})}},8671:(A,e,t)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return l}});let r=t(9970),a=t(997),s=r._(t(6689)),i=t(8451);async function n(A){let{Component:e,ctx:t}=A;return{pageProps:await (0,i.loadGetInitialProps)(e,t)}}class l extends s.default.Component{render(){let{Component:A,pageProps:e}=this.props;return(0,a.jsx)(A,{...e})}}l.origGetInitialProps=n,l.getInitialProps=n,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),A.exports=e.default)},6281:(A,e)=>{"use strict";var t;Object.defineProperty(e,"x",{enumerable:!0,get:function(){return t}}),function(A){A.PAGES="PAGES",A.PAGES_API="PAGES_API",A.APP_PAGE="APP_PAGE",A.APP_ROUTE="APP_ROUTE"}(t||(t={}))},2785:A=>{"use strict";A.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:A=>{"use strict";A.exports=require("react")},997:A=>{"use strict";A.exports=require("react/jsx-runtime")},1017:A=>{"use strict";A.exports=require("path")}};var e=require("../../webpack-runtime.js");e.C(A);var t=A=>e(e.s=A),r=e.X(0,[203],()=>t(4066));module.exports=r})();