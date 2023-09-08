(window.wjp=window.wjp||[]).push([[251],{1056:function(e,t,r){},1554:function(e,t){e.exports=function(e){for(var t=-1,r=null==e?0:e.length,i=0,o=[];++t<r;){var n=e[t];n&&(o[i++]=n)}return o}},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r(4),o=r(0);const n=e=>e.reduce((e,t)=>Array.isArray(t)?e.concat(n(t)):e.concat(t),[]),a=e=>n(e.map(e=>"string"==typeof e?(e=>{const t=e.split("\n"),r=[];return t.forEach((e,i)=>{const n=/(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;let a,l=0;const c=[];for(;null!==(a=n.exec(e));){const[t,,r,,i]=a,n=a.index;n>l&&c.push(e.slice(l,n)),r?c.push(Object(o.jsx)("strong",{children:r})):i&&c.push(Object(o.jsx)("em",{children:i})),l=n+t.length}l<e.length&&c.push(e.slice(l)),i<t.length-1&&c.push(Object(o.jsx)("br",{})),r.push(...c)}),r})(e):e));function l(e,t){if("string"==typeof e)throw new Error("String identifier is not compiled!",e);let r=a(e(t));r=r.map((e,t)=>Object(i.isValidElement)(e)?Object(i.cloneElement)(e,{key:t}):e);return!r.every(e=>["string","number"].includes(typeof e))?Object(i.createElement)(i.Fragment,{},...r):r.join("")}},5574:function(e,t,r){},5575:function(e,t,r){},5576:function(e,t,r){},5755:function(e,t,r){"use strict";r.r(t);var i=r(5),o=r(43),n=r(724),a=r(7),l=r(6),c=r(13),s=r(2),d=r(1554),b=r.n(d),j=r(4),O=r(8),p=r.n(O),u=r(1),h=IMAGES_STATIC_URL+"m/47272855407473/images/appstore/iOsCta.svg",m=(r(5574),r(0));const g=new p.a("rg-initials"),f=({clearspace:e})=>Object(m.jsx)("div",Object(s.a)(Object(s.a)({},g("",{clearspace:e})),{},{children:Object(m.jsx)("svg",Object(s.a)(Object(s.a)({viewBox:"0 0 191 207",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("svg")),{},{children:Object(m.jsx)("use",{href:"/images/trademarks/researchgate.svg#initials"})}))}));f.defaultProps={clearspace:!1};r(5575);const x=new p.a("rg-logo"),v=({clearspace:e})=>Object(m.jsx)("div",Object(s.a)(Object(s.a)({},x("",{clearspace:e})),{},{children:Object(m.jsx)("svg",Object(s.a)(Object(s.a)({viewBox:"0 0 961 124",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x("svg")),{},{children:Object(m.jsx)("use",{href:"/images/trademarks/researchgate.svg#logo"})}))}));v.defaultProps={clearspace:!1};var U=r(856),w=r(855);r(5576);const _=new p.a("page-footer"),y=({year:e,columns:t,links:r})=>{const i=Object(j.useMemo)(()=>r.filter(e=>"legal"===e.position),[r]),o=Object(j.useMemo)(()=>r.find(e=>"iosstore"===e.position),[r]),n=Object(j.useMemo)(()=>{const e=r.find(e=>"facebook"===e.position),t=r.find(e=>"linkedin"===e.position),i=r.find(e=>"twitter"===e.position),o=r.find(e=>"instagram"===e.position);return b()([t,i,e,o])},[r]);return Object(m.jsxs)("footer",Object(s.a)(Object(s.a)({},_()),{},{children:[Object(m.jsxs)("div",Object(s.a)(Object(s.a)({},_("content")),{},{children:[Object(m.jsxs)("div",Object(s.a)(Object(s.a)({},_("trademarks")),{},{children:[Object(m.jsx)("div",Object(s.a)(Object(s.a)({},_("logo")),{},{children:Object(m.jsx)(v,{})})),Object(m.jsx)("div",Object(s.a)(Object(s.a)({},_("initials")),{},{children:Object(m.jsx)(f,{})}))]})),Object(m.jsx)("div",Object(s.a)(Object(s.a)({},_("columns")),{},{children:t.map(e=>{const t=r.filter(t=>t.position===e.position);return t.length?Object(m.jsxs)("div",Object(s.a)(Object(s.a)({},_("column")),{},{children:[Object(m.jsx)(u.Text,Object(s.a)(Object(s.a)({tag:"h3"},_("column-title")),{},{children:e.label})),Object(m.jsx)("ul",Object(s.a)(Object(s.a)({},_("list")),{},{children:t.map(({id:e,href:t,label:r,props:i={}})=>Object(m.jsx)("li",Object(s.a)(Object(s.a)({},_("list-item")),{},{children:Object(m.jsx)(u.Link,Object(s.a)(Object(s.a)(Object(s.a)({theme:"bare",href:t},_("column-link")),i),{},{children:Object(m.jsx)(u.Text,{children:r})}))}),e))}))]}),e.id):null})})),Object(m.jsxs)("div",Object(s.a)(Object(s.a)({},_("social-stuff")),{},{children:[Object(m.jsxs)("ul",Object(s.a)(Object(s.a)({},_("store-button-list")),{},{children:[o&&Object(m.jsx)("li",Object(s.a)(Object(s.a)({},_("store-button-list-item")),{},{children:Object(m.jsx)(u.Link,{"aria-label":o.label,theme:"bare",href:o.href,target:"_blank",rel:"noopener",children:Object(m.jsx)("img",{src:h,alt:""})})})),Object(m.jsx)("li",Object(s.a)(Object(s.a)({},_("store-button-list-item")),{},{children:Object(m.jsx)(U.a,{context:w.a.DEFAULT_FOOTER,size:"responsive"})}))]})),Object(m.jsx)("ul",Object(s.a)(Object(s.a)({},_("social-button-list")),{},{children:n.map(e=>Object(m.jsx)("li",{children:Object(m.jsx)(u.Link,{theme:"bare",href:e.href,target:"_blank",rel:"noopener","aria-label":e.label,children:Object(m.jsx)(u.Icon,{identifier:"social-"+e.position})})},e.id))}))]}))]})),Object(m.jsxs)("div",Object(s.a)(Object(s.a)({},_("content-meta")),{},{children:[Object(m.jsx)("div",Object(s.a)(Object(s.a)({},_("divider")),{},{children:Object(m.jsx)(u.Divider,{})})),Object(m.jsxs)("div",Object(s.a)(Object(s.a)({},_("legal-stuff")),{},{children:[Object(m.jsxs)("small",Object(s.a)(Object(s.a)({},_("fine-print")),{},{children:[Object(m.jsx)("div",{style:{display:"inline-block",width:"1em"},children:Object(m.jsx)(f,{})})," © 2008 - ",e," ResearchGate GmbH. All rights reserved."]})),Object(m.jsx)("ol",Object(s.a)(Object(s.a)({},_("legal-link-list")),{},{children:i.map(e=>Object(m.jsx)("li",{children:Object(m.jsx)(u.Link,Object(s.a)(Object(s.a)({href:e.href,theme:"bare"},_("legal-link")),{},{children:e.label}))},e.id))}))]}))]}))]}))};let k;var A=Object(a.a)(Object(l.b)(),Object(i.withQuery)(Object(i.gql)(k||(k=(e=>e)`query DefaultFooter {
  viewer {
    account {
      id
      __typename
    }
    ...AndroidAppDownload @embed(context: DEFAULT_FOOTER)
    __typename
  }
  urlGenerator {
    aboutUsUrl
    careersOverviewUrl
    companyNewsUrl
    contactUsUrl
    helpCenterUrl
    marketingNewsUrl
    recruiterLandingPageUrl
    termsAndServiceUrl
    privacyPolicyUrl
    copyrightIpPolicyUrl
    imprintUrl
    loggedInFooterIOSUrl: appRecruitmentTrackingUrl(channel: FOOTER_DEFAULT)
    loggedOutFooterIOSUrl: appRecruitmentTrackingUrl(channel: FOOTER_LOGGED_OUT)
    publisherSolutionsUrl
    researchGateTwitterUrl
    researchGateLinkedInUrl
    researchGateFacebookUrl
    researchGateInstagramUrl
    productUpdatesUrl
    mobileApp {
      androidFooter: androidDownloadUrl(useCase: FOOTER)
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({viewer:e,urlGenerator:t})=>{var r;return{isLoggedIn:!(null==e||null===(r=e.account)||void 0===r||!r.id),urlGenerator:t}}}))(e=>{const{year:t,urlGenerator:r,isLoggedIn:i}=e,a=e=>Object(c.a)(e,{utm_source:"researchgate",utm_medium:i?"community-loggedin":"community-loggedout",utm_campaign:"footer"}),l=[{id:1,order:1,label:Object(o.a)(()=>["Company"]),position:"column-1"},{id:2,order:2,label:Object(o.a)(()=>["Resources"]),position:"column-2"},{id:3,order:3,label:Object(o.a)(()=>["Business Solutions"]),position:"column-3"}],s=[{id:1,order:1,position:"column-1",label:Object(o.a)(()=>["About us"]),href:a(r.aboutUsUrl)},{id:2,order:2,position:"column-1",label:Object(o.a)(()=>["Blog"]),href:a(r.companyNewsUrl)},{id:3,order:3,position:"column-1",label:Object(o.a)(()=>["Careers"]),href:a(r.careersOverviewUrl)},{id:4,order:4,position:"column-2",label:Object(o.a)(()=>["ResearchGate Updates"]),href:a(r.productUpdatesUrl)},{id:5,order:5,position:"column-2",label:Object(o.a)(()=>["Help Center"]),href:a(r.helpCenterUrl),props:{target:"_blank",rel:"noopener"}},{id:6,order:6,position:"column-2",label:Object(o.a)(()=>["Contact us"]),href:a(r.contactUsUrl),props:{target:"_blank",rel:"noopener"}},{id:7,order:7,position:"column-3",label:Object(o.a)(()=>["Marketing Solutions"]),href:a(r.marketingNewsUrl)},{id:8,order:8,position:"column-3",label:Object(o.a)(()=>["Scientific Recruitment"]),href:a(r.recruiterLandingPageUrl)},{id:8.5,order:8.5,position:"column-3",label:Object(o.a)(()=>["Publisher Solutions"]),href:a(r.publisherSolutionsUrl)},{id:9,order:9,position:"legal",label:Object(o.a)(()=>["Terms"]),href:a(r.termsAndServiceUrl),props:{id:"footer-terms"}},{id:10,order:10,position:"legal",label:Object(o.a)(()=>["Privacy"]),href:a(r.privacyPolicyUrl),props:{id:"footer-privacy"}},{id:11,order:11,position:"legal",label:Object(o.a)(()=>["Copyright"]),href:a(r.copyrightIpPolicyUrl),props:{id:"footer-ip-policy"}},{id:12,order:12,position:"legal",label:Object(o.a)(()=>["Imprint"]),href:a(r.imprintUrl),props:{id:"footer-imprint"}},{id:13,order:13,position:"iosstore",label:"Download iOS App",href:null==r?void 0:r.loggedInFooterIOSUrl},{id:13,order:13,position:"playstore",label:"Download Android App",href:r.mobileApp.androidFooter},{id:14,order:14,position:"facebook",label:"ResearchGate Facebook",href:r.researchGateFacebookUrl},{id:15,order:15,position:"twitter",label:"ResearchGate Twitter",href:r.researchGateTwitterUrl},{id:16,order:16,position:"linkedin",label:"ResearchGate Linkedin",href:r.researchGateLinkedInUrl},{id:17,order:17,position:"instagram",label:"ResearchGate Instagram",href:r.researchGateInstagramUrl}];return Object(m.jsx)(n.a,{children:Object(m.jsx)(y,{year:t,columns:l,links:s})})}),G=r(25);window["renderReact_application/DefaultFooter"]=function(e){Object(G.renderForClient)(A,e)}},855:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));const i={DEFAULT_FOOTER:"DEFAULT_FOOTER",GLOBAL_FOOTER_LOGGED_OUT:"GLOBAL_FOOTER_LOGGED_OUT",SIDEBAR_FOOTER:"SIDEBAR_FOOTER"}},856:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(2),o=r(8),n=r.n(o),a=r(1),l=IMAGES_STATIC_URL+"m/44490443524024/images/appstore/AndroidCta.svg",c=(r(1056),r(0));const s=new n.a("android-app-download-link"),d=({href:e,size:t})=>Object(c.jsx)("span",Object(i.a)(Object(i.a)({},s()),{},{children:Object(c.jsx)(a.Link,{href:e,theme:"bare","aria-label":"Download RG android app",className:"gtm-mobile-app-promo-cta",children:Object(c.jsx)("img",Object(i.a)({src:l,alt:"Get it on Google Play"},s("image","image-size-"+t)))})}));d.defaultProps={size:"m"};var b=d,j=r(5),O=r(146),p=r(14),u=r(13);let h;var m=Object(j.withQuery)(Object(j.gql)(h||(h=(e=>e)`query AndroidAppDownload($context: AndroidAppDownloadContextEnum!) {
  viewer {
    urlGenerator {
      mobileApp {
        androidFooter: androidDownloadUrl(useCase: FOOTER)
        __typename
      }
      __typename
    }
    experiments {
      mobileApp {
        androidDownload(context: $context) {
          goal
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({viewer:e})=>{var t,r,i,o,n;return{url:Object(u.a)(Object(O.a)(null==e||null===(t=e.urlGenerator)||void 0===t||null===(r=t.mobileApp)||void 0===r?void 0:r.androidFooter,!0),Object(p.b)(null==e||null===(i=e.experiments)||void 0===i||null===(o=i.mobileApp)||void 0===o||null===(n=o.androidDownload)||void 0===n?void 0:n.goal))}}})(({url:e,size:t})=>Object(c.jsx)(b,{href:e,size:t}))}},[[5755,1,2,0,3]]]);