(window.wjp=window.wjp||[]).push([[591],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return s}));var i=n(9);const o={CITED:"cited",FOLLOWED:"followed",READ:"read",RECOMMENDED:"recommended",VIEWED:"viewed",DOWNLOADED:"downloaded"},r={MOST_MONTHLY:"most_monthly",MOST_WEEKLY:"most_weekly",SECOND_MOST_WEEKLY:"second_most_weekly",THIRD_MOST_WEEKLY:"third_most_weekly",MILESTONE:"milestone"},a={PUBLICATIONS:"publications",PROJECTS:"projects",QUESTIONS:"questions",ANSWERS:"answers",PROJECT_UPDATES:"projectUpdates",RESEARCH:"research",PREPRINTS:"preprints"},l={[i.b.TYPE_INSTITUTION]:i.b.TYPE_INSTITUTION,[i.b.TYPE_DEPARTMENT]:i.b.TYPE_DEPARTMENT,[i.b.TYPE_SCIENCE]:i.b.TYPE_SCIENCE,[i.b.TYPE_COUNTRY]:i.b.TYPE_COUNTRY},c={[i.b.TYPE_ACCOUNT]:i.b.TYPE_ACCOUNT,[i.b.TYPE_PUBLICATION]:i.b.TYPE_PUBLICATION,[i.b.TYPE_PROJECT]:i.b.TYPE_PROJECT,[i.b.TYPE_POST]:i.b.TYPE_POST,[i.b.TYPE_MESSAGE]:i.b.TYPE_MESSAGE};function s(e){return i.a.parse(e).type===i.b.TYPE_ACCOUNT}},1075:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(118);const o={"Aland Islands":!0,Bahamas:!0,"British Indian Ocean Territory":!0,"British Virgin Islands":!0,"Cayman Islands":!0,"Central African Republic":!0,"Cocos Islands":!0,Comoros:!0,"Cook Islands":!0,"Czech Republic":!0,"Democratic Republic of the Congo":!0,"Dominican Republic":!0,"Falkland Islands":!0,"Faroe Islands":!0,"French Southern Territories":!0,Gambia:!0,"Heard Island and McDonald Islands":!0,"Isle of Man":!0,"Marshall Islands":!0,Netherlands:!0,"Netherlands Antilles":!0,"Northern Mariana Islands":!0,Pitcairn:!0,"Pitcairn Islands":!0,"Republic of the Congo":!0,Seychelles:!0,"Solomon Islands":!0,"Turks and Caicos Islands":!0,"United Arab Emirates":!0,"United Kingdom":!0,"United States":!0,"United States Minor Outlying Islands":!0,"U.S. Virgin Islands":!0};function r(e){return Object(i.a)(o,e)}function a(e){return r(e)?`${function(e){return r(e)?!0===o[e]?"the":o[e]:""}(e)} ${e}`:e}},1160:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(636),a=n(648),l=n(608),c=n(0);let s;t.a=Object(o.withQuery)(Object(o.gql)(s||(s=(e=>e)`query PublicationItemDefaultFulltextAction($id: ID!) {
  publication(id: $id) {
    id
    isAuthor
    hasPermissionToRequestFullText
    viewerLinks {
      hasDownloadableOrInlineViewableLink
      __typename
    }
    ...ResearchActionDownload @embed
    ...ResearchActionAddFullText @embed
    ...ResearchActionRequestFullText @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>({isAuthor:null==e?void 0:e.isAuthor,hasPermissionToRequestFullText:null==e?void 0:e.hasPermissionToRequestFullText,hasDownloadableOrInlineViewableLink:null==e?void 0:e.viewerLinks.hasDownloadableOrInlineViewableLink})})(({id:e,context:t,hasDownloadableOrInlineViewableLink:n,hasPermissionToRequestFullText:o,isAuthor:s,milestones:u,uploadChannel:d,contentIntent:b})=>{const p={theme:"ghost",size:"s",type:"button"};return n?Object(c.jsx)(a.a,{publicationKey:e,RenderAsComponent:i.Button,renderedComponentProps:p,milestones:u,context:t,contentIntent:b}):s&&!n?Object(c.jsx)(r.a,{publicationKey:e,RenderAsComponent:i.Button,renderedComponentProps:p,uploadChannel:d,milestones:u,context:t}):o?Object(c.jsx)(l.a,{publicationKey:e,RenderAsComponent:i.Button,renderedComponentProps:p,milestones:u,context:t}):null})},1162:function(e,t,n){"use strict";(function(e){var i=n(12),o=n(1),r=n(5),a=n(7),l=n(15),c=n(14),s=n(663),u=n(702),d=n(0);let b;t.a=Object(a.a)(Object(i.connect)(),Object(r.withQuery)(Object(r.gql)(b||(b=(e=>e)`query ResearchSocialActions($id: ID!) {
  publication(id: $id) {
    id
    isAuthor
    ...ResearchActionRecommend @embed
    ...ResearchActionFollow @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>({isAuthor:null==e?void 0:e.isAuthor})}))(({id:t,milestones:i,context:r,isAuthor:a,dispatch:b})=>Object(d.jsxs)(o.ButtonGroup,{children:[!a&&Object(d.jsx)(u.a,{publicationKey:t,RenderAsComponent:o.Button,milestones:i,context:r,renderedComponentProps:{theme:"bare",size:"s",color:"black",type:"button"}},"like"),!a&&Object(d.jsx)(s.a,{publicationKey:t,RenderAsComponent:o.Button,milestones:i,context:r,renderedComponentProps:{theme:"bare",size:"s",color:"black",type:"button"}},"follow"),Object(d.jsx)(o.Button,{type:"button",theme:"bare",color:"black",onClick:()=>{Object(c.g)(null==i?void 0:i.share),b(Object(l.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:t,context:r},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))},children:Object(d.jsx)(o.Button.Label,{children:"Share"})})]}))}).call(this,n(58)(e))},1180:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return R})),n.d(t,"d",(function(){return w})),n.d(t,"a",(function(){return C}));var i=n(106),o=n(200),r=n.n(o);function a({interactionType:e}){switch(e){case i.b.CITED:return"cited";case i.b.FOLLOWED:return"followed";case i.b.READ:return"read";case i.b.RECOMMENDED:return"recommended";case i.b.VIEWED:return"viewed";case i.b.DOWNLOADED:return"downloaded"}return null}function l({interactionType:e}){switch(e){case i.b.CITED:return"citations";case i.b.FOLLOWED:return"followers";case i.b.READ:return"reads";case i.b.RECOMMENDED:return"recommendations";case i.b.VIEWED:return"views";case i.b.DOWNLOADED:return"downloads"}return null}var c=n(606);function s({pointOfView:e}){switch(e){case c.a.FIRST_PERSON:return"my";case c.a.SECOND_PERSON:return"your";case c.a.THIRD_PERSON:default:return"their"}}function u({accountFirstname:e,pointOfView:t}){return function({accountFirstname:e,pointOfView:t}){switch(t){case c.a.FIRST_PERSON:return"my";case c.a.SECOND_PERSON:return"your";case c.a.THIRD_PERSON:default:return e+"'s"}}({accountFirstname:e,pointOfView:t})}var d=n(16),b=n.n(d),p=n(9),h=n(28);function m({targetGroup:e}){switch(e){case i.e.PROJECTS:return"project";case i.e.QUESTIONS:return"question";case i.e.ANSWERS:return"answer";case i.e.PROJECT_UPDATES:return"project update";case i.e.RESEARCH:return"contribution";case i.e.PUBLICATIONS:return"research item";case i.e.PREPRINTS:return"preprint";default:return null}}function j(e){const{targetType:t,targetTypeName:n,targetGroup:i}=e;if(t===p.b.TYPE_ACCOUNT)return b.a.plural(m(e));if(t===p.b.TYPE_PUBLICATION&&n)return Object(h.C)(n);const o=i?m(e):null;return o||t}var O=n(34),y=n.n(O);function x({value:e}){return y()(e).format("0,0")}function _(e){return[r()(u(e)),j(e),"reached",x(e),l(e)].join(" ")}var T=n(1075);function f({domainKeyType:e,domainKeyName:t,pointOfView:n}){switch(e){case p.b.TYPE_SCIENCE:return"from "+t;case p.b.TYPE_COUNTRY:return"from "+Object(T.a)(t);case p.b.TYPE_INSTITUTION:return`from ${s({pointOfView:n})} institution`;case p.b.TYPE_DEPARTMENT:return`from ${s({pointOfView:n})} department`;default:return""}}function P(e){return e===i.d.SECOND_MOST_WEEKLY?"second":e===i.d.THIRD_MOST_WEEKLY?"third":""}function I(e){const t=j(e),n=function(e){const{targetType:t}=e;return t===p.b.TYPE_ACCOUNT?b.a.plural(m(e)):m(e)}(e),i=b.a.isSingular(t)?"was":"were",o=P(e.storyType)?["With",x(e),"new",l(e)+",",u(e),t,`${i} the ${P(e.storyType)}-most-${a(e)}`,n]:["With",x(e),"new",l(e)+",",u(e),t,i+" the most",a(e),n];return e.domainKeyType&&e.domainKeyName&&o.push(f(e)),o}function g(e){return I(e).join(" ")}function R(e){const{storyType:t}=e;switch(t){case i.d.MILESTONE:return _(e);case i.d.MOST_MONTHLY:case i.d.MOST_WEEKLY:case i.d.SECOND_MOST_WEEKLY:case i.d.THIRD_MOST_WEEKLY:return g(e);default:return null}}function w(e){const{storyType:t}=e;switch(t){case i.d.MILESTONE:return _(e);case i.d.MOST_MONTHLY:case i.d.MOST_WEEKLY:case i.d.SECOND_MOST_WEEKLY:case i.d.THIRD_MOST_WEEKLY:return function(e){const{storyType:t}=e,n=I(e);switch(t){case i.d.MOST_WEEKLY:case i.d.SECOND_MOST_WEEKLY:case i.d.THIRD_MOST_WEEKLY:n.push("last week");break;case i.d.MOST_MONTHLY:n.push("last month")}return n.join(" ")}(e);default:return null}}function C(e){const{storyType:t}=e;switch(t){case i.d.MOST_MONTHLY:case i.d.MOST_WEEKLY:case i.d.SECOND_MOST_WEEKLY:case i.d.THIRD_MOST_WEEKLY:return function(e){const t=P(e.storyType),n=[t?`${r()(t)}-most-${a(e)}`:"Most "+a(e)];if(e.domainKeyType&&e.domainKeyName)n.push(f(e));else{const{storyType:t}=e;switch(t){case i.d.MOST_WEEKLY:case i.d.SECOND_MOST_WEEKLY:case i.d.THIRD_MOST_WEEKLY:n.push("in the last week");break;case i.d.MOST_MONTHLY:n.push("int the last month")}}return n.join(" ")}(e);default:return null}}},1269:function(e,t,n){"use strict";var i=n(12),o=n(1),r=n(5),a=n(7),l=n(824),c=n(1160),s=n(1162),u=n(0);let d;t.a=Object(a.a)(Object(i.connect)(),Object(r.withQuery)(Object(r.gql)(d||(d=(e=>e)`query PublicationItemSocialBarGraphQL($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    ...PublicationItemDefaultFulltextAction @embed
    ...ResearchSocialActions @embed
    __typename
  }
  __typename
}
`))))(({publicationKey:e,context:t,milestones:n,uploadChannel:i,contentIntent:r})=>Object(u.jsxs)(l.a,{children:[Object(u.jsx)(l.a.Primary,{children:Object(u.jsx)(o.ButtonGroup,{children:Object(u.jsx)(c.a,{id:e,context:t,contentIntent:r,milestones:n,uploadChannel:i})})}),Object(u.jsx)(l.a.Secondary,{children:Object(u.jsx)(s.a,{id:e,context:t,milestones:n})})]}))},1270:function(e,t,n){"use strict";var i=n(5);let o,r,a,l=e=>e;Object(i.gql)(o||(o=l`fragment SuccessStoryData on SuccessStory {
  id
  account {
    id
    firstName
    __typename
  }
  value
  domain {
    ... on Science {
      id
      name
      __typename
    }
    ... on Institution {
      id
      name
      __typename
    }
    ... on Department {
      id
      name
      __typename
    }
    ... on Country {
      id
      name
      __typename
    }
    __typename
  }
  target {
    ... on Account {
      id
      __typename
    }
    ... on Message {
      id
      __typename
    }
    ... on Publication {
      id
      targetTypeName: type
      __typename
    }
    ... on Project {
      id
      __typename
    }
    ... on Post {
      id
      __typename
    }
    __typename
  }
  storyType
  interactionType
  targetGroup
  storyDate
  __typename
}
`)),Object(i.gql)(r||(r=l`fragment SucessStoryTargetTitle on SuccessStory {
  id
  target {
    ... on Message {
      id
      title
      body
      __typename
    }
    ... on Publication {
      id
      title
      type
      __typename
    }
    ... on Project {
      id
      title
      __typename
    }
    ... on Post {
      id
      title
      message {
        id
        title
        body
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),Object(i.gql)(a||(a=l`fragment SucessStoryTargetUrl on SuccessStory {
  id
  target {
    ... on Message {
      id
      url
      __typename
    }
    ... on Publication {
      id
      url
      __typename
    }
    ... on Project {
      id
      url
      __typename
    }
    ... on Post {
      id
      url
      __typename
    }
    __typename
  }
  __typename
}
`))},1356:function(e,t,n){"use strict";var i=n(9);t.a=function({successStory:e}){if(!e)return{};const{account:t,domain:n,target:o,value:r,storyType:a,interactionType:l,targetGroup:c,storyDate:s}=e;return{accountId:t?t.id:null,accountFirstname:t?t.firstName:"",domainKey:n&&n.id,targetId:o.id,value:r,storyType:a,interactionType:l,targetGroup:c,storyDate:s,domainKeyName:n&&n.name,domainKeyType:n&&i.a.parse(n.id).type,targetType:i.a.parse(o.id).type,targetTypeName:o.targetTypeName}}},2183:function(e,t,n){"use strict";function i(e,t){var n;return null!==(n=e&&t)&&void 0!==n&&n}n.d(t,"a",(function(){return i}))},2184:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(13),a=n(613),l=(n(2595),n(0));let c;t.a=Object(o.withQuery)(Object(o.gql)(c||(c=(e=>e)`query ProfilePublisherPublicationItemBrandingWithTooltip($id: ID!) {
  publication(id: $id) {
    id
    journal {
      id
      title
      description
      cooperationPartnerBrand {
        brandName
        __typename
      }
      __typename
    }
    cooperationPartnerBrand {
      logoImage {
        url
        alt
        __typename
      }
      __typename
    }
    publisherJournalInformation {
      id
      title
      websiteUrl
      issn
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>{var t,n,i,o,r;return{logoImage:null==e||null===(t=e.cooperationPartnerBrand)||void 0===t?void 0:t.logoImage,journalCooperationPartnerBrand:null==e||null===(n=e.journal)||void 0===n?void 0:n.cooperationPartnerBrand,journalTitle:null==e||null===(i=e.journal)||void 0===i?void 0:i.title,description:null==e||null===(o=e.journal)||void 0===o?void 0:o.description,issn:null==e||null===(r=e.publisherJournalInformation)||void 0===r?void 0:r.issn}}})(({logoImage:e,journalCooperationPartnerBrand:t,journalTitle:n,description:o,issn:c})=>{const s=`${Object(r.d)()}/journal/${c}`;return Object(l.jsx)(i.Tooltip,{mount:"div",spacing:"m",position:"above-left",className:"publisher-branding-tooltip",target:Object(l.jsxs)(i.Flex,{alignItems:"center",style:{marginBottom:5},children:[e?Object(l.jsx)(i.Flex.Item,{children:Object(l.jsx)("img",{src:null==e?void 0:e.url,alt:null==e?void 0:e.alt,style:{maxHeight:25,maxWidth:125}})}):null,Object(l.jsx)(i.Flex.Item,{children:Object(l.jsx)(i.Text,{children:n})})]}),children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(i.Flex,{className:"partner-branding-container",justifyContent:"space-between",children:[e?Object(l.jsx)(i.Flex.Item,{children:Object(l.jsx)("img",{src:null==e?void 0:e.url,alt:null==e?void 0:e.alt,className:"publisher-partner-brand-logo"})}):null,Object(l.jsx)(i.Flex.Item,{children:Object(l.jsx)(i.Text,{color:"green-700",className:"partner-branding-sponsored-text",children:"Sponsored"})})]}),Object(l.jsx)(a.a,{href:s,theme:"bare",children:Object(l.jsx)(i.Text,{size:"l",className:"partner-branding-tooltip-title",spacing:"xs",children:n})}),Object(l.jsx)(i.Text,{clamp:"3",spacing:"m",children:o}),Object(l.jsx)(a.a,{type:"button",href:s,theme:"ghost",size:"s",className:"partner-branding-tooltip-cta",children:"Find out more"}),(null==t?void 0:t.brandName)&&Object(l.jsxs)(i.Text,{size:"xs",color:"grey-500",children:[t.brandName," has made full-texts from this journal accessible on ResearchGate."]})]})})})},2595:function(e,t,n){},606:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={FIRST_PERSON:"firstPerson",SECOND_PERSON:"secondPerson",THIRD_PERSON:"thirdPerson"}},608:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(12),a=n(5),l=n(7),c=n(6),s=n(14),u=n(87),d=n(759),b=n(0);let p;class h extends o.Component{constructor(...e){super(...e),this.scoreGoals=()=>{const{milestones:e,postActionCallback:t}=this.props;let n=[];null==t||t(),null!=e&&e.requestFullText&&(Array.isArray(e.requestFullText)?n=e.requestFullText:n.push(e.requestFullText)),n.length>0&&Object(s.g)(n),null!=e&&e.requestFullTextIepl&&Object(u.a)(e.requestFullTextIepl)},this.componentRenderer=({label:e,didRequestFullText:t,onClick:n})=>{const{RenderAsComponent:o,renderedComponentProps:r}=this.props;return Object(b.jsx)(o,Object(i.a)(Object(i.a)({},r),{},{status:t?"disabled":"",onClick:n,children:e}))}}render(){const{publicationKey:e,context:t,disableModal:n}=this.props;return Object(b.jsx)(d.a,{id:e,context:t,onRequested:this.scoreGoals,isModalEnabled:!n,children:this.componentRenderer})}}h.displayName="ResearchActionRequestFullText";const m=Object(a.gql)(p||(p=(e=>e)`query ResearchActionRequestFullText($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    ...PublicationFulltextRequestAction @embed
    __typename
  }
  __typename
}
`));t.a=Object(l.a)(Object(c.u)(),Object(c.h)(({RenderAsComponent:e})=>e,!1),Object(a.withQuery)(m),Object(r.connect)())(h)},613:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),a=n(1),l=n(6512),c=n(328),s=n(5734),u=n(276),d=n(0);const b=["type","href","sourcePath","sourceContentId","referrerContentId","onClick"],p=e=>{let{type:t,href:n,sourcePath:p,sourceContentId:h,referrerContentId:m,onClick:j}=e,O=Object(o.a)(e,b);const y="button"===t?a.Button:a.Link,{source:x,sourceContentId:_,referrerContentId:T}=Object(r.useContext)(c.a),{scoreMilestones:f}=Object(r.useContext)(s.a);return Object(d.jsx)(y,Object(i.a)(Object(i.a)({href:n},O),{},{onClick:e=>{f(s.c.JournalClick),x&&(_||T)&&(e.currentTarget.href=Object(u.x)(n,x,_,T),Object(l.d)(l.a,{href:n,source:x,sourceContentId:_,referrerContentId:T})),null==j||j()}}))};p.defaultProps={type:"link"},t.a=p},636:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(12),a=n(5),l=n(161),c=n(7),s=n(6),u=n(15),d=n(14),b=n(28),p=n(0);let h;class m extends o.Component{constructor(...t){super(...t),this.handleAddFullText=()=>{const{dispatch:t,publicationKey:i,milestones:o,uploadChannel:r,publication:a,postActionCallback:c}=this.props;null==c||c(),t(Object(u.mountModal)(()=>Object(p.jsx)(l.a,{src:"modules/research/components/fulltextUploadFlow/FulltextUploadFlow",publicationKey:i,uploadChannel:r,enableCrossCheck:null==a?void 0:a.enableCrossCheck,resolveComponentInternalDoNotSetOrYouWillBeFired:()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(660)]).then(n.bind(null,1273)),hmrAccept:e.hot&&!1}))),o&&o.addFullText&&Object(d.g)(o.addFullText)}}render(){const{RenderAsComponent:e,renderedComponentProps:t,publication:n}=this.props,o=Object(b.y)(n.type).toLowerCase();return Object(p.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{onClick:this.handleAddFullText,children:"Add "+o}))}}m.displayName="ResearchActionAddFullText";const j=Object(a.gql)(h||(h=(e=>e)`query ResearchActionAddFullText($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    type
    enableCrossCheck: isFeatureFlagActive(featureName: "enableCrossCheckOnAddPublicFileFromPdpFlow")
    __typename
  }
  __typename
}
`));t.a=Object(c.a)(Object(s.u)(),Object(s.h)(({RenderAsComponent:e})=>e,!1),Object(r.connect)(),Object(a.withQuery)(j))(m)}).call(this,n(58)(e))},6415:function(e,t,n){},648:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(5),a=n(7),l=n(6),c=n(14),s=n(728),u=n(13),d=n(715),b=n(0);let p;class h extends o.Component{constructor(...e){super(...e),this.getExperimentDownloadGoals=()=>{const{milestones:e}=this.props;let t=[];if(null!=e&&e.download){const n=Object(c.f)(e.download);Array.isArray(n)?t=n:t.push(n)}return t},this.getExperimentData=()=>{const{milestones:e}=this.props,t=null!=e&&e.download?Object(c.d)(e.download):{};return Object(i.a)({},t)},this.addTrackingToDownloadUrl=e=>{var t;const{context:n,milestones:o,viewLinkParams:r,contentIntent:a}=this.props;let l=Object(s.a)(e,Object(c.e)(this.getExperimentDownloadGoals(),this.getExperimentData()));return n&&(l=Object(u.a)(l,Object(i.a)({origin:n},r))),null!=o&&null!==(t=o.download)&&void 0!==t&&t._iepl&&(l=Object(u.a)(l,{_iepl:o.download._iepl})),l=Object(d.c)(l,{contentIntent:a}),l=Object(u.b)(l),l},this.handleClick=e=>{var t,n;null===(t=(n=this.props).postActionCallback)||void 0===t||t.call(n),Object(u.c)(e)}}getDownloadUrl(){const{publication:e}=this.props;return this.isDownloadable()?this.addTrackingToDownloadUrl(e.viewerLinks.firstDownloadableOrInlineViewableLink.link.url.downloadUrl):null}isDownloadable(){var e,t,n,i;const{publication:o}=this.props;return null!==(e=null==o||null===(t=o.viewerLinks)||void 0===t||null===(n=t.firstDownloadableOrInlineViewableLink)||void 0===n||null===(i=n.linkVisitorAccess)||void 0===i?void 0:i.isDownloadable)&&void 0!==e&&e}render(){const{RenderAsComponent:e,renderedComponentProps:t,publication:n,viewLinkParams:o}=this.props;if(!this.isDownloadable()){const r=Object(u.a)(n.url,Object(i.a)({_fam:1},o));return Object(b.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{onClick:e=>{e.preventDefault(),this.handleClick(r)},href:r,children:"View access options"}))}const r=this.getDownloadUrl();return Object(b.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{onClick:e=>{e.preventDefault(),this.handleClick(r)},href:r,children:"Download"}))}}h.displayName="ResearchActionDownload",h.defaultProps={renderedComponentProps:{},viewLinkParams:{}};const m=Object(r.gql)(p||(p=(e=>e)`query ResearchActionDownload($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    url
    type
    isAuthor
    viewerLinks {
      firstDownloadableOrInlineViewableLink {
        link {
          id
          url {
            downloadUrl
            __typename
          }
          __typename
        }
        linkVisitorAccess {
          isDownloadable
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
`));t.a=Object(a.a)(Object(l.u)(),Object(l.h)(({RenderAsComponent:e})=>e,!1),Object(r.withQuery)(m))(h)},6512:function(e,t,n){"use strict";function i(e,t={}){try{var n;null===(n=posthog)||void 0===n||n.capture(e,t)}catch(e){}}n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));const o="journal link clicked",r="user profile link clicked",a="user followed"},6545:function(e,t,n){"use strict";n.r(t),function(e){var i=n(2),o=n(4),r=n(8),a=n.n(r),l=n(1),c=n(5),s=n(7),u=n(6),d=n(15),b=n(574),p=n(535),h=n(276),m=n(7363),j=n(0);let O;const y=new a.a("profile-highlights");class x extends o.Component{constructor(...t){super(...t),this.handleIconClick=()=>{const{dispatch:t,forceRefetch:i,accountId:o}=this.props;t(Object(d.mountAsyncModal)("profile.ProfileHighlightsPublicationModal.html",{accountRgKey:o},{onSave:i,modalProps:{width:"m"}},()=>n.e(592).then(n.bind(null,6513)),e.hot&&!1))},this.renderFeaturedResearchItems=()=>{const{featuredResearch:e}=this.props;return e.map((e,t)=>Object(j.jsx)(l.Stack.Item,{children:Object(j.jsx)(m.a,Object(i.a)({},e))},t))}}renderCardHeader(){const{isEditingAllowed:e}=this.props;return Object(j.jsxs)(b.a,{children:[Object(j.jsx)(b.a.Label,{children:"Featured research"}),e?Object(j.jsx)(b.a.Action,{icon:"pencil",onClick:this.handleIconClick,children:"Edit"}):null]})}render(){const{featuredResearch:e,viewAllUrl:t,publicationCount:n}=this.props;return e&&e.length?Object(j.jsx)(p.a,{source:h.l,children:Object(j.jsx)("div",Object(i.a)(Object(i.a)({},y()),{},{children:Object(j.jsxs)(l.Card,{spacing:"m",children:[Object(j.jsx)(l.Card.Header,{children:this.renderCardHeader()}),Object(j.jsx)(l.Card.Body,{children:Object(j.jsx)(l.Stack,{gutter:"xxl",spacing:"none",showDivider:!0,gutterOutside:!1,children:this.renderFeaturedResearchItems()})}),Object(j.jsx)(l.Card.Footer,{children:Object(j.jsxs)(l.Button,{type:"button",theme:"bare",width:"full",color:"grey",href:t,children:["View all research ",n>0&&`(${n})`]})})]})}))}):null}}x.displayName="ProfileFeaturedResearchItems",t.default=Object(s.a)(Object(u.b)(),Object(c.withQuery)(Object(c.gql)(O||(O=(e=>e)`query ProfileFeaturedResearchItems($accountId: ID!) {
  account(id: $accountId) {
    id
    publicationCount
    featuredResearch {
      ...ProfileFeaturedResearchItem
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{featuredResearch:e,publicationCount:t}})=>({featuredResearch:e,publicationCount:t})}))(x)}.call(this,n(58)(e))},663:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(12),a=n(1),l=n(5),c=n(33),s=n(7),u=n(6),d=n(11),b=n(15),p=n(14),h=n(87),m=n(674),j=n(675),O=n(28),y=n(0);let x;class _ extends o.Component{constructor(...t){super(...t),this.handleFollowToggle=()=>{const{context:e,dispatch:t,mutate:n,postActionCallback:i,publication:o,milestones:r,showShareAlert:a}=this.props;o.isFollowing?(n(Object(j.a)(o.id,e)).then(()=>t(Object(d.pushAlert)(()=>Object(y.jsx)(c.a,{title:"You are no longer following this research"})))),r&&r.unFollow&&Object(p.g)(r.unFollow)):(n(Object(m.a)(o.id,e)).then(()=>{t(Object(d.pushAlert)(()=>Object(y.jsx)(c.a,{title:"You are now following this research"}),"POST_FOLLOW_ALERT")),a&&this.showShareAlert()}),r&&r.follow&&Object(p.g)(r.follow),r&&r.followIepl&&Object(h.a)(r.followIepl)),i&&i()},this.handleAlertClick=()=>{const{dispatch:t}=this.props;t(Object(b.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:this.props.publicationKey,context:this.props.context+"_PostFollowAlert"},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1)),t(Object(d.pullAlert)("POST_FOLLOW_ALERT")),t(Object(d.pullAlert)("POST_FOLLOW_SHARE_ALERT"))},this.showShareAlert=()=>{const{dispatch:e,publication:t}=this.props,n=Object(O.G)(t.concreteType.name)?"these":"this",i=Object(O.B)(t.concreteType.name);e(Object(d.pushAlert)(()=>Object(y.jsx)(a.Alert,{title:"",description:`Would you like to share ${n} ${i} with someone you know?`,children:Object(y.jsx)(a.ButtonGroup,{children:Object(y.jsx)(a.Button,{type:"button",theme:"inverted",onClick:this.handleAlertClick,children:"Yes"})})}),"POST_FOLLOW_SHARE_ALERT"))}}getChildren(){const{publication:e,children:t,textFollow:n,textFollowing:i}=this.props;return t||(e.isFollowing?i:n)}render(){const{RenderAsComponent:e,renderedComponentProps:t}=this.props;return Object(y.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{onClick:this.handleFollowToggle,children:this.getChildren()}))}}_.displayName="ResearchActionFollow",_.defaultProps={textFollow:"Follow",textFollowing:"Following"},t.a=Object(s.a)(Object(u.u)(),Object(u.h)(({RenderAsComponent:e})=>e,!1),Object(l.withQuery)(Object(l.gql)(x||(x=(e=>e)`query ResearchActionFollow($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    isFollowing
    url
    concreteType {
      name
      __typename
    }
    isAuthor
    __typename
  }
  __typename
}
`))),Object(r.connect)())(_)}).call(this,n(58)(e))},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(5);let o,r=e=>e;const a=(e,t)=>({mutation:Object(i.gql)(o||(o=r`mutation FollowPublication($publicationId: ID!, $context: String!) {
  followPublication(id: $publicationId, context: $context) {
    id
    isFollowing
    __typename
  }
  __typename
}
`)),variables:{publicationId:e,context:t},optimisticResponse:{followPublication:{id:e,isFollowing:!0,__typename:"Publication"}}})},675:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(5);let o,r=e=>e;const a=(e,t)=>({mutation:Object(i.gql)(o||(o=r`mutation UnollowPublication($publicationId: ID!, $context: String!) {
  unfollowPublication(id: $publicationId, context: $context) {
    id
    isFollowing
    __typename
  }
  __typename
}
`)),variables:{publicationId:e,context:t},optimisticResponse:{unfollowPublication:{id:e,isFollowing:!1,__typename:"Publication"}}})},702:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(12),a=n(5),l=n(7),c=n(6),s=n(14),u=n(87),d=n(703),b=n(704),p=n(201),h=n(0);let m;class j extends o.Component{constructor(...e){super(...e),this.handleLikeToggle=()=>{const{context:e,dispatch:t,mutate:n,postActionCallback:i,publication:o,milestones:r}=this.props;o.hasLiked?n(Object(b.a)(o.id,o.likeCount,e)).then(()=>t(Object(p.b)("research",o.id))):n(Object(d.a)(o.id,o.likeCount,e)).then(()=>{t(Object(p.a)("research",o.id))}),i&&i(),r&&r.recommend&&Object(s.g)(r.recommend),r&&r.recommendIepl&&Object(u.a)(r.recommendIepl)}}getChildren(){const{children:e,publication:t,textLike:n,textLiked:i}=this.props;return e||(t.hasLiked?i:n)}render(){const{RenderAsComponent:e,renderedComponentProps:t}=this.props;return Object(h.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{onClick:this.handleLikeToggle,children:this.getChildren()}))}}j.displayName="ResearchActionRecommend",j.defaultProps={textLike:"Recommend",textLiked:"Recommended"},t.a=Object(l.a)(Object(c.u)(),Object(c.h)(({RenderAsComponent:e})=>e,!1),Object(a.withQuery)(Object(a.gql)(m||(m=(e=>e)`query ResearchActionRecommend($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    hasLiked
    likeCount
    url
    concreteType {
      name
      __typename
    }
    isAuthor
    __typename
  }
  __typename
}
`))),Object(r.connect)())(j)},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(5);let o,r=e=>e;const a=(e,t,n)=>({mutation:Object(i.gql)(o||(o=r`mutation LikePublication($publicationId: ID!, $context: String!) {
  likePublication(id: $publicationId, context: $context) {
    id
    hasLiked
    likeCount
    __typename
  }
  __typename
}
`)),variables:{publicationId:e,context:n},optimisticResponse:{likePublication:{id:e,hasLiked:!0,likeCount:t+1,__typename:"Publication"}}})},704:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(5);let o,r=e=>e;const a=(e,t,n)=>({mutation:Object(i.gql)(o||(o=r`mutation UnlikePublication($publicationId: ID!, $context: String!) {
  unlikePublication(id: $publicationId, context: $context) {
    id
    hasLiked
    likeCount
    __typename
  }
  __typename
}
`)),variables:{publicationId:e,context:n},optimisticResponse:{unlikePublication:{id:e,hasLiked:!1,likeCount:t>0?t-1:0,__typename:"Publication"}}})},715:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));var i=n(2),o=n(4),r=n.n(o),a=(n(91),n(13)),l=n(0);const c=(e,t,{contentIntent:n})=>{return Object(a.a)(e,{_rtd:(o=Object(i.a)(Object(i.a)({},t),{},{contentIntent:n}),btoa(JSON.stringify(o)))});var o},s=(e,{contentIntent:t})=>c(e,{},{contentIntent:t});class u{constructor(){this.data={}}prepareUrl(e,{contentIntent:t}){return c(e,this.data,{contentIntent:t})}}const d=r.a.createContext(null),b=({children:e})=>Object(l.jsx)(d.Provider,{value:new u,children:e})},728:function(e,t,n){"use strict";var i=n(2),o=n(13),r=n(14);t.a=(e,t,{viewIds:n,context:a,experimentData:l}={})=>(e=Object(o.a)(e,t),a&&(e=Object(o.a)(e,{_esc:a})),l&&(e=Object(o.a)(e,Object(r.c)(Object(i.a)({},l)))),n&&(e=Object(o.a)(e,{_viewIds:Array.isArray(n)?n:[n]})),e)},7363:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),a=n.n(r),l=n(1),c=n(5),s=n(7),u=n(6),d=n(1356),b=n(606),p=n(1180),h=(n(1270),n(0));let m;var j=Object(s.a)(Object(c.withQuery)(Object(c.gql)(m||(m=(e=>e)`query ProfileFeaturedResearchItemSuccessStoryQualifier($id: ID!) {
  successStory(id: $id) {
    id
    ...SuccessStoryData
    __typename
  }
  __typename
}
`)),{mapDataToProps:d.a}),Object(u.u)(({accountId:e,currentAccountId:t})=>({pointOfView:e===t?b.a.SECOND_PERSON:b.a.THIRD_PERSON})))(e=>Object(h.jsx)("span",{children:Object(p.a)(e)}));var O=["MostReadWeekly","MostReadMonthly","MostCitedMonthly","MostRecommendedWeekly","MostRecommendedMonthly","MostReadSuccess","MostCitedSuccess"],y=n(14),x=n(69),_=n(2183),T=n(2184),f=n(1269),P=n(636),I=n(702),g=n(608),R=n(535),w=n(369),C=n(59),E=n(28);let v;var S=Object(s.a)(Object(u.h)(l.PublicationItem.Type),Object(c.withQuery)(Object(c.gql)(v||(v=(e=>e)`query PublicationItemLiteratureReviewOrType($id: ID!) {
  publication(id: $id) {
    id
    hasLiteratureReview
    concreteType {
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:{hasLiteratureReview:e,concreteType:{name:t}}})=>({hasLiteratureReview:e,name:t})}))(({name:e,hasLiteratureReview:t})=>Object(h.jsx)(l.PublicationItem.Type,{children:t?"Literature Review":Object(E.z)(e)})),A=n(276);let F;class D extends o.Component{getActions(){const e=[],{id:t,hasPublicFulltextsOrData:n,isAuthor:i,hasPermissionToRequestFullText:o,hasPermissionToLike:r,milestones:a}=this.props;return i&&!n&&e.push(Object(h.jsx)(P.a,{RenderAsComponent:l.PublicationItem.Action,renderedComponentProps:{priority:"tertiary"},publicationKey:t,uploadChannel:"profileOverview_featuredResearch",milestones:a},"addFullText")),o&&e.push(Object(h.jsx)(g.a,{RenderAsComponent:l.PublicationItem.Action,renderedComponentProps:{priority:"tertiary"},publicationKey:t,context:"profileOverview_publicationItems",milestones:a},"requestFullText")),r&&e.push(Object(h.jsx)(I.a,{RenderAsComponent:l.PublicationItem.Action,renderedComponentProps:{priority:"tertiary"},publicationKey:t,context:"profileOverview_publicationItems",milestones:a},"recommend")),e}getUrlParams(e){const{milestones:t}=this.props;return null!=t&&t[e]?Object(y.b)(t[e]):null}render(){const{id:e,isAuthor:t,showBrandedPublicationItem:n,milestones:i,GB8804EnableNewJournalCardProfileFeaturedResearch:o}=this.props;let r=Object(h.jsxs)(l.PublicationItem,{children:[Object(h.jsx)(C.q,{id:e,urlParams:this.getUrlParams("title")}),Object(h.jsx)(S,{id:e}),Object(h.jsx)(C.h,{id:e}),Object(h.jsx)(C.e,{id:e}),Object(h.jsx)(C.b,{id:e,context:x.q}),Object(h.jsx)(C.m,{id:e,urlParams:this.getUrlParams("preview")}),Object(h.jsxs)(l.PublicationItem.Metrics,{children:[Object(h.jsx)(C.k,{id:e,urlParams:this.getUrlParams("reads")}),Object(h.jsx)(C.j,{id:e,urlParams:this.getUrlParams("citations")}),Object(h.jsx)(C.l,{id:e})]}),t?Object(h.jsx)(l.PublicationItem.Actions,{children:this.getActions()}):null]});n&&(r=Object(h.jsxs)(l.Stack.Item,{children:[Object(h.jsx)(T.a,{id:e}),r]}));const a=Object(h.jsx)(R.a,{source:A.f,sourceContentId:e,children:Object(h.jsxs)(l.EntityItem,{children:[Object(h.jsx)(w.n,{id:e,urlParams:this.getUrlParams("title")}),Object(h.jsx)(w.c,{id:e}),Object(h.jsx)(w.e,{id:e,milestones:i,disableJournal:!0}),Object(h.jsx)(w.k,{id:e,urlParams:{}}),Object(h.jsx)(w.b,{id:e,context:x.q}),Object(h.jsx)(w.l,{id:e,urlParams:this.getUrlParams("preview")}),Object(h.jsxs)(l.EntityItemMetrics,{children:[Object(h.jsx)(w.h,{id:e}),Object(h.jsx)(w.i,{id:e}),Object(h.jsx)(w.j,{id:e})]}),t?Object(h.jsx)(l.EntityItemActions,{children:this.getActions()}):null]})});return t?o?a:r:Object(h.jsxs)(l.Stack,{gutter:"s",showDivider:!1,children:[Object(h.jsx)(l.Stack.Item,{children:o?a:r}),Object(h.jsx)(l.Stack.Item,{children:Object(h.jsx)(f.a,{publicationKey:e,context:"profileFeaturedResearchPublicationItem",uploadChannel:"profileOverview_featuredResearch",milestones:i})})]})}}D.displayName="ProfileFeaturedResearchPublicationItem";var k=Object(c.withQuery)(Object(c.gql)(F||(F=(e=>e)`query ProfileFeaturedResearchPublicationItem($id: ID!) {
  publication(id: $id) {
    id
    journal {
      id
      journalBrandingConfig {
        id
        isJournalBranded
        __typename
      }
      __typename
    }
    ...PublicationItemTitleLink @embed
    ...PublicationItemLiteratureReviewOrType @embed
    ...PublicationItemFulltext @embed
    ...PublicationItemDefaultMetaItems @embed
    ...PublicationItemMetricReads @embed
    ...PublicationItemMetaItemCitations @embed
    ...PublicationItemMetricRecommendations @embed
    ...PublicationItemAuthors @embed
    ...PublicationItemPreview @embed
    ...ResearchActionRecommend @embed
    ...ResearchActionAddFullText @embed
    ...ResearchActionRequestFullText @embed
    ...PublicationItemSocialBarGraphQL @embed
    hasPublicFulltextsOrData
    isAuthor
    hasPermissionToLike
    hasPermissionToRequestFullText
    GB8804EnableNewJournalCardProfileFeaturedResearch: isFeatureFlagActive(featureName: "GB8804EnableNewJournalCardProfileFeaturedResearch")
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>{var t,n;return{hasPublicFulltextsOrData:null==e?void 0:e.hasPublicFulltextsOrData,hasPermissionToLike:null==e?void 0:e.hasPermissionToLike,hasPermissionToRequestFullText:null==e?void 0:e.hasPermissionToRequestFullText,isAuthor:null==e?void 0:e.isAuthor,showBrandedPublicationItem:Object(_.a)(null==e?void 0:e.isAuthor,null==e||null===(t=e.journal)||void 0===t||null===(n=t.journalBrandingConfig)||void 0===n?void 0:n.isJournalBranded),GB8804EnableNewJournalCardProfileFeaturedResearch:e.GB8804EnableNewJournalCardProfileFeaturedResearch}}})(D);n(6415);let N;const L=new a.a("profile-highlights");class M extends o.Component{getPublicationQualifierText(){switch(this.props.type){case"MostReadWeekly":return"Most read in the last week";case"MostReadMonthly":return"Most read in the last month";case"MostCitedMonthly":return"Most cited in the last month";case"MostRecommendedWeekly":return"Most recommended in the last week";case"MostRecommendedMonthly":return"Most recommended in the last month";case"RecentlyRead":return"Recently read";default:return null}}hasMedal(){return-1!==O.indexOf(this.props.type)}getQualifierText(){return"Publication"===this.props.item.graphqlType?this.getPublicationQualifierText():"SuccessStory"===this.props.item.graphqlType?Object(h.jsx)(j,{id:this.props.item.id}):null}hasQualifier(){return Boolean(this.props.type)}getQualifier(){return Object(h.jsxs)(l.Text,{size:"m",color:"green-600",children:[this.hasMedal()&&Object(h.jsx)(l.Icon,Object(i.a)({size:"s",identifier:"badge"},L("icon"))),this.getQualifierText()]})}renderItem(){const{item:e,milestones:t}=this.props;return"Publication"===e.graphqlType?Object(h.jsx)(k,{id:e.id,milestones:t}):"SuccessStory"===e.graphqlType?Object(h.jsx)(k,{id:e.target.id,milestones:t}):Object(h.jsx)("div",{})}render(){return this.props.item?Object(h.jsx)("div",Object(i.a)(Object(i.a)({},L("item")),{},{children:Object(h.jsx)(l.Pack,{width:"full",gutter:"m",verticalAlign:"middle",children:Object(h.jsx)(l.Pack.Item,{width:"full",children:Object(h.jsxs)(l.Stack,{gutter:"s",children:[this.hasQualifier()?Object(h.jsx)(l.Stack.Item,{children:this.getQualifier()}):null,Object(h.jsx)(l.Stack.Item,{children:this.renderItem()})]})})})})):null}}M.displayName="ProfileFeaturedResearchItem",Object(c.gql)(N||(N=(e=>e)`fragment ProfileFeaturedResearchItem on FeaturedResearch {
  type
  item {
    ... on Publication {
      id
      ...ProfileFeaturedResearchPublicationItem @embed
      __typename
    }
    ... on SuccessStory {
      id
      ...ProfileFeaturedResearchItemSuccessStoryQualifier @embed
      target {
        ... on Publication {
          id
          ...ProfileFeaturedResearchPublicationItem @embed
          __typename
        }
        __typename
      }
      __typename
    }
    graphqlType: __typename
    __typename
  }
  __typename
}
`));t.a=M},753:function(e,t,n){"use strict";(function(e){var i=n(12),o=n(9),r=n(5),a=n(33),l=n(7),c=n(6),s=n(11),u=n(15),d=n(760),b=n(28),p=n(0);let h;t.a=Object(l.a)(Object(i.connect)(),Object(r.withQuery)(Object(r.gql)(h||(h=(e=>e)`query PublicationFulltextRequestAction($id: ID!) {
  publication(id: $id) {
    id
    didRequestFullText
    hasPermissionToRequestFullText
    hasReceivedFulltextOrData
    concreteType {
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>{var t;return{didRequestFullText:null==e?void 0:e.didRequestFullText,hasPermissionToRequestFullText:null==e?void 0:e.hasPermissionToRequestFullText,hasReceivedFulltextOrData:null==e?void 0:e.hasReceivedFulltextOrData,type:null==e||null===(t=e.concreteType)||void 0===t?void 0:t.name}}}),Object(c.c)({isModalEnabled:!0}),Object(c.r)({onClick:({id:t,context:i,mutate:r,isModalEnabled:l,dispatch:c,onRequested:b})=>()=>{r(Object(d.a)(t,i)).then(()=>{c(l?Object(u.mountAsyncModal)("publication.PublicationFulltextRequestAddMessage.html",{entryChannel:i,publicationUid:o.a.parse(t).id},void 0,()=>n.e(639).then(n.bind(null,745)),e.hot&&!1):Object(s.pushAlert)(()=>Object(p.jsx)(a.a,{title:"Full-text requested",description:"We'll notify you when the author provides it."}))),b&&b()})}}))(({children:e,hasPermissionToRequestFullText:t,didRequestFullText:n,hasReceivedFulltextOrData:i,type:o,onClick:r})=>e({label:n?Object(b.y)(o)+" requested":"Request "+Object(b.y)(o,!0),hasPermissionToRequestFullText:t,didRequestFullText:n,hasReceivedFulltextOrData:i,onClick:n||!t?null:r}))}).call(this,n(58)(e))},759:function(e,t,n){"use strict";var i=n(753);n.d(t,"a",(function(){return i.a}))},760:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(5);let o,r=e=>e;const a=(e,t)=>({mutation:Object(i.gql)(o||(o=r`mutation RequestFullText($publicationId: ID!, $context: String!) {
  requestFullText(id: $publicationId, context: $context) {
    id
    didRequestFullText
    __typename
  }
  __typename
}
`)),variables:{publicationId:e,context:t},optimisticResponse:{requestFullText:{id:e,didRequestFullText:!0,__typename:"Publication"}}})},824:function(e,t,n){"use strict";var i=n(1),o=n(77),r=n(3),a=n.n(r);const l=({children:e})=>e;l.propTypes={children:a.a.any.isRequired},l.role="PrimaryActions";var c=l;const s=({children:e})=>e;s.propTypes={children:a.a.any.isRequired},s.role="SecondaryActions";var u=s,d=n(0);var b=({children:e})=>{const t=Object(o.b)(e,c.role),n=Object(o.b)(e,u.role);return Object(d.jsxs)(i.Flex,{direction:{sUp:"column",mUp:"row"},gutter:"s",alignItems:{mUp:"center"},children:[Object(d.jsx)(i.Flex.Item,{grow:!0,children:t}),Object(d.jsx)(i.Flex.Item,{children:n})]})};b.Primary=c,b.Secondary=u;t.a=b},922:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(1),a=n(5),l=n(358),c=n(43),s=n(7),u=n(499),d=n(535),b=n(667),p=n(400),h=n(613),m=n(276),j=n(0);const O=["id","journalId","href","journalTitle","journalUrl","logoImage","description","textProps"],y=e=>{let{id:t,journalId:n,href:a,journalTitle:s,journalUrl:p,logoImage:y,description:x,textProps:_}=e,T=Object(o.a)(e,O);const f=Object(u.a)(l.a)===l.b.FOLLOW_JOURNAL_ENABLED,P=(e=>Object.keys(e).filter(e=>["color","didEnter","didLeave","elevation","initVisible","isResponsive","luminosity","mode","mount","offset","position","scope","showClose","spacing","willEnter","willLeave","children","className","target"].includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}))(T||{});return Object(j.jsx)(r.Tooltip,Object(i.a)(Object(i.a)({target:Object(j.jsx)(h.a,{type:"link",color:"inherit",href:a||p,children:Object(j.jsx)(r.Text,Object(i.a)(Object(i.a)({},_),{},{children:s}))})},P),{},{children:Object(j.jsx)(r.Tooltip.Body,{children:Object(j.jsx)(d.a,{source:m.a,sourceContentId:t,children:Object(j.jsxs)(r.Stack,{children:[Object(j.jsx)(r.Stack.Item,{children:y?Object(j.jsx)("img",{src:null==y?void 0:y.url,alt:null==y?void 0:y.alt,height:"25"}):null}),Object(j.jsx)(r.Stack.Item,{children:Object(j.jsx)(r.Text,{size:"l",children:Object(j.jsx)("strong",{children:s})})}),Object(j.jsx)(r.Stack.Item,{children:Object(j.jsx)(r.Text,{clamp:"3",children:x})}),Object(j.jsx)(r.Stack.Item,{children:Object(j.jsxs)(r.Flex,{alignItems:"center",children:[f?Object(j.jsx)(r.Flex.Item,{children:Object(j.jsx)(b.a,{id:n,copyFollow:Object(c.a)(()=>["Follow"]),copyUnfollow:Object(c.a)(()=>["Following"]),buttonProps:{theme:"ghost"}})}):null,Object(j.jsx)(r.Flex.Item,{children:Object(j.jsx)(h.a,{type:"button",theme:f?"bare":"ghost",href:a||p,children:Object(c.a)(()=>["Find out more"])})})]})})]})})})}))};y.defaultProps={textProps:{clamp:"1"},position:"below",offset:{left:0,top:-10},scope:"local"},t.a=Object(s.a)(Object(a.withQuery)(p.a,{mapDataToProps({publication:e}){var t,n,i,o,r,a;return{journalId:null==e||null===(t=e.journal)||void 0===t?void 0:t.id,journalTitle:null==e||null===(n=e.journal)||void 0===n?void 0:n.title,journalUrl:null==e||null===(i=e.journal)||void 0===i?void 0:i.url,description:null==e||null===(o=e.journal)||void 0===o?void 0:o.description,logoImage:null==e||null===(r=e.journal)||void 0===r||null===(a=r.cooperationPartnerBrand)||void 0===a?void 0:a.logoImage}}}))(y)}}]);