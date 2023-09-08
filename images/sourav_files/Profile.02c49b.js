(window.wjp=window.wjp||[]).push([[398,6,7,41,659,689],{1001:function(e,t){e.exports=function(e,t,n){for(var i=-1,o=e.length,r=t.length,s={};++i<o;){var a=i<r?t[i]:void 0;n(s,e[i],a)}return s}},1004:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(6),l=n(18),d=n(707),u=(n(1239),n(0));const p=new s.a("add-research-promo");class h extends o.Component{constructor(...e){super(...e),this.handleClose=()=>{Object(l.post)(this.props.hideUrl)}}render(){return Object(u.jsx)("div",Object(i.a)(Object(i.a)({},p()),{},{role:"complementary","aria-labelledby":"add-research-promo-heading",children:Object(u.jsx)(d.a,{closeable:!0,transition:"collapse",onClose:this.handleClose,color:"white",borderColor:"grey",size:!1,children:Object(u.jsxs)("div",Object(i.a)(Object(i.a)({},p("content")),{},{children:[Object(u.jsx)(a.Heading,{size:"xl",spacing:"s",id:"add-research-promo-heading",children:"Add unpublished research"}),Object(u.jsx)(a.Text,{size:"m",spacing:"m",children:"Start gaining visibility and citations for your unpublished work by adding research such as preprints, data, and experiment findings."}),Object(u.jsx)(a.Button,{type:"button",href:this.props.creationUrl,children:"Add research"})]}))})}))}}h.displayName="AddResearchPromo",t.a=Object(c.b)()(h)},1005:function(e,t,n){"use strict";var i=n(2),o=n(16),r=n.n(o),s=n(4),a=n(8),c=n.n(a),l=n(1),d=n(6),u=n(18),p=n(20),h=(n(1240),n(0));const b=new c.a("one-click-publishing-promo");class m extends s.Component{constructor(...e){super(...e),this.state={isVisible:!0},this.handleCloseOneClickPublishing=()=>{const{onRequestNext:e,hideUrl:t}=this.props;this.setState({isVisible:!1}),Object(u.post)(t).then(()=>{e&&e()}).catch(e=>{this.setState({isVisible:!0}),Object(p.default)(e)})}}render(){if(!this.state.isVisible)return null;const{publicationsCount:e,publicationTitle:t,publicationType:n}=this.props;return Object(h.jsx)("div",Object(i.a)(Object(i.a)({},b()),{},{children:Object(h.jsxs)(l.Card,{role:"complementary","aria-labelledby":"one-click-promo-heading",children:[Object(h.jsxs)(l.Text,{size:"m",id:"one-click-promo-heading",children:["We think we found your ",r()("full-text",e)," online"]}),Object(h.jsx)("hr",Object(i.a)({},b("line"))),Object(h.jsxs)(l.Text,{size:"m",spacing:"s",children:["Add your ",r()("full-text",e)," to your profile to get more reads and citations."]}),Object(h.jsxs)(l.MediaObject,{gutter:"xxs",verticalAlign:"top",children:[Object(h.jsx)(l.MediaObject.Item,{children:Object(h.jsx)(l.Badge,{color:"green",size:"m",luminosity:"high",radius:"m",children:n})}),Object(h.jsx)(l.MediaObject.Item,{width:"full",children:Object(h.jsx)(l.Text,{children:t})})]}),Object(h.jsxs)(l.ButtonGroup,Object(i.a)(Object(i.a)({},b("action-buttons")),{},{children:[Object(h.jsxs)(l.Button,{href:"go.OneClickUpload.html?ev=pub_promo_oneclick",theme:"ghost",size:"s",children:["View ",r()("full-text",e)]}),Object(h.jsx)(l.Button,{type:"button",theme:"bare",color:"grey",onClick:this.handleCloseOneClickPublishing,children:"Ask me later"})]}))]})}))}}m.displayName="OneClickPublishingRightColumnPromo",t.a=Object(d.b)()(m)},1006:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(6),l=n(15),d=n(29),u=n(18),p=n(1007),h=n(1008),b=(n(1243),n(0));const m=new s.a({name:"profile-completion-feed-promo"});class j extends o.Component{constructor(...t){super(...t),this.state={type:this.props.initialType},this.openDegreeDialog=()=>{this.props.dispatch(Object(l.mountAsyncModal)("profile.AddDegreeDialog.html",null,void 0,()=>n.e(583).then(n.bind(null,1816)),e.hot&&!1)).then(this.closePromo)},this.openPositionDialog=()=>{this.props.dispatch(Object(l.mountAsyncModal)("account.EditAffiliationModal.html",null,void 0,()=>Promise.all([n.e(0),n.e(3),n.e(7),n.e(17)]).then(n.bind(null,1129)),e.hot&&!1)).then(this.closePromo)},this.closePromo=()=>{Object(u.default)(this.props.widgetUrl,{method:"DELETE",query:{type:this.state.type}}).then(e=>{if(e&&e.result&&void 0!==e.result.type){const t=e.result.type;this.setState({type:t})}})},this.getDegreeForm=()=>Object(b.jsxs)(a.MediaObject,{verticalAlign:"top",children:[Object(b.jsx)(a.MediaObject.Item,{children:Object(b.jsx)("img",Object(i.a)({src:p.a},m("icon")))}),Object(b.jsxs)(a.MediaObject.Item,{width:"full",children:[Object(b.jsxs)(a.Text,{size:"m",children:[Object(b.jsx)("strong",{children:"Add your degree"}),Object(b.jsx)("br",{}),"to get better suggestions"]}),Object(b.jsxs)(a.ButtonGroup,Object(i.a)(Object(i.a)({},m("action-buttons")),{},{children:[Object(b.jsx)(a.Button,{type:"button",theme:"ghost",size:"s",onClick:this.openDegreeDialog,children:"Add your degree"}),Object(b.jsx)(a.Button,{type:"button",theme:"bare",color:"grey",onClick:this.closePromo,children:"Skip"})]}))]})]}),this.getPositionForm=()=>Object(b.jsxs)(a.MediaObject,{verticalAlign:"top",children:[Object(b.jsx)(a.MediaObject.Item,{children:Object(b.jsx)("img",Object(i.a)({src:h.a},m("icon")))}),Object(b.jsxs)(a.MediaObject.Item,{width:"full",children:[Object(b.jsxs)(a.Text,{size:"m",children:[Object(b.jsx)("strong",{children:"Add your current position"}),Object(b.jsx)("br",{}),"to get better suggestions"]}),Object(b.jsxs)(a.ButtonGroup,Object(i.a)(Object(i.a)({},m("action-buttons")),{},{children:[Object(b.jsx)(a.Button,{type:"button",theme:"ghost",size:"s",onClick:this.openPositionDialog,children:"Add your position"}),Object(b.jsx)(a.Button,{type:"button",theme:"bare",color:"grey",onClick:this.closePromo,children:"Skip"})]}))]})]})}componentDidUpdate(){["degree","position"].includes(this.state.type)||Object(d.b)(this.props.onRequestNext)}componentDidMount(){["degree","position"].includes(this.state.type)||Object(d.b)(this.props.onRequestNext)}render(){let e;switch(this.state.type){case"degree":e=this.getDegreeForm();break;case"position":e=this.getPositionForm()}return e?Object(b.jsxs)("div",Object(i.a)(Object(i.a)({},m()),{},{role:"complementary","aria-labelledby":"profile-completion-promo-heading",children:[Object(b.jsx)(a.Text,{size:"m",id:"profile-completion-promo-heading",children:"Update your profile"}),Object(b.jsx)("hr",Object(i.a)({},m("line"))),e]})):Object(b.jsx)("noscript",{})}}j.displayName="ProfileCompletionHomeFeedPromo",t.a=Object(c.b)()(j)}).call(this,n(58)(e))},1007:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/426518737901901/images/profile/degree.png"},1008:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/45092146861389/images/profile/position.png"},1009:function(e,t,n){"use strict";var i=n(2),o=n(16),r=n.n(o),s=n(4),a=n(8),c=n.n(a),l=n(9),d=n(1),u=n(80),p=n(6),h=n(11),b=n(15),m=n(29),j=n(18),f=n(14),O=n(20),g=n(0),x=()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(681)]).then(n.bind(null,1391));const y=new c.a("success-story-details-invitation-promo");class v extends s.Component{constructor(e){super(e),this.handleCheckboxChange=e=>{const t=e.currentTarget,n=new l.a(t.value,l.b.TYPE_AUTHOR).toString(),i=this.state.coauthors;i[n].isSelected=!i[n].isSelected,this.setState({coauthors:i})},this.handleRemoveSelectedCoauthors=()=>{const e=[];return Object.values(this.state.coauthors).forEach(t=>{t.isSelected&&e.push(t.authorUid)}),Object(j.default)(this.props.urlRemoveSelectedCoauthors,{method:"POST",body:{authorUids:e}}).then(({result:{removedAuthorUids:e}})=>{const t=this.state.coauthors;e.forEach(e=>{const n=new l.a(e,l.b.TYPE_AUTHOR).toString();delete t[n]}),this.setState({coauthors:t}),0===Object.values(this.state.coauthors).length&&this.props.onNoMoreSuggestions();let n="We will no longer suggest these co-authors for you to invite.";1===e.length&&(n="We will no longer suggest this co-author for you to invite."),this.props.dispatch(Object(h.pushAlert)(()=>Object(g.jsx)(d.Alert,{title:`${e.length} ${r()("suggestion",e.length)} removed`,description:n,color:"green"})))}).catch(e=>{Object(O.default)(e),this.props.dispatch(Object(h.pushAlert)(()=>Object(g.jsx)(d.Alert,{title:e.errors,description:"There was a problem removing these suggestions",color:"red"})))})},this.onInviteSelectedCoauthors=()=>{this.setState({inviteButtonStatus:"busy"});let e=null;const t=[],n=[],i=[];Object.values(this.state.coauthors).forEach(e=>{e.isSelected&&i.push(e.authorUid)}),i.forEach(i=>{n.push(new l.a(i,l.b.TYPE_AUTHOR).toString()),e?t.push(new l.a(i,l.b.TYPE_AUTHOR).toString()):e=new l.a(i,l.b.TYPE_AUTHOR)}),Object(f.a)(this.props.inviteSuggestedCoauthorsDialogSeen);const o={rgKeys:n,invitationContext:this.props.invitationContext};this.props.dispatch(Object(b.mountModal)(()=>Object(g.jsx)(u.a,{url:"share.AuthorsInviteDialog.html",widgetParams:o,renderPreloader:!1,onClose:()=>{this.props.dispatch(Object(b.unmountModal)()),this.setState({inviteButtonStatus:""})},onSuccess:()=>{this.props.dispatch(Object(b.unmountModal)()),this.setState({inviteButtonStatus:"",hasInvitedAuthors:!0})},__internalLoadComponent:x})))},this.state={coauthors:e.coauthors,inviteButtonStatus:"",hasInvitedAuthors:!1}}getHeaderCopy(){const e=Object(g.jsxs)(d.Heading,{size:"xl",spacing:"xs",children:[this.props.account.name,", you can increase the visibility of your work"]}),t=Object(g.jsx)(d.Text,Object(i.a)(Object(i.a)({},y("header-text")),{},{size:"m",spacing:"m",children:"Invite your co-authors to confirm their authorship on ResearchGate and boost the visibility of your mutual publications."}));return Object(g.jsxs)("div",{children:[e,t]})}getInviteButtonCopy(){let e=0;return Object.values(this.state.coauthors).forEach(t=>{t.isSelected&&e++}),null===e?Object(g.jsx)("span",{children:"Select co-authors to invite"}):Object(g.jsxs)("span",{children:["Invite ",e," ",r()("co-author",e)]})}getProfileImage(){return Object(g.jsx)(d.Pack.Item,{children:Object(g.jsx)("img",{src:this.props.account.imageUrl,width:"70",height:"70",className:"img-circle"})})}render(){if(this.state.hasInvitedAuthors)return Object(g.jsxs)(d.Card,{spacing:"xl",className:"thx-card",children:[Object(g.jsx)(d.Card.Body,{children:Object(g.jsx)(d.Pack,{verticalAlign:"middle",width:"full",children:Object(g.jsx)(d.Pack.Item,{children:Object(g.jsx)(d.Text,{size:"l",children:"Your invitations are on the way. Thank you!"})})})}),Object(g.jsx)(d.Card.Footer,{children:Object(g.jsxs)(d.ButtonGroup,{children:[Object(g.jsx)(d.Button,{href:this.props.viewMoreCoauthorsUrl,theme:"ghost",type:"button",children:"View more co-authors"}),Object(g.jsx)(d.Button,{onClick:this.props.onSkip,theme:"bare",type:"button",children:"Not now"})]})})]});const e=[];Object.values(this.state.coauthors).forEach(t=>{let n=null;const o=[];if(t.coauthoredPublicationTitles.forEach(e=>{o.push(Object(s.createElement)(d.List.Item,Object(i.a)(Object(i.a)({},y("publication-title")),{},{key:e}),e))}),t.coauthoredPublicationCount>0&&t.coauthoredPublicationTitles){const e=t.coauthoredPublicationCount-t.coauthoredPublicationTitles.length;e>0&&o.push(Object(s.createElement)(d.List.Item,Object(i.a)(Object(i.a)({},y("publication-titles-remaining")),{},{key:"remaining"}),"+ ",e," more"))}t.coauthoredPublicationCount>0&&(n=Object(g.jsx)(d.Tooltip,Object(i.a)(Object(i.a)({},y("coauthored-pubs")),{},{position:"above",spacing:"s",scope:"local",target:Object(g.jsxs)(d.Text,{size:"xs",children:[" ",m.a," ",t.coauthoredPublicationCount," mutual"," ",r()("publication",t.coauthoredPublicationCount)]}),children:Object(g.jsx)(d.List,{type:"bare",size:"xs",spacing:"none",children:o})}))),e.push(Object(g.jsx)(d.FormGroup.Item,{children:Object(g.jsxs)(d.Pack,{verticalAlign:"top",gutter:"xxs",style:{marginBottom:"5px"},children:[Object(g.jsx)(d.Pack.Item,{children:Object(g.jsx)(d.Checkbox,Object(i.a)({onChange:this.handleCheckboxChange,name:"authorUids",value:t.authorUid,defaultChecked:t.isSelected},y("coauthored-pubs-checkbox")))}),Object(g.jsx)(d.Pack.Item,{children:Object(g.jsxs)(d.Pack,{verticalAlign:"middle",gutter:"xxs",children:[Object(g.jsx)(d.Pack.Item,{children:Object(g.jsx)(d.Text,{spacing:"none",size:"m",children:t.authorName})}),Object(g.jsx)(d.Pack.Item,{children:Object(g.jsx)(d.Text,Object(i.a)(Object(i.a)({spacing:"none",size:"xs"},y("coauthored-pubs-cta")),{},{children:n}))})]})})]})},t.authorUid))});let t=0;Object.values(this.state.coauthors).forEach(e=>{e.isSelected&&t++});let n=this.state.inviteButtonStatus;return 0===t&&(n="disabled"),Object(g.jsxs)(d.Card,Object(i.a)(Object(i.a)({spacing:"xl"},y()),{},{children:[Object(g.jsxs)(d.Card.Body,{children:[Object(g.jsxs)(d.Pack,Object(i.a)(Object(i.a)({gutter:"l",verticalAlign:"top",width:"auto"},y("header")),{},{children:[Object(g.jsx)(d.Pack.Item,{children:this.getHeaderCopy()}),this.getProfileImage()]})),Object(g.jsx)("form",{className:"js-form",children:Object(g.jsx)(d.FormGroup,Object(i.a)(Object(i.a)({gutter:"none",layout:"stack"},y("shown-authors")),{},{children:e}))})]}),Object(g.jsx)(d.Card.Footer,{children:Object(g.jsxs)(d.ButtonGroup,{children:[Object(g.jsx)(d.Button,{onClick:this.onInviteSelectedCoauthors,status:n,size:"s",color:"blue",width:"auto",type:"button",children:this.getInviteButtonCopy()}),this.props.showRemoveSuggestionsButton&&t>0?Object(g.jsxs)(d.Button,{onClick:this.handleRemoveSelectedCoauthors,size:"s",color:"blue",width:"auto",type:"button",theme:"ghost",children:["Remove ",t," ",r()("suggestion",t)]}):null,Object(g.jsx)(d.Button,{href:this.props.viewMoreCoauthorsUrl,theme:"bare",color:"blue",type:"button",children:"View more"})]})})]}))}}v.displayName="SuccessStoryDetailsInvitationPromo",t.a=Object(p.b)()(v)},1011:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(6),l=n(18),d=n(953),u=n(707),p=n(472),h=n(0);var b=({facePileAccountIds:e,caseStudyUrl:t})=>Object(h.jsxs)(a.MediaObject,{gutter:"s",children:[Object(h.jsx)(a.MediaObject.Item,{children:Object(h.jsx)(p.a,{accountIds:e,size:"m"})}),Object(h.jsx)(a.MediaObject.Item,{width:"full",children:Object(h.jsxs)(a.Text,{size:"m",children:[Object(h.jsx)("span",{style:{fontWeight:700},children:"Want to learn more about preprints?"})," ",Object(h.jsx)(a.Link,{href:t,children:"Read how adding a preprint"})," to ResearchGate helped Jussi Leinonen collect early feedback on his work."]})})]});var m=Object(c.b)()(({facePileAccountIds:e,textWho:t,textWhat:n})=>Object(h.jsxs)(a.MediaObject,{gutter:"s",children:[Object(h.jsx)(a.MediaObject.Item,{children:Object(h.jsx)(p.a,{accountIds:e,size:"m"})}),Object(h.jsx)(a.MediaObject.Item,{width:"full",children:Object(h.jsxs)(a.Text,{size:"m",children:[Object(h.jsx)("span",{style:{fontWeight:"bold"},children:t})," ",n]})})]}));var j=Object(c.b)()(({facePileAccountIds:e,textWho:t,textWhat:n})=>Object(h.jsxs)(a.MediaObject,{gutter:"s",children:[Object(h.jsx)(a.MediaObject.Item,{children:Object(h.jsx)(p.a,{accountIds:e,size:"m"})}),Object(h.jsx)(a.MediaObject.Item,{width:"full",children:Object(h.jsxs)(a.Text,{size:"m",children:[Object(h.jsx)("span",{style:{fontWeight:"bold"},children:t})," ",n]})})]}));n(1241);const f=new s.a("preprint-promo");t.a=Object(c.b)()(({creationUrl:e,learnMoreUrl:t,caseStudyUrl:n,headerText:r,subtitleText:s,hideUrl:c,disciplineSocialProofWidgetId:p,networkSocialProofWidgetId:O,caseStudyAccountIds:g})=>Object(h.jsx)("div",Object(i.a)(Object(i.a)({},f()),{},{children:Object(h.jsx)(u.a,{closeable:!0,transition:"collapse",onClose:()=>{Object(l.default)(c,{method:"POST"})},color:"white",borderColor:"grey",size:!1,renderCard:!1,children:Object(h.jsxs)(o.Fragment,{children:[Object(h.jsxs)("div",Object(i.a)(Object(i.a)({},f("content")),{},{children:[Object(h.jsxs)(a.MediaObject,{verticalAlign:"top",children:[Object(h.jsxs)(a.MediaObject.Item,{width:"full",children:[Object(h.jsx)(a.Heading,{size:"xl",spacing:"m",children:r}),Object(h.jsx)(a.Text,{size:"m",spacing:"m",children:s})]}),Object(h.jsx)(a.MediaObject.Item,{width:"auto",children:Object(h.jsx)("img",{src:d.a,role:"presentation"})})]}),Object(h.jsxs)(a.ButtonGroup,{children:[Object(h.jsx)(a.ButtonGroup.Item,{children:Object(h.jsx)(a.Button,{type:"button",href:e,children:"Add preprint"})}),Object(h.jsx)(a.ButtonGroup.Item,{children:Object(h.jsx)(a.Link,{type:"button",target:"_blank",theme:"bare",color:"blue",href:t,children:Object(h.jsx)(a.Text,{children:"Learn more"})})})]})]})),p&&Object(h.jsx)("div",Object(i.a)(Object(i.a)({},f("footer")),{},{children:Object(h.jsx)(m,{widgetId:p})})),O&&Object(h.jsx)("div",Object(i.a)(Object(i.a)({},f("footer")),{},{children:Object(h.jsx)(j,{widgetId:O})})),!O&&!p&&Object(h.jsx)("div",Object(i.a)(Object(i.a)({},f("footer")),{},{children:Object(h.jsx)(b,{caseStudyUrl:n,facePileAccountIds:g})}))]})})})))},1012:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(144),l=n(6),d=n(11),u=n(29),p=n(18),h=n(14),b=n(20),m=n(654),j=IMAGES_STATIC_URL+"m/411402633031155/images/profile/profile-additiona-email-promo-institutional-email.png",f=IMAGES_STATIC_URL+"m/410537643541215/images/profile/profile-additional-email-promo-recommend-email.png",O=n(719),g=n(307),x=(n(1242),n(0));const y=new s.a({name:"profile-additional-email-promo"}),v={isPromoVisible:!0,isDialogVisible:!1,isForceDialogConfirmStep:!1};class I extends o.Component{constructor(...e){super(...e),this.state=v,this.askMeLaterClick=()=>{Object(h.g)([this.props.milestones.clickNo,this.props.closeMilestone]),Object(p.post)(this.props.hideUrl).then(this.hideAndFireNextPromoEvent).catch(e=>{Object(b.default)(e),this.hideAndFireNextPromoEvent()})},this.hidePromo=()=>{Object(p.post)(this.props.hideUrl).catch(e=>{Object(b.default)(e),this.hideAndFireNextPromoEvent()})},this.denyAdditionalEmail=()=>{Object(h.a)(this.props.milestones.clickNotMyEmail);const{denyEmailUrl:e,recommendedEmail:t}=this.props;Object(p.post)(e,{email:t}).then(()=>{this.showDenyEmailAlert(),this.hideAndFireNextPromoEvent()}).catch(e=>{Object(b.default)(e),this.showMessage(e)})},this.confirmRecommendedEmail=()=>{const{recommendedEmail:e}=this.props;Object(p.post)(g.a,{additionalEmail:e}).then(()=>{this.setState({isForceDialogConfirmStep:!0}),this.showDialog(),this.hideAndFireNextPromoEvent()}).catch(e=>{Object(b.default)(e),this.showMessage(e)})},this.showMessage=e=>{this.props.dispatch(Object(d.pushAlert)(()=>Object(x.jsx)(c.a,{title:e.errors})))},this.showDialog=()=>{Object(h.g)([this.props.milestones.clickYes,this.props.ctaClickedGoal]),this.setState({isDialogVisible:!0})},this.hideAdditionalEmailDialog=()=>{Object(h.a)(this.props.milestones.dialogClosed),this.setState({isDialogVisible:!1})},this.hideAndFireNextPromoEvent=()=>{this.state.isPromoVisible&&(this.setState({isPromoVisible:!1}),Object(u.b)(this.props.onRequestNext))}}componentDidUpdate({isFormSubmitSucceeded:e}){e!==this.props.isFormSubmitSucceeded&&this.props.isFormSubmitSucceeded&&this.hideAndFireNextPromoEvent()}render(){const{showRecommendedEmail:e,showInstitutionalEmailPromo:t,profileAdditionalEmailDialog:n,recommendedEmail:o,isNewRightColumnStackEnabled:r,accountInstitutionName:s}=this.props,{isPromoVisible:c,isDialogVisible:l,isForceDialogConfirmStep:d}=this.state;return r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(a.Card,{spacing:"m",elevation:"none","aria-labelledby":"add-additional-email-promo-heading",children:Object(x.jsx)(a.Card.Body,{children:Object(x.jsxs)(a.Stack,{gutter:"m",children:[Object(x.jsx)(a.Stack.Item,{children:Object(x.jsxs)(a.Flex,{gutter:"s",justifyContent:"space-between",children:[Object(x.jsx)(a.Flex.Item,{children:Object(x.jsx)(a.Heading,{size:"xl",children:"Don’t lose access to your account"})}),Object(x.jsx)(a.Flex.Item,{children:Object(x.jsx)("img",{src:t?j:f,alt:"",width:64,height:64})})]})}),Object(x.jsx)(a.Stack.Item,{children:t?Object(x.jsxs)(a.Stack,{gutter:"xxs",children:[Object(x.jsx)(a.Stack.Item,{children:Object(x.jsx)(a.Text,{children:"Your email address doesn’t match your current institution:"})}),Object(x.jsx)(a.Stack.Item,{children:Object(x.jsx)(a.Text,{children:Object(x.jsx)("strong",{children:s})})}),Object(x.jsx)(a.Stack.Item,{children:Object(x.jsx)(a.Text,{children:"Add another address to avoid losing access to your account."})})]}):Object(x.jsx)(a.Text,{children:"Add another email address to avoid losing access to your account."})}),Object(x.jsx)(a.Stack.Item,{children:Object(x.jsxs)(a.Flex,{gutter:"m",alignItems:"center",children:[Object(x.jsx)(a.Flex.Item,{children:Object(x.jsx)(a.Button,{type:"button",theme:"ghost",onClick:this.showDialog,size:"s",children:e?"Add email address":"Add address"})}),Object(x.jsx)(a.Flex.Item,{children:Object(x.jsx)(a.Button,{theme:"bare",onClick:this.askMeLaterClick,children:"Ask me later"})})]})})]})})}),Object(x.jsx)(O.a,{widgetId:n,isDialogVisible:l,closeDialog:this.hideAdditionalEmailDialog,isForceConfirmStep:d,confirmedFromOuterScriptEmail:!!e&&o,hidePromo:this.hidePromo})]}):Object(x.jsxs)("div",Object(i.a)(Object(i.a)({},y({extra:c?"":"hidden"})),{},{role:"complementary","aria-labelledby":"add-email-promo-heading",children:[Object(x.jsxs)("div",Object(i.a)(Object(i.a)({},y("inner")),{},{children:[Object(x.jsx)(a.Text,Object(i.a)(Object(i.a)({},y("header")),{},{spacing:"s",id:"add-email-promo-heading",children:e||t?"Never lose access to your account":"Add an additional email address"})),Object(x.jsxs)(a.MediaObject,{gutter:"s",verticalAlign:"top",children:[Object(x.jsx)(a.MediaObject.Item,{children:Object(x.jsx)("img",Object(i.a)(Object(i.a)({src:m.a},y("mail-image")),{},{alt:"Icon"}))}),Object(x.jsxs)(a.MediaObject.Item,{width:"full",children:[this.getContent(),Object(x.jsxs)(a.ButtonGroup,{children:[Object(x.jsx)(a.Button,{type:"button",theme:"ghost",onClick:e?this.confirmRecommendedEmail:this.showDialog,size:"s",children:e||t?"Yes":"Add new address"}),e?Object(x.jsx)(a.Button,{type:"button",theme:"bare",color:"grey",size:"s",onClick:this.denyAdditionalEmail,children:"No"}):null]})]})]})]})),Object(x.jsx)("div",Object(i.a)(Object(i.a)({},y("footer")),{},{children:Object(x.jsx)(a.ButtonGroup,{children:Object(x.jsx)(a.Button,{type:"button",theme:"bare",color:"grey",size:"s",onClick:this.askMeLaterClick,children:"Ask me later"})})})),Object(x.jsx)(O.a,{widgetId:n,isDialogVisible:l,closeDialog:this.hideAdditionalEmailDialog,isForceConfirmStep:d,confirmedFromOuterScriptEmail:!!e&&o})]}))}getContent(){const{showRecommendedEmail:e,showInstitutionalEmailPromo:t}=this.props;return e?this.getRecommendedEmailPromo():t?this.getInstitutionalPromo():this.getDefaultPromo()}getDefaultPromo(){return Object(x.jsx)(a.Text,{spacing:"m",children:"Never lose access to your account by adding another email address."})}getRecommendedEmailPromo(){const{recommendedEmail:e}=this.props;return Object(x.jsxs)("div",{children:[Object(x.jsx)(a.Text,{spacing:"xs",children:"We found this email address in a publication you authored:"}),Object(x.jsx)(a.Text,{spacing:"xs",children:Object(x.jsx)("b",{children:e})}),Object(x.jsx)(a.Text,{spacing:"m",children:"Want to add it to your account?"})]})}getInstitutionalPromo(){const{accountInstitutionName:e}=this.props;return Object(x.jsxs)("div",{children:[Object(x.jsx)(a.Text,{spacing:"xs",children:"Your email doesnt match your institution:"}),Object(x.jsx)(a.Text,{spacing:"xs",children:Object(x.jsx)("b",{children:e})}),Object(x.jsx)(a.Text,{spacing:"m",children:"Do you have another email address you can add?"})]})}showDenyEmailAlert(){this.props.dispatch(Object(d.pushAlert)(()=>Object(x.jsx)(a.Alert,{title:"Thanks for letting us know",description:"Want to add a different additional email?",children:Object(x.jsx)(a.ButtonGroup,{children:Object(x.jsx)(a.Button,{type:"button",color:"white",onClick:this.showDialog,children:"Yes"})})})))}}I.displayName="ProfileAdditionalEmailPromo";t.a=Object(l.b)(e=>{var t,n;return{isFormSubmitSucceeded:null!==(t=null===(n=e[g.c])||void 0===n?void 0:n.isSubmitSucceeded)&&void 0!==t&&t}})(I)},1013:function(e,t,n){"use strict";var i=n(4),o=n(1),r=n(144),s=n(6),a=n(11),c=n(18),l=n(13),d=IMAGES_STATIC_URL+"m/439589744041100/images/icons/svgicons/project-folder.svg",u=n(803),p=(n(1245),n(0));class h extends i.Component{constructor(...e){super(...e),this.state={visible:!0},this.sayYes=e=>{e.preventDefault(),Object(u.a)(this.props.projectId,this.props.viewIds,this.props.context).then(this.goToProject).catch(this.handleSubmissionError)},this.sayNo=e=>{e.preventDefault(),Object(u.b)(this.props.projectId,this.props.viewIds,this.props.context).then(this.hidePromo).catch(this.handleSubmissionError)},this.handleSubmissionError=e=>{this.props.dispatch(Object(a.pushAlert)(()=>Object(p.jsx)(r.a,{title:e.message})))},this.goToProject=()=>{Object(l.c)(this.props.projectClaimedUrl)},this.askMeLater=e=>{e.preventDefault(),Object(c.post)(this.props.hideUrl,{context:this.props.context,viewIds:this.props.viewIds}).then(this.hidePromo).catch(this.handleSubmissionError)},this.hidePromo=()=>{this.setState({visible:!1}),this.props.onRequestNext&&this.props.onRequestNext(),this.props.onClose&&this.props.onClose()}}getHiddenText(e){const t=1===e?"collaborator":"collaborators";return Object(p.jsxs)("span",{className:"collaborator-name hidden-count",children:["+ ",e," more ",t]})}getName(e){return Object(p.jsx)("span",{className:"collaborator-name",children:e},e)}getArrayValuesWithSeparator(e,t){return e.map((e,n,i)=>{const o=n<i.length-1&&t;return Object(p.jsxs)("span",{children:[e," ",o]},n)})}getCollaboratorNames(){const e=this.props.projectCollaborators.length,t=this.props.projectCollaborators.length-4,n=this.props.projectCollaborators.slice(0,3),i=this.props.projectCollaborators.slice(-1).pop(),o=n.map(e=>this.getName(e));return t>0&&o.push(this.getHiddenText(t)),e>3&&o.push(this.getName(i)),Object(p.jsx)("div",{children:this.getArrayValuesWithSeparator(o," · ")})}render(){return!1===this.state.visible?null:Object(p.jsxs)("div",{className:"project-candidate-claim-widget-promo",role:"complementary","aria-labelledby":"project-claim-promo-heading",children:[Object(p.jsx)("div",{className:"promo-box-header",id:"project-claim-promo-heading",children:"Are you collaborating on this project?"}),Object(p.jsx)("div",{className:"icon-wrapper",children:Object(p.jsx)("img",{src:d,role:"presentation"})}),Object(p.jsx)("div",{className:"title-wrapper",children:this.props.projectTitle}),Object(p.jsx)("div",{className:"collaborator-wrapper",children:this.getCollaboratorNames()}),Object(p.jsxs)("div",{className:"action-row",children:[Object(p.jsx)(o.Button,{type:"button",className:"reply-button",theme:"ghost",size:"s",onClick:this.sayYes,children:"Yes"}),Object(p.jsx)(o.Button,{type:"button",className:"reply-button",theme:"ghost",size:"s",onClick:this.sayNo,children:"No"}),Object(p.jsx)(o.Link,{className:"view-project-link",color:"blue",theme:"bare",href:this.props.projectUrl,children:"View project"})]}),this.props.closable&&Object(p.jsx)("div",{className:"promo-box-footer",children:Object(p.jsx)(o.Button,{type:"button",className:"reply-button",color:"blue",theme:"bare",size:"s",onClick:this.askMeLater,children:"Ask me later"})})]})}}h.displayName="ProjectCandidateClaimingWidgetPromo";t.a=Object(s.b)()(h)},1014:function(e,t,n){"use strict";var i=n(4),o=n(1),r=n(144),s=n(6),a=n(11),c=n(29),l=n(18),d=IMAGES_STATIC_URL+"m/454087361986/images/topics/ask-a-question-promo.png",u=n(772),p=n(0);class h extends i.Component{constructor(...e){super(...e),this.askMeLater=e=>{e.preventDefault(),Object(l.default)(this.props.hideUrl,{method:"POST",body:{context:"promoStack"}}).then(this.hidePromo).catch(e=>{this.props.dispatch(Object(a.pushAlert)(()=>Object(p.jsx)(r.a,{title:e.message})))})},this.hidePromo=()=>{this.props.closeMilestone&&Object(c.l)(this.props.closeMilestone),this.props.onRequestNext&&this.props.onRequestNext()}}render(){const{questionPostCreationChannelExperiment:e,goalAskQuestionCreated:t,milestoneAskQuestionDialogClickAsk:n,milestoneAskQuestionDialogClickCancel:i,hideAskLater:r,imageUrl:s,isNewRightColumnStackEnabled:a,ctaClickedGoal:c}=this.props;return a?Object(p.jsx)(o.Card,{spacing:"m",elevation:"none",role:"complementary","aria-labelledby":"ask-question-promo-heading",children:Object(p.jsx)(o.Card.Body,{children:Object(p.jsxs)(o.Stack,{gutter:"m",children:[Object(p.jsx)(o.Stack.Item,{children:Object(p.jsxs)(o.Flex,{gutter:"s",justifyContent:"space-between",children:[Object(p.jsx)(o.Flex.Item,{children:Object(p.jsx)(o.Heading,{size:"xl",children:"Do you have a research question?"})}),Object(p.jsx)(o.Flex.Item,{children:Object(p.jsx)("img",{src:d,alt:"",width:64,height:64})})]})}),Object(p.jsx)(o.Stack.Item,{children:Object(p.jsx)(o.Text,{children:"Ask a question in Q&A to get help from experts in your field."})}),Object(p.jsx)(o.Stack.Item,{children:Object(p.jsxs)(o.Flex,{gutter:"m",alignItems:"center",children:[Object(p.jsx)(o.Flex.Item,{children:Object(p.jsx)(u.a,{context:"promoStack",isSubjectInputShown:!1,buttonProps:{width:"full",size:"s",theme:"ghost"},goalAskQuestionCreated:t,milestoneAskQuestionDialogClickAsk:n,milestoneAskQuestionDialogClickCancel:i,questionPostCreationChannelExperiment:e,ctaClickedGoal:c})}),Object(p.jsx)(o.Flex.Item,{children:r?null:Object(p.jsx)(o.Button,{onClick:this.askMeLater,theme:"bare",children:"Not now"})})]})})]})})}):Object(p.jsx)(o.Card,{elevation:"none",spacing:"m",role:"complementary","aria-labelledby":"ask-question-promo-heading",children:Object(p.jsxs)(o.Stack,{gutter:"xs",gutterOutside:!1,children:[Object(p.jsx)(o.Stack.Item,{children:Object(p.jsx)("div",{className:"promo-box-header",children:Object(p.jsx)(o.Text,{id:"ask-question-promo-heading",children:"Do you have a research question?"})})}),Object(p.jsx)(o.Stack.Item,{children:Object(p.jsxs)(o.MediaObject,{verticalAlign:"top",children:[Object(p.jsx)(o.MediaObject.Item,{children:Object(p.jsx)("img",{className:"img-circle",alt:"",src:s})}),Object(p.jsx)(o.MediaObject.Item,{width:"full",children:Object(p.jsx)(o.Text,{spacing:"s",children:"Ask questions in Q&A to get help from experts in your field."})})]})}),Object(p.jsx)(o.Stack.Item,{children:Object(p.jsx)(u.a,{context:"promoStack",isSubjectInputShown:!1,buttonProps:{width:"full",size:"s",theme:"ghost"},goalAskQuestionCreated:t,milestoneAskQuestionDialogClickAsk:n,milestoneAskQuestionDialogClickCancel:i,questionPostCreationChannelExperiment:e})}),Object(p.jsx)(o.Stack.Item,{children:r?null:Object(p.jsx)(o.Button,{type:"button",theme:"bare",size:"xs",color:"grey",align:"center",width:"full",onClick:this.askMeLater,children:"Ask me later"})})]})})}}h.displayName="TopicPostAskQuestionPromo";t.a=Object(s.b)()(h)},1023:function(e,t,n){"use strict";n.d(t,"g",(function(){return _})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return x})),n.d(t,"i",(function(){return C})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return v})),n.d(t,"j",(function(){return A})),n.d(t,"h",(function(){return S}));var i=n(1),o=n(5),r=n(7),s=n(6),a=n(1482),c=n(0);let l;var d=Object(r.a)(Object(s.h)(i.EntityItemBadge),Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query VitaAwardItemBadge($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({type:null==e?void 0:e.type})}))(({type:e})=>Object(c.jsx)(i.EntityItemBadge,{priority:"secondary",children:a.b[e]}));let u;var p=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(u||(u=(e=>e)`query VitaAwardItemCoInvestigators($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      coInvestigators {
        ... on PersonFullName {
          fullName
          __typename
        }
        __typename
      }
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>{var t;return{coInvestigators:null!==(t=null==e?void 0:e.coInvestigators)&&void 0!==t?t:null,type:null==e?void 0:e.type}}}))(({coInvestigators:e,type:t})=>e&&e.length>0&&"grant"===t&&Object(c.jsx)(i.EntityItemInfo,{title:"Co-investigators",children:Object(c.jsx)(i.EntityItemInfoItem,{children:e.map(e=>e.fullName).join(", ")})})),h=n(191);let b;var m=Object(r.a)(Object(s.h)(i.EntityItemMetaItem),Object(o.withQuery)(Object(o.gql)(b||(b=(e=>e)`query VitaAwardItemDate($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      date
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({date:null==e?void 0:e.date})}))(({date:e})=>e&&Object(c.jsxs)(i.EntityItemMetaItem,{children:["Awarded ",Object(c.jsx)(h.default,{value:e,utc:!0,month:"long",day:"none"})]})),j=n(117);let f;var O=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(f||(f=(e=>e)`query VitaAwardItemFunding($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      currency
      value
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({currency:null==e?void 0:e.currency,value:null==e?void 0:e.value,type:null==e?void 0:e.type})}))(({currency:e,value:t,type:n})=>e&&t&&"grant"===n&&Object(c.jsx)(i.EntityItemInfo,{title:"Total funding",children:Object(c.jsx)(i.EntityItemInfoItem,{children:`${e} ${Object(j.d)(t)}`})}));let g;var x=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(g||(g=(e=>e)`query VitaAwardItemFundingOrganisation($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      agency
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({agency:null==e?void 0:e.agency,type:null==e?void 0:e.type})}))(({agency:e,type:t})=>e&&"grant"===t&&Object(c.jsx)(i.EntityItemInfo,{title:"Funding agency",children:Object(c.jsx)(i.EntityItemInfoItem,{children:e})}));let y;var v=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(y||(y=(e=>e)`query VitaAwardItemGrantNumber($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      grantNumber
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({grantNumber:null==e?void 0:e.grantNumber,type:null==e?void 0:e.type})}))(({grantNumber:e,type:t})=>e&&"grant"===t&&Object(c.jsx)(i.EntityItemInfo,{title:"Grant reference",children:Object(c.jsx)(i.EntityItemInfoItem,{children:e})}));let I;var _=Object(r.a)(Object(s.h)(i.EntityItemTitle),Object(o.withQuery)(Object(o.gql)(I||(I=(e=>e)`query VitaAwardItemName($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({name:null==e?void 0:e.name})}))(({name:e})=>Object(c.jsx)(i.EntityItemTitle,{children:e}));let w;var S=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(w||(w=(e=>e)`query VitaAwardItemOtherResearchOrganizations($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      otherResearchOrganizations {
        name
        __typename
      }
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({otherResearchOrganizations:null==e?void 0:e.otherResearchOrganizations,type:null==e?void 0:e.type})}))(({otherResearchOrganizations:e,type:t})=>e&&e.length>0&&"grant"===t&&Object(c.jsx)(i.EntityItemInfo,{title:"Secondary institutions",children:Object(c.jsx)(i.EntityItemInfoItem,{children:e.map(e=>e.name).join(", ")})}));let P;var C=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(P||(P=(e=>e)`query VitaAwardItemPrincipalInvestigators($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      principalInvestigators {
        ... on PersonFullName {
          fullName
          __typename
        }
        __typename
      }
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>{var t;return{principalInvestigators:null!==(t=null==e?void 0:e.principalInvestigators)&&void 0!==t?t:null,type:null==e?void 0:e.type}}}))(({principalInvestigators:e,type:t})=>e&&e.length>0&&"grant"===t&&Object(c.jsx)(i.EntityItemInfo,{title:"Principal investigators",children:Object(c.jsx)(i.EntityItemInfoItem,{children:e.map(e=>e.fullName).join(", ")})}));let k;var A=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(k||(k=(e=>e)`query VitaAwardItemResearchOrganization($id: ID!) {
  vita(id: $id) {
    ... on VitaAward {
      id
      leadResearchOrganization {
        name
        __typename
      }
      type
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>{var t,n;return{leadResearchOrganizationName:null!==(t=null==e||null===(n=e.leadResearchOrganization)||void 0===n?void 0:n.name)&&void 0!==t?t:null,type:null==e?void 0:e.type}}}))(({leadResearchOrganizationName:e,type:t})=>e&&"grant"===t&&Object(c.jsx)(i.EntityItemInfo,{title:"Research institution",children:Object(c.jsx)(i.EntityItemInfoItem,{children:e})}))},1028:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(6),l=n(11),d=n(18),u=n(14),p=n(20),h=(n(1335),n(0));const b=new s.a("authors-invite-dialog");class m extends o.Component{constructor(e){super(e),this.onInvite=()=>{this.setState({inviteButtonStatus:"busy"});const e=this.state.authors;Object(d.default)("share.AuthorsInviteDialog.html",{method:"POST",body:{authors:e,invitationContext:this.props.invitationContext,invitationChannel:this.props.invitationChannel}}).then(e=>{const t=e.result.invitedAuthorNames,n=Object.keys(t).length,i=n>1?`You've invited ${n} researchers`:"You've invited "+t[0];this.props.dispatch(Object(l.pushAlert)(()=>Object(h.jsx)(a.Alert,{title:"Your invitation is on the way",description:i,color:"green"}))),this.props.onInvited&&this.props.onInvited({invitedAuthorNames:t})}).catch(e=>{Object(p.default)(e),this.setState({inviteButtonStatus:""});let t="Something went wrong";e.errors&&(t=e.errors[0]),this.props.dispatch(Object(l.pushAlert)(()=>Object(h.jsx)(a.Alert,{title:"Invalid email addresses.",description:t,color:"red"})))})},this.getTooltipContents=()=>Object(h.jsxs)("div",{className:"tooltip",children:[Object(h.jsx)(a.Text,{size:"m",children:Object(h.jsx)("b",{children:"From:"})}),Object(h.jsxs)(a.Text,{size:"m",spacing:"xs",children:[this.props.inviterAccount.fullname," via ResearchGate"]}),Object(h.jsx)(a.Text,{size:"m",children:Object(h.jsx)("b",{children:"Subject:"})}),Object(h.jsxs)(a.Text,{size:"m",spacing:"xs",children:[this.props.inviterAccount.fullname," invited you to confirm authorship of your work"]}),Object(h.jsx)(a.Text,{size:"m",children:Object(h.jsx)("b",{children:"Message:"})}),Object(h.jsxs)(a.Text,{size:"m",spacing:"s",children:[this.props.inviterAccount.fullname," invited you to join ResearchGate and confirm authorship of your publications."]}),Object(h.jsx)(a.Text,{color:"grey-600",size:"s",children:"Your co-author will receive this email notification and, in some cases, up to two reminders."})]}),this.onAuthorInputChange=e=>{const t=e.currentTarget,n=t.name,i=this.state.authors;i[n].email=t.value,this.setState({authors:i})},this.onRemoveSuggestion=e=>{const t=this.state.authors;t[e].isVisible=!1;let n=!0;if(Object.values(this.state.authors).forEach(e=>{e.isVisible&&(n=!1)}),n)return Object.values(this.state.authors).forEach(e=>{e.isVisible=!0}),this.setState({authors:t}),void this.handleRequestClose();this.setState({authors:t})},this.getAuthors=()=>{const e=[];let t=!0;return Object.keys(this.state.authors).forEach(n=>{const r=this.state.authors[n];!0===r.isVisible&&(e.push(Object(o.createElement)("div",Object(i.a)(Object(i.a)({},b("author-input")),{},{key:n}),Object(h.jsxs)(a.Pack,Object(i.a)(Object(i.a)({width:"auto",verticalAlign:"bottom",gutter:"xxs"},b("author-label")),{},{children:[Object(h.jsx)(a.Pack.Item,{children:Object(h.jsx)(a.Text,{size:"l",children:Object(h.jsx)("b",{children:r.name})})}),Object(h.jsx)(a.Pack.Item,{children:"·"}),Object(h.jsx)(a.Pack.Item,{children:Object(h.jsx)(a.Link,Object(i.a)(Object(i.a)({type:"button"},b("remove-suggestion")),{},{onClick:()=>this.onRemoveSuggestion(n),children:"Remove"}))})]})),Object(h.jsx)(a.Input,Object(i.a)(Object(i.a)({},b("author-input-field")),{},{placeholder:"Email address",type:"email",name:n,autoFocus:t,onChange:this.onAuthorInputChange})))),t=!1)}),e},this.handleRequestClose=()=>{this.props.onRequestNext&&this.props.onRequestNext()},this.handleSkip=()=>{Object(u.a)(this.props.milestones.goalSkipAuthorsInviteStep),this.props.onRequestNext&&this.props.onRequestNext()},this.getSubheadline=()=>{const e=Object.keys(this.state.authors).length;return 1===e?e+" co-author on this publication does not have a ResearchGate profile. You can enter their email below to let them know you’ve added this full-text and invite them to confirm their authorship on this publication.":e+" co-authors on this publication do not have a ResearchGate profile. You can enter their emails below to let them know you’ve added this full-text and invite them to confirm their authorship on this publication."},this.state={authors:this.props.authors,inviteButtonStatus:""}}componentDidMount(){Object(u.a)(this.props.milestones.goalSeenAuthorsInviteStep)}render(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(a.Modal.Body,{children:[Object(h.jsx)(a.Heading,{size:"xl",spacing:"xs",children:"Notify co-authors about this full-text you've just added"}),Object(h.jsx)(a.Text,{size:"m",spacing:"l",children:this.getSubheadline()}),Object(h.jsx)("div",Object(i.a)(Object(i.a)({},b("author-inputs")),{},{children:this.getAuthors()}))]}),Object(h.jsx)(a.Modal.Footer,{children:Object(h.jsxs)(a.Pack,{width:"full",verticalAlign:"middle",children:[Object(h.jsx)(a.Pack.Item,{children:Object(h.jsx)(a.Tooltip,{scope:"local",target:Object(h.jsx)(a.Link,Object(i.a)(Object(i.a)({type:"button"},b("preview-link")),{},{children:"Preview email"})),children:this.getTooltipContents()})}),Object(h.jsx)(a.Pack.Item,{children:Object(h.jsxs)(a.ButtonGroup,{className:"rf",children:[Object(h.jsx)(a.Button,{type:"button",theme:"bare",onClick:this.handleSkip,children:Object(h.jsx)(a.Button.Label,{children:"Not now"})}),Object(h.jsx)(a.Button,{onClick:this.onInvite,status:this.state.inviteButtonStatus,type:"button",children:Object(h.jsx)(a.Button.Label,{children:"Send"})})]})})]})})]})}}m.displayName="AuthorsInviteStep",m.defaultProps={onClose:()=>{}},t.default=Object(c.b)()(m)},1032:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i="Not on ResearchGate, or hasn't claimed this research yet."},1034:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(80),s=n(6),a=n(939),c=n(0),l=()=>Promise.resolve().then(n.bind(null,939));class d extends o.Component{constructor(...e){super(...e),this.state={roadMap:null,isAsyncActive:!1},this.handleRequestNext=({roadMap:e})=>{this.setState({roadMap:e,isAsyncActive:!0}),0===e.length&&this.props.onDeactivate&&this.props.onDeactivate()},this.handleRequestClose=()=>{},this.handleAsyncWidgetError=()=>{this.props.onDeactivate&&this.props.onDeactivate()}}render(){const{context:e,entryChannel:t,item:n,onIntersectChange:o}=this.props,{roadMap:s,isAsyncActive:d}=this.state,u={onRequestNext:this.handleRequestNext,onRequestClose:this.handleRequestClose,onIntersectChange:o},p=s&&s.length>0;return d&&p?Object(c.jsx)(r.a,Object(i.a)(Object(i.a)({url:"application.promostack.PromoStackItem.html",widgetParams:{entryChannel:t,context:e,roadMapEncoded:JSON.stringify(s)},onError:this.handleAsyncWidgetError},u),{},{__internalLoadComponent:l})):d&&!p?null:Object(c.jsx)(a.default,Object(i.a)({widgetId:n},u))}}d.displayName="PromoStack",t.a=Object(s.b)()(d)},1035:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(7),s=n(6),a=n(14),c=n(730),l=n(652),d=n(0);let u;const p=({accountId:e,dispatch:t,entryChannel:n,onModalClose:o,learnMoreAboutSpotlightUrl:r,spotlightCreated:s,flowEntered:u,ctaClickedGoal:p})=>{const{handleCreate:h}=Object(l.a)({dispatch:t,accountId:e,entryChannel:n,onModalClose:o,onMount:()=>Object(a.a)(u),onSuccess:()=>Object(a.a)(s)});return Object(d.jsxs)(i.Card,{spacing:"m",elevation:"none",color:"blue",children:[Object(d.jsx)(i.Card.Header,{children:Object(d.jsx)(c.a,{title:"Research Spotlight"})}),Object(d.jsx)(i.Card.Body,{spacing:"m",children:Object(d.jsxs)(i.Stack,{gutter:"m",children:[Object(d.jsx)(i.Stack.Item,{children:Object(d.jsx)(i.Heading,{size:"xl",children:"Want 4x more reads of your recent work?"})}),Object(d.jsx)(i.Stack.Item,{children:Object(d.jsxs)(i.Text,{children:["Showcase your work in a Spotlight to get ",Object(d.jsx)("strong",{children:"4x more reads"})," on average."," ",Object(d.jsx)(i.Link,{target:"_blank",rel:"noopener",href:r,children:"Learn more"})]})}),Object(d.jsx)(i.Stack.Item,{children:Object(d.jsx)(i.Button,{onClick:()=>{Object(a.a)(p),h()},type:"button",children:Object(d.jsx)(i.Button.Label,{children:"Create Spotlight"})})})]})})]})};p.defaultProps={onModalClose:()=>{}},t.a=Object(r.a)(Object(s.b)(),Object(o.withQuery)(Object(o.gql)(u||(u=(e=>e)`query HomeFeedSpotlightCreationPromo($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlights {
      experiments {
        spotlightCreationPromo(promo: HOME_FEED_RIGHT_COLUMN) {
          spotlightCreated: goal
          flowEntered: milestone(name: "spotlightCreationFlowEntered")
          __typename
        }
        __typename
      }
      learnMoreAboutSpotlightUrl
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a;return{spotlightCreated:null==e||null===(t=e.spotlights)||void 0===t||null===(n=t.experiments)||void 0===n||null===(i=n.spotlightCreationPromo)||void 0===i?void 0:i.spotlightCreated,flowEntered:null==e||null===(o=e.spotlights)||void 0===o||null===(r=o.experiments)||void 0===r||null===(s=r.spotlightCreationPromo)||void 0===s?void 0:s.flowEntered,learnMoreAboutSpotlightUrl:null==e||null===(a=e.spotlights)||void 0===a?void 0:a.learnMoreAboutSpotlightUrl}}}))(p)},1053:function(e,t,n){},1055:function(e,t,n){},107:function(e,t,n){var i=n(168),o=Object;e.exports=function(e){return o(i(e))}},1079:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(6),l=n(15),d=n(18),u=(n(1343),n(0));const p=new s.a("update-company-affiliation-promo");class h extends o.Component{constructor(...t){super(...t),this.state={isVisible:!0},this.hideVisually=()=>{const{onRequestNext:e}=this.props;this.setState({isVisible:!1},()=>{e&&e()})},this.onShowDialog=()=>{this.props.dispatch(Object(l.mountAsyncModal)("account.EditAffiliationModal.html",null,void 0,()=>Promise.all([n.e(0),n.e(3),n.e(7),n.e(17)]).then(n.bind(null,1129)),e.hot&&!1)).then(this.hideVisually)},this.onAddToProfile=()=>{const{institutionId:e,widgetUrl:t,context:n}=this.props;Object(d.post)(t,{institutionId:e,context:n}).then(this.hideVisually)},this.hide=()=>{Object(d.post)(this.props.hideUrl).then(this.hideVisually)}}render(){const{institutionName:e,isOriginPromoStack:t}=this.props;return this.state.isVisible?Object(u.jsxs)("div",Object(i.a)(Object(i.a)({},p()),{},{role:"complementary","aria-labelledby":"update-company-promo-heading",children:[!t&&Object(u.jsx)(a.Button,Object(i.a)(Object(i.a)({type:"button",onClick:this.hide,color:"grey",theme:"bare"},p("close")),{},{children:Object(u.jsx)(a.Button.Icon,{identifier:"close"})})),Object(u.jsx)(a.Text,{size:"m",id:"update-company-promo-heading",children:"Update your company details"}),Object(u.jsx)("hr",Object(i.a)({},p("line"))),Object(u.jsxs)(a.Text,{size:"m",spacing:"s",children:["Do you currently work at ",Object(u.jsx)("strong",{children:e}),"?"]}),Object(u.jsxs)(a.ButtonGroup,Object(i.a)(Object(i.a)({},p("action-buttons")),{},{wrap:!0,children:[Object(u.jsx)(a.Button,{type:"button",theme:"ghost",size:"s",onClick:this.onAddToProfile,children:"Yes, add to my profile"}),Object(u.jsx)(a.Button,{type:"button",theme:"bare",color:"grey",onClick:this.onShowDialog,children:"No, update details"}),t?Object(u.jsx)(a.Button,{type:"button",theme:"bare",color:"grey",onClick:this.hide,children:"Ask me later"}):null]}))]})):null}}h.displayName="UpdateCompanyAffiliationPromo",t.a=Object(c.b)()(h)}).call(this,n(58)(e))},1082:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/448675030402/images/icons/icons/author-avatar.svg"},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r}));const i=2,o=e=>e?void 0:"Please enter a description",r=e=>e&&e.text&&e.text.length<i?`Please enter at least ${i} characters`:void 0},110:function(e,t){e.exports=!1},1101:function(e,t,n){},1103:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(1),s=n(5),a=n(7),c=n(435),l=n(16),d=n.n(l),u=n(6),p=n(0);let h;var b=Object(a.a)(Object(u.h)(r.EntityItemInfo),Object(s.withQuery)(Object(s.gql)(h||(h=(e=>e)`query StandardPersonItemSharedConnections($id: ID!) {
  account(id: $id) {
    id
    standardPersonItemSharedConnections: sharedConnections(first: 1) {
      nodes {
        id
        fullName
        __typename
      }
      pageInfo {
        totalItems
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r;return{name:null==e||null===(t=e.standardPersonItemSharedConnections)||void 0===t||null===(n=t.nodes)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.fullName,totalItems:(null==e||null===(o=e.standardPersonItemSharedConnections)||void 0===o||null===(r=o.pageInfo)||void 0===r?void 0:r.totalItems)||null}}}))(({name:e,totalItems:t})=>e?Object(p.jsx)(r.EntityItemInfo,{title:"Shared connections",children:Object(p.jsx)(r.EntityItemInfoItem,{children:`${e}${t>1?" + "+d()("other",t-1,!0):""}`})}):null);let m;var j=Object(a.a)(Object(u.h)(r.EntityItemInfo),Object(s.withQuery)(Object(s.gql)(m||(m=(e=>e)`query StandardPersonItemSkills($id: ID!) {
  account(id: $id) {
    id
    skillsNewNew {
      keyword {
        id
        name
        __typename
      }
      __typename
    }
    profile {
      hasPermissionToEditBusinessCardSettings
      businessCardSettings {
        highlightedSkills {
          id
          name
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
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r;return{keywords:null!==(t=null==e||null===(n=e.skillsNewNew)||void 0===n?void 0:n.filter(e=>!!e.keyword).map(({keyword:e})=>e))&&void 0!==t?t:[],highlightedKeywords:null==e||null===(i=e.profile)||void 0===i||null===(o=i.businessCardSettings)||void 0===o?void 0:o.highlightedSkills,hasPermissionToEditBusinessCardSettings:null==e||null===(r=e.profile)||void 0===r?void 0:r.hasPermissionToEditBusinessCardSettings}}}))(({keywords:e,highlightedKeywords:t,hasPermissionToEditBusinessCardSettings:n})=>{let i;if(i=n&&null!=t?t:e.slice(0,3),0===i.length)return null;const o=e.length-i.length;let s=i.map(({name:e})=>e).join(" · ");return o>0&&(s+=" + "+d()("other",o,!0)),Object(p.jsx)(r.EntityItemInfo,{title:"Skills",children:s})}),f=n(10),O=n(3),g=n.n(O),x=n(9),y=n(599),v=n(197),I=n(224),_=n(91);const w=["onAttentionChange"];var S=(e,t=(({context:e})=>e),n=(({currentAccountId:e})=>e),r=(({accountId:e})=>e))=>s=>{class c extends o.Component{render(){const e=this.props,{onAttentionChange:t}=e,n=Object(f.a)(e,w);return Object(p.jsx)(v.a,{onChange:t,children:Object(p.jsx)(s,Object(i.a)({},n))})}}return c.displayName="DecoratedComponent",c.propTypes={onAttentionChange:g.a.func.isRequired},Object(a.a)(Object(u.n)(Object(_.a)(s,"withBusinessCardAttentionTracking")),Object(I.a)(i=>{const o=t(i);return Object(y.a)(o,"business card tracking needs a context"),{context:o,currentAccountId:n(i),parentId:r(i),rgKey:new x.a("noid",x.b.TYPE_BUSINESSCARD).toString(),componentIdentifier:e}}))(c)};let P;class C extends o.Component{render(){const{accountId:e,fullNameParams:t,imageParams:n,size:o,additionalInfo:s,actions:a,areLinksDisabled:l,context:d,isDegreeVisible:u,isPositionVisible:h,isInstitutionVisible:m,isDepartmentVisible:f,isBlurbVisible:O,areSkillsVisible:g,areSharedConnectionsVisible:x}=this.props,y={utm_content:"businessCard",utm_source:d,rgutm_meta1:e};return Object(p.jsxs)(r.EntityItem,{size:o,children:[Object(p.jsx)(c.g,{id:e,params:Object(i.a)(Object(i.a)({},t),y),isLinkDisabled:l}),Object(p.jsx)(c.h,{id:e,params:Object(i.a)(Object(i.a)({},n),y),isLinkDisabled:l}),Object(p.jsx)(c.j,{id:e,isPositionVisible:h,isDegreeVisible:u,isInstitutionVisible:!1}),O&&Object(p.jsx)(c.e,{id:e}),x&&Object(p.jsx)(b,{id:e}),Object(p.jsx)(c.i,{isInstitutionVisible:m,isDepartmentVisible:f,id:e,clamp:"3"}),g&&Object(p.jsx)(j,{id:e}),s,a]})}}C.displayName="StandardPersonItem",C.defaultProps={size:"m",areSharedConnectionsVisible:!1};t.a=Object(a.a)(Object(s.withQuery)(Object(s.gql)(P||(P=(e=>e)`query StandardPersonItem($accountId: ID!, $areSharedConnectionsVisible: Boolean = false) {
  account(id: $accountId) {
    id
    profile {
      hasPermissionToEditBusinessCardSettings
      businessCardSettings {
        isDegreeVisible
        isPositionVisible
        isInstitutionVisible
        isDepartmentVisible
        isBlurbVisible
        areSkillsVisible
        __typename
      }
      __typename
    }
    ...AccountPersonItemFullName @embed
    ...AccountPersonItemImage @embed
    ...AccountPersonItemMetaItems @embed
    ...AccountPersonItemBlurb @embed
    ...AccountPersonItemDepartment @embed
    ...StandardPersonItemSkills @embed
    ...AccountPersonItemInstitution @embed
    ...AccountPersonItemInstitutionAndDepartment @embed
    ...StandardPersonItemSharedConnections @embed @include(if: $areSharedConnectionsVisible)
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i;const o=(null==e||null===(t=e.profile)||void 0===t?void 0:t.hasPermissionToEditBusinessCardSettings)&&null!=e&&null!==(n=e.profile)&&void 0!==n&&n.businessCardSettings?null==e||null===(i=e.profile)||void 0===i?void 0:i.businessCardSettings:{isDegreeVisible:!0,isPositionVisible:!0,isInstitutionVisible:!0,isDepartmentVisible:!0,isBlurbVisible:!0,areSkillsVisible:!0};return{isDegreeVisible:o.isDegreeVisible,isPositionVisible:o.isPositionVisible,isInstitutionVisible:o.isInstitutionVisible,isDepartmentVisible:o.isDepartmentVisible,isBlurbVisible:o.isBlurbVisible,areSkillsVisible:o.areSkillsVisible}}}),S("StandardPersonItem"))(C)},111:function(e,t,n){var i,o=n(62),r=n(268),s=n(178),a=n(142),c=n(396),l=n(172),d=n(143),u=d("IE_PROTO"),p=function(){},h=function(e){return"<script>"+e+"<\/script>"},b=function(e){e.write(h("")),e.close();var t=e.parentWindow.Object;return e=null,t},m=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}var e,t;m="undefined"!=typeof document?document.domain&&i?b(i):((t=l("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(h("document.F=Object")),e.close(),e.F):b(i);for(var n=s.length;n--;)delete m.prototype[s[n]];return m()};a[u]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[u]=e):n=m(),void 0===t?n:r.f(n,t)}},112:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},113:function(e,t,n){var i=n(30);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},114:function(e,t,n){var i=n(110),o=n(174);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.4",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1163:function(e,t,n){},1164:function(e,t,n){},1165:function(e,t,n){},1166:function(e,t,n){},1167:function(e,t,n){},1168:function(e,t,n){},1169:function(e,t,n){},1170:function(e,t,n){},1172:function(e,t,n){},1173:function(e,t,n){},1178:function(e,t,n){},119:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n(1),a=n(8);const c=new(n.n(a).a)("common-metric");var l=n(3),d=n.n(l),u=n(0);const p=["status"],h=["status","children"],b=Object(r.forwardRef)((e,t)=>{let{status:n="unchanged",children:r}=e,a=Object(o.a)(e,h);return Object(u.jsx)(s.Badge,Object(i.a)(Object(i.a)(Object(i.a)({},(e=>{let{status:t}=e,n=Object(o.a)(e,p);switch(t){default:case"unchanged":return Object(i.a)(Object(i.a)({},n),{},{luminosity:"high",color:"grey"});case"changed":return Object(i.a)(Object(i.a)({},n),{},{color:"blue"})}})(Object(i.a)({status:n},a))),c("badge")),{},{display:"block",size:"m",theme:"ghost",radius:"full",ref:t,children:r}))});b.role="Metric.Badge",b.displayName="Metric.Badge",b.propTypes={children:d.a.node,status:d.a.oneOf(["unchanged","changed"])};var m=b;const j=["children","href","onClick"],f=Object(r.forwardRef)((e,t)=>{let{children:n,href:r,onClick:a}=e,l=Object(o.a)(e,j),d=n;return r&&(d=Object(u.jsx)(s.Link,Object(i.a)(Object(i.a)({},l),{},{href:r,theme:"decorated",children:n}))),a&&(d=Object(u.jsx)(s.Link,Object(i.a)(Object(i.a)({},l),{},{tag:"button",onClick:a,type:"button",theme:"decorated",children:n}))),Object(u.jsx)(s.Text,Object(i.a)(Object(i.a)({},c("text")),{},{color:"grey-800",ref:t,children:d}))});f.role="Metric.Label",f.displayName="Metric.Label";var O=f;const g=Object(r.forwardRef)(({children:e},t)=>Object(u.jsx)(s.Text,{size:"l",color:"grey-900",ref:t,children:e}));g.role="Metric.Total",g.displayName="Metric.Total",g.propTypes={children:d.a.node};var x=g;n(406);const y=["children","className"],v=Object(r.forwardRef)((e,t)=>{let{children:n,className:r}=e,a=Object(o.a)(e,y);const l=Object(s.getChildOfType)(n,O),d=Object(s.getChildOfType)(n,x),p=Object(s.getChildOfType)(n,m);return Object(u.jsxs)(s.Flex,Object(i.a)(Object(i.a)(Object(i.a)({},a),c({extra:r})),{},{gutter:"xxs",justifyContent:"space-between",alignItems:"center",direction:"row",ref:t,children:[Object(u.jsx)(s.Flex.Item,Object(i.a)(Object(i.a)({},c("label")),{},{children:l})),Object(u.jsx)(s.Flex.Item,{grow:!0,children:Object(u.jsx)(s.Divider,{})}),Object(u.jsx)(s.Flex.Item,{children:p}),Object(u.jsx)(s.Flex.Item,{children:d})]}))});v.Label=O,v.Total=x,v.Badge=m,v.displayName="Metric";var I=v;t.a=I},1207:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"g",(function(){return y})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return h}));var i=n(1),o=n(5),r=n(7),s=n(6),a=n(705);let c;var l=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(c||(c=(e=>e)`query AdditionalAffiliationItemDepartment($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    department {
      ... on Department {
        id
        __typename
      }
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>{var t;return{name:null==e||null===(t=e.department)||void 0===t?void 0:t.name}}}))(a.a);let d;var u=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(d||(d=(e=>e)`query AdditionalAffiliationItemDescription($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    description
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>({description:null==e?void 0:e.description})}))(a.b);let p;var h=Object(r.a)(Object(s.h)(i.EntityItemImage),Object(o.withQuery)(Object(o.gql)(p||(p=(e=>e)`query AdditionalAffiliationItemImage($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    institution {
      ... on Institution {
        id
        url
        imageUrl
        __typename
      }
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>{var t,n,i;return{name:null==e||null===(t=e.institution)||void 0===t?void 0:t.name,url:null==e||null===(n=e.institution)||void 0===n?void 0:n.url,imageUrl:null==e||null===(i=e.institution)||void 0===i?void 0:i.imageUrl}}}))(a.c);let b;var m=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(b||(b=(e=>e)`query AdditionalAffiliationItemLocation($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    location {
      country {
        id
        name
        __typename
      }
      city {
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>{var t,n,i,o;return{city:null==e||null===(t=e.location)||void 0===t||null===(n=t.city)||void 0===n?void 0:n.name,country:null==e||null===(i=e.location)||void 0===i||null===(o=i.country)||void 0===o?void 0:o.name}}}))(a.d);let j;var f=Object(r.a)(Object(s.h)(i.EntityItemTitle),Object(o.withQuery)(Object(o.gql)(j||(j=(e=>e)`query AdditionalAffiliationItemName($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    institution {
      ... on Institution {
        id
        url
        __typename
      }
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>{var t,n;return{name:null==e||null===(t=e.institution)||void 0===t?void 0:t.name,url:null==e||null===(n=e.institution)||void 0===n?void 0:n.url}}}))(a.e);let O;var g=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(O||(O=(e=>e)`query AdditionalAffiliationItemPosition($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    position {
      position
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>{var t;return{position:null==e||null===(t=e.position)||void 0===t?void 0:t.position}}}))(a.f);let x;var y=Object(r.a)(Object(s.h)(i.EntityItemMetaItem),Object(o.withQuery)(Object(o.gql)(x||(x=(e=>e)`query AdditionalAffiliationItemTimePeriod($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    startDate
    endDate
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>({startDate:null==e?void 0:e.startDate,endDate:null==e?void 0:e.endDate})}))(a.g)},1211:function(e,t,n){},122:function(e,t,n){"use strict";n.d(t,"c",(function(){return r.a})),n.d(t,"f",(function(){return f.a})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return o.a})),n.d(t,"e",(function(){return j.a}));var i=n(289),o=n(360),r=n(244),s=n(2),a=n(10),c=n(4),l=n(1),d=n(67),u=n(27),p=n(0);const h=["children","value"],b=["name"];var m=e=>{let{children:t,value:n}=e,i=Object(a.a)(e,h);return Object(p.jsx)(d.a,Object(s.a)({input:e=>{let{field:{name:n},meta:{touched:o,error:r}}=e,d=Object(a.a)(e.field,b);return Object(p.jsx)(l.Radio,Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({name:n,status:o&&r?"invalid":null},d),Object(u.a)(n)),i),{},{children:c.Children.map(t,e=>e)}))},type:"radio",value:n},i))},j=n(275),f=n(288)},1238:function(e,t,n){},1239:function(e,t,n){},1240:function(e,t,n){},1241:function(e,t,n){},1242:function(e,t,n){},1243:function(e,t,n){},1244:function(e,t,n){},1245:function(e,t,n){},1246:function(e,t,n){},1247:function(e,t,n){},1251:function(e,t,n){},1252:function(e,t,n){},1253:function(e,t,n){},1254:function(e,t,n){},1267:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return x})),n.d(t,"c",(function(){return h}));var i=n(1),o=n(5),r=n(7),s=n(6),a=n(0);let c;var l=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(c||(c=(e=>e)`query VitaEducationItemDegree($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      degree
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({degree:null==e?void 0:e.degree})}))(({degree:e})=>e&&Object(a.jsx)(i.EntityItemInfo,{children:Object(a.jsx)(i.EntityItemInfoItem,{children:e})}));let d;var u=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(d||(d=(e=>e)`query VitaEducationItemFieldOfStudy($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      fieldOfStudy
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({fieldOfStudy:null==e?void 0:e.fieldOfStudy})}))(({fieldOfStudy:e})=>e&&Object(a.jsx)(i.EntityItemInfo,{title:"Field of study",children:Object(a.jsx)(i.EntityItemInfoItem,{children:e})}));let p;var h=Object(r.a)(Object(s.h)(i.EntityItemImage),Object(o.withQuery)(Object(o.gql)(p||(p=(e=>e)`query VitaEducationItemImage($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      institution {
        id
        name
        url
        imageUrl
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>{var t,n,i;return{name:null==e||null===(t=e.institution)||void 0===t?void 0:t.name,url:null==e||null===(n=e.institution)||void 0===n?void 0:n.url,imageUrl:null==e||null===(i=e.institution)||void 0===i?void 0:i.imageUrl}}}))(({name:e,url:t,imageUrl:n})=>e?Object(a.jsx)(i.EntityItemImage,{alt:e,href:t,imageUrl:n}):null);let b;var m=Object(r.a)(Object(s.h)(i.EntityItemInfo),Object(o.withQuery)(Object(o.gql)(b||(b=(e=>e)`query VitaEducationItemLocation($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      country {
        name
        ... on Country {
          id
          __typename
        }
        __typename
      }
      city {
        name
        ... on City {
          id
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
`)),{mapDataToProps:({vita:e})=>{var t,n,i,o;return{city:null!==(t=null==e||null===(n=e.city)||void 0===n?void 0:n.name)&&void 0!==t?t:null,country:null!==(i=null==e||null===(o=e.country)||void 0===o?void 0:o.name)&&void 0!==i?i:null}}}))(({city:e,country:t})=>(e||t)&&Object(a.jsx)(i.EntityItemInfo,{title:"Location",children:Object(a.jsx)(i.EntityItemInfoItem,{children:[e,t].filter(Boolean).join(", ")})}));let j;var f=Object(r.a)(Object(s.h)(i.EntityItemTitle),Object(o.withQuery)(Object(o.gql)(j||(j=(e=>e)`query VitaEducationItemName($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      name
      institution {
        id
        name
        url
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>{var t,n;return{name:(null==e||null===(t=e.institution)||void 0===t?void 0:t.name)||(null==e?void 0:e.name),url:null==e||null===(n=e.institution)||void 0===n?void 0:n.url}}}))(({name:e,url:t})=>Object(a.jsx)(i.EntityItemTitle,{href:t,children:e})),O=n(191);let g;var x=Object(r.a)(Object(s.h)(i.EntityItemMetaItem),Object(o.withQuery)(Object(o.gql)(g||(g=(e=>e)`query VitaEducationItemTimePeriod($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      startDate
      endDate
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e})=>({startDate:null==e?void 0:e.startDate,endDate:null==e?void 0:e.endDate})}))(({startDate:e,endDate:t})=>e&&Object(a.jsxs)(i.EntityItemMetaItem,{children:[Object(a.jsx)(O.default,{value:e,utc:!0,month:"long",day:"none"}),t&&Object(a.jsxs)("span",{children:[" ","- ",Object(a.jsx)(O.default,{value:t,utc:!0,month:"long",day:"none"})]})]}))},127:function(e,t,n){"use strict";var i=n(6),o=n(12),r=n(359),s=n(209),a=n(201);var c=n(362);const l=Object(i.m)(function(){const e=(e,t)=>({hasLiked:Object(s.d)(e,t.id)}),t=(e,{id:t,context:n,iepl:i,qualifier:o,isMobile:s,onLike:c,onUnLike:l,onClick:d})=>({like:()=>(d&&d(),e(Object(r.c)(t,n,i)).then(()=>{c&&c(t),o&&!s&&e(Object(a.a)(o,t))})),unlike:()=>(d&&d(),e(Object(r.d)(t,n,i)).then(()=>{l&&l(t),o&&!s&&e(Object(a.b)(o,t))}))});return n=>Object(o.connect)(e,t)(n)}()(c.a));t.a=l},129:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(105),r=n.n(o),s=n(16),a=n.n(s),c=n(4),l=n(8),d=n.n(l),u=n(1),p=n(539),h=n(6),b=n(11),m=n(18),j=n(14),f=n(13),O=n(720),g=n.n(O),x=n(297),y=n.n(x);const v=(e,{experimentNames:t})=>g()(((e,t)=>{var n,i;return y()(null!==(n=null===(i=e.experimentsRunningExperiments)||void 0===i?void 0:i.experiments)&&void 0!==n?n:{},t)})(e,t),e=>e.map(e=>e.viewId));n(1238);var I=n(0);const _=new d.a("universal-share-user-selection-dialog"),w={USERS:"Suggested people",GROUPS:"Suggested groups",SEARCH_RESULTS:"Search results"};class S extends c.Component{constructor(...e){super(...e),this.state={searchQuery:"",searchResults:[],selectedItems:[],suggestedUsers:this.props.suggestedUsers,loadingSuggestions:!1,loadingSearchResults:!1,currentQuery:"",step:"userSelection",message:"",checkboxChecked:!1,showGroups:!0,highlighted:!0,highlightedIndex:0},this.scoredMilestones=[],this.handleWithMessage=()=>{this.shareResearch(this.state.message)},this.updateMessage=e=>{this.setState({message:e.target.value})},this.loadUsers=r()(e=>{this.setState({currentQuery:""}),Object(m.get)(this.props.searchEndpoint,{query:e,selectedUsers:this.state.selectedItems.map(e=>e.id),sharingRgKey:this.props.rgKey,context:this.props.context,variant:this.props.variant,useFallback:this.props.useFallback}).then(t=>{e?this.setState({searchResults:t.result.map(e=>Object(i.a)(Object(i.a)({},e),{},{isSearchResult:!0})),currentQuery:e}):this.setState({suggestedUsers:t.result.map(e=>Object(i.a)(Object(i.a)({},e),{},{isSearchResult:!0})),currentQuery:""})}).then(()=>{this.setState({loadingSearchResults:!1,highlighted:!0,highlightedIndex:0})})},200),this.reloadSuggestedUsers=r()(()=>{Object(m.get)(this.props.searchEndpoint,{selectedUsers:this.state.selectedItems.map(e=>e.id),variant:this.props.variant,useFallback:this.props.useFallback}).then(e=>{this.setState({suggestedUsers:e.result.map(e=>Object(i.a)(Object(i.a)({},e),{},{isSearchResult:!1}))})}).then(()=>{this.setState({loadingSuggestions:!1,highlighted:!0,highlightedIndex:0})})},200),this.addMessage=()=>{this.setState({step:"message"})},this.goBack=()=>{this.setState({step:"userSelection"})},this.shareInstantly=()=>{this.shareResearch(null)},this.shouldFetchMoreResults=(e,t)=>!e.length||this.state.currentQuery&&t!==this.state.currentQuery||-1!==e.findIndex(e=>e[0]===w.USERS&&e[1].length<5),this.handleCancel=()=>{this.scoreGoalOnce(this.props.milestones.dialogCancelled),this.modal?this.modal.close():this.props.dialog&&this.props.dialog.hide(),this.props.onCancel&&(this.scoreGoalOnce(this.props.milestones.universalShareDialogSkipped),this.props.onCancel()),this.props.followUpUrl&&Object(f.c)(this.props.followUpUrl),this.props.onRequestNext&&this.props.onRequestNext()},this.handleOptionsUpdate=(e,t)=>{this.scoreGoalOnce(this.props.milestones.startTyping),t||(this.setState({currentQuery:""}),this.reloadSuggestedUsers()),this.shouldFetchMoreResults(e,t)&&(this.setState({loadingSearchResults:!0,searchResults:[]}),this.loadUsers(t),this.scoreGoalOnce(this.props.milestones.startTyping),this.setState({currentQuery:""}))},this.handleValueRemove=e=>{this.scoreGoalOnce(this.props.milestones.userDeselected),1===this.state.selectedItems.length&&this.setState({showGroups:!0}),this.setState({selectedItems:this.state.selectedItems.filter(t=>e.id!==t.id),loadingSuggestions:!0}),this.reloadSuggestedUsers()},this.handleSelect=e=>{let t,n;this.scoreGoalOnce(this.getSelectMilestone(e)),e.children?(n=this.state.showGroups,t=new Set([...this.state.selectedItems,...e.children])):(n=!1,t=new Set([...this.state.selectedItems,e])),this.setState({loadingSuggestions:!0,searchResults:[],currentQuery:"",showGroups:n,selectedItems:Array.from(t)})},this.shouldRenderSearchResult=e=>void 0===this.state.selectedItems.find(t=>t.id===e.id),this.shouldRenderSuggested=e=>void 0===this.state.selectedItems.find(t=>t.id===e.id)&&void 0===this.state.searchResults.find(t=>t.id===e.id),this.removeHighlight=()=>{this.setState({highlighted:!1})},this.getSuggestedUserGroups=()=>{const{suggestedUserGroups:e}=this.props,t=e.map(e=>Object(i.a)(Object(i.a)({},e),{},{children:e.children.filter(this.shouldRenderSuggested)})).filter(e=>e.children.length>0);return t&&0!==t.length?t:null},this.getOptions=()=>{if(this.state.currentQuery){const e=this.state.searchResults.filter(e=>this.shouldRenderSearchResult(e));if(e.length)return[[w.SEARCH_RESULTS,e]]}const e=this.getSuggestedUserGroups(),t=this.state.suggestedUsers.filter(e=>this.shouldRenderSuggested(e)),n=[[w.USERS,t]];return e?[[w.GROUPS,e]].concat(n):n},this.renderOption=e=>Object(I.jsxs)(u.PersonListItem,{onMouseOver:this.removeHighlight,size:"s",children:[Object(I.jsx)(u.PersonListItem.Image,{imageUrl:e.image,alt:e.name}),Object(I.jsx)(u.PersonListItem.Fullname,{children:e.name}),e.institution?Object(I.jsx)(u.PersonListItem.MetaItems,{children:Object(I.jsx)(u.PersonListItem.MetaItem,{children:e.institution})}):null]}),this.renderElement=e=>Object(I.jsxs)(u.PersonInlineItem,{children:[Object(I.jsx)(u.PersonInlineItem.Image,{imageUrl:e.image,alt:e.name}),Object(I.jsx)(u.PersonInlineItem.Fullname,{children:e.name})]},e.id),this.getUserSelectionStep=()=>Object(I.jsxs)("div",{children:[Object(I.jsx)(u.Heading,{spacing:"auto",size:"xl",children:this.props.titleText}),Object(I.jsxs)(u.FormGroup,{gutter:"none",children:[Object(I.jsx)(u.FormGroup.Item,{children:Object(I.jsx)(u.Label,{children:"People you want to share with"})}),Object(I.jsx)("div",Object(i.a)(Object(i.a)({},_("advanced-select-wrapper")),{},{children:Object(I.jsx)(u.AdvancedSelect,{placeholder:"Choose from our suggestions or start typing",getOptionListProps:Object(i.a)({},_("results")),displayAs:"list",values:this.state.selectedItems,defaultValues:this.state.selectedItems,multipleValues:!0,retainOptions:!1,closeOnSelect:!0,defaultHighlightedIndex:0,options:this.getOptions(),isLoading:this.state.loadingSearchResults,renderOption:this.renderOption,renderValue:this.renderElement,onValueAdd:this.handleSelect,onValueRemove:this.handleValueRemove,onOptionsUpdate:this.handleOptionsUpdate,filterConfig:{keys:["name"]},getTagInputProps:Object(i.a)({},_("input"))})}))]})]}),this.getMessageStep=()=>Object(I.jsxs)("div",{children:[Object(I.jsxs)(u.Heading,{size:"xl",spacing:"auto",children:[a()("researcher",this.state.selectedItems.length,!0)," selected"]}),Object(I.jsx)(u.Text,{size:"m",spacing:"auto",children:"Add a message to provide more information or tell them why you want to share this work with them."}),Object(I.jsx)(u.Textarea,{onChange:this.updateMessage,placeholder:"Enter your message",rows:4,maxLength:2e3,defaultValue:this.state.message})]}),this.updateCheckBox=e=>{this.scoreGoalOnce(this.props.milestones.checkboxTicked),this.setState({checkboxChecked:e.currentTarget.checked})}}shareResearch(e){const{reduxViewIds:t,phpViewIds:n,context:i,newPrivateLinkId:o,variant:r,rgKey:s,subtype:a}=this.props;Object(m.post)(this.props.submitUrl,{users:this.state.selectedItems.map(e=>({id:e.id,isSearchResult:e.isSearchResult})),rgKey:s,viewIds:[...t||[],...n||[]],message:e,context:i,newPrivateLinkId:o,variant:r,subtype:a}).then(e=>{const t=e.result.totalShares;this.props.onSuccess?this.props.onSuccess.call():(this.props.dispatch(Object(b.pushAlert)(()=>{const e=this.state.selectedItems.length>1?"these researchers":"this researcher";return Object(I.jsx)(u.Alert,{title:this.props.entityName+" shared",description:`We'll notify ${e} that you shared this work with them.`})})),this.modal?this.modal.close():this.props.dialog&&this.props.dialog.hide(),this.props.onShare&&this.props.onShare({totalShares:t}),this.props.followUpUrl&&Object(f.c)(this.props.followUpUrl),this.props.onRequestNext&&this.props.onRequestNext())}).catch(()=>{this.props.dispatch(Object(b.pushAlert)(()=>Object(I.jsx)(u.Alert,{title:"Error while sharing "+this.props.entityName,color:"red"})))})}getCtaButtonStatus(){return this.props.checkBoxText&&!this.state.checkboxChecked?"disabled":this.state.selectedItems.length>0?null:"disabled"}componentDidMount(){this.props.suggestedUsers.length>0&&this.scoreGoalOnce(this.props.milestones.suggestionsPresent),this.scoreGoalOnce(this.props.milestones.universalShareDialogSeen)}scoreGoalOnce(e){this.scoredMilestones.includes(e)||(Object(j.a)(e),this.scoredMilestones=[...this.scoredMilestones,e])}getSelectMilestone(e){return e.children?this.props.milestones.suggestionGroupSelected:e.isSearchResult?this.props.milestones.searchResultSelected:this.props.milestones.suggestionSelected}getCheckBox(){return this.props.checkBoxText?Object(I.jsx)(u.Checkbox,Object(i.a)(Object(i.a)({checked:this.state.checkboxChecked,onChange:this.updateCheckBox},_("checkbox")),{},{children:this.props.checkBoxText})):null}getStepBody(){return"userSelection"===this.state.step?this.getUserSelectionStep():"message"===this.state.step?this.getMessageStep():null}getStepFooter(){return"userSelection"===this.state.step?Object(I.jsxs)(u.ButtonGroup,{children:[Object(I.jsx)(u.Button,{type:"button",theme:"bare",onClick:this.handleCancel,children:this.props.cancelCopy?this.props.cancelCopy:"Cancel"}),Object(I.jsx)(u.Button,{type:"submit",theme:"bare",onClick:this.addMessage,status:this.getCtaButtonStatus(),children:"Add message"}),Object(I.jsx)(u.Button,{type:"submit",onClick:this.shareInstantly,status:this.getCtaButtonStatus(),children:"Share"})]}):"message"===this.state.step?Object(I.jsxs)(u.ButtonGroup,{children:[Object(I.jsx)(u.Button,{type:"button",theme:"bare",onClick:this.goBack,children:"Back"}),Object(I.jsx)(u.Button,{type:"button",color:"blue",onClick:this.handleWithMessage,children:"Share"})]}):null}render(){if(this.props.isAsyncModal)return Object(I.jsxs)(p.a,{ref:e=>this.modal=e,children:[Object(I.jsxs)(p.a.Body,{children:[this.getStepBody(),this.getCheckBox()]}),Object(I.jsx)(p.a.Footer,{children:this.getStepFooter()},"footer")]});const{insideModal:e}=this.props,t=e?"inside-modal":"legacy";return Object(I.jsxs)("div",Object(i.a)(Object(i.a)({},_()),{},{children:[Object(I.jsxs)("div",Object(i.a)(Object(i.a)({},_(t)),{},{children:[this.getStepBody(),this.getCheckBox()]})),Object(I.jsx)("div",Object(i.a)(Object(i.a)({},_(t+"-footer")),{},{children:this.getStepFooter()}))]}))}}S.displayName="UniversalShareDialog";t.default=Object(h.b)((e,t)=>({reduxViewIds:[...v(e,t),t.viewId]}))(S)},133:function(e,t,n){"use strict";n.d(t,"k",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return j}));var i=n(34),o=n.n(i);function r(e){return!!e&&e.toFixed(1)>=.1}function s(e){return r(e)?function(e){return o()(e).format(e>=1e3?"0,0":"0,0.0")}(e):"- -"}function a(e){return r(e)?"+"+s(e):"0"}function c(e){return e+"%"}function l(e){const t=function(e){return o()(e).format("0,0.00")}(e);return e>0?"+"+t:""}function d(e){return Math.floor(100*e)}function u(e){return o()(d(e)).format("0o")}function p(e){return o()(e).format("0.00")}function h(e){return e?c(d(e)):"--%"}function b(e,t){return r(e)?c(function(e){return o()(e).format("0,0")}(t)):"- -"}function m(e){return 100*e}function j(e){return 100*(1-e)}},1335:function(e,t,n){},134:function(e,t,n){var i,o,r,s=n(414),a=n(45),c=n(26),l=n(65),d=n(135),u=n(38),p=n(174),h=n(143),b=n(142),m=a.TypeError,j=a.WeakMap;if(s||p.state){var f=p.state||(p.state=new j),O=c(f.get),g=c(f.has),x=c(f.set);i=function(e,t){if(g(f,e))throw new m("Object already initialized");return t.facade=e,x(f,e,t),t},o=function(e){return O(f,e)||{}},r=function(e){return g(f,e)}}else{var y=h("state");b[y]=!0,i=function(e,t){if(u(e,y))throw new m("Object already initialized");return t.facade=e,d(e,y,t),t},o=function(e){return u(e,y)?e[y]:{}},r=function(e){return u(e,y)}}e.exports={set:i,get:o,has:r,enforce:function(e){return r(e)?o(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}}}},1343:function(e,t,n){},1344:function(e,t,n){},135:function(e,t,n){var i=n(51),o=n(52),r=n(112);e.exports=i?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},1361:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(6),s=n(879),a=n(286),c=n(0);var l=({label:e,toggleFollow:t,hasPermissionToFollow:n})=>n?Object(c.jsx)(i.Button,{type:"button",onClick:t,theme:"bare",size:"s",color:"blue",children:e}):null;let d;const u=Object(r.h)(i.PersonListItem.Action)(({children:e})=>e),p=({id:e,context:t,followActionRenderer:n,isInModal:o})=>Object(c.jsxs)(i.PersonListItem,{size:"s",children:[Object(c.jsx)(a.e,{id:e,context:t,isInModal:o}),Object(c.jsx)(a.c,{id:e,context:t,isInModal:o}),Object(c.jsx)(a.f,{id:e}),Object(c.jsx)(i.PersonListItem.Actions,{children:Object(c.jsx)(u,{children:Object(c.jsx)(s.b,{id:e,context:t,children:n})})})]});p.defaultProps={followActionRenderer:l,isInModal:!1};t.a=Object(o.withQuery)(Object(o.gql)(d||(d=(e=>e)`query FollowPersonListItem($id: ID!) {
  account(id: $id) {
    id
    ...AccountPersonListItemImageLink @embed
    ...AccountPersonListItemFullNameLink @embed
    ...AccountPersonListItemMetaItems @embed
    ...AccountFollowAction @embed
    __typename
  }
  __typename
}
`)))(p)},137:function(e,t,n){var i=n(26),o=i({}.toString),r=i("".slice);e.exports=function(e){return r(o(e),8,-1)}},139:function(e,t,n){var i=n(26);e.exports=i({}.isPrototypeOf)},140:function(e,t,n){var i=n(395),o=n(141);e.exports=function(e){var t=i(e,"string");return o(t)?t:t+""}},141:function(e,t,n){var i=n(66),o=n(31),r=n(139),s=n(254),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&r(t.prototype,a(e))}},142:function(e,t){e.exports={}},1424:function(e,t,n){"use strict";var i=n(1),o=n(0);t.a=({children:e})=>Object(o.jsx)(i.Text,{size:"s",color:"grey-600",spacing:"xxs",children:Object(o.jsx)("strong",{children:e})})},143:function(e,t,n){var i=n(114),o=n(176),r=i("keys");e.exports=function(e){return r[e]||(r[e]=o(e))}},1466:function(e,t,n){"use strict";var i=n(4),o=n(47),r=n(1),s=n(6),a=n(14),c=n(13),l=n(231),d=n(467),u=n(282),p=n(681),h=n(877),b=n(0);class m extends i.Component{getActions(){const{isCollaborator:e,projectUrl:t,status:n}=this.props;return e?n===u.a?Object(b.jsx)(r.EntityItemActions,{children:Object(b.jsx)(r.EntityItemAction,{priority:"secondary",href:t,children:"View"},"view")}):this.getCollaboratorActions():this.getNonCollaboratorActions()}getCollaboratorActions(){const{shareUpdateUrl:e,entryChannel:t}=this.props;return Object(b.jsx)(r.EntityItemActions,{children:Object(b.jsx)(r.EntityItemAction,{priority:"tertiary",href:Object(c.a)(e,{entryChannel:t}),children:"Add update"},"addUpdate")})}getNonCollaboratorActions(){const{isScientistLoggedIn:e,projectId:t,projectUrl:n}=this.props,i=[];return i.push(Object(b.jsx)(r.EntityItemAction,{priority:"secondary",href:n,children:"View"},"view")),e&&i.push(Object(b.jsx)(p.a,{projectId:t,theme:"bare",labelFollow:"Follow",labelFollowing:"Following",useHover:!1},"follow")),Object(b.jsx)(r.EntityItemActions,{children:i})}render(){const{title:e,projectId:t,projectUrl:n,updateCount:i}=this.props;let o=n;return this.props.milestoneClickProject&&(o=Object(c.a)(n,Object(a.b)(this.props.milestoneClickProject))),Object(b.jsx)("div",{className:"profile-project-list__item",children:Object(b.jsx)(h.a,{actions:this.getActions(),projectId:t,status:this.props.status,title:e,updateCount:i,url:o,gtmClassName:"gtm-project-item",descriptionClamp:!0})})}}m.displayName="ProjectListItemNew";const j=Object(o.a)([u.g,l.a,l.c],(e,t,n)=>{const i=Object(d.m)(t,e);return{isScientistLoggedIn:n,title:e.title,description:e.description,projectUrl:e.projectURL,shareUpdateUrl:e.urls.shareUpdate,updateCount:e.updateCount,status:e.status,isCollaborator:i}});t.a=Object(s.b)(j)(m)},1482:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const i="grant",o={award:"Award",scholarship:"Scholarship",grant:"Grant"}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return a}));var i=n(433);const o=new i.EventEmitter,r=o.emit.bind(o),s=o.addListener.bind(o),a=o.removeListener.bind(o),c="converse:BodyField:focus"},156:function(e,t,n){"use strict";var i=n(2),o=n(1),r=n(5),s=n(7),a=n(6),c=n(13),l=n(19),d=n(0);const u=({journalTitle:e,journalUrl:t,urlParams:n,hasLink:r})=>{if(!e)return null;let s=e;return r&&t&&(s=Object(d.jsx)(o.Link,{href:Object(c.a)(t,Object(i.a)({},n)),children:e})),Object(d.jsx)(o.PublicationItem.MetaItem,{children:s})};u.defaultProps={urlParams:{},hasLink:!0},t.a=Object(s.a)(Object(a.h)(o.PublicationItem.MetaItem),Object(r.withQuery)(l.k,{mapDataToProps:({publication:e})=>{var t,n;return{publicationId:null==e?void 0:e.id,journalTitle:null==e||null===(t=e.journal)||void 0===t?void 0:t.title,journalUrl:null==e||null===(n=e.journal)||void 0===n?void 0:n.url}}}))(u)},157:function(e,t,n){"use strict";var i=n(2),o=n(1),r=n(5),s=n(191),a=n(7),c=n(6),l=n(19),d=n(0);t.a=Object(a.a)(Object(c.h)(o.PublicationItem.MetaItem),Object(r.withQuery)(l.q,{mapDataToProps:({publication:e})=>Object(i.a)({},e)}))(({publicationDate:e})=>e?Object(d.jsx)(o.PublicationItem.MetaItem,{children:Object(d.jsx)(s.default,{day:"none",value:e,utc:!0})}):null)},1617:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(940);const o=({id:e,title:t})=>e?i.c[e]:t},162:function(e,t,n){var i=n(378);e.exports=function(e){return i(e.length)}},1622:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return g}));var i=n(1),o=n(5),r=n(7),s=n(6),a=n(0);let c;Object(r.a)(Object(s.h)(i.PersonListItem.Info),Object(o.withQuery)(Object(o.gql)(c||(c=(e=>e)`query AuthorPersonListItemCurrentAffiliation($id: ID!) {
  author(id: $id) {
    id
    currentAffiliationName
    __typename
  }
  __typename
}
`))))(({author:e})=>(null==e?void 0:e.currentAffiliationName)&&Object(a.jsx)(i.PersonListItem.Info,{title:"Current affiliation",children:Object(a.jsx)(i.PersonListItem.InfoItem,{children:e.currentAffiliationName})}));let l;Object(r.a)(Object(s.h)(i.PersonListItem.Info),Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query AuthorPersonListItemDisciplines($id: ID!) {
  author(id: $id) {
    id
    disciplines {
      id
      science {
        id
        name
        topicUrl
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`))))(({author:e})=>{var t;return(null==e||null===(t=e.disciplines)||void 0===t?void 0:t.length)>0&&Object(a.jsx)(i.PersonListItem.Info,{title:"Disciplines",children:e.disciplines.map((e,t)=>Object(a.jsx)(i.PersonListItem.InfoItem,{href:e.science.topicUrl,children:e.science.name},t))})});var d=({fullName:e,url:t})=>Object(a.jsx)(i.PersonListItem.Fullname,{href:t,children:e});let u;var p=Object(r.a)(Object(s.h)(i.PersonListItem.Fullname),Object(o.withQuery)(Object(o.gql)(u||(u=(e=>e)`query AuthorPersonListItemFullName($id: ID!) {
  author(id: $id) {
    id
    fullName
    __typename
  }
  __typename
}
`)),{mapDataToProps:({author:e})=>({fullName:e.fullName})}))(d);let h;var b=Object(r.a)(Object(s.h)(i.PersonListItem.Fullname),Object(o.withQuery)(Object(o.gql)(h||(h=(e=>e)`query AuthorPersonListItemFullNameLink($id: ID!) {
  author(id: $id) {
    id
    fullName
    url
    __typename
  }
  __typename
}
`)),{mapDataToProps:({author:e})=>({fullName:e.fullName,url:e.url})}))(d);var m=({fullName:e,imageUrl:t,url:n})=>Object(a.jsx)(i.PersonListItem.Image,{alt:e,imageUrl:t,href:n});let j;var f=Object(r.a)(Object(s.h)(i.PersonListItem.Image),Object(o.withQuery)(Object(o.gql)(j||(j=(e=>e)`query AuthorPersonListItemImage($id: ID!) {
  author(id: $id) {
    id
    fullName
    imageUrl
    __typename
  }
  __typename
}
`)),{mapDataToProps:({author:e})=>({fullName:e.fullName,imageUrl:e.imageUrl})}))(m);let O;var g=Object(r.a)(Object(s.h)(i.PersonListItem.Image),Object(o.withQuery)(Object(o.gql)(O||(O=(e=>e)`query AuthorPersonListItemImageLink($id: ID!) {
  author(id: $id) {
    id
    fullName
    imageUrl
    url
    __typename
  }
  __typename
}
`)),{mapDataToProps:({author:e})=>({fullName:e.fullName,imageUrl:e.imageUrl,url:e.url})}))(m),x=n(1032);let y;var v=Object(r.a)(Object(s.h)(i.PersonListItem.MetaItem),Object(o.withQuery)(Object(o.gql)(y||(y=(e=>e)`query AuthorPersonListItemIsClaimedMetaItem($id: ID!) {
  author(id: $id) {
    id
    claimingAccount {
      id
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({author:e})=>{var t;return{isClaimed:!(null==e||null===(t=e.claimingAccount)||void 0===t||!t.id)}}}))(({isClaimed:e})=>e?null:Object(a.jsx)(i.PersonListItem.MetaItem,{children:x.a}))},163:function(e,t,n){var i=n(413);e.exports=function(e){var t=+e;return t!=t||0===t?0:i(t)}},164:function(e,t,n){var i=n(190),o=n(31),r=n(137),s=n(49)("toStringTag"),a=Object,c="Arguments"==r(function(){return arguments}());e.exports=i?r:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=a(e),s))?n:c?r(t):"Object"==(i=r(t))&&o(t.callee)?"Arguments":i}},165:function(e,t,n){"use strict";var i=n(23),o=n(4),r=n(1),s=n(89),a=n(6),c=n(83),l=n(353),d=n(246),u=n(294),p=n(7),h=n(0);const b=({progress:e})=>Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"item-upload-progress-bar",children:Object(h.jsx)("div",{style:{width:e+"%"}})}),Object(h.jsxs)("span",{children:[Math.floor(e),"%"]})]});var m=Object(p.a)(Object(a.u)(({file:e})=>({progress:100*e.progress||0})),Object(a.a)(({progress:e})=>0===e||100===e,a.k,Object(a.j)(b)))(b),j=n(279);class f extends o.Component{render(){const{remove:e,uploadState:{fileList:t}}=this.props,n=Object(i.default)(this.props.className,{"research-update-item":!0});return t&&t.length?Object(h.jsx)("div",{className:n,children:t.map((t,n)=>{const{nativeFile:i,response:o}=t,s=[];let a=null;if(o&&o.success)a=o.result.id,t.status===c.a.IDLE&&s.push(Object(h.jsx)("span",{className:"ajax-loading-small"})),o.result.image&&s.push(Object(h.jsx)(u.a,{downloadUrl:o.result.url,imageUrl:o.result.image.large,children:Object(h.jsx)(r.Button,{type:"button",theme:"bare",color:"grey",children:"View"})})),o.result.url&&s.push(Object(h.jsx)(r.Button,{type:"button",theme:"bare",color:"grey",href:o.result.url,children:"Download"}));else if(o&&!o.success){var p,b;s.push(Object(h.jsx)(r.Tooltip,{color:"black",target:Object(h.jsx)(r.Button,{type:"button",theme:"bare",color:"yellow",children:"File not added"}),children:"You can't add this file due to copyright restrictions from the publisher."})),(null===(p=o.errorMetadata)||void 0===p?void 0:p.fileUrl)&&s.push(Object(h.jsx)(r.Button,{type:"button",theme:"bare",color:"grey",href:null===(b=o.errorMetadata)||void 0===b?void 0:b.fileUrl,children:"Download"}))}return s.push(Object(h.jsx)(r.Button,{type:"button",theme:"bare",color:"grey",onClick:()=>e(t),children:"Remove"})),Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{headline:i.name,subline:Object(h.jsx)(j.a,{fileSize:i.size}),actions:s,iconText:Object(l.a)(i.type),isFilePreviewEnabled:!1,isInactive:!1,attachmentFieldName:"fileReference",attachmentId:a}),Object(h.jsx)(m,{file:t})]},"attachment-list-item-"+n)})}):null}}f.displayName="UploadFileList",f.defaultProps={className:"project-updates-attachment-list"};t.a=Object(a.b)((e,t)=>({uploadState:Object(s.a)(t.id,e)}),(e,t)=>({remove:n=>e(Object(c.t)(t.id)(n))}))(f)},166:function(e,t,n){var i=n(31),o=n(169),r=TypeError;e.exports=function(e){if(i(e))return e;throw r(o(e)+" is not a function")}},167:function(e,t,n){"use strict";var i=n(2),o=n(8),r=n.n(o),s=n(686),a=n(1),c=n(0);const l=new r.a("file-upload-conditions-checkbox"),d=({input:e,meta:{touched:t,error:n,invalid:o},isFilePrivate:r,isUnified:s,checked:d,isHidden:u})=>{let p=r?"I have reviewed and verified each file I am uploading. I have the right to privately store each file for use by me and the co-authors, and agree to the ":"I have the right to share each file publicly and confirm that it does not violate the rights of another person or entity.";return s&&(p="I have reviewed and verified each file I am uploading. I have the right to share each file publicly and/or store a private copy accessible to me and the co-authors, as applicable. By uploading this file, I agree to the "),u?null:Object(c.jsxs)(a.Checkbox,Object(i.a)(Object(i.a)(Object(i.a)({},e),l),{},{checked:!!d,children:[p," ",t&&o&&Object(c.jsx)("span",Object(i.a)(Object(i.a)({},l("error")),{},{children:n}))]}))};t.a=e=>Object(c.jsx)(s.a,Object(i.a)(Object(i.a)({},e),{},{component:d}))},168:function(e,t){var n=TypeError;e.exports=function(e){if(null==e)throw n("Can't call method on "+e);return e}},169:function(e,t){var n=String;e.exports=function(e){try{return n(e)}catch(e){return"Object"}}},170:function(e,t){e.exports={}},171:function(e,t,n){var i=n(52).f,o=n(38),r=n(49)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!o(e,r)&&i(e,r,{configurable:!0,value:t})}},172:function(e,t,n){var i=n(45),o=n(65),r=i.document,s=o(r)&&o(r.createElement);e.exports=function(e){return s?r.createElement(e):{}}},173:function(e,t,n){var i=n(38),o=n(31),r=n(107),s=n(143),a=n(270),c=s("IE_PROTO"),l=Object,d=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=r(e);if(i(t,c))return t[c];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},174:function(e,t,n){var i=n(45),o=n(175),r=i["__core-js_shared__"]||o("__core-js_shared__",{});e.exports=r},175:function(e,t,n){var i=n(45),o=Object.defineProperty;e.exports=function(e,t){try{o(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},1758:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(1),r=n(6),s=n(15),a=n(0);class c extends i.Component{constructor(...t){super(...t),this.handleShowSharedPublicationsModal=()=>{const t={sourceAccountKey:this.props.sourceAccountKey};this.props.targetAccountKey?t.targetAccountKey=this.props.targetAccountKey:t.targetAuthorUid=this.props.targetAuthorUid,this.props.dispatch(Object(s.mountAsyncModal)("literature.PublicationRelatedPublicationListDialog.html",t,void 0,()=>Promise.all([n.e(0),n.e(561)]).then(n.bind(null,2961)),e.hot&&!1))}}render(){return this.props.popupDefined?Object(a.jsx)(o.Text,{color:"grey-600",children:Object(a.jsxs)(o.Link,{theme:"bare",className:"ga-shared-publication-count",title:"Shared publications",onClick:this.handleShowSharedPublicationsModal,children:["(",this.props.sharedPublicationsCount,")"]})}):this.props.linkUrl?Object(a.jsx)(o.Text,{color:"grey-600",children:Object(a.jsxs)(o.Link,{theme:"bare",href:this.props.linkUrl,title:"Shared publications",children:["(",this.props.sharedPublicationsCount,")"]})}):Object(a.jsxs)(o.Text,{color:"grey-600",title:"Shared publications",children:["(",this.props.sharedPublicationsCount,")"]})}}c.displayName="PeopleItemSharedPublicationsCount",t.a=Object(r.b)()(c)}).call(this,n(58)(e))},176:function(e,t,n){var i=n(26),o=0,r=Math.random(),s=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+r,36)}},177:function(e,t,n){var i=n(26),o=n(30),r=n(137),s=Object,a=i("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?a(e,""):s(e)}:s},178:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},179:function(e,t,n){var i=n(51),o=n(70),r=n(259),s=n(112),a=n(73),c=n(140),l=n(38),d=n(255),u=Object.getOwnPropertyDescriptor;t.f=i?u:function(e,t){if(e=a(e),t=c(t),d)try{return u(e,t)}catch(e){}if(l(e,t))return s(!o(r.f,e,t),e[t])}},180:function(e,t,n){var i=n(51),o=n(38),r=Function.prototype,s=i&&Object.getOwnPropertyDescriptor,a=o(r,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&s(r,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},181:function(e,t,n){var i=n(26),o=n(31),r=n(174),s=i(Function.toString);o(r.inspectSource)||(r.inspectSource=function(e){return s(e)}),e.exports=r.inspectSource},182:function(e,t,n){var i=n(258),o=n(178).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(2),o=n(10),r=n(4),s=n(12),a=n(47),c=n(33),l=n(11),d=n(249),u=n(221),p=n(0);const h=["isVisible","isFollowing","canFollow"];function b(){const e=Object(a.a)([u.e,u.a,u.b,u.d],(e,t,n,i)=>{const{isFollowing:o,followEndpoint:r,unfollowEndpoint:s}=e.toJS(),{labelFollow:a,labelUnfollow:c,labelFollowing:l}=i.toJS();return{isFollowing:o,followEndpoint:r,unfollowEndpoint:s,canFollow:t,publicationUid:n,isVisible:!0,labelFollow:a,labelUnfollow:c,labelFollowing:l}}),t=e=>({follow:(t,n)=>e(Object(d.c)(t,n)).then(t=>{e(Object(l.pushAlert)(()=>Object(p.jsx)(c.a,{title:t[0]})))}),unfollow:(t,n)=>e(Object(d.e)(t,n)).then(t=>e(Object(l.pushAlert)(()=>Object(p.jsx)(c.a,{title:t[0]}))))});return n=>{class a extends r.Component{constructor(...e){super(...e),this.toggleFollow=e=>{e&&e.stopPropagation();const{isFollowing:t}=this.props;t?this.handleUnfollow():this.handleFollow()},this.handleFollow=e=>{e&&e.stopPropagation();const{follow:t,followEndpoint:n,publicationUid:i}=this.props;t(n,i)},this.handleUnfollow=e=>{e&&e.stopPropagation();const{unfollow:t,unfollowEndpoint:n,publicationUid:i}=this.props;t(n,i)}}render(){const e=this.props,{isVisible:t,isFollowing:r,canFollow:s}=e,a=Object(o.a)(e,h);return t&&s?(delete a.follow,delete a.unfollow,Object(p.jsx)(n,Object(i.a)({follow:this.handleFollow,unfollow:this.handleUnfollow,toggleFollow:this.toggleFollow,isFollowing:r},a))):null}}return a.displayName="FollowWrapper",Object(s.connect)(e,t)(a)}}},185:function(e,t){t.f=Object.getOwnPropertySymbols},186:function(e,t,n){"use strict";var i=n(12),o=n(1),r=n(89),s=n(0);const a=(e,t)=>{const n=e.map(e=>`"${e.nativeFile.name}"`)[0],i=(r=(e=>e.map(e=>{var t,n;return(null===(t=e.response)||void 0===t||null===(n=t.errorMetadata)||void 0===n?void 0:n.copyrightHolder)||"name unknown"}))(e)).length<1?""+r[0]:r.length<3?r.join(" and "):`${r.slice(0,-1).join(", ")}, and ${r[r.length-1]}`;var r;const a=e.length>1,c=()=>`The ${a?"publishers":"publisher"}, ${i}, ${a?"have":"has"} required us to block public uploads of ${a?"these files":"this file"}`;return Object(s.jsxs)(o.Text,{children:[`${"Sorry, you can't add "+(a?"these files.":`your file ${n}.`)} ${c()}`,"."," ",Object(s.jsx)(o.Link,{href:t,target:"_blank",children:"Learn more."}),Object(s.jsx)("br",{}),"Please remove the ",a?"files":"file",". You can try adding"," ",a?"different files":"a different file","."]})};t.a=Object(i.connect)((e,t)=>({uploadState:Object(r.a)(t.id,e)}))(({uploadState:{fileList:e},publisherContentBlockingUrl:t})=>{if(!e||!e.length)return null;const n=e&&(e=>null==e?void 0:e.filter(e=>"done"===(null==e?void 0:e.status)&&!(null!=e&&e.response.success)))(e);return(null==n?void 0:n.length)>0&&Object(s.jsxs)(o.Flex,{children:[Object(s.jsx)(o.Flex.Item,{children:Object(s.jsx)(o.Icon,{color:"yellow",identifier:"close-circle",size:"l"})}),Object(s.jsx)(o.Flex.Item,{children:a(n,t)})]})})},187:function(e,t,n){"use strict";var i=n(1),o=n(13),r=n(0);t.a=({url:e,urlParams:t,title:n,clamp:s})=>Object(r.jsx)(i.PublicationItem.Title,{href:t?Object(o.a)(e,t):e,clamp:s,children:n})},188:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(0);let s;t.a=Object(o.withQuery)(Object(o.gql)(s||(s=(e=>e)`query ContentFilterCopyrightLegalInformation {
  urlGenerator {
    copyrightHelpCenterUrl
    publisherPolicyUrl
    __typename
  }
  __typename
}
`)))(({urlGenerator:e})=>Object(r.jsxs)(i.Text,{size:"s",color:"grey-700",children:["You can learn about copyright and ResearchGate"," ",Object(r.jsx)(i.Link,{href:e.copyrightHelpCenterUrl,target:"_blank",children:"here"}),", and find links to specific publishers' policies"," ",Object(r.jsx)(i.Link,{href:e.publisherPolicyUrl,target:"_blank",children:"here"}),"."]}))},19:function(e,t,n){"use strict";n.d(t,"r",(function(){return I})),n.d(t,"q",(function(){return _})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return S})),n.d(t,"n",(function(){return P})),n.d(t,"o",(function(){return C})),n.d(t,"k",(function(){return k})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return D})),n.d(t,"l",(function(){return E})),n.d(t,"m",(function(){return T})),n.d(t,"j",(function(){return F})),n.d(t,"f",(function(){return M})),n.d(t,"p",(function(){return R})),n.d(t,"a",(function(){return N})),n.d(t,"g",(function(){return L})),n.d(t,"e",(function(){return B})),n.d(t,"b",(function(){return q}));var i=n(5);n(400);let o,r,s,a,c,l,d,u,p,h,b,m,j,f,O,g,x,y,v=e=>e;const I=Object(i.gql)(o||(o=v`query PublicationItemTitle($id: ID!) {
  publication(id: $id) {
    id
    title
    url
    __typename
  }
  __typename
}
`)),_=Object(i.gql)(r||(r=v`query PublicationItemPublicationDate($id: ID!) {
  publication(id: $id) {
    id
    publicationDate
    __typename
  }
  __typename
}
`)),w=Object(i.gql)(s||(s=v`query PublicationItemBadges($id: ID!) {
  publication(id: $id) {
    id
    url
    publicationDate
    concreteType {
      name
      __typename
    }
    hasLiteratureReview
    hasPublisherPreviewPermissionsOnly
    viewerLinks {
      firstDownloadableOrInlineViewableLink {
        link {
          id
          isVisibilityPrivate
          __typename
        }
        __typename
      }
      downloadableOrInlineViewablePublicNonPublisherLinks(limit: 10) {
        link {
          id
          __typename
        }
        __typename
      }
      hasPubliclyDownloadableOrInlineViewableLink
      __typename
    }
    isAuthor
    isPublishedVersionAvailable
    __typename
  }
  __typename
}
`)),S=Object(i.gql)(a||(a=v`query PublicationItemAuthors($id: ID!) {
  publication(id: $id) {
    id
    representativeClaimedAuthorship {
      fullName
      url
      imageUrl
      __typename
    }
    authorships {
      fullName
      url
      imageUrl
      author {
        id
        claimingAccount {
          id
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
`)),P=Object(i.gql)(c||(c=v`query PublicationItemMetricRecommendations($id: ID!) {
  publication(id: $id) {
    id
    likeCount
    recentRecommenders(limit: 10) {
      id
      fullName
      __typename
    }
    statsUrl
    __typename
  }
  __typename
}
`)),C=Object(i.gql)(l||(l=v`query PublicationItemOriginJournal($id: ID!) {
  publication(id: $id) {
    id
    journal {
      id
      title
      url
      journalBrandingConfig {
        id
        isJournalBranded
        __typename
      }
      __typename
    }
    ...PublicationItemJournalTooltip @embed
    __typename
  }
  __typename
}
`)),k=Object(i.gql)(d||(d=v`query PublicationItemMetaItemJournal($id: ID!) {
  publication(id: $id) {
    id
    journal {
      id
      title
      url
      __typename
    }
    __typename
  }
  __typename
}
`)),A=Object(i.gql)(u||(u=v`query PublicationItemJournalTooltip($id: ID!) {
  publication(id: $id) {
    id
    journal {
      id
      title
      url
      description
      cooperationPartnerBrand {
        brandName
        logoImage {
          url
          alt
          __typename
        }
        __typename
      }
      __typename
    }
    ...JournalBusinessCard @embed
    __typename
  }
  __typename
}
`)),D=Object(i.gql)(p||(p=v`query PublicationItemMetaItemCitations($id: ID!, $includeCitationUrl: Boolean = true) {
  publication(id: $id) {
    id
    citationUrl @include(if: $includeCitationUrl)
    incomingCitationCount
    __typename
  }
  __typename
}
`)),E=Object(i.gql)(h||(h=v`query PublicationItemMetricCitations($id: ID!, $includeCitationUrl: Boolean = true) {
  publication(id: $id) {
    id
    citationUrl @include(if: $includeCitationUrl)
    incomingCitationCount
    __typename
  }
  __typename
}
`)),T=Object(i.gql)(b||(b=v`query PublicationItemMetricReads($id: ID!, $includeStatsUrl: Boolean = true) {
  publication(id: $id) {
    id
    statsUrl @include(if: $includeStatsUrl)
    stats {
      readMetrics {
        all {
          total
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
`)),F=Object(i.gql)(m||(m=v`query PublicationItemMetaItemConference($id: ID!) {
  publication(id: $id) {
    id
    publicationTypeData {
      ... on PublicationInProceedings {
        conferenceName
        __typename
      }
      ... on PublicationPresentation {
        conferenceName
        __typename
      }
      ... on PublicationPoster {
        conferenceName
        __typename
      }
      ... on PublicationCoverPage {
        conferenceName: conference
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),M=Object(i.gql)(j||(j=v`query PublicationItemDefaultMetaItems($id: ID!) {
  publication(id: $id) {
    id
    ...PublicationItemPublicationDate @embed
    ...PublicationItemMetaItemJournal @embed
    ...PublicationItemMetaItemConference @embed
    __typename
  }
  __typename
}
`)),R=Object(i.gql)(f||(f=v`query PublicationItemPreview($id: ID!) {
  publication(id: $id) {
    id
    url
    id
    viewerLinks {
      firstDownloadableOrInlineViewablePublicLink {
        link {
          id
          previewImageUrl(size: SMALL)
          extendedLink {
            sourceName
            sourceUrl
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
  __typename
}
`)),N=Object(i.gql)(O||(O=v`query ProfileContributionsPublicationsListItemActionsMobile($id: ID!) {
  publication(id: $id) {
    id
    isAuthor
    didRequestFullText
    viewerLinks {
      hasDownloadableLink
      __typename
    }
    hasReceivedFulltextOrData
    concreteType {
      name
      __typename
    }
    isPublishedVersionAvailable
    ...ResearchActionAddFullText @embed
    ...ResearchActionAddSupplementaryResources @embed
    ...ResearchActionDownload @embed
    ...ResearchActionRequestFullText @embed
    ...ResearchActionAddPublishedVersion @embed
    ...ResearchActionAddSupplementaryResources @embed
    ...ResearchActionEdit @embed
    __typename
  }
  __typename
}
`)),L=Object(i.gql)(g||(g=v`query PublicationItemFigures($id: ID!) {
  publication(id: $id) {
    id
    activeFiguresCount
    activeFigures(limit: 5) {
      id
      cleanCaption
      imageUrlQ320: absoluteImageUrl(size: "Q320")
      imageUrlQ640: absoluteImageUrl(size: "Q640")
      figureUrl
      __typename
    }
    __typename
  }
  __typename
}
`)),B=Object(i.gql)(x||(x=v`query PublicationItemBadgesRedesign($id: ID!) {
  publication(id: $id) {
    id
    url
    concreteType {
      name
      __typename
    }
    hasLiteratureReview
    isAuthor
    isPublishedVersionAvailable
    __typename
  }
  __typename
}
`)),q=Object(i.gql)(y||(y=v`query PublicationItemAbstract($id: ID!) {
  publication(id: $id) {
    id
    abstract
    __typename
  }
  __typename
}
`))},190:function(e,t,n){var i={};i[n(49)("toStringTag")]="z",e.exports="[object z]"===String(i)},1903:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(1),s=n(5),a=n(6),c=n(0);let l;const d=["allDegrees","values","dispatch","onChange","onDegreeChange"],u=e=>{let{allDegrees:t,values:n,dispatch:s,onChange:a,onDegreeChange:l}=e,u=Object(o.a)(e,d);return Object(c.jsx)(r.AdvancedSelect,Object(i.a)({options:t,allowCustomValues:!0,getInputProps:{maxLength:250},multipleValues:!1,values:n,onChange:e=>{l(e),a(e)}},u))};u.defaultProps={onChange:()=>{},onDegreeChange:()=>{}},Object(s.gql)(l||(l=(e=>e)`fragment ProfileDegreeSelect on Degree {
  id
  name
  __typename
}
`)),t.a=Object(a.u)(({allDegrees:e})=>({allDegrees:e.map(e=>e.name)}))(u)},1904:function(e,t,n){"use strict";var i=n(682);t.a=e=>{const t=(new Date).setHours(0,0,0,0),n=new Date(e).setHours(0,0,0,0),o=Object(i.default)(n,t);return o>0?o:0}},1905:function(e,t,n){"use strict";var i=n(4),o=n(2383),r=n(5),s=n(17),a=n(525),c=n(0);let l;const d=Object(r.gql)(l||(l=(e=>e)`query InstitutionSelectorFormField($query: String!) {
  searchInstitutions(query: $query) {
    id
    name
    __typename
  }
  __typename
}
`));class u extends i.Component{constructor(...e){super(...e),this.state={institutionId:this.props.institutionId},this.handleInstitutionChange=({id:e})=>{this.setState({institutionId:null!=e?e:null})}}render(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.AdvancedSelectFormField,{label:this.props.label,placeholder:this.props.placeholder,name:"institution",errorReporting:this.props.errorReporting,normalize:e=>e?e.name:null,onChange:this.handleInstitutionChange,children:Object(c.jsx)(a.a,{query:d,getOptionListData:e=>e.searchInstitutions,selectorKey:"name"})}),Object(c.jsx)(s.HiddenField,{name:"institutionId",value:this.state.institutionId})]})}}u.displayName="InstitutionSelectorFormField",u.defaultProps={errorReporting:"compact",label:"Institution or company",placeholder:"Enter your company or institution"},t.a=Object(o.a)("institutionId")(u)},1919:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(1),s=n(80),a=n(6),c=n(15),l=n(1082),d=n(1758),u=n(1032),p=n(0),h=()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(681)]).then(n.bind(null,1391));class b extends o.Component{constructor(e){super(e),this.inviteAuthor=()=>{this.setState({inviteButtonStatus:"busy"});const e={rgKeys:[this.props.shareRgKey],invitationContext:this.props.invitationContext};this.props.dispatch(Object(c.mountModal)(()=>Object(p.jsx)(s.a,{url:"share.AuthorsInviteDialog.html",widgetParams:e,renderPreloader:!1,onClose:()=>{this.props.dispatch(Object(c.unmountModal)()),this.setState({inviteButtonStatus:""})},onSuccess:()=>{this.props.dispatch(Object(c.unmountModal)()),this.setState({inviteButtonStatus:"success"})},__internalLoadComponent:h})))},this.state={inviteButtonStatus:""}}getMetaItems(){const e=[];return this.props.peopleItemSharedPublicationsCount&&e.push(Object(p.jsx)(r.PersonListItem.MetaItem,{children:Object(p.jsx)("span",{className:"profile-coauthors-account-item__shared-publications",children:Object(p.jsx)(d.a,{widgetId:this.props.peopleItemSharedPublicationsCount})})},"sharedPublications")),e.push(Object(p.jsx)(r.PersonListItem.MetaItem,{children:Object(p.jsx)("span",{className:"profile-coauthors-account-item__notRG-text",children:u.a})},"notOnRG")),Object(p.jsx)(r.PersonListItem.MetaItems,{children:e})}getActions(){if(!this.props.isLoggedIn)return null;const e=[];return this.props.canInvite?e.push(Object(p.jsx)(r.Button,Object(i.a)(Object(i.a)({size:"s",color:"grey",onClick:this.inviteAuthor,type:"button",status:this.state.inviteButtonStatus},this.props.buttonProps),{},{children:Object(p.jsx)(r.Button.Label,{children:"Invite"})}),"invite")):e.push(Object(p.jsxs)(r.Button,Object(i.a)(Object(i.a)({size:"s",color:"grey",type:"button",disabled:"true"},this.props.buttonProps),{},{children:[Object(p.jsx)(r.Button.Icon,{identifier:"check",size:"s"}),Object(p.jsx)(r.Button.Label,{children:"Invited"})]}),"invited")),Object(p.jsx)(r.PersonListItem.Actions,{children:e})}render(){const e=l.a;return Object(p.jsx)("div",{children:Object(p.jsxs)(r.PersonListItem,{size:"s",className:this.props.gtmClassName,children:[Object(p.jsx)(r.PersonListItem.Fullname,{href:this.props.url,children:this.props.authorName}),Object(p.jsx)(r.PersonListItem.Image,{href:this.props.url,imageUrl:e,alt:this.props.authorName}),this.getMetaItems(),this.getActions()]})})}}b.displayName="ProfileCoAuthorsAuthorItem",b.defaultProps={buttonProps:{theme:"bare"}},t.a=Object(a.b)()(b)},1985:function(e,t,n){"use strict";var i=n(3),o=n.n(i),r=n(1),s=n(0);o.a.arrayOf(o.a.shape({id:o.a.string,name:o.a.string}));t.a=({items:e})=>Object(s.jsx)(r.List,{type:"inline",spacing:"none",children:e.map(({id:e,name:t})=>Object(s.jsx)(r.List.Item,{children:t},e))})},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var i=n(11),o=n(302),r=n(303),s=n(0);const a=(e,t)=>Object(i.pushAlert)(()=>Object(s.jsx)(o.a,{qualifier:e}),"like-"+t),c=(e,t)=>Object(i.pushAlert)(()=>Object(s.jsx)(r.a,{qualifier:e}),"unlike-"+t)},2021:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(12),r=n(1),s=n(5),a=n(7),c=n(15),l=n(2180),d=n(559),u=n(574),p=n(2181),h=n(940),b=n(2209),m=n(0);let j;t.a=Object(a.a)(Object(o.connect)(),Object(s.withQuery)(Object(s.gql)(j||(j=(e=>e)`query AccountJournalRoles($accountId: ID!, $journalsLimit: Int = 5) {
  account(id: $accountId) {
    id
    profile {
      hasPermissionToEdit
      journalRoles {
        id
        journalsCount
        ...AccountJournalRole @embed(journalsLimit: $journalsLimit)
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n;return{hasPermissionToEdit:null===(t=e.profile)||void 0===t?void 0:t.hasPermissionToEdit,journalRoles:null===(n=e.profile)||void 0===n?void 0:n.journalRoles}}}))(({accountId:t,context:o,dispatch:s,hasPermissionToEdit:a,journalRoles:j})=>{const[f,O]=Object(i.useState)(!1),g=()=>O(e=>!e),x=(null==j?void 0:j.length)>0;if(!x&&!a)return null;const y=j.some(({journalsCount:e})=>e>h.a);return Object(m.jsxs)(r.Card,{spacing:"m",children:[Object(m.jsx)(r.Card.Header,{spacing:"m",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(u.a.Label,{children:"Current journal roles"}),a&&x&&Object(m.jsx)(u.a.Action,{icon:"pencil",onClick:g,children:"Edit"})]})}),Object(m.jsxs)(r.Card.Body,{spacing:"m",children:[x&&!f&&Object(m.jsx)(r.Stack,{gutter:"s",spacing:"none",gutterOutside:!1,showDivider:!1,children:j.map(e=>Object(m.jsx)(r.Stack.Item,{children:Object(m.jsx)(p.a,{id:e.id,journalsLimit:h.a})},e.id))}),!x&&!f&&Object(m.jsx)(d.b,{imageSrc:l.a,headline:"Add your current journal roles",ariaLabel:"Add your current journal roles",note:"Let others know about any work you do for scientific journals.",onClick:g}),f&&Object(m.jsx)(b.a,{accountId:t,context:o,toggleEditMode:g})]}),y&&Object(m.jsx)(r.Card.Footer,{align:"center",children:Object(m.jsx)(r.Button,{type:"button",theme:"bare",color:"grey",size:"l",onClick:()=>s(Object(c.mountAsyncModal)("profile.AccountJournalRoles.AccountJournalRolesModal.html",{accountId:t},void 0,()=>n.e(581).then(n.bind(null,3552)),e.hot&&!1)),children:"View all"})})]})})}).call(this,n(58)(e))},203:function(e,t,n){"use strict";t.a={doSubmit:({isFormValid:e,formValues:t,uploadState:{fileList:n},onSubmit:i})=>()=>{if(!e)return;const o=null==n?void 0:n.map(e=>e.response.result.id);return i({values:t,files:o})}}},204:function(e,t,n){"use strict";var i=n(714),o=n(713),r=n(89);t.a=(e,{id:t})=>({uploadState:Object(r.a)(t,e),formValues:Object(i.a)(t)(e),isFormValid:Object(o.a)(t)(e)})},205:function(e,t,n){"use strict";var i=n(4),o=n(130),r=n.n(o),s=n(1),a=n(7),c=n(6),l=n(29),d=(n(352),n(193)),u=n(280),p=n(151),h=n(0);class b extends i.Component{constructor(...e){super(...e),this.handleLabelClick=()=>{this.input.focus()},this.handleFocus=()=>{this.input.focus(),r.a.findDOMNode(this.input).scrollIntoView()}}componentDidMount(){Object(p.b)(p.a,this.handleFocus)}componentWillUnmount(){Object(p.d)(p.a,this.handleFocus)}shouldComponentUpdate(e){const{meta:{touched:t,error:n,invalid:i}}=this.props,{meta:{touched:o,error:r,invalid:s}}=e;return t!==o||n!==r||i!==s}componentDidUpdate(){const{text:e,struct:t}=this.props.input.value;null===e&&null===t&&this.input.clear()}renderConverseEditor(){const{input:{value:{text:e,struct:t},onFocus:n,onBlur:i},meta:{touched:o,error:r,invalid:s},showRichTextOptionsOnMount:a,blockModifier:c,placeholder:l,referenceResearchDialogUrl:u,prefilledMentions:p,postPrefillMentionsCallback:b,onEditorChange:m,showRichTextControlsUnderInput:j,mentionDecorator:f,focusOnMount:O,rootId:g,useMentionControls:x,useHotKeyManager:y}=this.props;return Object(h.jsx)(d.b,{editorRef:e=>{this.input=e},onChange:m,placeholder:l,text:e,structuredData:t,showRichTextOptionsOnMount:a,blockModifier:c,referenceResearchDialogUrl:u,prefilledMentions:p,postPrefillMentionsCallback:b,onFocus:n,onBlur:i,useMentionControls:x,useHotKeyManager:y,hasError:o&&s&&!!r,showRichTextControlsUnderInput:j,mentionDecorator:f,focusOnMount:O,rootId:g})}renderConversePlainTextEditor(){const{input:{value:{text:e},onFocus:t,onBlur:n},meta:{touched:i,error:o,invalid:r},blockModifier:s,placeholder:a,onEditorChange:c}=this.props;return Object(h.jsx)(u.a,{ref:e=>{this.input=e},onChange:c,placeholder:a,text:e,blockModifier:s,onFocus:t,onBlur:n,hasError:i&&r&&!!o})}renderInput(){return l.g?this.renderConversePlainTextEditor():this.renderConverseEditor()}renderInputWithTooltip(){return Object(h.jsx)(s.Tooltip,{spacing:"m",position:"right-top",mode:"focus",target:this.renderInput(),children:Object(h.jsx)(s.Tooltip.Body,{children:this.props.tooltipBody})})}render(){const{meta:{touched:e,error:t,invalid:n},label:i,tooltipBody:o}=this.props;return Object(h.jsxs)("div",{children:[Object(h.jsx)(s.Label,{status:e&&n&&t?"invalid":null,errorMessage:t||null,onClick:this.handleLabelClick,children:i}),o?this.renderInputWithTooltip():this.renderInput()]})}}b.displayName="BodyField",b.defaultProps={focusOnMount:!1,useMentionControls:!1,useHotKeyManager:!1},t.a=Object(a.a)(Object(c.r)({onEditorChange:({input:{onChange:e}})=>(t,n)=>{n&&e(t)}}))(b)},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return B}));var i={};n.r(i),n.d(i,"VIEW_PAGE_HOME_FEED",(function(){return o})),n.d(i,"VIEW_PAGE_PUBLICATION_DETAIL",(function(){return r})),n.d(i,"VIEW_PAGE_PUBLICATION_DOWNLOAD_LANDING",(function(){return s})),n.d(i,"VIEW_PAGE_PUBLICATION_CITATION_DOWNLOAD_LANDING",(function(){return a})),n.d(i,"VIEW_PAGE_POST_DETAIL",(function(){return c})),n.d(i,"VIEW_PAGE_POST_CITATION_DOWNLOAD_LANDING",(function(){return l})),n.d(i,"VIEW_PAGE_PROFILE",(function(){return d})),n.d(i,"VIEW_PAGE_PROFILE_STATS",(function(){return u})),n.d(i,"VIEW_PAGE_PROFILE_READING_LIST",(function(){return p})),n.d(i,"VIEW_PAGE_STATS_REPORT",(function(){return h})),n.d(i,"VIEW_PAGE_FIGURE",(function(){return b})),n.d(i,"VIEW_PAGE_KEYWORD",(function(){return m})),n.d(i,"VIEW_PAGE_SCIENTIFIC_CONTRIBUTION",(function(){return j})),n.d(i,"VIEW_PAGE_JOURNAL",(function(){return f})),n.d(i,"VIEW_PAGE_PROJECT",(function(){return O})),n.d(i,"VIEW_PAGE_INSTITUTION",(function(){return g})),n.d(i,"VIEW_PAGE_LAB",(function(){return x})),n.d(i,"VIEW_PAGE_GRANT",(function(){return y})),n.d(i,"VIEW_PAGE_JOB",(function(){return v})),n.d(i,"VIEW_PAGE_JOBS",(function(){return I})),n.d(i,"VIEW_PAGE_QUESTIONS_TAB",(function(){return _})),n.d(i,"VIEW_PAGE_SEARCH_RESULTS",(function(){return w})),n.d(i,"VIEW_PAGE_REQUESTS",(function(){return S})),n.d(i,"VIEW_PAGE_SURVEY_ADVERT",(function(){return P})),n.d(i,"COMPLETE_FLOW_EXTERNAL_REQUEST_FULLTEXT",(function(){return C})),n.d(i,"COMPLETE_FLOW_SIGNUP_EMAIL_CONFIRMATION",(function(){return k})),n.d(i,"CLICK_BTN_CAMPAIGN_FEEDBACK",(function(){return A})),n.d(i,"CLICK_FOLLOW_QUESTION_BUTTON",(function(){return D})),n.d(i,"CLICK_FOLLOW_PERSON_BUTTON",(function(){return E})),n.d(i,"CLICK_BTN_FUNDING_SUBSCRIBE_GROUP_REQUEST",(function(){return T})),n.d(i,"CLICK_BTN_FUNDING_SUBSCRIBE_WAIVER_REQUEST",(function(){return F})),n.d(i,"CLICK_BTN_PDP_DOWNLOAD",(function(){return M})),n.d(i,"EXIT_PAGE_FUNDING_SUBSCRIBE",(function(){return R}));n(320);const o="view.page.HomeFeed",r="view.page.PublicationDetail",s="view.page.PublicationDownloadLanding",a="view.page.PublicationCitationDownloadLanding",c="view.page.PostDetail",l="view.page.PostCitationDownloadLanding",d="view.page.Profile",u="view.page.ProfileStats",p="view.page.ProfileReadingList",h="view.page.ProfileStatsReport",b="view.page.Figure",m="view.page.Keyword",j="view.page.ScientificContribution",f="view.page.Journal",O="view.page.Project",g="view.page.InstitutionBase",x="view.page.Lab",y="view.page.Grant",v="view.page.Job",I="view.page.Jobs",_="view.page.Topics",w="view.page.SearchResults",S="view.page.Requests",P="view.page.surveyAdvert",C="complete.flow.externalRequestFulltext",k="complete.flow.signupEmailConfirmation",A="click.button.campaignFeedback",D="click.button.followQuestion",E="click.button.followPerson",T="click.button.FundingSubscribeGroupRequest",F="click.button.FundingSubscribeWaiverRequest",M="click.button.publicationDetailsPageDownload",R="exit.page.FundingSubscribe",N=i;function L(e,t,n){{const i="rg."+e;window.addEventListener(i,n=>{if(i!==n.type)return;const{context:o,metadata:r}=n.detail||{};t(e,o,r)},n)}}function B(e,t,n){{let i;e="rg."+e,"function"!=typeof window.CustomEvent?(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!1,!1,{detail:t,metadata:n})):i=new CustomEvent(e,{detail:{context:t,metadata:n}}),window.dispatchEvent(i)}}},2179:function(e,t,n){"use strict";var i=n(2021);n.d(t,"a",(function(){return i.a}))},218:function(e,t,n){"use strict";var i=n(2),o=n(6);t.a=Object(o.u)(({flowData:e})=>Object(i.a)({},e))},2180:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/44214271333889/images/journals/add-journal-role.svg"},2181:function(e,t,n){"use strict";var i=n(2),o=n(16),r=n.n(o),s=n(8),a=n.n(s),c=n(1),l=n(5),d=n(1617),u=(n(2594),n(0));let p;const h=new a.a("account-journal-role");t.a=Object(l.withQuery)(Object(l.gql)(p||(p=(e=>e)`query AccountJournalRole($id: ID!, $journalsLimit: Int!) {
  accountJournalRole(id: $id) {
    id
    role {
      id
      title
      __typename
    }
    someJournals(limit: $journalsLimit) {
      ... on Journal {
        id
        title
        __typename
      }
      ... on AccountJournalRoleCustomJournal {
        title
        __typename
      }
      __typename
    }
    journalsCount
    __typename
  }
  __typename
}
`)))(({accountJournalRole:{role:e,someJournals:t,journalsCount:n},journalsLimit:o})=>Object(u.jsxs)(c.Stack,{gutter:"xs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(u.jsx)(c.Stack.Item,{children:Object(u.jsxs)(c.Stack,{gutter:"xxs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(u.jsx)(c.Stack.Item,{children:Object(u.jsx)(c.Text,{color:"grey-500",children:Object(u.jsx)("strong",{children:Object(d.a)(e)})})}),t.map(e=>Object(u.jsx)(c.Stack.Item,Object(i.a)(Object(i.a)({},h("journal-title-container")),{},{children:Object(u.jsx)(c.Tooltip,{spacing:"s",color:"black",scope:"local",offset:{left:0,top:10},target:Object(u.jsx)(c.Text,{clamp:"2",children:e.title}),children:Object(u.jsx)(c.Text,{children:e.title})})}),e.title))]})}),n>o&&Object(u.jsx)(c.Stack.Item,{children:Object(u.jsxs)(c.Text,{children:["+",n-o," more ",r()("journal",n-o)]})})]}))},220:function(e,t,n){"use strict";var i=n(305);n.d(t,"b",(function(){return i.a}));var o=n(146);n.d(t,"a",(function(){return o.a}))},2209:function(e,t,n){"use strict";var i=n(48),o=n(12),r=n(1),s=n(5),a=n(202),c=n(7),l=n(11),d=n(20);let u,p=e=>e;var h=n(940),b=n(1617),m=n(55);const j=m.j().shape({accountJournalRoles:m.c().max(h.b,"You can only select a maximum of 3 roles").of(m.j().shape({role:m.c().of(m.g(e=>"string"==typeof e?m.k().max(50,"Please enter a shorter role (50 characters max)"):m.j())).test("hasValues","Enter or select a role",(e,t)=>!(0===e.length&&t.parent.journals.length>0)).required("required"),journals:m.c().of(m.g(e=>"string"==typeof e?m.k().max(200,"Please enter a shorter journal title (200 characters max)"):m.j())).test("hasValues","Enter or select a journal",(e,t)=>!(0===e.length&&t.parent.role.length>0)).required("required")})).nullable()});var f=n(870),O=n(105),g=n.n(O),x=n(4),y=n(313),v=n(735),I=n(0);let _;const w=Object(s.gql)(_||(_=(e=>e)`query JournalsFormField($query: String!) {
  journalSuggestions(query: $query) {
    id
    title
    searchName
    __typename
  }
  __typename
}
`));var S=Object(y.withRigel)()(({index:e,rigel:t})=>{const[n,i]=Object(x.useState)([]),o=t.bindQuery(w,({data:{journalSuggestions:e}})=>i(e||[]),{query:""}),r=g()(e=>o.update({query:e}),200);return Object(I.jsx)(v.a,{name:`accountJournalRoles.${e}.journals`,label:"Journals",placeholder:"Enter or select the journals where you have this role",options:n,renderValue:e=>{var t;return null!==(t=null==e?void 0:e.title)&&void 0!==t?t:e},renderOption:({searchName:e})=>e,allowCustomValues:!0,multipleValues:!0,retainOptions:!1,openOptionsOnTouch:!1,filterConfig:{method:(e,t)=>(r(t),e)},compareConfig:{keys:["title"]}})});const P=(e,t)=>e.filter(e=>e.title.toLowerCase().indexOf(t.toLowerCase())>=0);var C=({index:e})=>Object(I.jsx)(v.a,{name:`accountJournalRoles.${e}.role`,label:"Role",placeholder:"Enter or select a role (e.g., Guest Editor, Peer Reviewer)",allowCustomValues:!0,multipleValues:!1,options:Object.entries(h.c).map(([e,t])=>({id:e,title:t})),renderOption:e=>e.title,renderValue:e=>{var t;return null!==(t=null==e?void 0:e.title)&&void 0!==t?t:e},filterConfig:{method:P}});var k=()=>{var e;const{values:t}=Object(i.g)(),n=(null==t||null===(e=t.accountJournalRoles)||void 0===e?void 0:e.length)>0?t.accountJournalRoles:[{}];return Object(I.jsx)(i.c,{name:"accountJournalRoles",children:({remove:e,push:t})=>n.map((i,o)=>{const s=n.length<h.b&&o===n.length-1,a=n.length>1;return Object(I.jsxs)("div",{children:[Object(I.jsx)(r.FormGroup.Item,{children:Object(I.jsx)(C,{index:o})}),Object(I.jsx)(r.FormGroup.Item,{children:Object(I.jsx)(S,{index:o})}),Object(I.jsx)(r.FormGroup.Item,{children:Object(I.jsxs)(r.Flex,{alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(r.Flex.Item,{children:a&&Object(I.jsxs)(r.Button,{type:"button",align:"left",color:"red",theme:"bare",onClick:()=>e(o),children:[Object(I.jsx)(r.Button.Icon,{identifier:"trash-can"}),Object(I.jsx)(r.Button.Label,{children:"Remove role"})]})}),s&&Object(I.jsx)(r.Flex.Item,{children:Object(I.jsxs)(r.Button,{type:"button",theme:"ghost",size:"s",onClick:()=>t({role:[],journals:[]}),children:[Object(I.jsx)(r.Button.Icon,{identifier:"plus-circle"}),Object(I.jsx)(r.Button.Label,{children:"Add a new role"})]})})]})})]},i.id||Object(f.a)())})})};let A;t.a=Object(c.a)(Object(o.connect)(),Object(s.withQuery)(Object(s.gql)(A||(A=(e=>e)`query AccountJournalRolesInlineEdit($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      journalRoles {
        id
        role {
          id
          title
          __typename
        }
        allJournals {
          ... on Journal {
            id
            title
            __typename
          }
          ... on AccountJournalRoleCustomJournal {
            title
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
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{initialValues:(null===(t=e.profile.journalRoles)||void 0===t?void 0:t.length)>0?e.profile.journalRoles.map(({id:e,role:t,allJournals:n})=>({id:e,role:[{id:t.id,title:Object(b.a)(t)}],journals:n})):[{role:[],journals:[]}]}}}))(({accountId:e,context:t,toggleEditMode:n,initialValues:o,mutate:c,dispatch:b})=>Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(i.e,{onSubmit:({accountJournalRoles:i},{setSubmitting:o})=>c(((e,t,n,i)=>({mutation:Object(s.gql)(u||(u=p`mutation UpdateAccountJournalRoles($accountId: ID!, $roles: [AccountJournalRoleInput]!, $context: String!, $journalsLimit: Int!) {
  updateAccountJournalRoles(accountId: $accountId, roles: $roles, context: $context) {
    id
    profile {
      journalRoles {
        id
        role {
          id
          title
          __typename
        }
        someJournals(limit: $journalsLimit) {
          ... on Journal {
            id
            title
            __typename
          }
          ... on AccountJournalRoleCustomJournal {
            title
            __typename
          }
          __typename
        }
        allJournals {
          ... on Journal {
            id
            title
            __typename
          }
          ... on AccountJournalRoleCustomJournal {
            title
            __typename
          }
          __typename
        }
        journalsCount
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{accountId:e,roles:t,context:n,journalsLimit:i}}))(e,i.filter(({role:e})=>e.length>0).map(({id:e,role:t,journals:n})=>({id:e,roleId:"string"==typeof t[0]?null:t[0].id,title:"string"==typeof t[0]?t[0]:t[0].title,journals:n.map(e=>"string"==typeof e?{id:null,title:e}:{id:e.id,title:e.title})})),t,h.a)).then(()=>{b(Object(l.pushAlert)(()=>Object(I.jsx)(a.c,{title:"Journal roles updated"}))),o(!1),n()}).catch(e=>{Object(d.default)(e),b(Object(l.pushAlert)(()=>Object(I.jsx)(a.b,{title:"Couldn't update journal roles",description:e.message}))),o(!1)}),initialValues:{accountJournalRoles:o},validationSchema:j,validateOnBlur:!1,validateOnChange:!0,children:({isSubmitting:e})=>Object(I.jsx)(i.d,{children:Object(I.jsxs)(r.FormGroup,{children:[Object(I.jsx)(k,{}),Object(I.jsx)(r.FormGroup.Item,{align:"right",children:Object(I.jsxs)(r.ButtonGroup,{children:[Object(I.jsx)(r.Button,{type:"button",theme:"bare",onClick:n,size:"s",children:"Cancel"}),Object(I.jsx)(r.Button,{type:"submit",status:e?"busy":null,size:"s",children:"Save"})]})})]})})})}))},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return u}));var i=n(75),o=n(47),r=n(431);const s=(e,t)=>t.publicationUid,a=e=>e.publicationFollowed||new i.Map,c=Object(o.a)([a,s],(e,t)=>e.get(String(t))||new i.Map),l=(e,t)=>{const n=c(e,{publicationUid:t});return n.has("isFollowing")&&n.get("isFollowing")},d=Object(o.a)([a],e=>e.get("followCopy")||Object(i.Map)({labelFollow:"Follow",labelUnfollow:"Unfollow",labelFollowing:"Following"})),u=Object(o.a)([r.a],e=>!e)},2218:function(e,t,n){"use strict";(function(e){var i=n(23),o=n(4),r=n(1),s=n(6),a=n(15),c=n(574),l=n(2290),d=n(1919),u=(n(2616),n(0));class p extends o.Component{constructor(...t){super(...t),this.onOpenDialog=t=>{t.preventDefault(),this.props.dispatch(Object(a.mountAsyncModal)("profilecommon.ProfileCoAuthorsDialog.html",{accountKey:this.props.accountKey,variant:this.props.variant},void 0,()=>n.e(621).then(n.bind(null,3559)),e.hot&&!1))}}getHeadlineSection(){const{isDialog:e}=this.props;return e?null:Object(u.jsx)(c.a,{children:Object(u.jsx)(c.a.Label,{children:" Top co-authors"})})}getInvitableAuthorsSection(){const{invitableAuthorItems:e,invitationContext:t,inviteMoreCoauthorsUrl:n}=this.props;if(!e||e.length<=0)return null;const i=e.map((e,n)=>Object(u.jsx)(r.List.Item,{children:Object(u.jsx)(d.a,{invitationContext:t,widgetId:e},"author:"+n)},n),this);return Object(u.jsxs)("div",{className:"invitable-authors-container-new",children:[Object(u.jsx)(r.Text,{spacing:"m",size:"l",children:Object(u.jsxs)(r.Button,{href:n,spacing:"m",theme:"bare",color:"grey",size:"m",children:[Object(u.jsx)(r.Button.Label,{children:"Invite more co-authors"}),Object(u.jsx)(r.Button.Icon,{identifier:"envelope"})]})}),Object(u.jsx)(r.List,{type:"bare",spacing:"none",size:"l",children:i})]})}getTopCoauthorsSection(){if(this.props.profileCoAuthorsAccountItems.length<=0&&this.props.profileCoAuthorsAuthorItems.length<=0)return null;const e=this.props.profileCoAuthorsAccountItems.map((e,t)=>Object(u.jsx)(r.List.Item,{children:Object(u.jsx)(l.a,{widgetId:e,buttonProps:this.props.buttonProps,gtmClassName:this.props.gtmClassName,isInModal:this.props.isInModal},"account:"+t)},t),this),t=this.props.profileCoAuthorsAuthorItems.map((e,t)=>Object(u.jsx)(r.List.Item,{children:Object(u.jsx)(d.a,{invitationContext:this.props.invitationContext,widgetId:e,buttonProps:this.props.buttonProps,gtmClassName:this.props.gtmClassName},"author:"+t)},t),this);return Object(u.jsx)("div",{className:"authors-container",children:Object(u.jsxs)(r.List,{type:"bare",spacing:"none",size:"l",children:[e,t]})})}getFooter(){return Object(u.jsx)(r.Button,{theme:"bare",color:"grey",onClick:this.onOpenDialog,children:"View all"})}render(){const e=Object(i.default)({"profile-top-coauthors":!0});return this.props.isDialog?Object(u.jsxs)("div",{className:e,children:[Object(u.jsx)(r.Text,{spacing:"none",tag:"div",children:this.getHeadlineSection()}),this.getTopCoauthorsSection(),this.getInvitableAuthorsSection()]}):Object(u.jsx)("div",{className:e,children:Object(u.jsxs)(r.Card,{spacing:"m",children:[Object(u.jsx)(r.Card.Header,{children:this.getHeadlineSection()}),Object(u.jsxs)(r.Card.Body,{children:[this.getTopCoauthorsSection(),this.getInvitableAuthorsSection()]}),!this.props.invitableAuthorItems||this.props.invitableAuthorItems.length<=0||!this.props.showFooter?null:Object(u.jsx)(r.Card.Footer,{align:"center",children:this.getFooter()})]})})}}p.displayName="ProfileTopCoauthors",p.defaultProps={isInModal:!1},t.a=Object(s.b)()(p)}).call(this,n(58)(e))},2290:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(1),s=n(6),a=n(723),c=n(69),l=n(147),d=n(0);const u=Object(s.h)(r.PersonListItem.Fullname)(({children:e})=>e),p=Object(s.h)(r.PersonListItem.Image)(({children:e})=>e);class h extends o.Component{constructor(e){super(e),this.toggleFollow=()=>{this.setState({isFollowing:!this.state.isFollowing}),this.state.isFollowing?this.props.dispatch(Object(a.d)(this.props.accountId)):this.props.dispatch(Object(a.c)(this.props.accountId))},this.state={isFollowing:e.isFollowing}}getMetaItems(){const e=[];return this.props.institutionName&&e.push(Object(d.jsx)(r.PersonListItem.MetaItem,{children:this.props.institutionName},"inst")),Object(d.jsx)(r.PersonListItem.MetaItems,{children:e})}getActions(){if(!this.props.canFollow)return null;const e=[];return this.state.isFollowing?e.push(Object(d.jsx)(r.Button,Object(i.a)(Object(i.a)({size:"s",color:"blue",onClick:this.toggleFollow,type:"button"},this.props.buttonProps),{},{children:Object(d.jsx)(r.Button.Label,{children:"Following"})}),"follow")):e.push(Object(d.jsx)(r.Button,Object(i.a)(Object(i.a)({size:"s",onClick:this.toggleFollow,type:"button"},this.props.buttonProps),{},{children:Object(d.jsx)(r.Button.Label,{children:"Follow"})}),"follow")),Object(d.jsx)(r.PersonListItem.Actions,{children:e})}render(){let e=this.props.url;this.props.publicProfileEnabled||this.props.isLoggedIn||(e="");const t=this.props.isInModal?{scope:"local",position:"below-left"}:{},n=Object(d.jsx)(u,{children:Object(d.jsx)(l.a,{accountId:this.props.id,context:c.q,tooltipProps:t,children:Object(d.jsx)(r.PersonListItem.Fullname,{href:e,children:this.props.fullname})})}),i=Object(d.jsx)(p,{children:Object(d.jsx)(l.a,{accountId:this.props.id,context:c.q,tooltipProps:t,children:Object(d.jsx)(r.Link,{href:e,children:Object(d.jsx)(r.PersonListItem.Image,{imageUrl:this.props.imageUrl,alt:this.props.fullname})})})});return Object(d.jsxs)(r.PersonListItem,{size:"s",className:this.props.gtmClassName,children:[n,i,this.getMetaItems(),this.getActions()]})}}h.displayName="ProfileCoAuthorsAccountItem",h.defaultProps={buttonProps:{theme:"bare",color:"blue"},isInModal:!1},t.a=Object(s.b)()(h)},2291:function(e,t,n){"use strict";var i=n(1),o=n(6),r=n(574),s=n(1466),a=n(0);t.a=Object(o.b)()(({projectIds:e,entryChannel:t,milestoneClickProject:n})=>(null==e?void 0:e.length)>0?Object(a.jsxs)(i.Card,{spacing:"m",children:[Object(a.jsx)(i.Card.Header,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(r.a.Label,{children:"Projects"})})}),Object(a.jsx)(i.Card.Body,{children:Object(a.jsx)(i.Stack,{gutter:"xxl",showDivider:!0,gutterOutside:!1,spacing:"none",children:e.map(e=>Object(a.jsx)(i.Stack.Item,{children:Object(a.jsx)(s.a,{projectId:e,entryChannel:t,milestoneClickProject:n})},e))})})]}):null)},235:function(e,t,n){e.exports=n(437)},244:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(1),s=n(67),a=n(27),c=n(0);const l=["onChange","onBlur","type","helpMessage","helpLabel"],d=["name","value","onChange","onBlur"];t.a=e=>{let{onChange:t,onBlur:n,type:u,helpMessage:p,helpLabel:h}=e,b=Object(o.a)(e,l);return Object(c.jsx)(s.a,Object(i.a)({input:e=>{let{field:{name:s,value:l,onChange:p,onBlur:h},meta:{touched:m,error:j}}=e,f=Object(o.a)(e.field,d);return Object(c.jsx)(r.Input,Object(i.a)(Object(i.a)(Object(i.a)({name:s,type:u,value:null!=l?l:void 0,onChange:e=>{p(e),t&&t(e)},onBlur:e=>{h(e),n&&n(e)}},f),{},{status:m&&j?"invalid":null},Object(a.a)(s)),b))},type:u,helpLabel:h,helpMessage:p},b))}},245:function(e,t,n){var i=n(26),o=n(62),r=n(418);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return o(n),r(i),t?e(n,i):n.__proto__=i,n}}():void 0)},246:function(e,t,n){"use strict";var i=n(23),o=n(298),r=n.n(o),s=n(1),a=(n(481),n(0));const c=e=>{let t=e.iconText?Object(a.jsx)("span",{className:"file-extension",children:e.iconText}):null;const n=Object(i.default)("project-updates-attachment-item attachment-list-item",e.className,{"is-inactive":e.isInactive}),o=Object(i.default)("item-thumbnail",e.iconClass);let c=e.headline;c=e.titleUrl?Object(a.jsx)(s.Link,{href:e.titleUrl,theme:"bare",children:c}):e.isFilePreviewEnabled?Object(a.jsx)(s.Link,{onClick:e.viewAction,theme:"bare",children:c}):r()(c,{length:130}),t=e.isFilePreviewEnabled?Object(a.jsx)(s.Link,{onClick:e.viewAction,theme:"bare",children:Object(a.jsx)("span",{className:"file-thumbnail",children:t})}):Object(a.jsx)("span",{className:"file-thumbnail",children:t});const l=[e.subline].concat(e.actions).map((e,t)=>{if(e)return Object(a.jsx)(s.List.Item,{children:e},t)}),d=e.isInactive||!e.attachmentId?null:Object(a.jsx)("input",{type:"hidden",name:e.attachmentFieldName+"[]",value:e.attachmentId});return Object(a.jsxs)("div",{className:n,children:[d,Object(a.jsx)("div",{className:o,children:t}),Object(a.jsxs)("div",{className:"item-info",children:[Object(a.jsx)("div",{className:"item-title",children:c}),Object(a.jsx)(s.List,{type:"inline",spacing:"xxs",children:l})]})]})};c.defaultProps={attachmentFieldName:"attachments"},t.a=c},2473:function(e,t,n){"use strict";var i=n(2),o=n(1),r=n(5),s=n(7),a=n(6),c=n(0);let l;Object(r.gql)(l||(l=(e=>e)`fragment PersonFullNamePersonListItemFullName on PersonFullName {
  fullName
  __typename
}
`));var d=Object(s.a)(Object(a.h)(o.PersonListItem.Fullname))(({fullName:e})=>Object(c.jsx)(o.PersonListItem.Fullname,{children:e})),u=n(1082);let p;Object(r.gql)(p||(p=(e=>e)`fragment PersonFullNamePersonListItemImage on PersonFullName {
  fullName
  __typename
}
`));var h=Object(a.h)(o.PersonListItem.Image)(({fullName:e})=>Object(c.jsx)(o.PersonListItem.Image,{alt:e,imageUrl:u.a})),b=n(1032);var m=Object(a.h)(o.PersonListItem.MetaItem)(()=>Object(c.jsx)(o.PersonListItem.MetaItem,{children:b.a})),j=n(286),f=n(1622);let O;t.a=Object(r.withQuery)(Object(r.gql)(O||(O=(e=>e)`query ProfileAdvisorPersonListItem($id: ID!) {
  accountPeopleMapping(id: $id) {
    id
    target {
      ... on Account {
        id
        ...AccountPersonListItemFullNameLink @embed
        ...AccountPersonListItemImageLink @embed
        ...AccountPersonListItemMetaItems @embed
        __typename
      }
      ... on Author {
        id
        ...AuthorPersonListItemFullNameLink @embed
        ...AuthorPersonListItemImageLink @embed
        ...AuthorPersonListItemIsClaimedMetaItem @embed
        __typename
      }
      ... on PersonFullName {
        ...PersonFullNamePersonListItemFullName
        ...PersonFullNamePersonListItemImage
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({accountPeopleMapping:e})=>{const t=null==e?void 0:e.target;return{typename:null==t?void 0:t.__typename,itemId:null==t?void 0:t.id,personFullNameData:t}}})(({typename:e,itemId:t,personFullNameData:n})=>"Account"===e?Object(c.jsxs)(o.PersonListItem,{size:"s",children:[Object(c.jsx)(j.c,{id:t,context:"profileAdvisor"}),Object(c.jsx)(j.e,{id:t,context:"profileAdvisor"}),Object(c.jsx)(j.f,{id:t})]}):"Author"===e?Object(c.jsxs)(o.PersonListItem,{size:"s",children:[Object(c.jsx)(f.b,{id:t}),Object(c.jsx)(f.d,{id:t}),Object(c.jsx)(o.PersonListItem.MetaItems,{children:Object(c.jsx)(f.e,{id:t})})]}):"PersonFullName"===e?Object(c.jsxs)(o.PersonListItem,{size:"s",children:[Object(c.jsx)(d,Object(i.a)({},n)),Object(c.jsx)(h,Object(i.a)({},n)),Object(c.jsx)(o.PersonListItem.MetaItems,{children:Object(c.jsx)(m,{})})]}):null)},2507:function(e,t,n){"use strict";var i=n(1),o=n(6),r=n(879),s=n(286),a=n(0);const c=Object(o.h)(i.PersonListItem.Action)(({children:e})=>e);t.a=({id:e,context:t})=>Object(a.jsxs)(i.PersonListItem,{size:"s",children:[Object(a.jsx)(s.e,{id:e,context:t}),Object(a.jsx)(s.c,{id:e,context:t}),Object(a.jsx)(s.f,{id:e,shouldDisplayScore:!1}),Object(a.jsx)(i.PersonListItem.Actions,{children:Object(a.jsx)(c,{children:Object(a.jsx)(r.b,{id:e,context:t,children:({label:e,toggleFollow:t,hasPermissionToFollow:n})=>n?Object(a.jsx)(i.Button,{type:"button",onClick:t,theme:"bare",size:"s",color:"blue",children:e}):null})})})]})},2508:function(e,t,n){"use strict";var i=n(1),o=n(0);t.a=({url:e,fullName:t,imageUrl:n})=>Object(o.jsxs)(i.PersonListItem,{size:"s",children:[Object(o.jsx)(i.PersonListItem.Image,{href:e,alt:t,imageUrl:n}),Object(o.jsx)(i.PersonListItem.Fullname,{href:e,children:t})]})},2509:function(e,t,n){"use strict";var i=n(1),o=n(0);t.a=({fullName:e,imageUrl:t})=>Object(o.jsxs)(i.PersonListItem,{size:"s",children:[Object(o.jsx)(i.PersonListItem.Image,{alt:e,imageUrl:t}),Object(o.jsx)(i.PersonListItem.Fullname,{children:e})]})},251:function(e,t,n){var i=n(163),o=Math.max,r=Math.min;e.exports=function(e,t){var n=i(e);return n<0?o(n+t,0):r(n,t)}},252:function(e,t,n){var i=n(26),o=n(30),r=n(31),s=n(164),a=n(66),c=n(181),l=function(){},d=[],u=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=i(p.exec),b=!p.exec(l),m=function(e){if(!r(e))return!1;try{return u(l,d,e),!0}catch(e){return!1}},j=function(e){if(!r(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return b||!!h(p,c(e))}catch(e){return!0}};j.sham=!0,e.exports=!u||o((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?j:m},2539:function(e,t,n){"use strict";var i=n(3),o=n.n(i);o.a.shape({download:o.a.object,addAbstract:o.a.array,addComment:o.a.array,figuresAdded:o.a.array,addFullText:o.a.array,publishPrivateFullText:o.a.array,recommend:o.a.array,requestFullText:o.a.array,share:o.a.array,actionBarLike:o.a.array,actionBarUnlike:o.a.array,actionBarFollow:o.a.array,actionBarUnfollow:o.a.array,actionBarShare:o.a.array,publicationListItem:o.a.object,authorsDialog:o.a.array,citationsTab:o.a.array,commentsTab:o.a.array,figuresOverlay:o.a.array,overviewTab:o.a.array,referencesTab:o.a.array,relatedResearchTab:o.a.array,statsTab:o.a.array,clickHeaderDoi:o.a.string,follow:o.a.arrayOf(o.a.string),journalClick:o.a.arrayOf(o.a.string),journalFollow:o.a.arrayOf(o.a.string)})},254:function(e,t,n){var i=n(98);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},255:function(e,t,n){var i=n(51),o=n(30),r=n(172);e.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},256:function(e,t,n){var i=n(51),o=n(30);e.exports=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},257:function(e,t,n){var i=n(258),o=n(178);e.exports=Object.keys||function(e){return i(e,o)}},258:function(e,t,n){var i=n(26),o=n(38),r=n(73),s=n(412).indexOf,a=n(142),c=i([].push);e.exports=function(e,t){var n,i=r(e),l=0,d=[];for(n in i)!o(a,n)&&o(i,n)&&c(d,n);for(;t.length>l;)o(i,n=t[l++])&&(~s(d,n)||c(d,n));return d}},259:function(e,t,n){"use strict";var i={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!i.call({1:2},1);t.f=r?function(e){var t=o(this,e);return!!t&&t.enumerable}:i},2594:function(e,t,n){},26:function(e,t,n){var i=n(113),o=Function.prototype,r=o.bind,s=o.call,a=i&&r.bind(s,s);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},260:function(e,t,n){"use strict";var i,o,r,s=n(30),a=n(31),c=n(111),l=n(173),d=n(85),u=n(49),p=n(110),h=u("iterator"),b=!1;[].keys&&("next"in(r=[].keys())?(o=l(l(r)))!==Object.prototype&&(i=o):b=!0),null==i||s((function(){var e={};return i[h].call(e)!==e}))?i={}:p&&(i=c(i)),a(i[h])||d(i,h,(function(){return this})),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:b}},261:function(e,t,n){var i=n(113),o=Function.prototype,r=o.apply,s=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},2616:function(e,t,n){},262:function(e,t,n){"use strict";var i=n(73),o=n(387),r=n(170),s=n(134),a=n(52).f,c=n(263),l=n(110),d=n(51),u=s.set,p=s.getterFor("Array Iterator");e.exports=c(Array,"Array",(function(e,t){u(this,{type:"Array Iterator",target:i(e),index:0,kind:t})}),(function(){var e=p(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values");var h=r.Arguments=r.Array;if(o("keys"),o("values"),o("entries"),!l&&d&&"values"!==h.name)try{a(h,"name",{value:"values"})}catch(e){}},263:function(e,t,n){"use strict";var i=n(53),o=n(70),r=n(110),s=n(180),a=n(31),c=n(389),l=n(173),d=n(245),u=n(171),p=n(135),h=n(85),b=n(49),m=n(170),j=n(260),f=s.PROPER,O=s.CONFIGURABLE,g=j.IteratorPrototype,x=j.BUGGY_SAFARI_ITERATORS,y=b("iterator"),v=function(){return this};e.exports=function(e,t,n,s,b,j,I){c(n,t,s);var _,w,S,P=function(e){if(e===b&&E)return E;if(!x&&e in A)return A[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},C=t+" Iterator",k=!1,A=e.prototype,D=A[y]||A["@@iterator"]||b&&A[b],E=!x&&D||P(b),T="Array"==t&&A.entries||D;if(T&&(_=l(T.call(new e)))!==Object.prototype&&_.next&&(r||l(_)===g||(d?d(_,g):a(_[y])||h(_,y,v)),u(_,C,!0,!0),r&&(m[C]=v)),f&&"values"==b&&D&&"values"!==D.name&&(!r&&O?p(A,"name","values"):(k=!0,E=function(){return o(D,this)})),b)if(w={values:P("values"),keys:j?E:P("keys"),entries:P("entries")},I)for(S in w)(x||k||!(S in A))&&h(A,S,w[S]);else i({target:t,proto:!0,forced:x||k},w);return r&&!I||A[y]===E||h(A,y,E,{name:b}),m[t]=E,w}},266:function(e,t,n){var i=n(410),o=n(38),r=n(267),s=n(52).f;e.exports=function(e){var t=i.Symbol||(i.Symbol={});o(t,e)||s(t,e,{value:r.f(e)})}},267:function(e,t,n){var i=n(49);t.f=i},268:function(e,t,n){var i=n(51),o=n(256),r=n(52),s=n(62),a=n(73),c=n(257);t.f=i&&!o?Object.defineProperties:function(e,t){s(e);for(var n,i=a(t),o=c(t),l=o.length,d=0;l>d;)r.f(e,n=o[d++],i[n]);return e}},269:function(e,t,n){var i=n(38),o=n(415),r=n(179),s=n(52);e.exports=function(e,t,n){for(var a=o(t),c=s.f,l=r.f,d=0;d<a.length;d++){var u=a[d];i(e,u)||n&&i(n,u)||c(e,u,l(t,u))}}},270:function(e,t,n){var i=n(30);e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},271:function(e,t,n){var i=n(137);e.exports=Array.isArray||function(e){return"Array"==i(e)}},272:function(e,t,n){var i=n(26);e.exports=i([].slice)},275:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n(1),a=n(67),c=n(27),l=n(0);const d=["children"],u=["name"];t.a=e=>{let{children:t}=e,n=Object(o.a)(e,d);return Object(l.jsx)(a.a,Object(i.a)({input:e=>{let{field:{name:a},meta:{touched:d,error:p}}=e,h=Object(o.a)(e.field,u);return Object(l.jsx)(s.Select,Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({name:a,status:d&&p?"invalid":null},h),Object(c.a)(a)),n),{},{children:r.Children.map(t,e=>e)}))}},n))}},276:function(e,t,n){"use strict";n.d(t,"s",(function(){return o})),n.d(t,"g",(function(){return r})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"u",(function(){return l})),n.d(t,"t",(function(){return d})),n.d(t,"n",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"r",(function(){return h})),n.d(t,"m",(function(){return b})),n.d(t,"o",(function(){return m})),n.d(t,"p",(function(){return j})),n.d(t,"q",(function(){return f})),n.d(t,"k",(function(){return O})),n.d(t,"v",(function(){return g})),n.d(t,"w",(function(){return x})),n.d(t,"e",(function(){return y})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return I})),n.d(t,"f",(function(){return _})),n.d(t,"b",(function(){return w})),n.d(t,"d",(function(){return S})),n.d(t,"x",(function(){return P}));var i=n(13);const o=".",r="home",s="search",a="publicationDetail",c="profileDetail",l="statsReport",d="overview",u="header",p="featuredResearch",h="similarResearch",b="feed",m="research",j="results",f="sidebar",O="citations",g="brandedJournalInfo",x="headerMeta",y="profileFollowings",v="businessCard",I="journalItem",_="publicationItem",w="citationItem",S="pdpJournalAccountStats",P=(e,t,n,o)=>{if(!t||!n&&!o)return e;const r=btoa(JSON.stringify({source:t,sourceContentId:n,referrerContentId:o}));return Object(i.a)(e,{_jt:r})}},278:function(e,t,n){var i=n(98);e.exports=i&&!!Symbol.for&&!!Symbol.keyFor},279:function(e,t,n){"use strict";var i=n(117),o=n(0);t.a=({fileSize:e})=>Object(o.jsx)("span",{className:"item-size",children:Object(i.b)(e)})},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(22),o=n(4),r=n(1),s=n(0);class a extends o.Component{constructor(...e){super(...e),this.handleChange=e=>{const t=e.target.value;this.props.onChange({text:t,struct:Object(i.convertToRaw)(i.ContentState.createFromText(t))},!0)},this.handleFocus=()=>{this.props.onFocus&&this.props.onFocus()},this.handleBlur=()=>{this.props.onBlur&&this.props.onBlur()}}clear(){this.editor.value=""}focus(){this.editor.focus()}render(){const{placeholder:e,hasError:t}=this.props;return Object(s.jsx)(r.Textarea,{ref:e=>{this.editor=e},rows:5,onChange:this.handleChange,placeholder:e,onFocus:this.handleFocus,onBlur:this.handleBlur,status:t?"invalid":null})}}a.displayName="ConversePlainTextEditor"},281:function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty,o="~";function r(){}function s(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,i,r){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new s(n,i||e,r),c=o?o+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function c(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function l(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(o=!1)),l.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)i.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},l.prototype.listeners=function(e){var t=o?o+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,s=new Array(r);i<r;i++)s[i]=n[i].fn;return s},l.prototype.listenerCount=function(e){var t=o?o+e:e,n=this._events[t];return n?n.fn?1:n.length:0},l.prototype.emit=function(e,t,n,i,r,s){var a=o?o+e:e;if(!this._events[a])return!1;var c,l,d=this._events[a],u=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),u){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,n),!0;case 4:return d.fn.call(d.context,t,n,i),!0;case 5:return d.fn.call(d.context,t,n,i,r),!0;case 6:return d.fn.call(d.context,t,n,i,r,s),!0}for(l=1,c=new Array(u-1);l<u;l++)c[l-1]=arguments[l];d.fn.apply(d.context,c)}else{var p,h=d.length;for(l=0;l<h;l++)switch(d[l].once&&this.removeListener(e,d[l].fn,void 0,!0),u){case 1:d[l].fn.call(d[l].context);break;case 2:d[l].fn.call(d[l].context,t);break;case 3:d[l].fn.call(d[l].context,t,n);break;case 4:d[l].fn.call(d[l].context,t,n,i);break;default:if(!c)for(p=1,c=new Array(u-1);p<u;p++)c[p-1]=arguments[p];d[l].fn.apply(d[l].context,c)}}return!0},l.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},l.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},l.prototype.removeListener=function(e,t,n,i){var r=o?o+e:e;if(!this._events[r])return this;if(!t)return c(this,r),this;var s=this._events[r];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||c(this,r);else{for(var a=0,l=[],d=s.length;a<d;a++)(s[a].fn!==t||i&&!s[a].once||n&&s[a].context!==n)&&l.push(s[a]);l.length?this._events[r]=1===l.length?l[0]:l:c(this,r)}return this},l.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&c(this,t)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=o,l.EventEmitter=l,e.exports=l},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"i",(function(){return b}));var i=n(13),o=n(242),r=n(653);const s="archived",a="public",c="collaborators",l="collaboratorsAndViewers",d=(e,{projectId:t})=>{var n,i;return null!==(n=null===(i=e.projectsProjects)||void 0===i?void 0:i[t])&&void 0!==n?n:{}},u=(e,t)=>{var n,i;return null!==(n=null===(i=d(e,t))||void 0===i?void 0:i.isFollowing)&&void 0!==n&&n},p=(e,t)=>{const n=d(e,t),s=t.defaultProfileImage,a=t.extraUrlParams;return n.collaborators.map(t=>{if(t.accountId){const n=Object(o.c)(e,{accountId:t.accountId});return n.type===o.a?null:{name:n.fullName,url:n.accountURL?Object(i.a)(n.accountURL,a):"",imageUrl:n.profile.imageURL,isAccount:!0}}if(t.authorUid){const n=Object(r.a)(e,{authorUid:t.authorUid});return{name:n.authorName,url:Object(i.a)(n.authorURL,a),imageUrl:n.imageUrl,isAccount:!1,collaboratorId:t.collaboratorId,email:t.email}}return{name:t.name,url:"",imageUrl:s,isAccount:!1,collaboratorId:t.collaboratorId,email:t.email}}).filter(e=>!!e)},h=(e,t)=>((e,t)=>{var n,i;return null!==(n=null===(i=d(e,t))||void 0===i?void 0:i.collaborators)&&void 0!==n?n:[]})(e,t).length,b=(e,t)=>e.uploads[t.projectId]||{uploadState:{}}},284:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(47),r=(n(1),n(6)),s=n(15),a=n(249),c=n(462),l=n(503),d=n(504),u=n(0);class p extends i.Component{constructor(...e){super(...e),this.onRequestFulltext=()=>{this.props.requestFulltext(this.props.requestFulltextEndpoint,this.props.publicationUid),this.props.onRequestFulltext&&this.props.onRequestFulltext(),this.props.showMessageDialog(this.props.publicationUid)},this.onUndoRequestFulltext=()=>{this.props.undoRequestFulltext(this.props.undoRequestFulltextEndpoint,this.props.publicationUid),this.props.onUndoRequestFulltext&&this.props.onUndoRequestFulltext()}}render(){const{isPublicationResearchType:e,isRequested:t,isUndoRequestAllowed:n,shouldRender:i,buttonProps:o}=this.props;return i?Object(u.jsx)(d.a,{isResearchType:e,isRequested:t,isUndoRequestAllowed:n,onRequestFulltext:this.onRequestFulltext,onUndoRequestFulltext:this.onUndoRequestFulltext,buttonProps:o}):null}}p.displayName="PublicationRequestFulltextButton";const h=Object(o.a)(l.a,e=>{const{isRequested:t,isUndoRequestAllowed:n,isPublicationResearchType:i,requestFulltextEndpoint:o,undoRequestFulltextEndpoint:r,shouldRender:s}=e.toJS();return{isRequested:t,isUndoRequestAllowed:n,isPublicationResearchType:i,requestFulltextEndpoint:o,undoRequestFulltextEndpoint:r,shouldRender:s}});t.a=Object(r.b)(h,t=>({requestFulltext(e,n){t(Object(c.d)(e,n)),t(Object(a.d)(n))},undoRequestFulltext(e,n){t(Object(c.e)(e,n))},showMessageDialog(i){t(Object(s.mountAsyncModal)("publication.PublicationFulltextRequestAddMessage.html",{publicationUid:i,hideConfirmAlert:!0},void 0,()=>n.e(639).then(n.bind(null,745)),e.hot&&!1))}}))(p)}).call(this,n(58)(e))},2860:function(e,t,n){"use strict";var i=n(5);let o;Object(i.gql)(o||(o=(e=>e)`fragment VitaAwardFragment on VitaAward {
  id
  name
  type
  date
  startDate
  endDate
  value
  currency
  agency
  grantNumber
  leadResearchOrganization {
    ... on Institution {
      id
      name
      __typename
    }
    name
    __typename
  }
  principalInvestigators {
    ... on PersonFullName {
      fullName
      __typename
    }
    __typename
  }
  coInvestigators {
    ... on PersonFullName {
      fullName
      __typename
    }
    __typename
  }
  otherResearchOrganizations {
    name
    ... on Institution {
      id
      __typename
    }
    __typename
  }
  __typename
}
`))},288:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(207),s=n(4),a=n.n(s),c=n(1),l=n(67),d=n(27),u=n(0);const p=["name"],h=a.a.forwardRef((e,t)=>{let n=Object.assign({},(Object(r.a)(e),e));return Object(u.jsx)(l.a,Object(i.a)({input:e=>{let{field:{name:r}}=e,s=Object(o.a)(e.field,p);return Object(u.jsx)(c.Textarea,Object(i.a)(Object(i.a)(Object(i.a)({ref:t,name:r},s),Object(d.a)(r)),n))}},n))});h.displayName="FormikTextareaField",t.a=h},289:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n(1),a=n(67),c=n(27),l=n(0);const d=["children"],u=["name"];t.a=e=>{let{children:t}=e,n=Object(o.a)(e,d);return Object(l.jsx)(a.a,Object(i.a)({input:e=>{let{field:{name:a},meta:{touched:d,error:p}}=e,h=Object(o.a)(e.field,u);return Object(l.jsx)(s.Checkbox,Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({name:a,status:d&&p?"invalid":null},h),Object(c.a)(a)),n),{},{children:r.Children.map(t,e=>e)}))},type:"checkbox"},n))}},290:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(9),r=n(1),s=n(6),a=n(15),c=n(14),l=n(0);class d extends i.Component{constructor(...t){super(...t),this.openShareDialog=t=>{"string"!=typeof t&&(t=null),this.props.milestone&&Object(c.a)(this.props.milestone),this.props.dispatch(Object(a.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:new o.a(this.props.publicationUid,o.b.TYPE_PUBLICATION).toString(),context:t||this.props.context},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))}}render(){const{isPromoted:e,color:t,buttonCopy:n,theme:i}=this.props;let o=i;return o||(o=e?"solid":"bare"),Object(l.jsx)(r.Button,{type:"button",onClick:this.openShareDialog,size:"s",theme:o,color:t,width:"full",align:"left",children:n})}}d.displayName="PublicationShareAction",d.defaultProps={color:"blue"},t.a=Object(s.b)()(d)}).call(this,n(58)(e))},291:function(e,t){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},294:function(e,t,n){"use strict";var i=n(4),o=n(0);var r=({src:e})=>Object(o.jsx)("img",{"data-src":e,className:"lightbox-img lazyload"}),s=n(87),a=n(198);class c extends i.Component{constructor(...e){super(...e),this.state={isVisible:!1},this.handleClick=()=>{this.setState({isVisible:!0}),this.props.iepl&&Object(s.a)(this.props.iepl)},this.handleClose=()=>{this.setState({isVisible:!1})}}render(){const{context:e,initialImageUrl:t,imageLinks:n,children:i,buttons:r}=this.props;return Object(o.jsxs)("span",{className:"lightbox-trigger",onClick:this.handleClick,children:[i,this.state.isVisible&&Object(o.jsx)(a.a,{onClose:this.handleClose,buttons:r,imageLinks:n,initialImageUrl:t,context:e})]})}}c.displayName="LightboxTrigger";var l=c;l.Image=r;var d=l;t.a=e=>{const{children:t,downloadUrl:n,imageUrl:r,iepl:s,entityId:a}=e,c={largeUrl:r,downloadUrl:n},l=[{urls:c,entityId:a}];return Object(o.jsx)(d,{buttons:[{buttonProps:{href:n,key:"download"},iconProps:{identifier:"download"},label:"Download",className:"lightbox-download-button"}],iepl:s,imageLinks:l,initialImageUrl:c,context:"projectImageLightbox",children:i.Children.only(t)})}},2944:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(879),s=n(0);let a;t.a=Object(o.withQuery)(Object(o.gql)(a||(a=(e=>e)`query AccountFollowSimpleButton($id: ID!) {
  account(id: $id) {
    id
    ...AccountFollowAction @embed
    __typename
  }
  __typename
}
`)))(({id:e,context:t,theme:n,color:o,size:a,width:c,icon:l,onFollow:d})=>Object(s.jsx)(r.b,{id:e,context:t,onFollow:d,children:({label:e,toggleFollow:t})=>Object(s.jsxs)(i.Button,{type:"button",onClick:t,theme:n,color:o,size:a,width:c,children:[l&&Object(s.jsx)(i.Button.Icon,{identifier:l}),Object(s.jsx)(i.Button.Label,{children:e})]})}))},295:function(e,t,n){"use strict";var i=n(16),o=n.n(i),r=n(1),s=n(5),a=n(7),c=n(6),l=n(19),d=n(0);t.a=Object(a.a)(Object(c.h)(r.PublicationItem.MetaItem),Object(s.withQuery)(l.l,{mapDataToProps({publication:e}){var t;return{incomingCitationCount:null!==(t=null==e?void 0:e.incomingCitationCount)&&void 0!==t?t:0}}}))(({incomingCitationCount:e})=>e>0?Object(d.jsx)(r.PublicationItem.MetaItem,{children:`${e} ${o()("Citation",e)}`}):null)},296:function(e,t,n){"use strict";var i=n(16),o=n.n(i),r=n(1),s=n(5),a=n(7),c=n(6),l=n(32),d=n(19),u=n(0);t.a=Object(a.a)(Object(c.h)(r.PublicationItem.MetaItem),Object(s.withQuery)(d.m,{mapDataToProps({publication:e}){var t,n,i,o;return{totalReads:null!==(t=null==e||null===(n=e.stats)||void 0===n||null===(i=n.readMetrics)||void 0===i||null===(o=i.all)||void 0===o?void 0:o.total)&&void 0!==t?t:0}}}))(({totalReads:e})=>e>0?Object(u.jsx)(r.PublicationItem.MetaItem,{children:`${Object(l.j)(e)} ${o()("Read",e)}`}):null)},2969:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(12),s=n(5),a=n(7),c=n(6),l=n(11),d=n(29);let u,p=e=>e;var h=n(210),b=n(379),m=n(714),j=n(713),f=n(884),O=n(64),g=n(1),x=n(17),y=n(0);function v({submitting:e}){return e?"busy":null}function I({submitting:e}){return e?"disabled":null}const _=({onReject:e,handleSubmit:t,doSubmit:n,submitting:i,buttonRenderer:o})=>Object(y.jsxs)("form",{onSubmit:t(n),children:[Object(y.jsx)(g.Modal.Header,{children:Object(y.jsx)(g.Heading,{size:"xl",children:"Update your introduction"})}),Object(y.jsx)(g.Modal.Body,{children:Object(y.jsxs)(g.Stack,{gutter:"xs",children:[Object(y.jsx)(g.Stack.Item,{children:Object(y.jsx)(g.Text,{size:"l",color:"grey-900",children:Object(y.jsx)("strong",{children:"Keeping your introduction up to date is a great way to help others quickly understand your work."})})}),Object(y.jsx)(g.Stack.Item,{children:Object(y.jsx)(g.Text,{size:"l",color:"grey-900",children:Object(y.jsx)("strong",{children:"Here's what other researchers added:"})})}),Object(y.jsx)(g.Stack.Item,{children:Object(y.jsxs)(g.Text,{color:"grey-800",size:"m",children:[Object(y.jsx)(g.Icon,{identifier:"check-circle",color:"green"})," Current research interests"]})}),Object(y.jsx)(g.Stack.Item,{children:Object(y.jsxs)(g.Text,{color:"grey-800",size:"m",children:[Object(y.jsx)(g.Icon,{identifier:"check-circle",color:"green"})," Methods and techniques they use"]})}),Object(y.jsx)(g.Stack.Item,{children:Object(y.jsxs)(g.Text,{spacing:"xs",color:"grey-800",size:"m",children:[Object(y.jsx)(g.Icon,{identifier:"check-circle",color:"green"})," What they're working on now"]})}),Object(y.jsx)(g.Stack.Item,{children:Object(y.jsx)(g.FormGroup,{children:Object(y.jsx)(g.FormGroup.Item,{children:Object(y.jsx)(x.TextareaFormField,{label:"Introduction",name:"aboutMe",placeholder:"Add a description of your research",children:Object(y.jsx)(g.Textarea,{rows:5,maxLength:500})})})})})]})}),Object(y.jsx)(g.Modal.Footer,{children:o({onReject:e,rejectButtonStatus:I({submitting:i}),acceptButtonStatus:v({submitting:i})})})]});_.defaultProps={buttonRenderer:Object(c.n)("ProfileAboutMeModalFormLayoutButtons")(({onReject:e,rejectButtonStatus:t,acceptButtonStatus:n})=>Object(y.jsxs)(g.ButtonGroup,{children:[Object(y.jsx)(g.Button,{type:"button",theme:"bare",onClick:e,status:t,children:"Cancel"}),Object(y.jsx)(g.Button,{type:"submit",status:n,children:"Save"})]}))};var w=_,S=Object(a.a)(Object(r.connect)((e,{form:t})=>({formValues:Object(m.a)(t)(e),isFormValid:Object(j.a)(t)(e)})),Object(c.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}),Object(f.a)({validate:Object(O.createValidator)({aboutMe:{length:{maximum:500}}})}))(w);let P;const C=["form","aboutMe","initialValues"];t.a=Object(a.a)(Object(r.connect)(),h.a,Object(s.withQuery)(Object(s.gql)(P||(P=(e=>e)`query ProfileAboutMeModalContent($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      aboutMe
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{initialValues:{aboutMe:null==e||null===(t=e.profile)||void 0===t?void 0:t.aboutMe}}}}),Object(c.r)({onSubmit:({accountId:e,mutate:t,dispatch:n,onAccept:i,context:o,initialValues:r})=>({values:a})=>t(function({id:e,context:t,aboutMe:n}){return{mutation:Object(s.gql)(u||(u=p`mutation UpdateAboutMe($id: ID!, $context: String!, $aboutMe: String) {
  updateAboutMe(id: $id, context: $context, aboutMe: $aboutMe) {
    aboutMe
    __typename
  }
  __typename
}
`)),variables:{id:e,context:t,aboutMe:n},update:(t,{fieldKey:i})=>({[i("account",{id:e})]:{profile:{aboutMe:{$set:n}}}})}}({id:e,context:o,aboutMe:a.aboutMe})).then(()=>{n(Object(l.pushAlert)(()=>Object(y.jsx)(b.c,{}))),Object(d.b)(i,{initialValues:r,values:a})}).catch(e=>{n(Object(l.notifyAboutError)(e))})}))(e=>{let{form:t,aboutMe:n,initialValues:r}=e,s=Object(o.a)(e,C);return Object(y.jsx)(S,Object(i.a)({form:t,initialValues:Object(i.a)({},r)},s))})},30:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},302:function(e,t,n){"use strict";var i=n(200),o=n.n(i),r=n(33),s=n(0);t.a=({qualifier:e})=>Object(s.jsx)(r.a,{title:o()(e)+" recommended",description:`Your recommendation will be visible to anyone viewing this ${e}.`})},303:function(e,t,n){"use strict";var i=n(33),o=n(0);t.a=({qualifier:e})=>Object(o.jsx)(i.a,{title:"You no longer recommend this "+e})},305:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(1),s=n(146),a=n(0);const c=["children","forcePage"],l=e=>{let{children:t,forcePage:n}=e,l=Object(o.a)(e,c);const d=Object(i.a)({},l);return d.href=Object(s.a)(d.href,n),Object(a.jsx)(r.Link,Object(i.a)(Object(i.a)({},d),{},{target:"_blank",rel:"noopener",children:t}))};l.defaultProps={forcePage:!1},t.a=l},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u}));var i=n(884),o=n(1),r=n(17),s=n(64),a=n(478),c=n(0);const l="/api/additionalemail/add",d="/api/additionalemail/deny",u="profileAdditionalEmailDialogForm";t.d=Object(i.a)({form:u,validate:Object(s.createValidator)({additionalEmail:{presence:!0,email:!0}}),onSubmit:({additionalEmail:e},t)=>t({types:[a.a,a.d,a.b],alwaysReject:!0,performAsync:t=>t(l,{method:"POST",body:{additionalEmail:e}})}).catch(s.handleValidationErrors)})(({primaryEmail:e})=>Object(c.jsx)("form",{children:Object(c.jsxs)(o.FormGroup,{children:[Object(c.jsxs)(o.FormGroup.Item,{children:[Object(c.jsx)(o.Text,{size:"s",spacing:"xxs",children:"Your primary email address:"}),Object(c.jsx)(o.Text,{children:Object(c.jsx)("b",{children:e})})]}),Object(c.jsx)(o.FormGroup.Item,{children:Object(c.jsx)(r.InputFormField,{label:"Your additional email address",name:"additionalEmail",children:Object(c.jsx)(o.Input,{type:"text",placeholder:"Enter an email address"})})})]})}))},31:function(e,t){e.exports=function(e){return"function"==typeof e}},313:function(e,t,n){"use strict";n.r(t),n.d(t,"withRigel",(function(){return E}));var i=n(103),o=n(233),r=n(212),s=n(630);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(e){this.api=e.api,this.query=e.query,this.variables=e.variables,this.data=e.data,this.status=e.status,this.misses=e.misses,this.context=e.context,this.observer=e.observer,this.numPendingQueries=0}e.fromResponse=function(t,n,i,o){return new e({api:t,query:n,variables:i,data:o.data,status:o.status,misses:o.misses,context:null,observer:null})},e.fromCompleteResponse=function(t,n,i,o){return e.fromResponse(t,n,i,{status:"complete",misses:new r.MissList([]),data:o})};var t=e.prototype;return t.rebaseResponse=function(e){return new(0,this.constructor)(c(c({},e),{},{data:e.data,context:this.context,observer:this.observer}))},t.subscribeObserver=function(e){if(void 0===e&&(e=!1),this.observer)this.api.subscribeResponseObserver(this.observer);else if(!e)throw new Error("Only responses created using .bindQuery() or .bindConnection() can subscribe")},t.unsubscribeObserver=function(){if(!this.observer)throw new Error("Only responses created using .bindQuery() or .bindConnection() can unsubscribe");this.api.unsubscribeResponseObserver(this.observer)},t.isBusy=function(){return this.numPendingQueries>0},t.setObserver=function(e){if(this.observer)throw new Error("QueryResponseApi already has an observer set");this.observer=e},t.isComplete=function(){return"complete"===this.status},t.requery=function(e,t){var n=this;return this.subscribeObserver(!0),this.numPendingQueries++,this.api.query(this.query,e,t).then((function(e){return n.numPendingQueries--,n.rebaseResponse(e)}))},t.update=function(e,t){void 0===e&&(e=this.variables),void 0===t&&(t={});var n=t,i=n.observeSequentially,o=void 0===i||i,r=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["observeSequentially"]),s=this.requery(e,r);return this.observer&&this.observer.scheduleUpdate(s,{sequential:o}),s},t.subscribe=function(){this.subscribeObserver();var e=this.api.read(this.query,this.variables),t=this.rebaseResponse(e);return this.observer&&this.observer.update(t),t},t.unsubscribe=function(){return this.unsubscribeObserver(),this},t.reset=function(e){void 0===e&&(e={}),this.subscribeObserver(!0);var t=this.api.read(this.query,e),n=this.rebaseResponse(t);return this.observer&&(this.observer.clearScheduledUpdates(),this.observer.update(n)),n},e}(),u=n(564),p=n.n(u),h=n(677);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.fromResponseApi=function(e){return new i(m(m({},e),{},{context:O(e)}))};var o=i.prototype;return o.getPageInfo=function(){if(this.pageInfo)return this.pageInfo;var e=p()(this.data,[this.context.key,"pageInfo"].join("."));if(!e)throw new Error("Connection response api needs pageInfo to be present in query response");return this.pageInfo=e},o.getEndCursor=function(){var e=this.getPageInfo().endCursor;if(!Object(r.isValidCursor)(e))throw new Error("Connection response api contains invalid cursor "+e);return e},o.loadMore=function(e){var t,n,i=this;if(void 0===e&&(e={}),"incomplete"===this.status)throw new Error("\n.loadMore() can only load more items once the first page of data has been received. Please first call .update() to obtain the first page, then call .loadMore() on the resulting response.\n");var o=m(m({},this.variables),{},((t={})[this.context.firstVarName]=this.context.initialPageSize,t[this.context.afterVarName]=this.getEndCursor(),t),e),r=m(m(m({},this.variables),e),{},((n={})[this.context.firstVarName]=this.incrCount(e),n[this.context.afterVarName]=this.context.initialCursor,n));return this.requery(o,{readCache:!1}).then((function(){return i.update(r,{readCache:!0})}))},o.incrCount=function(e){void 0===e&&(e={});var t=e[this.context.firstVarName],n=null!=t?t:this.context.initialPageSize;return this.variables[this.context.firstVarName]+n},i}(d);function O(e){var t=Object(h.a)(e.query);if(!t)throw new Error("No connection field found");var n=t.key,o=t.firstVarName,r=t.afterVarName;if(null==o)throw new Error("Connection field's 'first' argument needs to reference a veriable for use with connection response api");if(null==r)throw new Error("Connection field's 'after' argument needs to reference a variable for use with connection response api");var s=e.variables[o],a=e.variables[r];if("number"!=typeof s)throw new Error("Connection field requires a number for 'first' argument, got "+Object(i.displayType)(s));return{initialPageSize:s,initialCursor:void 0===a?null:a,key:n,firstVarName:o,afterVarName:r}}var g=function(){function e(){this.tasks=[],this.isBusy=!1}var t=e.prototype;return t.schedule=function(e){var t=this,n=new Promise((function(n,i){t.tasks.push((function(){return Promise.resolve().then(e).then(n,i)}))}));return this.next(),n},t.next=function(){var e=this;if(!this.isBusy){var t=this.tasks.shift();if(t){this.isBusy=!0;var n=function(){e.isBusy=!1,e.next()};t().then(n,n)}}},e}(),x=function(){function e(e,t,n){this.value=e,this.listener=n,this.shouldUpdate=t,this.tasks=new g}var t=e.prototype;return t.clearScheduledUpdates=function(){this.tasks=new g},t.scheduleUpdate=function(e,t){var n=this,i=(void 0===t?{}:t).sequential,o=void 0===i||i,r=this.tasks,s=function(){return Promise.resolve(e).then((function(e){r===n.tasks&&n.update(e)}))};return o?this.tasks.schedule(s):s()},t.update=function(e){if(this.shouldUpdate(this.value,e)){var t=this.value;this.value=e,this.listener(e,t)}},e}();function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var w=function(){function e(e){var t=e.dispatch,n=e.context,i=void 0===n?s.b:n,o=e.state,r=void 0===o?{queryStores:new WeakMap,observers:new Set}:o;this.dispatch=t,this.context=i,this.state=r,this.read=this.read.bind(this),this.patch=this.patch.bind(this),this.query=this.query.bind(this)}var t=e.prototype;return t.ensureQueryStore=function(e){var t=this.state.queryStores.get(e);if(t)return t;var n=Object(r.createQueryStore)(this.context,e);return this.state.queryStores.set(e,n),n},t.subscribeResponseObserver=function(e){this.state.observers.add(e)},t.unsubscribeResponseObserver=function(e){this.state.observers.delete(e)},t.refreshObservers=function(){for(var e,t=I(this.state.observers);!(e=t()).done;){var n=e.value.value;n.isBusy()||n.update()}},t.setProps=function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({dispatch:this.dispatch,context:this.context,state:this.state},t))},t.read=function(e,t){var n=this;void 0===t&&(t={});var r=Object(i.ensureOperationDefinition)(e);t=Object(i.getVariableValues)(r.variableDefinitions,t);return this.dispatch(Object(o.readStore)({reader:function(i){var o=n.ensureQueryStore(e)(i.store,t);return d.fromResponse(n,e,t,o)}}))},t.bindQuery=function(e,t,n){var i=this.read(e,n),o=new x(i,S,t);return i.setObserver(o),i},t.readConnection=function(e,t){var n=this.read(e,t);return f.fromResponseApi(n)},t.bindConnection=function(e,t,n){var i=this.readConnection(e,n),o=new x(i,S,t);return i.setObserver(o),i},t.patch=function(e){return this.dispatch(Object(o.patch)({patch:e}))},t.mutate=function(e){return this.dispatch(Object(o.mutate)(e))},t.query=function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n){var s=this;void 0===t&&(t={}),void 0===n&&(n={});var a=n,c=a.readCache,l=void 0===c||c,u=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(a,["readCache"]),p=Object(i.ensureOperationDefinition)(e);t=Object(i.getVariableValues)(p.variableDefinitions,t);var h=null;if(l){var b=this.read(e,t);if(h=b.misses,"complete"===b.status)return Promise.resolve(b)}return this.dispatch(Object(o.performQuery)({query:e,variables:t,options:u,reason:new r.ImperativeQueryFetchReason({readCache:l,misses:h})})).then((function(n){return d.fromCompleteResponse(s,e,t,n.data)}))})),e}();function S(e,t){return e.status!==t.status||e.data!==t.data}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return{rigel:e}}function D(e,t){return function(n,i){return C(C({},i),t(e,i))}}function E(e,t){void 0===e&&(e=A),void 0===t&&(t={});var n=t,i=n.context,r=n.subscribe,s=void 0===r||r;return Object(o.effectfulConnect)((function(t){var n=new w({dispatch:t,context:i});return{selector:D(n,e),didUpdate:function(){n.refreshObservers()}}}),{shouldHandleStateChanges:s})}},32:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"m",(function(){return j})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return g})),n.d(t,"i",(function(){return x})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return v})),n.d(t,"b",(function(){return I})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return w}));var i=n(372),o=n.n(i),r=n(34),s=n.n(r),a=n(16),c=n.n(a),l=n(6),d=n(91);const u={TYPE_PUBLICATION:"publication",TYPE_PUBLICATION_COMMENT:"publicationComment",TYPE_PUBLICATION_REPLY:"publicationReply",TYPE_PROJECT_UPDATE:"projectUpdate",TYPE_PROJECT_COMMENT:"projectComment",TYPE_QUESTION:"question",TYPE_ANSWER:"answer"},p={reads:"person:read:research",publicationReads:"person:read:publication",publicationViews:"person:view:publication",publicationAssetConsumptions:"person:consume:asset:publication",citations:"publication:cite:publication",recommendations:"person:recommend:research",publicationRecommendations:"person:like:publication",publicationItemScore:"publicationItemScore"},h={reads:"read",publicationReads:"publication read",publicationViews:"publication view",publicationInformationRead:"other read",publicationAssetConsumptions:"full-text read",citations:"citation",recommendations:"recommendation",publicationRecommendations:"publication recommendation",publicationItemScore:"Research Interest Score"},b={[p.reads]:h.reads,[p.publicationReads]:h.reads,[p.publicationViews]:h.publicationViews,[p.publicationAssetConsumptions]:h.publicationAssetConsumptions,[p.citations]:h.citations,[p.recommendations]:h.recommendations,[p.publicationRecommendations]:h.recommendations,[p.publicationItemScore]:h.publicationItemScore},m={PUBLICATION:"publications",ALL:"all"};function j(e){return!!e&&e===m.PUBLICATION}function f(e){return s()(e).format("0,0")}function O(e){return e<1e6?f(e):s()(e).format("0.0a").toUpperCase()}function g(e){const t=f(e);return e>0?"+"+t:t}function x(e,t){return e===h.publicationItemScore?e:o()(c()(e,t))}function y(e,t){return Math.max(Math.max(e,0)-Math.max(t,0),0)}function v(e,t){return Math.max(Math.max(e||0,0)-Math.max(t||0,0),0)}const I={[p.reads]:"#9E7326",[p.publicationReads]:"#9E7326",[p.publicationViews]:"#9E7326",[p.publicationAssetConsumptions]:"#1524CE",[p.citations]:"#F8BC5D",[p.recommendations]:"#D077E3",[p.publicationRecommendations]:"#D077E3",[p.publicationItemScore]:"#5CD0C6"},_={lineStyle:{strokeWidth:"2px"}};function w(e,t){return Object(l.n)(Object(d.a)(e,t))}},320:function(e,t){},324:function(e,t,n){"use strict";var i=n(2),o=n(34),r=n.n(o),s=n(16),a=n.n(s),c=n(1),l=n(496),d=n(10),u=n(6),p=n(290),h=n(0);var b=({hasDisplayableLink:e,isPublicationResearchType:t,uploadFulltextUrl:n,showDownloadAuthor:i,downloadLink:o,publicationUrl:r,publicationUid:s,context:a,hasShareButton:l,showSocialBar:d})=>Object(h.jsxs)(c.PublicationItem.Actions,{children:[e&&!i&&Object(h.jsx)(c.PublicationItem.Action,{href:r,children:"View"},"read"),e&&i&&Object(h.jsx)(c.PublicationItem.Action,{priority:"secondary",href:o,children:"Download"},"download"),!e&&Object(h.jsx)(c.PublicationItem.Action,{href:n,children:t?"Upload file":"Upload full-text"},"fulltext"),l&&!d&&Object(h.jsx)(p.a,{publicationUid:s,buttonCopy:"Share",context:a,theme:""})]}),m=n(4),j=n(9),f=n(127),O=n(495),g=n(284);class x extends m.Component{getDropdownActions(){return Object(h.jsx)("div",{className:"publication-item-dropdown-actions",children:Object(h.jsx)(c.PublicationItem.DropdownActions,{children:Object(h.jsxs)(c.Stack,{children:[Object(h.jsx)(c.Stack.Item,{children:this.getFollowButton()}),Object(h.jsx)(c.Stack.Item,{children:this.getShareButton()}),Object(h.jsx)(c.Stack.Item,{children:this.getLikeButton()})]})})})}getFollowButton(){const{publicationUid:e,hideFollowAction:t,showSocialBar:n}=this.props;return t||n?null:Object(h.jsx)(O.a,{theme:"bare",color:"blue",publicationUid:e,className:"publication-item-follow-button"},"follow")}getShareButton(){const{publicationUid:e,hasShareButton:t,showSocialBar:n,context:i}=this.props;return!t||n?null:Object(h.jsx)(p.a,{publicationUid:e,buttonCopy:"Share",context:i,theme:""})}getLikeButton(){const{publicationUid:e,hasRecommendAction:t,likeButtonIepl:n,context:i,showSocialBar:o}=this.props;if(!t||o)return null;const r=new j.a(e,j.b.TYPE_PUBLICATION).getFullKey();return Object(h.jsx)(f.a,{className:"publication-item-like-button",id:r,context:i||"homeFeed",theme:"bare",size:"s",iepl:n},"like_"+e)}render(){const{hasDisplayableLink:e,publicationUid:t,publicationUrl:n,downloadLink:o,onRequestFulltext:r,buttonProps:s,showDuplicateInDropdown:a,alwaysShowViewButton:l,hideViewButton:d,mainActionGhost:u,showSocialBar:p}=this.props,b=s&&s.requestFT?{buttonProps:s.requestFT}:{};let m,j;return(l||e&&!o&&!d||p)&&(m=Object(h.jsx)(c.PublicationItem.Action,{href:n,children:"View"},"read")),e&&o&&(j=Object(h.jsx)(c.PublicationItem.Action,{priority:u?"secondary":"tertiary",href:o,children:"Download"},"download")),Object(h.jsxs)("div",{children:[Object(h.jsxs)(c.PublicationItem.Actions,{children:[m,j,Object(h.jsx)(g.a,Object(i.a)({onRequestFulltext:r,publicationUid:t},b),"requestFulltext"),this.getFollowButton(),this.getLikeButton(),this.getShareButton()]}),a&&this.getDropdownActions()]})}}x.displayName="PublicationItemConsumerActions";var y=x;const v=["isAuthor"];var I=Object(u.h)(c.PublicationItem.Actions)(e=>{let{isAuthor:t}=e,n=Object(d.a)(e,v);return t?Object(h.jsx)(b,Object(i.a)({},n)):Object(h.jsx)(y,Object(i.a)({},n))}),_=n(3),w=n.n(_),S=n(12),P=n(516),C=n(7),k=n(198),A=n(230);class D extends m.Component{constructor(...e){super(...e),this.state={lightBox:null},this.handleCloseLightBox=()=>{this.setState({lightBox:null})}}openLightBox(e){"number"!=typeof e&&(e=0);const t=this.props.figureUris[e],n=[{buttonProps:{href:t,key:"download"},iconProps:{identifier:"download"},label:"Download",className:"lightbox-download-button"}],i=[{urls:{largeUrl:t,downloadUrl:t},entityId:this.props.figureDialogUri}];this.setState({lightBox:Object(h.jsx)(k.a,{buttons:n,onClose:this.handleCloseLightBox,imageLinks:i,initialImageUrl:i[0].urls,context:"projectImageLightbox"})})}openFiguresDialog(e){const{dispatch:t,publicationUid:n,figureDialogWidgetParams:i}=this.props;"number"!=typeof e&&(e=null);const o=i?Object.assign(i,{figureItemIndex:e,openedFromPreviewer:!0}):Object.assign({figureItemIndex:e,openedFromPreviewer:!0});Object(A.a)(t,n,o)}handleImageClick(e){return this.props.figureDialogUri&&"AS:"!==this.props.figureDialogUri.substring(0,3)?this.openFiguresDialog(e):this.openLightBox(e)}render(){const{figureUris:e,figureCaptions:t,linkToFigurePages:n,figureOptions:o}=this.props,r="strip"===o.type,s=r?"Q640":D.DERIVATIVE_MAP_640[e.length-1]||"Q640",a=a=>Object(h.jsx)(c.PublicationItem.Figures,{type:o.type,loadImages:a,children:e.map((e,o)=>{const a=n?n[o]:null,l=e.replace(D.IMAGE_URL_Q320_REGEX,(e,t,n)=>`${t}_${s}.${n}`),d={src:e,srcSet:r?`${e}, ${l} 2x`:`${e} 320w, ${l} 640w`};return t&&(d.alt=t[o]),a?d.href=a:d.onClick=this.handleImageClick.bind(this,o),Object(h.jsx)(c.PublicationItem.Figure,Object(i.a)({},d),o)})});return!0===o.isEnterViewportActive?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P.a,{mount:"div",children:e=>a(e)}),this.state.lightBox]}):a()}}D.displayName="PublicationItemFigures",D.IMAGE_URL_Q320_REGEX=/(.+)_Q320\.([a-z\d]{2,})$/,D.DERIVATIVE_MAP_640=["Q640","W640","W640","W640","Q640"],D.defaultProps={figureOptions:w.a.shape({type:"tiles",isEnterViewportActive:!0})};var E=Object(C.a)(Object(S.connect)(),Object(u.h)(c.PublicationItem.Figures))(D);var T=Object(C.a)(Object(u.h)(c.PublicationItem.Badges))(({link:e,fullTextAvailable:t,type:n})=>e&&t&&n?Object(h.jsx)(c.PublicationItem.Badges,{children:Object(h.jsx)(c.PublicationItem.Badge,{href:e,priority:"tertiary",children:t})}):null),F=n(54),M=n.n(F);var R=({labs:e})=>{if(M()(e))return null;const t=e.length;let n=null;if(t>2&&(n=`and ${t-1} other ${a()("lab",t-1)}`),2===t){const t=e[1];n=Object(h.jsxs)("span",{children:["and ",Object(h.jsx)(c.Link,{href:t.url,children:t.name})]})}const i=e[0];return Object(h.jsxs)(c.Text,{color:"grey-500",spacing:"xs",children:["Research from: ",Object(h.jsx)(c.Link,{href:i.url,children:i.name})," ",n]})},N=n(505),L=n(497),B=n(498);var q=Object(u.h)(c.PublicationItem.Preview)(({imageUrl:e,url:t,sourceName:n,sourceUrl:i})=>Object(h.jsxs)(c.PublicationItem.Preview,{children:[Object(h.jsx)(c.PublicationItem.PreviewImage,{alt:"Publication Preview",imageUrl:e,href:t}),n&&i?Object(h.jsx)(c.PublicationItem.PreviewSource,{href:i,children:"Available from: "+n}):null]}));var U=({imageUrl:e,imageAlt:t,labelPrimaryUrl:n,labelPrimary:i,labelSecondaryUrl:o,labelSecondary:r})=>Object(h.jsxs)(c.Qualifier,{children:[e&&Object(h.jsx)(c.Qualifier.Image,{alt:t,src:e}),(i||r)&&Object(h.jsxs)(c.Qualifier.Labels,{children:[i&&Object(h.jsx)(c.Qualifier.Label,{children:Object(h.jsx)(c.Link,{href:n,theme:"bare",children:i})}),r&&Object(h.jsx)(c.Qualifier.Label,{children:Object(h.jsx)(c.Link,{href:o,theme:"bare",children:r})})]})]}),$=n(506);class V extends m.Component{render(){const{supplements:e}=this.props;return Object(h.jsx)(m.Fragment,{children:e.map((e,t)=>Object(h.jsxs)(c.Flex,{gutter:"xs",children:[Object(h.jsx)(c.Flex.Item,{children:Object(h.jsx)(c.Icon,{identifier:"link"})}),Object(h.jsx)(c.Flex.Item,{children:Object(h.jsxs)(c.List,{type:"inline",spacing:"none",children:[Object(h.jsx)(c.List.Item,{children:e.type}),Object(h.jsx)(c.List.Item,{children:Object(h.jsx)(c.Link,{href:e.urls.title,children:e.title})})]})})]},t))})}}V.displayName="PublicationItemSupplements";var z=Object(C.a)(Object(u.h)(c.PublicationItem.Authors))(V);var G=Object(C.a)(Object(u.h)(c.PublicationItem.Type))(({link:e,type:t,hidePublicationItemTypeBadge:n,hasNewBadge:i})=>{if(n||!t)return null;const o=i?"New "+t.toString().toLowerCase():t,r=i?{backgroundColor:c.Color.getColor("green-600"),color:c.Color.getColor("white")}:null;return Object(h.jsx)(m.Fragment,{children:Object(h.jsx)(c.Flex,{gutter:"xxs",children:Object(h.jsx)(c.Flex.Item,{children:Object(h.jsx)(c.PublicationItem.Type,{style:r,href:e,children:o})})})})}),Q=n(357);var H=Object(u.h)(c.PublicationItem.Metric)(e=>Object(h.jsx)(Q.a,Object(i.a)({},e)));const W=({size:e,abstract:t,actions:n,authors:o,className:s,clampTitle:d,clampAbstract:u,dropdownActions:p,fullTextAvailable:b,metaItems:m,metricCitationsCount:j,metricReadsCount:f,figureDialogUri:O,figureDialogWidgetParams:g,figureUris:x,figureCaptions:y,publicationActions:v,qualifier:_,typeBadgeSize:w,metaItemsSize:S,schemaOrg:P,title:C,hideTitle:k,type:A,urls:D,preview:F,hidePublicationItemTypeBadge:M,componentOptions:V,onRequestFulltext:Q,publicationUid:W,showLikes:Y,linkToFigurePages:K,hasNewBadge:J,context:X,showSocialBar:Z,showListSocialBar:ee,isAuthor:te,likeButtonIepl:ne,isMultiElement:ie,labs:oe,supplements:re,isDiscussionStartButtonEnabled:se,discussionMilestones:ae,gtmClassName:ce})=>{const le=m&&m.length>0,de=D&&D.title?D.title:"",ue=D&&D.citationsCount?D.citationsCount:"",pe=D&&D.readsCount?D.readsCount:"",he=D&&D.preview?D.preview:"",be=D&&D.download?D.download:"",me=()=>v&&!(ie&&Z)&&!ee,je=Object(h.jsxs)("div",{className:s,children:[Object(h.jsx)(R,{labs:oe}),Object(h.jsxs)(c.PublicationItem,{schemaOrg:P,size:e,className:ce,children:[_&&Object(h.jsx)(U,Object(i.a)({},_)),!k&&Object(h.jsx)(c.PublicationItem.Title,{clamp:d?"3":"none",href:de,children:C}),t&&Object(h.jsx)(c.PublicationItem.Abstract,{clamp:u?"3":"none",children:t}),Object(h.jsx)(G,{link:de,type:A,fullTextAvailable:b,size:w,hidePublicationItemTypeBadge:M,hasNewBadge:J}),Object(h.jsx)(T,{link:de,type:A,fullTextAvailable:b}),x&&x.length>0&&Object(h.jsx)(E,{linkToFigurePages:K,figureDialogUri:O,figureDialogWidgetParams:g,figureUris:x,figureCaptions:y,figureOptions:V.figures,publicationUid:W}),le&&Object(h.jsx)(B.a,{size:S,children:m&&m.length>0&&m.map((e,t)=>Object(h.jsx)(L.a,{href:e.href?e.href:null,children:e.label},t))}),o&&Object(h.jsx)(l.a,{authors:o,gtmClassName:"gtm-profile-item"}),re&&Object(h.jsx)(z,{supplements:re}),F&&Object(h.jsx)(q,Object(i.a)({url:he},F)),me()&&Object(h.jsx)(I,Object(i.a)(Object(i.a)({},v),{},{showSocialBar:Z,downloadLink:be,onRequestFulltext:Q})),!(v||ie&&Z||ee)&&n,me()&&p,(f||j||Y)&&!(ie&&Z)&&Object(h.jsxs)(c.PublicationItem.Metrics,{children:[Y&&Object(h.jsx)(H,{id:"PB:"+W,theme:"bare",className:"action-item",showLikesDialog:!0,label:"Recommendation",useLink:!0}),f>0&&Object(h.jsx)(c.PublicationItem.Metric,{href:pe,children:`${r()(f).format("0,0")} ${a()("Read",f)}`}),j>0&&Object(h.jsx)(c.PublicationItem.Metric,{href:ue,children:`${r()(j).format("0,0")} ${a()("Citation",j)}`})]})]})]});if(Z||ee){const e=Z?$.a:N.a,t=Z?"xl":"s";return Object(h.jsxs)(c.Stack,{gutter:t,showDivider:Z,children:[Object(h.jsx)(c.Stack.Item,{children:je}),Object(h.jsx)(c.Stack.Item,{children:Object(h.jsx)(e,Object(i.a)(Object(i.a)({publicationUid:W,context:X||"homeFeed",isAuthor:te,type:A,likeButtonIepl:ne},v),{},{downloadLink:be,bareRootUrl:D.bareRootUrl,onRequestFulltext:Q,isDiscussionStartButtonEnabled:se,discussionMilestones:ae}))})]})}return je};W.defaultProps={clampTitle:!0,clampAbstract:!0,componentOptions:{figures:{type:"tiles"}},hasNewBadge:!1,showLikes:!0};t.a=W},325:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(1),s=n(0);class a extends o.Component{getAuthorItem(e,t){const n={key:t,href:e.url,imageUrl:e.imageUrl};e.schemaOrg&&(n.schemaOrg=e.schemaOrg);const o=e.url?e.url:"";return Object(s.jsx)(r.PublicationItem.Author,Object(i.a)(Object(i.a)({},n),{},{href:o,itemProp:e.schemaOrg?"author":null,children:e.name}))}render(){const{headAuthorships:e,tailAuthorships:t,countLeft:n,className:i,highlightedAuthor:o}=this.props;if(0===e.length)return null;let a=!1;const c=e.map((e,t)=>this.getAuthorItem(e,t)),l=t.map((e,t)=>this.getAuthorItem(e,t));return e.concat(t).forEach(e=>e.isHighlighted?(a=!0,!1):null),o&&!a?Object(s.jsxs)(r.PublicationItem.Authors,{className:i,children:[c,Object(s.jsx)(r.PublicationItem.AuthorTruncation,{}),this.getAuthorItem(o,e.length+t.length),Object(s.jsx)(r.PublicationItem.AuthorTruncation,{}),l]}):Object(s.jsxs)(r.PublicationItem.Authors,{className:i,children:[c,n>0&&Object(s.jsx)(r.PublicationItem.AuthorTruncation,{}),l]})}}a.displayName="PublicationItemAuthors",t.a=a},328:function(e,t,n){"use strict";var i=n(2),o=n(3),r=n.n(o),s=n(4);const a={sourcePath:[],sourceContentId:null,referrerContentId:null},c=Object(s.createContext)(a);c.defaultValues=Object(i.a)({},a),c.propType={context:r.a.shape({sourcePath:r.a.arrayOf(r.a.string),sourceContentId:r.a.string,referrerContentId:r.a.string})},t.a=c},330:function(e,t,n){var i=n(888);e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return j}));var i=n(1),o=n(0);var r=({description:e})=>Object(o.jsx)(i.Text,{children:e}),s=n(2),a=n(8),c=n.n(a);n(932);const l=new c.a("simple-spotlight-item-keywords");var d=({keywords:e})=>Object(o.jsx)(i.Flex,{wrap:"wrap",gutter:"xs",children:e.map(e=>Object(o.jsx)(i.Flex.Item,Object(s.a)(Object(s.a)({},l("badge-wrapper")),{},{children:Object(o.jsx)(i.Badge,{theme:"ghost",truncate:!0,children:e})}),"spotlight-keyword-"+e))}),u=n(6),p=n(13),h=n(609);n(933);const b=new c.a("simple-spotlight-item-qualifier"),m=({fullName:e,image:t,url:n,subtitle:r,urlParams:a,renderAccountTooltip:c,viewCount:l})=>{const d=Object(o.jsx)(i.Avatar,{alt:e,src:t.url,size:"m"});return Object(o.jsxs)(i.Flex,Object(s.a)(Object(s.a)({},b("")),{},{alignItems:"center",justifyContent:"center",gutter:"xs",children:[Object(o.jsx)(i.Flex.Item,{grow:!1,basis:"0px",children:c({children:n?Object(o.jsx)(i.Link,{href:Object(p.a)(n,a),theme:"silent",children:d}):d})}),Object(o.jsx)(i.Flex.Item,{grow:!0,basis:"0px",children:Object(o.jsxs)(i.Stack,{gutter:"none",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(o.jsx)(i.Stack.Item,{children:c({children:n?Object(o.jsx)(i.Text,{children:Object(o.jsx)(i.Link,{href:Object(p.a)(n,a),theme:"bare",color:"blue",children:e})}):Object(o.jsx)(i.Text,{color:"blue-500",children:e})})}),r&&Object(o.jsx)(i.Stack.Item,{children:Object(o.jsx)(i.Text,{children:Object(o.jsxs)(i.Flex,Object(s.a)(Object(s.a)({},b("subtitle")),{},{alignItems:"center",gutter:"xxs",children:[Object(o.jsx)(i.Flex.Item,{children:r}),Object(o.jsx)(i.Flex.Item,{children:Object(o.jsx)(h.a,{viewCount:l})})]}))})})]})})]}))};m.defaultProps={renderAccountTooltip:Object(u.n)("SimpleSpotlightItemQualifier_AccountTooltip")(({children:e})=>e)};var j=m},339:function(e,t,n){"use strict";var i=n(10),o=n(2),r=n(4),s=n(12),a=n(1),c=n(7),l=n(11),d=n(29),u=n(299),p=n(219),h=n(50),b=n(210),m=n(371),j=n(0);const f=["id","isOpen","onRequestClose","isAnonymous","postType","initialValues"];class O extends r.Component{constructor(...e){super(...e),this.handleSubmit=({values:{subject:e,body:{text:t,struct:n},isAnonymous:i,postType:r},files:s})=>{const{dispatch:a,context:c,onFinishPromise:d,additionalRequestParameters:b={},onRequestClose:m}=this.props,j=Object(o.a)({context:c,subject:e,body:t,struct:JSON.stringify(n),files:s,externalType:p.a.EXTERNAL_TYPE_QUESTION,isDiscussion:r===h.a,isAnonymous:i},b);return Object(u.a)("/converse/api/topics/message",{method:"POST",body:j}).then(({result:e})=>{if(m(),d)return Promise.resolve(d(e))}).catch(e=>{a(Object(l.notifyAboutError)(e))})},this.handleReject=()=>{const{onRequestClose:e,onReject:t}=this.props;e(),Object(d.b)(t)}}render(){const e=this.props,{id:t,isOpen:n,onRequestClose:r,isAnonymous:s,postType:c,initialValues:l}=e,d=Object(i.a)(e,f);return Object(j.jsx)(a.Modal,{scope:"local",isCloseable:!1,width:"m",isOpen:n,onRequestClose:r,children:Object(j.jsx)(m.b,Object(o.a)(Object(o.a)({id:t,onSubmit:this.handleSubmit,initialValues:Object(o.a)({subject:"",body:{text:null,struct:null},postType:c,isAnonymous:s,uploadConditions:!1},l)},d),{},{onReject:this.handleReject}))})}}O.displayName="CreateQuestionPostModal",O.defaultProps={initialValues:{}},t.a=Object(c.a)(Object(s.connect)(),b.a)(O)},3391:function(e,t,n){"use strict";(function(e){var i=n(4),o=n.n(i),r=n(696),s=n(6),a=n(15),c=n(3477),l=n(3480),d=n(1320),u=n(0),p=()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(579)]).then(n.bind(null,1686));class h extends i.Component{constructor(t){super(t),this.spotlightRef=void 0,this.scrollToSpotlight=()=>{var e;return null===(e=this.spotlightRef.current)||void 0===e?void 0:e.scrollIntoView()},this.handleProfileCompletionModalFinish=({hasInstitutionChanged:t})=>{if(t){const{dispatch:t}=this.props;setTimeout(()=>t(Object(a.mountAsyncModal)("profile.AddNewEmailPromo.html",null,void 0,()=>n.e(585).then(n.bind(null,2603)),e.hot&&!1)),0)}},this.spotlightRef=o.a.createRef()}componentDidMount(){const{dispatch:e,accountKey:t,isMessageModalVisible:n,shouldScrollToSpotlight:i}=this.props;n&&t&&e(Object(a.mountModal)(()=>Object(u.jsx)(r.a,{url:"messages.MessageCreateModal.html",widgetParams:{account_key:t},__internalLoadComponent:p}))),i&&this.scrollToSpotlight()}render(){const{page:e,content:t,profileCompletionModal:n}=this.props;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{widgetId:e,children:Object(u.jsx)(c.a,{widgetId:t,spotlightRef:this.spotlightRef})}),n?Object(u.jsx)(l.a,{widgetId:n,isOpen:!0,onFinish:this.handleProfileCompletionModalFinish}):null]})}}h.displayName="Profile",t.a=Object(s.b)()(h)}).call(this,n(58)(e))},3392:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(12),s=n(1),a=n(5),c=n(7),l=n(15),d=n(3393),u=n(559),p=n(3489),h=n(3394),b=n(3395),m=n(965),j=n(574),f=n(0);let O;const g=({headline:e,onClick:t})=>Object(f.jsxs)(s.Flex,{children:[Object(f.jsx)(s.Flex.Item,{grow:!0,children:Object(f.jsx)(s.Text,{children:Object(f.jsx)("b",{children:e})})}),t&&Object(f.jsx)(s.Flex.Item,{children:Object(f.jsx)(m.a,{onClick:t,icon:"notes",children:"View all"})})]}),x={gutter:"xs"};class y extends o.Component{constructor(...t){super(...t),this.state={isEditMode:!1},this.handleShowAllCurrentAdvisors=()=>{this.props.dispatch(Object(l.mountAsyncModal)("profile.advisors.ProfileCurrentAdvisorsModal.html",{accountId:this.props.id},void 0,()=>n.e(602).then(n.bind(null,6043)),e.hot&&!1))},this.handleShowAllPastAdvisors=()=>{this.props.dispatch(Object(l.mountAsyncModal)("profile.advisors.ProfilePastAdvisorsModal.html",{accountId:this.props.id},void 0,()=>n.e(603).then(n.bind(null,6044)),e.hot&&!1))}}render(){const{id:e,isSelf:t,currentTotalItems:n,pastTotalItems:o}=this.props,r=0===n&&0===o;if(!t&&r)return null;let a;return a=this.state.isEditMode?Object(f.jsxs)(s.Stack,{showDivider:!0,gutter:"xxl",children:[Object(f.jsx)(s.Stack.Item,{children:Object(f.jsx)(s.Text,{color:"grey-700",children:"Enter your current and past academic advisors to add them to your profile."})}),Object(f.jsx)(s.Stack.Item,{children:Object(f.jsx)(p.a,{id:this.props.id,context:"profileOverview",onReject:()=>this.setState({isEditMode:!1})})})]}):r?Object(f.jsx)(u.b,{headline:"Add your advisors",note:"List your current and past academic advisors.",imageSrc:d.a,onClick:()=>this.setState({isEditMode:!0})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(s.Stack,{showDivider:!0,gutter:"xl",children:[n>0?Object(f.jsx)(s.Stack.Item,{children:Object(f.jsxs)(s.Stack,Object(i.a)(Object(i.a)({},x),{},{children:[Object(f.jsx)(s.Stack.Item,{children:Object(f.jsx)(g,{headline:"Current advisors",onClick:n>3?this.handleShowAllCurrentAdvisors:null})}),Object(f.jsx)(s.Stack.Item,{children:Object(f.jsx)(h.a,{id:e})})]}))}):null,o>0?Object(f.jsx)(s.Stack.Item,{children:Object(f.jsxs)(s.Stack,Object(i.a)(Object(i.a)({},x),{},{children:[Object(f.jsx)(s.Stack.Item,{children:Object(f.jsx)(g,{headline:"Past advisors",onClick:o>3?this.handleShowAllPastAdvisors:null})}),Object(f.jsx)(s.Stack.Item,{children:Object(f.jsx)(b.a,{id:e})})]}))}):null]})}),Object(f.jsxs)(s.Card,{spacing:"m",children:[Object(f.jsx)(s.Card.Header,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(j.a.Label,{children:"Advisors"}),r||!t||this.state.isEditMode?null:Object(f.jsx)(j.a.Action,{icon:"pencil",onClick:()=>this.setState({isEditMode:!0}),children:"Edit"})]})}),Object(f.jsx)(s.Card.Body,{children:a})]})}}y.displayName="ProfileAdvisors",t.a=Object(c.a)(Object(r.connect)(),Object(a.withQuery)(Object(a.gql)(O||(O=(e=>e)`query ProfileAdvisors($id: ID!) {
  account(id: $id) {
    id
    isSelf
    advisors {
      currentForTotalItems: current(first: 3) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      pastForTotalItems: past(first: 3) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileAdvisorsCurrent @embed
    ...ProfileAdvisorsPast @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s;const a=null!==(t=null==e||null===(n=e.advisors)||void 0===n||null===(i=n.currentForTotalItems)||void 0===i?void 0:i.pageInfo.totalItems)&&void 0!==t?t:0,c=null!==(o=null==e||null===(r=e.advisors)||void 0===r||null===(s=r.pastForTotalItems)||void 0===s?void 0:s.pageInfo.totalItems)&&void 0!==o?o:0;return{isSelf:e.isSelf,currentTotalItems:a,pastTotalItems:c}}}))(y)}).call(this,n(58)(e))},3393:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/432106870451229/images/profile/add-advisors.svg"},3394:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(2473),s=n(0);let a;t.a=Object(o.withQuery)(Object(o.gql)(a||(a=(e=>e)`query ProfileAdvisorsCurrent($id: ID!, $limit: Int = 3) {
  account(id: $id) {
    id
    advisors {
      current(first: $limit) {
        nodes {
          id
          ...ProfileAdvisorPersonListItem @embed
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
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{advisors:null!==(t=null==e||null===(n=e.advisors)||void 0===n||null===(i=n.current)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[]}}})(({advisors:e})=>Object(s.jsx)(i.Stack,{gutter:"s",children:e.map(({id:e})=>Object(s.jsx)(i.Stack.Item,{children:Object(s.jsx)(r.a,{id:e})},e))}))},3395:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(2473),s=n(0);let a;t.a=Object(o.withQuery)(Object(o.gql)(a||(a=(e=>e)`query ProfileAdvisorsPast($id: ID!, $limit: Int = 3) {
  account(id: $id) {
    id
    advisors {
      past(first: $limit) {
        nodes {
          id
          ...ProfileAdvisorPersonListItem @embed
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
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{advisors:null!==(t=null==e||null===(n=e.advisors)||void 0===n||null===(i=n.past)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[]}}})(({advisors:e})=>Object(s.jsx)(i.Stack,{gutter:"s",children:e.map(({id:e})=>Object(s.jsx)(i.Stack.Item,{children:Object(s.jsx)(r.a,{id:e})},e))}))},3397:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(12),r=n(1),s=n(5),a=n(7),c=n(6),l=n(11),d=n(15),u=n(27),p=n(20),h=n(3398),b=n(379),m=n(3493),j=n(0);let f;t.a=Object(a.a)(Object(o.connect)(),Object(s.withQuery)(Object(s.gql)(f||(f=(e=>e)`query ProfileBusinessCardEdit($accountId: ID!) {
  account(id: $accountId) {
    id
    fullName
    skills(limit: 60) {
      keyword {
        id
        name
        __typename
      }
      __typename
    }
    profile {
      blurb
      degree
      affiliation {
        position: positionNewNew {
          jobPosition {
            id
            position
            __typename
          }
          profilePosition
          __typename
        }
        institution {
          ... on Institution {
            id
            name
            __typename
          }
          name
          __typename
        }
        department: departmentNew {
          ... on Department {
            id
            name
            __typename
          }
          name
          __typename
        }
        __typename
      }
      businessCardSettings {
        isDegreeVisible
        isPositionVisible
        isInstitutionVisible
        isDepartmentVisible
        isBlurbVisible
        areSkillsVisible
        highlightedSkills {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileBusinessCardEditSkills @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a,c,l,d,u,p,h;const b=null==e?void 0:e.profile,m=null==b?void 0:b.affiliation,j=null==m?void 0:m.position,f=null==b?void 0:b.businessCardSettings,O=null!==(t=null==e||null===(n=e.skills)||void 0===n?void 0:n.filter(e=>!!e.keyword).map(({keyword:e})=>e))&&void 0!==t?t:[],g=null!==(i=null==b||null===(o=b.businessCardSettings)||void 0===o?void 0:o.highlightedSkills)&&void 0!==i?i:O.slice(0,3),x=null!==(r=null==j||null===(s=j.jobPosition)||void 0===s?void 0:s.position)&&void 0!==r?r:null==j?void 0:j.profilePosition,y=(e,t)=>"boolean"==typeof e&&t?e:t;return{fullName:null==e?void 0:e.fullName,initialValues:{blurb:null==b?void 0:b.blurb,degree:null!=b&&b.degree?[null==b?void 0:b.degree]:[],professionalInstitution:null==m||null===(a=m.institution)||void 0===a?void 0:a.name,professionalInstitutionId:null==m||null===(c=m.institution)||void 0===c?void 0:c.id,professionalDepartment:null==m||null===(l=m.department)||void 0===l?void 0:l.name,professionalDepartmentId:null==m||null===(d=m.department)||void 0===d?void 0:d.id,professionalPosition:x,professionalPositionId:null==j||null===(u=j.jobPosition)||void 0===u?void 0:u.id,isDegreeVisible:y(null==f?void 0:f.isDegreeVisible,!(null==b||!b.degree)),isPositionVisible:y(null==f?void 0:f.isPositionVisible,!!x),isInstitutionVisible:y(null==f?void 0:f.isInstitutionVisible,!(null==m||null===(p=m.institution)||void 0===p||!p.name)),isDepartmentVisible:y(null==f?void 0:f.isDepartmentVisible,!(null==m||null===(h=m.department)||void 0===h||!h.name)),isBlurbVisible:y(null==f?void 0:f.isBlurbVisible,!(null==b||!b.blurb)),areSkillsVisible:y(null==f?void 0:f.areSkillsVisible,0!==g.length),highlightedSkills:g}}}}),Object(c.r)({onSubmit:({accountId:t,context:i,mutate:o,dispatch:r,onAccept:s,initialValues:a})=>({values:c})=>{var u;return o(Object(h.a)({id:t,context:i,businessCardInput:{professionalPositionId:c.professionalPositionId,professionalPosition:c.professionalPosition,professionalInstitutionId:c.professionalInstitutionId,professionalInstitution:c.professionalInstitution,professionalDepartmentId:c.professionalDepartmentId,professionalDepartment:c.professionalDepartment,degree:c.degree[0],blurb:c.blurb,isDegreeVisible:c.isDegreeVisible,isPositionVisible:c.isPositionVisible,isInstitutionVisible:c.isInstitutionVisible,isDepartmentVisible:c.isDepartmentVisible,isBlurbVisible:c.isBlurbVisible,areSkillsVisible:c.areSkillsVisible,highlightedSkillKeywordIds:null===(u=c.highlightedSkills)||void 0===u?void 0:u.map(({id:e})=>e)}})).then(()=>{r(Object(l.pushAlert)(()=>Object(j.jsx)(b.c,{}))),s(),a.professionalInstitutionId===c.professionalInstitutionId&&a.professionalInstitution===c.professionalInstitution||null===c.professionalInstitution||setTimeout(()=>{r(Object(d.mountAsyncModal)("profile.AddNewEmailPromo.html",null,void 0,()=>n.e(585).then(n.bind(null,2603)),e.hot&&!1)).catch(e=>{e&&Object(p.default)(e)})},0)}).catch(e=>{r(Object(l.notifyAboutError)(e))})}}))(({accountId:e,fullName:t,allDegrees:n,initialValues:o,onSubmit:s,onCancel:a,context:c,dispatch:l})=>Object(j.jsxs)(r.Card,{spacing:"m",children:[Object(j.jsxs)(r.Card.Header,{children:[Object(j.jsx)(r.Text,Object(i.a)(Object(i.a)({size:"l",color:"grey-900",spacing:"xxs"},Object(u.a)("BusinessCardTitle")),{},{children:"Edit your business card"})),Object(j.jsx)(r.Text,{size:"s",color:"grey-600",children:"Your business card is a summary of your profile that gets displayed across ResearchGate. Keep it up to date so others can learn about you when they discover your card."})]}),Object(j.jsxs)(r.Card.Body,{children:[Object(j.jsx)(r.Text,{color:"grey-600",spacing:"s",children:"Any changes you make here will also be updated in your profile."}),Object(j.jsx)(r.Text,{size:"l",spacing:"m",children:Object(j.jsx)("b",{children:t})}),Object(j.jsx)(m.a,{accountId:e,form:"ProfileBusinessCardEdit",allDegrees:n,initialValues:o,onSubmit:s,onCancel:a,context:c,dispatch:l})]})]}))}).call(this,n(58)(e))},3398:function(e,t,n){"use strict";var i=n(5);let o,r=e=>e;t.a=({id:e,context:t,businessCardInput:n})=>({mutation:Object(i.gql)(o||(o=r`mutation UpdateBusinessCard($id: ID!, $context: String!, $businessCardInput: ProfileBusinessCardInput!) {
  updateBusinessCard(id: $id, context: $context, input: $businessCardInput) {
    id
    profile {
      blurb
      degree
      affiliation {
        positionNewNew {
          jobPosition {
            id
            position
            __typename
          }
          profilePosition
          __typename
        }
        institution {
          ... on Institution {
            id
            name
            url
            imageUrl
            __typename
          }
          name
          __typename
        }
        departmentNew {
          ... on Department {
            id
            name
            __typename
          }
          name
          __typename
        }
        __typename
      }
      businessCardSettings {
        isDegreeVisible
        isPositionVisible
        isInstitutionVisible
        isDepartmentVisible
        isBlurbVisible
        areSkillsVisible
        isHighlightedResearchVisible
        highlightedResearch {
          id
          __typename
        }
        highlightedSkills {
          id
          name
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
`)),variables:{id:e,context:t,businessCardInput:n},update:(t,{fieldKey:n})=>{var i,o,r,s,a,c,l,d,u;return{[n("account",{id:e})]:{profile:{affiliation:{department:null==t||null===(i=t.updateBusinessCard)||void 0===i||null===(o=i.profile)||void 0===o||null===(r=o.affiliation)||void 0===r?void 0:r.departmentNew,institution:null==t||null===(s=t.updateBusinessCard)||void 0===s||null===(a=s.profile)||void 0===a||null===(c=a.affiliation)||void 0===c?void 0:c.institution,position:null==t||null===(l=t.updateBusinessCard)||void 0===l||null===(d=l.profile)||void 0===d||null===(u=d.affiliation)||void 0===u?void 0:u.positionNewNew}}}}}})},3399:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(10),r=n(8),s=n.n(r),a=n(1),c=n(5),l=n(3400),d=n(3503),u=n(15),p=(n(5378),n(0));let h;const b=["skills","context","dispatch"],m=new s.a("profile-business-card-edit-skills"),j=e=>e.length>3?"You've already selected 3 skills. To display different skills on your card, first deselect one or more.":void 0,f=t=>{let{skills:r,context:s,dispatch:c}=t,h=Object(o.a)(t,b);const f=t=>{t.preventDefault(),c(Object(u.mountAsyncModal)("profile.ProfileSkillsEditModal.html",{context:s},void 0,()=>n.e(599).then(n.bind(null,786)),e.hot&&!1))},O=e=>t=>{const n=[];for(const e of r)t.includes(e.keyword.name)&&n.push(e.keyword);e(n),h.onChange(0!==n.length)};return 0===r.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.Text,{spacing:"xs",children:Object(p.jsx)("b",{children:"Skills"})}),Object(p.jsx)(a.Text,{color:"grey-600",spacing:"xs",children:"You haven't added any skills yet. Add your skills to display them on your profile and business card."}),Object(p.jsxs)(a.Button,{onClick:f,type:"button",color:"blue",theme:"bare",children:[Object(p.jsx)(a.Button.Icon,{identifier:"plus-circle"}),Object(p.jsx)(a.Button.Label,{children:"Add new skills"})]})]}):Object(p.jsx)(l.a,{name:"highlightedSkills",label:"Skills",validate:j,children:({id:e,onChange:t,selections:n=[]})=>Object(p.jsxs)(a.Stack,{gutter:"s",children:[Object(p.jsx)(a.Stack.Item,{children:Object(p.jsx)(a.Text,{color:"grey-600",children:"Choose up to 3 skills to showcase on your business card. Click on a skill to add or remove it from your card."})}),Object(p.jsx)(a.Stack.Item,{children:Object(p.jsx)("div",Object(i.a)(Object(i.a)({},m("tag-group")),{},{children:Object(p.jsx)(d.a,{id:e,items:r.map(({keyword:e})=>e.name),selections:n.filter(({id:e})=>r.some(({keyword:t})=>t.id===e)).map(({name:e})=>e),onChange:O(t),maxNumberOfSelections:3})}))}),Object(p.jsx)(a.Stack.Item,{children:Object(p.jsx)(a.Text,{color:"grey-600",children:"You can also add new skills to your business card and profile"})}),Object(p.jsx)(a.Stack.Item,{children:Object(p.jsxs)(a.Button,{onClick:f,type:"button",color:"blue",theme:"bare",children:[Object(p.jsx)(a.Button.Icon,{identifier:"plus-circle"}),Object(p.jsx)(a.Button.Label,{children:"Add new skills"})]})})]})})};f.defaultProps={onChange:()=>{}},t.a=Object(c.withQuery)(Object(c.gql)(h||(h=(e=>e)`query ProfileBusinessCardEditSkills($accountId: ID!) {
  account(id: $accountId) {
    id
    skills(limit: 60) {
      keyword {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{skills:(null!==(t=null==e?void 0:e.skills)&&void 0!==t?t:[]).filter(e=>!!e.keyword)}}})(f)}).call(this,n(58)(e))},3400:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(686),s=n(1),a=n(0);const c=["input","helpMessage","helpLabel","errorReporting","label","children","meta"],l=e=>{let{input:t,helpMessage:n,helpLabel:r,errorReporting:l,label:d,children:u,meta:{touched:p,error:h,invalid:b}}=e,m=Object(o.a)(e,c),j=0;const f=t.name+(j++>1?"_"+(j-1):"");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s.Label,{status:p&&b?"invalid":"",errorMessage:h,errorReporting:l,helpMessage:n,helpLabel:r,htmlFor:f,children:d}),u(Object(i.a)(Object(i.a)(Object(i.a)({},t),m),{},{id:f,selections:t.value}))]})};t.a=e=>Object(a.jsx)(r.a,Object(i.a)(Object(i.a)({},e),{},{component:l}))},3401:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(1),r=n(5),s=n(161),a=n(574),c=n(3402),l=n(3403),d=n(3404),u=n(3405),p=n(3406),h=n(3407),b=n(0);let m;t.a=Object(r.withQuery)(Object(r.gql)(m||(m=(e=>e)`query ProfileAboutMe($accountId: ID!) {
  account(id: $accountId) {
    id
    firstName
    profile {
      hasPermissionToEdit
      __typename
    }
    isSelf
    ...ProfileAboutMeIntroduction @embed
    ...ProfileAboutMeDisciplines @embed
    ...ProfileAboutMeSkills @embed
    ...ProfileAboutMeLanguages @embed
    ...ProfileAboutMeContactInformation @embed
    ...ProfileAboutMeActivity @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{firstName:e,isSelf:t,profile:{hasPermissionToEdit:n}}})=>({firstName:e,isSelf:t,hasPermissionToEdit:n})})(({accountId:t,context:r,hasPermissionToEdit:m,firstName:j,isSelf:f})=>{const[O,g]=Object(i.useState)(!1),x=()=>g(!0);return Object(b.jsxs)(o.Card,{spacing:"m",children:[Object(b.jsx)(o.Card.Header,{spacing:"m",children:Object(b.jsxs)(a.a,{children:[Object(b.jsx)(a.a.Label,{children:f?"About me":"About "+j}),m&&!O&&Object(b.jsx)(a.a.Action,{icon:"pencil",onClick:x,children:"Edit"})]})}),Object(b.jsx)(o.Card.Body,{spacing:"m",children:O?Object(b.jsx)(s.a,{src:"modules/profile/components/profileAboutMe/ProfileAboutMeForm",accountId:t,context:r,onFinish:()=>g(!1),resolveComponentInternalDoNotSetOrYouWillBeFired:()=>n.e(614).then(n.bind(null,6070)),hmrAccept:e.hot&&!1}):Object(b.jsxs)(o.Stack,{gutter:"s",children:[Object(b.jsx)(u.a,{accountId:t,onEdit:x}),Object(b.jsx)(d.a,{accountId:t,onEdit:x}),Object(b.jsx)(h.a,{accountId:t,onEdit:x}),Object(b.jsx)(p.a,{accountId:t,onEdit:x}),Object(b.jsx)(l.a,{accountId:t,onEdit:x}),Object(b.jsx)(c.a,{accountId:t})]})})]})})}).call(this,n(58)(e))},3402:function(e,t,n){"use strict";var i=n(16),o=n.n(i),r=n(1),s=n(5),a=n(1424),c=n(0);let l;t.a=Object(s.withQuery)(Object(s.gql)(l||(l=(e=>e)`query ProfileAboutMeActivity($accountId: ID!) {
  account(id: $accountId) {
    id
    researchItems {
      pageInfo {
        totalItems
        __typename
      }
      __typename
    }
    projectCount
    authoredQuestionPostCount
    authoredAnswerPostCount
    isProjectUIRemovalEnabled: isFeatureFlagActive(featureName: "removeProjectUI")
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{researchItems:e,projectCount:t,authoredQuestionPostCount:n,authoredAnswerPostCount:i,isProjectUIRemovalEnabled:o}})=>{var r;return{projectCount:t,researchItemCount:(null==e||null===(r=e.pageInfo)||void 0===r?void 0:r.totalItems)||0,questionCount:n,answerCount:i,isProjectUIRemovalEnabled:o}}})(({projectCount:e,researchItemCount:t,questionCount:n,answerCount:i,isProjectUIRemovalEnabled:s})=>Object(c.jsxs)(r.Stack.Item,{children:[Object(c.jsx)(a.a,{children:"Activity on ResearchGate"}),Object(c.jsxs)(r.List,{type:"inline",spacing:"xxs",children:[Object(c.jsxs)(r.List.Item,{children:[t," ",o()("Research Item",t)]}),!s&&Object(c.jsxs)(r.List.Item,{children:[e," ",o()("Project",e)]}),Object(c.jsxs)(r.List.Item,{children:[n," ",o()("Question",n)]}),Object(c.jsxs)(r.List.Item,{children:[i," ",o()("Answer",i)]})]})]}))},3403:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(220),s=n(559),a=n(1424),c=n(0);let l;t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query ProfileAboutMeContactInformation($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      hasPermissionToEdit
      twitter
      professionalEmail
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{hasPermissionToEdit:e,professionalEmail:t,twitter:n}}})=>({hasPermissionToEdit:e,professionalEmail:t,twitter:n})})(({onEdit:e,hasPermissionToEdit:t,professionalEmail:n,twitter:o})=>n||o||t?Object(c.jsxs)(i.Stack.Item,{children:[Object(c.jsx)(a.a,{children:"Contact information"}),n||o?Object(c.jsxs)(i.List,{type:"inline",spacing:"none",children:[n&&Object(c.jsx)(i.List.Item,{children:n}),o&&Object(c.jsx)(i.List.Item,{children:Object(c.jsx)(r.b,{href:o,forcePage:!0,rel:"noopener",target:"_blank",color:"blue",theme:"silent",children:"Twitter"})})]}):Object(c.jsx)(s.c,{headline:"Add your contact information",ariaLabel:"Add your contact information",note:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.Text,{spacing:"xs",children:"Include your email address and Twitter profile URL or username so your connections can contact you and track your updates."}),Object(c.jsxs)(i.Text,{children:[Object(c.jsx)("strong",{children:"Note:"})," Your email address and Twitter profile URL or username will only be visible to your mutual followers."," "]})]}),size:"m",onClick:e})]}):null)},3404:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(559),s=n(1985),a=n(1424),c=n(0);let l;t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query ProfileAboutMeDisciplines($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      hasPermissionToEdit
      __typename
    }
    sciences {
      id
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{hasPermissionToEdit:e},sciences:t}})=>({hasPermissionToEdit:e,disciplines:t})})(({onEdit:e,hasPermissionToEdit:t,disciplines:n})=>null!=n&&n.length||t?Object(c.jsxs)(i.Stack.Item,{children:[Object(c.jsx)(a.a,{children:"Disciplines"}),null!=n&&n.length?Object(c.jsx)(s.a,{items:n}):Object(c.jsx)(r.c,{headline:"Add your disciplines",ariaLabel:"Add your disciplines",note:"Let others know which disciplines are relevant to your research.",size:"m",onClick:e})]}):null)},3405:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(559),s=n(1424),a=n(0);let c;t.a=Object(o.withQuery)(Object(o.gql)(c||(c=(e=>e)`query ProfileAboutMeIntroduction($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      aboutMe
      hasPermissionToEdit
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{aboutMe:e,hasPermissionToEdit:t}}})=>({hasPermissionToEdit:t,aboutMe:e})})(({onEdit:e,hasPermissionToEdit:t,aboutMe:n})=>n||t?Object(a.jsxs)(i.Stack.Item,{children:[Object(a.jsx)(s.a,{children:"Introduction"}),n?Object(a.jsx)(i.Text,{color:"grey-900",children:n}):Object(a.jsx)(r.c,{headline:"Introduce your research",ariaLabel:"Introduce your research",note:"Add an introduction with your research focus and interests to help others understand your work.",size:"m",onClick:e})]}):null)},3406:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(559),s=n(1985),a=n(1424),c=n(0);let l;t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query ProfileAboutMeLanguages($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      hasPermissionToEdit
      __typename
    }
    languages {
      id
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{hasPermissionToEdit:e},languages:t}})=>({hasPermissionToEdit:e,languages:t})})(({onEdit:e,hasPermissionToEdit:t,languages:n})=>null!=n&&n.length||t?Object(c.jsxs)(i.Stack.Item,{children:[Object(c.jsx)(a.a,{children:"Languages"}),null!=n&&n.length?Object(c.jsx)(s.a,{items:n}):Object(c.jsx)(r.c,{headline:"Add your languages",ariaLabel:"Add your languages",note:"Make it easier for people to contact you by listing the languages you speak.",size:"m",onClick:e})]}):null)},3407:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(559),s=n(1985),a=n(1424),c=n(0);let l;t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query ProfileAboutMeSkills($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      hasPermissionToEdit
      __typename
    }
    skillsNewNew {
      keyword {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{hasPermissionToEdit:e},skillsNewNew:t}})=>({hasPermissionToEdit:e,skills:null==t?void 0:t.filter(({keyword:e})=>e).map(({keyword:{id:e,name:t}})=>({id:e,name:t}))})})(({onEdit:e,hasPermissionToEdit:t,skills:n})=>null!=n&&n.length||t?Object(c.jsxs)(i.Stack.Item,{children:[Object(c.jsx)(a.a,{children:"Skills and expertise"}),null!=n&&n.length?Object(c.jsx)(s.a,{items:n}):Object(c.jsx)(r.c,{headline:"Add your skills and expertise",ariaLabel:"Add your skills and expertise",note:"Add the skills and research areas that are related to your work (this helps us show you the latest research in your field).",size:"m",onClick:e})]}):null)},3408:function(e,t,n){"use strict";(function(e){var i=n(1),o=n(5),r=n(15),s=n(3409),a=n(3410),c=n(3411),l=n(3412),d=n(0);let u;t.a=Object(o.withQuery)(Object(o.gql)(u||(u=(e=>e)`query ProfileLabBox($accountId: ID!) {
  account(id: $accountId) {
    id
    isSelf
    lab {
      id
      name
      url
      isMember
      __typename
    }
    ...ProfileLabMembers @embed
    ...ProfileLabLead @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{lab:e,isSelf:t}})=>({labId:null==e?void 0:e.id,isSelf:t,isLabMember:!!e,name:null==e?void 0:e.name,labUrl:null==e?void 0:e.url})})(({accountId:t,isSelf:o,labId:u,isLabMember:p,name:h,labUrl:b,context:m,dispatch:j})=>p||o?Object(d.jsxs)(i.Card,{spacing:"m",children:[Object(d.jsx)(i.Card.Header,{children:Object(d.jsx)(i.Text,{color:"grey-500",size:"l",children:"Lab"})}),p&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.Card.Body,{children:Object(d.jsxs)(i.Stack,{gutter:"xs",children:[Object(d.jsx)(i.Stack.Item,{children:Object(d.jsx)(i.Link,{href:b,theme:"bare",children:Object(d.jsx)(i.Text,{size:"l",children:Object(d.jsx)("b",{children:h})})})}),Object(d.jsx)(i.Stack.Item,{children:Object(d.jsx)(c.a,{accountId:t,context:m})}),Object(d.jsx)(i.Stack.Item,{children:Object(d.jsx)(l.a,{accountId:t,context:m})})]})}),Object(d.jsx)(i.Card.Footer,{align:"center",children:Object(d.jsx)(i.Button,{onClick:()=>j(Object(r.mountAsyncModal)("labs.LabMembersModal.html",{labId:u},void 0,()=>n.e(552).then(n.bind(null,3558)),e.hot&&!1)),theme:"bare",color:"grey",children:Object(d.jsx)(i.Button.Label,{children:"View all"})})})]}),!p&&o&&Object(d.jsx)(i.Card.Body,{children:Object(d.jsx)(a.a,{headline:"Add your lab",imageSrc:s.a,note:"Show others what your lab is working on and who you're working with.",tooltip:"A lab is a group of scientists, led by a senior researcher, who conduct experiments and research together on a specific topic.",href:"/labs/create?ec=profileOwn"})})]}):null)}).call(this,n(58)(e))},3409:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/436787852671253/images/labs/icons/add-lab.svg"},3410:function(e,t,n){"use strict";var i=n(2),o=n(8),r=n.n(o),s=n(1),a=(n(1211),n(0));const c=new r.a("empty-state-action-required");t.a=({imageSrc:e,headline:t,note:n,href:o,tooltip:r})=>Object(a.jsx)(s.Link,Object(i.a)(Object(i.a)({},c()),{},{theme:"silent",href:o,children:Object(a.jsxs)(s.Flex,{direction:"column",alignItems:"center",gutter:"xs",children:[Object(a.jsx)(s.Flex.Item,{children:Object(a.jsx)("img",{src:e})}),t&&Object(a.jsx)(s.Flex.Item,{children:Object(a.jsxs)(s.Text,{color:"grey-800",size:"l",spacing:n?"xxs":"none",children:[Object(a.jsx)("strong",Object(i.a)(Object(i.a)({},c("headline")),{},{children:t})),Object(a.jsx)("div",Object(i.a)(Object(i.a)({},c("tooltip")),{},{children:Object(a.jsx)(s.Tooltip,{color:"black",mount:"div",spacing:"s",target:Object(a.jsx)(s.Icon,{identifier:"info-circle"}),children:r})}))]})}),n&&Object(a.jsx)(s.Text,{color:"grey-600",size:"m",children:n})]})}))},3411:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(2507),s=n(2508),a=n(2509),c=n(0);let l;t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query ProfileLabLead($accountId: ID!) {
  account(id: $accountId) {
    id
    lab {
      id
      labLead {
        id
        personName {
          id
          fullName
          imageUrl
          __typename
        }
        account {
          id
          ...AccountPersonListItemImageLink @embed
          ...AccountPersonListItemFullNameLink @embed
          ...AccountPersonListItemMetaItems @embed
          ...AccountFollowAction @embed
          __typename
        }
        author {
          id
          fullName
          imageUrl
          url
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
`)),{mapDataToProps:({account:{lab:e}})=>({labLead:null==e?void 0:e.labLead})})(({labLead:e,context:t})=>Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.Text,{color:"grey-600",size:"s",spacing:"s",children:Object(c.jsx)("strong",{children:"Head"})}),e.account&&Object(c.jsx)(r.a,{id:e.account.id,context:t}),e.author&&Object(c.jsx)(s.a,{url:e.author.id,fullName:e.author.fullName,imageUrl:e.author.imageUrl}),e.personName&&Object(c.jsx)(a.a,{fullName:e.personName.fullName,imageUrl:e.personName.imageUrl})]}))},3412:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(2507),s=n(2508),a=n(2509),c=n(0);let l;t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query ProfileLabMembers($accountId: ID!) {
  account(id: $accountId) {
    id
    lab {
      id
      labMemberCount
      members {
        id
        role
        personName {
          id
          fullName
          imageUrl
          __typename
        }
        account {
          id
          ...AccountPersonListItemImageLink @embed
          ...AccountPersonListItemFullNameLink @embed
          ...AccountPersonListItemMetaItems @embed
          ...AccountFollowAction @embed
          __typename
        }
        author {
          id
          fullName
          imageUrl
          url
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
`)),{mapDataToProps:({account:{lab:e}})=>({labMemberCount:(null==e?void 0:e.labMemberCount)-1,members:null==e?void 0:e.members.filter(e=>"lead"!==e.role).slice(0,6)})})(({labMemberCount:e,members:t,context:n})=>Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.Text,{color:"grey-600",size:"s",spacing:"s",children:Object(c.jsxs)("strong",{children:["Members (",e,")"]})}),Object(c.jsx)(i.Stack,{gutter:"xs",children:t.map(e=>e.account?Object(c.jsx)(i.Stack.Item,{children:Object(c.jsx)(r.a,{id:e.account.id,context:n})},e.id):e.author?Object(c.jsx)(i.Stack.Item,{children:Object(c.jsx)(s.a,{url:e.author.url,fullName:e.author.fullName,imageUrl:e.author.imageUrl})},e.author.id):e.personName?Object(c.jsx)(i.Stack.Item,{children:Object(c.jsx)(a.a,{fullName:e.personName.fullName,imageUrl:e.personName.imageUrl})},e.personName.id):null)})]}))},3413:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(192),r=n(4),s=n(1),a=n(5),c=n(71),l=n(7),d=n(6),u=n(1361),p=n(0);let h;class b extends r.Component{constructor(...e){super(...e),this.renderItems=(e,t)=>{const{showDivider:n,gutter:i}=this.props;return Object(p.jsx)("div",{ref:t,children:Object(p.jsx)(s.Stack,{gutter:i,showDivider:n,children:e})})},this.renderItem=e=>{const{followedAccounts:t,context:n,followActionRenderer:i,isInModal:o}=this.props,{id:r}=t[e];return Object(p.jsx)(s.Stack.Item,{children:Object(p.jsx)(u.a,{id:r,context:n,followActionRenderer:i,isInModal:o})},r)},this.loadMore=()=>{const{loadMore:e,isPaginationEnabled:t}=this.props;t&&e()}}componentDidMount(){this.props.setFollowedAccountKeysShown&&this.props.setFollowedAccountKeysShown(this.props.followedAccounts.map(e=>e.id))}render(){const{followedAccounts:e,queryStatus:t,isPaginationEnabled:n,hasMoreData:i,gutter:r}=this.props;return Object(p.jsxs)(s.Stack,{gutter:r,children:[Object(p.jsx)(s.Stack.Item,{children:Object(p.jsx)(o.default,{awaitMore:n&&i,itemsRenderer:this.renderItems,itemCount:e.length,onIntersection:this.loadMore,children:this.renderItem})}),Object(p.jsx)(s.Stack.Item,{children:"loading"===t&&Object(p.jsx)(c.b,{})})]})}}b.displayName="ProfileFollowedAccountsList",b.defaultProps={gutter:"m",showDivider:!0,isInModal:!1};const m=Object(a.gql)(h||(h=(e=>e)`query ProfileFollowedAccountsList($id: ID!, $offset: Int = 0, $limit: Int = 10, $sorting: String) {
  account(id: $id) {
    id
    followedAccountsCount
    followedAccounts(limit: $limit, offset: $offset, sorting: $sorting) {
      id
      ...FollowPersonListItem @embed
      __typename
    }
    __typename
  }
  __typename
}
`));t.default=Object(l.a)(Object(d.b)(),Object(a.withPagination)(m,{mapDataToProps:function({account:e}){return Object(i.a)({},e)},hasMoreData:function({account:e},{offset:t,limit:n}){return e.followedAccountsCount>=t+n}}))(b)},3414:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(192),r=n(4),s=n(1),a=n(5),c=n(71),l=n(7),d=n(6),u=n(1361),p=n(0);let h;class b extends r.Component{constructor(...e){super(...e),this.renderItems=(e,t)=>{const{showDivider:n,gutter:i}=this.props;return Object(p.jsx)("div",{ref:t,children:Object(p.jsx)(s.Stack,{gutter:i,showDivider:n,children:e})})},this.renderItem=e=>{const{followingAccounts:t,context:n,followActionRenderer:i,isInModal:o}=this.props,{id:r}=t[e];return Object(p.jsx)(s.Stack.Item,{children:Object(p.jsx)(u.a,{id:r,context:n,followActionRenderer:i,isInModal:o})},r)},this.loadMore=()=>{const{loadMore:e,isPaginationEnabled:t}=this.props;t&&e()}}componentDidMount(){this.props.setFollowingAccountKeysShown&&this.props.setFollowingAccountKeysShown(this.props.followingAccounts.map(e=>e.id))}render(){const{followingAccounts:e,queryStatus:t,isPaginationEnabled:n,hasMoreData:i,gutter:r}=this.props;return Object(p.jsxs)(s.Stack,{gutter:r,children:[Object(p.jsx)(s.Stack.Item,{children:Object(p.jsx)(o.default,{awaitMore:n&&i,itemsRenderer:this.renderItems,itemCount:e.length,onIntersection:this.loadMore,children:this.renderItem})}),Object(p.jsx)(s.Stack.Item,{children:"loading"===t&&Object(p.jsx)(c.b,{})})]})}}b.displayName="ProfileFollowingAccountsList",b.defaultProps={gutter:"m",showDivider:!0,excludedAccountKeys:[],isInModal:!1};const m=Object(a.gql)(h||(h=(e=>e)`query ProfileFollowingAccountsList($id: ID!, $offset: Int = 0, $limit: Int = 10, $sorting: String) {
  account(id: $id) {
    id
    followingAccountsCount
    followingAccounts(limit: $limit, offset: $offset, sorting: $sorting) {
      id
      ...FollowPersonListItem @embed
      __typename
    }
    __typename
  }
  __typename
}
`));t.default=Object(l.a)(Object(d.b)(),Object(a.withPagination)(m,{mapDataToProps:function({account:e}){return Object(i.a)({},e)},hasMoreData:function({account:e},{offset:t,limit:n}){return e.followingAccountsCount>=t+n}}),Object(d.u)(({followingAccounts:e,excludedAccountKeys:t,clientSideLimit:n})=>{if(n){const i=e.filter(e=>-1===t.indexOf(e.id)).slice(0,n);e=i.length===n?i:e.slice(0,n)}return{followingAccounts:e}}))(b)},3477:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n.n(o),s=n(8),a=n.n(s),c=n(1),l=n(5),d=n(80),u=n(7),p=n(6),h=n(211),b=n(15),m=n(975),j=n(974),f=n(29),O=n(14),g=n(879),x=n(286),y=n(0);let v;const I=Object(p.h)(c.PersonListItem.Action)(({children:e})=>e);var _=Object(u.a)(Object(l.withQuery)(Object(l.gql)(v||(v=(e=>e)`query NetworkRecommendationPersonListItemAccount($accountId: ID!) {
  account(id: $accountId) {
    id
    ...AccountPersonListItemFullNameLink @embed
    ...AccountPersonListItemImageLink @embed
    ...AccountPersonListItemMetaItems @embed
    ...AccountFollowAction @embed
    __typename
  }
  __typename
}
`))))(({accountId:e,context:t,isInModal:n,milestones:i})=>{const o=Object(O.b)(null==i?void 0:i.viewProfile);return Object(y.jsxs)(c.PersonListItem,{size:"s",children:[Object(y.jsx)(x.e,{id:e,context:t,isInModal:n,params:o}),Object(y.jsx)(x.c,{id:e,context:t,isInModal:n,params:o}),Object(y.jsx)(x.f,{id:e,shouldDisplayScore:!1}),Object(y.jsx)(c.PersonListItem.Actions,{children:Object(y.jsx)(I,{children:Object(y.jsx)(g.b,{id:e,context:t,children:({label:e,hasPermissionToFollow:t,follow:n,unfollow:o,isFollowing:r})=>t?Object(y.jsx)(c.Button,{type:"button",onClick:()=>{r?o().then(()=>Object(O.a)(null==i?void 0:i.unfollow)):n().then(()=>Object(O.a)(null==i?void 0:i.follow))},theme:"bare",size:"s",color:"blue",children:e}):null})})})]})});var w=({header:e,hasMore:t,context:n,items:i,onViewAll:r,milestones:s})=>(Object(o.useEffect)(()=>{Object(f.l)(null==s?void 0:s.hasRecommendations)},[]),Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsx)(c.Text,{size:"l",color:"grey-600",children:e})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(c.Stack,{children:i.map(({id:e})=>Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(_,{accountId:e,context:n,milestones:s})},e))})}),t&&Object(y.jsx)(c.Card.Footer,{align:"center",children:Object(y.jsx)(c.Button,{theme:"bare",color:"grey",size:"m",onClick:()=>{r().then(()=>Object(f.l)(null==s?void 0:s.viewAll))},children:"View all"})})]})),S=n(192),P=n(213),C=n(210);n(5375);const k=new a.a({name:"network-recommendations-modal"});var A=Object(u.a)(C.a)(({isOpen:e,onRequestClose:t,header:n,items:o,context:r,hasMore:s,loadMore:a,queryStatus:d,subtitle:u})=>Object(y.jsx)(c.Modal,{isOpen:e,onRequestClose:t,children:Object(y.jsxs)(c.Modal.Body,{children:[Object(y.jsx)(c.Heading,{size:"xl",spacing:u?"xxs":"m",children:n}),u&&Object(y.jsx)(c.Text,{spacing:"s",children:u}),Object(y.jsx)("div",Object(i.a)(Object(i.a)({},k("content")),{},{children:Object(y.jsx)(S.default,{awaitMore:s,itemsRenderer:(e,t)=>Object(y.jsx)(c.Stack,{ref:t,showDivider:!0,gutter:"xl",children:e}),items:o,onIntersection:()=>d!==l.QueryStatus.LOADING&&a(),children:e=>{const{id:t}=o[e];return Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(_,{accountId:t,context:r,isInModal:!0})},t)}})})),d===l.QueryStatus.LOADING&&Object(y.jsx)(P.a,{})]})})),D=n(12),E=n(313);let T;const F=Object(l.gql)(T||(T=(e=>e)`query PeopleYouMightKnowModal($accountId: ID!, $after: Int = 0, $first: Int = 20, $ignoredAccountIds: [ID] = []) {
  account(id: $accountId) {
    id
    accountFollowSuggestionsModal: accountFollowSuggestions {
      peopleYouMightKnow(after: $after, first: $first, ignoredAccountIds: $ignoredAccountIds) {
        nodes {
          account {
            id
            ...NetworkRecommendationPersonListItemAccount @embed
            __typename
          }
          __typename
        }
        pageInfo {
          hasNextPage
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
`)),M=({account:{accountFollowSuggestionsModal:{peopleYouMightKnow:e}}})=>{var t,n,i;return{items:null==e||null===(t=e.nodes)||void 0===t?void 0:t.map(e=>e.account),ignoredAccountIds:null==e||null===(n=e.nodes)||void 0===n?void 0:n.map(e=>e.account.id),hasMore:null==e||null===(i=e.pageInfo)||void 0===i?void 0:i.hasNextPage}};var R=Object(u.a)(Object(E.withRigel)(),Object(l.withQuery)(F,{mapDataToProps:e=>{const t=M(e);return{initialItems:t.items,initialIgnoredAccountIds:t.ignoredAccountIds,initialHasMore:t.hasMore}},preloader:P.a}))(({accountId:e,isOpen:t,rigel:n,initialHasMore:i,initialItems:r,initialIgnoredAccountIds:s,queryStatus:a,context:c})=>{const[l,d]=Object(o.useState)(r),[u,p]=Object(o.useState)(20),[h,b]=Object(o.useState)(!1),[m,j]=Object(o.useState)(i),[f,O]=Object(o.useState)(s),g=n.bindQuery(F,({data:e})=>{const t=M(e);d(l.concat(t.items)),j(t.hasMore),p(u+20),O(f.concat(t.ignoredAccountIds)),b(!1)},{accountId:e,after:u,first:20,ignoredAccountIds:f});return Object(y.jsx)(A,{isOpen:t,header:"People you might know",hasMore:m,items:l,queryStatus:a,loadMore:()=>{!h&&m&&(b(!0),g.update({accountId:e,after:u,first:20,ignoredAccountIds:f}))},context:c})});let N;var L=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(N||(N=(e=>e)`query PeopleYouMightKnow($accountId: ID!) {
  account(id: $accountId) {
    id
    accountFollowSuggestions {
      peopleYouMightKnow(first: 3) {
        nodes {
          account {
            id
            ...NetworkRecommendationPersonListItemAccount @embed
            __typename
          }
          __typename
        }
        pageInfo {
          hasNextPage
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
`)),{mapDataToProps:({account:{accountFollowSuggestions:{peopleYouMightKnow:e}}})=>{var t;const n=null==e?void 0:e.nodes;return{items:null==n?void 0:n.map(e=>e.account),hasMore:null==e||null===(t=e.pageInfo)||void 0===t?void 0:t.hasNextPage,hasItems:(null==n?void 0:n.length)>0}}}))(({accountId:e,context:t,dispatch:n,items:i,hasMore:o})=>(null==i?void 0:i.length)>0&&Object(y.jsx)(w,{header:"People you might know",accountId:e,context:t,hasMore:o,items:i,onViewAll:()=>n(Object(b.mountModal)(()=>Object(y.jsx)(R,{accountId:e,context:t,isOpen:!0})))}));let B;var q=Object(u.a)(Object(l.withConnection)(Object(l.gql)(B||(B=(e=>e)`query SharedConnectionsModal($accountId: ID!, $after: Int = 0, $first: Int = 10) {
  account(id: $accountId) {
    id
    ProfileSharedConnectionsModal: sharedConnections(after: $after, first: $first) @connection(key: "sharedConnectionsViewMore") {
      nodes {
        id
        ...NetworkRecommendationPersonListItemAccount @embed
        __typename
      }
      pageInfo {
        totalItems
        hasNextPage
        endCursor
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{ProfileSharedConnectionsModal:{nodes:e,pageInfo:{hasNextPage:t,totalItems:n}}}})=>({items:e,hasMore:t,totalItems:n}),preloader:P.a}))(({isOpen:e,totalItems:t,hasMore:n,items:i,queryStatus:o,loadMore:r,context:s})=>Object(y.jsx)(A,{isOpen:e,header:`Shared connections (${t})`,hasMore:n,items:i,queryStatus:o,loadMore:r,context:s}));let U;var $=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(U||(U=(e=>e)`query SharedConnections($accountId: ID!) {
  account(id: $accountId) {
    id
    sharedConnections(first: 3) {
      nodes {
        id
        ...NetworkRecommendationPersonListItemAccount @embed
        __typename
      }
      pageInfo {
        totalItems
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{sharedConnections:{nodes:e,pageInfo:{totalItems:t}}}})=>({items:e,totalItems:t})}))(({accountId:e,context:t,dispatch:n,items:i,totalItems:o,milestones:r})=>Object(y.jsx)(w,{header:`Shared connections (${o})`,accountId:e,context:t,hasMore:o>3,items:i,milestones:r,onViewAll:()=>n(Object(b.mountModal)(()=>Object(y.jsx)(q,{accountId:e,context:t,isOpen:!0})))}));let V;var z=Object(u.a)(Object(l.withConnection)(Object(l.gql)(V||(V=(e=>e)`query PeopleWhoCitedMeModal($accountId: ID!, $after: Int = 0, $first: Int = 10) {
  account(id: $accountId) {
    id
    isSelf
    PeopleWhoCitedMeModal: accountNetworkRecommendations {
      citingMe(after: $after, first: $first) @connection(key: "peopleWhoCitedMeViewMore") {
        nodes {
          id
          ...NetworkRecommendationPersonListItemAccount @embed
          __typename
        }
        pageInfo {
          totalItems
          hasNextPage
          endCursor
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
`)),{mapDataToProps:({account:{isSelf:e,PeopleWhoCitedMeModal:{citingMe:{nodes:t,pageInfo:{totalItems:n,hasNextPage:i}}}}})=>({items:t,hasMore:i,totalItems:n,isSelf:e}),preloader:P.a}))(({isOpen:e,hasMore:t,items:n,queryStatus:i,loadMore:o,context:r,isSelf:s})=>Object(y.jsx)(A,{isOpen:e,header:s?"Cited you":"Cited this researcher ",hasMore:t,items:n,queryStatus:i,loadMore:o,context:r,subtitle:s?"This list shows the ResearchGate members with the most citations of your work.":"This list shows the ResearchGate members with the most citations of this researcher's work."}));let G;var Q=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(G||(G=(e=>e)`query PeopleWhoCitedMe($accountId: ID!) {
  account(id: $accountId) {
    id
    isSelf
    accountNetworkRecommendations {
      citingMe(first: 3) {
        nodes {
          id
          ...NetworkRecommendationPersonListItemAccount @embed
          __typename
        }
        pageInfo {
          totalItems
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
`)),{mapDataToProps:({account:{isSelf:e,accountNetworkRecommendations:t}})=>{var n,i,o;return{totalItems:(null==t||null===(n=t.citingMe)||void 0===n||null===(i=n.pageInfo)||void 0===i?void 0:i.totalItems)||0,items:null==t||null===(o=t.citingMe)||void 0===o?void 0:o.nodes,isSelf:e}}}))(({accountId:e,context:t,dispatch:n,items:i,totalItems:o,isSelf:r})=>o>0?Object(y.jsx)(w,{header:r?"Cited you":"Cited this researcher ",accountId:e,context:t,hasMore:o>3,items:i,onViewAll:()=>n(Object(b.mountModal)(()=>Object(y.jsx)(z,{accountId:e,context:t,isOpen:!0})))}):null),H=n(535),W=n(276),Y=IMAGES_STATIC_URL+"m/436433082151325/images/profile/add-academic.svg",K=n(559),J=(n(938),n(11));let X,Z=e=>e;var ee=n(379),te=n(10),ne=n(884),ie=n(714),oe=n(713),re=n(64),se=n(17);const ae=({submitting:e})=>e?"busy":null;var ce=({handleSubmit:e,doSubmit:t,submitting:n,onReject:i})=>Object(y.jsx)("form",{onSubmit:e(t),children:Object(y.jsxs)(c.Stack,{children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.FormGroup,{children:Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsxs)(c.FormGroup,{layout:"pack",children:[Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.InputFormField,{name:"scientificSocietyMemberships",label:"Scientific societies",children:Object(y.jsx)(c.Input,{placeholder:"Enter name of scientific society"})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.InputFormField,{name:"orcid",label:"ORCID iD",children:Object(y.jsx)(c.Input,{placeholder:"Enter your ORCID iD"})})})]})})})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Flex,{justifyContent:"flex-end",children:Object(y.jsx)(c.Flex.Item,{children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsx)(c.Button,{type:"button",onClick:i,theme:"bare",children:"Cancel"}),Object(y.jsx)(c.Button,{type:"submit",status:ae({submitting:n}),children:"Save"})]})})})})]})});const le=["form"],de=Object(ne.a)({validate:Object(re.createValidator)({scientificSocietyMemberships:{length:{maximum:1e3,tooLong:"The scientific societies are too long"}},orcid:{format:{pattern:"^([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X])|\\w{0}$",message:"Not a valid ORCID iD"}}})})(ce);var ue=Object(u.a)(Object(D.connect)((e,{form:t})=>({formValues:Object(ie.a)(t)(e),isFormValid:Object(oe.a)(t)(e)})),Object(p.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}))(e=>{let{form:t}=e,n=Object(te.a)(e,le);return Object(y.jsx)(de,Object(i.a)({form:t},n))});let pe;var he=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(pe||(pe=(e=>e)`query ProfileAcademicEdit($id: ID!) {
  account(id: $id) {
    id
    ...ProfileAcademicFragment
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n;return{initialValues:{scientificSocietyMemberships:null==e||null===(t=e.profile)||void 0===t?void 0:t.scientificSocietyMemberships,orcid:null==e||null===(n=e.profile)||void 0===n?void 0:n.orcid}}}}),Object(p.r)({onSubmit:({id:e,dispatch:t,mutate:n,onAccept:i,context:o})=>({values:r})=>{const{scientificSocietyMemberships:s,orcid:a}=r;return n(((e,t)=>({mutation:Object(l.gql)(X||(X=Z`mutation UpdateAcademic($input: ProfileAcademicInput!, $context: String!) {
  updateAcademic(input: $input, context: $context) {
    id
    ...ProfileAcademicFragment
    __typename
  }
  __typename
}
`)),variables:{input:e,context:t}}))({accountId:e,scientificSocietyMemberships:s,orcid:a},o)).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{}))),null==i||i()}).catch(e=>t(Object(J.notifyAboutError)(e)))}}))(({onSubmit:e,onReject:t,initialValues:n})=>Object(y.jsx)(ue,{form:"ProfileAcademicEdit",onSubmit:e,onReject:t,initialValues:n}));var be=({headline:e,children:t})=>Object(y.jsxs)(c.Stack,{gutter:"xs",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{children:Object(y.jsx)("strong",{children:e})})}),Object(y.jsx)(c.Stack.Item,{children:t})]});let me;var je=Object(l.withQuery)(Object(l.gql)(me||(me=(e=>e)`query ProfileAcademicOrcid($id: ID!) {
  account(id: $id) {
    id
    profile {
      orcid
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{orcid:null==e||null===(t=e.profile)||void 0===t?void 0:t.orcid}}})(({orcid:e})=>e?Object(y.jsx)(be,{headline:"ORCID iD",children:Object(y.jsx)(c.Text,{children:e})}):null);let fe;var Oe=Object(l.withQuery)(Object(l.gql)(fe||(fe=(e=>e)`query ProfileAcademicScientificSocietyMemberships($id: ID!) {
  account(id: $id) {
    id
    profile {
      scientificSocietyMemberships
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{scientificSocietyMemberships:null==e||null===(t=e.profile)||void 0===t?void 0:t.scientificSocietyMemberships}}})(({scientificSocietyMemberships:e})=>e?Object(y.jsx)(be,{headline:"Scientific societies",children:Object(y.jsx)(c.Text,{children:e})}):null);let ge;var xe=Object(l.withQuery)(Object(l.gql)(ge||(ge=(e=>e)`query ProfileAcademicContent($id: ID!) {
  account(id: $id) {
    id
    profile {
      scientificSocietyMemberships
      orcid
      __typename
    }
    ...ProfileAcademicScientificSocietyMemberships @embed
    ...ProfileAcademicOrcid @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{scientificSocietyMemberships:e,orcid:t}}})=>({scientificSocietyMemberships:e,orcid:t})})(({id:e,scientificSocietyMemberships:t,orcid:n})=>Object(y.jsxs)(c.Grid,{horizontalAlign:"left",children:[t?Object(y.jsx)(c.Grid.Column,{width:n?6:12,children:Object(y.jsx)(Oe,{id:e})}):null,n?Object(y.jsx)(c.Grid.Column,{width:t?6:12,children:Object(y.jsx)(je,{id:e})}):null]})),ye=n(574);let ve;const Ie=e=>{var t,n;return Boolean((null==e||null===(t=e.profile)||void 0===t?void 0:t.scientificSocietyMemberships)||(null==e||null===(n=e.profile)||void 0===n?void 0:n.orcid))};class _e extends o.Component{constructor(...e){super(...e),this.state={isEditMode:!1},this.enableEditMode=()=>this.setState({isEditMode:!0}),this.disableEditMode=()=>this.setState({isEditMode:!1})}renderContent(){const{id:e,isEmpty:t}=this.props;return t?Object(y.jsx)(K.b,{headline:"Add your memberships and ORCID iD",note:"Add the scientific societies you're a member of and your ORCID iD so others can see your impact.",imageSrc:Y,onClick:()=>this.setState({isEditMode:!0})}):Object(y.jsx)(xe,{id:e})}render(){const{id:e,isSelf:t,isEmpty:n}=this.props,{isEditMode:i}=this.state;return!t&&n?null:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsxs)(ye.a,{children:[Object(y.jsx)(ye.a.Label,{children:"Memberships and ORCID iD"}),t&&!n&&!i&&Object(y.jsx)(ye.a.Action,{icon:"pencil",onClick:this.enableEditMode,children:"Edit"})]})}),Object(y.jsx)(c.Card.Body,{children:i?Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{color:"grey-700",children:"Add the scientific societies you are a member of and your ORCID iD."})},"description"),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(he,{id:e,context:"profileExperience",onAccept:this.disableEditMode,onReject:this.disableEditMode})})]}):this.renderContent()})]})}}_e.displayName="ProfileAcademic";var we=Object(l.withQuery)(Object(l.gql)(ve||(ve=(e=>e)`query ProfileAcademic($id: ID!) {
  account(id: $id) {
    id
    isSelf
    ...ProfileAcademicFragment
    ...ProfileAcademicContent @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>({isSelf:null==e?void 0:e.isSelf,isEmpty:!Ie(e)})})(_e),Se=n(2179),Pe=n(3392),Ce=n(3),ke=n.n(Ce);const Ae="DISPLAY",De="EDIT",Ee="DISPLAY",Te="EDIT",Fe="EDITING",{Provider:Me,Consumer:Re}=Object(o.createContext)({listMode:Ae,setListMode:()=>{},locked:!1,setLocked:()=>{}});Me.propTypes={value:ke.a.shape({listMode:ke.a.oneOf([Ae,De]).isRequired,setListMode:ke.a.func.isRequired,locked:ke.a.bool.isRequired,setLocked:ke.a.func.isRequired})};class Ne extends o.Component{constructor(...e){super(...e),this.state={mode:Ae,lockCount:0},this.setListMode=e=>{this.setState({mode:e})},this.setLocked=e=>{let t=this.state.lockCount;e?t++:t--,this.setState({lockCount:t})}}render(){const e={listMode:this.state.mode,setListMode:this.setListMode,locked:this.state.lockCount>0,setLocked:this.setLocked};return Object(y.jsx)(Me,{value:e,children:this.props.children})}}Ne.displayName="EditableListProvider";var Le=()=>Object(y.jsx)(Re,{children:({listMode:e,setListMode:t,locked:n})=>Object(y.jsx)(c.Flex.Item,{children:e===Ae?Object(y.jsxs)(c.Button,{type:"button",theme:"bare",size:"s",color:"grey",onClick:()=>t(De),children:[Object(y.jsx)(c.Button.Label,{children:"Edit"}),Object(y.jsx)(c.Button.Icon,{identifier:"pencil"})]}):Object(y.jsx)(c.Button,{type:"button",theme:"solid",size:"s",color:"blue",status:n?"disabled":"",onClick:()=>t(Ae),children:Object(y.jsx)(c.Button.Label,{children:"Finish editing"})})})}),Be=IMAGES_STATIC_URL+"m/415676514481432/images/profile/add-research-experience.svg";n(1702);let qe,Ue=e=>e;var $e=n(24),Ve=n(2383),ze=n(2506),Ge=n(1981),Qe=n(459);n(5376);const He=({showEndDate:e,startDate:t,startDateFieldName:n,endDateFieldName:i,startDateLabel:o,endDateLabel:r})=>Object(y.jsx)(c.FormGroup.Item,{className:"time-period-selector-form-field",children:Object(y.jsxs)(c.FormGroup,{layout:"pack",children:[Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.DatePickerFormField,{label:o,dateFormat:"MMMM yyyy",name:n,children:Object(y.jsx)(Qe.default,{showMonthYearPicker:!0,placeholderText:"Select date",strictParsing:!0,autoComplete:"off"})})}),e&&Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.DatePickerFormField,{label:r,name:i,dateFormat:"MMMM yyyy",minDate:t?new Date(t):null,children:Object(y.jsx)(Qe.default,{showMonthYearPicker:!0,placeholderText:"Select date",strictParsing:!0,autoComplete:"off"})})})]})});He.defaultProps={startDateFieldName:"startDate",startDateLabel:"Start date",endDateFieldName:"endDate",endDateLabel:"End date"};var We=Object(Ve.a)(e=>({startDate:e.startDateFieldName}))(He),Ye=n(1982);let Ke;const Je=Object(l.gql)(Ke||(Ke=(e=>e)`query ProfileAdditionalAffiliationEditFormLayout($id: ID!) {
  institution(id: $id) {
    id
    country {
      ... on Country {
        id
        name
        __typename
      }
      __typename
    }
    cityNew {
      ... on City {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`));class Xe extends o.Component{componentDidUpdate(e){var t,n;const{currentlyHere:i,dispatch:o,form:r,rigel:s}=this.props;i&&!e.currentlyHere&&o(Object($e.change)(r,"endDate",null));const a=null===(t=this.props.formValues)||void 0===t?void 0:t.professionalInstitutionId,c=null==e||null===(n=e.formValues)||void 0===n?void 0:n.professionalInstitutionId;null!=a&&a!==c&&s.query(Je,{id:a}).then(e=>{var t,n,i,s,a;const c=null===(t=e.data)||void 0===t?void 0:t.institution;o(Object($e.change)(r,"country",null==c||null===(n=c.country)||void 0===n?void 0:n.name)),o(Object($e.change)(r,"countryId",null==c||null===(i=c.country)||void 0===i?void 0:i.id)),o(Object($e.change)(r,"city",null==c||null===(s=c.cityNew)||void 0===s?void 0:s.name)),o(Object($e.change)(r,"cityId",null==c||null===(a=c.cityNew)||void 0===a?void 0:a.id))})}render(){const{handleSubmit:e,doSubmit:t,submitting:n,onCancel:i,form:o,currentlyHere:r}=this.props;return Object(y.jsx)("form",{onSubmit:e(t),children:Object(y.jsxs)(c.FormGroup,{children:[Object(y.jsx)(ze.a,{form:o,labelInstitution:"Institution",placeholderInstitution:"Enter your institution",placeholderDepartment:"Enter your department"}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(Ge.a,{placeholder:"Enter your position"})}),Object(y.jsx)(We,{showEndDate:!r,startDateFieldName:"startDate",endDateFieldName:"endDate",endDateLabel:"End date"}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.SingleCheckboxFormField,{name:"currentlyHere",children:Object(y.jsx)(c.Checkbox,{children:"I currently work here"})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(Ye.a,{form:o})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.TextareaFormField,{label:"Description",name:"description",placeholder:"Describe your role and activity",children:Object(y.jsx)(c.Textarea,{rows:5,maxLength:500})})}),Object(y.jsx)(c.FormGroup.Item,{align:"right",children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsx)(c.Button,{size:"s",color:"blue",theme:"bare",onClick:i,type:"button",children:"Cancel"}),Object(y.jsx)(c.Button,{size:"s",type:"submit",status:n?"busy":null,children:"Save"})]})})]})})}}Xe.displayName="ProfileAdditionalAffiliationEditFormLayout";var Ze=Object(u.a)(Object(Ve.a)("currentlyHere"),Object(E.withRigel)())(Xe);const et=["form"],tt=Object(ne.a)({validate:Object(re.createValidator)({professionalInstitution:{presence:{message:"Add an institution or company"},length:{minimum:1,tooShort:"Add a valid institution or company"}},professionalPosition:{presence:{message:"Add a position"},length:{minimum:1,tooShort:"Add a valid position"}},startDate:{presence:{message:"Add a start date"}},endDate:{presence:{message:"Add an end date"}}})})(Ze);var nt=Object(u.a)(Object(D.connect)((e,{form:t})=>({formValues:Object(ie.a)(t)(e),isFormValid:Object(oe.a)(t)(e)})),Object(p.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}))(e=>{let{form:t}=e,n=Object(te.a)(e,et);return Object(y.jsx)(tt,Object(i.a)({form:t},n))}),it=n(1042);var ot=Object(u.a)(it.b)(({onSubmit:e,onReject:t})=>Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{color:"grey-700",children:"Provide details about an institution you're affiliated with."})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(nt,{form:"ProfileAdditionalAffiliationCreate",onSubmit:e,initialValues:{},onCancel:t})})]}));let rt,st=e=>e;let at,ct=e=>e;const{Provider:lt,Consumer:dt}=Object(o.createContext)({itemMode:Ee,setItemMode:()=>{},listMode:Ae,setListMode:()=>{}});lt.propTypes={value:ke.a.shape({itemMode:ke.a.oneOf([Ee,Te,Fe]).isRequired,setItemMode:ke.a.func.isRequired,listMode:ke.a.oneOf([Ae,De]).isRequired,setListMode:ke.a.func.isRequired})};class ut extends o.Component{constructor(...e){super(...e),this.state={mode:Te}}render(){return Object(y.jsx)(Re,{children:({listMode:e,setListMode:t,setLocked:n})=>Object(y.jsx)(lt,{value:{itemMode:e===Ae?Ee:this.state.mode,setItemMode:e=>{this.setState({mode:e}),n(e===Fe)},listMode:e,setListMode:t},children:this.props.children})})}}ut.displayName="EditableListItemProvider";const pt=({setItemMode:e,onRemove:t,onMakePrimary:n,showActionPrimaryAffiliation:i})=>{const[r,s]=Object(o.useState)(!1);return Object(y.jsxs)(c.Stack,{gutter:"m",children:[i&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Button,{type:"button",theme:"bare",status:r?"busy":"",onClick:()=>{s(!0),n()},children:[Object(y.jsx)(c.Button.Icon,{identifier:"check"}),Object(y.jsx)(c.Button.Label,{children:"This is my primary affiliation"})]})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsxs)(c.Button,{type:"button",theme:"bare",onClick:()=>e(Fe),children:[Object(y.jsx)(c.Button.Icon,{identifier:"pencil"}),Object(y.jsx)(c.Button.Label,{children:"Edit"})]}),Object(y.jsxs)(c.Button,{type:"button",theme:"bare",icon:"close",onClick:t,color:"red",children:[Object(y.jsx)(c.Button.Icon,{identifier:"close"}),Object(y.jsx)(c.Button.Label,{children:"Remove"})]})]})})]})};pt.defaultProps={setItemMode:ke.a.func.isRequired,onRemove:ke.a.func.isRequired,onMakePrimary:ke.a.func.isRequired,showActionPrimaryAffiliation:!0};var ht=pt,bt=n(60),mt=n(195);let jt,ft=e=>e;let Ot;var gt=Object(u.a)(Object(D.connect)(),it.b,Object(l.withQuery)(Object(l.gql)(Ot||(Ot=(e=>e)`query ProfileAdditionalAffiliationEdit($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    ...AdditionalAffiliationFragment
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:e})=>{var t,n,i,o,r,s,a,c,l,d,u,p,h,b,m,j;return{initialValues:{professionalInstitution:null==e||null===(t=e.institution)||void 0===t?void 0:t.name,professionalInstitutionId:null!=e&&null!==(n=e.institution)&&void 0!==n&&n.id?null==e||null===(i=e.institution)||void 0===i?void 0:i.id:null,professionalDepartment:null==e||null===(o=e.department)||void 0===o?void 0:o.name,professionalDepartmentId:null!=e&&null!==(r=e.department)&&void 0!==r&&r.id?null==e||null===(s=e.department)||void 0===s?void 0:s.id:null,professionalPosition:null==e||null===(a=e.position)||void 0===a?void 0:a.position,professionalPositionId:null==e||null===(c=e.position)||void 0===c?void 0:c.id,description:null==e?void 0:e.description,startDate:null!=e&&e.startDate?Object(bt.default)(Object(mt.a)(null==e?void 0:e.startDate),"MMMM yyyy"):"",endDate:null!=e&&e.endDate?Object(bt.default)(Object(mt.a)(null==e?void 0:e.endDate),"MMMM yyyy"):"",currentlyHere:!(null!=e&&e.endDate),country:null==e||null===(l=e.location)||void 0===l||null===(d=l.country)||void 0===d?void 0:d.name,countryId:null==e||null===(u=e.location)||void 0===u||null===(p=u.country)||void 0===p?void 0:p.id,city:null==e||null===(h=e.location)||void 0===h||null===(b=h.city)||void 0===b?void 0:b.name,cityId:null==e||null===(m=e.location)||void 0===m||null===(j=m.city)||void 0===j?void 0:j.id}}},preloader:P.a}),Object(p.r)({onSubmit:({onFinishEdit:e,dispatch:t,mutate:n,context:i,id:o})=>({values:r})=>{const s={positionId:r.professionalPositionId,positionName:r.professionalPosition,institutionId:r.professionalInstitutionId,institutionName:r.professionalInstitution,departmentId:r.professionalDepartmentId,departmentName:r.professionalDepartment,startDate:r.startDate,endDate:r.endDate,cityId:r.cityId,cityName:r.city,countryId:r.countryId,description:r.description};return n(((e,t,n)=>({mutation:Object(l.gql)(jt||(jt=ft`mutation UpdateAdditionalAffiliation($id: ID!, $input: AdditionalAffiliationInput!, $context: String!) {
  updateAdditionalAffiliation(id: $id, input: $input, context: $context) {
    id
    ...AdditionalAffiliationFragment
    __typename
  }
  __typename
}
`)),variables:{id:e,input:t,context:n}}))(o,s,i)).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{}))),e&&e()}).catch(e=>{t(Object(J.notifyAboutError)(e))})}}))(({form:e,onSubmit:t,initialValues:n,onFinishEdit:i})=>Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{color:"grey-700",children:"Provide details about an institution you're affiliated with."})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(nt,{form:e,onSubmit:t,initialValues:n,onCancel:i})})]})),xt=n(1207);let yt;var vt=Object(l.withQuery)(Object(l.gql)(yt||(yt=(e=>e)`query ProfileAdditionalAffiliationListItem($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    ...AdditionalAffiliationItemName @embed
    ...AdditionalAffiliationItemDepartment @embed
    ...AdditionalAffiliationItemImage @embed
    ...AdditionalAffiliationItemDescription @embed
    ...AdditionalAffiliationItemLocation @embed
    ...AdditionalAffiliationItemPosition @embed
    ...AdditionalAffiliationItemTimePeriod @embed
    __typename
  }
  __typename
}
`)))(({id:e})=>Object(y.jsxs)(c.EntityItem,{children:[Object(y.jsx)(xt.e,{id:e}),Object(y.jsx)(c.EntityItemMetaItems,{children:Object(y.jsx)(xt.g,{id:e})}),Object(y.jsx)(xt.d,{id:e}),Object(y.jsx)(xt.a,{id:e}),Object(y.jsx)(xt.f,{id:e}),Object(y.jsx)(xt.b,{id:e}),Object(y.jsx)(xt.c,{id:e})]}));let It;var _t=Object(u.a)(Object(D.connect)(),Object(l.withMutation)(),Object(l.withQuery)(Object(l.gql)(It||(It=(e=>e)`query ProfileAdditionalAffiliationListItemEditable($id: ID!) {
  additionalAffiliation(id: $id) {
    id
    endDate
    ...ProfileAdditionalAffiliationListItem @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({additionalAffiliation:{endDate:e}})=>({hasEndDate:!!e})}),Object(p.r)({onRemove:({mutate:e,dispatch:t,id:n,accountId:i,limit:o})=>()=>e(((e,t,{accountId:n,after:i,first:o})=>({mutation:Object(l.gql)(rt||(rt=st`mutation DeleteAdditionalAffiliation($id: ID!, $context: String!) {
  deleteAdditionalAffiliation(id: $id, context: $context) {
    id
    __typename
  }
  __typename
}
`)),variables:{context:t,id:e},update:(t,{fieldKey:r})=>{const s=r("account",{id:n}),a=r("additionalAffiliations",{after:i,first:o}),c=r("additionalAffiliations",{after:0,first:0});return{[s]:{profile:{[a]:{nodes:{$remove:{id:e,__typename:"AdditionalAffiliation"}},pageInfo:{totalItems:{$decrementBy:1}}},[c]:{pageInfo:{totalItems:{$decrementBy:1}}}}}}}}))(n,"profileOverview",{first:o,after:0,accountId:i})).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{})))}).catch(e=>{t(Object(J.notifyAboutError)(e))}),onMakePrimary:({mutate:e,dispatch:t,id:n,onRefreshList:i})=>()=>e((e=>({mutation:Object(l.gql)(at||(at=ct`mutation MakeAdditionalAffiliationPrimary($id: ID!) {
  makeAdditionalAffiliationPrimary(id: $id) {
    id
    profile {
      affiliation {
        positionNewNew {
          jobPosition {
            id
            position
            __typename
          }
          profilePosition
          __typename
        }
        institution {
          ... on Institution {
            id
            city
            country {
              name
              __typename
            }
            __typename
          }
          name
          __typename
        }
        departmentNew {
          ... on Department {
            id
            __typename
          }
          name
          __typename
        }
        professionalInstitutionStartDate
        professionalInstitutionEndDate
        professionalInstitutionPositionDescription
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e}}))(n)).then(()=>{i().then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{})))})}).catch(e=>{t(Object(J.notifyAboutError)(e))})}))(({id:e,onRemove:t,onMakePrimary:n,hasEndDate:i})=>Object(y.jsx)(ut,{children:Object(y.jsx)(dt,{children:({itemMode:o,setItemMode:r})=>o===Te?Object(y.jsxs)(c.Stack,{gutter:"xs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(vt,{id:e})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(ht,{setItemMode:r,onRemove:t,onMakePrimary:n,showActionPrimaryAffiliation:!i})})]}):o===Fe?Object(y.jsx)(gt,{id:e,form:"ProfileAdditionalAffiliationEdit_"+e,onFinishEdit:()=>r(Te),context:"profileOverview"}):Object(y.jsx)(vt,{id:e})})}));let wt;var St=Object(l.withQuery)(Object(l.gql)(wt||(wt=(e=>e)`query ProfileAdditionalAffiliationsList($id: ID!, $limit: Int!) {
  account(id: $id) {
    id
    profile {
      additionalAffiliations(after: 0, first: $limit) {
        nodes {
          id
          ...ProfileAdditionalAffiliationListItemEditable @embed(limit: $limit)
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
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{items:null!==(t=null==e||null===(n=e.profile)||void 0===n||null===(i=n.additionalAffiliations)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[]}}})(({items:e,limit:t,id:n,forceRefetch:i})=>Object(y.jsx)(c.Stack,{showDivider:!0,gutter:"xxl",children:e.map(e=>Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(_t,{id:e.id,accountId:n,limit:t,onRefreshList:i})},e.id))})),Pt=n(1282);let Ct;var kt=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(Ct||(Ct=(e=>e)`query ProfileAffiliationsAdditional($id: ID!, $limit: Int!) {
  account(id: $id) {
    id
    isSelf
    profile {
      additionalAffiliations(after: 0, first: $limit) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileAdditionalAffiliationsList @embed(limit: $limit)
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{isSelf:null==e?void 0:e.isSelf,hasAdditionalAffiliations:(null==e||null===(t=e.profile)||void 0===t||null===(n=t.additionalAffiliations)||void 0===n||null===(i=n.pageInfo)||void 0===i?void 0:i.totalItems)>0}}}))(({id:e,hasAdditionalAffiliations:t,isSelf:n,limit:i,mutate:r,dispatch:s})=>{const[a,d]=Object(o.useState)(!1),u=({values:t})=>{const n={positionId:t.professionalPositionId,positionName:t.professionalPosition,institutionId:t.professionalInstitutionId,institutionName:t.professionalInstitution,departmentId:t.professionalDepartmentId,departmentName:t.professionalDepartment,startDate:t.startDate,endDate:t.endDate,cityId:t.cityId,cityName:t.city,countryId:t.countryId,description:t.description};return r(((e,t,{accountId:n,after:i,first:o})=>({mutation:Object(l.gql)(qe||(qe=Ue`mutation CreateAdditionalAffiliation($input: AdditionalAffiliationInput!, $context: String!) {
  createAdditionalAffiliation(input: $input, context: $context) {
    id
    ...AdditionalAffiliationFragment
    __typename
  }
  __typename
}
`)),variables:{input:e,context:t},update:(e,{fieldKey:t})=>{const r=t("account",{id:n}),s=t("additionalAffiliations",{after:i,first:o}),a=t("additionalAffiliations",{after:0,first:0});return{[t("additionalAffiliations",{id:e.createAdditionalAffiliation.id})]:e.createAdditionalAffiliation,[r]:{profile:{[s]:{nodes:{$unshift:e.createAdditionalAffiliation},pageInfo:{totalItems:{$incrementBy:1}}},[a]:{pageInfo:{totalItems:{$incrementBy:1}}}}}}}}))(n,"profileOverview",{accountId:e,first:i,after:0})).then(()=>{s(Object(J.pushAlert)(()=>Object(y.jsx)(Pt.a,{}))),d(!1)}).catch(e=>{s(Object(J.notifyAboutError)(e))})};if(!t)return n?a?Object(y.jsx)(ot,{onSubmit:u,onReject:()=>d(!1),context:"profileExperience"}):Object(y.jsx)(K.b,{headline:"Add your additional affiliations",note:"Add your current and past affiliations to give a complete picture of where you've worked.",imageSrc:Be,onClick:()=>d(!0)}):null;return Object(y.jsx)(Re,{children:({listMode:t})=>Object(y.jsx)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(St,{id:e,limit:i,onSubmit:u})},"list")].concat(t===Te?[Object(y.jsx)(c.Stack.Item,{children:a?Object(y.jsx)(ot,{onSubmit:u,onReject:()=>d(!1),context:"profileOverview"}):Object(y.jsxs)(c.Button,{theme:"ghost",size:"s",color:"blue",type:"button",onClick:()=>d(!0),children:[Object(y.jsx)(c.Button.Icon,{identifier:"plus-circle"}),Object(y.jsx)(c.Button.Label,{children:"Add affiliation"})]})},"create")]:[])})})}),At=IMAGES_STATIC_URL+"m/42388212468924/images/profile/add-institution.svg",Dt=n(1983),Et=n(1984);var Tt=({id:e,context:t,onRequestClose:n,onUpdatedInstitution:i})=>Object(y.jsx)(Dt.a,{id:e,context:t,onFinishEdit:n,onUpdatedInstitution:i,children:({onSubmit:e,initialValues:t,submitting:i,handleSubmit:o,form:r})=>Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{color:"grey-700",children:"Provide details about your current affiliation."})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)("form",{onSubmit:o(e),children:Object(y.jsxs)(c.FormGroup,{children:[Object(y.jsx)(Et.a,{form:r,initialValues:t}),Object(y.jsx)(c.FormGroup.Item,{align:"right",children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsx)(c.Button,{size:"s",color:"blue",theme:"bare",onClick:n,type:"button",children:"Cancel"}),Object(y.jsx)(c.Button,{size:"s",type:"submit",status:i?"busy":null,children:"Save"})]})})]})})})]})}),Ft=n(705);let Mt;var Rt=Object(u.a)(Object(p.h)(c.EntityItemInfo),Object(l.withQuery)(Object(l.gql)(Mt||(Mt=(e=>e)`query PrimaryAffiliationItemDepartment($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        departmentNew {
          name
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
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{name:null==e||null===(t=e.profile)||void 0===t||null===(n=t.affiliation)||void 0===n||null===(i=n.departmentNew)||void 0===i?void 0:i.name}}}))(Ft.a);let Nt;var Lt=Object(u.a)(Object(p.h)(c.EntityItemInfo),Object(l.withQuery)(Object(l.gql)(Nt||(Nt=(e=>e)`query PrimaryAffiliationItemDescription($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        professionalInstitutionPositionDescription
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n;return{description:null==e||null===(t=e.profile)||void 0===t||null===(n=t.affiliation)||void 0===n?void 0:n.professionalInstitutionPositionDescription}}}))(Ft.b);let Bt;var qt=Object(u.a)(Object(p.h)(c.EntityItemImage),Object(l.withQuery)(Object(l.gql)(Bt||(Bt=(e=>e)`query PrimaryAffiliationItemImage($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        institution {
          ... on Institution {
            id
            url
            imageUrl
            __typename
          }
          name
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
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a,c,l;return{name:null==e||null===(t=e.profile)||void 0===t||null===(n=t.affiliation)||void 0===n||null===(i=n.institution)||void 0===i?void 0:i.name,url:null==e||null===(o=e.profile)||void 0===o||null===(r=o.affiliation)||void 0===r||null===(s=r.institution)||void 0===s?void 0:s.url,imageUrl:null==e||null===(a=e.profile)||void 0===a||null===(c=a.affiliation)||void 0===c||null===(l=c.institution)||void 0===l?void 0:l.imageUrl}}}))(Ft.c);let Ut;var $t=Object(u.a)(Object(p.h)(c.EntityItemInfo),Object(l.withQuery)(Object(l.gql)(Ut||(Ut=(e=>e)`query PrimaryAffiliationItemLocation($id: ID!) {
  account(id: $id) {
    id
    profile {
      professionalCity {
        name
        __typename
      }
      professionalCountry {
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o;return{city:null==e||null===(t=e.profile)||void 0===t||null===(n=t.professionalCity)||void 0===n?void 0:n.name,country:null==e||null===(i=e.profile)||void 0===i||null===(o=i.professionalCountry)||void 0===o?void 0:o.name}}}))(Ft.d);let Vt;var zt=Object(u.a)(Object(p.h)(c.EntityItemTitle),Object(l.withQuery)(Object(l.gql)(Vt||(Vt=(e=>e)`query PrimaryAffiliationItemName($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        institution {
          ... on Institution {
            id
            url
            __typename
          }
          name
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
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s;return{name:null==e||null===(t=e.profile)||void 0===t||null===(n=t.affiliation)||void 0===n||null===(i=n.institution)||void 0===i?void 0:i.name,url:null==e||null===(o=e.profile)||void 0===o||null===(r=o.affiliation)||void 0===r||null===(s=r.institution)||void 0===s?void 0:s.url}}}))(Ft.e);let Gt;var Qt=Object(u.a)(Object(p.h)(c.EntityItemInfo),Object(l.withQuery)(Object(l.gql)(Gt||(Gt=(e=>e)`query PrimaryAffiliationItemPosition($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        positionNewNew {
          jobPosition {
            id
            position
            __typename
          }
          profilePosition
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
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a,c;return{position:null!==(t=null==e||null===(n=e.profile)||void 0===n||null===(i=n.affiliation)||void 0===i||null===(o=i.positionNewNew)||void 0===o||null===(r=o.jobPosition)||void 0===r?void 0:r.position)&&void 0!==t?t:null==e||null===(s=e.profile)||void 0===s||null===(a=s.affiliation)||void 0===a||null===(c=a.positionNewNew)||void 0===c?void 0:c.profilePosition}}}))(Ft.f);let Ht;var Wt=Object(u.a)(Object(p.h)(c.EntityItemMetaItem),Object(l.withQuery)(Object(l.gql)(Ht||(Ht=(e=>e)`query PrimaryAffiliationItemTimePeriod($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        professionalInstitutionStartDate
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n;return{startDate:null==e||null===(t=e.profile)||void 0===t||null===(n=t.affiliation)||void 0===n?void 0:n.professionalInstitutionStartDate}}}))(Ft.g);let Yt;var Kt=Object(l.withQuery)(Object(l.gql)(Yt||(Yt=(e=>e)`query ProfilePrimaryAffiliation($id: ID!) {
  account(id: $id) {
    id
    ...PrimaryAffiliationItemName @embed
    ...PrimaryAffiliationItemDepartment @embed
    ...PrimaryAffiliationItemImage @embed
    ...PrimaryAffiliationItemDescription @embed
    ...PrimaryAffiliationItemLocation @embed
    ...PrimaryAffiliationItemPosition @embed
    ...PrimaryAffiliationItemTimePeriod @embed
    __typename
  }
  __typename
}
`)))(({id:e})=>Object(y.jsxs)(c.EntityItem,{children:[Object(y.jsx)(zt,{id:e}),Object(y.jsx)(c.EntityItemMetaItems,{children:Object(y.jsx)(Wt,{id:e})}),Object(y.jsx)($t,{id:e}),Object(y.jsx)(Rt,{id:e}),Object(y.jsx)(Qt,{id:e}),Object(y.jsx)(Lt,{id:e}),Object(y.jsx)(qt,{id:e})]}));var Jt=({id:e,onUpdatedInstitution:t})=>Object(y.jsx)(ut,{children:Object(y.jsx)(dt,{children:({itemMode:n,setItemMode:i})=>n===Te?Object(y.jsxs)(c.Stack,{gutter:"xs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Kt,{id:e})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Button,{type:"button",theme:"bare",icon:"pencil",onClick:()=>i(Fe),children:[Object(y.jsx)(c.Button.Icon,{identifier:"pencil"}),Object(y.jsx)(c.Button.Label,{children:"Edit"})]})})]}):n===Fe?Object(y.jsx)(Tt,{id:e,context:"profileOverview",onRequestClose:()=>i(Te),onUpdatedInstitution:t}):Object(y.jsx)(Kt,{id:e})})});let Xt;var Zt=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(Xt||(Xt=(e=>e)`query ProfileAffiliationsPrimary($id: ID!) {
  account(id: $id) {
    id
    isSelf
    profile {
      affiliation {
        institution {
          name
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfilePrimaryAffiliation @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{isSelf:null==e?void 0:e.isSelf,hasPrimaryAffiliation:!(null==e||null===(t=e.profile)||void 0===t||null===(n=t.affiliation)||void 0===n||null===(i=n.institution)||void 0===i||!i.name)}}}))(({id:e,isSelf:t,hasPrimaryAffiliation:n})=>{const[i,r]=Object(o.useState)(!1);return n?Object(y.jsx)(Jt,{id:e}):t?i?Object(y.jsx)(Tt,{id:e,context:"profileOverview",onRequestClose:()=>r(!1)}):Object(y.jsx)(K.b,{headline:"Add your primary affiliation",note:"Tell others where you currently work, study, or conduct research.",imageSrc:At,onClick:()=>{r(!0)}}):null});let en;var tn=Object(u.a)(Object(l.withQuery)(Object(l.gql)(en||(en=(e=>e)`query ProfileAffiliations($accountId: ID!, $limit: Int!) {
  account(id: $accountId) {
    id
    isSelf
    profile {
      affiliation {
        institution {
          name
          __typename
        }
        __typename
      }
      additionalAffiliations(after: 0, first: $limit) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileAffiliationsPrimary @embed
    ...ProfileAffiliationsAdditional @embed(limit: $limit)
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a,c;return{totalAdditionalAffiliations:null!==(t=null==e||null===(n=e.profile)||void 0===n||null===(i=n.additionalAffiliations)||void 0===i||null===(o=i.pageInfo)||void 0===o?void 0:o.totalItems)&&void 0!==t?t:0,hasPrimaryAffiliation:null!==(r=!(null==e||null===(s=e.profile)||void 0===s||null===(a=s.affiliation)||void 0===a||null===(c=a.institution)||void 0===c||!c.name))&&void 0!==r&&r,isSelf:null==e?void 0:e.isSelf}}}))(({accountId:e,totalAdditionalAffiliations:t,hasPrimaryAffiliation:n,isSelf:i,limit:r})=>{const[s,a]=Object(o.useState)(r);return t>0||n||i?Object(y.jsx)(Ne,{children:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsxs)(ye.a,{children:[Object(y.jsx)(ye.a.Label,{children:"Affiliations"}),i&&Object(y.jsx)(ye.a.CustomActions,{children:Object(y.jsx)(Le,{})})]})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(it.a,{accountId:e,children:Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[(n||i)&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Zt,{id:e})}),(t>0||i)&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(kt,{id:e,limit:s})})]})})}),t>r?Object(y.jsx)(c.Card.Footer,{children:Object(y.jsx)(c.Button,{type:"button",theme:"bare",width:"full",color:"grey",onClick:()=>a(s===t?r:t),children:s===t?"Show less":"See all affiliations"})}):null]})}):null}),nn=n(3397),on=n(27),rn=n(1103),sn=n(16),an=n.n(sn),cn=n(32);n(5379);let ln;const dn=new a.a("profile-business-card-views");var un=Object(l.withQuery)(Object(l.gql)(ln||(ln=(e=>e)`query ProfileBusinessCardViews($accountId: ID!) {
  account(id: $accountId) {
    id
    businessCardViews {
      lastWeek
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{businessCardViews:e}})=>({lastWeekViews:null==e?void 0:e.lastWeek})})(({lastWeekViews:e})=>e?Object(y.jsx)("div",Object(i.a)(Object(i.a)({},dn()),{},{children:Object(y.jsxs)(c.Flex,{gutter:"s",alignItems:"center",children:[Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(c.Icon,{identifier:"bulb",size:"m"})}),Object(y.jsx)(c.Flex.Item,{grow:!0,children:Object(y.jsxs)(c.Text,{children:["Your card was"," ",Object(y.jsxs)("strong",{children:["viewed ",Object(cn.j)(e)," ",an()("time",e)]})," ","in the last week."]})})]})})):null);let pn;var hn=Object(l.withQuery)(Object(l.gql)(pn||(pn=(e=>e)`query ProfileBusinessCardDemo($accountId: ID!) {
  account(id: $accountId) {
    id
    isSelf
    ...StandardPersonItem @embed
    ...ProfileBusinessCardViews @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>({isSelf:null==e?void 0:e.isSelf})})(({accountId:e,isSelf:t,onToggleEdit:n,context:o})=>t?Object(y.jsxs)(c.Card,{children:[Object(y.jsx)(c.Card.Header,{spacing:"m",children:Object(y.jsxs)(c.Flex,{justifyContent:"space-between",children:[Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(c.Flex,{alignItems:"center",gutter:"xs",children:Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(c.Text,Object(i.a)(Object(i.a)({size:"l",color:"grey-500",spacing:"none"},Object(on.a)("BusinessCardTitle")),{},{children:"Business card"}))})})}),Object(y.jsx)(c.Flex.Item,{children:Object(y.jsxs)(c.Button,Object(i.a)(Object(i.a)({type:"button",theme:"bare",color:"grey",onClick:n},Object(on.a)("BusinessCardEditButton")),{},{children:[Object(y.jsx)(c.Button.Label,{children:"Edit"}),Object(y.jsx)(c.Button.Icon,{identifier:"pencil"})]}))})]})}),Object(y.jsx)(c.Card.Body,{spacing:"m",children:Object(y.jsxs)(c.Stack,{children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Card,{elevation:"none",children:Object(y.jsx)(rn.a,{accountId:e,areLinksDisabled:!0,context:o})})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(un,{accountId:e})})]})})]}):null);let bn;var mn=Object(l.withQuery)(Object(l.gql)(bn||(bn=(e=>e)`query ProfileBusinessCard($accountId: ID!) {
  account(id: $accountId) {
    id
    ...ProfileBusinessCardDemo @embed
    ...ProfileBusinessCardEdit @embed
    __typename
  }
  __typename
}
`)))(({accountId:e,allDegrees:t,context:n})=>{const[i,r]=Object(o.useState)(!1);return i?Object(y.jsx)(nn.a,{accountId:e,allDegrees:t,context:"businessCard",onAccept:()=>r(!1),onCancel:()=>r(!1)}):Object(y.jsx)(hn,{accountId:e,onToggleEdit:()=>r(!0),context:n})}),jn=n(43),fn=n(13),On=n(667);n(5380);const gn=new a.a("profile-follow-modal");var xn=({headline:e,children:t,isOpen:n,onRequestClose:o})=>Object(y.jsx)(c.Modal,{isOpen:n,onRequestClose:o,children:Object(y.jsx)(c.Modal.Body,{children:Object(y.jsx)("div",Object(i.a)(Object(i.a)({},gn()),{},{children:Object(y.jsxs)(c.Stack,{children:[Object(y.jsx)(c.Stack.Item,{children:e}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)("div",Object(i.a)(Object(i.a)({},gn("modal-content")),{},{children:t}))})]})}))})});var yn=({handleModalOpen:e,isModalOpen:t,handleModalClose:n,modalHeadline:i,children:o,buttonText:r})=>Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.Button,{onClick:e,theme:"bare",color:"grey",children:Object(y.jsx)(c.Button.Label,{children:r||"View all"})}),Object(y.jsx)(xn,{isOpen:t,onRequestClose:n,headline:Object(y.jsx)(c.Heading,{size:"xl",children:i}),children:o})]});let vn;const In=({journals:e})=>Object(y.jsx)(H.a,{source:W.e,children:Object(y.jsx)(c.Stack,{children:e.map(e=>{var t,n;return Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(H.a,{source:W.c,sourceContentId:e.id,children:[Object(y.jsxs)(c.Flex,{children:[Object(y.jsx)(c.Flex.Item,{grow:!0,children:Object(y.jsx)(c.Link,{href:`${Object(fn.d)()}/${e.url}`,theme:"bare",children:Object(y.jsx)(c.Heading,{size:"m",children:e.title})})}),Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(On.a,{id:e.id})})]}),(null===(t=e.extendedJournal)||void 0===t||null===(n=t.publisher)||void 0===n?void 0:n.name)&&Object(y.jsx)(c.Text,{color:"grey-500",size:"m",children:e.extendedJournal.publisher.name})]})},e.id)})})});var _n=Object(l.withQuery)(Object(l.gql)(vn||(vn=(e=>e)`query ProfileJournalFollowing($id: ID!) {
  account(id: $id) {
    id
    profile {
      journalsFollowed {
        id
        title
        url
        extendedJournal {
          publisher {
            id
            name
            __typename
          }
          __typename
        }
        ...FollowJournalButton @embed
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{profile:{journalsFollowed:e}}})=>({journals:null!=e?e:[]})})(({journals:e=[],isModalVisible:t})=>{const[n,i]=Object(o.useState)(t);return e.length<=0?null:Object(y.jsx)(c.Stack,{children:Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsx)(c.Text,{color:"grey-500",size:"l",children:Object(jn.a)(e=>["Journals you follow (",e.followed_journals_count,")"],{followed_journals_count:e.length})})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(In,{journals:e.slice(0,3)})}),Object(y.jsx)(c.Card.Footer,{align:"center",children:Object(y.jsx)(yn,{handleModalOpen:()=>i(!0),handleModalClose:()=>i(!1),isModalOpen:n,modalHeadline:Object(jn.a)(()=>["Journals you follow"]),btnText:Object(jn.a)(()=>["View all"]),children:Object(y.jsx)(In,{journals:e})})})]})})})}),wn=n(3401),Sn=n(3408),Pn=n(2218);var Cn=Object(p.b)()(({profileTopCoauthors:e})=>e&&Object(y.jsx)(c.Stack,{gutter:"none",children:e?Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Pn.a,{widgetId:e,buttonProps:{theme:"bare"}})}):null})),kn=n(2291),An=n(696),Dn=n(3413),En=n(3414);let Tn;var Fn=Object(l.withQuery)(Object(l.gql)(Tn||(Tn=(e=>e)`query ProfileRelatedResearchersFollowedAccountsHeader($id: ID!) {
  account(id: $id) {
    id
    followedAccountsCount
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{followedAccountsCount:e}})=>({count:e})})(({count:e})=>Object(y.jsxs)(c.Text,{color:"grey-500",size:"l",children:["Following (",e,")"]}));let Mn;var Rn=Object(l.withQuery)(Object(l.gql)(Mn||(Mn=(e=>e)`query ProfileRelatedResearchersFollowingAccountsHeader($id: ID!) {
  account(id: $id) {
    id
    followingAccountsCount
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{followingAccountsCount:e}})=>({count:e})})(({count:e})=>Object(y.jsxs)(c.Text,{color:"grey-500",size:"l",children:["Followers (",e,")"]}));let Nn,Ln=()=>Promise.resolve().then(n.bind(null,3413)),Bn=()=>Promise.resolve().then(n.bind(null,3414));class qn extends o.Component{constructor(...e){super(...e),this.state={isFollowingModalOpen:!1,isFollowersModalOpen:!1},this.handleOpenFollowingModal=()=>{this.setState({isFollowingModalOpen:!0})},this.handleCloseFollowingModal=()=>{this.setState({isFollowingModalOpen:!1})},this.handleOpenFollowersModal=()=>{this.setState({isFollowersModalOpen:!0})},this.handleCloseFollowersModal=()=>{this.setState({isFollowersModalOpen:!1})},this.renderFollowAction=({label:e,toggleFollow:t,hasPermissionToFollow:n})=>n?Object(y.jsx)(c.Button,{type:"button",onClick:t,theme:"bare",size:"s",color:"blue",children:e}):null}render(){const{id:e,profileFollowingAccountsList:t,profileFollowedAccountsList:n,followedAccountKeys:i,setFollowedAccountKeys:o,setFollowingAccountKeys:r}=this.props;return Object(y.jsxs)(c.Stack,{children:[n&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsx)(Fn,{id:e})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(Dn.default,{widgetId:n,gutter:"xs",showDivider:!1,setFollowedAccountKeysShown:o,followActionRenderer:this.renderFollowAction})}),Object(y.jsx)(c.Card.Footer,{align:"center",children:Object(y.jsx)(yn,{handleModalOpen:this.handleOpenFollowingModal,handleModalClose:this.handleCloseFollowingModal,isModalOpen:this.state.isFollowingModalOpen,modalHeadline:"Following",children:Object(y.jsx)(An.a,{url:"profile.follows.ProfileFollowedAccountsList.html",widgetParams:{id:e},isInModal:!0,__internalLoadComponent:Ln})})})]})}),t&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsx)(Rn,{id:e})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(En.default,{widgetId:t,gutter:"xs",showDivider:!1,setFollowingAccountKeysShown:r,excludedAccountKeys:i,followActionRenderer:this.renderFollowAction})}),Object(y.jsx)(c.Card.Footer,{align:"center",children:Object(y.jsx)(yn,{handleModalOpen:this.handleOpenFollowersModal,handleModalClose:this.handleCloseFollowersModal,isModalOpen:this.state.isFollowersModalOpen,modalHeadline:"Followers",children:Object(y.jsx)(An.a,{url:"profile.follows.ProfileFollowingAccountsList.html",widgetParams:{id:e},isInModal:!0,__internalLoadComponent:Bn})})})]})})]})}}qn.displayName="ProfileRelatedResearchersFollows";var Un=Object(u.a)(Object(p.b)(),Object(l.withQuery)(Object(l.gql)(Nn||(Nn=(e=>e)`query ProfileRelatedResearchersFollows($id: ID!) {
  account(id: $id) {
    id
    ...ProfileRelatedResearchersFollowingAccountsHeader @embed
    ...ProfileRelatedResearchersFollowedAccountsHeader @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e,viewer:t})=>{var n,o,r,s,a,c;return Object(i.a)(Object(i.a)({},e),{},{followingMilestones:null!==(n=null==t||null===(o=t.experiments)||void 0===o||null===(r=o.profile)||void 0===r?void 0:r.profileOverviewFollowingAccounts)&&void 0!==n?n:{},followedMilestones:null!==(s=null==t||null===(a=t.experiments)||void 0===a||null===(c=a.profile)||void 0===c?void 0:c.profileOverviewFollowedAccounts)&&void 0!==s?s:{}})}}))(qn);var $n=Object(p.b)()(({profileRelatedResearchersFollows:e})=>{const[t,n]=Object(o.useState)([]),[i,r]=Object(o.useState)([]);return Object(y.jsx)(Un,{widgetId:e,followedAccountKeys:t,followingAccountKeys:i,setFollowedAccountKeys:n,setFollowingAccountKeys:r})}),Vn=n(488),zn=n(2944);let Gn;var Qn=Object(l.withQuery)(Object(l.gql)(Gn||(Gn=(e=>e)`query SharedSkillsResearchersList($accountId: ID!) {
  account(id: $accountId) {
    id
    accountFollowSuggestions {
      similarUsersByProfileSkills(first: 3) {
        nodes {
          account {
            id
            ...AccountPersonListItemImageLink @embed
            ...AccountPersonListItemFullNameLink @embed
            ...AccountPersonListItemSharedSkills @embed
            ...AccountFollowSimpleButton @embed
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
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{similarSkilledUsers:(null!==(t=null==e||null===(n=e.accountFollowSuggestions)||void 0===n||null===(i=n.similarUsersByProfileSkills)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[]).filter(e=>e&&e.account).map(e=>e.account)}}})(({context:e,similarSkilledUsers:t,onFollow:n,onSendMessageFromTooltip:i,afterFollowActionFromTooltip:o,params:r,tooltipParams:s})=>Object(y.jsx)(c.Stack,{showDivider:!1,gutter:"s",spacing:"none",children:t.map(({id:t})=>Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.PersonListItem,{size:"s",children:[Object(y.jsx)(x.e,{id:t,context:e,isInModal:!1,onSendMessage:i,afterFollowAction:o,params:r,tooltipFullNameParams:s,tooltipImageParams:s}),Object(y.jsx)(x.c,{id:t,context:e,isInModal:!1,onSendMessage:i,afterFollowAction:o,params:r,tooltipFullNameParams:s,tooltipImageParams:s}),Object(y.jsx)(c.PersonListItem.MetaItems,{children:Object(y.jsx)(x.g,{id:t})}),Object(y.jsx)(c.PersonListItem.Actions,{children:Object(y.jsx)(zn.a,{id:t,context:e,theme:"bare",size:"s",onFollow:n})})]})},t))}));let Hn;var Wn=Object(u.a)(Object(p.b)(),Object(l.withQuery)(Object(l.gql)(Hn||(Hn=(e=>e)`query SharedSkillsResearchers($accountId: ID!) {
  urlGenerator {
    recommendedProfilesUrl
    __typename
  }
  account(id: $accountId) {
    id
    accountFollowSuggestions {
      similarUsersByProfileSkillsForTotalItems: similarUsersByProfileSkills(first: 0, after: 0) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...SharedSkillsResearchersList @embed
    __typename
  }
  viewer {
    experiments {
      profile {
        profileOverviewRecommendedProfiles {
          clickProfile: milestone(name: "profileOverviewRecommendedProfilesClickProfile")
          follow: milestone(name: "profileOverviewRecommendedProfilesFollow")
          tooltipClickProfile: milestone(name: "profileOverviewRecommendedProfilesAccountTooltipClickProfile")
          tooltipFollow: milestone(name: "profileOverviewRecommendedProfilesAccountTooltipFollow")
          tooltipSendMessage: milestone(name: "profileOverviewRecommendedProfilesAccountTooltipSendMessage")
          viewAll: milestone(name: "profileOverviewRecommendedProfilesAccountViewAll")
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
`)),{mapDataToProps:({account:e,urlGenerator:t,viewer:n})=>{var i,o,r,s,a,c;return{recommendedProfilesUrl:null!==(i=null==t?void 0:t.recommendedProfilesUrl)&&void 0!==i?i:null,totalItems:null!==(o=null==e||null===(r=e.accountFollowSuggestions)||void 0===r||null===(s=r.similarUsersByProfileSkillsForTotalItems)||void 0===s||null===(a=s.pageInfo)||void 0===a?void 0:a.totalItems)&&void 0!==o?o:0,experiment:Object(Vn.b)(null!==(c=n.experiments.profile.profileOverviewRecommendedProfiles)&&void 0!==c?c:{},["clickProfile","follow","tooltipClickProfile","tooltipFollow","tooltipSendMessage","viewAll"])}}}))(({accountId:e,context:t,recommendedProfilesUrl:n,totalItems:i,experiment:o})=>i>0?Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsx)(c.Text,{size:"l",color:"grey-600",children:"People with similar skills"})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(Qn,{accountId:e,context:t,onFollow:()=>o.follow.score(),afterFollowActionFromTooltip:()=>o.tooltipFollow.score(),onSendMessageFromTooltip:()=>o.tooltipSendMessage.score(),params:o.clickProfile.query,tooltipParams:o.tooltipClickProfile.query})}),Object(y.jsx)(c.Card.Footer,{align:"center",children:Object(y.jsx)(c.Button,{href:Object(fn.a)(n,o.viewAll.query),theme:"bare",color:"grey",size:"m",children:"View more"})})]}):null),Yn=n(547),Kn=n(20);let Jn,Xn=e=>e;var Zn=IMAGES_STATIC_URL+"m/432933736161451/images/spotlight/add-spotlight.svg",ei=n(652),ti=n(781);let ni;var ii=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(ni||(ni=(e=>e)`query ProfileOverviewSpotlightEmptyState($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlights {
      experiments {
        spotlightCreationPromo(promo: PROFILE_OVERVIEW_EMPTY_STATE, isEligibilityCheckEnabled: false) {
          spotlightCreated: goal
          spotlightCreationFlowEntered: milestone(name: "spotlightCreationFlowEntered")
          __typename
        }
        __typename
      }
      learnMoreAboutSpotlightUrl
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a;return{learnMoreAboutSpotlightUrl:null==e||null===(t=e.spotlights)||void 0===t?void 0:t.learnMoreAboutSpotlightUrl,experiment:{spotlightCreated:null==e||null===(n=e.spotlights)||void 0===n||null===(i=n.experiments)||void 0===i||null===(o=i.spotlightCreationPromo)||void 0===o?void 0:o.spotlightCreated,spotlightCreationFlowEntered:null==e||null===(r=e.spotlights)||void 0===r||null===(s=r.experiments)||void 0===s||null===(a=s.spotlightCreationPromo)||void 0===a?void 0:a.spotlightCreationFlowEntered}}}}))(({dispatch:e,accountId:t,learnMoreAboutSpotlightUrl:n,experiment:i})=>{const{handleCreate:o}=Object(ei.a)({dispatch:e,accountId:t,entryChannel:ti.a.PROFILE_OVERVIEW,onMount:()=>Object(f.l)(i.spotlightCreationFlowEntered),onSuccess:()=>Object(f.l)(i.spotlightCreated)});return Object(y.jsx)(K.b,{headline:"Create a Spotlight",note:Object(y.jsxs)(y.Fragment,{children:["Showcase your recent work in a Spotlight to get",Object(y.jsx)("br",{}),Object(y.jsx)("strong",{children:"4x more reads"})," on average."," ",Object(y.jsx)(c.Link,{target:"_blank",rel:"noopener",href:n,children:"Learn more"})]}),imageSrc:Zn,onClick:o,color:"blue"})});let oi;var ri=Object(l.withQuery)(Object(l.gql)(oi||(oi=(e=>e)`query ProfileOverviewSpotlightEmptyTooltip($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlights {
      productUpdatesResearchSpotlightsUrl
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{productUpdatesResearchSpotlightsUrl:null==e||null===(t=e.spotlights)||void 0===t?void 0:t.productUpdatesResearchSpotlightsUrl}}})(({productUpdatesResearchSpotlightsUrl:e})=>Object(y.jsxs)(c.Stack,{children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{children:Object(y.jsx)("strong",{children:"What are Spotlights?"})})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Text,{children:["Spotlights is a new feature to help you ",Object(y.jsx)("strong",{children:"showcase your recent research"})," to more people in your field and ",Object(y.jsx)("strong",{children:"engage with them about your work."})]})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{children:Object(y.jsx)("strong",{children:"How does it work?"})})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Text,{children:["You showcase a piece of research, and ",Object(y.jsx)("strong",{children:"add details"})," to help others understand why it's relevant."]})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsxs)(c.Text,{children:[Object(y.jsx)("strong",{children:"People can comment"})," to show their support, ask questions, and join the conversation."," ",Object(y.jsx)(c.Link,{href:e,children:"Read our blog post on Spotlights"})]})})]})),si=n(1904);let ai;var ci=Object(l.withQuery)(Object(l.gql)(ai||(ai=(e=>e)`query ProfileOverviewSpotlightHeadline($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlights {
      activeSpotlight {
        id
        validUntil
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;const n=null==e||null===(t=e.spotlights.activeSpotlight)||void 0===t?void 0:t.validUntil;return{daysRemaining:n?Object(si.a)(n):0}}})(({daysRemaining:e})=>Object(y.jsxs)(c.Flex,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(c.Text,{color:"blue-700",children:Object(y.jsx)("i",{children:"This preview is private – only you can see it on your profile"})})}),Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(c.Text,{color:"blue-700",children:Object(y.jsxs)("strong",{children:[e," ",an()("day",e)," remaining"]})})})]})),li=n(69),di=n(207),ui=n(33);let pi,hi=e=>e;var bi=({id:e,accountId:t})=>({mutation:Object(l.gql)(pi||(pi=hi`mutation DeleteSpotlight($id: ID!) {
  deleteSpotlight(id: $id) {
    id
    account {
      id
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e},update:(e,{fieldKey:n})=>({[n("account",{id:t})]:{spotlights:{$unset:"activeSpotlight"}}})});var mi=({isOpen:e,onModalClose:t,onModalOpen:n}={isOpen:!1})=>{const[i,o]=r.a.useState(e);return{isOpen:i,onRequestClose:()=>{o(!1),null==n||n()},onRequestOpen:()=>{o(!0),null==t||t()}}};let ji;var fi=Object(u.a)(Object(l.withQuery)(Object(l.gql)(ji||(ji=(e=>e)`query SpotlightActionDeleteModal($id: ID!) {
  spotlight(id: $id) {
    id
    validUntil
    __typename
  }
  __typename
}
`)),{mapDataToProps:({spotlight:e})=>{const t=null==e?void 0:e.validUntil;return{daysRemaining:t?Object(si.a)(t):0}}}))(({isOpen:e,onRequestClose:t,daysRemaining:n,onAccept:i,isBusy:o})=>Object(y.jsx)(c.Modal,{isOpen:e,onRequestClose:t,children:Object(y.jsxs)(c.Stack,{children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Heading,{size:"xl",children:"Are you sure you want to delete your Research Spotlight?"})}),Object(y.jsxs)(c.Stack.Item,{children:[Object(y.jsxs)(c.Text,{spacing:"s",children:["There ",1===n?"is":"are still"," ",n," ",an()("day",n)," ","left on your Spotlight. Please note that you can't showcase the same research item twice."]}),Object(y.jsx)(c.Text,{children:"Only your Spotlight will be deleted. Your research will still be accessible on ResearchGate."})]}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Flex,{alignItems:"center",justifyContent:"flex-end",children:Object(y.jsx)(c.Flex.Item,{children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsx)(c.Button,{type:"button",onClick:t,status:o?"disabled":null,children:"Cancel"}),Object(y.jsx)(c.Button,{type:"button",theme:"ghost",onClick:i,status:o?"busy":null,children:"Delete Spotlight"})]})})})})]})}));let Oi;var gi=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(Oi||(Oi=(e=>e)`query SpotlightActionDelete($id: ID!) {
  spotlight(id: $id) {
    id
    account {
      id
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({spotlight:e})=>{var t;return{isVisible:Boolean(null==e?void 0:e.id),accountId:null==e||null===(t=e.account)||void 0===t?void 0:t.id}}}))(({id:e,children:t,dispatch:n,isVisible:i,mutate:o,accountId:s})=>{const{isOpen:a,onRequestClose:c,onRequestOpen:l}=mi(),[d,u]=r.a.useState(!1);return i&&Object(y.jsxs)(y.Fragment,{children:[t({deleteSpotlight:l}),Object(y.jsx)(fi,{id:e,isOpen:a,onRequestClose:c,onAccept:()=>(u(!0),o(bi({id:e,accountId:s})).then(()=>{u(!1),c(),n(Object(J.pushAlert)(()=>Object(y.jsx)(ui.a,{title:"Research Spotlight deleted"})))}).catch(e=>(u(!1),n(Object(J.notifyAboutError)(e))))),isBusy:d})]})});let xi;var yi=Object(u.a)(Object(p.h)(c.PublicationItem.Action),Object(l.withQuery)(Object(l.gql)(xi||(xi=(e=>e)`query SpotlightItemActionViewStats($spotlightId: ID!) {
  spotlight(id: $spotlightId) {
    id
    account {
      id
      url(type: STATS_READS)
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({spotlight:e})=>{var t;return{url:null==e||null===(t=e.account)||void 0===t?void 0:t.url}}}))(({url:e})=>Object(y.jsx)(c.PublicationItem.Action,{href:e,children:"View stats"}));let vi;var Ii=Object(u.a)(Object(p.h)(c.PublicationItem.Action),Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(vi||(vi=(e=>e)`query SpotlightPublicationItemActionEdit($spotlightId: ID!) {
  spotlight(id: $spotlightId) {
    id
    account {
      id
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({spotlight:e})=>{var t;return{accountId:null==e||null===(t=e.account)||void 0===t?void 0:t.id}}}))(({accountId:e,spotlightId:t,dispatch:n,entryChannel:i,priority:o})=>{const{handleEditOpen:r}=Object(ei.a)({dispatch:n,spotlightId:t,accountId:e,entryChannel:i});return Object(y.jsx)(c.PublicationItem.Action,{onClick:()=>r(),priority:o,children:"Edit Spotlight"})});let _i;var wi=Object(u.a)(Object(p.h)(c.PublicationItem.Actions),Object(l.withQuery)(Object(l.gql)(_i||(_i=(e=>e)`query ProfileOverviewSpotlightActions($spotlightId: ID!) {
  spotlight(id: $spotlightId) {
    id
    ...SpotlightPublicationItemActionEdit @embed
    ...SpotlightItemActionViewStats @embed
    ...SpotlightActionDelete @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:e=>{let t=Object.assign({},(Object(di.a)(e),e));return Object(i.a)({},t)}}))(({spotlightId:e})=>Object(y.jsxs)(c.PublicationItem.Actions,{children:[Object(y.jsx)(Ii,{spotlightId:e,entryChannel:ti.a.PROFILE_OVERVIEW,priority:"secondary"}),Object(y.jsx)(yi,{spotlightId:e}),Object(y.jsx)(gi,{id:e,children:({deleteSpotlight:e})=>Object(y.jsx)(c.Button,{type:"button",theme:"bare",onClick:e,children:"Delete"})})]})),Si=n(59);let Pi;var Ci=Object(l.withQuery)(Object(l.gql)(Pi||(Pi=(e=>e)`query ProfileOverviewSpotlightPublication($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlights {
      activeSpotlight {
        id
        publication {
          id
          ...PublicationItemTitleLink @embed
          ...PublicationItemType @embed
          ...PublicationItemDefaultMetaItems @embed
          ...PublicationItemDefaultMetrics @embed
          ...PublicationItemAuthors @embed
          ...PublicationItemPreview @embed
          __typename
        }
        ...ProfileOverviewSpotlightActions @embed
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r;return{spotlightId:null==e||null===(t=e.spotlights)||void 0===t||null===(n=t.activeSpotlight)||void 0===n?void 0:n.id,publicationId:null==e||null===(i=e.spotlights)||void 0===i||null===(o=i.activeSpotlight)||void 0===o||null===(r=o.publication)||void 0===r?void 0:r.id}}})(({publicationId:e,spotlightId:t})=>e&&t?Object(y.jsxs)(c.PublicationItem,{children:[Object(y.jsx)(Si.q,{id:e}),Object(y.jsx)(Si.r,{id:e}),Object(y.jsx)(Si.e,{id:e}),Object(y.jsx)(Si.f,{id:e}),Object(y.jsx)(Si.b,{id:e,context:li.q}),Object(y.jsx)(Si.m,{id:e}),Object(y.jsx)(wi,{spotlightId:t})]}):null);let ki;var Ai=Object(l.withQuery)(Object(l.gql)(ki||(ki=(e=>e)`query ProfileOverviewViewSpotlightButton($spotlightId: ID!) {
  spotlight(id: $spotlightId) {
    id
    url
    __typename
  }
  __typename
}
`)),{mapDataToProps:({spotlight:e})=>({spotlightUrl:null==e?void 0:e.url})})(({spotlightUrl:e})=>Object(y.jsx)(c.Flex,{justifyContent:"center",children:Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(c.Link,{color:"blue",href:e,theme:"bare",children:Object(y.jsx)(c.Text,{color:"blue-500",children:"View Spotlight details"})})})})),Di=n(730);let Ei;const Ti=Object(p.h)(ye.a.Label)(({children:e})=>e);var Fi=Object(l.withQuery)(Object(l.gql)(Ei||(Ei=(e=>e)`query ProfileOverviewSpotlight($accountId: ID!) {
  account(id: $accountId) {
    id
    isSelf
    spotlights {
      hasPermissionToCreateSpotlight
      activeSpotlight {
        id
        url
        ...ProfileOverviewViewSpotlightButton @embed
        __typename
      }
      __typename
    }
    flags {
      isProfileOverviewSpotlightOnboardingTooltipVisible
      __typename
    }
    ...ProfileOverviewSpotlightHeadline @embed
    ...ProfileOverviewSpotlightPublication @embed
    ...ProfileOverviewSpotlightEmptyState @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a;const c=Boolean(null==e||null===(t=e.spotlights.activeSpotlight)||void 0===t?void 0:t.id);return{isSelf:null!==(n=null==e?void 0:e.isSelf)&&void 0!==n&&n,hasActiveSpotlight:c,spotlightId:null==e||null===(i=e.spotlights)||void 0===i||null===(o=i.activeSpotlight)||void 0===o?void 0:o.id,hasPermissionToCreateSpotlight:null!==(r=null==e||null===(s=e.spotlights)||void 0===s?void 0:s.hasPermissionToCreateSpotlight)&&void 0!==r&&r,isProfileOverviewSpotlightOnboardingTooltipVisible:(null==e||null===(a=e.flags)||void 0===a?void 0:a.isProfileOverviewSpotlightOnboardingTooltipVisible)&&!c}}})(({accountId:e,isSelf:t,hasPermissionToCreateSpotlight:n,hasActiveSpotlight:i,spotlightRef:o,isProfileOverviewSpotlightOnboardingTooltipVisible:s,mutate:a,spotlightId:d})=>{const[u]=r.a.useState(s),p=Object(y.jsx)(Di.a,{title:"Research Spotlight"});return i||n?t&&Object(y.jsx)("div",{ref:o,children:Object(y.jsxs)(c.Card,{color:"blue",spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsx)(ye.a,{children:Object(y.jsx)(Ti,{children:Object(y.jsx)(ye.a.Label,{children:u?Object(y.jsx)(c.Tooltip,{target:p,initVisible:!0,showClose:!0,position:"below",color:"blue",mode:"none",children:Object(y.jsx)(Yn.a,{onChange:(t,n)=>{var i;t.isIntersecting&&(n(),a((i=e,{mutation:Object(l.gql)(Jn||(Jn=Xn`mutation DismissProfileOverviewSpotlightOnboardingTooltip($id: ID!) {
  dismissProfileOverviewSpotlightOnboardingTooltip(id: $id) {
    id
    flags {
      isProfileOverviewSpotlightOnboardingTooltipVisible
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:i},optimisticResponse:{dismissProfileOverviewSpotlightOnboardingTooltip:{__typename:"Account",id:i,flags:{isProfileOverviewSpotlightOnboardingTooltipVisible:!0}}}})).catch(Kn.default))},children:Object(y.jsx)("div",{children:Object(y.jsx)(ri,{accountId:e})})})}):p})})})}),Object(y.jsx)(c.Card.Body,{children:i?Object(y.jsxs)(c.Stack,{children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(ci,{accountId:e})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Ci,{accountId:e})})]}):Object(y.jsx)(ii,{accountId:e})}),i&&Object(y.jsx)(c.Card.Footer,{children:Object(y.jsx)(Ai,{spotlightId:d})})]})}):null}),Mi=n(9),Ri=IMAGES_STATIC_URL+"m/4949023200874/images/profile/add-award.svg";n(2860);let Ni,Li=e=>e;var Bi=n(1482),qi=n(1905),Ui=n(105),$i=n.n(Ui);let Vi;const zi=Object(l.gql)(Vi||(Vi=(e=>e)`query InstitutionsSelectorFormField($query: String = "") {
  searchInstitutions(query: $query) {
    id
    name
    __typename
  }
  __typename
}
`));class Gi extends o.Component{constructor(...e){super(...e),this.inputValue="",this.state={institutions:this.props.rigel.bindQuery(zi,e=>this.setState({institutions:e}))},this.renderItem=({name:e})=>e,this.filterOptionsMethod=(e,t)=>(this.debouncedQueryUpdate(t),this.inputValue=t,e.concat([{name:t}])),this.debouncedQueryUpdate=$i()(e=>this.state.institutions.update({query:e}),200)}render(){return Object(y.jsx)(c.AdvancedSelect,Object(i.a)({options:this.state.institutions.isComplete()&&this.state.institutions.data.searchInstitutions?this.state.institutions.data.searchInstitutions:[],renderValue:this.renderItem,renderOption:this.renderItem,multipleValues:!0,retainOptions:!1,filterConfig:{method:this.filterOptionsMethod}},this.props))}}Gi.displayName="InstitutionsSelectorFormField";var Qi=Object(u.a)(Object(D.connect)(),Object(E.withRigel)())(Gi);let Hi;const Wi=Object(l.gql)(Hi||(Hi=(e=>e)`query InvestigatorsSelectorFormField($query: String = "") {
  investigatorSuggestions(query: $query) {
    id
    fullName
    __typename
  }
  __typename
}
`));class Yi extends o.Component{constructor(...e){super(...e),this.inputValue="",this.state={accounts:this.props.rigel.bindQuery(Wi,e=>this.setState({accounts:e}))},this.renderItem=({fullName:e})=>e,this.filterOptionsMethod=(e,t)=>(this.debouncedQueryUpdate(t),this.inputValue=t,e.concat([{fullName:t}])),this.debouncedQueryUpdate=$i()(e=>this.state.accounts.update({query:e}),200)}render(){var e,t,n,o,r,s;return Object(y.jsx)(c.AdvancedSelect,Object(i.a)({options:this.state.accounts.isComplete()&&(null===(e=null===(t=this.state.accounts)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.investigatorSuggestions)||void 0===e||e)&&null!==(o=null===(r=this.state.accounts)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.investigatorSuggestions)&&void 0!==o?o:[],renderValue:this.renderItem,renderOption:this.renderItem,multipleValues:!0,retainOptions:!1,filterConfig:{method:this.filterOptionsMethod}},this.props))}}Yi.displayName="InvestigatorsSelectorFormField";var Ki=Object(u.a)(Object(D.connect)(),Object(E.withRigel)())(Yi);function Ji({submitting:e}){return e?"busy":null}var Xi=Object(Ve.a)("awardType")((function({handleSubmit:e,doSubmit:t,submitting:n,onCancel:i,currencies:o,awardType:r,isVitaAwardCleanupEnabled:s}){const a=[];for(const[e,t]of Object.entries(Bi.b))a.push(Object(y.jsx)(c.Select.Option,{value:e,children:t},e));return Object(y.jsx)("form",{onSubmit:e(t),children:Object(y.jsxs)(c.FormGroup,{children:[Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.ReactSelectFormField,{label:"Award type",name:"awardType",children:Object(y.jsx)(c.Select,{children:a})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.InputFormField,{label:"Title",name:"name",children:Object(y.jsx)(c.Input,{type:"text",placeholder:"Enter a title"})})}),r!==Bi.a&&Object(y.jsx)(c.FormGroup.Item,{width:"whole",children:Object(y.jsx)(se.DatePickerFormField,{label:"Date",dateFormat:"MMMM yyyy",name:"date",children:Object(y.jsx)(Qe.default,{showMonthYearPicker:!0,placeholderText:"Date awarded",strictParsing:!0,autoComplete:"off"})})}),r===Bi.a&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(We,{showEndDate:!0,startDateFieldName:"date",endDateFieldName:"endDate",startDateLabel:"Time period",endDateLabel:" "}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsxs)(c.Flex,{gutter:"s",children:[Object(y.jsx)(c.Flex.Item,{children:Object(y.jsx)(se.ReactSelectFormField,{label:"Total funding",name:"currency",children:Object(y.jsxs)(c.Select,{children:[Object(y.jsx)(c.Select.Option,{children:"Currency"}),o.map(e=>Object(y.jsx)(c.Select.Option,{value:e,children:e},e))]})})}),Object(y.jsx)(c.Flex.Item,{grow:!0,children:Object(y.jsx)(se.InputFormField,{label:" ",name:"value",children:Object(y.jsx)(c.Input,{type:s?"number":"text",placeholder:"Enter an amounts"})})})]})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.InputFormField,{label:"Funding agency",name:"agency",children:Object(y.jsx)(c.Input,{type:"text",placeholder:"Enter a funding agency"})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.InputFormField,{label:"Grant reference",name:"grantNumber",children:Object(y.jsx)(c.Input,{type:"text",placeholder:"Enter reference"})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.AdvancedSelectFormField,{name:"principalInvestigators",label:"Principal investigators",placeholder:"Enter names of principal investigators ",children:Object(y.jsx)(Ki,{})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.AdvancedSelectFormField,{name:"coInvestigators",label:"Co-investigators",placeholder:"Enter names of co-investigators ",children:Object(y.jsx)(Ki,{})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.AdvancedSelectFormField,{name:"otherResearchOrganizations",label:"Secondary institutions",placeholder:"Enter an institution",children:Object(y.jsx)(Qi,{})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(qi.a,{label:"Research institution",placeholder:"Enter an institution"})})]}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(c.Flex,{justifyContent:"flex-end",children:Object(y.jsx)(c.Flex.Item,{children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsx)(c.Button,{size:"s",color:"blue",theme:"bare",onClick:i,type:"button",children:"Cancel"}),Object(y.jsx)(c.Button,{size:"s",type:"submit",status:Ji({submitting:n}),children:"Save"})]})})})})]})})}));const Zi=["form"],eo=Object(ne.a)({validate:Object(re.createValidator)({name:{presence:{message:"Enter a title"}},date:{presence:{message:"Enter a date"}},value:{format:{message:"Please enter a valid number",pattern:/^[0-9,]+$/}}})})(Xi);var to=Object(u.a)(Object(D.connect)((e,{form:t})=>({formValues:Object(ie.a)(t)(e),isFormValid:Object(oe.a)(t)(e)})),Object(p.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}))(e=>{let{form:t}=e,n=Object(te.a)(e,Zi);return Object(y.jsx)(eo,Object(i.a)({form:t},n))});let no;const io=({onSubmit:e,onReject:t,currencies:n})=>Object(y.jsx)(to,{form:"ProfileAwardCreate",onSubmit:e,initialValues:{awardType:Bi.a},onCancel:t,currencies:n});io.defaultProps={initialValues:{}};var oo=Object(u.a)(Object(D.connect)(),it.b,Object(l.withQuery)(Object(l.gql)(no||(no=(e=>e)`query ProfileAwardCreate {
  currencies
  __typename
}
`)),{preloader:P.a}))(io);let ro,so=e=>e;let ao,co=e=>e;let lo;var uo=Object(u.a)(Object(D.connect)(),it.b,Object(l.withQuery)(Object(l.gql)(lo||(lo=(e=>e)`query ProfileAwardEdit($id: ID!) {
  currencies
  vita(id: $id) {
    ... on VitaAward {
      name
      date
      id
      type
      endDate
      value
      currency
      agency
      grantNumber
      leadResearchOrganization {
        ... on Institution {
          id
          name
          __typename
        }
        name
        __typename
      }
      otherResearchOrganizations {
        ... on Institution {
          id
          name
          __typename
        }
        name
        __typename
      }
      principalInvestigators {
        fullName
        __typename
      }
      coInvestigators {
        fullName
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e,currencies:t})=>{var n,i;return{initialValues:{awardType:null==e?void 0:e.type,name:null==e?void 0:e.name,date:null!=e&&e.date?Object(bt.default)(Object(mt.a)(null==e?void 0:e.date),"MMMM yyyy"):"",endDate:null!=e&&e.endDate?Object(bt.default)(Object(mt.a)(null==e?void 0:e.endDate),"MMMM yyyy"):"",value:null==e?void 0:e.value,currency:null==e?void 0:e.currency,agency:null==e?void 0:e.agency,grantNumber:null==e?void 0:e.grantNumber,institution:null==e||null===(n=e.leadResearchOrganization)||void 0===n?void 0:n.name,institutionId:null==e||null===(i=e.leadResearchOrganization)||void 0===i?void 0:i.id,principalInvestigators:null==e?void 0:e.principalInvestigators,coInvestigators:null==e?void 0:e.coInvestigators,otherResearchOrganizations:null==e?void 0:e.otherResearchOrganizations},currencies:t}},preloader:P.a}),Object(p.r)({onSubmit:({onFinishEdit:e,dispatch:t,mutate:n,context:i,accountId:o,id:r})=>({values:s})=>{const a=parseInt(s.value),c={id:r,accountId:o,awardType:s.awardType,title:s.name,startDate:s.startDate?s.startDate:s.date,endDate:s.endDate,value:s.value?a:null,currency:s.currency,agency:s.agency,grantNumber:s.grantNumber,leadResearchOrganization:s.institution,leadResearchOrganizationId:s.institutionId,principalInvestigators:s.principalInvestigators?s.principalInvestigators.map(e=>({id:e.id?e.id:null,name:e.fullName})):null,coInvestigators:s.coInvestigators?s.coInvestigators.map(e=>({id:e.id?e.id:null,name:e.fullName})):null,otherResearchOrganizations:s.otherResearchOrganizations?s.otherResearchOrganizations.map(e=>({id:e.id?Mi.a.parse(e.id).id:null,name:e.name})):null};return n(((e,t)=>({mutation:Object(l.gql)(ao||(ao=co`mutation UpdateVitaAward($input: VitaAwardInput!, $context: String!) {
  updateVitaAward(input: $input, context: $context) {
    id
    ...VitaAwardFragment
    __typename
  }
  __typename
}
`)),variables:{input:e,context:t}}))(c,i)).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{}))),Object(f.b)(e)}).catch(e=>{t(Object(J.notifyAboutError)(e))})}}))(({form:e,onSubmit:t,initialValues:n,onFinishEdit:i,currencies:o})=>Object(y.jsx)(to,{form:e,onSubmit:t,initialValues:n,onCancel:i,currencies:o}));var po=({setItemMode:e,onRemove:t})=>Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsxs)(c.Button,{type:"button",theme:"bare",icon:"pencil",onClick:()=>e(Fe),children:[Object(y.jsx)(c.Button.Icon,{identifier:"pencil"}),Object(y.jsx)(c.Button.Label,{children:"Edit"})]}),Object(y.jsxs)(c.Button,{type:"button",theme:"bare",icon:"close",onClick:t,children:[Object(y.jsx)(c.Button.Icon,{identifier:"close"}),Object(y.jsx)(c.Button.Label,{children:"Remove"})]})]}),ho=n(1023);let bo;var mo=Object(l.withQuery)(Object(l.gql)(bo||(bo=(e=>e)`query ProfileAwardsListItem($id: ID!) {
  vita(id: $id) {
    ...VitaAwardItemName @embed
    ...VitaAwardItemBadge @embed
    ...VitaAwardItemDate @embed
    ...VitaAwardItemPrincipalInvestigators @embed
    ...VitaAwardItemCoInvestigators @embed
    ...VitaAwardItemFunding @embed
    ...VitaAwardItemResearchOrganization @embed
    ...VitaAwardItemFundingOrganisation @embed
    ...VitaAwardItemGrantNumber @embed
    ...VitaAwardItemOtherResearchOrganizations @embed
    __typename
  }
  __typename
}
`)))(({id:e})=>Object(y.jsxs)(c.EntityItem,{children:[Object(y.jsx)(ho.g,{id:e}),Object(y.jsx)(c.EntityItemBadges,{children:Object(y.jsx)(ho.a,{id:e})}),Object(y.jsx)(c.EntityItemMetaItems,{children:Object(y.jsx)(ho.c,{id:e})}),Object(y.jsx)(ho.d,{id:e}),Object(y.jsx)(ho.e,{id:e}),Object(y.jsx)(ho.f,{id:e}),Object(y.jsx)(ho.j,{id:e}),Object(y.jsx)(ho.i,{id:e}),Object(y.jsx)(ho.b,{id:e}),Object(y.jsx)(ho.h,{id:e})]}));var jo=Object(u.a)(Object(D.connect)(),Object(l.withMutation)(),Object(p.r)({onRemove:({mutate:e,dispatch:t,id:n,accountId:i,limit:o})=>()=>e(((e,{accountId:t,after:n,first:i})=>({mutation:Object(l.gql)(ro||(ro=so`mutation DeleteVitaAward($id: ID!) {
  deleteVitaAward(id: $id) {
    id
    __typename
  }
  __typename
}
`)),variables:{id:e},update:(o,{fieldKey:r})=>{const s=r("account",{id:t}),a=r("awards",{after:n,first:i}),c=r("awards",{after:0,first:0});return{[s]:{vitae:{[a]:{nodes:{$remove:{id:e,__typename:"VitaAward"}}},[c]:{pageInfo:{totalItems:{$decrementBy:1}}}}}}}}))(n,{first:o,after:0,accountId:i})).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{})))}).catch(e=>{t(Object(J.notifyAboutError)(e))})}))(({id:e,onRemove:t})=>Object(y.jsx)(ut,{children:Object(y.jsx)(dt,{children:({itemMode:n,setItemMode:i})=>n===Te?Object(y.jsxs)(c.Stack,{gutter:"xs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(mo,{id:e})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(po,{setItemMode:i,onRemove:t})})]}):n===Fe?Object(y.jsx)(uo,{id:e,form:"ProfileAwardEdit_"+e,onFinishEdit:()=>i(Te),context:"profileExperience"}):Object(y.jsx)(mo,{id:e})})}));let fo;var Oo=Object(l.withQuery)(Object(l.gql)(fo||(fo=(e=>e)`query ProfileAwardsList($id: ID!, $limit: Int!) {
  account(id: $id) {
    id
    vitae {
      awards(after: 0, first: $limit) {
        nodes {
          id
          ...ProfileAwardsListItem @embed
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
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{awardItems:null!==(t=null==e||null===(n=e.vitae)||void 0===n||null===(i=n.awards)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[]}}})(({awardItems:e,limit:t,id:n})=>Object(y.jsx)(c.Stack,{showDivider:!0,gutter:"xxl",children:e.map(e=>Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(jo,{id:e.id,accountId:n,limit:t,type:e.type})},e.id))}));var go=()=>Object(y.jsx)(Re,{children:({listMode:e,setListMode:t,locked:n})=>Object(y.jsx)(c.Flex.Item,{children:e===Ae?Object(y.jsxs)(c.Button,{type:"button",theme:"bare",size:"s",color:"grey",onClick:()=>t(De),children:[Object(y.jsx)(c.Button.Label,{children:"Edit"}),Object(y.jsx)(c.Button.Icon,{identifier:"pencil"})]}):Object(y.jsx)(c.Button,{type:"button",theme:"solid",size:"s",color:"blue",status:n?"disabled":"",onClick:()=>t(Ae),children:Object(y.jsx)(c.Button.Label,{children:"Finish editing"})})})});let xo;class yo extends o.Component{constructor(...e){super(...e),this.state={limit:this.props.limit,isFormVisible:!1},this.handleClick=()=>{const{totalItems:e}=this.props;this.setState({limit:e})},this.handleSubmit=({values:e})=>{const{limit:t,mutate:n,dispatch:i}=this.props,o=parseInt(e.value);return n(((e,t,{after:n,first:i})=>({mutation:Object(l.gql)(Ni||(Ni=Li`mutation CreateVitaAward($input: VitaAwardInput!, $context: String!) {
  createVitaAward(input: $input, context: $context) {
    id
    ...VitaAwardFragment
    __typename
  }
  __typename
}
`)),variables:{input:e,context:t},update:(t,{fieldKey:o})=>{const r=o("account",{id:e.accountId}),s=o("awards",{after:n,first:i}),a=o("awards",{after:0,first:0});return{[o("award",{id:t.createVitaAward.id})]:t.createVitaAward,[r]:{vitae:{[s]:{nodes:{$unshift:t.createVitaAward}},[a]:{pageInfo:{totalItems:{$incrementBy:1}}}}}}}}))({accountId:this.props.id,awardType:e.awardType,title:e.name,startDate:e.startDate?e.startDate:e.date,endDate:e.endDate,value:e.value?o:null,currency:e.currency,agency:e.agency,grantNumber:e.grantNumber,leadResearchOrganization:e.institution,leadResearchOrganizationId:e.institutionId,principalInvestigators:e.principalInvestigators?e.principalInvestigators.map(e=>({id:e.id?e.id:null,name:e.fullName})):null,coInvestigators:e.coInvestigators?e.coInvestigators.map(e=>({id:e.id?e.id:null,name:e.fullName})):null,otherResearchOrganizations:e.otherResearchOrganizations?e.otherResearchOrganizations.map(e=>({id:e.id?Mi.a.parse(e.id).id:null,name:e.name})):null},"profileExperience",{first:t,after:0})).then(()=>{i(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{}))),this.setState({isFormVisible:!1})}).catch(e=>{i(Object(J.notifyAboutError)(e))})}}renderAddNewAwardInput(){return this.state.isFormVisible?Object(y.jsx)(oo,{onSubmit:this.handleSubmit,onReject:()=>this.setState({isFormVisible:!1}),context:"profileExperience"}):Object(y.jsxs)(c.Button,{theme:"ghost",size:"s",color:"blue",type:"button",onClick:()=>this.setState({isFormVisible:!0}),children:[Object(y.jsx)(c.Button.Icon,{identifier:"plus-circle"}),Object(y.jsx)(c.Button.Label,{children:"Add new award"})]})}render(){const{id:e,totalItems:t,isSelf:n,limit:i}=this.props,{limit:o,isFormVisible:r}=this.state,s=0===t;return s&&!n?null:Object(y.jsx)(Ne,{children:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsxs)(ye.a,{children:[Object(y.jsx)(ye.a.Label,{children:"Grants and awards"}),n&&!s&&Object(y.jsx)(ye.a.CustomActions,{children:Object(y.jsx)(go,{})})]})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(it.a,{accountId:e,children:s?Object(y.jsx)(y.Fragment,{children:r?Object(y.jsx)(oo,{onReject:()=>this.setState({isFormVisible:!1}),onSubmit:this.handleSubmit,context:"profileExperience"}):Object(y.jsx)(K.b,{headline:"Add your grants and awards",note:"Add the grants and scholarships you've received, and showcase your achievements.",imageSrc:Ri,onClick:()=>this.setState({isFormVisible:!0})})}):Object(y.jsx)(Re,{children:({listMode:t})=>Object(y.jsx)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Oo,{id:e,limit:o,listMode:t,onSubmit:this.handleSubmit})},"list")].concat(t===Te?[Object(y.jsx)(c.Stack.Item,{children:this.renderAddNewAwardInput()},"create")]:[])})})})}),t>i&&o!==t?Object(y.jsx)(c.Card.Footer,{children:Object(y.jsx)(c.Button,{type:"button",theme:"bare",width:"full",color:"grey",onClick:this.handleClick,children:"Show all"})}):null]})})}}yo.displayName="ProfileAwards";var vo=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(xo||(xo=(e=>e)`query ProfileAwards($id: ID!, $limit: Int!) {
  account(id: $id) {
    id
    isSelf
    vitae {
      awardsForTotalItems: awards(after: 0, first: 0) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileAwardsList @embed(limit: $limit)
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o;return{totalItems:null!==(t=null==e||null===(n=e.vitae)||void 0===n||null===(i=n.awardsForTotalItems)||void 0===i||null===(o=i.pageInfo)||void 0===o?void 0:o.totalItems)&&void 0!==t?t:0,isSelf:null==e?void 0:e.isSelf}}}))(yo),Io=IMAGES_STATIC_URL+"m/439246922191158/images/profile/add-education.svg";let _o;Object(l.gql)(_o||(_o=(e=>e)`fragment vitaEducationFragment on Education {
  id
  name
  startDate
  endDate
  fieldOfStudy
  degree
  institution {
    id
    name
    __typename
  }
  country {
    name
    ... on Country {
      id
      __typename
    }
    __typename
  }
  city {
    name
    ... on City {
      id
      __typename
    }
    __typename
  }
  __typename
}
`));let wo,So=e=>e;var Po=n(1903);let Co;const ko=Object(l.gql)(Co||(Co=(e=>e)`query ProfileEducationEditFormLayout($id: ID!) {
  institution(id: $id) {
    id
    country {
      ... on Country {
        id
        name
        __typename
      }
      __typename
    }
    cityNew {
      ... on City {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`));class Ao extends o.Component{componentDidUpdate(e){var t,n;const i=null===(t=this.props.formValues)||void 0===t?void 0:t.institutionId,o=null==e||null===(n=e.formValues)||void 0===n?void 0:n.institutionId;null!=i&&i!==o&&this.props.rigel.query(ko,{id:i}).then(e=>{var t,n,i,o,r;const s=null===(t=e.data)||void 0===t?void 0:t.institution;this.props.dispatch(Object($e.change)(this.props.form,"country",null==s||null===(n=s.country)||void 0===n?void 0:n.name)),this.props.dispatch(Object($e.change)(this.props.form,"countryId",null==s||null===(i=s.country)||void 0===i?void 0:i.id)),this.props.dispatch(Object($e.change)(this.props.form,"city",null==s||null===(o=s.cityNew)||void 0===o?void 0:o.name)),this.props.dispatch(Object($e.change)(this.props.form,"cityId",null==s||null===(r=s.cityNew)||void 0===r?void 0:r.id))})}render(){const{handleSubmit:e,form:t,doSubmit:n,submitting:i,allDegrees:o,initialValues:r,onCancel:s}=this.props;return Object(y.jsx)("form",{onSubmit:e(n),className:"profile-education-edit-form-layout",children:Object(y.jsxs)(c.FormGroup,{children:[Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(qi.a,{institutionId:r.institutionId,errorReporting:"extended",placeholder:"Enter institution",label:"Institution"})}),Object(y.jsx)(We,{showEndDate:!0,startDateFieldName:"startDate",endDateFieldName:"endDate"}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.InputFormField,{label:"Field of study",name:"fieldOfStudy",children:Object(y.jsx)(c.Input,{type:"text",placeholder:"Enter your field of study"})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(se.AdvancedSelectFormField,{name:"degree",label:"Degree",children:Object(y.jsx)(Po.a,{allDegrees:o,placeholder:"Select a degree"})})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(Ye.a,{form:t})}),Object(y.jsx)(c.FormGroup.Item,{children:Object(y.jsx)(c.Flex,{justifyContent:"flex-end",children:Object(y.jsx)(c.Flex.Item,{children:Object(y.jsxs)(c.ButtonGroup,{children:[Object(y.jsx)(c.Button,{size:"s",color:"blue",theme:"bare",onClick:s,type:"button",children:"Cancel"}),Object(y.jsx)(c.Button,{size:"s",type:"submit",status:i?"busy":null,children:"Save"})]})})})})]})})}}Ao.displayName="ProfileEducationEditFormLayout";var Do=Object(E.withRigel)()(Ao);const Eo=["form"],To=Object(ne.a)({validate:Object(re.createValidator)({institution:{presence:{message:"Add an institution "},length:{minimum:1,tooShort:"Add a a valid institution"}},startDate:{presence:{message:"Add a start date"}},endDate:{presence:{message:"Add an end date"}}})})(Do);var Fo=Object(u.a)(Object(D.connect)((e,{form:t})=>({formValues:Object(ie.a)(t)(e),isFormValid:Object(oe.a)(t)(e)})),Object(p.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}))(e=>{let{form:t}=e,n=Object(te.a)(e,Eo);return Object(y.jsx)(To,Object(i.a)({form:t},n))});let Mo;var Ro=Object(u.a)(Object(D.connect)(),it.b,Object(l.withQuery)(Object(l.gql)(Mo||(Mo=(e=>e)`query ProfileEducationCreate {
  allDegrees {
    id
    ...ProfileDegreeSelect
    __typename
  }
  __typename
}
`)),{mapDataToProps:({allDegrees:e})=>({allDegrees:e}),preloader:P.a}))(({onSubmit:e,allDegrees:t,onReject:n})=>Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{color:"grey-700",children:"Enter details about your education history to add them to your profile."})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Fo,{form:"ProfileEducationCreate",onSubmit:e,allDegrees:t,initialValues:{},onCancel:n})})]}));let No,Lo=e=>e;let Bo,qo=e=>e;let Uo;var $o=Object(u.a)(Object(D.connect)(),it.b,Object(l.withQuery)(Object(l.gql)(Uo||(Uo=(e=>e)`query ProfileEducationEdit($id: ID!) {
  vita(id: $id) {
    ... on Education {
      id
      name
      institution {
        id
        name
        url
        imageUrl
        __typename
      }
      fieldOfStudy
      country {
        name
        ... on Country {
          id
          __typename
        }
        __typename
      }
      city {
        name
        ... on City {
          id
          __typename
        }
        __typename
      }
      degree
      startDate
      endDate
      __typename
    }
    __typename
  }
  allDegrees {
    id
    ...ProfileDegreeSelect
    __typename
  }
  __typename
}
`)),{mapDataToProps:({vita:e,allDegrees:t})=>{var n,i,o,r,s,a,c;return{initialValues:{institution:null!==(n=null==e||null===(i=e.institution)||void 0===i?void 0:i.name)&&void 0!==n?n:null==e?void 0:e.name,institutionId:null==e||null===(o=e.institution)||void 0===o?void 0:o.id,fieldOfStudy:null==e?void 0:e.fieldOfStudy,startDate:null!=e&&e.startDate?Object(bt.default)(Object(mt.a)(null==e?void 0:e.startDate),"MMMM yyyy"):"",endDate:null!=e&&e.endDate?Object(bt.default)(Object(mt.a)(null==e?void 0:e.endDate),"MMMM yyyy"):"",degree:[null==e?void 0:e.degree],country:null==e||null===(r=e.country)||void 0===r?void 0:r.name,countryId:null==e||null===(s=e.country)||void 0===s?void 0:s.id,city:null==e||null===(a=e.city)||void 0===a?void 0:a.name,cityId:null==e||null===(c=e.city)||void 0===c?void 0:c.id},allDegrees:t}},preloader:P.a}),Object(p.r)({onSubmit:({onFinishEdit:e,dispatch:t,mutate:n,context:i,accountId:o,id:r})=>({values:s})=>{const a={id:r,accountId:o,institutionId:s.institutionId,institution:s.institution,fieldOfStudy:s.fieldOfStudy,degree:s.degree.length>0?s.degree[0]:null,startDate:s.startDate,endDate:s.endDate,country:s.country,city:s.city,cityId:s.cityId};return n(((e,t)=>({mutation:Object(l.gql)(Bo||(Bo=qo`mutation UpdateVitaEducation($input: VitaEducationInput!, $context: String!) {
  updateEducationVita(input: $input, context: $context) {
    id
    ...vitaEducationFragment
    __typename
  }
  __typename
}
`)),variables:{input:e,context:t}}))(a,i)).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{}))),Object(f.b)(e)}).catch(e=>{t(Object(J.notifyAboutError)(e)),Object(Kn.default)(e)})}}))(({form:e,onSubmit:t,allDegrees:n,initialValues:i,onFinishEdit:o})=>Object(y.jsxs)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(c.Text,{color:"grey-700",children:"Enter details about your education history to add them to your profile."})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Fo,{form:e,onSubmit:t,allDegrees:n,initialValues:i,onCancel:o})})]})),Vo=n(1267);let zo;var Go=Object(l.withQuery)(Object(l.gql)(zo||(zo=(e=>e)`query ProfileEducationListItem($id: ID!) {
  vita(id: $id) {
    ...VitaEducationItemName @embed
    ...VitaEducationItemLocation @embed
    ...VitaEducationItemDegree @embed
    ...VitaEducationItemFieldOfStudy @embed
    ...VitaEducationItemTimePeriod @embed
    ...VitaEducationItemImage @embed
    __typename
  }
  __typename
}
`)))(({id:e})=>Object(y.jsxs)(c.EntityItem,{children:[Object(y.jsx)(Vo.e,{id:e}),Object(y.jsx)(Vo.d,{id:e}),Object(y.jsx)(Vo.a,{id:e}),Object(y.jsx)(Vo.b,{id:e}),Object(y.jsx)(c.EntityItemMetaItems,{children:Object(y.jsx)(Vo.f,{id:e})}),Object(y.jsx)(Vo.c,{id:e})]}));var Qo=Object(u.a)(Object(D.connect)(),Object(l.withMutation)(),Object(p.r)({onRemove:({mutate:e,dispatch:t,id:n,accountId:i,limit:o})=>()=>e(((e,{accountId:t,after:n,first:i})=>({mutation:Object(l.gql)(No||(No=Lo`mutation DeleteVitaEducation($id: ID!) {
  deleteEducationVita(id: $id) {
    id
    __typename
  }
  __typename
}
`)),variables:{id:e},update:(o,{fieldKey:r})=>{const s=r("account",{id:t}),a=r("education",{after:n,first:i}),c=r("education",{after:0,first:0});return{[s]:{vitae:{[a]:{nodes:{$remove:{id:e,__typename:"Education"}}},[c]:{pageInfo:{totalItems:{$decrementBy:1}}}}}}}}))(n,{first:o,after:0,accountId:i})).then(()=>{t(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{})))}).catch(e=>{t(Object(J.notifyAboutError)(e))})}))(({id:e,onRemove:t})=>Object(y.jsx)(ut,{children:Object(y.jsx)(dt,{children:({itemMode:n,setItemMode:i})=>n===Te?Object(y.jsxs)(c.Stack,{gutter:"xs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Go,{id:e})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(po,{setItemMode:i,onRemove:t})})]}):n===Fe?Object(y.jsx)($o,{id:e,form:"ProfileEducationEdit_"+e,onFinishEdit:()=>i(Te),context:"profileExperience"}):Object(y.jsx)(Go,{id:e})})}));let Ho;class Wo extends o.Component{render(){const{educationItems:e,limit:t,id:n}=this.props;return Object(y.jsx)(c.Stack,{showDivider:!0,gutter:"xxl",children:e.map(e=>Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Qo,{id:e.id,accountId:n,limit:t})},e.id))})}}Wo.displayName="ProfileEducationList";var Yo=Object(l.withQuery)(Object(l.gql)(Ho||(Ho=(e=>e)`query ProfileEducationList($id: ID!, $limit: Int!) {
  account(id: $id) {
    id
    vitae {
      education(after: 0, first: $limit) {
        nodes {
          id
          ...ProfileEducationListItem @embed
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
`)),{mapDataToProps:({account:e})=>{var t,n,i;return{educationItems:null!==(t=null==e||null===(n=e.vitae)||void 0===n||null===(i=n.education)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[]}}})(Wo);let Ko;class Jo extends o.Component{constructor(...e){super(...e),this.state={limit:this.props.limit,isFormVisible:!1},this.handleClick=()=>{const{totalItems:e}=this.props;this.setState({limit:e})},this.handleSubmit=({values:e})=>{const{limit:t,mutate:n,dispatch:i}=this.props;return n(((e,t,{after:n,first:i})=>({mutation:Object(l.gql)(wo||(wo=So`mutation CreateVitaEducation($input: VitaEducationInput!, $context: String!) {
  createEducationVita(input: $input, context: $context) {
    id
    ...vitaEducationFragment
    __typename
  }
  __typename
}
`)),variables:{input:e,context:t},update:(t,{fieldKey:o})=>{const r=o("account",{id:e.accountId}),s=o("education",{after:n,first:i}),a=o("education",{after:0,first:0});return{[o("education",{id:t.createEducationVita.id})]:t.createEducationVita,[r]:{vitae:{[s]:{nodes:{$unshift:t.createEducationVita}},[a]:{pageInfo:{totalItems:{$incrementBy:1}}}}}}}}))({accountId:this.props.id,institutionId:e.institutionId,institution:e.institution,fieldOfStudy:e.fieldOfStudy,degree:null!=e.degree&&e.degree.length>0?e.degree[0]:null,startDate:e.startDate,endDate:e.endDate,country:e.country,city:e.city,cityId:e.cityId},"profileExperience",{first:t,after:0})).then(()=>{i(Object(J.pushAlert)(()=>Object(y.jsx)(ee.c,{}))),this.setState({isFormVisible:!1})}).catch(e=>{i(Object(J.notifyAboutError)(e))})}}renderAddNewEducationInput(){return this.state.isFormVisible?Object(y.jsx)(Ro,{onSubmit:this.handleSubmit,onReject:()=>this.setState({isFormVisible:!1}),context:"profileExperience"}):Object(y.jsxs)(c.Button,{theme:"ghost",size:"s",color:"blue",type:"button",onClick:()=>this.setState({isFormVisible:!0}),children:[Object(y.jsx)(c.Button.Icon,{identifier:"plus-circle"}),Object(y.jsx)(c.Button.Label,{children:"Add new education"})]})}render(){const{id:e,totalItems:t,isSelf:n,limit:i}=this.props,{limit:o,isFormVisible:r}=this.state,s=0===t;return s&&!n?null:Object(y.jsx)(Ne,{children:Object(y.jsxs)(c.Card,{spacing:"m",children:[Object(y.jsx)(c.Card.Header,{children:Object(y.jsxs)(ye.a,{children:[Object(y.jsx)(ye.a.Label,{children:"Education"}),n&&!s&&Object(y.jsx)(ye.a.CustomActions,{children:Object(y.jsx)(go,{})})]})}),Object(y.jsx)(c.Card.Body,{children:Object(y.jsx)(it.a,{accountId:e,children:s?Object(y.jsx)(y.Fragment,{children:r?Object(y.jsx)(Ro,{onReject:()=>this.setState({isFormVisible:!1}),onSubmit:this.handleSubmit,context:"profileExperience"}):Object(y.jsx)(K.b,{headline:"Add your education",note:"Add information about your studies so that others can understand your research and background.",imageSrc:Io,onClick:()=>this.setState({isFormVisible:!0})})}):Object(y.jsx)(Re,{children:({listMode:t})=>Object(y.jsx)(c.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Yo,{id:e,limit:o,listMode:t,onSubmit:this.handleSubmit})},"list")].concat(t===Te?[Object(y.jsx)(c.Stack.Item,{children:this.renderAddNewEducationInput()},"create")]:[])})})})}),t>i&&o!==t?Object(y.jsx)(c.Card.Footer,{children:Object(y.jsx)(c.Button,{type:"button",theme:"bare",width:"full",color:"grey",onClick:this.handleClick,children:"Show all"})}):null]})})}}Jo.displayName="ProfileEducation";var Xo=Object(u.a)(Object(D.connect)(),Object(l.withQuery)(Object(l.gql)(Ko||(Ko=(e=>e)`query ProfileEducation($id: ID!, $limit: Int!) {
  account(id: $id) {
    id
    isSelf
    vitae {
      educationForTotalItems: education(after: 0, first: 0) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileEducationList @embed(limit: $limit)
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o;return{totalItems:null!==(t=null==e||null===(n=e.vitae)||void 0===n||null===(i=n.educationForTotalItems)||void 0===i||null===(o=i.pageInfo)||void 0===o?void 0:o.totalItems)&&void 0!==t?t:0,isSelf:null==e?void 0:e.isSelf}}}))(Jo),Zo=n(1034);var er=Object(p.b)()(({stack:e})=>Object(y.jsx)(Zo.a,{widgetId:e}));n(5381);let tr,nr=()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(579)]).then(n.bind(null,1686)),ir=()=>Promise.all([n.e(13),n.e(591)]).then(n.bind(null,6545));const or=new a.a("profile-overview");t.a=Object(u.a)(Object(p.b)(),Object(l.withQuery)(Object(l.gql)(tr||(tr=(e=>e)`query ProfileOverview($accountId: ID!, $isSelf: Boolean!, $limit: Int!) {
  account(id: $accountId) {
    id
    accountKey
    profileSharedConnections: sharedConnections(after: 0, first: 0) {
      pageInfo {
        totalItems
        __typename
      }
      __typename
    }
    profile {
      affiliation {
        institution {
          name
          __typename
        }
        __typename
      }
      additionalAffiliationsTotalItems: additionalAffiliations(after: 0, first: 0) {
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      __typename
    }
    ...ProfileOverviewSpotlight @embed @include(if: $isSelf)
    ...AccountJournalRoles @embed
    ...ProfileAboutMe @embed
    ...ProfileAffiliations @embed(limit: 2)
    ...ProfileEducation @embed(limit: $limit)
    ...ProfileAwards @embed(limit: $limit)
    ...ProfileAcademic @embed
    ...ProfileAdvisors @embed
    ...ProfileLabBox @embed
    ...ProfileBusinessCard @embed
    ...SharedConnections @embed
    ...PeopleYouMightKnow @embed
    ...PeopleWhoCitedMe @embed
    ...ProfileJournalFollowing @embed
    __typename
  }
  allDegrees {
    id
    ...ProfileDegreeSelect
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{accountKey:e,profile:t,profileSharedConnections:n},allDegrees:i},{isSelf:o})=>{var r,s,a,c,l;return{accountKey:e,allDegrees:i,showProfileAffiliations:(null==t||null===(r=t.additionalAffiliationsTotalItems)||void 0===r||null===(s=r.pageInfo)||void 0===s?void 0:s.totalItems)>0||!(null==t||null===(a=t.affiliation)||void 0===a||null===(c=a.institution)||void 0===c||!c.name)||o,hasSharedConnections:(null==n||null===(l=n.pageInfo)||void 0===l?void 0:l.totalItems)>0}}}))(({accountId:e,triggerSendMessage:t,dispatch:n,accountKey:r,allDegrees:s,context:a,promoStack:l,profileOverviewProjectList:u,showProfileAffiliations:p,isSelf:f,relatedResearchers:O,limit:g,sharedSkillsResearchers:x,profileOverviewFeaturedResearchRight:v,hasSharedConnections:I,shouldScrollToSpotlight:_,spotlightRef:w,iosAcquisitionMobilePromoWidgetId:S,appDownloadPromos:P,shouldOpenJournalFollowingModal:C})=>{const[k]=Object(o.useState)(f&&C||!1);return Object(o.useEffect)(()=>{t&&n(Object(b.mountModal)(()=>Object(y.jsx)(d.a,{url:"messages.MessageCreateModal.html",widgetParams:{account_key:r},__internalLoadComponent:nr}))),Object(h.c)(h.a.VIEW_PAGE_PROFILE,null,{accountId:e})},[t,n,r,e]),Object(o.useEffect)(()=>{var e;f&&_&&(null===(e=w.current)||void 0===e||e.scrollIntoView())},[]),Object(y.jsx)(H.a,{source:W.t,children:Object(y.jsxs)("div",Object(i.a)(Object(i.a)({},or()),{},{children:[Object(y.jsxs)("div",Object(i.a)(Object(i.a)({},or("grid")),{},{children:[Object(y.jsx)("div",Object(i.a)(Object(i.a)({},or("box-top")),{},{children:Object(y.jsxs)(c.Stack,{children:[f&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(mn,{accountId:e,allDegrees:s,context:a})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(wn.a,{accountId:e,context:a})}),f&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Fi,{accountId:e,spotlightRef:w})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(d.a,{url:"profile.ProfileFeaturedResearchItems.html",widgetParams:{accountId:e,variant:"fulltext"},__internalLoadComponent:ir})})]})})),Object(y.jsx)("div",Object(i.a)(Object(i.a)({},or("box-right")),{},{children:Object(y.jsx)(H.a,{source:W.q,children:Object(y.jsxs)(c.Stack,{children:[l&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(er,{widgetId:l})}),I&&!f&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)($,{accountId:e,context:a})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Q,{accountId:e,context:a})}),x&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Wn,{widgetId:x})}),v&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Cn,{widgetId:v})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Sn.a,{accountId:e,context:a,dispatch:n})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Pe.a,{id:e})}),f&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(L,{accountId:e,context:a})}),O&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)($n,{widgetId:O})}),f&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(_n,{id:e,isModalVisible:k})})]})})})),Object(y.jsx)("div",Object(i.a)(Object(i.a)({},or("box-bottom")),{},{children:Object(y.jsxs)(c.Stack,{children:[u&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(kn.a,{widgetId:u})}),p&&Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(tn,{accountId:e,limit:2})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Se.a,{accountId:e,context:a})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(Xo,{id:e,limit:g})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(vo,{id:e,limit:g})}),Object(y.jsx)(c.Stack.Item,{children:Object(y.jsx)(we,{id:e})})]})}))]})),Object(y.jsx)("div",{className:"clear"}),S&&Object(y.jsx)(j.a,{widgetId:S}),P&&Object(y.jsx)(m.a,{widgetId:P})]}))})})},3480:function(e,t,n){"use strict";var i=n(236),o=n.n(i),r=n(4),s=n(1),a=n(5),c=n(7),l=n(6),d=n(29),u=n(488),p=n(14),h=n(522),b=n(210),m=n(2),j=n(10),f=n(2969),O=n(0);var g=({onReject:e,rejectButtonStatus:t,acceptButtonStatus:n,isLast:i})=>Object(O.jsxs)(s.ButtonGroup,{children:[Object(O.jsx)(s.Button,{type:"button",theme:"bare",onClick:e,status:t,children:"Skip"}),Object(O.jsx)(s.Button,{type:"submit",status:n,children:i?"Save":"Save and continue"})]});const x=["onAccept","onReject","isLast"];class y extends r.Component{render(){const e=this.props,{onAccept:t,onReject:n,isLast:i}=e,o=Object(j.a)(e,x);return Object(O.jsx)(f.a,Object(m.a)({form:"ProfileCompletionModalStepAboutMe_form",onAccept:t,onReject:n,buttonRenderer:e=>Object(O.jsx)(g,Object(m.a)(Object(m.a)({},e),{},{isLast:i}))},o))}}y.displayName="ProfileCompletionModalStepAboutMe";var v=y,I=n(1983),_=n(1984);var w=({accountId:e,onAccept:t,onReject:n,isLast:i,context:o})=>Object(O.jsx)(I.a,{id:e,context:o,onFinishEdit:n,onUpdatedInstitution:t,children:({onSubmit:e,initialValues:t,submitting:o,handleSubmit:r,form:a})=>Object(O.jsxs)("form",{onSubmit:r(e),children:[Object(O.jsx)(s.Modal.Header,{children:Object(O.jsx)(s.Heading,{size:"xl",children:"Update your current affiliation"})}),Object(O.jsx)(s.Modal.Body,{children:Object(O.jsx)(s.FormGroup,{children:Object(O.jsx)(_.a,{form:a,initialValues:t})})}),Object(O.jsx)(s.Modal.Footer,{children:Object(O.jsxs)(s.ButtonGroup,{children:[Object(O.jsx)(s.Button,{type:"button",theme:"bare",onClick:n,status:o?"disabled":"",children:"Skip"}),Object(O.jsx)(s.Button,{type:"submit",status:o?"busy":"",children:i?"Save":"Save and continue"})]})})]})}),S=n(71),P=n(12),C=n(33),k=n(11);let A,D=e=>e;var E=n(714),T=n(713),F=n(884),M=n(17),R=n(1903);const N=({submitting:e})=>e?"busy":null,L=({submitting:e})=>e?"disabled":null,B=({onReject:e,allDegrees:t,handleSubmit:n,doSubmit:i,submitting:o,buttonRenderer:r})=>Object(O.jsxs)("form",{onSubmit:n(i),children:[Object(O.jsx)(s.Modal.Header,{children:Object(O.jsx)(s.Heading,{size:"xl",children:"Update your degree"})}),Object(O.jsx)(s.Modal.Body,{children:Object(O.jsx)(s.FormGroup,{children:Object(O.jsx)(s.FormGroup.Item,{children:Object(O.jsx)(M.AdvancedSelectFormField,{name:"degree",label:"Degree",children:Object(O.jsx)(R.a,{allDegrees:t,placeholder:"Select a degree"})})})})}),Object(O.jsx)(s.Modal.Footer,{children:r({onReject:e,rejectButtonStatus:L({submitting:o}),acceptButtonStatus:N({submitting:o})})})]});B.defaultProps={buttonRenderer:Object(l.n)("ProfileCompletionModalStepDegreeFormLayoutButtons")(({onReject:e,rejectButtonStatus:t,acceptButtonStatus:n})=>Object(O.jsxs)(s.ButtonGroup,{children:[Object(O.jsx)(s.Button,{type:"button",theme:"bare",onClick:e,status:t,children:"Cancel"}),Object(O.jsx)(s.Button,{type:"submit",status:n,children:"Save"})]}))};var q=B,U=Object(c.a)(Object(P.connect)((e,{form:t})=>({formValues:Object(E.a)(t)(e),isFormValid:Object(T.a)(t)(e)})),Object(l.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}),Object(F.a)())(q);let $,V,z=e=>e;const G=["form","initialValues"];Object(a.gql)($||($=z`fragment ProfileCompletionModalStepDegreeContent_degrees on RootQueryType {
  allDegrees {
    id
    ...ProfileDegreeSelect
    __typename
  }
  __typename
}
`));var Q=Object(c.a)(Object(P.connect)(),b.a,Object(a.withQuery)(Object(a.gql)(V||(V=z`query ProfileCompletionModalStepDegreeContent($accountId: ID!) {
  account(id: $accountId) {
    id
    profile {
      degree
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps({account:e}){var t;return{initialValues:{degree:[null==e||null===(t=e.profile)||void 0===t?void 0:t.degree]}}}}),Object(l.r)({onSubmit:({accountId:e,context:t,mutate:n,dispatch:i,onAccept:o,initialValues:r})=>({values:s})=>{const c=s.degree.length>0?s.degree[0]:"";return n(function({id:e,context:t,degree:n}){return{mutation:Object(a.gql)(A||(A=D`mutation UpdateDegree($id: ID!, $context: String!, $degree: String) {
  updateDegree(id: $id, context: $context, degree: $degree) {
    degree
    __typename
  }
  __typename
}
`)),variables:{id:e,context:t,degree:n},update:(t,{fieldKey:i})=>({[i("account",{id:e})]:{profile:{degree:{$set:n}}}})}}({id:e,degree:c,context:t})).then(()=>{i(Object(k.pushAlert)(()=>Object(O.jsx)(C.a,{title:"Degree updated",description:"You successfully updated your degree. "}))),Object(d.b)(o,{initialValues:r,values:s})}).catch(e=>{i(Object(k.notifyAboutError)(e))})}}))(e=>{let{form:t,initialValues:n}=e,i=Object(j.a)(e,G);return Object(O.jsx)(U,Object(m.a)({form:t,initialValues:Object(m.a)({},n)},i))});let H;const W=["accountId","onAccept","onReject","isLast"];var Y=Object(c.a)(Object(a.withQuery)(Object(a.gql)(H||(H=(e=>e)`query ProfileCompletionModalStepDegree {
  ...ProfileCompletionModalStepDegreeContent_degrees
  __typename
}
`)),{preloader:S.b}))(e=>{let{accountId:t,onAccept:n,onReject:i,isLast:o}=e,r=Object(j.a)(e,W);return Object(O.jsx)(Q,Object(m.a)({accountId:t,form:"ProfileCompletionModalStepDegree",onAccept:n,onReject:i,buttonRenderer:e=>Object(O.jsx)(g,Object(m.a)(Object(m.a)({},e),{},{isLast:o}))},r))}),K=IMAGES_STATIC_URL+"m/41033098241491/images/profile/edit/missing-information-1.svg",J=IMAGES_STATIC_URL+"m/44156186931488/images/profile/edit/missing-information-2.svg",X=IMAGES_STATIC_URL+"m/41692951351508/images/profile/edit/missing-information-3.svg";var Z=({totalSteps:e})=>Object(O.jsxs)(O.Fragment,{children:[1===e&&Object(O.jsx)("img",{alt:"Missing information progress",src:K}),2===e&&Object(O.jsx)("img",{alt:"Missing information progress",src:J}),e>=3&&Object(O.jsx)("img",{alt:"Missing information progress",src:X})]});class ee extends r.PureComponent{getHeadline(){const{isRecruiterOrientedVariant:e,careerLevel:t}=this.props,n="Employers and recruiters can now actively search for researchers. Make sure you're representing yourself accurately by keeping your profile up to date.";return e?n:"phdStudent"===t?"Connect with the right researchers by making sure your profile is up to date and accurate.":"postDoc"===t?"Increase your visibility as a researcher by making sure your profile is up to date and accurate.":"professor"===t||"senior"===t?"Showcase your reputation as a researcher by making sure your profile is up to date and accurate.":n}render(){return Object(O.jsx)(s.Text,{size:"l",spacing:"xl",children:Object(O.jsx)("strong",{children:this.getHeadline()})})}}ee.displayName="ProfileCompletionModalStepIntroHeadline";var te=ee;var ne={START:"start",AFFILIATION:"affiliation",DEGREE:"degree",ABOUT_ME:"aboutMe"};const ie=(e,t)=>{if(0===t.length)return null;const n=t.indexOf(e);if(-1===n)return null;const i=n+1;return i>=t.length?null:t[i]},oe=(e,t)=>0!==t.length&&t.indexOf(e)===t.length-1;let re;const se={[ne.ABOUT_ME]:Object(O.jsxs)(s.Flex,{gutter:"xs",alignItems:"center",children:[Object(O.jsx)(s.Flex.Item,{children:Object(O.jsx)(s.Icon,{size:"m",theme:"solid",color:"green",luminosity:"high",identifier:"text-center"})}),Object(O.jsx)(s.Flex.Item,{grow:!0,children:Object(O.jsxs)(s.Stack,{gutter:"xxs",children:[Object(O.jsx)(s.Stack.Item,{children:Object(O.jsx)(s.Text,{size:"l",children:"Introduction"})}),Object(O.jsx)(s.Stack.Item,{children:Object(O.jsx)(s.Text,{color:"grey-700",size:"m",children:"Add your current research focus and interests so others can better understand your work."})})]})})]}),[ne.DEGREE]:Object(O.jsxs)(s.Flex,{gutter:"xs",alignItems:"center",children:[Object(O.jsx)(s.Flex.Item,{children:Object(O.jsx)(s.Icon,{size:"m",theme:"solid",color:"green",luminosity:"high",identifier:"certificate"})}),Object(O.jsx)(s.Flex.Item,{grow:!0,children:Object(O.jsxs)(s.Stack,{gutter:"xxs",children:[Object(O.jsx)(s.Stack.Item,{children:Object(O.jsx)(s.Text,{size:"l",children:"Degree"})}),Object(O.jsx)(s.Stack.Item,{children:Object(O.jsx)(s.Text,{color:"grey-700",size:"m",children:"Add the highest degree you've earned to present yourself accurately."})})]})})]}),[ne.AFFILIATION]:Object(O.jsxs)(s.Flex,{gutter:"xs",alignItems:"center",children:[Object(O.jsx)(s.Flex.Item,{children:Object(O.jsx)(s.Icon,{size:"m",theme:"solid",color:"green",luminosity:"high",identifier:"institution"})}),Object(O.jsx)(s.Flex.Item,{grow:!0,children:Object(O.jsxs)(s.Stack,{gutter:"xxs",children:[Object(O.jsx)(s.Stack.Item,{children:Object(O.jsx)(s.Text,{size:"l",children:"Current affiliation"})}),Object(O.jsx)(s.Stack.Item,{children:Object(O.jsx)(s.Text,{color:"grey-700",size:"m",children:"Tell others about your current role, responsibilities, and where you do your research."})})]})})]})};var ae=Object(c.a)(Object(a.withQuery)(Object(a.gql)(re||(re=(e=>e)`query ProfileCompletionModalStepIntro($id: ID!) {
  account(id: $id) {
    id
    profile {
      careerLevel {
        id
        key
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n;return{careerLevel:null==e||null===(t=e.profile)||void 0===t||null===(n=t.careerLevel)||void 0===n?void 0:n.key}}}))(({onAccept:e,onReject:t,careerLevel:n,steps:i,selectedVariant:o})=>Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.Modal.Header,{children:Object(O.jsxs)(s.Flex,{justifyContent:"space-between",alignItems:"center",gutter:"xxl",children:[Object(O.jsx)(s.Flex.Item,{grow:!0,basis:"0px",children:Object(O.jsx)(s.Heading,{size:"xl",children:1===i.length?"Your profile is missing 1 key piece of information":"Your profile is missing some key information"})}),Object(O.jsx)(s.Flex.Item,{basis:"0px",children:Object(O.jsx)(Z,{totalSteps:i.length})})]})}),Object(O.jsxs)(s.Modal.Body,{children:[Object(O.jsx)(te,{isRecruiterOrientedVariant:"recruiterOriented"===o,careerLevel:n}),Object(O.jsx)(s.Stack,{gutter:"xxl",showDivider:!0,children:i.map(e=>Object(O.jsx)(s.Stack.Item,{children:se[e]},e))})]}),Object(O.jsx)(s.Modal.Footer,{children:Object(O.jsxs)(s.ButtonGroup,{children:[Object(O.jsx)(s.Button,{type:"button",theme:"bare",color:"blue",onClick:t,children:"Not now"}),Object(O.jsx)(s.Button,{type:"button",onClick:e,children:Object(O.jsx)(s.Button.Label,{children:"Update profile"})})]})})]}));let ce;const le={finished:"finished",startAccept:"startAccept",startReject:"startReject",aboutMeSeen:"aboutMeSeen",aboutMeAccept:"aboutMeAccept",aboutMeReject:"aboutMeReject",aboutMeChanged:"aboutMeChanged",affiliationSeen:"affiliationSeen",affiliationAccept:"affiliationAccept",affiliationReject:"affiliationReject",affiliationChanged:"affiliationChanged",degreeSeen:"degreeSeen",degreeAccept:"degreeAccept",degreeReject:"degreeReject",degreeChanged:"degreeChanged"};class de extends r.Component{constructor(...e){super(...e),this.flow=null,this.hasUpdatedProfile=!1,this.hasInstitutionChanged=!1,this.handleCloseModal=()=>{Object(d.b)(this.props.onFinish,{hasInstitutionChanged:this.hasInstitutionChanged}),this.props.onRequestClose()},this.handleAcceptDegree=({initialValues:e,values:t})=>{let n=!1;JSON.stringify(e)!==JSON.stringify(t)&&(n=!0,this.hasUpdatedProfile=!0),this.handleAccept(ne.DEGREE,n)},this.handleAcceptAffiliation=({initialValues:e,values:t})=>{e.professionalInstitutionId===t.professionalInstitutionId&&e.professionalInstitution===t.professionalInstitution||null===t.professionalInstitution||(this.hasInstitutionChanged=!0);let n=!1;JSON.stringify(e)!==JSON.stringify(t)&&(n=!0,this.hasUpdatedProfile=!0),this.handleAccept(ne.AFFILIATION,n)},this.handleAcceptAboutMe=({initialValues:e,values:t})=>{let n=!1;JSON.stringify(e)!==JSON.stringify(t)&&(n=!0,this.hasUpdatedProfile=!0),this.handleAccept(ne.ABOUT_ME,n)}}goToNext(e){const{steps:t}=this.props,n=ie(e,t);n?this.flow.goToStep(n):this.handleCloseModal()}score(e,t,n=!1){const{steps:i,experiment:o}=this.props,r=ie(e,i),s=[o[e+(t.charAt(0).toUpperCase()+t.slice(1))].goal];n&&s.push(o[e+"Changed"].goal),r?s.push(o[r+"Seen"].goal):this.hasUpdatedProfile&&s.push(o[le.finished].goal),Object(p.g)(s)}handleAccept(e,t=!1){this.score(e,"accept",t),this.goToNext(e)}handleReject(e){this.score(e,"reject"),this.goToNext(e)}handleAcceptStart(e){this.score(e,"accept"),this.goToNext(e)}getFlowManagerSteps(){const{id:e,context:t,steps:n,onRequestClose:i,experiment:o}=this.props,{selectedVariant:r}=o,s={[ne.START]:Object(O.jsx)(ae,{id:e,selectedVariant:r,onAccept:()=>this.handleAcceptStart(ne.START),onReject:()=>{Object(p.g)([o[le.startReject].goal]),i()},steps:n.slice(1)})};s[ne.DEGREE]=Object(O.jsx)(Y,{accountId:e,context:t,isLast:oe(ne.DEGREE,n),onAccept:this.handleAcceptDegree,onReject:()=>this.handleReject(ne.DEGREE)}),s[ne.AFFILIATION]=Object(O.jsx)(w,{accountId:e,context:t,isLast:oe(ne.AFFILIATION,n),onAccept:this.handleAcceptAffiliation,onReject:()=>this.handleReject(ne.AFFILIATION)}),s[ne.ABOUT_ME]=Object(O.jsx)(v,{accountId:this.props.id,context:t,isLast:oe(ne.ABOUT_ME,n),onAccept:this.handleAcceptAboutMe,onReject:()=>this.handleReject(ne.ABOUT_ME)});const a={};return n.forEach(e=>{void 0!==s[e]&&(a[e]=s[e])}),a}render(){const{isOpen:e}=this.props;return Object(O.jsx)(s.Modal,{isOpen:e,onRequestClose:this.handleCloseModal,children:Object(O.jsx)(h.a,{ref:e=>this.flow=e,isTransitionEnabled:!1,steps:this.getFlowManagerSteps(),initialStep:ne.START,data:{}})})}}de.displayName="ProfileCompletionModal";t.a=Object(c.a)(Object(l.b)(),Object(a.withQuery)(Object(a.gql)(ce||(ce=(e=>e)`query ProfileCompletionModal($id: ID!) {
  account(id: $id) {
    id
    ...ProfileCompletionModalStepIntro @embed
    __typename
  }
  viewer {
    experiments {
      profile {
        profileCompletionModal {
          finished: goal
          selectedVariant
          startAccept: milestone(name: "goalProfileCompletionModalStepStartAccept")
          startReject: milestone(name: "goalProfileCompletionModalStepStartReject")
          aboutMeSeen: milestone(name: "goalProfileCompletionModalStepAboutMetSeen")
          aboutMeAccept: milestone(name: "goalProfileCompletionModalStepAboutMeAccept")
          aboutMeReject: milestone(name: "goalProfileCompletionModalStepAboutMeReject")
          aboutMeChanged: milestone(name: "goalProfileCompletionModalStepAboutMeChanged")
          affiliationSeen: milestone(name: "goalProfileCompletionModalStepAffiliationSeen")
          affiliationAccept: milestone(name: "goalProfileCompletionModalStepAffiliationAccept")
          affiliationReject: milestone(name: "goalProfileCompletionModalStepAffiliationReject")
          affiliationChanged: milestone(name: "goalProfileCompletionModalStepAffiliationChanged")
          degreeSeen: milestone(name: "goalProfileCompletionModalStepDegreeSeen")
          degreeAccept: milestone(name: "goalProfileCompletionModalStepDegreeAccept")
          degreeReject: milestone(name: "goalProfileCompletionModalStepDegreeReject")
          degreeChanged: milestone(name: "goalProfileCompletionModalStepDegreeChanged")
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
`)),{mapDataToProps:({viewer:e})=>{var t,n,i,r,s;return{experiment:o()({},Object(u.b)(null==e||null===(t=e.experiments)||void 0===t||null===(n=t.profile)||void 0===n?void 0:n.profileCompletionModal,Object.values(le)),{selectedVariant:null==e||null===(i=e.experiments)||void 0===i||null===(r=i.profile)||void 0===r||null===(s=r.profileCompletionModal)||void 0===s?void 0:s.selectedVariant})}}}),b.a)(de)},3489:function(e,t,n){"use strict";var i=n(12),o=n(5),r=n(213),s=n(7),a=n(6),c=n(11),l=n(29);n(2860);let d,u=e=>e;var p=n(1042),h=n(1282),b=n(2),m=n(10),j=n(884),f=n(714),O=n(713),g=n(1),x=n(17),y=n(105),v=n.n(y),I=n(4),_=n(313),w=n(0);let S;const P=Object(o.gql)(S||(S=(e=>e)`query AdvisorsSelectorFormField($query: String = "") {
  advisorSuggestions(query: $query) {
    id
    imageUrl
    fullName
    __typename
  }
  __typename
}
`));class C extends I.Component{constructor(...e){super(...e),this.inputValue="",this.state={suggestions:this.props.rigel.bindQuery(P,e=>this.setState({suggestions:e}))},this.renderItem=({imageUrl:e,fullName:t})=>Object(w.jsxs)(g.PersonInlineItem,{children:[Object(w.jsx)(g.PersonInlineItem.Image,{alt:t,imageUrl:e}),Object(w.jsx)(g.PersonInlineItem.Fullname,{children:t})]}),this.filterOptionsMethod=(e,t)=>(this.debouncedQueryUpdate(t),this.inputValue=t,e.concat([{id:null,fullName:t}])),this.debouncedQueryUpdate=v()(e=>this.state.suggestions.update({query:e}),200)}render(){var e,t,n,i,o,r;return Object(w.jsx)(g.AdvancedSelect,Object(b.a)({options:this.state.suggestions.isComplete()&&(null===(e=null===(t=this.state.suggestions)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.advisorSuggestions)||void 0===e||e)&&null!==(i=null===(o=this.state.suggestions)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.advisorSuggestions)&&void 0!==i?i:[],renderValue:this.renderItem,renderOption:this.renderItem,multipleValues:!0,retainOptions:!1,filterConfig:{method:this.filterOptionsMethod}},this.props))}}C.displayName="AdvisorsSelectorFormField";var k=Object(s.a)(Object(i.connect)(),Object(_.withRigel)())(C);var A=({handleSubmit:e,doSubmit:t,submitting:n,onCancel:i})=>Object(w.jsx)("form",{onSubmit:e(t),children:Object(w.jsxs)(g.FormGroup,{children:[Object(w.jsx)(g.FormGroup.Item,{children:Object(w.jsx)(x.AdvancedSelectFormField,{name:"currentAdvisors",label:"Current advisors",placeholder:"Select or enter name",children:Object(w.jsx)(k,{})})}),Object(w.jsx)(g.FormGroup.Item,{children:Object(w.jsx)(x.AdvancedSelectFormField,{name:"pastAdvisors",label:"Past advisors",placeholder:"Select or enter name",children:Object(w.jsx)(k,{})})}),Object(w.jsx)(g.FormGroup.Item,{children:Object(w.jsx)(g.Flex,{justifyContent:"flex-end",children:Object(w.jsx)(g.Flex.Item,{children:Object(w.jsxs)(g.ButtonGroup,{children:[Object(w.jsx)(g.Button,{size:"s",color:"blue",theme:"bare",onClick:i,type:"button",children:"Cancel"}),Object(w.jsx)(g.Button,{size:"s",type:"submit",status:n?"busy":null,children:"Save"})]})})})})]})});const D=["form"],E=Object(j.a)()(A);var T=Object(s.a)(Object(i.connect)((e,{form:t})=>({formValues:Object(f.a)(t)(e),isFormValid:Object(O.a)(t)(e)})),Object(a.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}))(e=>{let{form:t}=e,n=Object(m.a)(e,D);return Object(w.jsx)(E,Object(b.a)({form:t},n))});let F;t.a=Object(s.a)(Object(i.connect)(),p.b,Object(o.withQuery)(Object(o.gql)(F||(F=(e=>e)`query ProfileAdvisorsEdit($id: ID!) {
  account(id: $id) {
    id
    advisors {
      current(first: 500) {
        nodes {
          id
          target {
            ... on Account {
              id
              image {
                url
                __typename
              }
              fullName
              __typename
            }
            ... on Author {
              id
              imageUrl
              fullName
              __typename
            }
            ... on PersonFullName {
              fullName
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      past(first: 500) {
        nodes {
          id
          target {
            ... on Account {
              id
              image {
                url
                __typename
              }
              fullName
              __typename
            }
            ... on Author {
              id
              imageUrl
              fullName
              __typename
            }
            ... on PersonFullName {
              fullName
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
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o;const r=(null==e||null===(t=e.advisors)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.nodes)||[],s=(null==e||null===(i=e.advisors)||void 0===i||null===(o=i.past)||void 0===o?void 0:o.nodes)||[];return{initialValues:{currentAdvisors:r.filter(e=>null!==e.target).map(e=>{var t;return{id:e.target.id||null,imageUrl:(null===(t=e.target.image)||void 0===t?void 0:t.url)||e.target.imageUrl,fullName:e.target.fullName}}),pastAdvisors:s.filter(e=>null!==e.target).map(e=>{var t;return{id:e.target.id||null,imageUrl:(null===(t=e.target.image)||void 0===t?void 0:t.url)||e.target.imageUrl,fullName:e.target.fullName}})}}},preloader:r.a}),Object(a.r)({onSubmit:({onReject:e,dispatch:t,mutate:n,id:i,context:r,forceRefetch:s})=>({values:a})=>{const p={accountId:i,currentAdvisors:a.currentAdvisors.map(e=>({id:e.id||null,fullName:e.fullName})),pastAdvisors:a.pastAdvisors.map(e=>({id:e.id||null,fullName:e.fullName}))};return n(((e,t)=>({mutation:Object(o.gql)(d||(d=u`mutation UpdateAdvisors($input: ProfileAdvisorsInput!, $context: String!) {
  updateAdvisors(input: $input, context: $context) {
    id
    advisors {
      current(first: 3) {
        nodes {
          id
          target {
            ... on Account {
              id
              image {
                url
                __typename
              }
              fullName
              __typename
            }
            ... on Author {
              id
              imageUrl
              fullName
              __typename
            }
            ... on PersonFullName {
              fullName
              __typename
            }
            __typename
          }
          __typename
        }
        pageInfo {
          totalItems
          __typename
        }
        __typename
      }
      past(first: 3) {
        nodes {
          id
          target {
            ... on Account {
              id
              image {
                url
                __typename
              }
              fullName
              __typename
            }
            ... on Author {
              id
              imageUrl
              fullName
              __typename
            }
            ... on PersonFullName {
              fullName
              __typename
            }
            __typename
          }
          __typename
        }
        pageInfo {
          totalItems
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
`)),variables:{input:e,context:t}}))(p,r)).then(()=>{s().then(()=>{t(Object(c.pushAlert)(()=>Object(w.jsx)(h.a,{}))),Object(l.b)(e)})}).catch(e=>{t(Object(c.notifyAboutError)(e))})}}))(({onSubmit:e,initialValues:t,onReject:n})=>Object(w.jsx)(T,{form:"profileAdvisorsEdit",onSubmit:e,initialValues:t,onCancel:n}))},3493:function(e,t,n){"use strict";var i=n(12),o=n(714),r=n(713),s=n(884),a=n(7),c=n(6),l=n(64),d=n(2),u=n(4),p=n(24),h=n(1),b=n(17),m=n(27),j=n(54),f=n.n(j),O=n(5),g=n(525),x=n(0);let y;const v=Object(O.gql)(y||(y=(e=>e)`query DepartmentSelectorFormFieldAdvancedSelect($institutionId: ID!, $hasInstitutionId: Boolean = false) {
  institution(id: $institutionId) @include(if: $hasInstitutionId) {
    id
    departments(first: 1200) {
      nodes {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`));class I extends u.Component{constructor(...e){var t,n;super(...e),this.state={selectedDepartmentId:null===(t=this.props)||void 0===t||null===(n=t.formValues)||void 0===n?void 0:n.professionalDepartmentId},this.handleDepartmentChange=({id:e,name:t})=>{this.setState({selectedDepartmentId:f()(e)?null:e}),this.props.onChange({id:e,name:t})}}shouldComponentUpdate(e){var t,n,i,o;return(null===(t=this.props.selectedInstitution)||void 0===t?void 0:t.id)!==(null===(n=e.selectedInstitution)||void 0===n?void 0:n.id)||(null===(i=this.props.selectedInstitution)||void 0===i?void 0:i.name)!==(null===(o=e.selectedInstitution)||void 0===o?void 0:o.name)||this.props.formValues.professionalDepartment!==e.formValues.professionalDepartment||this.props.formValues.professionalDepartmentId!==e.formValues.professionalDepartmentId}componentDidUpdate(e){var t,n,i;null!==(t=this.props.selectedInstitution)&&void 0!==t&&t.name&&(null===(n=this.props.selectedInstitution)||void 0===n?void 0:n.name)===(null===(i=e.selectedInstitution)||void 0===i?void 0:i.name)||(this.props.dispatch(Object(p.change)(this.props.form,"professionalDepartment",null)),this.props.dispatch(Object(p.change)(this.props.form,"professionalDepartmentId",null)),this.props.dispatch(Object(p.change)(this.props.form,"isDepartmentVisible",!1)))}render(){var e;const{selectedDepartmentId:t}=this.state,{label:n,placeholder:i,selectedInstitution:o}=this.props;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.AdvancedSelectFormField,{label:n,placeholder:i,name:"professionalDepartment",normalize:e=>e?e.name:null,onChange:this.handleDepartmentChange,children:Object(x.jsx)(g.a,{query:v,searchKey:null,variables:{institutionId:null!==(e=null==o?void 0:o.id)&&void 0!==e?e:"",hasInstitutionId:!(null==o||!o.id)},getOptionListData:e=>{var t,n;return null==e||null===(t=e.institution)||void 0===t||null===(n=t.departments)||void 0===n?void 0:n.nodes},selectorKey:"name"})}),Object(x.jsx)(b.HiddenField,{name:"professionalDepartmentId",value:t})]})}}I.displayName="DepartmentSelectorFormField",I.defaultProps={label:"Department",placeholder:"Enter your department",onChange:()=>{}};var _=Object(i.connect)((e,{form:t})=>({formValues:Object(o.a)(t)(e)}))(I);let w;const S=Object(O.gql)(w||(w=(e=>e)`query InstitutionSelectorFormFieldAdvancedSelect($query: String!) {
  searchInstitutions(query: $query) {
    id
    name
    __typename
  }
  __typename
}
`));class P extends u.Component{constructor(...e){var t,n;super(...e),this.state={selectedInstitutionId:null===(t=this.props)||void 0===t||null===(n=t.formValues)||void 0===n?void 0:n.professionalInstitutionId},this.handleInstitutionChange=({id:e,name:t})=>{const{onChange:n}=this.props,i=f()(e)?null:e;this.setState({selectedInstitutionId:i}),n({selectedInstitutionId:i,name:t})}}shouldComponentUpdate(e){return this.props.formValues.professionalInstitution!==e.formValues.professionalInstitution||this.props.formValues.professionalInstitutionId!==e.formValues.professionalInstitutionId}render(){const{selectedInstitutionId:e}=this.state,{label:t,placeholder:n}=this.props;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.AdvancedSelectFormField,{label:t,placeholder:n,name:"professionalInstitution",normalize:e=>e?e.name:null,onChange:this.handleInstitutionChange,children:Object(x.jsx)(g.a,{query:S,getOptionListData:e=>e.searchInstitutions,selectorKey:"name"})}),Object(x.jsx)(b.HiddenField,{name:"professionalInstitutionId",value:e})]})}}P.displayName="InstitutionSelectorFormField",P.defaultProps={label:"Institution",placeholder:"Enter your institution",onChange:()=>{}};var C=Object(i.connect)((e,{form:t})=>({formValues:Object(o.a)(t)(e)}))(P),k=n(1981),A=n(1903),D=n(3399);var E=({accountId:e,form:t,allDegrees:n,handleSubmit:i,dispatch:o,context:r,doSubmit:s,submitting:a,onCancel:c,initialValues:l})=>{const[j,f]=Object(u.useState)({id:l.professionalInstitutionId,name:l.professionalInstitution});return Object(x.jsxs)("form",Object(d.a)(Object(d.a)({onSubmit:i(s)},Object(m.a)("BusinessCardEditForm")),{},{children:[Object(x.jsxs)(h.FormGroup,{children:[Object(x.jsx)(h.FormGroup.Item,{children:Object(x.jsxs)(h.Flex,{gutter:"xxs",children:[Object(x.jsx)(h.Flex.Item,{children:Object(x.jsx)(b.SingleCheckboxFormField,{name:"isDegreeVisible",children:Object(x.jsx)(h.Checkbox,{})})}),Object(x.jsx)(h.Flex.Item,{grow:!0,children:Object(x.jsx)(b.AdvancedSelectFormField,{name:"degree",label:"Degree",children:Object(x.jsx)(A.a,{allDegrees:n,placeholder:"Enter degree",onDegreeChange:e=>{o(Object(p.change)(t,"isDegreeVisible",0!==e.length))}})})})]})}),Object(x.jsx)(h.FormGroup.Item,{children:Object(x.jsxs)(h.Flex,{gutter:"xxs",children:[Object(x.jsx)(h.Flex.Item,{children:Object(x.jsx)(b.SingleCheckboxFormField,{name:"isPositionVisible",children:Object(x.jsx)(h.Checkbox,{})})}),Object(x.jsx)(h.Flex.Item,{grow:!0,children:Object(x.jsx)(k.a,{placeholder:"Enter position",onChange:({name:e})=>{o(Object(p.change)(t,"isPositionVisible",!!e))}})})]})}),Object(x.jsx)(h.FormGroup.Item,{children:Object(x.jsxs)(h.Flex,{gutter:"xxs",children:[Object(x.jsx)(h.Flex.Item,{children:Object(x.jsx)(b.SingleCheckboxFormField,{name:"isBlurbVisible",children:Object(x.jsx)(h.Checkbox,{})})}),Object(x.jsx)(h.Flex.Item,{grow:!0,children:Object(x.jsx)(b.TextareaFormField,{name:"blurb",label:"Current activity",onChange:e=>{o(Object(p.change)(t,"isBlurbVisible",!!e.target.value))},children:Object(x.jsx)(h.Textarea,{placeholder:"Looking for collaborators, a new position, feedback, or something else? Enter your current activity to let people know",maxLength:120})})})]})}),Object(x.jsx)(h.FormGroup.Item,{children:Object(x.jsxs)(h.Flex,{gutter:"xxs",children:[Object(x.jsx)(h.Flex.Item,{children:Object(x.jsx)(b.SingleCheckboxFormField,{name:"isInstitutionVisible",children:Object(x.jsx)(h.Checkbox,{})})}),Object(x.jsx)(h.Flex.Item,{grow:!0,children:Object(x.jsx)(C,{form:t,placeholder:"Enter institution",onChange:({selectedInstitutionId:e,name:n})=>{f({id:e,name:n}),o(Object(p.change)(t,"isInstitutionVisible",!!n))}})})]})}),Object(x.jsx)(h.FormGroup.Item,{children:Object(x.jsxs)(h.Flex,{gutter:"xxs",children:[Object(x.jsx)(h.Flex.Item,{children:Object(x.jsx)(b.SingleCheckboxFormField,{name:"isDepartmentVisible",children:Object(x.jsx)(h.Checkbox,{})})}),Object(x.jsx)(h.Flex.Item,{grow:!0,children:Object(x.jsx)(_,{form:t,placeholder:"Enter department",selectedInstitution:j,onChange:({name:e})=>{o(Object(p.change)(t,"isDepartmentVisible",!!e))}})})]})}),Object(x.jsx)(h.FormGroup.Item,{children:Object(x.jsxs)(h.Flex,{gutter:"xxs",children:[Object(x.jsx)(h.Flex.Item,{children:Object(x.jsx)(b.SingleCheckboxFormField,{name:"areSkillsVisible",children:Object(x.jsx)(h.Checkbox,{})})}),Object(x.jsx)(h.Flex.Item,{grow:!0,children:Object(x.jsx)(D.a,{accountId:e,dispatch:o,context:r,onChange:e=>{o(Object(p.change)(t,"areSkillsVisible",e))}})})]})})]}),Object(x.jsx)(h.Flex,{justifyContent:"flex-end",children:Object(x.jsx)(h.Flex.Item,{children:Object(x.jsxs)(h.ButtonGroup,{children:[Object(x.jsx)(h.Button,{type:"button",color:"blue",theme:"bare",onClick:c,children:"Cancel"}),Object(x.jsx)(h.Button,Object(d.a)(Object(d.a)({type:"submit",status:a?"busy":null},Object(m.a)("BusinessCardEditFormSubmit")),{},{children:"Save"}))]})})})]}))};const T={blurb:{length:{maximum:120,tooLong:"Please enter a shorter message (max 120 characters)"}}};t.a=Object(a.a)(Object(i.connect)((e,{form:t})=>({formValues:Object(o.a)(t)(e),isFormValid:Object(r.a)(t)(e)})),Object(s.a)({validate:Object(l.createValidator)(T)}),Object(c.r)({doSubmit:({isFormValid:e,formValues:t,onSubmit:n})=>()=>e?n({values:t}):null}))(E)},3503:function(e,t,n){"use strict";var i=n(4),o=n(1),r=n(0);class s extends i.Component{constructor(...e){super(...e),this.state={selections:this.props.selections},this.toggleSelection=e=>{var t,n;const{maxNumberOfSelections:i}=this.props;let o=this.state.selections.slice();if(o.includes(e))o=o.filter(t=>t!==e);else{if(null!=i&&o.length>=i)return;o.push(e)}this.setState({selections:o}),null===(t=(n=this.props).onChange)||void 0===t||t.call(n,o)}}componentDidUpdate(e){var t,n;JSON.stringify(e.selections)!==JSON.stringify(this.props.selections)&&(null===(t=(n=this.props).onChange)||void 0===t||t.call(n,this.props.selections))}render(){const{items:e}=this.props,{selections:t}=this.state;return Object(r.jsx)(o.Flex,{wrap:"wrap",gutter:"xs",children:e.map(e=>{const n=t.includes(e);return Object(r.jsx)(o.Flex.Item,{children:Object(r.jsx)(o.Button,{type:"button",radius:"full",size:"xs",color:"grey",theme:"ghost",status:n?"selected":"",onClick:()=>this.toggleSelection(e),children:e})},e)})})}}s.displayName="TagGroup",s.defaultProps={selections:[]};var a=s;t.a=a},352:function(e,t,n){"use strict";var i=n(3),o=n.n(i);o.a.shape({value:o.a.string,onChange:o.a.func,onFocus:o.a.func,onBlur:o.a.func}),o.a.shape({touched:o.a.bool,error:o.a.string,invalid:o.a.bool}),o.a.shape({touched:o.a.bool,error:o.a.string,invalid:o.a.bool})},356:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(1),s=(n(352),n(0));const a=["name","input","meta","label"],c=e=>{let{name:t,input:{value:n,onChange:c,onFocus:l,onBlur:d},meta:{touched:u,error:p,invalid:h},label:b}=e,m=Object(o.a)(e,a);return Object(s.jsxs)("div",{children:[Object(s.jsx)(r.Label,{htmlFor:t,status:u&&h&&p?"invalid":null,errorMessage:p||null,children:b}),Object(s.jsx)(r.Input,Object(i.a)({id:t,name:t,value:n,maxLength:150,onFocus:e=>{var t,n,i;const o=(null!==(t=null==e||null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==t?t:"").length;!u&&o>0&&null!=e&&null!==(i=e.target)&&void 0!==i&&i.setSelectionRange&&e.target.setSelectionRange(o,o),l(e)},onBlur:d,onChange:c,status:u&&h&&p?"invalid":null},m))]})};c.defaultProps={label:"Question"},t.a=c},357:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(6),s=n(15),a=n(87),c=n(209),l=n(429),d=n(430),u=n(16),p=n.n(u),h=n(1),b=n(466),m=n(0);class j extends o.Component{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(){this.props.onClick&&this.props.onClick()}getText(){return Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"total",children:this.props.total})," ",p()(this.props.label,this.props.total)]})}getButton(){const{theme:e,color:t,className:n,size:i}=this.props;return this.props.useLink?Object(m.jsx)(h.Link,{onClick:this.onClick,theme:e,color:t,className:n,size:i,children:this.getText()}):Object(m.jsx)(h.Button,{onClick:this.onClick,type:"button",theme:e,color:t,className:n,size:i,children:this.getText()})}render(){return this.props.total<=0?null:Object(m.jsx)(h.Tooltip,{color:"black",target:this.getButton(),children:Object(m.jsx)(h.Tooltip.Body,{children:Object(m.jsx)(b.a,Object(i.a)({},this.props))})})}}j.displayName="Likes",j.defaultProps={total:0,label:"Recommendation",useLink:!1,size:"s"};var f=j;class O extends o.Component{constructor(...e){super(...e),this.onClick=()=>{this.props.showLikesDialog&&(this.props.ieplShowLikers&&Object(a.a)(this.props.ieplShowLikers),this.props.openModal(this.props.id,this.props.label))}}render(){return Object(m.jsx)(f,Object(i.a)(Object(i.a)({},this.props),{},{onClick:this.onClick}))}}O.displayName="RgIdLikes",O.defaultProps={label:"Recommendation"};t.a=Object(r.b)(()=>{const e=Object(c.e)();return(t,n)=>({total:Object(c.c)(t,n.id).total,likers:e(t,n.id)})},e=>({openModal:(t,n)=>e(Object(s.mountModal)(()=>Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a,{id:t,label:n})})))}))(O)},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const i="gb-follow-journal",o={CONTROL:"control",FOLLOW_JOURNAL_ENABLED:"follow-journal-enabled"}},360:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n.n(r),a=n(67),c=n(27),l=n(0);const d=["onChange","onBlur","label","helpMessage","helpLabel","validate","CustomComponent"],u=s.a.forwardRef((e,t)=>{const{onChange:n,onBlur:r,label:s,helpMessage:u,helpLabel:p,validate:h,CustomComponent:b}=e,m=Object(o.a)(e,d),j="string"!=typeof s?"":s;return Object(l.jsx)(a.a,Object(i.a)(Object(i.a)({input:({field:{name:e,value:o,onBlur:s},meta:{touched:a,error:d},form:{setFieldTouched:u,setFieldValue:p}})=>Object(l.jsx)(b,Object(i.a)(Object(i.a)({ref:t,name:e,value:o,onChange:t=>{var i;null!==(i=t)&&void 0!==i&&i.target&&(t=t.target.value),o!==t&&(p(e,t,!1),u(e,!0)),n&&n(t)},onBlur:e=>{e&&(s(e),r&&r(e))},status:a&&d?"invalid":null,label:j},Object(c.a)(e)),m))},e),{},{helpLabel:p,helpMessage:u},h&&{validate:h}))});u.displayName="FormikCustomField",t.a=u},362:function(e,t,n){"use strict";var i=n(1),o=n(0);const r=({hasLiked:e,like:t,unlike:n,useLink:r,theme:s,color:a,className:c,labelLiked:l,labelLike:d,size:u,width:p,status:h,iconLike:b,iconLiked:m})=>{const j=e?n:t,f=e?l:d;if(r)return Object(o.jsx)(i.Link,{theme:s,color:a,className:c,onClick:j,children:f});const O=[];return!e&&b&&O.push(Object(o.jsx)(i.Button.Icon,{identifier:b},"icon")),e&&m&&O.push(Object(o.jsx)(i.Button.Icon,{identifier:m},"icon")),O.push(Object(o.jsx)(i.Button.Label,{children:f},"label")),Object(o.jsx)(i.Button,{type:"button",theme:s,color:a,className:c,size:u,width:p,status:h,onClick:j,children:O})};r.defaultProps={labelLike:"Recommend",labelLiked:"Recommended",useLink:!1,status:""},t.a=r},370:function(e,t,n){var i=n(26),o=n(166),r=n(113),s=i(i.bind);e.exports=function(e,t){return o(e),void 0===t?e:r?s(e,t):function(){return e.apply(t,arguments)}}},371:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return Z}));var i=n(2),o=n(10),r=n(884),s=n(7),a=n(6),c=n(203),l=n(204),d=n(8),u=n.n(d),p=n(686),h=n(1),b=n(188),m=n(152),j=n(165),f=n(186),O=n(167),g=n(109),x=n(205),y=(n(746),n(0));const v=new u.a({name:"converse-editor"});function I({isSubmitting:e,formValues:t,uploadState:n}){var i;if(e)return"busy";if(!t)return"disabled";const{uploadConditions:o,body:{text:r}}=t;return!o&&(null===(i=n.fileList)||void 0===i?void 0:i.length)>0||!r||r.length<g.a?"disabled":null}const _=({id:e,doSubmit:t,handleSubmit:n,blockModifier:o,isSubmitting:r,headerComponent:s,formValues:a,isAnswerFieldFocused:c,isDiscussion:l,rootId:d,uploadState:u,publisherContentBlockingUrl:_})=>{var w,S;return Object(y.jsx)("form",Object(i.a)(Object(i.a)({},v()),{},{onSubmit:n(t),children:Object(y.jsxs)(h.Card,{elevation:"none",className:"topic-card-in-stack",children:[Object(y.jsxs)(h.Card.Body,{children:[Object(y.jsxs)(h.Stack,{gutter:"s",children:[Object(y.jsx)(h.Stack.Item,{children:s}),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(h.FormGroup,{children:Object(y.jsx)(h.FormGroup.Item,{children:Object(y.jsx)(p.a,{name:"body",component:x.a,props:{name:"body",label:l?"Reply":"Answer",placeholder:l?"Contribute to the discussion (type @ to mention people)":"Add your answer (type @ to mention people)",blockModifier:o,showRichTextOptionsOnMount:!1,showRichTextControlsUnderInput:!0,focusOnMount:c,tooltipBody:Object(y.jsxs)("div",{children:[Object(y.jsx)(h.Text,{size:"l",children:Object(y.jsx)("b",{children:l?"Add your reply":"Add your answers"})}),Object(y.jsxs)(h.Text,{children:["Identify yourself as an expert in your field by providing high-quality ",l?"replies":"answers","."]})]}),rootId:d,useHotKeyManager:!0,useMentionControls:!0},validate:[g.c,g.b]})})})})]}),Object(y.jsx)(j.a,Object(i.a)(Object(i.a)({},v("attachment-list",o)),{},{id:e})),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(O.a,{checked:null==a?void 0:a.uploadConditions,isHidden:!(null!==(w=u.fileList)&&void 0!==w&&w.length)>0,name:"uploadConditions"})}),(null===(S=u.fileList)||void 0===S?void 0:S.length)>0?Object(y.jsxs)(h.Stack,{spacing:"none",gutter:"s",gutterOutside:!0,children:[Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(b.a,{})}),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(f.a,{publisherContentBlockingUrl:_,id:e})})]}):null]}),Object(y.jsx)(h.Card.Footer,{children:Object(y.jsxs)(h.MediaObject,{children:[Object(y.jsx)(h.MediaObject.Item,{width:"full",children:Object(y.jsx)(h.Pack,{verticalAlign:"middle",children:Object(y.jsx)(h.Pack.Item,{children:Object(y.jsx)(m.a,{id:e,url:"/converse/api/topics/message/upload",buttonIcon:"paperclip"})})})}),Object(y.jsx)(h.MediaObject.Item,{children:Object(y.jsx)(h.Button,{type:"submit",status:I({isSubmitting:r,formValues:a,uploadState:u}),children:Object(y.jsx)(h.Button.Label,{children:"Add"})})})]})})]})}))};_.defaultProps={blockModifier:"reply"};var w=_;const S=["id"],P=Object(r.a)({})(w);var C=Object(s.a)(Object(a.b)(l.a),Object(a.r)(c.a))(e=>{let{id:t}=e,n=Object(o.a)(e,S);return Object(y.jsx)(P,Object(i.a)({id:t,form:t,initialValues:{body:{text:null,struct:null},uploadConditions:!1}},n))}),k=n(4),A=n(18),D=n(50);const E=new Promise(()=>{});var T=n(5);const F=["children","input"],M=e=>{let{children:t,input:n}=e,r=Object(o.a)(e,F);const{value:s,onChange:a}=n;return Object(k.cloneElement)(k.Children.only(t),Object(i.a)(Object(i.a)(Object(i.a)({},n),r),{},{activeType:s,handleTypeChange:a}))};var R=e=>Object(y.jsx)(p.a,Object(i.a)(Object(i.a)({},e),{},{component:M}));const N=e=>e?void 0:"Please enter a subject",L=e=>e&&e.trim().length<10?"Please enter at least 10 characters":void 0;var B=n(29);function q(e){return e===D.b?"Ask a question":"Start a discussion"}class U extends k.Component{render(){const{activeType:e,handleTypeChange:t}=this.props;return Object(y.jsxs)(h.Flex,{alignItems:"center",gutter:"xxs",children:[Object(y.jsx)(h.Flex.Item,{children:Object(y.jsxs)(h.Dropdown,{ref:e=>{this.dropdown=e},scope:"local",position:"left",offset:{top:10,left:0},target:Object(y.jsx)(h.Heading,{size:"xl",children:Object(y.jsxs)(h.Link,{color:"blue",children:[q(e),Object(y.jsx)(h.Icon,{identifier:"arrow-down"})]})}),children:[Object(y.jsx)(h.Dropdown.Action,{type:"button",status:e===D.b?"selected":null,onClick:()=>{this.dropdown.hide(),Object(B.b)(t,D.b)},children:q(D.b)}),Object(y.jsx)(h.Dropdown.Action,{type:"button",status:e===D.a?"selected":null,onClick:()=>{this.dropdown.hide(),Object(B.b)(t,D.a)},children:q(D.a)})]})}),Object(y.jsx)(h.Flex.Item,{grow:!0,children:Object(y.jsx)(h.Heading,{size:"xl",children:"on ResearchGate"})})]})}}U.displayName="PostTypeSelector";var $=U,V=n(356);let z;const G=new u.a({name:"converse-message-composer"});class Q extends k.Component{constructor(...e){super(...e),this.getCancelButtonState=({submitting:e})=>e?"disabled":null,this.getSubmitButtonState=({submitting:e,formValues:t,isFormValid:n})=>{var i;const{uploadState:o}=this.props;if(e)return"busy";if(!t)return"disabled";const{subject:r,body:s,uploadConditions:a}=t,{text:c}=s;return r&&c&&n?!a&&(null===(i=o.fileList)||void 0===i?void 0:i.length)>0?"disabled":null:"disabled"}}render(){var e,t;const{id:n,handleSubmit:o,doSubmit:r,blockModifier:s,submitting:a,formValues:c,isFormValid:l,onReject:d,note:u,uploadState:v,publisherContentBlockingUrl:I,isFixQnAValidationEnabled:_}=this.props;if(!c)return null;const w=c.postType===D.a,S=c.uploadConditions;return Object(y.jsxs)("form",Object(i.a)(Object(i.a)({},G()),{},{onSubmit:o(r),children:[Object(y.jsx)(h.Modal.Body,{children:Object(y.jsxs)(h.Stack,{showDivider:!0,gutter:"xxl",children:[Object(y.jsx)(h.Stack.Item,{children:Object(y.jsxs)(h.Stack,{gutter:"xs",children:[Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(R,{name:"postType",children:Object(y.jsx)($,{})})}),Object(y.jsx)(h.Stack.Item,{children:w?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(h.Text,{color:"grey-700",children:"Enter a clear and concise title for your discussion that others will easily understand."}),Object(y.jsx)(h.Text,{color:"grey-700",children:"Please provide details or a starting point so others can contribute to the discussion."})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(h.Text,{color:"grey-700",children:["Enter a clear and concise question that others will easily understand."," ",Object(y.jsx)(h.Link,{href:this.props.guideLines,target:"_blank",rel:"noopener",children:"Learn more"})]}),Object(y.jsx)(h.Text,{color:"grey-700",children:"Please provide any details researchers may need to answer your question."})]})})]})}),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsxs)(h.Stack,{children:[Object(y.jsx)(h.Stack.Item,{children:Object(y.jsxs)(h.FormGroup,{children:[Object(y.jsx)(h.FormGroup.Item,{children:Object(y.jsx)(p.a,{name:"subject",validate:_?[N,L]:[],component:V.a,props:{name:"subject",autoFocus:!_,label:w?"Title":"Question",placeholder:w?"Enter a title for your discussion":"Enter your question"}})}),Object(y.jsx)(h.FormGroup.Item,{children:Object(y.jsx)(p.a,{name:"body",component:x.a,props:{name:"body",label:"Description",placeholder:w?"Enter a description – remember to add a link or file if your discussion is about a specific piece of content":"Enter an explanation or any details needed to understand your question",blockModifier:s,showRichTextOptionsOnMount:!0},validate:[g.c,g.b],style:{paddingBottom:"-30px"}})})]})}),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsxs)(h.Stack,{children:[Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(j.a,Object(i.a)(Object(i.a)({},G("attachment-list",s)),{},{id:n}))}),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(O.a,{name:"uploadConditions",checked:S,isHidden:!(null!==(e=v.fileList)&&void 0!==e&&e.length)>0})}),(null===(t=v.fileList)||void 0===t?void 0:t.length)>0?Object(y.jsxs)(h.Stack,{spacing:"none",gutter:"s",gutterOutside:!0,children:[Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(b.a,{})}),Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(f.a,{publisherContentBlockingUrl:I,id:n})})]}):null]})})]})}),u?Object(y.jsx)(h.Stack.Item,{children:Object(y.jsx)(h.Note,{children:u})}):null]})}),Object(y.jsx)(h.Modal.Footer,{align:"left",children:Object(y.jsxs)(h.MediaObject,{children:[Object(y.jsx)(h.MediaObject.Item,{width:"full",children:Object(y.jsx)(h.Pack,{verticalAlign:"middle",children:Object(y.jsx)(h.Pack.Item,{children:Object(y.jsx)(m.a,{id:n,url:"/converse/api/topics/message/upload",buttonIcon:"paperclip"})})})}),Object(y.jsx)(h.MediaObject.Item,{children:Object(y.jsxs)(h.ButtonGroup,{children:[Object(y.jsx)(h.Button,{theme:"bare",type:"button",size:"s",status:this.getCancelButtonState({submitting:a}),onClick:d,children:Object(y.jsx)(h.Button.Label,{children:"Cancel"})}),Object(y.jsx)(h.Button,{type:"submit",status:this.getSubmitButtonState({submitting:a,formValues:c,isFormValid:l}),size:"s",children:Object(y.jsx)(h.Button.Label,{children:"Add"})})]})})]})})]}))}}Q.displayName="QuestionFormLayout",Q.defaultProps={guideLines:`deref/${encodeURIComponent("https://explore.researchgate.net/pages/viewpage.action?pageId=14155852")}?forcePage=false`,blockModifier:"create"};var H=Object(T.withQuery)(Object(T.gql)(z||(z=(e=>e)`query QuestionFormLayout {
  urlGenerator {
    publisherContentBlockingUrl
    isFixQnAValidationEnabled: isFeatureFlagActive(featureName: "fixQnAValidation")
    __typename
  }
  __typename
}
`)),{mapDataToProps:({urlGenerator:e})=>({publisherContentBlockingUrl:null==e?void 0:e.publisherContentBlockingUrl,isFixQnAValidationEnabled:null==e?void 0:e.isFixQnAValidationEnabled})})(Q);const W=["id"],Y=Object(r.a)({asyncValidate:e=>e.subject?!e.subject.length>0?E:(e.isDiscussion=e.postType===D.a,Object(A.default)("/converse/api/topics/message/validate",{method:"POST",body:Object(i.a)({},e)}).then(e=>{if(e&&e.result&&e.result.title&&e.result.title.length>0)return Promise.reject({subject:e.result.title[0]})})):E,asyncBlurFields:["subject"]})(H),K=e=>{var t,n;return null!==(t=null==e||null===(n=e.formValues)||void 0===n?void 0:n.subject)&&void 0!==t?t:""},J=e=>{var t,n;return null!==(t=null==e||null===(n=e.formValues)||void 0===n?void 0:n.text)&&void 0!==t?t:""};class X extends k.Component{constructor(...e){super(...e),this.isFormChanged=!1}componentDidUpdate(e){const{onFirstFormChange:t}=this.props;"function"!=typeof t||this.isFormChanged||K(e)===K(this.props)&&J(e)===J(this.props)||(t(),this.isFormChanged=!0)}render(){const e=this.props,{id:t}=e,n=Object(o.a)(e,W);return Object(y.jsx)(Y,Object(i.a)({id:t,form:t},n))}}X.displayName="QuestionForm";var Z=Object(s.a)(Object(a.b)(l.a),Object(a.r)(c.a))(X)},378:function(e,t,n){var i=n(163),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0}},38:function(e,t,n){var i=n(26),o=n(107),r=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return r(o(e),t)}},383:function(e,t,n){var i=n(66);e.exports=i("navigator","userAgent")||""},384:function(e,t,n){var i=n(166);e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},387:function(e,t,n){var i=n(49),o=n(111),r=n(52).f,s=i("unscopables"),a=Array.prototype;null==a[s]&&r(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},388:function(e,t,n){"use strict";var i=n(62);e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},389:function(e,t,n){"use strict";var i=n(260).IteratorPrototype,o=n(111),r=n(112),s=n(171),a=n(170),c=function(){return this};e.exports=function(e,t,n,l){var d=t+" Iterator";return e.prototype=o(i,{next:r(+!l,n)}),s(e,d,!1,!0),a[d]=c,e}},390:function(e,t,n){var i=n(26),o=n(163),r=n(96),s=n(168),a=i("".charAt),c=i("".charCodeAt),l=i("".slice),d=function(e){return function(t,n){var i,d,u=r(s(t)),p=o(n),h=u.length;return p<0||p>=h?e?"":void 0:(i=c(u,p))<55296||i>56319||p+1===h||(d=c(u,p+1))<56320||d>57343?e?a(u,p):i:e?l(u,p,p+2):d-56320+(i-55296<<10)+65536}};e.exports={codeAt:d(!1),charAt:d(!0)}},391:function(e,t,n){var i=n(251),o=n(162),r=n(399),s=Array,a=Math.max;e.exports=function(e,t,n){for(var c=o(e),l=i(t,c),d=i(void 0===n?c:n,c),u=s(a(d-l,0)),p=0;l<d;l++,p++)r(u,p,e[l]);return u.length=p,u}},394:function(e,t,n){var i,o,r=n(45),s=n(383),a=r.process,c=r.Deno,l=a&&a.versions||c&&c.version,d=l&&l.v8;d&&(o=(i=d.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&s&&(!(i=s.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/))&&(o=+i[1]),e.exports=o},395:function(e,t,n){var i=n(70),o=n(65),r=n(141),s=n(384),a=n(411),c=n(49),l=TypeError,d=c("toPrimitive");e.exports=function(e,t){if(!o(e)||r(e))return e;var n,c=s(e,d);if(c){if(void 0===t&&(t="default"),n=i(c,e,t),!o(n)||r(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},396:function(e,t,n){var i=n(66);e.exports=i("document","documentElement")},397:function(e,t,n){var i=n(30),o=n(31),r=n(38),s=n(51),a=n(180).CONFIGURABLE,c=n(181),l=n(134),d=l.enforce,u=l.get,p=Object.defineProperty,h=s&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!r(e,"name")||a&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),h&&n&&r(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&r(n,"constructor")&&n.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var i=d(e);return r(i,"source")||(i.source=b.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return o(this)&&u(this).source||c(this)}),"toString")},398:function(e,t,n){var i=n(252),o=n(169),r=TypeError;e.exports=function(e){if(i(e))return e;throw r(o(e)+" is not a constructor")}},399:function(e,t,n){"use strict";var i=n(140),o=n(52),r=n(112);e.exports=function(e,t,n){var s=i(t);s in e?o.f(e,s,r(0,n)):e[s]=n}},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(5);let o;const r=Object(i.gql)(o||(o=(e=>e)`query JournalBusinessCard($id: ID!) {
  publication(id: $id) {
    id
    journal {
      id
      title
      url
      description
      cooperationPartnerBrand {
        logoImage {
          url
          alt
          __typename
        }
        __typename
      }
      isFollowing
      ...FollowJournalButton @embed
      __typename
    }
    __typename
  }
  __typename
}
`))},406:function(e,t,n){},410:function(e,t,n){var i=n(45);e.exports=i},411:function(e,t,n){var i=n(70),o=n(31),r=n(65),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!r(a=i(n,e)))return a;if(o(n=e.valueOf)&&!r(a=i(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!r(a=i(n,e)))return a;throw s("Can't convert object to primitive value")}},412:function(e,t,n){var i=n(73),o=n(251),r=n(162),s=function(e){return function(t,n,s){var a,c=i(t),l=r(c),d=o(s,l);if(e&&n!=n){for(;l>d;)if((a=c[d++])!=a)return!0}else for(;l>d;d++)if((e||d in c)&&c[d]===n)return e||d||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},413:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=Math.trunc||function(e){var t=+e;return(t>0?i:n)(t)}},414:function(e,t,n){var i=n(45),o=n(31),r=n(181),s=i.WeakMap;e.exports=o(s)&&/native code/.test(r(s))},415:function(e,t,n){var i=n(66),o=n(26),r=n(182),s=n(185),a=n(62),c=o([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=r.f(a(e)),n=s.f;return n?c(t,n(e)):t}},416:function(e,t,n){var i=n(30),o=n(31),r=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==d||n!=l&&(o(t)?i(t):!!t)},a=s.normalize=function(e){return String(e).replace(r,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",d=s.POLYFILL="P";e.exports=s},417:function(e,t,n){var i=n(70),o=n(38),r=n(139),s=n(388),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in a||o(e,"flags")||!r(a,e)?t:i(s,e)}},418:function(e,t,n){var i=n(31),o=String,r=TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw r("Can't set "+o(e)+" as a prototype")}},419:function(e,t,n){var i=n(370),o=n(26),r=n(177),s=n(107),a=n(162),c=n(420),l=o([].push),d=function(e){var t=1==e,n=2==e,o=3==e,d=4==e,u=6==e,p=7==e,h=5==e||u;return function(b,m,j,f){for(var O,g,x=s(b),y=r(x),v=i(m,j),I=a(y),_=0,w=f||c,S=t?w(b,I):n||p?w(b,0):void 0;I>_;_++)if((h||_ in y)&&(g=v(O=y[_],_,x),e))if(t)S[_]=g;else if(g)switch(e){case 3:return!0;case 5:return O;case 6:return _;case 2:l(S,O)}else switch(e){case 4:return!1;case 7:l(S,O)}return u?-1:o||d?d:S}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},420:function(e,t,n){var i=n(421);e.exports=function(e,t){return new(i(e))(0===t?0:t)}},421:function(e,t,n){var i=n(271),o=n(252),r=n(65),s=n(49)("species"),a=Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,(o(t)&&(t===a||i(t.prototype))||r(t)&&null===(t=t[s]))&&(t=void 0)),void 0===t?a:t}},422:function(e,t,n){var i=n(45),o=n(423),r=n(424),s=n(262),a=n(135),c=n(49),l=c("iterator"),d=c("toStringTag"),u=s.values,p=function(e,t){if(e){if(e[l]!==u)try{a(e,l,u)}catch(t){e[l]=u}if(e[d]||a(e,d,t),o[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(t){e[n]=s[n]}}};for(var h in o)p(i[h]&&i[h].prototype,h);p(r,"DOMTokenList")},423:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},424:function(e,t,n){var i=n(172)("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},425:function(e,t,n){"use strict";var i=n(390).charAt,o=n(96),r=n(134),s=n(263),a=r.set,c=r.getterFor("String Iterator");s(String,"String",(function(e){a(this,{type:"String Iterator",string:o(e),index:0})}),(function(){var e,t=c(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=i(n,o),t.index+=e.length,{value:e,done:!1})}))},429:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n(1),a=n(0);const c=["children"];class l extends r.Component{constructor(...e){super(...e),this.state={modalIsOpen:!0,modalStatus:""},this.handleRequestClose=()=>{this.setState({modalIsOpen:!1})}}render(){const e=this.props,{children:t}=e,n=Object(o.a)(e,c),{modalStatus:l,modalIsOpen:d}=this.state,u=r.Children.map(t,e=>Object(r.cloneElement)(e,{closeModal:this.handleRequestClose,handleCancel:this.handleRequestClose,isOpen:this.state.modalIsOpen}));return Object(a.jsx)(s.Modal,Object(i.a)(Object(i.a)({status:l,isOpen:d,onRequestClose:this.handleRequestClose},n),{},{children:u}))}}l.displayName="OpenModal",t.a=l},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(4),o=n(0);const r=e=>e.reduce((e,t)=>Array.isArray(t)?e.concat(r(t)):e.concat(t),[]),s=e=>r(e.map(e=>"string"==typeof e?(e=>{const t=e.split("\n"),n=[];return t.forEach((e,i)=>{const r=/(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;let s,a=0;const c=[];for(;null!==(s=r.exec(e));){const[t,,n,,i]=s,r=s.index;r>a&&c.push(e.slice(a,r)),n?c.push(Object(o.jsx)("strong",{children:n})):i&&c.push(Object(o.jsx)("em",{children:i})),a=r+t.length}a<e.length&&c.push(e.slice(a)),i<t.length-1&&c.push(Object(o.jsx)("br",{})),n.push(...c)}),n})(e):e));function a(e,t){if("string"==typeof e)throw new Error("String identifier is not compiled!",e);let n=s(e(t));n=n.map((e,t)=>Object(i.isValidElement)(e)?Object(i.cloneElement)(e,{key:t}):e);return!n.every(e=>["string","number"].includes(typeof e))?Object(i.createElement)(i.Fragment,{},...n):n.join("")}},430:function(e,t,n){"use strict";var i=n(16),o=n.n(i),r=n(4),s=n(1),a=n(6),c=n(310),l=n(309),d=n(482),u=n(337),p=n(0);function h(e){return Object(p.jsx)(d.a,{accountId:e.accountId,button:Object(p.jsx)(u.a,{accountId:e.accountId,size:"s",theme:"ghost"})})}class b extends r.Component{constructor(...e){super(...e),this.loadMore=()=>{this.props.dispatch(Object(c.f)(this.props.id,20))}}isLoaded(){return this.props.offset>=this.props.totalItems}componentDidMount(){this.props.initialLoadMoreIfEmpty&&0===this.props.accountIds.length&&this.loadMore()}renderButton(){if(this.isLoaded())return null;const e=this.props.isLoading?"busy":null;return Object(p.jsx)("div",{className:"list-load-more",children:Object(p.jsx)(s.Button,{size:"s",width:"full",theme:"ghost",color:"grey",status:e,onClick:this.loadMore,children:"Load more"})})}render(){const e=this.props.accountIds.map(e=>Object(p.jsx)(s.Stack.Item,{className:"stack-item-divided",children:Object(p.jsx)(h,{accountId:e})},e));return Object(p.jsxs)("div",{children:[Object(p.jsx)(s.Stack,{gutter:"m",children:e}),this.props.isLoading&&Object(p.jsx)("div",{className:"rendering"}),this.renderButton()]})}}b.displayName="RgIdLikersList",b.defaultProps={initialLoadMoreIfEmpty:!1};var m=Object(a.b)((e,t)=>{const{items:n,totalItems:i,isLoading:o,offset:r}=Object(l.b)(e,t);return{accountIds:n,totalItems:i,offset:r,isLoading:o}})(b);class j extends r.Component{getHeadline(){return 0===this.props.totalItems?this.props.label+"s":`${this.props.totalItems} ${o()(this.props.label,this.props.totalItems)}`}componentWillUnmount(){this.props.dispatch(Object(c.e)(this.props.id))}render(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(s.Heading,{size:"xl",spacing:"m",children:this.getHeadline()}),Object(p.jsx)("div",{className:"people-list-for-modals",children:Object(p.jsx)(m,{id:this.props.id,initialLoadMoreIfEmpty:!0})})]})}}j.displayName="LikersDialog",j.defaultProps={label:"Recommendation"};t.a=Object(a.b)((e,t)=>{const{totalItems:n}=Object(l.b)(e,t);return{totalItems:n}})(j)},431:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var i=n(231);const o=(e,{publicationUid:t})=>{var n,i,o;return null!==(n=null===(i=e.publicationGlobalPublicationAuthors)||void 0===i||null===(o=i.authors)||void 0===o?void 0:o[t])&&void 0!==n?n:[]},r=e=>{var t,n;return null!==(t=null===(n=e.publicationGlobalPublicationAuthors)||void 0===n?void 0:n.defaultImage)&&void 0!==t?t:null},s=(e,t)=>{const n=Object(i.a)(e);return o(e,t).some(e=>e.accountId===n)}},435:function(e,t,n){"use strict";n.d(t,"g",(function(){return R})),n.d(t,"j",(function(){return K})),n.d(t,"h",(function(){return L})),n.d(t,"n",(function(){return re})),n.d(t,"m",(function(){return ne})),n.d(t,"f",(function(){return T})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return C})),n.d(t,"l",(function(){return ee})),n.d(t,"k",(function(){return X})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return A})),n.d(t,"i",(function(){return U}));var i=n(12),o=n(1),r=n(5),s=n(7),a=n(6),c=n(11),l=n(355),d=n(379),u=n(0);let p;const h=({isFollowing:e,labelFollowing:t,labelFollow:n,onFollow:i,onUnfollow:r,isVisible:s,priority:a})=>s?Object(u.jsx)(o.EntityItemAction,{priority:a,onClick:e?r:i,icon:e?"check":null,children:e?t:n}):null;h.defaultProps={labelFollow:"Follow",labelFollowing:"Following",isVisible:!0};var b=Object(s.a)(Object(a.h)(o.EntityItemAction),Object(i.connect)(),Object(r.withQuery)(Object(r.gql)(p||(p=(e=>e)`query AccountPersonItemActionFollow($id: ID!) {
  account(id: $id) {
    id
    hasPermissionToFollow
    isFollowing
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:{hasPermissionToFollow:e,isFollowing:t}})=>({isFollowing:t,isVisible:e||t})}),Object(a.r)({onFollow:({id:e,context:t,mutate:n,afterFollowAction:i,dispatch:o})=>()=>{n(Object(l.a)({id:e,context:t})).then(()=>{o(Object(c.pushAlert)(()=>Object(u.jsx)(d.a,{}))),null==i||i()})},onUnfollow:({id:e,context:t,mutate:n,dispatch:i,afterUnfollowAction:o})=>()=>{n(Object(l.b)({id:e,context:t})).then(()=>{i(Object(c.pushAlert)(()=>Object(u.jsx)(d.b,{}))),null==o||o()})}}))(h),m=n(9),j=n(80),f=n(15);let O,g=()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(579)]).then(n.bind(null,1686));var x=Object(s.a)(Object(a.h)(o.EntityItemAction),Object(i.connect)(),Object(r.withQuery)(Object(r.gql)(O||(O=(e=>e)`query AccountPersonItemActionPrivateMessage($accountId: ID!) {
  account(id: $accountId) {
    id
    hasPermissionToSendMessage
    __typename
  }
  __typename
}
`))),Object(a.r)({onClick:({dispatch:e,accountId:t,onDialogMount:n,onSendMessage:i,context:o})=>()=>{e(Object(f.mountModal)(()=>Object(u.jsx)(j.a,{url:"messages.MessageCreateModal.html",widgetParams:{targetAccountId:m.a.parse(t).id,event:o},onSubmit:i,__internalLoadComponent:g}))),null==n||n()}}))(({account:e,priority:t,onClick:n})=>null!=e&&e.hasPermissionToSendMessage?Object(u.jsx)(o.EntityItemAction,{priority:t,onClick:n,children:"Send message"}):null);let y,v,I=e=>e,_=()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(579)]).then(n.bind(null,1686));var w=Object(s.a)(Object(a.h)(o.EntityItemAction),Object(i.connect)(),Object(r.withQuery)(Object(r.gql)(y||(y=I`query AccountPersonItemActionPrivateMessageForPublicationFeedback_Account($accountId: ID!) {
  account(id: $accountId) {
    id
    hasPermissionToSendMessage
    __typename
  }
  __typename
}
`))),Object(r.withQuery)(Object(r.gql)(v||(v=I`query AccountPersonItemActionPrivateMessageForPublicationFeedback_Publication($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    title
    __typename
  }
  __typename
}
`))),Object(a.r)({onClick:({dispatch:e,accountId:t,publication:n,onDialogMount:i,onSendMessage:o,context:r})=>()=>{e(Object(f.mountModal)(()=>Object(u.jsx)(j.a,{url:"messages.MessageCreateModal.html",widgetParams:{targetAccountId:m.a.parse(t).id,subject:"I'm interested in getting your feedback on: "+n.title,event:r},onSubmit:o,__internalLoadComponent:_}))),null==i||i()}}))(({account:e,priority:t,onClick:n})=>null!=e&&e.hasPermissionToSendMessage?Object(u.jsx)(o.EntityItemAction,{priority:t,onClick:n,children:"Send message"}):null),S=n(13);let P;var C=Object(s.a)(Object(a.h)(o.EntityItemAction),Object(r.withQuery)(Object(r.gql)(P||(P=(e=>e)`query AccountPersonItemActionViewProfile($id: ID!) {
  account(id: $id) {
    id
    url
    __typename
  }
  __typename
}
`))))(({account:e,params:t,priority:n,target:i})=>Object(u.jsx)(o.EntityItemAction,{priority:n,href:t?Object(S.a)(e.url,t):e.url,target:i,children:"View profile"}));let k;var A=Object(s.a)(Object(a.h)(o.EntityItemBlurb),Object(r.withQuery)(Object(r.gql)(k||(k=(e=>e)`query AccountPersonItemBlurb($id: ID!) {
  account(id: $id) {
    id
    profile {
      blurb
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{blurb:null==e||null===(t=e.profile)||void 0===t?void 0:t.blurb}}}))(({blurb:e})=>e?Object(u.jsx)(o.EntityItemBlurb,{children:e}):null);let D;Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(D||(D=(e=>e)`query AccountPersonItemDegree($id: ID!) {
  account(id: $id) {
    id
    profile {
      degree
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{degree:null==e||null===(t=e.profile)||void 0===t?void 0:t.degree}}}))(({clamp:e,degree:t})=>t?Object(u.jsx)(o.EntityItemInfo,{title:"Degree",clamp:e,children:Object(u.jsx)(o.EntityItemInfoItem,{children:t})}):null);let E;var T=Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(E||(E=(e=>e)`query AccountPersonItemDepartment($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        department: departmentNew {
          name
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
`)),{mapDataToProps:({account:e})=>{var t;return{department:null===(t=e.profile.affiliation.department)||void 0===t?void 0:t.name}}}))(({clamp:e,department:t})=>t?Object(u.jsx)(o.EntityItemInfo,{title:"Department",clamp:e,children:Object(u.jsx)(o.EntityItemInfoItem,{children:t})}):null),F=n(2);let M;var R=Object(s.a)(Object(a.h)(o.EntityItemTitle),Object(r.withQuery)(Object(r.gql)(M||(M=(e=>e)`query AccountPersonItemFullName($id: ID!) {
  account(id: $id) {
    id
    fullName
    url
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>Object(F.a)({},e)}))(({fullName:e,url:t,params:n,clamp:i,target:r,isLinkDisabled:s})=>{const a=n?Object(S.a)(t,n):t,c=s?null:a;return Object(u.jsx)(o.EntityItemTitle,{href:c,clamp:i,target:r,children:e})});let N;var L=Object(s.a)(Object(a.h)(o.EntityItemImage),Object(r.withQuery)(Object(r.gql)(N||(N=(e=>e)`query AccountPersonItemImage($id: ID!) {
  account(id: $id) {
    id
    fullName
    image {
      urlQ128: url(size: "Q128")
      __typename
    }
    url
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>Object(F.a)({},e)}))(({fullName:e,url:t,image:n,params:i,isLinkDisabled:r})=>{const s=i?Object(S.a)(t,i):t,a=r?null:s;return Object(u.jsx)(o.EntityItemImage,{href:a,alt:e,imageUrl:null==n?void 0:n.urlQ128})});let B;Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(B||(B=(e=>e)`query AccountPersonItemInstitution($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        institution {
          name
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
`)),{mapDataToProps:({account:e})=>{var t;return{institution:null==e||null===(t=e.profile.affiliation.institution)||void 0===t?void 0:t.name}}}))(({clamp:e,institution:t})=>t?Object(u.jsx)(o.EntityItemInfo,{title:"Institution",clamp:e,children:Object(u.jsx)(o.EntityItemInfoItem,{children:t})}):null);let q;var U=Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(q||(q=(e=>e)`query AccountPersonItemInstitutionAndDepartment($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        institution {
          name
          __typename
        }
        department: departmentNew {
          name
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
`)),{mapDataToProps:({account:e})=>{var t,n;return{institution:null==e||null===(t=e.profile.affiliation.institution)||void 0===t?void 0:t.name,department:null==e||null===(n=e.profile.affiliation.department)||void 0===n?void 0:n.name}}}))(({clamp:e,institution:t,department:n,isInstitutionVisible:i,isDepartmentVisible:r})=>{const s=(t,n)=>Object(u.jsx)(o.EntityItemInfo,{title:t,clamp:e,children:n.map((e,t)=>Object(u.jsx)(o.EntityItemInfoItem,{children:e},`insitution-department-key-${e}-${t}`))});return t&&n&&i&&r?s("Institution and department",[t,n]):t&&i?s("Institution",[t]):n&&r?s("Department",[n]):null});let $;var V=Object(s.a)(Object(a.h)(o.EntityItemMetaItem),Object(r.withQuery)(Object(r.gql)($||($=(e=>e)`query AccountPersonItemMetaItemDegree($id: ID!) {
  account(id: $id) {
    id
    profile {
      degree
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{degree:null==e||null===(t=e.profile)||void 0===t?void 0:t.degree}}}))(({degree:e})=>e?Object(u.jsx)(o.EntityItemMetaItem,{title:e,children:e}):null);let z;var G=Object(s.a)(Object(a.h)(o.EntityItemMetaItem),Object(r.withQuery)(Object(r.gql)(z||(z=(e=>e)`query AccountPersonItemMetaItemInstitution($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        institution {
          name
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
`)),{mapDataToProps:({account:e})=>{var t;return{institution:null==e||null===(t=e.profile.affiliation.institution)||void 0===t?void 0:t.name}}}))(({institution:e})=>e?Object(u.jsx)(o.EntityItemMetaItem,{title:e,children:e}):null);let Q;var H=Object(s.a)(Object(a.h)(o.EntityItemMetaItem),Object(r.withQuery)(Object(r.gql)(Q||(Q=(e=>e)`query AccountPersonItemMetaItemPosition($id: ID!) {
  account(id: $id) {
    id
    profile {
      affiliation {
        position: positionNewNew {
          jobPosition {
            id
            position
            __typename
          }
          profilePosition
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
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s;return{position:null!==(t=null==e||null===(n=e.profile)||void 0===n||null===(i=n.affiliation)||void 0===i||null===(o=i.position.jobPosition)||void 0===o?void 0:o.position)&&void 0!==t?t:null==e||null===(r=e.profile)||void 0===r||null===(s=r.affiliation)||void 0===s?void 0:s.position.profilePosition}}}))(({position:e})=>e?Object(u.jsx)(o.EntityItemMetaItem,{title:e,children:e}):null);let W;const Y=({id:e,isInstitutionVisible:t,isPositionVisible:n,isDegreeVisible:i})=>{const r=t&&Object(u.jsx)(G,{id:e}),s=n&&Object(u.jsx)(H,{id:e}),a=i&&Object(u.jsx)(V,{id:e});return r||s||a?Object(u.jsxs)(o.EntityItemMetaItems,{children:[a,s,r]}):null};Y.defaultProps={isInstitutionVisible:!0,isPositionVisible:!1,isDegreeVisible:!1};var K=Object(s.a)(Object(a.h)(o.EntityItemMetaItems),Object(r.withQuery)(Object(r.gql)(W||(W=(e=>e)`query AccountPersonItemMetaItems($id: ID!) {
  account(id: $id) {
    id
    ...AccountPersonItemMetaItemInstitution @embed
    ...AccountPersonItemMetaItemPosition @embed
    ...AccountPersonItemMetaItemDegree @embed
    __typename
  }
  __typename
}
`))))(Y);let J;var X=Object(s.a)(Object(a.h)(o.EntityItemMetric),Object(r.withQuery)(Object(r.gql)(J||(J=(e=>e)`query AccountPersonItemMetricCitationCount($id: ID!) {
  account(id: $id) {
    id
    authorStats {
      citationCount
      __typename
    }
    url
    __typename
  }
  __typename
}
`))))(({account:e})=>{var t,n;const i=null!==(t=null==e||null===(n=e.authorStats)||void 0===n?void 0:n.citationCount)&&void 0!==t?t:0;return i<1?null:Object(u.jsx)(o.EntityItemMetric,{href:e.url,children:`${i} ${i>1?"Citations":"Citation"}`})});let Z;var ee=Object(s.a)(Object(a.h)(o.EntityItemMetric),Object(r.withQuery)(Object(r.gql)(Z||(Z=(e=>e)`query AccountPersonItemMetricPublicationCount($id: ID!) {
  account(id: $id) {
    id
    publicationCount
    url
    __typename
  }
  __typename
}
`))))(({account:e})=>!e||!e.publicationCount||!e.publicationCount>0?null:Object(u.jsx)(o.EntityItemMetric,{href:e.url,children:`${e.publicationCount} ${e.publicationCount>1?"Publications":"Publication"}`}));let te;var ne=Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(te||(te=(e=>e)`query AccountPersonItemMostRecentPublication($id: ID!) {
  account(id: $id) {
    id
    publications(offset: 0, limit: 1) {
      id
      title
      __typename
    }
    __typename
  }
  __typename
}
`))))(({account:e})=>!e||!e.publications||!e.publications.length>0?null:Object(u.jsx)(o.EntityItemInfo,{title:"Most Recent Research Contribution",children:Object(u.jsx)(o.ExpandableText,{spacing:"s",clamp:"2",children:e.publications[0].title})}));let ie;Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(ie||(ie=(e=>e)`query AccountPersonItemSciences($id: ID!) {
  account(id: $id) {
    id
    sciences {
      id
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{sciences:null!==(t=null==e?void 0:e.sciences)&&void 0!==t?t:[]}}}))(({clamp:e,sciences:t})=>t.length>0?Object(u.jsx)(o.EntityItemInfo,{title:"Disciplines",clamp:e,children:t.map(e=>Object(u.jsx)(o.EntityItemInfoItem,{children:e.name},e.id))}):null);let oe;var re=Object(s.a)(Object(a.h)(o.EntityItemInfo),Object(r.withQuery)(Object(r.gql)(oe||(oe=(e=>e)`query AccountPersonItemSkills($id: ID!) {
  account(id: $id) {
    id
    skills(limit: 10) {
      keyword {
        id
        name
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:function(e){var t,n;return{skills:(null!==(t=null==e||null===(n=e.account)||void 0===n?void 0:n.skills)&&void 0!==t?t:[]).filter(e=>!!e.keyword)}}}))(({skills:e,clamp:t})=>!e||!e.length>0?null:Object(u.jsx)(o.EntityItemInfo,{title:"Skills",clamp:t,children:e.map(e=>Object(u.jsx)(o.EntityItemInfoItem,{children:e.keyword.name},e.keyword.id))}))},437:function(e,t,n){"use strict";n(438),n(446),n(447),n(262),n(448),n(450),n(451),n(452),n(454),n(456),n(425),n(422);var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(4)),o=c(n(3)),r=n(458),s=c(n(23)),a=c(n(457));function c(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O,g,x,y,v,I="transform",_=!0,w=0,S=-1,P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,n,o,c=b(l);function l(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=c.call(this,e,t)).handleResize=n.handleResize.bind(j(n)),n.handleScroll=n.handleScroll.bind(j(n)),n.handleScrollStart=n.handleScrollStart.bind(j(n)),n.delta=0,n.stickyTop=0,n.stickyBottom=0,n.frozen=!1,n.skipNextScrollEvent=!1,n.scrollTop=-1,n.bottomBoundaryTarget,n.topTarget,n.subscribers,n.state={top:0,bottom:0,width:0,height:0,x:0,y:0,topBoundary:0,bottomBoundary:1/0,status:0,pos:0,activated:!1},n}return t=l,(n=[{key:"getTargetHeight",value:function(e){return e&&e.offsetHeight||0}},{key:"getTopPosition",value:function(e){return"string"==typeof(e=e||this.props.top||0)&&(this.topTarget||(this.topTarget=O.querySelector(e)),e=this.getTargetHeight(this.topTarget)),e}},{key:"getTargetBottom",value:function(e){if(!e)return-1;var t=e.getBoundingClientRect();return this.scrollTop+t.bottom}},{key:"getBottomBoundary",value:function(e){var t=e||this.props.bottomBoundary;return"object"===u(t)&&(t=t.value||t.target||0),"string"==typeof t&&(this.bottomBoundaryTarget||(this.bottomBoundaryTarget=O.querySelector(t)),t=this.getTargetBottom(this.bottomBoundaryTarget)),t&&t>0?t:1/0}},{key:"reset",value:function(){this.setState({status:0,pos:0})}},{key:"release",value:function(e){this.setState({status:1,pos:e-this.state.y})}},{key:"fix",value:function(e){this.setState({status:2,pos:e})}},{key:"updateInitialDimension",value:function(e){if(e=e||{},this.outerElement&&this.innerElement){var t=this.outerElement.getBoundingClientRect(),n=this.innerElement.getBoundingClientRect(),i=t.width||t.right-t.left,o=n.height||n.bottom-n.top,r=t.top+this.scrollTop;this.setState({top:this.getTopPosition(e.top),bottom:Math.min(this.state.top+o,S),width:i,height:o,x:t.left,y:r,bottomBoundary:this.getBottomBoundary(e.bottomBoundary),topBoundary:r})}}},{key:"handleResize",value:function(e,t){this.props.shouldFreeze()||(S=t.resize.height,this.updateInitialDimension(),this.update())}},{key:"handleScrollStart",value:function(e,t){this.frozen=this.props.shouldFreeze(),this.frozen||(this.scrollTop===t.scroll.top?this.skipNextScrollEvent=!0:(this.scrollTop=t.scroll.top,this.updateInitialDimension()))}},{key:"handleScroll",value:function(e,t){this.skipNextScrollEvent?this.skipNextScrollEvent=!1:(w=t.scroll.delta,this.scrollTop=t.scroll.top,this.update())}},{key:"update",value:function(){if(!this.props.enabled||this.state.bottomBoundary-this.state.topBoundary<=this.state.height||0===this.state.width&&0===this.state.height)0!==this.state.status&&this.reset();else{var e=w,t=this.scrollTop+this.state.top,n=this.scrollTop+this.state.bottom;if(t<=this.state.topBoundary)this.reset();else if(n>=this.state.bottomBoundary)this.stickyBottom=this.state.bottomBoundary,this.stickyTop=this.stickyBottom-this.state.height,this.release(this.stickyTop);else if(this.state.height>S-this.state.top)switch(this.state.status){case 0:this.release(this.state.y),this.stickyTop=this.state.y,this.stickyBottom=this.stickyTop+this.state.height;case 1:this.stickyBottom=this.stickyTop+this.state.height,e>0&&n>this.stickyBottom?this.fix(this.state.bottom-this.state.height):e<0&&t<this.stickyTop&&this.fix(this.state.top);break;case 2:var i=!0,o=this.state.pos,r=this.state.height;if(e>0&&o===this.state.top)this.stickyTop=t-e,this.stickyBottom=this.stickyTop+r;else if(e<0&&o===this.state.bottom-r)this.stickyBottom=n-e,this.stickyTop=this.stickyBottom-r;else if(o!==this.state.bottom-r&&o!==this.state.top){var s=o+r-this.state.bottom;this.stickyBottom=n-e+s,this.stickyTop=this.stickyBottom-r}else i=!1;i&&this.release(this.stickyTop)}else this.fix(this.state.top);this.delta=e}}},{key:"componentDidUpdate",value:function(e,t){var n=this;t.status!==this.state.status&&this.props.onStateChange&&this.props.onStateChange({status:this.state.status}),!(0,a.default)(this.props,e)&&(e.enabled!==this.props.enabled?this.props.enabled?this.setState({activated:!0},(function(){n.updateInitialDimension(),n.update()})):this.setState({activated:!1},(function(){n.reset()})):e.top===this.props.top&&e.bottomBoundary===this.props.bottomBoundary||(this.updateInitialDimension(),this.update()))}},{key:"componentWillUnmount",value:function(){for(var e=(this.subscribers||[]).length-1;e>=0;e--)this.subscribers[e].unsubscribe()}},{key:"componentDidMount",value:function(){v||(v=window,O=document,x=O.documentElement,g=O.body,S=v.innerHeight||x.clientHeight,(y=window.Modernizr)&&y.prefixed&&(_=y.csstransforms3d,I=y.prefixed("transform"))),this.scrollTop=g.scrollTop+x.scrollTop,this.props.enabled&&(this.setState({activated:!0}),this.updateInitialDimension(),this.update()),this.subscribers=[(0,r.subscribe)("scrollStart",this.handleScrollStart.bind(this),{useRAF:!0}),(0,r.subscribe)("scroll",this.handleScroll.bind(this),{useRAF:!0,enableScrollInfo:!0}),(0,r.subscribe)("resize",this.handleResize.bind(this),{enableResizeInfo:!0})]}},{key:"translate",value:function(e,t){_&&this.props.enableTransforms&&this.state.activated?e[I]="translate3d(0,"+Math.round(t)+"px,0)":e.top=t+"px"}},{key:"shouldComponentUpdate",value:function(e,t){return!(this.props.shouldFreeze()||(0,a.default)(this.props,e)&&(0,a.default)(this.state,t))}},{key:"render",value:function(){var e,t=this,n={position:2===this.state.status?"fixed":"relative",top:2===this.state.status?"0px":"",zIndex:this.props.innerZ},o={};this.translate(n,this.state.pos),0!==this.state.status&&(n.width=this.state.width+"px",o.height=this.state.height+"px");var r=(0,s.default)("sticky-outer-wrapper",this.props.className,(d(e={},this.props.activeClass,2===this.state.status),d(e,this.props.releasedClass,1===this.state.status),e)),a=this.props.children;return i.default.createElement("div",{ref:function(e){t.outerElement=e},className:r,style:o},i.default.createElement("div",{ref:function(e){t.innerElement=e},className:["sticky-inner-wrapper",this.props.innerClass].join(" "),style:n},"function"==typeof a?a({status:this.state.status}):a))}}])&&p(t.prototype,n),o&&p(t,o),l}(i.Component);P.displayName="Sticky",P.defaultProps={shouldFreeze:function(){return!1},enabled:!0,top:0,bottomBoundary:0,enableTransforms:!0,activeClass:"active",releasedClass:"released",onStateChange:null,innerClass:""},P.propTypes={enabled:o.default.bool,top:o.default.oneOfType([o.default.string,o.default.number]),bottomBoundary:o.default.oneOfType([o.default.object,o.default.string,o.default.number]),enableTransforms:o.default.bool,activeClass:o.default.string,releasedClass:o.default.string,innerClass:o.default.string,onStateChange:o.default.func,shouldFreeze:o.default.func,innerZ:o.default.oneOfType([o.default.string,o.default.number])},P.STATUS_ORIGINAL=0,P.STATUS_RELEASED=1,P.STATUS_FIXED=2,e.exports=P},438:function(e,t,n){n(439),n(442),n(443),n(444),n(445)},439:function(e,t,n){"use strict";var i=n(53),o=n(45),r=n(70),s=n(26),a=n(110),c=n(51),l=n(98),d=n(30),u=n(38),p=n(139),h=n(62),b=n(73),m=n(140),j=n(96),f=n(112),O=n(111),g=n(257),x=n(182),y=n(440),v=n(185),I=n(179),_=n(52),w=n(268),S=n(259),P=n(85),C=n(114),k=n(143),A=n(142),D=n(176),E=n(49),T=n(267),F=n(266),M=n(441),R=n(171),N=n(134),L=n(419).forEach,B=k("hidden"),q=N.set,U=N.getterFor("Symbol"),$=Object.prototype,V=o.Symbol,z=V&&V.prototype,G=o.TypeError,Q=o.QObject,H=I.f,W=_.f,Y=y.f,K=S.f,J=s([].push),X=C("symbols"),Z=C("op-symbols"),ee=C("wks"),te=!Q||!Q.prototype||!Q.prototype.findChild,ne=c&&d((function(){return 7!=O(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=H($,t);i&&delete $[t],W(e,t,n),i&&e!==$&&W($,t,i)}:W,ie=function(e,t){var n=X[e]=O(z);return q(n,{type:"Symbol",tag:e,description:t}),c||(n.description=t),n},oe=function(e,t,n){e===$&&oe(Z,t,n),h(e);var i=m(t);return h(n),u(X,i)?(n.enumerable?(u(e,B)&&e[B][i]&&(e[B][i]=!1),n=O(n,{enumerable:f(0,!1)})):(u(e,B)||W(e,B,f(1,{})),e[B][i]=!0),ne(e,i,n)):W(e,i,n)},re=function(e,t){h(e);var n=b(t),i=g(n).concat(le(n));return L(i,(function(t){c&&!r(se,n,t)||oe(e,t,n[t])})),e},se=function(e){var t=m(e),n=r(K,this,t);return!(this===$&&u(X,t)&&!u(Z,t))&&(!(n||!u(this,t)||!u(X,t)||u(this,B)&&this[B][t])||n)},ae=function(e,t){var n=b(e),i=m(t);if(n!==$||!u(X,i)||u(Z,i)){var o=H(n,i);return!o||!u(X,i)||u(n,B)&&n[B][i]||(o.enumerable=!0),o}},ce=function(e){var t=Y(b(e)),n=[];return L(t,(function(e){u(X,e)||u(A,e)||J(n,e)})),n},le=function(e){var t=e===$,n=Y(t?Z:b(e)),i=[];return L(n,(function(e){!u(X,e)||t&&!u($,e)||J(i,X[e])})),i};l||(P(z=(V=function(){if(p(z,this))throw G("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,t=D(e),n=function(e){this===$&&r(n,Z,e),u(this,B)&&u(this[B],t)&&(this[B][t]=!1),ne(this,t,f(1,e))};return c&&te&&ne($,t,{configurable:!0,set:n}),ie(t,e)}).prototype,"toString",(function(){return U(this).tag})),P(V,"withoutSetter",(function(e){return ie(D(e),e)})),S.f=se,_.f=oe,w.f=re,I.f=ae,x.f=y.f=ce,v.f=le,T.f=function(e){return ie(E(e),e)},c&&(W(z,"description",{configurable:!0,get:function(){return U(this).description}}),a||P($,"propertyIsEnumerable",se,{unsafe:!0}))),i({global:!0,constructor:!0,wrap:!0,forced:!l,sham:!l},{Symbol:V}),L(g(ee),(function(e){F(e)})),i({target:"Symbol",stat:!0,forced:!l},{useSetter:function(){te=!0},useSimple:function(){te=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!c},{create:function(e,t){return void 0===t?O(e):re(O(e),t)},defineProperty:oe,defineProperties:re,getOwnPropertyDescriptor:ae}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ce}),M(),R(V,"Symbol"),A[B]=!0},44:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},440:function(e,t,n){var i=n(137),o=n(73),r=n(182).f,s=n(391),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"Window"==i(e)?function(e){try{return r(e)}catch(e){return s(a)}}(e):r(o(e))}},441:function(e,t,n){var i=n(70),o=n(66),r=n(49),s=n(85);e.exports=function(){var e=o("Symbol"),t=e&&e.prototype,n=t&&t.valueOf,a=r("toPrimitive");t&&!t[a]&&s(t,a,(function(e){return i(n,this)}),{arity:1})}},442:function(e,t,n){var i=n(53),o=n(66),r=n(38),s=n(96),a=n(114),c=n(278),l=a("string-to-symbol-registry"),d=a("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=s(e);if(r(l,t))return l[t];var n=o("Symbol")(t);return l[t]=n,d[n]=t,n}})},443:function(e,t,n){var i=n(53),o=n(38),r=n(141),s=n(169),a=n(114),c=n(278),l=a("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!c},{keyFor:function(e){if(!r(e))throw TypeError(s(e)+" is not a symbol");if(o(l,e))return l[e]}})},444:function(e,t,n){var i=n(53),o=n(66),r=n(261),s=n(70),a=n(26),c=n(30),l=n(271),d=n(31),u=n(65),p=n(141),h=n(272),b=n(98),m=o("JSON","stringify"),j=a(/./.exec),f=a("".charAt),O=a("".charCodeAt),g=a("".replace),x=a(1..toString),y=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,I=/^[\uDC00-\uDFFF]$/,_=!b||c((function(){var e=o("Symbol")();return"[null]"!=m([e])||"{}"!=m({a:e})||"{}"!=m(Object(e))})),w=c((function(){return'"\\udf06\\ud834"'!==m("\udf06\ud834")||'"\\udead"'!==m("\udead")})),S=function(e,t){var n=h(arguments),i=t;if((u(t)||void 0!==e)&&!p(e))return l(t)||(t=function(e,t){if(d(i)&&(t=s(i,this,e,t)),!p(t))return t}),n[1]=t,r(m,null,n)},P=function(e,t,n){var i=f(n,t-1),o=f(n,t+1);return j(v,e)&&!j(I,o)||j(I,e)&&!j(v,i)?"\\u"+x(O(e,0),16):e};m&&i({target:"JSON",stat:!0,arity:3,forced:_||w},{stringify:function(e,t,n){var i=h(arguments),o=r(_?S:m,null,i);return w&&"string"==typeof o?g(o,y,P):o}})},445:function(e,t,n){var i=n(53),o=n(98),r=n(30),s=n(185),a=n(107);i({target:"Object",stat:!0,forced:!o||r((function(){s.f(1)}))},{getOwnPropertySymbols:function(e){var t=s.f;return t?t(a(e)):[]}})},446:function(e,t,n){"use strict";var i=n(53),o=n(51),r=n(45),s=n(26),a=n(38),c=n(31),l=n(139),d=n(96),u=n(52).f,p=n(269),h=r.Symbol,b=h&&h.prototype;if(o&&c(h)&&(!("description"in b)||void 0!==h().description)){var m={},j=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=l(b,this)?new h(e):void 0===e?h():h(e);return""===e&&(m[t]=!0),t};p(j,h),j.prototype=b,b.constructor=j;var f="Symbol(test)"==String(h("test")),O=s(b.toString),g=s(b.valueOf),x=/^Symbol\((.*)\)[^)]+$/,y=s("".replace),v=s("".slice);u(b,"description",{configurable:!0,get:function(){var e=g(this),t=O(e);if(a(m,e))return"";var n=f?v(t,7,-1):y(t,x,"$1");return""===n?void 0:n}}),i({global:!0,constructor:!0,forced:!0},{Symbol:j})}},447:function(e,t,n){n(266)("iterator")},448:function(e,t,n){"use strict";var i=n(53),o=n(26),r=n(177),s=n(73),a=n(449),c=o([].join),l=r!=Object,d=a("join",",");i({target:"Array",proto:!0,forced:l||!d},{join:function(e){return c(s(this),void 0===e?",":e)}})},449:function(e,t,n){"use strict";var i=n(30);e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){return 1},1)}))}},45:function(e,t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof global&&global)||function(){return this}()||Function("return this")()},450:function(e,t,n){var i=n(53),o=n(30),r=n(107),s=n(173),a=n(270);i({target:"Object",stat:!0,forced:o((function(){s(1)})),sham:!a},{getPrototypeOf:function(e){return s(r(e))}})},451:function(e,t,n){n(53)({target:"Object",stat:!0},{setPrototypeOf:n(245)})},452:function(e,t,n){var i=n(190),o=n(85),r=n(453);i||o(Object.prototype,"toString",r,{unsafe:!0})},453:function(e,t,n){"use strict";var i=n(190),o=n(164);e.exports=i?{}.toString:function(){return"[object "+o(this)+"]"}},454:function(e,t,n){var i=n(53),o=n(66),r=n(261),s=n(455),a=n(398),c=n(62),l=n(65),d=n(111),u=n(30),p=o("Reflect","construct"),h=Object.prototype,b=[].push,m=u((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),j=!u((function(){p((function(){}))})),f=m||j;i({target:"Reflect",stat:!0,forced:f,sham:f},{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(j&&!m)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var i=[null];return r(b,i,t),new(r(s,e,i))}var o=n.prototype,u=d(l(o)?o:h),f=r(e,u,t);return l(f)?f:u}})},455:function(e,t,n){"use strict";var i=n(26),o=n(166),r=n(65),s=n(38),a=n(272),c=n(113),l=Function,d=i([].concat),u=i([].join),p={},h=function(e,t,n){if(!s(p,t)){for(var i=[],o=0;o<t;o++)i[o]="a["+o+"]";p[t]=l("C,a","return new C("+u(i,",")+")")}return p[t](e,n)};e.exports=c?l.bind:function(e){var t=o(this),n=t.prototype,i=a(arguments,1),s=function(){var n=d(i,a(arguments));return this instanceof s?h(t,n.length,n):t.apply(e,n)};return r(n)&&(s.prototype=n),s}},456:function(e,t,n){"use strict";var i=n(180).PROPER,o=n(85),r=n(62),s=n(96),a=n(30),c=n(417),l=RegExp.prototype.toString,d=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=i&&"toString"!=l.name;(d||u)&&o(RegExp.prototype,"toString",(function(){var e=r(this);return"/"+s(e.source)+"/"+s(c(e))}),{unsafe:!0})},457:function(e,t){e.exports=function(e,t,n,i){var o=n?n.call(i,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<r.length;c++){var l=r[c];if(!a(l))return!1;var d=e[l],u=t[l];if(!1===(o=n?n.call(i,d,u,l):void 0)||void 0===o&&d!==u)return!1}return!0}},458:function(e,t,n){"use strict";n.r(t),n.d(t,"listen",(function(){return J})),n.d(t,"subscribe",(function(){return X})),n.d(t,"unsubscribe",(function(){return Z}));var i=n(345),o=n.n(i),r=n(281),s=n.n(r),a=!1;if("undefined"!=typeof window)try{var c=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,c),window.removeEventListener("test",null,c)}catch(e){}var l=a,d={connections:{},EE:new s.a,enableResizeInfo:!1,enableScrollInfo:!1,listeners:{},removers:[],supportPassiveEvent:l},u=d.supportPassiveEvent,p={capture:!1,passive:!1};var h=function(e,t,n,i){var r="addEventListener",s="removeEventListener",a=t,c=!!u&&o()({},p,i);return!e.addEventListener&&e.attachEvent&&(r="attachEvent",s="detachEvent",a="on"+t),e[r](a,n,c),{remove:function(){e[s](t,n)}}},b=!1;if("undefined"!=typeof navigator){var m=navigator.userAgent.match(/MSIE (\d+\.\d+)/);m&&(b=parseFloat(m[1],10)<9)}var j=b,f=n(342),O=n.n(f),g=n(238),x=n.n(g),y=n(402),v=n.n(y),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var w={width:0,height:0},S={delta:0,top:0},P={axisIntention:"",startX:0,startY:0,deltaX:0,deltaY:0},C=function(e){var t={x:0,y:0},n=document.body,i=document.documentElement;return e.pageX||e.pageY?(t.x=e.pageX,t.y=e.pageY):(t.x=e.clientX+n.scrollLeft+i.scrollLeft,t.y=e.clientY+n.scrollTop+i.scrollTop),t},k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this,e);var n=(t.mainType||"").toLowerCase(),i=(t.subType||"").toLowerCase();this.mainType=n,this.subType=i,this.type=n+i.charAt(0).toUpperCase()+i.slice(1)||"",this.scroll=S,this.resize=w,this.touch=P}return I(e,[{key:"update",value:function(e){var t=this.mainType,n=this.subType,i=document.documentElement;if(d.enableScrollInfo&&("scroll"===t||"touchmove"===t)){var o=i.scrollTop+document.body.scrollTop;o!==this.scroll.top&&(this.scroll.delta=o-this.scroll.top,this.scroll.top=o)}if(d.enableResizeInfo&&"resize"===t&&(this.resize.width=window.innerWidth||i.clientWidth,this.resize.height=window.innerHeight||i.clientHeight),d.enableTouchInfo&&e.touches&&("touchstart"===t||"touchmove"===t||"touchend"===t)){var r=void 0,s=void 0,a=void 0;"touchstart"===t||"start"===n?(r=C(e.touches[0]),this.touch.axisIntention="",this.touch.startX=r.x,this.touch.startY=r.y,this.touch.deltaX=0,this.touch.deltaY=0):"touchmove"===t&&(r=C(e.touches[0]),this.touch.deltaX=r.x-this.touch.startX,this.touch.deltaY=r.y-this.touch.startY,""===this.touch.axisIntention&&(s=Math.abs(this.touch.deltaX),a=Math.abs(this.touch.deltaY),s>5&&s>=a?this.touch.axisIntention="x":a>5&&a>s&&(this.touch.axisIntention="y")))}}}]),e}(),A=n(223),D=n.n(A),E=Date.now||function(){return(new Date).getTime()};var T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=void 0,i=void 0,o=0,r=0,s=function s(){var a=E();t-(a-o)<=0?(o=a,r=0,e.apply(n,i)):r=D()(s)};return function(){n=this,i=arguments,r||(r=D()(s))}},F=d.connections,M=d.EE,R=d.listeners,N=d.removers,L=void 0,B=void 0,q=void 0,U=0;function $(e){return e.id||"target-id-"+U++}function V(e,t,n,i){return M.on(e,t||v.a,n),F[i=i||e]=(F[i]||0)+1,{_type:e,_cb:t,_ctx:n,unsubscribe:function(){if(this._type){M.removeListener(e,t,n),F[i]--,0===F[i]&&(R[i].remove(),R[i]=void 0),this._type=void 0,this._cb=void 0,this._ctx=void 0;for(var o=N.length-1;o>=0;o--){if(N[o]===this){N.splice(o,1);break}}}}}}function z(e,t,n){return function(i,o,r,s){var a=r.context,c=r.target,l=c&&$(c),d=l?":"+l:"",u=t+"Start:"+i+d,p=t+"End:"+i+d,b=t+":"+i+d,m=V(n+":"+i+d,o,a,b);if(N.push(m),R[b])return m;var f={start:new k({mainType:t,subType:"start"}),main:new k({mainType:t}),end:new k({mainType:t,subType:"end"})};"raf"===i?(i=16,v=T(v)):i>0&&(v=x()(v,i));var g=void 0;function y(e){f.end.update(e),M.emit(p,e,f.end),g=null}function v(e){g||(f.start.update(e),M.emit(u,e,f.start)),clearTimeout(g),f.main.update(e),M.emit(b,e,f.main),g=j?setTimeout((function(){y(O()(e))}),i+100):setTimeout(y.bind(null,e),i+100)}return R[b]=h(c||e,t,v,s),m}}function G(e,t){return function(n,i,o,r){var s=o.context,a=o.target,c=a&&$(a),l=t+":0"+(c?":"+c:""),d=V(l,i,s);if(N.push(d),R[l])return d;var u=new k({mainType:t});return R[l]=h(a||e,t,(function(e){u.update(e),M.emit(l,e,u)}),r),d}}"undefined"!=typeof window&&(q=(L=(B=window).document||document).body);var Q={scrollStart:z(B,"scroll","scrollStart"),scrollEnd:z(B,"scroll","scrollEnd"),scroll:z(B,"scroll","scroll"),resizeStart:z(B,"resize","resizeStart"),resizeEnd:z(B,"resize","resizeEnd"),resize:z(B,"resize","resize"),visibilitychange:G(L,"visibilitychange"),touchmoveStart:z(q,"touchmove","touchmoveStart"),touchmoveEnd:z(q,"touchmove","touchmoveEnd"),touchmove:z(q,"touchmove","touchmove"),touchstart:G(q,"touchstart"),touchend:G(q,"touchend")};var H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.useRAF||!1,o=parseInt(n.throttleRate,10),r=n.eventOptions;return isNaN(o)&&(o=50),i&&(o="raf"),j&&(o=0),d.enableScrollInfo=d.enableScrollInfo||n.enableScrollInfo||!1,d.enableResizeInfo=d.enableResizeInfo||n.enableResizeInfo||!1,d.enableTouchInfo=d.enableTouchInfo||n.enableTouchInfo||!1,Q[e](o,t,n,r)},W=d.removers;var Y="undefined"!=typeof window;function K(){0}var J=Y?h:K,X=Y?H:K,Z=Y?function(e,t){for(var n=void 0,i=W.length-1;i>=0;i-=1)(n=W[i])._cb===t&&n._type.indexOf(e)>=0&&(n.unsubscribe(),W.splice(i,1))}:K},459:function(e,t,n){"use strict";n.r(t);var i=n(628);t.default=i.a},466:function(e,t,n){"use strict";var i=n(16),o=n.n(i),r=n(4),s=n(1),a=n(0);class c extends r.Component{getLikers(){const e=Math.min(12,this.props.likers.length);return this.props.likers.slice(0,e)}getList(){return Object(a.jsx)(s.List,{type:"bare",size:"s",spacing:"none",children:this.getLikers().map(e=>Object(a.jsx)(s.List.Item,{children:e.fullName},e.accountId))})}getOthers(){const e=this.props.total-this.getLikers().length;return e<=0?null:Object(a.jsxs)("div",{children:["and ",e," ",o()("other",e)]})}render(){return this.props.total<=0||this.getLikers().length<=0?null:Object(a.jsxs)("div",{children:[this.getList(),this.getOthers()]})}}c.displayName="LikesTooltip",c.defaultProps={total:0,likers:[],maxDisplayed:12},t.a=c},467:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"i",(function(){return j})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return O})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return x})),n.d(t,"e",(function(){return y}));var i=n(118),o=n(219),r=(n(282),n(554));function s(e){return!!e&&e>0}function a(e,t){return f(e,t)}function c(e,t,n){return t.get("externalType")!==o.a.EXTERNAL_TYPE_DESCRIPTION&&(!(n>0)&&e===t.get("accountId"))}function l(e,t,n){return f(e,n)&&t.get("rootId")===n.rgKey&&t.get("parentId")!==n.conversationKeys.default}function d(e,t){return s(e)&&e===t.get("accountId")}function u(e,t){return function(e){const t=e.get("externalType");return Object(i.a)(r.a,t)&&!0===r.a[t]}(t)&&d(e,t)}function p(e,t){return!d(e,t)}function h(e,t){return d(e,t)}function b(e,t){return t.get("canDelete")}function m(e,t){return!d(e,t)}function j(e,t){return!!t&&!f(e,t)}function f(e,t){return s(e)&&t.collaborators&&-1!==t.collaborators.findIndex(t=>t.accountId===e)}function O(e,t){return s(e)&&t.ownerAccountIds.includes(e)}function g(e,t){return f(e,t)}function x(e,t){return f(e,t)}function y(e,t){return f(e,t)}},472:function(e,t,n){"use strict";var i=n(23),o=n(222),r=n(0);function s({cssModifier:e,accountId:t,size:n,onMouseEnter:i,onMouseLeave:s}){const a="facepile-react-item facepile-react-item-"+e;return Object(r.jsx)(o.a,{accountId:t,size:n,linked:!1,className:a,onMouseEnter:i,onMouseLeave:s})}s.defaultProps={cssModifier:"default"};n(1053);function a(e){const t=e.item,n=e.accountIds.map(n=>Object(r.jsx)(t,{cssModifier:e.itemCSSModifier,accountId:n,size:e.size},n)).reverse(),o=["facepile-react"];e.className&&o.push(e.className);const s=Object(i.default)({"facepile-react-inner":!0,"facepile-react-l":"l"===e.size,"facepile-react-m":"m"===e.size,"facepile-react-s":"s"===e.size,"facepile-react-xs":"xs"===e.size,"facepile-react-xxs":"xxs"===e.size});return Object(r.jsx)("div",{className:Object(i.default)(o),children:Object(r.jsx)("span",{className:s,children:n})})}a.defaultProps={item:s};var c=n(2),l=n(10),d=n(5),u=n(651);let p;const h=["accountId","cssModifier"],b=e=>{let{accountId:t,cssModifier:n}=e,i=Object(l.a)(e,h);return Object(r.jsx)("div",{className:"facepile-react-item facepile-react-item-"+n,children:Object(r.jsx)(u.b,Object(c.a)({id:t},i))})};b.defaultProps={cssModifier:"default"};Object(d.withQuery)(Object(d.gql)(p||(p=(e=>e)`query FacepileAvatar($accountId: ID!) {
  account(id: $accountId) {
    id
    ...ProfileAvatar @embed
    __typename
  }
  __typename
}
`)))(b),t.a=a},481:function(e,t,n){},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(1),o=n(4),r=n(340),s=n(0);class a extends o.Component{render(){return Object(s.jsx)(i.List,{type:"inline",spacing:"none",children:Object(s.jsx)(i.List.Item,{children:Object(s.jsx)(r.a,{accountId:this.props.accountId})})})}}a.displayName="ProfileInfo";var c=a,l=n(208),d=n(222);function u(e){return Object(s.jsxs)(i.MediaObject,{verticalAlign:"middle",gutter:"xs",children:[Object(s.jsx)(i.MediaObject.Item,{children:Object(s.jsx)(d.a,{accountId:e.accountId,size:e.pictureSize})}),Object(s.jsxs)(i.MediaObject.Item,{width:"full",children:[Object(s.jsxs)(i.Text,{spacing:"none",children:[Object(s.jsx)(l.a,{accountId:e.accountId,color:"blue",theme:"bare"}),e.badge]}),Object(s.jsx)(c,{accountId:e.accountId})]}),Object(s.jsx)(i.MediaObject.Item,{children:e.button})]})}u.defaultProps={pictureSize:"l"}},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(124),o=n(830),r=n(35);function s(e,t){Object(r.a)(2,arguments);var n=Object(i.a)(t);return Object(o.a)(e,6e4*n)}},487:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const i="added a Research Spotlight",o="spotlight"},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y}));var i=n(2),o=n(10),r=n(236),s=n.n(r),a=n(549),c=n(4),l=n(5),d=n(91),u=n(796),p=n.n(u),h=n(599),b=n(14),m=(e,t)=>p()(t,t.map(t=>{Object(h.a)(t in e,`Milestones [${t}] not found`);const n=e[t]||"";return{name:t,goal:n,query:Object(b.b)(n),score:()=>Object(b.a)(n)}})),j=n(0);const f=["selectedVariant","viewId"],O=Object(a.default)((e,t,n,r,a)=>{const{selectedVariant:c,viewId:l}=e,d=Object(o.a)(e,f),u={};return n&&(u.selectedVariant=c||null),r&&(u.viewId=l||null),{[a]:s()({},m(d,t),Object(i.a)({},u))}});var g=(e,t,n={})=>{const o=Object(c.createContext)(n),r=o.Provider,s=o.Consumer;return{Provider:Object(l.withQuery)(e,{mapDataToProps:e=>({milestones:t(e)})})(({children:e,milestones:t})=>Object(j.jsx)(r,{value:t,children:e})),Consumer:s,hoc:(e,{includeSelectedVariant:t=!1,includeViewId:n=!1,experimentProperty:o="experiment"}={})=>r=>{const a=Object(c.forwardRef)((a,c)=>Object(j.jsx)(s,{children:s=>Object(j.jsx)(r,Object(i.a)(Object(i.a)({ref:c},a),O(s,e,t,n,o)))}));return a.displayName=Object(d.a)(r,"WithExperiment"),a}}},x=n(118),y=(e,t)=>e&&Object(x.a)(e,t)?e[t]:{name:t,goal:"",query:"",score:()=>{}}},49:function(e,t,n){var i=n(45),o=n(114),r=n(38),s=n(176),a=n(98),c=n(254),l=o("wks"),d=i.Symbol,u=d&&d.for,p=c?d:d&&d.withoutSetter||s;e.exports=function(e){if(!r(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&r(d,e)?l[e]=d[e]:l[e]=c&&u?u(t):p(t)}return l[e]}},494:function(e,t,n){},495:function(e,t,n){"use strict";var i=n(7),o=n(341),r=n(183);t.a=Object(i.a)(Object(r.a)())(o.a)},496:function(e,t,n){"use strict";var i=n(1),o=n(7),r=n(6),s=n(325);s.a.role=i.PublicationItem.Authors.role,t.a=Object(o.a)(Object(r.b)((e,t)=>{const n=t.authors,i=t.authors?t.authors.length:0,o=Math.min(i,3),r=Math.min(i-o,1);return{headAuthorships:n.slice(0,3),tailAuthorships:r?n.slice(-r):[],countLeft:i-o-r,highlightedAuthor:n.find(e=>e.isHighlighted)}}))(s.a)},497:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(1),s=n(0);const a=["children","href"];t.a=e=>{let{children:t,href:n}=e,c=Object(o.a)(e,a);return n||c.onClick?Object(s.jsx)("span",{children:Object(s.jsx)(r.Link,Object(i.a)(Object(i.a)({},c),{},{className:"",href:n,theme:"bare",children:t}))}):Object(s.jsx)("span",Object(i.a)(Object(i.a)({},c),{},{className:"",children:t}))}},498:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n(8),a=n.n(s),c=n(1),l=n(7),d=n(6),u=(n(660),n(0));const p=["children","size"],h=new a.a("publication-item-meta-items");t.a=Object(l.a)(Object(d.h)(c.PublicationItem.MetaItems))(e=>{let{children:t,size:n}=e,s=Object(o.a)(e,p);const a=n||"m";return Object(u.jsx)(c.List,Object(i.a)(Object(i.a)(Object(i.a)({},s),h("meta-data")),{},{type:"inline",spacing:"none",size:a,children:r.Children.map(t,e=>Object(u.jsx)(c.List.Item,Object(i.a)(Object(i.a)({},h("meta-data-item")),{},{children:e})))}))})},499:function(e,t,n){"use strict";var i=n(4),o=n(666),r=n(805);t.a=e=>{const t=Object(o.a)(e),[n,s]=Object(i.useState)(t);return Object(i.useEffect)(()=>Object(r.a)((n,i)=>s(i[e]||t)),[]),n}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));const i="question",o="discussion"},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(75),o=n(47);const r=Object(o.a)([e=>e.publicationFulltextRequests||new i.Map,(e,t)=>t.publicationUid],(e,t)=>e.get(String(t))||new i.Map)},504:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(1),s=n(0);class a extends o.Component{constructor(...e){super(...e),this.handleRequest=()=>{this.props.onRequestFulltext()},this.handleUndoRequest=()=>{this.props.isUndoRequestAllowed&&this.props.onUndoRequestFulltext()}}getRequestText(){return"Request "+(this.props.isResearchType?"file":"full-text")}getUndoRequestText(){return(this.props.isResearchType?"File":"Full-text")+" requested"}render(){const e=Object(i.a)({status:this.props.isUndoRequestAllowed?"":"disabled",onClick:this.props.isRequested?this.handleUndoRequest:this.handleRequest,type:"button",theme:"bare",color:"blue"},this.props.buttonProps);return Object(s.jsx)(r.Button,Object(i.a)(Object(i.a)({},e),{},{children:this.props.isRequested?this.getUndoRequestText():this.getRequestText()}))}}a.displayName="RequestFulltextButton",a.defaultProps={buttonProps:{theme:"bare",type:"button",color:"blue"}},t.a=a},505:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(9),c=n(1),l=n(7),d=n(6),u=n(15),p=n(14),h=n(13),b=n(50),m=n(127),j=n(284),f=n(339),O=n(183),g=n(0);const x=new s.a("social-bar");class y extends o.Component{constructor(...t){super(...t),this.openShareDialog=()=>{this.props.dispatch(Object(u.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:new a.a(this.props.publicationUid,a.b.TYPE_PUBLICATION).toString(),context:this.props.context},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))},this.postDiscussionCreation=({url:e})=>{this.props.dispatch(Object(u.unmountModal)());const t=Object(h.a)(e,Object(p.b)(this.props.discussionMilestones.posted));Object(h.c)(t)},this.openDiscussionModal=()=>{const{dispatch:e,discussionMilestones:t,bareRootUrl:n}=this.props;Object(p.a)(t.seen),e(Object(u.mountModal)(()=>Object(g.jsx)(f.a,{id:"create-discussion",isOpen:!0,context:"publicationItemListSocialBar",postType:b.a,onFinishPromise:this.postDiscussionCreation,isVisibilityVisible:!1,additionalRequestParameters:{},prefilledMentions:[{url:n}]})))}}getPrimary(){const{publicationUid:e,hasDisplayableLink:t,downloadLink:n,publicationUrl:i,onRequestFulltext:o,alwaysShowViewButton:r,hideViewButton:s,isDiscussionStartButtonEnabled:a}=this.props,l=r||t&&!n&&!s;return Object(g.jsxs)(c.ButtonGroup,{children:[l&&Object(g.jsx)(c.Button,{type:"button",theme:"ghost",size:"s",href:i,children:"View"},"view"),t&&n&&Object(g.jsx)(c.Button,{type:"button",theme:"ghost",href:n,size:"s",children:"Download"},"download"),Object(g.jsx)(j.a,{onRequestFulltext:o,publicationUid:e,buttonProps:{type:"button",theme:"ghost",size:"s"}},"requestFulltext"),a&&Object(g.jsx)(c.Button,{type:"button",theme:"bare",onClick:this.openDiscussionModal,size:"s",children:"Start discussion"},"download")]})}getActions(){const{isAuthor:e,isFollowing:t,follow:n,unfollow:i,publicationUid:o,likeButtonIepl:r,context:s,type:l}=this.props,d=new a.a(o,a.b.TYPE_PUBLICATION).getFullKey();return Object(g.jsxs)(c.ButtonGroup,{children:[!e&&Object(g.jsx)(m.a,{id:d,context:s,theme:"bare",size:"s",color:"black",iepl:r,qualifier:l.toLowerCase()},"like_"+o),!e&&Object(g.jsx)(c.Button,{type:"button",theme:"bare",color:"black",onClick:t?i:n,children:Object(g.jsx)(c.Button.Label,{children:t?"Following":"Follow"})}),Object(g.jsx)(c.Button,{type:"button",theme:"bare",color:"black",onClick:this.openShareDialog,children:Object(g.jsx)(c.Button.Label,{children:"Share"})})]})}render(){return this.props.isMobile?Object(g.jsxs)(c.Stack,Object(i.a)(Object(i.a)({gutter:"s"},x()),{},{children:[Object(g.jsx)(c.Stack.Item,{children:this.getActions()}),Object(g.jsx)(c.Stack.Item,{children:this.getPrimary()})]})):Object(g.jsxs)(c.Flex,Object(i.a)(Object(i.a)({},x()),{},{children:[Object(g.jsx)(c.Flex.Item,{grow:!0,alignSelf:"center",children:this.getPrimary()}),Object(g.jsx)(c.Flex.Item,{alignSelf:"center",children:this.getActions()})]}))}}y.displayName="PublicationItemListSocialBar",t.a=Object(l.a)(Object(d.b)(),Object(O.a)())(Object(d.m)(y))}).call(this,n(58)(e))},506:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(9),r=n(82),s=n(7),a=n(6),c=n(15),l=n(127),d=n(183),u=n(0);class p extends i.Component{constructor(...t){super(...t),this.openShareDialog=()=>{this.props.dispatch(Object(c.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:new o.a(this.props.publicationUid,o.b.TYPE_PUBLICATION).toString(),context:this.props.context},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))}}render(){const{isAuthor:e,isFollowing:t,follow:n,unfollow:i,publicationUid:s,likeButtonIepl:a,context:c,type:d}=this.props,p=new o.a(s,o.b.TYPE_PUBLICATION).getFullKey();return Object(u.jsxs)(r.a,{children:[Object(u.jsxs)(r.a.Column,{grow:!0,children:[!e&&Object(u.jsx)(l.a,{id:p,context:c,theme:"bare",size:"s",color:"black",iepl:a,iconLike:"recommend",iconLiked:"recommend-fill",qualifier:d.toLowerCase()},"like_"+s),!e&&Object(u.jsx)(r.a.Action,{icon:t?"bookmark-fill":"bookmark",onClick:t?i:n,children:t?"Following":"Follow"})]}),Object(u.jsx)(r.a.Column,{children:Object(u.jsx)(r.a.Action,{icon:"arrow-corner-top-right",onClick:this.openShareDialog,children:"Share"})})]})}}p.displayName="PublicationItemSocialBar",t.a=Object(s.a)(Object(a.b)(),Object(a.a)(({isAuthor:e})=>!e,Object(d.a)()),a.m)(p)}).call(this,n(58)(e))},51:function(e,t,n){var i=n(30);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},515:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n(2),o=n(10),r=n(145),s=n.n(r),a=n(4),c=n(12),l=n(1),d=n(33),u=n(11),p=n(14),h=n(467),b=n(508),m=n(282),j=n(0);const f=["isVisible","ignoreFollowIsVisible","follow","unfollow","isFollowing"];function O({getProjectId:e=s()("projectId"),getContext:t=s()("context"),getEntryChannel:n=s()("entryChannel"),getTrackingGoal:r=s()("trackingGoal"),getExtraParams:O=s()("extraParams")}={}){const g=(t,n)=>{const i=e(n);return{isFollowing:Object(m.e)(t,{projectId:i}),isVisible:Object(h.i)(t.accountsGlobalCurrentAccount.id,t.projectsProjects[i])}},x=(i,o)=>{const s=e(o),a=t(o),c=n(o),h=r(o),m=O(o);return{follow:()=>i(Object(b.i)(s,b.e,a,c,m)).then(()=>{i(Object(u.pushAlert)(()=>Object(j.jsx)(d.a,{title:"You are now following this project"}))),h&&Object(p.a)(h)}).catch(()=>i(Object(u.pushAlert)(()=>Object(j.jsx)(l.Alert,{title:"Project could not be followed",color:"red"})))),unfollow:()=>i(Object(b.j)(s,a,c)).then(()=>{i(Object(u.pushAlert)(()=>Object(j.jsx)(d.a,{title:"You are no longer following this project"})))})}};return e=>{class t extends a.Component{constructor(...e){super(...e),this.toggleFollow=()=>{const{isFollowing:e,follow:t,unfollow:n}=this.props;e?n():t()}}render(){const t=this.props,{isVisible:n,ignoreFollowIsVisible:r,follow:s,unfollow:a,isFollowing:c}=t,l=Object(o.a)(t,f);return n||r?Object(j.jsx)(e,Object(i.a)({follow:s,unfollow:a,toggleFollow:this.toggleFollow,isFollowing:c},l)):null}}return t.displayName="FollowWrapper",Object(c.connect)(g,x)(t)}}},52:function(e,t,n){var i=n(51),o=n(255),r=n(256),s=n(62),a=n(140),c=TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor;t.f=i?r?function(e,t,n){if(s(e),t=a(t),s(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var i=d(e,t);i&&i.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:i.configurable,enumerable:"enumerable"in n?n.enumerable:i.enumerable,writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},522:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(131),s=n(0);class a extends o.Component{constructor(e){super(e),this.goToStep=(e,t)=>{this.dataStore=Object(i.a)(Object(i.a)({},this.dataStore),t),this.calculateNextStep(e),this.props.getCurrentStep&&this.props.getCurrentStep(e)},this.steps=e.steps,this.dataStore=e.data,this.state={currentStep:e.initialStep}}callDidChange(e,t){e!==t&&this.props.stepDidChange(e,t)}componentDidMount(){this.callDidChange(null,this.state.currentStep)}componentDidUpdate(e,t){this.callDidChange(t.currentStep,this.state.currentStep)}calculateNextStep(e){this.setState({currentStep:e})}getCurrentStepComponent(){return this.state.currentStep===this.props.lastStep&&this.props.onDone(),this.steps[this.state.currentStep]}renderCurrentComponent(e={}){return Object(o.cloneElement)(this.getCurrentStepComponent(),Object(i.a)({goToStep:this.goToStep,flowData:this.dataStore,parentState:this.props.parentState},e))}render(){return this.props.isTransitionEnabled?Object(s.jsx)(r.CSSTransitionGroup,Object(i.a)(Object(i.a)({component:"div"},this.props.transitionProps),{},{children:this.renderCurrentComponent({key:this.state.currentStep})})):this.renderCurrentComponent()}}a.displayName="ComponentFlowManager",a.defaultProps={transitionProps:{transitionEnter:!1,transitionLeave:!1,transitionEnterTimeout:0,transitionLeaveTimeout:0,transitionName:"transition"},isTransitionEnabled:!0,onDone:()=>{},stepWillChange:()=>{},stepDidChange:()=>{}},t.a=a},525:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(10),o=n(2),r=n(297),s=n.n(r),a=n(4),c=n(1),l=n(5),d=n(20),u=n(0);const p=["query","searchKey","variables","autoFocus","getOptionListData","multipleValues","allowCustomValues","renderValue","renderOption","getInputProps"],h=["elementTestId","getOptionListProps","getOptionListItemProps","getTagInputProps","getTagProps","getTriggerProps","id","isInvalid","placeholder","status","values","isSortable"];class b extends a.Component{constructor(...e){super(...e),this.state={searchQuery:""},this.createInputChangeHandler=e=>({target:{value:t}})=>{t.length<this.props.minLength?this.setState({searchQuery:""}):this.setState({searchQuery:t},()=>{void 0!==this.controller&&this.controller.abort(),this.controller=new AbortController,e({signal:this.controller.signal}).catch(e=>{"TypeError"===e.name&&"cancelled"===e.message&&Object(d.default)(new Error("Found faulty error"))})})},this.renderItem=e=>"string"==typeof e?e:e[this.props.selectorKey],this.handleChange=e=>{const{selectorKey:t,multipleValues:n,onChange:i}=this.props;let o=n?e:e[0];"string"==typeof o&&(o={[t]:o}),null==i||i(o)}}static getDerivedStateFromProps({selectorKey:e,searchKey:t},{prevSelectorKey:n}){if(e!==n){const n={};return t?n.method=e=>e:n.keys=[e],{filterConfig:n,compareConfig:{method:(t,n)=>!!t&&("string"==typeof t?t===n[e]:t[e]===n[e])},prevSelectorKey:e}}return null}componentDidMount(){this.root&&this.root.input.focus()}render(){const e=this.props,{query:t,searchKey:n,variables:r,autoFocus:a,getOptionListData:d,multipleValues:b,allowCustomValues:m,renderValue:j,renderOption:f,getInputProps:O}=e,g=Object(i.a)(e,p),{searchQuery:x,compareConfig:y,filterConfig:v}=this.state,I=s()(g,h);a&&void 0===this.root&&(I.ref=e=>{this.root=e}),I.getInputProps=Object(o.a)(Object(o.a)({},O),{},{spellCheck:!1});const _=Object(o.a)({},r);return n&&(_[n]=x),Object(u.jsx)(l.Query,{query:t,variables:_,fetch:n&&"forceOnly",render:(e,t,{queryStatus:i,forceRefetch:r})=>{const s={};if(e)I.getTagInputProps=Object(o.a)(Object(o.a)({},I.getTagInputProps),{},{status:"invalid",values:[],placeholder:"An unexpected error occurred. Please try again later."});else if(!n||""!==x){s.isLoading="loaded"!==i;const e=t&&d(t);Array.isArray(e)&&(s.options=e)}return n&&(this.inputChangeHandler||(this.inputChangeHandler=this.createInputChangeHandler(r)),I.getInputProps=Object(o.a)(Object(o.a)({},I.getInputProps),{},{onChange:this.inputChangeHandler})),Object(u.jsx)(c.AdvancedSelect,Object(o.a)(Object(o.a)(Object(o.a)({},I),s),{},{filterConfig:v,compareConfig:y,renderValue:j||this.renderItem,renderOption:f||this.renderItem,multipleValues:b,allowCustomValues:m,defaultHighlightedIndex:m?0:null,onChange:this.handleChange}))}})}}b.displayName="GraphQLAdvancedSelect",b.defaultProps={searchKey:"query",variables:{},minLength:1,autoFocus:!1,multipleValues:!1,allowCustomValues:!0};var m=b},53:function(e,t,n){var i=n(45),o=n(179).f,r=n(135),s=n(85),a=n(175),c=n(269),l=n(416);e.exports=function(e,t){var n,d,u,p,h,b=e.target,m=e.global,j=e.stat;if(n=m?i:j?i[b]||a(b,{}):(i[b]||{}).prototype)for(d in t){if(p=t[d],u=e.dontCallGetSet?(h=o(n,d))&&h.value:n[d],!l(m?d:b+(j?".":"#")+d,e.forced)&&void 0!==u){if(typeof p==typeof u)continue;c(p,u)}(e.sham||u&&u.sham)&&r(p,"sham",!0),s(n,d,p,e)}}},535:function(e,t,n){"use strict";var i=n(4),o=n(328),r=n(276),s=n(0);t.a=({children:e,source:t,sourceContentId:n,referrerContentId:a})=>{const{sourcePath:c,sourceContentId:l,referrerContentId:d}=Object(i.useContext)(o.a),u=[...c,t];return Object(s.jsx)(o.a.Provider,{value:{sourcePath:u,source:u.join(r.s),sourceContentId:n||l,referrerContentId:d||a},children:e})}},5374:function(e,t,n){"use strict";n.r(t);var i=n(3391),o=n(25);window["renderReact_profile/Profile"]=function(e){Object(o.renderForClient)(i.a,e)}},5375:function(e,t,n){},5376:function(e,t,n){},5378:function(e,t,n){},5379:function(e,t,n){},5380:function(e,t,n){},5381:function(e,t,n){},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const i={[n(219).a.EXTERNAL_TYPE_POST]:!0};function o(e,t,n=null){return n=function(e){if(!e)return"";return"&"+Object.keys(e).map(t=>`${"contexts"===t?`_iepl[${t}][]`:`_iepl[${t}]`}=${e[t]}`).join("&")}(n),`${e.metadata.assetDownloadUrl}?context=${t}${n}`}},559:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return w}));var i=n(2),o=n(8),r=n.n(o),s=n(1),a=n(77),c=n(0);const l=({icon:e})=>Object(c.jsx)(s.Icon,{identifier:e,size:"l"});l.role="EmptyStateIcon";var d=l;const u=({imageSrc:e})=>Object(c.jsx)("img",{src:e});u.role="EmptyStateImage";var p=u;n(1246);const h=new r.a("empty-state"),b=({headline:e,note:t,children:n})=>{const o=Object(a.a)(n,d.role,1),r=Object(a.a)(n,p.role,1);return Object(c.jsxs)(s.Flex,Object(i.a)(Object(i.a)({direction:"column",alignItems:"center",gutter:"xs"},h()),{},{children:[Object(c.jsx)(s.Flex.Item,{children:o||r}),Object(c.jsxs)(s.Flex.Item,{children:[e&&Object(c.jsx)(s.Text,{color:"grey-800",size:"l",spacing:t?"xxs":"none",children:Object(c.jsx)("strong",{children:e})}),t&&Object(c.jsx)(s.Text,{color:"grey-600",size:"m",children:t})]})]}))};b.Icon=d,b.Image=p;var m=b;n(1211);const j=new r.a("empty-state-action-required"),f=({imageSrc:e,headline:t,note:n,onClick:o,href:r,color:a})=>Object(c.jsx)("div",Object(i.a)(Object(i.a)({},j("","color-"+a)),{},{children:Object(c.jsxs)(s.Flex,{direction:"column",alignItems:"center",gutter:"xs",children:[Object(c.jsx)(s.Flex.Item,{children:Object(c.jsx)("img",{src:e,alt:""})}),Object(c.jsxs)(s.Flex.Item,{children:[t&&Object(c.jsx)(s.Text,Object(i.a)(Object(i.a)({color:"grey-800",size:"l",spacing:n?"xxs":"none"},j("headline")),{},{children:Object(c.jsx)(s.Link,{theme:"silent",onClick:o,href:r,children:Object(c.jsx)("strong",{children:t})})})),n&&Object(c.jsx)(s.Text,{color:"grey-600",size:"m",children:n})]})]})}));f.defaultProps={color:"white"};var O=f,g=n(94),x=n.n(g);n(1247);const y=new r.a("empty-state-slim"),v={l:"m",m:"m"},I=e=>(x()("string"==typeof v[e],"Size not configured"),v[e]),_=({headline:e,note:t,onClick:n,size:o,ariaLabel:r,color:a})=>Object(c.jsx)(s.Link,Object(i.a)(Object(i.a)({theme:"silent",onClick:n,"aria-label":r},y("","color-"+a)),{},{children:Object(c.jsxs)(s.Flex,{direction:"row",alignItems:"center",gutter:"m",children:[Object(c.jsx)(s.Flex.Item,{grow:!0,children:Object(c.jsxs)(s.Stack,{gutter:"xxs",children:[e&&Object(c.jsx)(s.Stack.Item,{children:Object(c.jsx)(s.Text,Object(i.a)(Object(i.a)({color:"grey-800",size:o},y("headline")),{},{children:Object(c.jsx)("strong",{children:e})}))}),t&&Object(c.jsx)(s.Stack.Item,{children:Object(c.jsx)(s.Text,{color:"grey-600",size:I(o),children:t})})]})}),Object(c.jsx)(s.Flex.Item,{children:Object(c.jsx)(s.Icon,{identifier:"plus",theme:"ghost",color:"blue"})})]})}));_.defaultProps={size:"l",color:"white"};var w=_},565:function(e,t,n){"use strict";t.__esModule=!0;var i=r(n(4)),o=r(n(891));function r(e){return e&&e.__esModule?e:{default:e}}t.default=i.default.createContext||o.default,e.exports=t.default},5734:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var i=n(4),o=n(14),r=(n(2539),n(0));const s=Object(i.createContext)({scoreMilestones:()=>{}}),a={JournalClick:"journalClick",JournalFollow:"journalFollow"},c=({children:e,milestones:t})=>Object(r.jsx)(s.Provider,{value:{scoreMilestones:e=>{const n=t[e];Object(o.g)(Array.isArray(n)?n:[n])}},children:e})},574:function(e,t,n){"use strict";var i=n(1),o=n(77),r=n(2),s=n(965),a=n(0);const c=e=>Object(a.jsx)(s.a,Object(r.a)({},e));c.role="ProfileOverviewCardHeader.Action";var l=c,d=n(3);const u=({children:e})=>e;u.propTypes={children:n.n(d).a.any},u.role="ProfileOverviewCardHeader.CustomActions";var p=u;const h=e=>Object(a.jsx)(s.a,Object(r.a)({},e));h.role="ProfileOverviewCardHeaderDropdownAction.Action";var b=h;const m=({children:e})=>Object(a.jsx)(i.Text,{size:"l",color:"grey-600",children:e});m.role="ProfileOverviewCardHeader.Label";var j=m;var f=({children:e})=>{const t=Object(o.a)(e,j.role),n=Object(o.a)(e,l.role),r=Object(o.a)(e,p.role),s=Object(o.a)(e,b.role);return Object(a.jsxs)(i.Flex,{justifyContent:"space-between",alignItems:"center",children:[Object(a.jsx)(i.Flex.Item,{children:t}),n&&Object(a.jsx)(i.Flex.Item,{children:n}),s&&Object(a.jsx)(i.Flex.Item,{children:s}),r&&Object(a.jsx)(i.Flex.Item,{children:r})]})};f.Label=j,f.Action=l,f.CustomActions=p,b.Action=b;t.a=f},59:function(e,t,n){"use strict";n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return _})),n.d(t,"p",(function(){return be})),n.d(t,"q",(function(){return je})),n.d(t,"r",(function(){return Oe})),n.d(t,"h",(function(){return G})),n.d(t,"o",(function(){return P.a})),n.d(t,"i",(function(){return S.a})),n.d(t,"e",(function(){return C})),n.d(t,"k",(function(){return T})),n.d(t,"j",(function(){return D})),n.d(t,"f",(function(){return M})),n.d(t,"b",(function(){return j})),n.d(t,"m",(function(){return de})),n.d(t,"n",(function(){return pe})),n.d(t,"l",(function(){return le})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return V}));var i=n(5),o=n(2),r=n(1),s=n(7),a=n(6),c=n(19),l=n(0);var d=Object(s.a)(Object(a.h)(r.PublicationItem.Abstract),Object(i.withQuery)(c.b,{mapDataToProps:({publication:e})=>Object(o.a)({},e)}))(({abstract:e,onClick:t,isExpandable:n=!1})=>e?Object(l.jsx)(r.PublicationItem.Abstract,{isExpandable:n,onClick:t,children:e}):null),u=n(14),p=n(13),h=n(147);var b=Object(a.h)(r.PublicationItem.Author)(({authorship:e,isTooltipEnabled:t,disableLinks:n,milestone:i,context:o})=>{let s;n||(s=e.url,i&&(s=Object(p.a)(s,"string"==typeof i?Object(u.b)(i):Object(u.e)(i))));const a=Object(l.jsx)(r.PublicationItem.Author,{href:s,imageUrl:e.imageUrl,children:e.fullName});if(t){var c,d;const t=null===(c=e.author)||void 0===c||null===(d=c.claimingAccount)||void 0===d?void 0:d.id;if(t)return Object(l.jsx)(h.a,{accountId:t,context:o,children:a})}return a});const m=({authorships:e,isTooltipEnabled:t,disableLinks:n,milestone:i,size:o,context:s})=>{const a="s"===o?2:4,c=a-1,d=e.slice(0,c).map((e,o)=>Object(l.jsx)(b,{authorship:e,isTooltipEnabled:t,disableLinks:n,milestone:i,context:s},o));if(e.length>a&&d.push(Object(l.jsx)(r.PublicationItem.AuthorTruncation,{},c)),e.length>c){const o=e.slice(-1)[0];d.push(Object(l.jsx)(b,{authorship:o,isTooltipEnabled:t,disableLinks:n,milestone:i,context:s},a))}return Object(l.jsx)(r.PublicationItem.Authors,{children:d})};m.defaultProps={size:"m",isTooltipEnabled:!0};var j=Object(s.a)(Object(a.h)(r.PublicationItem.Authors),Object(i.withQuery)(c.c,{mapDataToProps:({publication:{authorships:e}})=>({authorships:e.filter(e=>!!e.fullName)})}))(m),f=n(116),O=n(153),g=n(4),x=n(28);var y=Object(a.h)(r.PublicationItem.Badge)(({children:e,href:t})=>Object(l.jsx)(r.Badge,{href:t,color:"yellow",size:"l",radius:"m",theme:"ghost",style:{margin:0},children:e}));class v extends g.Component{renderNovelty(){const{url:e,urlParams:t,isNew:n,disableLinks:i}=this.props;return n?Object(l.jsx)(r.PublicationItem.Badge,{priority:"primary",href:i?null:Object(p.a)(e,t),children:"New"}):null}renderType(){const{url:e,urlParams:t,fulltextUrlParams:n,type:i,hasLiteratureReview:o,disableLinks:s}=this.props;return Object(l.jsx)(r.PublicationItem.Badge,{priority:"secondary",href:s?null:Object(p.a)(e,null!=n?n:t),children:o?"Literature Review":Object(x.z)(i)})}renderFulltext(){const{url:e,urlParams:t,fulltextUrlParams:n,isAuthor:i,isPublishedVersionAvailable:o,hasLink:s,hasLinkAndItIsPrivate:a,hasPublicLink:c,type:d,hasPublisherPreviewPermissionsOnly:u,downloadableOrInlineViewablePublicNonPublisherLinks:h,disableLinks:b}=this.props;let m;if(b||(m=Object(p.a)(e,null!=n?n:t)),i&&o)return Object(l.jsx)(r.PublicationItem.Badge,{priority:"tertiary",href:m,children:"Published version available"});if(c||s&&!a){const e=u&&(null==h?void 0:h.length)<=0?"Publisher preview available":Object(x.y)(d)+" available";return Object(l.jsx)(r.PublicationItem.Badge,{priority:"tertiary",href:m,children:e})}return a?Object(l.jsx)(y,{href:m,children:"Private "+Object(x.y)(d,!0)}):null}render(){const{children:e}=this.props;return Object(l.jsxs)(r.PublicationItem.Badges,{children:[this.renderNovelty(),this.renderType(),this.renderFulltext(),e]})}}v.displayName="PublicationItemBadges";var I=Object(s.a)(Object(a.h)(r.PublicationItem.Badges),Object(i.withQuery)(c.d,{mapDataToProps:({publication:{url:e,publicationDate:t,concreteType:{name:n},hasLiteratureReview:i,hasPublisherPreviewPermissionsOnly:o,viewerLinks:{firstDownloadableOrInlineViewableLink:r,hasPubliclyDownloadableOrInlineViewableLink:s,downloadableOrInlineViewablePublicNonPublisherLinks:a},isAuthor:c,isPublishedVersionAvailable:l}})=>({url:e,isNew:Object(f.default)(new Date(t),Object(O.default)(Date.now(),6)),type:n,hasLiteratureReview:i,hasLink:!!r,hasLinkAndItIsPrivate:!(null==r||!r.link.isVisibilityPrivate),hasPublicLink:s,isAuthor:c,isPublishedVersionAvailable:l,hasPublisherPreviewPermissionsOnly:o,downloadableOrInlineViewablePublicNonPublisherLinks:a})}))(v);var _=Object(s.a)(Object(a.h)(r.PublicationItem.Badges),Object(i.withQuery)(c.e,{mapDataToProps:({publication:e})=>({url:e.url,type:e.concreteType.name,hasLiteratureReview:e.hasLiteratureReview,isAuthor:e.isAuthor,isPublishedVersionAvailable:e.isPublishedVersionAvailable})}))(({url:e,urlParams:t,fulltextUrlParams:n,type:i,hasLiteratureReview:o,isAuthor:s,isPublishedVersionAvailable:a})=>{const c=Object(p.a)(e,null!=n?n:t);return Object(l.jsxs)(r.PublicationItem.Badges,{children:[Object(l.jsx)(r.PublicationItem.Badge,{priority:"secondary",href:c,children:o?"Literature Review":Object(x.z)(i)}),s&&a&&Object(l.jsx)(r.PublicationItem.Badge,{priority:"tertiary",href:c,children:"Published version available"})]})});var w=Object(s.a)(Object(a.h)(r.PublicationItem.MetaItem),Object(i.withQuery)(c.k,{mapDataToProps:({publication:{publicationTypeData:e}})=>e}))(({conferenceName:e})=>e?Object(l.jsx)(r.PublicationItem.MetaItem,{children:e}):null),S=n(156),P=n(157);var C=Object(s.a)(Object(a.h)(r.PublicationItem.MetaItems),Object(i.withQuery)(c.f))(({id:e,milestones:t,showJournalMetaData:n=!0})=>Object(l.jsxs)(r.PublicationItem.MetaItems,{children:[Object(l.jsx)(P.a,{id:e}),n&&Object(l.jsx)(S.a,{id:e,milestones:t}),Object(l.jsx)(w,{id:e})]})),k=n(16),A=n.n(k);var D=Object(s.a)(Object(a.h)(r.PublicationItem.Metric),Object(i.withQuery)(c.l,{mapDataToProps:({publication:e})=>Object(o.a)({},e)}))(({incomingCitationCount:e,citationUrl:t,urlParams:n})=>e>0?Object(l.jsx)(r.PublicationItem.Metric,{href:n?Object(p.a)(t,n):t,children:`${e} ${A()("Citation",e)}`}):null),E=n(32);var T=Object(s.a)(Object(a.h)(r.PublicationItem.Metric),Object(i.withQuery)(c.m,{mapDataToProps({publication:e}){var t,n,i,o;return{statsUrl:e.statsUrl,totalReads:null!==(t=null==e||null===(n=e.stats)||void 0===n||null===(i=n.readMetrics)||void 0===i||null===(o=i.all)||void 0===o?void 0:o.total)&&void 0!==t?t:0}}}))(({totalReads:e,statsUrl:t,urlParams:n})=>e>0?Object(l.jsx)(r.PublicationItem.Metric,{href:n?Object(p.a)(t,n):t,children:`${Object(E.j)(e)} ${A()("Read",e)}`}):null);let F;var M=Object(s.a)(Object(a.h)(r.PublicationItem.Metrics),Object(i.withQuery)(Object(i.gql)(F||(F=(e=>e)`query PublicationItemDefaultMetrics($id: ID!) {
  publication(id: $id) {
    id
    stats {
      readMetrics {
        all {
          total
          __typename
        }
        __typename
      }
      __typename
    }
    incomingCitationCount
    ...PublicationItemMetricReads @embed
    ...PublicationItemMetaItemCitations @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps({publication:e}){var t,n,i,o;return{incomingCitationCount:e.incomingCitationCount,totalReads:null!==(t=null==e||null===(n=e.stats)||void 0===n||null===(i=n.readMetrics)||void 0===i||null===(o=i.all)||void 0===o?void 0:o.total)&&void 0!==t?t:0}}}))((function(e){const{id:t,totalReads:n,incomingCitationCount:i}=e;return 0===n&&0===i?null:Object(l.jsxs)(r.PublicationItem.Metrics,{children:[Object(l.jsx)(T,{id:t}),Object(l.jsx)(D,{id:t})]})})),R=n(8),N=n.n(R),L=n(12),B=n(9),q=n(230);n(494);const U=new N.a("publication-item-figures"),$=({dispatch:e,publicationUid:t,goals:n,figureOverlayParams:i,activeFiguresCount:s,activeFigures:a,type:c,isLoggedIn:d})=>{if(!s)return null;const h=a.map((s,a)=>{return Object(l.jsx)(r.PublicationItem.Figure,Object(o.a)({src:s.imageUrlQ320,srcSet:`${s.imageUrlQ320} 320w, ${s.imageUrlQ640} 640w`,alt:s.cleanCaption},d?{onClick:(c=a,r=>{r.preventDefault(),c>=0&&(Object(q.a)(e,t,Object(o.a)({figureItemIndex:c,openedFromPreviewer:!0},i)),n&&Object(u.g)(n))})}:{href:`${Object(p.d)()}/${s.figureUrl}`}),s.id);var c});for(let e=a.length;e<s;e++)h.push(Object(l.jsx)(r.PublicationItem.Figure,{href:"",src:""},e));return Object(l.jsx)("div",Object(o.a)(Object(o.a)({},U()),{},{children:Object(l.jsx)(r.PublicationItem.Figures,{type:c,children:h})}))};$.defaultProps={type:"strip",isLoggedIn:!0};var V=Object(s.a)(Object(L.connect)(),Object(a.h)(r.PublicationItem.Figures),Object(i.withQuery)(c.g,{mapDataToProps:({publication:e})=>Object(o.a)(Object(o.a)({},e),{},{publicationUid:B.a.parse(e.id).id})}))($);let z;var G=Object(s.a)(Object(a.h)(r.PublicationItem.Badges),Object(i.withQuery)(Object(i.gql)(z||(z=(e=>e)`query PublicationItemFulltext($id: ID!) {
  publication(id: $id) {
    id
    concreteType {
      name
      __typename
    }
    url
    hasPublisherPreviewPermissionsOnly
    viewerLinks {
      firstDownloadableOrInlineViewableLink {
        link {
          id
          isVisibilityPrivate
          __typename
        }
        __typename
      }
      hasPubliclyDownloadableOrInlineViewableLink
      downloadableOrInlineViewablePublicNonPublisherLinks(limit: 10) {
        link {
          id
          __typename
        }
        __typename
      }
      __typename
    }
    isAuthor
    isPublishedVersionAvailable
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:{concreteType:{name:e},url:t,viewerLinks:{firstDownloadableOrInlineViewableLink:n,hasPubliclyDownloadableOrInlineViewableLink:i,downloadableOrInlineViewablePublicNonPublisherLinks:o},isAuthor:r,isPublishedVersionAvailable:s,hasPublisherPreviewPermissionsOnly:a}})=>({type:e,url:t,hasLink:!!n,hasLinkAndItIsPrivate:!(null==n||!n.link.isVisibilityPrivate),hasPublicLink:i,isAuthor:r,isPublishedVersionAvailable:s,downloadableOrInlineViewablePublicNonPublisherLinks:o,hasPublisherPreviewPermissionsOnly:a})}))(({isAuthor:e,isPublishedVersionAvailable:t,hasLink:n,hasLinkAndItIsPrivate:i,hasPublicLink:o,type:s,url:a,urlParams:c,milestones:d,hasPublisherPreviewPermissionsOnly:h,downloadableOrInlineViewablePublicNonPublisherLinks:b})=>{const m=Object(p.a)(a,c);if(e&&t)return Object(l.jsx)(r.PublicationItem.Badges,{children:Object(l.jsx)(r.PublicationItem.Badge,{href:m,priority:"tertiary",children:"Published version available"})});if(o||n&&!i){const e=h&&(null==b?void 0:b.length)<=0?"Publisher preview available":Object(x.y)(s)+" available";return Object(l.jsx)(r.PublicationItem.Badges,{children:Object(l.jsx)(r.PublicationItem.Badge,{href:m,onClick:()=>Object(u.a)(null==d?void 0:d.fullTextAvailableClicked),priority:"tertiary",children:e})})}return i?Object(l.jsx)(r.Badge,{color:"yellow",size:"l",radius:"m",theme:"ghost",style:{margin:0},href:m,children:"Private "+Object(x.y)(s,!0)}):null}),Q=(n(295),n(296),n(133));let H;Object(s.a)(Object(a.h)(r.PublicationItem.Metric),Object(i.withQuery)(Object(i.gql)(H||(H=(e=>e)`query PublicationItemMetricItemScore($id: ID!) {
  publication(id: $id) {
    id
    itemScore {
      score
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps({publication:e}){var t;return{score:null==e||null===(t=e.itemScore)||void 0===t?void 0:t.score}}}))(({score:e})=>e>0?Object(l.jsxs)(r.PublicationItem.Metric,{children:[Object(l.jsx)(r.Icon,{identifier:"chart-line-document",size:"s"})," ",Object(Q.h)(e)," Publication Interest"]}):null);var W=n(119);function Y({name:e,count:t,theme:n}){const i=Object(E.i)(E.d[e]);return Object(l.jsxs)(W.a,{children:[Object(l.jsx)(W.a.Label,{children:"indented"===n?Object(l.jsx)(r.List,{spacing:"none",children:Object(l.jsx)(r.List.Item,{children:i})}):i}),Object(l.jsx)(W.a.Total,{children:Object(l.jsx)(r.Text,{size:"l",children:Object(E.j)(t)})})]})}Y.defaultProps={theme:"default"};var K=Y;let J;var X=Object(i.withQuery)(Object(i.gql)(J||(J=(e=>e)`query PublicationItemMetricTooltipContentAssetConsumes($id: ID!) {
  publication(id: $id) {
    id
    stats {
      consumeAssetMetrics {
        all {
          total
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
`)),{mapDataToProps({publication:e}){var t,n,i,o;return{count:null!==(t=null==e||null===(n=e.stats)||void 0===n||null===(i=n.consumeAssetMetrics)||void 0===i||null===(o=i.all)||void 0===o?void 0:o.total)&&void 0!==t?t:0}}})((function(e){return Object(l.jsx)(K,Object(o.a)(Object(o.a)({name:E.e.publicationAssetConsumptions},e),{},{theme:"indented"}))}));let Z;var ee=Object(i.withQuery)(Object(i.gql)(Z||(Z=(e=>e)`query PublicationItemMetricTooltipContentCitations($id: ID!) {
  publication(id: $id) {
    id
    incomingCitationCount
    __typename
  }
  __typename
}
`)),{mapDataToProps({publication:e}){var t;return{count:null!==(t=null==e?void 0:e.incomingCitationCount)&&void 0!==t?t:0}}})((function(e){return Object(l.jsx)(K,Object(o.a)({name:E.e.citations},e))}));let te;var ne=Object(i.withQuery)(Object(i.gql)(te||(te=(e=>e)`query PublicationItemMetricTooltipContentReads($id: ID!) {
  publication(id: $id) {
    id
    readMetrics {
      total
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps({publication:e}){var t,n;return{count:null!==(t=null==e||null===(n=e.readMetrics)||void 0===n?void 0:n.total)&&void 0!==t?t:0}}})((function(e){return Object(l.jsx)(K,Object(o.a)({name:E.e.publicationReads},e))}));let ie;var oe=Object(i.withQuery)(Object(i.gql)(ie||(ie=(e=>e)`query PublicationItemMetricTooltipContentRecommendations($id: ID!) {
  publication(id: $id) {
    id
    likeCount
    __typename
  }
  __typename
}
`)),{mapDataToProps({publication:e}){var t;return{count:null!==(t=null==e?void 0:e.likeCount)&&void 0!==t?t:0}}})((function(e){return Object(l.jsx)(K,Object(o.a)({name:E.e.publicationRecommendations},e))}));let re;class se extends g.Component{handleOnLoad(){const{onLoad:e}=this.props;e&&e()}componentDidMount(){this.handleOnLoad()}componentDidUpdate(){this.handleOnLoad()}render(){const{id:e,score:t}=this.props;return Object(l.jsxs)(r.Stack,{children:[Object(l.jsxs)(r.Stack.Item,{children:[Object(l.jsxs)(r.Flex,{gutter:"xxs",alignItems:"center",children:[Object(l.jsxs)(r.Flex.Item,{children:[Object(l.jsx)(r.Icon,{identifier:"chart-line-document"})," "]}),Object(l.jsx)(r.Flex.Item,{children:Object(l.jsx)(r.Heading,{size:"xl",children:Object(Q.h)(t)})})]}),Object(l.jsx)(r.Text,{children:E.c.publicationItemScore})]}),Object(l.jsx)(r.Stack.Item,{children:Object(l.jsxs)(r.Stack,{children:[Object(l.jsx)(r.Stack.Item,{children:Object(l.jsx)(ee,{id:e})}),Object(l.jsx)(r.Stack.Item,{children:Object(l.jsx)(oe,{id:e})}),Object(l.jsx)(r.Stack.Item,{children:Object(l.jsx)(ne,{id:e})}),Object(l.jsx)(r.Stack.Item,{children:Object(l.jsx)(X,{id:e})})]})})]})}}se.displayName="PublicationItemMetricTooltipContent";var ae=Object(i.withQuery)(Object(i.gql)(re||(re=(e=>e)`query PublicationItemMetricTooltipContent($id: ID!) {
  publication(id: $id) {
    id
    itemScore {
      score
      __typename
    }
    ...PublicationItemMetricTooltipContentCitations @embed
    ...PublicationItemMetricTooltipContentRecommendations @embed
    ...PublicationItemMetricTooltipContentReads @embed
    ...PublicationItemMetricTooltipContentAssetConsumes @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps({publication:e}){var t;return{score:null==e||null===(t=e.itemScore)||void 0===t?void 0:t.score}},preloader:r.Spinner})(se);class ce extends g.Component{constructor(...e){super(...e),this.handleLoad=()=>{this.tooltip.update()},this.setRef=e=>{this.tooltip=e}}render(){const{id:e,children:t}=this.props;return Object(l.jsx)(r.Tooltip,{ref:this.setRef,target:Object(l.jsx)(r.Link,{theme:"silent",children:t}),children:Object(l.jsx)(ae,{id:e,onLoad:this.handleLoad})})}}ce.displayName="PublicationItemMetricItemScoreTooltip";Object(s.a)(Object(a.h)(r.PublicationItem.Metric))(ce);var le=Object(s.a)(Object(a.h)(r.PublicationItem.Metric),Object(i.withQuery)(c.n,{mapDataToProps:({publication:e})=>Object(o.a)({},e)}))(({likeCount:e,recentRecommenders:t,statsUrl:n})=>e>0&&t?Object(l.jsx)(r.Tooltip,{color:"black",spacing:"s",target:Object(l.jsx)(r.Link,{href:n,theme:"bare",children:`${e} ${A()("Recommendation",e)}`}),children:Object(l.jsx)(r.Tooltip.Body,{children:Object(l.jsx)(r.List,{type:"bare",size:"s",spacing:"none",children:t.map((e,t)=>Object(l.jsx)(r.List.Item,{children:e.fullName},t))})})}):null);var de=Object(s.a)(Object(a.h)(r.PublicationItem.Preview),Object(i.withQuery)(c.p,{mapDataToProps({publication:e}){var t,n;const i=null==e||null===(t=e.viewerLinks)||void 0===t||null===(n=t.firstDownloadableOrInlineViewablePublicLink)||void 0===n?void 0:n.link,o=null==i?void 0:i.extendedLink;return{publicationUrl:e.url,previewImageUrl:i?i.previewImageUrl:null,sourceName:o?o.sourceName:null,sourceUrl:o?o.sourceUrl:null}}}))(({previewImageUrl:e,publicationUrl:t,urlParams:n,sourceName:i,sourceUrl:o})=>{if(!e)return null;const s=n?Object(p.a)(t,n):t;return Object(l.jsxs)(r.PublicationItem.Preview,{children:[Object(l.jsx)(r.PublicationItem.PreviewImage,{href:s,alt:"Publication Preview",imageUrl:e}),i&&o&&Object(l.jsx)(r.PublicationItem.PreviewSource,{href:o,children:"Available from: "+i})]})});let ue;var pe=Object(s.a)(Object(a.h)(r.PublicationItem.Preview),Object(i.withQuery)(Object(i.gql)(ue||(ue=(e=>e)`query PublicationItemPreviewImage($id: ID!) {
  publication(id: $id) {
    id
    preferredLink {
      id
      previewImageUrl(size: SMALL)
      __typename
    }
    __typename
  }
  __typename
}
`))))(({publication:e})=>{var t,n;return null!=e&&null!==(t=e.preferredLink)&&void 0!==t&&t.previewImageUrl?Object(l.jsx)(r.PublicationItem.Preview,{children:Object(l.jsx)(r.PublicationItem.PreviewImage,{alt:"Publication Preview",imageUrl:null==e||null===(n=e.preferredLink)||void 0===n?void 0:n.previewImageUrl})}):null}),he=n(187),be=Object(s.a)(Object(a.h)(r.PublicationItem.Title),Object(i.withQuery)(c.r,{mapDataToProps:({publication:e})=>Object(o.a)({},e)}))(he.a);let me;var je=Object(s.a)(Object(a.h)(r.PublicationItem.Title),Object(i.withQuery)(Object(i.gql)(me||(me=(e=>e)`query PublicationItemTitleLink($id: ID!) {
  publication(id: $id) {
    id
    url
    title
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>Object(o.a)({},e)}))(he.a);let fe;var Oe=Object(s.a)(Object(a.h)(r.PublicationItem.Type),Object(i.withQuery)(Object(i.gql)(fe||(fe=(e=>e)`query PublicationItemType($id: ID!) {
  publication(id: $id) {
    id
    url
    concreteType {
      name
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:{concreteType:{name:e}}})=>({name:e})}))(({name:e,url:t,isLink:n,urlParams:i})=>Object(l.jsx)(r.PublicationItem.Type,{href:n?Object(p.a)(t,i):void 0,children:Object(x.z)(e)}));let ge;Object(i.gql)(ge||(ge=(e=>e)`query PublicationItemMicrodata($id: ID!, $relativeUrl: Boolean = false) {
  publication(id: $id) {
    id
    microdata {
      headline
      datePublished
      image
      mainEntityOfPage(relative: $relativeUrl)
      __typename
    }
    __typename
  }
  __typename
}
`))},609:function(e,t,n){"use strict";var i=n(1),o=n(0);t.a=({viewCount:e})=>e&&e>0?Object(o.jsxs)(i.Badge,{luminosity:"medium",radius:"m",children:["seen ",e," times"]}):null},62:function(e,t,n){var i=n(65),o=String,r=TypeError;e.exports=function(e){if(i(e))return e;throw r(o(e)+" is not an object")}},628:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(8),s=n.n(r),a=n(6),c=n(40),l=n(4),d=n(1),u=n(0);class p extends l.Component{render(){return Object(u.jsx)(d.Input,Object(i.a)(Object(i.a)({},this.props),{},{ref:e=>{this.input=e}}))}focus(){this.input.focus()}}p.displayName="StateAwareInput";var h=p,b=n(637);n(894);const m=["selected","minDate","maxDate","className","size","readOnly","customInput","children","fullWidth"],j=new s.a({name:"application-date-picker"}),f=e=>{let{selected:t,minDate:n,maxDate:r,className:s,size:a,readOnly:l,customInput:d,children:p,fullWidth:h}=e,f=Object(o.a)(e,m);return Object(u.jsx)("div",Object(i.a)(Object(i.a)({},j({modifiers:h?"full-width":null,extra:s})),{},{children:Object(u.jsx)(b.a,Object(i.a)(Object(i.a)({},f),{},{selected:Object(c.n)(t),minDate:Object(c.n)(n),maxDate:Object(c.n)(r),readOnly:l,customInput:p(a,l)}))}))};f.defaultProps={dateFormat:"y-MM-dd",children:Object(a.n)("StateAwareInput")((e,t)=>Object(u.jsx)(h,{size:e,status:t?"disabled":null}))};t.a=f},629:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(69),s=n(59),a=n(0);let c;t.a=Object(o.withQuery)(Object(o.gql)(c||(c=(e=>e)`query PublicationItemPromo($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...PublicationItemTitle @embed
    ...PublicationItemBadges @embed
    ...PublicationItemDefaultMetaItems @embed
    ...PublicationItemAuthors @embed
    __typename
  }
  __typename
}
`)))(({publicationId:e})=>Object(a.jsxs)(i.PublicationItem,{children:[Object(a.jsx)(s.p,{id:e}),Object(a.jsx)(s.c,{id:e}),Object(a.jsx)(s.e,{id:e}),Object(a.jsx)(s.b,{id:e,context:r.r})]}))},633:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var i=n(793),o=n.n(i);const r=e=>{var t,n;return null!==(t=null===(n=e.literatureGlobalAuthorSuggestions)||void 0===n?void 0:n.isRequestInProgress)&&void 0!==t&&t},s=e=>{var t,n;return null!==(t=null===(n=e.literatureGlobalAuthorSuggestions)||void 0===n?void 0:n.ignoreButtonClickMilestone)&&void 0!==t?t:null},a=e=>Object.values(o()(e=>Object.values(e),(e=>{var t,n;return null!==(t=null===(n=e.literatureGlobalAuthorSuggestions)||void 0===n?void 0:n.suggestions)&&void 0!==t?t:{}})(e))).flat()},637:function(e,t,n){"use strict";var i=n(2),o=n(691),r=(n(893),n(0));t.a=e=>Object(r.jsx)(o.a,Object(i.a)({locale:"en"},e))},65:function(e,t,n){var i=n(31);e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(2),o=n(10),r=n(297),s=n.n(r),a=n(1),c=n(5),l=IMAGES_STATIC_URL+"m/417458226102958/images/template/default/profile/profile_default_90x90.png",d=n(0);let u;const p=["src"],h=e=>{let{src:t}=e,n=Object(o.a)(e,p);return Object(d.jsx)(a.Avatar,Object(i.a)({src:t||l},s()(n,["alt","size"])))};t.b=Object(c.withQuery)(Object(c.gql)(u||(u=(e=>e)`query ProfileAvatar($id: ID!) {
  account(id: $id) {
    id
    fullName
    image {
      url
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t;return{src:null==e||null===(t=e.image)||void 0===t?void 0:t.url,alt:null==e?void 0:e.fullName}}})(h)},652:function(e,t,n){"use strict";var i=n(4),o=n.n(i),r=n(15),s=n(1),a=n(5),c=n(7),l=n(29);let d,u=e=>e;var p={PUBLICATION_PICKER:"publicationPicker",ADDITIONAL_DATA:"additionalData",AUDIENCE_FINDER:"audienceFinder",PREVIEW:"preview",CONFIRMATION:"confirmation"},h=n(522),b=n(210),m=n(2),j=n(8),f=n.n(j),O=n(213),g=n(6),x=n(218),y=n(0);var v=({title:e,subtitle:t})=>Object(y.jsxs)(s.Stack,{children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(s.Heading,{size:"xl",children:e})}),t&&Object(y.jsx)(s.Stack.Item,{children:t})]});var I=({children:e})=>Object(y.jsx)(s.Flex,{justifyContent:"flex-end",children:Object(y.jsx)(s.Flex.Item,{children:e})}),_=n(48),w=n(55),S=n(735),P=n(288),C=n(332),k=n(664),A=n(487);n(1163);let D,E,T=e=>e;const F=new f.a("spotlight-additional-data-form"),M=Object(w.j)().shape({description:Object(w.k)().max(300).required("Please add details about your work"),keywords:Object(w.c)().min(1,"Please add at least 1 keyword").max(5,"You can only add up to 5 keywords").of(Object(w.k)())}),R=({onChangeResearch:e,onSubmit:t,initialValues:n,fullName:i,image:o,publicationId:r,isEditFlow:a,onCancel:c,isChangePublicationAllowed:l})=>Object(y.jsx)(_.e,{onSubmit:e=>{t(e.description,e.keywords)},initialValues:{description:(null==n?void 0:n.description)||"",keywords:(null==n?void 0:n.keywords)||[]},validationSchema:M,children:({isSubmitting:t})=>Object(y.jsxs)(_.d,Object(m.a)(Object(m.a)({},F()),{},{children:[Object(y.jsx)(s.Card,{spacing:"s",elevation:"none",children:Object(y.jsxs)(s.Stack,{gutter:"xxl",children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(C.c,{subtitle:A.a,fullName:i,image:o})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsxs)(s.FormGroup,{layout:"stack",children:[Object(y.jsx)(s.FormGroup.Item,{children:Object(y.jsx)(P.a,{name:"description",label:"Add details to get others interested in your research (required)",size:"m",rows:2,maxLength:300,placeholder:"What did you accomplish? Why is this research important? Want to ask your readers something?"})}),Object(y.jsx)(s.FormGroup.Item,{children:Object(y.jsx)(S.a,{name:"keywords",label:"Add keywords to help describe your research (required)",placeholder:"You can add up to 5 keywords",allowCustomValues:!0,multipleValues:!0})})]})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)("div",Object(m.a)(Object(m.a)({},F("actions-disabled")),{},{children:Object(y.jsx)(k.a,{publicationId:r})}))})]})}),Object(y.jsx)("div",Object(m.a)(Object(m.a)({},F("footer")),{},{children:Object(y.jsx)(I,{children:Object(y.jsxs)(s.ButtonGroup,{children:[l?Object(y.jsx)(s.Button,{type:"button",theme:"ghost",onClick:a?c:e,children:a?"Cancel":"Change research"}):null,Object(y.jsx)(s.Button,{type:"submit",status:t?"busy":null,children:"Preview"})]})})}))]}))});R.defaultProps={isChangePublicationAllowed:!0};var N=Object(c.a)(Object(a.withQuery)(Object(a.gql)(D||(D=T`query SpotlightAdditionalDataForm_Viewer {
  viewer {
    account {
      id
      fullName
      image {
        url
        __typename
      }
      spotlights {
        hasPermissionToCreateSpotlight
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{preloader:O.a,mapDataToProps:({viewer:e})=>{var t,n,i,o,r;return{fullName:null==e||null===(t=e.account)||void 0===t?void 0:t.fullName,image:null==e||null===(n=e.account)||void 0===n?void 0:n.image,url:null==e||null===(i=e.account)||void 0===i?void 0:i.url,hasPermissionToCreateSpotlight:null==e||null===(o=e.account)||void 0===o||null===(r=o.spotlights)||void 0===r?void 0:r.hasPermissionToCreateSpotlight}}}),Object(a.withQuery)(Object(a.gql)(E||(E=T`query SpotlightAdditionalDataForm_Publication($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...SpotlightItemResearch @embed
    __typename
  }
  __typename
}
`)),{preloader:O.a}))(R);n(1164);let L,B,q=e=>e;const U=new f.a("spotlight-flow-step-additional-data");var $=Object(c.a)(x.a,Object(g.v)(Object(a.gql)(L||(L=q`query SpotlightFlowStepAdditionalData_Viewer {
  viewer {
    ...SpotlightAdditionalDataForm_Viewer @embed
    __typename
  }
  __typename
}
`)),{preloader:O.a}),Object(g.v)(Object(a.gql)(B||(B=q`query SpotlightFlowStepAdditionalData_Publication($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...SpotlightAdditionalDataForm_Publication @embed
    __typename
  }
  __typename
}
`)),{preloader:O.a}))(({onChangeResearch:e,onSubmit:t,publicationId:n,description:i,keywords:o,isEditFlow:r,onCancel:a,isChangePublicationAllowed:c})=>Object(y.jsx)(s.Modal.Body,Object(m.a)(Object(m.a)({},U()),{},{children:Object(y.jsxs)(s.Stack,{gutter:"m",children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(v,{title:r?"Edit Research Spotlight":"What do you want others to know about this research?",subtitle:Object(y.jsx)(s.Text,{children:r?"What do you want others to know about this research?":"Add details and keywords to present your work to your readers."})})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)("div",Object(m.a)(Object(m.a)({},U("preview-item")),{},{children:Object(y.jsx)(N,{publicationId:n,onChangeResearch:e,onSubmit:t,initialValues:{keywords:o,description:i},isEditFlow:r,onCancel:a,isChangePublicationAllowed:c})}))})]})})));n(1165);const V=new f.a("audience-finder-item");var z=({title:e,intervalTime:t,startProgress:n,onComplete:o})=>{const[r,a]=Object(i.useState)(0);return Object(i.useEffect)(()=>{if(n){const e=setInterval(()=>{a(r+1)},t);return 100===r&&(o(),clearInterval(e)),()=>clearInterval(e)}},[r,n]),Object(y.jsxs)("div",Object(m.a)(Object(m.a)({},V()),{},{children:[Object(y.jsx)(s.Text,{spacing:"xxs",children:e}),Object(y.jsx)(s.ProgressBar,{"aria-label":e,max:100,min:0,value:r})]}))};var G=Object(c.a)(x.a)(({onNext:e})=>{const[t,n]=Object(i.useState)(!1),[o,r]=Object(i.useState)(!1);return Object(y.jsx)(s.Modal.Body,{children:Object(y.jsxs)(s.Stack,{gutter:"xl",children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(v,{title:"Finding your audience..."})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsxs)(s.List,{type:"ordered",children:[Object(y.jsx)(s.List.Item,{children:Object(y.jsx)(z,{title:"Checking citations network",intervalTime:15,startProgress:!0,onComplete:()=>n(!0)})}),Object(y.jsx)(s.List.Item,{children:Object(y.jsx)(z,{title:"Analyzing reading patterns",intervalTime:5,startProgress:t,onComplete:()=>r(!0)})}),Object(y.jsx)(s.List.Item,{children:Object(y.jsx)(z,{title:"Filtering for similar interests and expertise",intervalTime:25,startProgress:o,onComplete:()=>e()})})]})})]})})});let Q;var H=Object(c.a)(Object(a.withQuery)(Object(a.gql)(Q||(Q=(e=>e)`query SpotlightFlowStepConfirmation($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlightUrl: url(type: SPOTLIGHT)
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>({url:null==e?void 0:e.spotlightUrl})}),x.a)(({onFinish:e,url:t})=>Object(y.jsx)(s.Modal.Body,{children:Object(y.jsxs)(s.Stack,{gutter:"xl",children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(v,{title:"Success! Spotlight created"})}),Object(y.jsxs)(s.Stack.Item,{children:[Object(y.jsx)(s.Text,{spacing:"s",children:Object(y.jsx)("strong",{children:"Who can see your Spotlight in their home feeds?"})}),Object(y.jsxs)(s.List,{children:[Object(y.jsx)(s.List.Item,{children:"Relevant people in your field who don't know you yet (for 30 days) "}),Object(y.jsx)(s.List.Item,{children:"Researchers who follow you "}),Object(y.jsx)(s.List.Item,{children:"Followers of people who comment on your Spotlight."})]}),Object(y.jsx)(s.Text,{spacing:"s",children:Object(y.jsx)("strong",{children:"What happens next?"})}),Object(y.jsxs)(s.Text,{spacing:"s",children:["When people interact with your Spotlight, you'll get ",Object(y.jsx)("strong",{children:"stats"})," to help you track its impact."]}),Object(y.jsxs)(s.Text,{children:["You can view your Spotlight at any time on your ",Object(y.jsx)("strong",{children:"profile"}),"."]})]}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(I,{children:Object(y.jsxs)(s.ButtonGroup,{children:[Object(y.jsx)(s.Button,{type:"button",theme:"ghost",onClick:e,children:"Close"}),Object(y.jsx)(s.Button,{type:"button",href:t,children:"View Spotlight"})]})})})]})}));let W,Y,K=e=>e;var J=Object(c.a)(Object(a.withQuery)(Object(a.gql)(W||(W=K`query SpotlightItemPreview_Account {
  viewer {
    account {
      id
      fullName
      url
      image {
        url
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{preloader:O.a,mapDataToProps:({viewer:e})=>{var t,n,i;return{fullName:null==e||null===(t=e.account)||void 0===t?void 0:t.fullName,image:null==e||null===(n=e.account)||void 0===n?void 0:n.image,url:null==e||null===(i=e.account)||void 0===i?void 0:i.url}}}),Object(a.withQuery)(Object(a.gql)(Y||(Y=K`query SpotlightItemPreview_Publication($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...SpotlightItemResearch @embed
    __typename
  }
  __typename
}
`)),{preloader:O.a}))(({publicationId:e,fullName:t,image:n,url:i,description:o,keywords:r})=>Object(y.jsxs)(s.Stack,{gutter:"m",children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(C.c,{subtitle:A.a,fullName:t,image:n,url:i})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsxs)(s.Stack,{showDivider:!0,gutter:"xl",children:[(o||(null==r?void 0:r.length)>0)&&Object(y.jsx)(s.Stack.Item,{children:Object(y.jsxs)(s.Stack,{gutter:"xxs",children:[o&&Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(C.a,{description:o})}),(null==r?void 0:r.length)>0&&Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(C.b,{keywords:r})})]})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(k.a,{publicationId:e})})]})})]}));n(1166);const X=new f.a("spotlight-flow-step-preview");var Z=Object(x.a)(({publicationId:e,description:t,keywords:n,onEdit:o,onConfirm:r,isEditFlow:a})=>{const[c,l]=Object(i.useState)(!1);return Object(y.jsx)(s.Modal.Body,{children:Object(y.jsxs)(s.Stack,Object(m.a)(Object(m.a)({gutter:"xl"},X()),{},{children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(v,{title:"Preview your Research Spotlight"})}),Object(y.jsxs)(s.Stack.Item,{children:[Object(y.jsx)(s.Text,{spacing:"m",children:"Here's how other researchers will see your Spotlight."}),Object(y.jsx)("div",Object(m.a)(Object(m.a)({},X("preview-item")),{},{children:Object(y.jsx)(s.Card,{spacing:"s",elevation:"none",children:Object(y.jsx)(J,{publicationId:e,description:t,keywords:n})})}))]}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(I,{children:Object(y.jsxs)(s.ButtonGroup,{children:[Object(y.jsx)(s.Button,{type:"button",theme:"ghost",onClick:()=>{o()},children:"Edit"}),Object(y.jsx)(s.Button,{type:"button",onClick:()=>{l(!0),r()},status:c?"busy":"",children:a?"Update Spotlight":"Create Spotlight"})]})})})]}))})}),ee=n(105),te=n.n(ee),ne=n(695),ie=n(192),oe=n(71);var re=({hasPublicationsToSpotlight:e,createUrl:t,onClose:n})=>e?Object(y.jsx)(s.Text,{children:"We haven't found a match yet, or there isn't a research item matching your search. Try entering more words to continue your search."}):Object(y.jsxs)(s.Stack,{children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(s.Text,{children:Object(y.jsx)("strong",{children:"You don't have any research you can showcase in a Spotlight"})})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(s.Text,{children:"Try adding more research to your profile."})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(s.Flex,{alignItems:"center",justifyContent:"flex-end",children:Object(y.jsx)(s.Flex.Item,{children:Object(y.jsxs)(s.ButtonGroup,{children:[Object(y.jsx)(s.Button,{type:"button",href:t,children:"Add research"}),Object(y.jsx)(s.Button,{type:"button",theme:"ghost",onClick:n,children:"Close"})]})})})})]});let se,ae,ce=e=>e;var le=Object(c.a)(Object(a.withConnection)(Object(a.gql)(se||(se=ce`query SpotlightPublicationSearchList($id: ID!, $after: Int = null, $count: Int = 10, $searchKeyword: String = "") {
  account(id: $id) {
    id
    spotlights {
      searchResearchItems(first: $count, after: $after, searchKeyword: $searchKeyword) @connection {
        nodes {
          id
          ...PublicationNoLinksItemRenderer @embed
          ...PublicationStatsItemRenderer @embed
          __typename
        }
        pageInfo {
          endCursor
          hasNextPage
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
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s;return{researchItems:null!==(t=null==e||null===(n=e.spotlights)||void 0===n||null===(i=n.searchResearchItems)||void 0===i?void 0:i.nodes)&&void 0!==t?t:[],hasNextPage:null==e||null===(o=e.spotlights)||void 0===o||null===(r=o.searchResearchItems)||void 0===r||null===(s=r.pageInfo)||void 0===s?void 0:s.hasNextPage}},preloader:oe.b}),Object(g.v)(Object(a.gql)(ae||(ae=ce`query SpotlightPublicationSearchList_UrlGenerator {
  urlGenerator {
    publicationCreationFlow(claimChannel: "spotlightPublicationSearchEmptyState")
    __typename
  }
  __typename
}
`)),{mapDataToProps:({urlGenerator:e})=>({createUrl:null==e?void 0:e.publicationCreationFlow})}))(({researchItems:e,queryStatus:t,loadMore:n,hasNextPage:i,itemRenderer:r,onClose:c,createUrl:l,searchKeyword:d})=>{const u=o.a.useRef(Boolean(e.length&&(!d||0===d.length))).current;if(!e.length)return Object(y.jsx)(re,{createUrl:l,onClose:c,hasPublicationsToSpotlight:u});return Object(y.jsxs)(s.Stack,{children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(ie.default,{awaitMore:i,items:e,itemsRenderer:(e,t)=>Object(y.jsx)(s.Stack,{ref:t,gutter:"none",children:e}),onIntersection:()=>{i&&t!==a.QueryStatus.LOADING&&n(10)},pageSize:10,children:t=>Object(y.jsx)(s.Stack.Item,{children:r(e[t].id)},t)})}),t===a.QueryStatus.LOADING&&Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(oe.b,{})})]})});n(1169);const de=new f.a("spotlight-flow-step-publication-picker");var ue=Object(c.a)(x.a)(({onSelect:e,accountId:t,isNewSearch:n,onClose:o})=>{const r=t=>{e(t)},[a,c]=Object(i.useState)(""),l=te()(e=>{c(e)},200),d=Object(i.useRef)();return Object(i.useEffect)(()=>{null!=d&&d.current&&d.current.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})},[a]),Object(y.jsx)(s.Modal.Body,{children:Object(y.jsxs)(s.Stack,Object(m.a)(Object(m.a)({gutter:"xl"},de()),{},{children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(v,{title:"Select the research you want to showcase",subtitle:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.Text,{spacing:"xs",children:"Research Spotlights are displayed for 30 days."}),Object(y.jsxs)(s.List,{spacing:"none",children:[Object(y.jsx)(s.List.Item,{children:"You can only showcase articles, preprints, and books that are less than 2 years old"}),Object(y.jsx)(s.List.Item,{children:"You can't showcase the same research item twice"})]})]})})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsxs)(s.Stack,{gutter:"xxl",children:[Object(y.jsx)(s.Stack.Item,{children:Object(y.jsx)(s.Input,{placeholder:"Search by title or keyword",prefix:Object(y.jsx)(s.Icon,{identifier:"magnifier"}),onChange:e=>{l(e.currentTarget.value)}})}),Object(y.jsx)(s.Stack.Item,{children:Object(y.jsxs)("div",Object(m.a)(Object(m.a)({},de("list")),{},{children:[Object(y.jsx)("div",{ref:d}),n?Object(y.jsx)(le,{id:t,onClose:o,searchKeyword:a,itemRenderer:e=>Object(y.jsx)(ne.b,{publicationId:e,onClick:r})}):Object(y.jsx)(ne.a,{id:t,searchKeyword:a,itemRenderer:e=>Object(y.jsx)(ne.b,{publicationId:e,onClick:r})})]}))})]})})]}))})});let pe;class he extends i.Component{constructor(...e){super(...e),this.flow=null,this.path=void 0,this.handleBack=()=>{this.path.pop(),this.goToStep(this.path.pop())},this.handleFinish=()=>{this.props.onRequestClose()},this.handleSave=e=>{const{mutate:t,experiment:n,accountId:i,onSuccess:o}=this.props;return t(function({accountId:e,spotlightInput:t}){return{mutation:Object(a.gql)(d||(d=u`mutation CreateSpotlight($spotlightInput: SpotlightCreateInput!) {
  createSpotlight(spotlightInput: $spotlightInput) {
    id
    url
    description
    keywords
    validUntil
    publication {
      id
      __typename
    }
    account {
      id
      url(type: STATS)
      spotlights {
        hasPermissionToCreateSpotlight
        isEligibleForSpotlightCreation
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{spotlightInput:t},update:(t,{fieldKey:n})=>({[n("account",{id:e})]:{spotlights:{activeSpotlight:t.createSpotlight,hasPermissionToCreateSpotlight:!1,isEligibleForSpotlightCreation:!1}}})}}({accountId:i,spotlightInput:{publicationId:this.flow.dataStore.publicationId,description:this.flow.dataStore.description,keywords:this.flow.dataStore.keywords}})).then(()=>{var t,i,r,s;Object(l.l)(n.spotlightCreated,null,{descriptionCharacterCount:null!==(t=null===(i=this.flow.dataStore.description)||void 0===i?void 0:i.length)&&void 0!==t?t:0,keywordCount:null!==(r=null===(s=this.flow.dataStore.keywords)||void 0===s?void 0:s.length)&&void 0!==r?r:0,isSelectedPublicationDifferentFromSuggested:this.flow.dataStore.publicationId!==this.props.selectedPublicationId?1:0}).then(()=>null==o?void 0:o({publicationId:this.flow.dataStore.publicationId})),this.goToStep(e)})},this.goToAdditionalData=e=>{Object(l.l)(this.props.experiment.publicationSelected),this.goToStep(p.ADDITIONAL_DATA,{publicationId:e})},this.goToAudienceFinderOld=(e,t)=>{Object(l.l)(this.props.experiment.additionalData),this.goToStep(p.AUDIENCE_FINDER,{description:e,keywords:t})},this.goToPreviewOld=()=>{Object(l.l)(this.props.experiment.completed),this.goToStep(p.PREVIEW)}}getInitialStep(){return this.props.selectedPublicationId?p.ADDITIONAL_DATA:p.PUBLICATION_PICKER}componentDidMount(){var e,t;null===(e=(t=this.props).onMount)||void 0===e||e.call(t),this.props.selectedPublicationId&&Object(l.l)(this.props.experiment.stepPublicationCompleted),this.path=[],this.path.push(this.getInitialStep())}goToStep(e,t){this.flow.goToStep(e,t),this.path.push(e)}getSteps(){const{isChangePublicationAllowed:e}=this.props;return{[p.PUBLICATION_PICKER]:Object(y.jsx)(ue,{isNewSearch:!0,accountId:this.props.accountId,onSelect:e=>{Object(l.l)(this.props.experiment.stepPublicationCompleted),this.goToStep(p.ADDITIONAL_DATA,{publicationId:e})},onClose:()=>this.handleFinish()}),[p.ADDITIONAL_DATA]:Object(y.jsx)($,{onSubmit:(e,t)=>{Object(l.l)(this.props.experiment.stepAdditionalDataCompleted),this.goToStep(p.PREVIEW,{description:e,keywords:t})},onChangeResearch:()=>this.goToStep(p.PUBLICATION_PICKER),isChangePublicationAllowed:e}),[p.PREVIEW]:Object(y.jsx)(Z,{onEdit:()=>this.goToStep(p.ADDITIONAL_DATA),onConfirm:()=>this.handleSave(p.AUDIENCE_FINDER)}),[p.AUDIENCE_FINDER]:Object(y.jsx)(G,{onNext:()=>this.goToStep(p.CONFIRMATION)}),[p.CONFIRMATION]:Object(y.jsx)(H,{accountId:this.props.accountId,onFinish:()=>this.handleFinish()})}}renderFlowManager(){const{selectedPublicationId:e}=this.props;return Object(y.jsx)(h.a,{ref:e=>this.flow=e,isTransitionEnabled:!1,steps:this.getSteps(),initialStep:this.getInitialStep(),data:{publicationId:e}})}render(){const{isOpen:e,onRequestClose:t}=this.props;return Object(y.jsx)(s.Modal,{isOpen:e,onRequestClose:t,width:"m",children:this.renderFlowManager()})}}he.displayName="SpotlightCreationFlow";var be=Object(c.a)(b.a,Object(a.withQuery)(Object(a.gql)(pe||(pe=(e=>e)`query SpotlightCreationFlow_Viewer($entryChannel: SpotlightCreationFlowEntryChannelEnum!) {
  viewer {
    experiments {
      spotlight {
        spotlightCreationFlow(entryChannel: $entryChannel) {
          spotlightCreated: goal
          stepPublicationCompleted: milestone(name: "stepPublicationCompleted")
          stepAdditionalDataCompleted: milestone(name: "stepAdditionalDataCompleted")
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
`)),{mapDataToProps:({viewer:e})=>{var t,n;return{experiment:null==e||null===(t=e.experiments)||void 0===t||null===(n=t.spotlight)||void 0===n?void 0:n.spotlightCreationFlow}}}))(he),me=n(12),je=n(202),fe=n(11);let Oe,ge=e=>e;let xe;class ye extends i.Component{constructor(...e){super(...e),this.flow=null,this.path=void 0,this.handleBack=()=>{this.path.pop(),this.goToStep(this.path.pop())},this.handleSave=()=>{const{spotlightId:e,mutate:t,dispatch:n,handleModalClose:i,onSuccess:o}=this.props;return t((r=e,s={description:this.flow.dataStore.description,keywords:this.flow.dataStore.keywords},{mutation:Object(a.gql)(Oe||(Oe=ge`mutation UpdateSpotlight($id: ID!, $spotlightInput: SpotlightUpdateInput!) {
  updateSpotlight(id: $id, spotlightInput: $spotlightInput) {
    id
    description
    keywords
    __typename
  }
  __typename
}
`)),variables:{id:r,spotlightInput:s}})).then(()=>{n(Object(fe.pushAlert)(()=>Object(y.jsx)(je.c,{title:"Research Spotlight updated"}))),null==o||o(),i()});var r,s}}getInitialStep(){return p.ADDITIONAL_DATA}componentDidMount(){this.path=[],this.path.push(this.getInitialStep())}goToStep(e,t){this.flow.goToStep(e,t),this.path.push(e)}getSteps(){const{handleModalClose:e}=this.props;return{[p.ADDITIONAL_DATA]:Object(y.jsx)($,{onSubmit:(e,t)=>this.goToStep(p.PREVIEW,{description:e,keywords:t}),onChangeResearch:e,onCancel:e}),[p.PREVIEW]:Object(y.jsx)(Z,{onEdit:()=>this.goToStep(p.ADDITIONAL_DATA),onConfirm:()=>this.handleSave()})}}renderFlowManager(){const{description:e,keywords:t,publicationId:n}=this.props;return Object(y.jsx)(h.a,{ref:e=>this.flow=e,isTransitionEnabled:!1,steps:this.getSteps(),data:{description:e,keywords:t,publicationId:n,isEditFlow:!0},initialStep:this.getInitialStep()})}render(){const{isOpen:e,handleModalClose:t}=this.props;return Object(y.jsx)(s.Modal,{isOpen:e,onRequestClose:t,width:"m",children:this.renderFlowManager()})}}ye.displayName="SpotlightEditFlow";var ve=Object(c.a)(Object(me.connect)(),b.a,Object(g.v)(Object(a.gql)(xe||(xe=(e=>e)`query SpotlightEditFlow($spotlightId: ID!) {
  spotlight(id: $spotlightId) {
    id
    description
    keywords
    publication {
      id
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({spotlight:e})=>{var t;return{publicationId:null==e||null===(t=e.publication)||void 0===t?void 0:t.id,description:null==e?void 0:e.description,keywords:null==e?void 0:e.keywords}}}))(ye);t.a=({dispatch:e,spotlightId:t,accountId:n,entryChannel:o,onMount:s,onModalClose:a,onSuccess:c,isChangePublicationAllowed:l})=>{const d=Object(i.useCallback)(()=>{null==a||a(),e(Object(r.unmountModal)())},[e]);return{handleEditOpen:Object(i.useCallback)(()=>{e(Object(r.mountModal)(()=>Object(y.jsx)(ve,{isOpen:!0,spotlightId:t,handleModalClose:d,onSuccess:c})))},[e,d,t]),handleCreate:Object(i.useCallback)(()=>{e(Object(r.mountModal)(()=>Object(y.jsx)(be,{isOpen:!0,accountId:n,entryChannel:o,onModalClose:d,onMount:s,onSuccess:c,isChangePublicationAllowed:l})))},[e,d,n]),handleCreateWithPublication:Object(i.useCallback)(t=>{e(Object(r.mountModal)(()=>Object(y.jsx)(be,{isOpen:!0,accountId:n,selectedPublicationId:t,entryChannel:o,onModalClose:d,onMount:s,onSuccess:c,isChangePublicationAllowed:l})))},[e,d,n])}}},653:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const i={authorUid:null,authorName:"",authorURL:"",professionalInstitution:null,score:null},o=(e,{authorUid:t})=>{var n,o;return null!==(n=null===(o=e.literatureGlobalAuthors)||void 0===o?void 0:o[t])&&void 0!==n?n:i}},654:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/423929872401791/images/profile/email-lock.png"},66:function(e,t,n){var i=n(45),o=n(31),r=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?r(i[e]):i[e]&&i[e][t]}},660:function(e,t,n){},664:function(e,t,n){"use strict";var i=n(1),o=n(5),r=n(6),s=n(69),a=n(59),c=n(0);let l;const d=Object(r.h)(i.PublicationItem.MetaItem)(({children:e})=>e);t.a=Object(o.withQuery)(Object(o.gql)(l||(l=(e=>e)`query SpotlightItemResearch($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    activeFiguresCount
    ...PublicationItemAuthors @embed
    ...PublicationItemBadgesRedesign @embed
    ...PublicationItemFigures @embed
    ...PublicationItemMetaItemJournal @embed
    ...PublicationItemMetaItemCitations @embed
    ...PublicationItemMetricReads @embed
    ...PublicationItemPublicationDate @embed
    ...PublicationItemTitleLink @embed
    __typename
  }
  __typename
}
`)),{mapDataToProps:({publication:e})=>({activeFiguresCount:null==e?void 0:e.activeFiguresCount})})(({activeFiguresCount:e,publicationId:t,urlParams:n})=>Object(c.jsxs)(i.PublicationItem,{children:[Object(c.jsx)(a.q,{id:t,urlParams:n}),Object(c.jsx)(a.d,{id:t}),e>0&&Object(c.jsx)(a.g,{id:t,figureOverlayParams:n,type:"strip"}),Object(c.jsx)(a.b,{id:t,context:s.j}),Object(c.jsxs)(i.PublicationItem.MetaItems,{children:[Object(c.jsx)(a.o,{id:t}),Object(c.jsx)(a.i,{id:t}),Object(c.jsx)(d,{children:Object(c.jsx)(a.k,{id:t})}),Object(c.jsx)(d,{children:Object(c.jsx)(a.j,{id:t})})]})]}))},665:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(39),o=n(35);function r(e){Object(o.a)(1,arguments);var t=Object(i.a)(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(777);function o(e){const t=Object(i.a)();return(null==t?void 0:t[e])||!1}},667:function(e,t,n){"use strict";var i=n(2),o=n(1),r=n(5),s=n(358),a=n(43),c=n(499),l=n(4),d=n(12),u=n(7),p=n(11);let h,b=e=>e;let m,j=e=>e;var f=n(328),O=n(5734),g=n(276),x=n(0);let y;var v=Object(u.a)(Object(d.connect)(),Object(r.withQuery)(Object(r.gql)(y||(y=(e=>e)`query FollowJournalAction($id: ID!) {
  journal(id: $id) {
    id
    title
    isFollowing
    __typename
  }
  __typename
}
`)),{mapDataToProps:({journal:e})=>Object(i.a)({},e)}))(({children:e,dispatch:t,mutate:n,id:i,isFollowing:s,onFollow:c,onUnfollow:d,title:u})=>{const{sourcePath:y,sourceContentId:v,referrerContentId:I}=Object(l.useContext)(f.a),_={source:y?y.join(g.s):null,sourceContentId:v,referrerContentId:I},{scoreMilestones:w}=Object(l.useContext)(O.a);return null==e?void 0:e({isFollowing:s,toggleFollow:()=>s?n((({id:e},t)=>({mutation:Object(r.gql)(m||(m=j`mutation UnfollowJournal($id: ID!, $trackingInput: JournalTrackingInput) {
  unfollowJournal(id: $id, trackingInput: $trackingInput) {
    id
    isFollowing
    __typename
  }
  __typename
}
`)),variables:{id:e,trackingInput:t},optimisticResponse:{unfollowJournal:{__typename:"Journal",id:e,isFollowing:!1}}}))({id:i},_)).then(()=>{t(Object(p.pushAlert)(()=>Object(x.jsx)(o.Alert,{color:"green",title:Object(a.a)(e=>["You are no longer following ",e.journalName],{journalName:u})}))),null==d||d()}):n((({id:e},t)=>({mutation:Object(r.gql)(h||(h=b`mutation FollowJournal($id: ID!, $trackingInput: JournalTrackingInput) {
  followJournal(id: $id, trackingInput: $trackingInput) {
    id
    isFollowing
    __typename
  }
  __typename
}
`)),variables:{id:e,trackingInput:t},optimisticResponse:{followJournal:{__typename:"Journal",id:e,isFollowing:!0}}}))({id:i},_)).then(()=>{t(Object(p.pushAlert)(()=>Object(x.jsx)(o.Alert,{color:"green",title:Object(a.a)(e=>["You are now following ",e.journalName],{journalName:u}),description:Object(a.a)(()=>["We’ll send you email updates about new research from this journal — matched to your interests."])}))),w(O.c.JournalFollow),null==c||c()})})});let I,_=e=>e;const w=({mutate:e,target:t,position:n,scope:i})=>(Object(l.useEffect)(()=>{e({mutation:Object(r.gql)(I||(I=_`mutation DismissJournalFollowOnboarding {
  dismissJournalFollowOnboarding {
    id
    __typename
  }
  __typename
}
`))})},[]),Object(x.jsx)(o.Tooltip,{color:"blue",initVisible:!0,showClose:!0,mode:"none",offset:{left:0,top:-10},position:n,target:t,scope:i,children:Object(x.jsxs)(o.Tooltip.Body,{children:[Object(x.jsx)(o.Text,{spacing:"xxs",children:Object(x.jsx)("strong",{children:Object(a.a)(()=>["You can now follow journals"])})}),Object(x.jsx)(o.Text,{children:Object(a.a)(()=>["Follow this journal to find out about new research that matches your interests and get other relevant updates."])})]})}));w.defaultProps={scope:"global"};var S=Object(r.withMutation)()(w);let P;const C=({id:e,onFollow:t,onUnfollow:n,copyFollow:r,copyUnfollow:a,buttonProps:l,buttonLabelProps:d,journal:u,tooltipPosition:p,tooltipScope:h,hasOnboarding:b})=>Object(c.a)(s.a)===s.b.FOLLOW_JOURNAL_ENABLED?Object(x.jsx)(v,{id:e,onFollow:t,onUnfollow:n,children:({isFollowing:e,toggleFollow:t})=>{const n=Object(x.jsx)(o.Button,Object(i.a)(Object(i.a)({type:"button",theme:"bare",onClick:t},l),{},{children:Object(x.jsx)(o.Button.Label,Object(i.a)(Object(i.a)({},d),{},{children:e?a:r}))}));return b&&u.isJournalFollowOnboardingTooltipVisible?Object(x.jsx)(S,{target:n,position:p,scope:h}):n}}):null;C.defaultProps={copyFollow:Object(a.a)(()=>["Follow"]),copyUnfollow:Object(a.a)(()=>["Following"]),buttonProps:{},buttonLabelProps:{},hasOnboarding:!1,tooltipPosition:"below-left",tooltipScope:"global"};t.a=Object(r.withQuery)(Object(r.gql)(P||(P=(e=>e)`query FollowJournalButton($id: ID!) {
  journal(id: $id) {
    id
    isJournalFollowOnboardingTooltipVisible
    ...FollowJournalAction @embed
    __typename
  }
  __typename
}
`)))(C)},67:function(e,t,n){"use strict";var i=n(48),o=n(1),r=n(0);const s=({name:e,type:t,label:n,input:s,errorReporting:a,helpMessage:c,helpLabel:l,validate:d,value:u,children:p})=>{const{validateOnMount:h}=Object(i.g)(),b=({meta:{error:t,touched:i}={error:null,touched:!1}})=>{if(!n)return null;let s=t;return t&&(s=Array.isArray(t)?t.filter(Boolean).map(e=>e.toString()).join(" · "):t.toString()),Object(r.jsx)(o.Label,{htmlFor:e,status:t&&(i||h)?"invalid":"",errorMessage:s,errorReporting:a,helpMessage:c,helpLabel:l,children:n})};return Object(r.jsx)(i.b,{name:e,value:u,validate:d,type:t,children:({field:e,form:t,meta:i})=>Object(r.jsxs)(r.Fragment,{children:["function"==typeof n?n({field:e,form:t,meta:i}):b({meta:i}),p?p({field:e,form:t,meta:i}):s({field:e,form:t,meta:i})]})})};s.defaultProps={validate:null},t.a=s},680:function(e,t,n){"use strict";var i=n(1),o=n(0);t.a=()=>Object(o.jsx)(i.Badge,{children:"Beta"})},681:function(e,t,n){"use strict";var i=n(7),o=n(6),r=n(341),s=n(515);t.a=Object(i.a)(Object(o.b)(),Object(s.a)())(r.a)},682:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var i=n(39),o=n(217),r=n(35);function s(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function a(e,t){Object(r.a)(2,arguments);var n=Object(i.a)(e),a=Object(i.a)(t),c=s(n,a),l=Math.abs(Object(o.default)(n,a));n.setDate(n.getDate()-c*l);var d=Number(s(n,a)===-c),u=c*(l-d);return 0===u?0:u}},687:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},689:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(5);n(699);let o;const r=Object(i.gql)(o||(o=(e=>e)`query Countries {
  countries {
    id
    ...CountryFragment
    __typename
  }
  __typename
}
`));t.b=e=>Object(i.withQuery)(r,e)},69:function(e,t,n){"use strict";n.d(t,"q",(function(){return i})),n.d(t,"t",(function(){return o})),n.d(t,"u",(function(){return r})),n.d(t,"j",(function(){return s})),n.d(t,"w",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"k",(function(){return h})),n.d(t,"i",(function(){return b})),n.d(t,"n",(function(){return m})),n.d(t,"p",(function(){return j})),n.d(t,"f",(function(){return f})),n.d(t,"s",(function(){return O})),n.d(t,"v",(function(){return g})),n.d(t,"y",(function(){return x})),n.d(t,"l",(function(){return y})),n.d(t,"x",(function(){return v})),n.d(t,"z",(function(){return I})),n.d(t,"a",(function(){return _})),n.d(t,"h",(function(){return w})),n.d(t,"r",(function(){return S})),n.d(t,"m",(function(){return P})),n.d(t,"o",(function(){return C}));const i="profileOverview",o="profileStats",r="profileStatsReport",s="homeFeed",a="publicationDetail",c="admin",l="authorClaimLandingPage",d="authorClaimPublicationSelection",u="confirmFulltextRequest",p="awardedGrantDetail",h="homeFeedReadingList",b="generateDoiModal",m="methodDetail",j="profileContributions",f="candidateResearch",O="profileReadinglist",g="profileStatsPublicationSearch",x="spotlightCreationFlowPublicationSearch",y="journalDetail",v="recommendation_profiles",I="topicPostDetailsContent",_="activityItemSocialModal",w="fulltextRequestResolutionFlow",S="profileOverviewPromoAuthorClaim",P="journalSearch",C="pdpJournalAccountStats"},690:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},691:function(e,t,n){"use strict";var i=n(4),o=n.n(i),r=n(23),s=n(671),a=n(783),c=n(60),l=n(485),d=n(676),u=n(365),p=n(672),h=n(301),b=n(631),m=n(312),j=n(501),f=n(153),O=n(580),g=n(39),x=n(35);function y(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getSeconds();return n}function v(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getMinutes();return n}function I(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getHours();return n}function _(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getDay();return n}function w(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getDate();return n}function S(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getMonth();return n}function P(e){return Object(x.a)(1,arguments),Object(g.a)(e).getFullYear()}function C(e){Object(x.a)(1,arguments);var t=Object(g.a)(e),n=t.getTime();return n}var k=n(124);function A(e,t){Object(x.a)(2,arguments);var n=Object(g.a)(e),i=Object(k.a)(t);return n.setMinutes(i),n}function D(e,t){Object(x.a)(2,arguments);var n=Object(g.a)(e),i=Object(k.a)(t);return n.setHours(i),n}var E=n(234),T=n(670),F=n(643),M=n(644),R=n(217),N=n(375),L=n(239),B=n(528);var q=n(240),U=n(579),$=n(665),V=n(484),z=n(858),G=n(740),Q=n(827),H=n(348),W=n(116),Y=n(326),K=n(642),J=n(531),X=n(510),Z=n(130);function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}var ie,oe,re=(void 0===ie&&(ie=0),function(){return++ie}),se={},ae={},ce=["touchstart","touchmove"];function le(e,t){var n=null;return-1!==ce.indexOf(t)&&oe&&(n={passive:!e.props.preventDefault}),n}var de=function(e,t){var n,o,r=e.displayName||e.name||"Component";return o=n=function(n){var o,s;function a(e){var i;return(i=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof i.__clickOutsideHandlerProp){var t=i.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+r+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else i.__clickOutsideHandlerProp(e)},i.__getComponentNode=function(){var e=i.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():Object(Z.findDOMNode)(e)},i.enableOnClickOutside=function(){if("undefined"!=typeof document&&!ae[i._uid]){void 0===oe&&(oe=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}}()),ae[i._uid]=!0;var e=i.props.eventTypes;e.forEach||(e=[e]),se[i._uid]=function(e){var t;null!==i.componentNode&&(i.props.preventDefault&&e.preventDefault(),i.props.stopPropagation&&e.stopPropagation(),i.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,n){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&ne(e,t,n))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,i.componentNode,i.props.outsideClickIgnoreClass)===document&&i.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,se[i._uid],le(te(i),e))}))}},i.disableOnClickOutside=function(){delete ae[i._uid];var e=se[i._uid];if(e&&"undefined"!=typeof document){var t=i.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,le(te(i),t))})),delete se[i._uid]}},i.getRef=function(e){return i.instanceRef=e},i._uid=re(),i}s=n,(o=a).prototype=Object.create(s.prototype),o.prototype.constructor=o,ee(o,s);var c=a.prototype;return c.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},c.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+r+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},c.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},c.componentWillUnmount=function(){this.disableOnClickOutside()},c.render=function(){var t=this.props;t.excludeScrollbar;var n=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,Object(i.createElement)(e,n)},a}(i.Component),n.displayName="OnClickOutside("+r+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},o},ue=n(690),pe=n.n(ue),he=n(291),be=n.n(he),me=n(330),je=n.n(me),fe=n(44),Oe=n.n(fe),ge=n(81),xe=n.n(ge),ye=n(693),ve=n.n(ye),Ie="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,_e=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(Ie&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var we=Ie&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),_e))}};function Se(e){return e&&"[object Function]"==={}.toString.call(e)}function Pe(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function Ce(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function ke(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=Pe(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:ke(Ce(e))}function Ae(e){return e&&e.referenceNode?e.referenceNode:e}var De=Ie&&!(!window.MSInputMethodContext||!document.documentMode),Ee=Ie&&/MSIE 10/.test(navigator.userAgent);function Te(e){return 11===e?De:10===e?Ee:De||Ee}function Fe(e){if(!e)return document.documentElement;for(var t=Te(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Pe(n,"position")?Fe(n):n:e?e.ownerDocument.documentElement:document.documentElement}function Me(e){return null!==e.parentNode?Me(e.parentNode):e}function Re(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s,a,c=r.commonAncestorContainer;if(e!==c&&t!==c||i.contains(o))return"BODY"===(a=(s=c).nodeName)||"HTML"!==a&&Fe(s.firstElementChild)!==s?Fe(c):c;var l=Me(e);return l.host?Re(l.host,t):Re(e,Me(t).host)}function Ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var o=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||o;return r[n]}return e[n]}function Le(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Ne(t,"top"),o=Ne(t,"left"),r=n?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=o*r,e.right+=o*r,e}function Be(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+i+"Width"])}function qe(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],Te(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function Ue(e){var t=e.body,n=e.documentElement,i=Te(10)&&getComputedStyle(n);return{height:qe("Height",t,n,i),width:qe("Width",t,n,i)}}var $e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ve=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),ze=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function Qe(e){return Ge({},e,{right:e.left+e.width,bottom:e.top+e.height})}function He(e){var t={};try{if(Te(10)){t=e.getBoundingClientRect();var n=Ne(e,"top"),i=Ne(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?Ue(e.ownerDocument):{},s=r.width||e.clientWidth||o.width,a=r.height||e.clientHeight||o.height,c=e.offsetWidth-s,l=e.offsetHeight-a;if(c||l){var d=Pe(e);c-=Be(d,"x"),l-=Be(d,"y"),o.width-=c,o.height-=l}return Qe(o)}function We(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Te(10),o="HTML"===t.nodeName,r=He(e),s=He(t),a=ke(e),c=Pe(t),l=parseFloat(c.borderTopWidth),d=parseFloat(c.borderLeftWidth);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=Qe({top:r.top-s.top-l,left:r.left-s.left-d,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!i&&o){var p=parseFloat(c.marginTop),h=parseFloat(c.marginLeft);u.top-=l-p,u.bottom-=l-p,u.left-=d-h,u.right-=d-h,u.marginTop=p,u.marginLeft=h}return(i&&!n?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(u=Le(u,t)),u}function Ye(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=We(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:Ne(n),a=t?0:Ne(n,"left"),c={top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r};return Qe(c)}function Ke(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===Pe(e,"position"))return!0;var n=Ce(e);return!!n&&Ke(n)}function Je(e){if(!e||!e.parentElement||Te())return document.documentElement;for(var t=e.parentElement;t&&"none"===Pe(t,"transform");)t=t.parentElement;return t||document.documentElement}function Xe(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Je(e):Re(e,Ae(t));if("viewport"===i)r=Ye(s,o);else{var a=void 0;"scrollParent"===i?"BODY"===(a=ke(Ce(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===i?e.ownerDocument.documentElement:i;var c=We(a,s,o);if("HTML"!==a.nodeName||Ke(s))r=c;else{var l=Ue(e.ownerDocument),d=l.height,u=l.width;r.top+=c.top-c.marginTop,r.bottom=d+c.top,r.left+=c.left-c.marginLeft,r.right=u+c.left}}var p="number"==typeof(n=n||0);return r.left+=p?n:n.left||0,r.top+=p?n:n.top||0,r.right-=p?n:n.right||0,r.bottom-=p?n:n.bottom||0,r}function Ze(e){return e.width*e.height}function et(e,t,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=Xe(n,i,r,o),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},c=Object.keys(a).map((function(e){return Ge({key:e},a[e],{area:Ze(a[e])})})).sort((function(e,t){return t.area-e.area})),l=c.filter((function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight})),d=l.length>0?l[0].key:c[0].key,u=e.split("-")[1];return d+(u?"-"+u:"")}function tt(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?Je(t):Re(t,Ae(n));return We(n,o,i)}function nt(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function it(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function ot(e,t,n){n=n.split("-")[0];var i=nt(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",c=r?"height":"width",l=r?"width":"height";return o[s]=t[s]+t[c]/2-i[c]/2,o[a]=n===a?t[a]-i[l]:t[it(a)],o}function rt(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function st(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var i=rt(e,(function(e){return e[t]===n}));return e.indexOf(i)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&Se(n)&&(t.offsets.popper=Qe(t.offsets.popper),t.offsets.reference=Qe(t.offsets.reference),t=n(t,e))})),t}function at(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=et(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ot(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=st(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function ct(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function lt(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if(void 0!==document.body.style[r])return r}return null}function dt(){return this.state.isDestroyed=!0,ct(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ut(e){var t=e.ownerDocument;return t?t.defaultView:window}function pt(e,t,n,i){n.updateBound=i,ut(e).addEventListener("resize",n.updateBound,{passive:!0});var o=ke(e);return function e(t,n,i,o){var r="BODY"===t.nodeName,s=r?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),r||e(ke(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function ht(){this.state.eventsEnabled||(this.state=pt(this.reference,this.options,this.state,this.scheduleUpdate))}function bt(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,ut(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function mt(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function jt(e,t){Object.keys(t).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&mt(t[n])&&(i="px"),e.style[n]=t[n]+i}))}var ft=Ie&&/Firefox/i.test(navigator.userAgent);function Ot(e,t,n){var i=rt(e,(function(e){return e.name===t})),o=!!i&&e.some((function(e){return e.name===n&&e.enabled&&e.order<i.order}));if(!o){var r="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var gt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],xt=gt.slice(3);function yt(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=xt.indexOf(e),i=xt.slice(n+1).concat(xt.slice(0,n));return t?i.reverse():i}var vt="flip",It="clockwise",_t="counterclockwise";function wt(e,t,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),s=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=s.indexOf(rt(s,(function(e){return-1!==e.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,l=-1!==a?[s.slice(0,a).concat([s[a].split(c)[0]]),[s[a].split(c)[1]].concat(s.slice(a+1))]:[s];return(l=l.map((function(e,i){var o=(1===i?!r:r)?"height":"width",s=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,i){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Qe(a)[t]/100*r}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return r}(e,o,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,i){mt(n)&&(o[t]+=n*("-"===e[i-1]?-1:1))}))})),o}var St={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var o=e.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),c=a?"left":"top",l=a?"width":"height",d={start:ze({},c,r[c]),end:ze({},c,r[c]+r[l]-s[l])};e.offsets.popper=Ge({},s,d[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],c=void 0;return c=mt(+n)?[+n,0]:wt(n,r,s,a),"left"===a?(r.top+=c[0],r.left-=c[1]):"right"===a?(r.top+=c[0],r.left+=c[1]):"top"===a?(r.left+=c[0],r.top-=c[1]):"bottom"===a&&(r.left+=c[0],r.top+=c[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||Fe(e.instance.popper);e.instance.reference===n&&(n=Fe(n));var i=lt("transform"),o=e.instance.popper.style,r=o.top,s=o.left,a=o[i];o.top="",o.left="",o[i]="";var c=Xe(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=r,o.left=s,o[i]=a,t.boundaries=c;var l=t.priority,d=e.offsets.popper,u={primary:function(e){var n=d[e];return d[e]<c[e]&&!t.escapeWithReference&&(n=Math.max(d[e],c[e])),ze({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=d[n];return d[e]>c[e]&&!t.escapeWithReference&&(i=Math.min(d[n],c[e]-("right"===e?d.width:d.height))),ze({},n,i)}};return l.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";d=Ge({},d,u[t](e))})),e.offsets.popper=d,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",c=s?"left":"top",l=s?"width":"height";return n[a]<r(i[c])&&(e.offsets.popper[c]=r(i[c])-n[l]),n[c]>r(i[a])&&(e.offsets.popper[c]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!Ot(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,s=r.popper,a=r.reference,c=-1!==["left","right"].indexOf(o),l=c?"height":"width",d=c?"Top":"Left",u=d.toLowerCase(),p=c?"left":"top",h=c?"bottom":"right",b=nt(i)[l];a[h]-b<s[u]&&(e.offsets.popper[u]-=s[u]-(a[h]-b)),a[u]+b>s[h]&&(e.offsets.popper[u]+=a[u]+b-s[h]),e.offsets.popper=Qe(e.offsets.popper);var m=a[u]+a[l]/2-b/2,j=Pe(e.instance.popper),f=parseFloat(j["margin"+d]),O=parseFloat(j["border"+d+"Width"]),g=m-e.offsets.popper[u]-f-O;return g=Math.max(Math.min(s[l]-b,g),0),e.arrowElement=i,e.offsets.arrow=(ze(n={},u,Math.round(g)),ze(n,p,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(ct(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=Xe(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],o=it(i),r=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case vt:s=[i,o];break;case It:s=yt(i);break;case _t:s=yt(i,!0);break;default:s=t.behavior}return s.forEach((function(a,c){if(i!==a||s.length===c+1)return e;i=e.placement.split("-")[0],o=it(i);var l=e.offsets.popper,d=e.offsets.reference,u=Math.floor,p="left"===i&&u(l.right)>u(d.left)||"right"===i&&u(l.left)<u(d.right)||"top"===i&&u(l.bottom)>u(d.top)||"bottom"===i&&u(l.top)<u(d.bottom),h=u(l.left)<u(n.left),b=u(l.right)>u(n.right),m=u(l.top)<u(n.top),j=u(l.bottom)>u(n.bottom),f="left"===i&&h||"right"===i&&b||"top"===i&&m||"bottom"===i&&j,O=-1!==["top","bottom"].indexOf(i),g=!!t.flipVariations&&(O&&"start"===r&&h||O&&"end"===r&&b||!O&&"start"===r&&m||!O&&"end"===r&&j),x=!!t.flipVariationsByContent&&(O&&"start"===r&&b||O&&"end"===r&&h||!O&&"start"===r&&j||!O&&"end"===r&&m),y=g||x;(p||f||y)&&(e.flipped=!0,(p||f)&&(i=s[c+1]),y&&(r=function(e){return"end"===e?"start":"start"===e?"end":e}(r)),e.placement=i+(r?"-"+r:""),e.offsets.popper=Ge({},e.offsets.popper,ot(e.instance.popper,e.offsets.reference,e.placement)),e=st(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),e.placement=it(t),e.offsets.popper=Qe(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!Ot(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=rt(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=rt(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=Fe(e.instance.popper),c=He(a),l={position:o.position},d=function(e,t){var n=e.offsets,i=n.popper,o=n.reference,r=Math.round,s=Math.floor,a=function(e){return e},c=r(o.width),l=r(i.width),d=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),p=t?d||u||c%2==l%2?r:s:a,h=t?r:a;return{left:p(c%2==1&&l%2==1&&!u&&t?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:p(i.right)}}(e,window.devicePixelRatio<2||!ft),u="bottom"===n?"top":"bottom",p="right"===i?"left":"right",h=lt("transform"),b=void 0,m=void 0;if(m="bottom"===u?"HTML"===a.nodeName?-a.clientHeight+d.bottom:-c.height+d.bottom:d.top,b="right"===p?"HTML"===a.nodeName?-a.clientWidth+d.right:-c.width+d.right:d.left,s&&h)l[h]="translate3d("+b+"px, "+m+"px, 0)",l[u]=0,l[p]=0,l.willChange="transform";else{var j="bottom"===u?-1:1,f="right"===p?-1:1;l[u]=m*j,l[p]=b*f,l.willChange=u+", "+p}var O={"x-placement":e.placement};return e.attributes=Ge({},O,e.attributes),e.styles=Ge({},l,e.styles),e.arrowStyles=Ge({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return jt(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&jt(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,o){var r=tt(o,t,e,n.positionFixed),s=et(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),jt(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Pt=function(){function e(t,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};$e(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=we(this.update.bind(this)),this.options=Ge({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(Ge({},e.Defaults.modifiers,o.modifiers)).forEach((function(t){i.options.modifiers[t]=Ge({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return Ge({name:e},i.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&Se(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ve(e,[{key:"update",value:function(){return at.call(this)}},{key:"destroy",value:function(){return dt.call(this)}},{key:"enableEventListeners",value:function(){return ht.call(this)}},{key:"disableEventListeners",value:function(){return bt.call(this)}}]),e}();Pt.Utils=("undefined"!=typeof window?window:global).PopperUtils,Pt.placements=gt,Pt.Defaults=St;var Ct=Pt,kt=n(565),At=n.n(kt),Dt=At()(),Et=At()(),Tt=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,xe()(Oe()(Oe()(t)),"referenceNode",void 0),xe()(Oe()(Oe()(t)),"setReferenceNode",(function(e){e&&t.referenceNode!==e&&(t.referenceNode=e,t.forceUpdate())})),t}je()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.referenceNode=null},n.render=function(){return i.createElement(Dt.Provider,{value:this.referenceNode},i.createElement(Et.Provider,{value:this.setReferenceNode},this.props.children))},t}(i.Component),Ft=function(e){return Array.isArray(e)?e[0]:e},Mt=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.apply(void 0,n)}},Rt=function(e,t){if("function"==typeof e)return Mt(e,t);null!=e&&(e.current=t)},Nt={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"},Lt={},Bt=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,xe()(Oe()(Oe()(t)),"state",{data:void 0,placement:void 0}),xe()(Oe()(Oe()(t)),"popperInstance",void 0),xe()(Oe()(Oe()(t)),"popperNode",null),xe()(Oe()(Oe()(t)),"arrowNode",null),xe()(Oe()(Oe()(t)),"setPopperNode",(function(e){e&&t.popperNode!==e&&(Rt(t.props.innerRef,e),t.popperNode=e,t.updatePopperInstance())})),xe()(Oe()(Oe()(t)),"setArrowNode",(function(e){t.arrowNode=e})),xe()(Oe()(Oe()(t)),"updateStateModifier",{enabled:!0,order:900,fn:function(e){var n=e.placement;return t.setState({data:e,placement:n}),e}}),xe()(Oe()(Oe()(t)),"getOptions",(function(){return{placement:t.props.placement,eventsEnabled:t.props.eventsEnabled,positionFixed:t.props.positionFixed,modifiers:be()({},t.props.modifiers,{arrow:be()({},t.props.modifiers&&t.props.modifiers.arrow,{enabled:!!t.arrowNode,element:t.arrowNode}),applyStyle:{enabled:!1},updateStateModifier:t.updateStateModifier})}})),xe()(Oe()(Oe()(t)),"getPopperStyle",(function(){return t.popperNode&&t.state.data?be()({position:t.state.data.offsets.popper.position},t.state.data.styles):Nt})),xe()(Oe()(Oe()(t)),"getPopperPlacement",(function(){return t.state.data?t.state.placement:void 0})),xe()(Oe()(Oe()(t)),"getArrowStyle",(function(){return t.arrowNode&&t.state.data?t.state.data.arrowStyles:Lt})),xe()(Oe()(Oe()(t)),"getOutOfBoundariesState",(function(){return t.state.data?t.state.data.hide:void 0})),xe()(Oe()(Oe()(t)),"destroyPopperInstance",(function(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)})),xe()(Oe()(Oe()(t)),"updatePopperInstance",(function(){t.destroyPopperInstance();var e=Oe()(Oe()(t)).popperNode,n=t.props.referenceElement;n&&e&&(t.popperInstance=new Ct(n,e,t.getOptions()))})),xe()(Oe()(Oe()(t)),"scheduleUpdate",(function(){t.popperInstance&&t.popperInstance.scheduleUpdate()})),t}je()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.placement===e.placement&&this.props.referenceElement===e.referenceElement&&this.props.positionFixed===e.positionFixed&&ve()(this.props.modifiers,e.modifiers,{strict:!0})?this.props.eventsEnabled!==e.eventsEnabled&&this.popperInstance&&(this.props.eventsEnabled?this.popperInstance.enableEventListeners():this.popperInstance.disableEventListeners()):this.updatePopperInstance(),t.placement!==this.state.placement&&this.scheduleUpdate()},n.componentWillUnmount=function(){Rt(this.props.innerRef,null),this.destroyPopperInstance()},n.render=function(){return Ft(this.props.children)({ref:this.setPopperNode,style:this.getPopperStyle(),placement:this.getPopperPlacement(),outOfBoundaries:this.getOutOfBoundariesState(),scheduleUpdate:this.scheduleUpdate,arrowProps:{ref:this.setArrowNode,style:this.getArrowStyle()}})},t}(i.Component);xe()(Bt,"defaultProps",{placement:"bottom",eventsEnabled:!0,referenceElement:void 0,positionFixed:!1});Ct.placements;function qt(e){var t=e.referenceElement,n=pe()(e,["referenceElement"]);return i.createElement(Dt.Consumer,null,(function(e){return i.createElement(Bt,be()({referenceElement:void 0!==t?t:e},n))}))}var Ut=n(616),$t=n.n(Ut),Vt=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,xe()(Oe()(Oe()(t)),"refHandler",(function(e){Rt(t.props.innerRef,e),Mt(t.props.setReferenceNode,e)})),t}je()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){Rt(this.props.innerRef,null)},n.render=function(){return $t()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Ft(this.props.children)({ref:this.refHandler})},t}(i.Component);function zt(e){return i.createElement(Et.Consumer,null,(function(t){return i.createElement(Vt,be()({setReferenceNode:t},e))}))}var Gt,Qt=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){function n(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function i(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={p:i,P:function(e,t){var o,r=e.match(/(P+)(p+)?/),s=r[1],a=r[2];if(!a)return n(e,t);switch(s){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",n(s,t)).replace("{{time}}",i(a,t))}};t.default=o,e.exports=t.default})),Ht=(Gt=Qt)&&Gt.__esModule&&Object.prototype.hasOwnProperty.call(Gt,"default")?Gt.default:Gt,Wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Kt=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Jt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Xt=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Zt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},en=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function tn(e){var t=e?"string"==typeof e||e instanceof String?Object(X.a)(e):Object(g.a)(e):new Date;return on(t)?t:null}function nn(e,t,n,i){var o=null,r=On(n)||fn(),s=!0;return Array.isArray(t)?(t.forEach((function(t){var n=Object(J.default)(e,t,new Date,{locale:r});i&&(s=on(n)&&e===Object(c.default)(n,t,{awareOfUnicodeTokens:!0})),on(n)&&s&&(o=n)})),o):(o=Object(J.default)(e,t,new Date,{locale:r}),i?s=on(o)&&e===Object(c.default)(o,t,{awareOfUnicodeTokens:!0}):on(o)||(t=t.match(en).map((function(e){var t=e[0];if("p"===t||"P"===t){var n=Ht[t];return r?n(e,r.formatLong):t}return e})).join(""),e.length>0&&(o=Object(J.default)(e,t.slice(0,e.length),new Date)),on(o)||(o=new Date(e))),on(o)&&s?o:null)}function on(e){return Object(a.default)(e)&&Object(W.default)(e,new Date("1/1/1000"))}function rn(e,t,n){if("en"===n)return Object(c.default)(e,t,{awareOfUnicodeTokens:!0});var i=On(n);return n&&!i&&console.warn('A locale object was not found for the provided string ["'+n+'"].'),!i&&fn()&&On(fn())&&(i=On(fn())),Object(c.default)(e,t,{locale:i||null,awareOfUnicodeTokens:!0})}function sn(e,t){var n=t.hour,i=void 0===n?0:n,o=t.minute,r=void 0===o?0:o,s=t.second;return D(A(function(e,t){Object(x.a)(2,arguments);var n=Object(g.a)(e),i=Object(k.a)(t);return n.setSeconds(i),n}(e,void 0===s?0:s),r),i)}function an(e){!function(e,t){Object(x.a)(2,arguments);var n=Object(g.a)(e),i=Object(k.a)(t);n.setMonth(0),n.setDate(i)}(e,1);return pn(Object(V.default)(e),e)?function(e,t,n){Object(x.a)(2,arguments);var i=Object(L.default)(e,n),o=Object(L.default)(t,n),r=i.getTime()-Object(B.a)(i),s=o.getTime()-Object(B.a)(o);return Math.round((r-s)/6048e5)}(e,Object($.a)(e))+1:1}function cn(e,t){return rn(e,"ddd",t)}function ln(e){return Object(q.default)(e)}function dn(e,t){var n=On(t||fn());return Object(L.default)(e,{locale:n})}function un(e){return Object(U.default)(e)}function pn(e,t){return e&&t?Object(H.a)(e,t):!e&&!t}function hn(e,t){return e&&t?Object(Q.default)(e,t):!e&&!t}function bn(e,t){return e&&t?Object(G.default)(e,t):!e&&!t}function mn(e,t){return e&&t?Object(z.default)(e,t):!e&&!t}function jn(e,t,n){var i=void 0;try{i=Object(K.default)(e,{start:t,end:n})}catch(e){i=!1}return i}function fn(){return("undefined"!=typeof window?window:global).__localeId__}function On(e){if("string"==typeof e){var t="undefined"!=typeof window?window:global;return t.__localeData__?t.__localeData__[e]:null}return e}function gn(e,t){return rn(Object(E.default)(tn(),e),"LLL",t)}function xn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minDate,i=t.maxDate,o=t.excludeDates,r=t.includeDates,s=t.filterDate;return In(e,{minDate:n,maxDate:i})||o&&o.some((function(t){return bn(e,t)}))||r&&!r.some((function(t){return bn(e,t)}))||s&&!s(tn(e))||!1}function yn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minDate,i=t.maxDate,o=t.excludeDates,r=t.includeDates,s=t.filterDate;return In(e,{minDate:n,maxDate:i})||o&&o.some((function(t){return hn(e,t)}))||r&&!r.some((function(t){return hn(e,t)}))||s&&!s(tn(e))||!1}function vn(e,t,n,i){var o=P(e),r=S(e),s=P(t),a=S(t),c=P(i);return o===s&&o===c?r<=n&&n<=a:o<s?c===o&&r<=n||c===s&&a>=n||c<s&&c>o:void 0}function In(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minDate,i=t.maxDate;return n&&Object(R.default)(e,n)<0||i&&Object(R.default)(e,i)>0}function _n(e,t){for(var n=t.length,i=0;i<n;i++)if(I(t[i])===I(e)&&v(t[i])===v(e))return!0;return!1}function wn(e,t){var n=t.minTime,i=t.maxTime;if(!n||!i)throw new Error("Both minTime and maxTime props required");var o=tn(),r=D(A(o,v(e)),I(e)),s=D(A(o,v(n)),I(n)),a=D(A(o,v(i)),I(i)),c=void 0;try{c=!Object(K.default)(r,{start:s,end:a})}catch(e){c=!1}return c}function Sn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minDate,i=t.includeDates,o=Object(f.default)(e,1);return n&&Object(N.default)(n,o)>0||i&&i.every((function(e){return Object(N.default)(e,o)>0}))||!1}function Pn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.maxDate,i=t.includeDates,o=Object(h.default)(e,1);return n&&Object(N.default)(o,n)>0||i&&i.every((function(e){return Object(N.default)(o,e)>0}))||!1}function Cn(e){var t=e.minDate,n=e.includeDates;if(n&&t){var i=n.filter((function(e){return Object(R.default)(e,t)>=0}));return Object(F.default)(i)}return n?Object(F.default)(n):t}function kn(e){var t=e.maxDate,n=e.includeDates;if(n&&t){var i=n.filter((function(e){return Object(R.default)(e,t)<=0}));return Object(M.default)(i)}return n?Object(M.default)(n):t}function An(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--highlighted",n=new Map,i=0,o=e.length;i<o;i++){var r=e[i];if(Object(s.a)(r)){var a=rn(r,"MM.dd.yyyy"),c=n.get(a)||[];c.includes(t)||(c.push(t),n.set(a,c))}else if("object"===(void 0===r?"undefined":Wt(r))){var l=Object.keys(r),d=l[0],u=r[l[0]];if("string"==typeof d&&u.constructor===Array)for(var p=0,h=u.length;p<h;p++){var b=rn(u[p],"MM.dd.yyyy"),m=n.get(b)||[];m.includes(d)||(m.push(d),n.set(b,m))}}}return n}function Dn(e,t,n,i,o){for(var r=o.length,s=[],a=0;a<r;a++){var c=Object(l.a)(Object(d.a)(e,I(o[a])),v(o[a])),u=Object(l.a)(e,(n+1)*i);Object(W.default)(c,t)&&Object(Y.default)(c,u)&&s.push(o[a])}return s}function En(e){return e<10?"0"+e:""+e}function Tn(e,t,n,i){for(var o=[],r=0;r<2*t+1;r++){var s=e+t-r,a=!0;n&&(a=P(n)<=s),i&&a&&(a=P(i)>=s),a&&o.push(s)}return o}var Fn=de(function(e){function t(n){Yt(this,t);var i=Zt(this,e.call(this,n));i.renderOptions=function(){var e=i.props.year,t=i.state.yearsList.map((function(t){return o.a.createElement("div",{className:e===t?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:t,ref:t,onClick:i.onChange.bind(i,t)},e===t?o.a.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",t)})),n=i.props.minDate?P(i.props.minDate):null,r=i.props.maxDate?P(i.props.maxDate):null;return r&&i.state.yearsList.find((function(e){return e===r}))||t.unshift(o.a.createElement("div",{className:"react-datepicker__year-option",ref:"upcoming",key:"upcoming",onClick:i.incrementYears},o.a.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),n&&i.state.yearsList.find((function(e){return e===n}))||t.push(o.a.createElement("div",{className:"react-datepicker__year-option",ref:"previous",key:"previous",onClick:i.decrementYears},o.a.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),t},i.onChange=function(e){i.props.onChange(e)},i.handleClickOutside=function(){i.props.onCancel()},i.shiftYears=function(e){var t=i.state.yearsList.map((function(t){return t+e}));i.setState({yearsList:t})},i.incrementYears=function(){return i.shiftYears(1)},i.decrementYears=function(){return i.shiftYears(-1)};var r=n.yearDropdownItemNumber,s=n.scrollableYearDropdown,a=r||(s?10:5);return i.state={yearsList:Tn(i.props.year,a,i.props.minDate,i.props.maxDate)},i}return Xt(t,e),t.prototype.render=function(){var e=Object(r.default)({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return o.a.createElement("div",{className:e},this.renderOptions())},t}(o.a.Component)),Mn=function(e){function t(){var n,i;Yt(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.state={dropdownVisible:!1},i.renderSelectOptions=function(){for(var e=i.props.minDate?P(i.props.minDate):1900,t=i.props.maxDate?P(i.props.maxDate):2100,n=[],r=e;r<=t;r++)n.push(o.a.createElement("option",{key:r,value:r},r));return n},i.onSelectChange=function(e){i.onChange(e.target.value)},i.renderSelectMode=function(){return o.a.createElement("select",{value:i.props.year,className:"react-datepicker__year-select",onChange:i.onSelectChange},i.renderSelectOptions())},i.renderReadView=function(e){return o.a.createElement("div",{key:"read",style:{visibility:e?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(e){return i.toggleDropdown(e)}},o.a.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),o.a.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},i.props.year))},i.renderDropdown=function(){return o.a.createElement(Fn,{key:"dropdown",ref:"options",year:i.props.year,onChange:i.onChange,onCancel:i.toggleDropdown,minDate:i.props.minDate,maxDate:i.props.maxDate,scrollableYearDropdown:i.props.scrollableYearDropdown,yearDropdownItemNumber:i.props.yearDropdownItemNumber})},i.renderScrollMode=function(){var e=i.state.dropdownVisible,t=[i.renderReadView(!e)];return e&&t.unshift(i.renderDropdown()),t},i.onChange=function(e){i.toggleDropdown(),e!==i.props.year&&i.props.onChange(e)},i.toggleDropdown=function(e){i.setState({dropdownVisible:!i.state.dropdownVisible},(function(){i.props.adjustDateOnChange&&i.handleYearChange(i.props.date,e)}))},i.handleYearChange=function(e,t){i.onSelect(e,t),i.setOpen()},i.onSelect=function(e,t){i.props.onSelect&&i.props.onSelect(e,t)},i.setOpen=function(){i.props.setOpen&&i.props.setOpen(!0)},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){var e=void 0;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode()}return o.a.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--"+this.props.dropdownMode},e)},t}(o.a.Component),Rn=de(function(e){function t(){var n,i;Yt(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.renderOptions=function(){return i.props.monthNames.map((function(e,t){return o.a.createElement("div",{className:i.props.month===t?"react-datepicker__month-option --selected_month":"react-datepicker__month-option",key:e,ref:e,onClick:i.onChange.bind(i,t)},i.props.month===t?o.a.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",e)}))},i.onChange=function(e){return i.props.onChange(e)},i.handleClickOutside=function(){return i.props.onCancel()},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())},t}(o.a.Component)),Nn=function(e){function t(){var n,i;Yt(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.state={dropdownVisible:!1},i.renderSelectOptions=function(e){return e.map((function(e,t){return o.a.createElement("option",{key:t,value:t},e)}))},i.renderSelectMode=function(e){return o.a.createElement("select",{value:i.props.month,className:"react-datepicker__month-select",onChange:function(e){return i.onChange(e.target.value)}},i.renderSelectOptions(e))},i.renderReadView=function(e,t){return o.a.createElement("div",{key:"read",style:{visibility:e?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:i.toggleDropdown},o.a.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),o.a.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},t[i.props.month]))},i.renderDropdown=function(e){return o.a.createElement(Rn,{key:"dropdown",ref:"options",month:i.props.month,monthNames:e,onChange:i.onChange,onCancel:i.toggleDropdown})},i.renderScrollMode=function(e){var t=i.state.dropdownVisible,n=[i.renderReadView(!t,e)];return t&&n.unshift(i.renderDropdown(e)),n},i.onChange=function(e){i.toggleDropdown(),e!==i.props.month&&i.props.onChange(e)},i.toggleDropdown=function(){return i.setState({dropdownVisible:!i.state.dropdownVisible})},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){var e=this,t=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(t){return gn(t,e.props.locale)}:function(t){return n=t,i=e.props.locale,rn(Object(E.default)(tn(),n),"LLLL",i);var n,i}),n=void 0;switch(this.props.dropdownMode){case"scroll":n=this.renderScrollMode(t);break;case"select":n=this.renderSelectMode(t)}return o.a.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--"+this.props.dropdownMode},n)},t}(o.a.Component);function Ln(e,t){for(var n=[],i=un(e),o=un(t);!Object(W.default)(i,o);)n.push(tn(i)),i=Object(h.default)(i,1);return n}var Bn=de(function(e){function t(n){Yt(this,t);var i=Zt(this,e.call(this,n));return i.renderOptions=function(){return i.state.monthYearsList.map((function(e){var t=C(e),n=pn(i.props.date,e)&&hn(i.props.date,e);return o.a.createElement("div",{className:n?"react-datepicker__month-year-option --selected_month-year":"react-datepicker__month-year-option",key:t,ref:t,onClick:i.onChange.bind(i,t)},n?o.a.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",rn(e,i.props.dateFormat))}))},i.onChange=function(e){return i.props.onChange(e)},i.handleClickOutside=function(){i.props.onCancel()},i.state={monthYearsList:Ln(i.props.minDate,i.props.maxDate)},i}return Xt(t,e),t.prototype.render=function(){var e=Object(r.default)({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return o.a.createElement("div",{className:e},this.renderOptions())},t}(o.a.Component)),qn=function(e){function t(){var n,i;Yt(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.state={dropdownVisible:!1},i.renderSelectOptions=function(){for(var e=un(i.props.minDate),t=un(i.props.maxDate),n=[];!Object(W.default)(e,t);){var r=C(e);n.push(o.a.createElement("option",{key:r,value:r},rn(e,i.props.dateFormat,i.props.locale))),e=Object(h.default)(e,1)}return n},i.onSelectChange=function(e){i.onChange(e.target.value)},i.renderSelectMode=function(){return o.a.createElement("select",{value:C(un(i.props.date)),className:"react-datepicker__month-year-select",onChange:i.onSelectChange},i.renderSelectOptions())},i.renderReadView=function(e){var t=rn(i.props.date,i.props.dateFormat,i.props.locale);return o.a.createElement("div",{key:"read",style:{visibility:e?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(e){return i.toggleDropdown(e)}},o.a.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),o.a.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},t))},i.renderDropdown=function(){return o.a.createElement(Bn,{key:"dropdown",ref:"options",date:i.props.date,dateFormat:i.props.dateFormat,onChange:i.onChange,onCancel:i.toggleDropdown,minDate:i.props.minDate,maxDate:i.props.maxDate,scrollableMonthYearDropdown:i.props.scrollableMonthYearDropdown})},i.renderScrollMode=function(){var e=i.state.dropdownVisible,t=[i.renderReadView(!e)];return e&&t.unshift(i.renderDropdown()),t},i.onChange=function(e){i.toggleDropdown();var t=tn(parseInt(e));pn(i.props.date,t)&&hn(i.props.date,t)||i.props.onChange(t)},i.toggleDropdown=function(){return i.setState({dropdownVisible:!i.state.dropdownVisible})},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){var e=void 0;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode()}return o.a.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--"+this.props.dropdownMode},e)},t}(o.a.Component),Un=function(e){function t(){var n,i;Yt(this,t);for(var o=arguments.length,s=Array(o),a=0;a<o;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.handleClick=function(e){!i.isDisabled()&&i.props.onClick&&i.props.onClick(e)},i.handleMouseEnter=function(e){!i.isDisabled()&&i.props.onMouseEnter&&i.props.onMouseEnter(e)},i.isSameDay=function(e){return bn(i.props.day,e)},i.isKeyboardSelected=function(){return!i.props.disabledKeyboardNavigation&&!i.props.inline&&!i.isSameDay(i.props.selected)&&i.isSameDay(i.props.preSelection)},i.isDisabled=function(){return xn(i.props.day,i.props)},i.getHighLightedClass=function(e){var t=i.props,n=t.day,o=t.highlightDates;if(!o)return!1;var r=rn(n,"MM.dd.yyyy");return o.get(r)},i.isInRange=function(){var e=i.props,t=e.day,n=e.startDate,o=e.endDate;return!(!n||!o)&&jn(t,n,o)},i.isInSelectingRange=function(){var e=i.props,t=e.day,n=e.selectsStart,o=e.selectsEnd,r=e.selectingDate,s=e.startDate,a=e.endDate;return!(!n&&!o||!r||i.isDisabled())&&(n&&a&&(Object(Y.default)(r,a)||mn(r,a))?jn(t,r,a):!(!o||!s||!Object(W.default)(r,s)&&!mn(r,s))&&jn(t,s,r))},i.isSelectingRangeStart=function(){if(!i.isInSelectingRange())return!1;var e=i.props,t=e.day,n=e.selectingDate,o=e.startDate;return bn(t,e.selectsStart?n:o)},i.isSelectingRangeEnd=function(){if(!i.isInSelectingRange())return!1;var e=i.props,t=e.day,n=e.selectingDate,o=e.endDate;return bn(t,e.selectsEnd?n:o)},i.isRangeStart=function(){var e=i.props,t=e.day,n=e.startDate,o=e.endDate;return!(!n||!o)&&bn(n,t)},i.isRangeEnd=function(){var e=i.props,t=e.day,n=e.startDate,o=e.endDate;return!(!n||!o)&&bn(o,t)},i.isWeekend=function(){var e=_(i.props.day);return 0===e||6===e},i.isOutsideMonth=function(){return void 0!==i.props.month&&i.props.month!==S(i.props.day)},i.getClassNames=function(e){var t=i.props.dayClassName?i.props.dayClassName(e):void 0;return Object(r.default)("react-datepicker__day",t,"react-datepicker__day--"+cn(i.props.day),{"react-datepicker__day--disabled":i.isDisabled(),"react-datepicker__day--selected":i.isSameDay(i.props.selected),"react-datepicker__day--keyboard-selected":i.isKeyboardSelected(),"react-datepicker__day--range-start":i.isRangeStart(),"react-datepicker__day--range-end":i.isRangeEnd(),"react-datepicker__day--in-range":i.isInRange(),"react-datepicker__day--in-selecting-range":i.isInSelectingRange(),"react-datepicker__day--selecting-range-start":i.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":i.isSelectingRangeEnd(),"react-datepicker__day--today":i.isSameDay(tn()),"react-datepicker__day--weekend":i.isWeekend(),"react-datepicker__day--outside-month":i.isOutsideMonth()},i.getHighLightedClass("react-datepicker__day--highlighted"))},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:this.getClassNames(this.props.day),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,"aria-label":"day-"+w(this.props.day),role:"option"},this.props.renderDayContents?this.props.renderDayContents(w(this.props.day),this.props.day):w(this.props.day))},t}(o.a.Component),$n=function(e){function t(){var n,i;Yt(this,t);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return n=i=Zt(this,e.call.apply(e,[this].concat(r))),i.handleClick=function(e){i.props.onClick&&i.props.onClick(e)},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){var e={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!this.props.onClick};return o.a.createElement("div",{className:Object(r.default)(e),"aria-label":"week-"+this.props.weekNumber,onClick:this.handleClick},this.props.weekNumber)},t}(o.a.Component),Vn=function(e){function t(){var n,i;Yt(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.handleDayClick=function(e,t){i.props.onDayClick&&i.props.onDayClick(e,t)},i.handleDayMouseEnter=function(e){i.props.onDayMouseEnter&&i.props.onDayMouseEnter(e)},i.handleWeekClick=function(e,t,n){"function"==typeof i.props.onWeekSelect&&i.props.onWeekSelect(e,t,n),i.props.shouldCloseOnSelect&&i.props.setOpen(!1)},i.formatWeekNumber=function(e){return i.props.formatWeekNumber?i.props.formatWeekNumber(e):an(e)},i.renderDays=function(){var e=dn(i.props.day,i.props.locale),t=[],n=i.formatWeekNumber(e);if(i.props.showWeekNumber){var r=i.props.onWeekSelect?i.handleWeekClick.bind(i,e,n):void 0;t.push(o.a.createElement($n,{key:"W",weekNumber:n,onClick:r}))}return t.concat([0,1,2,3,4,5,6].map((function(t){var n=Object(u.default)(e,t);return o.a.createElement(Un,{key:t,day:n,month:i.props.month,onClick:i.handleDayClick.bind(i,n),onMouseEnter:i.handleDayMouseEnter.bind(i,n),minDate:i.props.minDate,maxDate:i.props.maxDate,excludeDates:i.props.excludeDates,includeDates:i.props.includeDates,inline:i.props.inline,highlightDates:i.props.highlightDates,selectingDate:i.props.selectingDate,filterDate:i.props.filterDate,preSelection:i.props.preSelection,selected:i.props.selected,selectsStart:i.props.selectsStart,selectsEnd:i.props.selectsEnd,startDate:i.props.startDate,endDate:i.props.endDate,dayClassName:i.props.dayClassName,renderDayContents:i.props.renderDayContents,disabledKeyboardNavigation:i.props.disabledKeyboardNavigation})})))},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"react-datepicker__week"},this.renderDays())},Kt(t,null,[{key:"defaultProps",get:function(){return{shouldCloseOnSelect:!0}}}]),t}(o.a.Component),zn=function(e){function t(){var n,i;Yt(this,t);for(var s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c];return n=i=Zt(this,e.call.apply(e,[this].concat(a))),i.handleDayClick=function(e,t){i.props.onDayClick&&i.props.onDayClick(e,t,i.props.orderInDisplay)},i.handleDayMouseEnter=function(e){i.props.onDayMouseEnter&&i.props.onDayMouseEnter(e)},i.handleMouseLeave=function(){i.props.onMouseLeave&&i.props.onMouseLeave()},i.isRangeStart=function(e){var t=i.props,n=t.day,o=t.startDate,r=t.endDate;return!(!o||!r)&&hn(Object(E.default)(n,e),o)},i.isRangeEnd=function(e){var t=i.props,n=t.day,o=t.startDate,r=t.endDate;return!(!o||!r)&&hn(Object(E.default)(n,e),r)},i.isWeekInMonth=function(e){var t=i.props.day,n=Object(u.default)(e,6);return hn(e,t)||hn(n,t)},i.renderWeeks=function(){for(var e=[],t=i.props.fixedHeight,n=dn(un(i.props.day),i.props.locale),r=0,s=!1;e.push(o.a.createElement(Vn,{key:r,day:n,month:S(i.props.day),onDayClick:i.handleDayClick,onDayMouseEnter:i.handleDayMouseEnter,onWeekSelect:i.props.onWeekSelect,formatWeekNumber:i.props.formatWeekNumber,locale:i.props.locale,minDate:i.props.minDate,maxDate:i.props.maxDate,excludeDates:i.props.excludeDates,includeDates:i.props.includeDates,inline:i.props.inline,highlightDates:i.props.highlightDates,selectingDate:i.props.selectingDate,filterDate:i.props.filterDate,preSelection:i.props.preSelection,selected:i.props.selected,selectsStart:i.props.selectsStart,selectsEnd:i.props.selectsEnd,showWeekNumber:i.props.showWeekNumbers,startDate:i.props.startDate,endDate:i.props.endDate,dayClassName:i.props.dayClassName,setOpen:i.props.setOpen,shouldCloseOnSelect:i.props.shouldCloseOnSelect,disabledKeyboardNavigation:i.props.disabledKeyboardNavigation,renderDayContents:i.props.renderDayContents})),!s;){r++,n=Object(p.a)(n,1);var a=t&&r>=6,c=!t&&!i.isWeekInMonth(n);if(a||c){if(!i.props.peekNextMonth)break;s=!0}}return e},i.onMonthClick=function(e,t){i.handleDayClick(un(Object(E.default)(i.props.day,t)))},i.getMonthClassNames=function(e){var t=i.props,n=t.day,o=t.startDate,s=t.endDate,a=t.selected,c=t.minDate,l=t.maxDate;return Object(r.default)("react-datepicker__month-text","react-datepicker__month-"+e,{"react-datepicker__month--disabled":(c||l)&&yn(Object(E.default)(n,e),i.props),"react-datepicker__month--selected":S(n)===e&&P(n)===P(a),"react-datepicker__month--in-range":vn(o,s,e,n),"react-datepicker__month--range-start":i.isRangeStart(e),"react-datepicker__month--range-end":i.isRangeEnd(e)})},i.renderMonths=function(){return[[0,1,2],[3,4,5],[6,7,8],[9,10,11]].map((function(e,t){return o.a.createElement("div",{className:"react-datepicker__month-wrapper",key:t},e.map((function(e,t){return o.a.createElement("div",{key:t,onClick:function(t){i.onMonthClick(t.target,e)},className:i.getMonthClassNames(e)},gn(e,i.props.locale))})))}))},i.getClassNames=function(){var e=i.props,t=e.selectingDate,n=e.selectsStart,o=e.selectsEnd,s=e.showMonthYearPicker;return Object(r.default)("react-datepicker__month",{"react-datepicker__month--selecting-range":t&&(n||o)},{"react-datepicker__monthPicker":s})},Zt(i,n)}return Xt(t,e),t.prototype.render=function(){var e=this.props.showMonthYearPicker;return o.a.createElement("div",{className:this.getClassNames(),onMouseLeave:this.handleMouseLeave,role:"listbox","aria-label":"month-"+rn(this.props.day,"yyyy-MM")},e?this.renderMonths():this.renderWeeks())},t}(o.a.Component),Gn=function(e){function t(){var n,i;Yt(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=i=Zt(this,e.call.apply(e,[this].concat(s))),i.state={height:null},i.handleClick=function(e){(i.props.minTime||i.props.maxTime)&&wn(e,i.props)||i.props.excludeTimes&&_n(e,i.props.excludeTimes)||i.props.includeTimes&&!_n(e,i.props.includeTimes)||i.props.onChange(e)},i.liClasses=function(e,t,n){var o=["react-datepicker__time-list-item"];return t===I(e)&&n===v(e)&&o.push("react-datepicker__time-list-item--selected"),((i.props.minTime||i.props.maxTime)&&wn(e,i.props)||i.props.excludeTimes&&_n(e,i.props.excludeTimes)||i.props.includeTimes&&!_n(e,i.props.includeTimes))&&o.push("react-datepicker__time-list-item--disabled"),i.props.injectTimes&&(60*I(e)+v(e))%i.props.intervals!=0&&o.push("react-datepicker__time-list-item--injected"),o.join(" ")},i.renderTimes=function(){for(var e=[],t=i.props.format?i.props.format:"p",n=i.props.intervals,r=i.props.selected?i.props.selected:tn(),s=I(r),a=v(r),c=ln(tn()),d=1440/n,u=i.props.injectTimes&&i.props.injectTimes.sort((function(e,t){return e-t})),p=0;p<d;p++){var h=Object(l.a)(c,p*n);if(e.push(h),u){var b=Dn(c,h,p,n,u);e=e.concat(b)}}return e.map((function(e,n){return o.a.createElement("li",{key:n,onClick:i.handleClick.bind(i,e),className:i.liClasses(e,s,a),ref:function(t){(s===I(e)&&a===v(e)||s===I(e)&&!i.centerLi)&&(i.centerLi=t)}},rn(e,t,i.props.locale))}))},Zt(i,n)}return Xt(t,e),t.prototype.componentDidMount=function(){this.list.scrollTop=t.calcCenterPosition(this.props.monthRef?this.props.monthRef.clientHeight-this.header.clientHeight:this.list.clientHeight,this.centerLi),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight})},t.prototype.render=function(){var e=this,t=this.state.height;return o.a.createElement("div",{className:"react-datepicker__time-container "+(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},o.a.createElement("div",{className:"react-datepicker__header react-datepicker__header--time",ref:function(t){e.header=t}},o.a.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),o.a.createElement("div",{className:"react-datepicker__time"},o.a.createElement("div",{className:"react-datepicker__time-box"},o.a.createElement("ul",{className:"react-datepicker__time-list",ref:function(t){e.list=t},style:t?{height:t}:{}},this.renderTimes.bind(this)()))))},Kt(t,null,[{key:"defaultProps",get:function(){return{intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}]),t}(o.a.Component);Gn.calcCenterPosition=function(e,t){return t.offsetTop-(e/2-t.clientHeight/2)};var Qn=function(e){function t(n){Yt(this,t);var i=Zt(this,e.call(this,n));return i.onTimeChange=function(e){i.setState({time:e});var t=new Date;t.setHours(e.split(":")[0]),t.setMinutes(e.split(":")[1]),i.props.onChange(t)},i.state={time:i.props.timeString},i}return Xt(t,e),t.prototype.render=function(){var e=this,t=this.state.time,n=this.props.timeString;return o.a.createElement("div",{className:"react-datepicker__input-time-container"},o.a.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),o.a.createElement("div",{className:"react-datepicker-time__input-container"},o.a.createElement("div",{className:"react-datepicker-time__input"},o.a.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:t,onChange:function(t){e.onTimeChange(t.target.value||n)}}))))},t}(o.a.Component);function Hn(e){var t=e.className,n=e.children,i=e.arrowProps,r=void 0===i?{}:i;return o.a.createElement("div",{className:t},o.a.createElement("div",Jt({className:"react-datepicker__triangle"},r)),n)}var Wn=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],Yn=function(e){function t(n){Yt(this,t);var i=Zt(this,e.call(this,n));return i.handleClickOutside=function(e){i.props.onClickOutside(e)},i.handleDropdownFocus=function(e){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.className||"").split(/\s+/);return Wn.some((function(e){return t.indexOf(e)>=0}))})(e.target)&&i.props.onDropdownFocus()},i.getDateInView=function(){var e=i.props,t=e.preSelection,n=e.selected,o=e.openToDate,r=Cn(i.props),s=kn(i.props),a=tn(),c=o||n||t;return c||(r&&Object(Y.default)(a,r)?r:s&&Object(W.default)(a,s)?s:a)},i.increaseMonth=function(){i.setState({date:Object(h.default)(i.state.date,1)},(function(){return i.handleMonthChange(i.state.date)}))},i.decreaseMonth=function(){i.setState({date:Object(f.default)(i.state.date,1)},(function(){return i.handleMonthChange(i.state.date)}))},i.handleDayClick=function(e,t,n){return i.props.onSelect(e,t,n)},i.handleDayMouseEnter=function(e){i.setState({selectingDate:e}),i.props.onDayMouseEnter&&i.props.onDayMouseEnter(e)},i.handleMonthMouseLeave=function(){i.setState({selectingDate:null}),i.props.onMonthMouseLeave&&i.props.onMonthMouseLeave()},i.handleYearChange=function(e){i.props.onYearChange&&i.props.onYearChange(e)},i.handleMonthChange=function(e){i.props.onMonthChange&&i.props.onMonthChange(e),i.props.adjustDateOnChange&&(i.props.onSelect&&i.props.onSelect(e),i.props.setOpen&&i.props.setOpen(!0))},i.handleMonthYearChange=function(e){i.handleYearChange(e),i.handleMonthChange(e)},i.changeYear=function(e){i.setState({date:Object(T.default)(i.state.date,e)},(function(){return i.handleYearChange(i.state.date)}))},i.changeMonth=function(e){i.setState({date:Object(E.default)(i.state.date,e)},(function(){return i.handleMonthChange(i.state.date)}))},i.changeMonthYear=function(e){i.setState({date:Object(T.default)(Object(E.default)(i.state.date,S(e)),P(e))},(function(){return i.handleMonthYearChange(i.state.date)}))},i.header=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.state.date,t=dn(e,i.props.locale),n=[];return i.props.showWeekNumbers&&n.push(o.a.createElement("div",{key:"W",className:"react-datepicker__day-name"},i.props.weekLabel||"#")),n.concat([0,1,2,3,4,5,6].map((function(e){var n=Object(u.default)(t,e),r=i.formatWeekday(n,i.props.locale);return o.a.createElement("div",{key:e,className:"react-datepicker__day-name"},r)})))},i.formatWeekday=function(e,t){return i.props.formatWeekDay?function(e,t,n){return t(rn(e,"EEEE",n))}(e,i.props.formatWeekDay,t):i.props.useWeekdaysShort?function(e,t){return rn(e,"EEE",t)}(e,t):function(e,t){return rn(e,"EEEEEE",t)}(e,t)},i.decreaseYear=function(){i.setState({date:Object(O.a)(i.state.date,1)},(function(){return i.handleYearChange(i.state.date)}))},i.renderPreviousButton=function(){if(!i.props.renderCustomHeader){var e=Sn(i.state.date,i.props);if((i.props.forceShowMonthNavigation||i.props.showDisabledMonthNavigation||!e)&&!i.props.showTimeSelectOnly){var t=["react-datepicker__navigation","react-datepicker__navigation--previous"],n=i.decreaseMonth;return i.props.showMonthYearPicker&&(n=i.decreaseYear),e&&i.props.showDisabledMonthNavigation&&(t.push("react-datepicker__navigation--previous--disabled"),n=null),o.a.createElement("button",{type:"button",className:t.join(" "),onClick:n},i.props.showMonthYearPicker?i.props.previousYearButtonLabel:i.props.previousMonthButtonLabel)}}},i.increaseYear=function(){i.setState({date:Object(b.default)(i.state.date,1)},(function(){return i.handleYearChange(i.state.date)}))},i.renderNextButton=function(){if(!i.props.renderCustomHeader){var e=Pn(i.state.date,i.props);if((i.props.forceShowMonthNavigation||i.props.showDisabledMonthNavigation||!e)&&!i.props.showTimeSelectOnly){var t=["react-datepicker__navigation","react-datepicker__navigation--next"];i.props.showTimeSelect&&t.push("react-datepicker__navigation--next--with-time"),i.props.todayButton&&t.push("react-datepicker__navigation--next--with-today-button");var n=i.increaseMonth;return i.props.showMonthYearPicker&&(n=i.increaseYear),e&&i.props.showDisabledMonthNavigation&&(t.push("react-datepicker__navigation--next--disabled"),n=null),o.a.createElement("button",{type:"button",className:t.join(" "),onClick:n},i.props.showMonthYearPicker?i.props.nextYearButtonLabel:i.props.nextMonthButtonLabel)}}},i.renderCurrentMonth=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.state.date,t=["react-datepicker__current-month"];return i.props.showYearDropdown&&t.push("react-datepicker__current-month--hasYearDropdown"),i.props.showMonthDropdown&&t.push("react-datepicker__current-month--hasMonthDropdown"),i.props.showMonthYearDropdown&&t.push("react-datepicker__current-month--hasMonthYearDropdown"),o.a.createElement("div",{className:t.join(" ")},rn(e,i.props.dateFormat,i.props.locale))},i.renderYearDropdown=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(i.props.showYearDropdown&&!e)return o.a.createElement(Mn,{adjustDateOnChange:i.props.adjustDateOnChange,date:i.state.date,onSelect:i.props.onSelect,setOpen:i.props.setOpen,dropdownMode:i.props.dropdownMode,onChange:i.changeYear,minDate:i.props.minDate,maxDate:i.props.maxDate,year:P(i.state.date),scrollableYearDropdown:i.props.scrollableYearDropdown,yearDropdownItemNumber:i.props.yearDropdownItemNumber})},i.renderMonthDropdown=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(i.props.showMonthDropdown&&!e)return o.a.createElement(Nn,{dropdownMode:i.props.dropdownMode,locale:i.props.locale,onChange:i.changeMonth,month:S(i.state.date),useShortMonthInDropdown:i.props.useShortMonthInDropdown})},i.renderMonthYearDropdown=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(i.props.showMonthYearDropdown&&!e)return o.a.createElement(qn,{dropdownMode:i.props.dropdownMode,locale:i.props.locale,dateFormat:i.props.dateFormat,onChange:i.changeMonthYear,minDate:i.props.minDate,maxDate:i.props.maxDate,date:i.state.date,scrollableMonthYearDropdown:i.props.scrollableMonthYearDropdown})},i.renderTodayButton=function(){if(i.props.todayButton&&!i.props.showTimeSelectOnly)return o.a.createElement("div",{className:"react-datepicker__today-button",onClick:function(e){return i.props.onSelect(Object(q.default)(tn()),e)}},i.props.todayButton)},i.renderDefaultHeader=function(e){var t=e.monthDate,n=e.i;return o.a.createElement("div",{className:"react-datepicker__header"},i.renderCurrentMonth(t),o.a.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--"+i.props.dropdownMode,onFocus:i.handleDropdownFocus},i.renderMonthDropdown(0!==n),i.renderMonthYearDropdown(0!==n),i.renderYearDropdown(0!==n)),o.a.createElement("div",{className:"react-datepicker__day-names"},i.header(t)))},i.renderCustomHeader=function(e){var t=e.monthDate;if(0!==e.i)return null;var n=Sn(i.state.date,i.props),r=Pn(i.state.date,i.props);return o.a.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:i.props.onDropdownFocus},i.props.renderCustomHeader(Jt({},i.state,{changeMonth:i.changeMonth,changeYear:i.changeYear,decreaseMonth:i.decreaseMonth,increaseMonth:i.increaseMonth,prevMonthButtonDisabled:n,nextMonthButtonDisabled:r})),o.a.createElement("div",{className:"react-datepicker__day-names"},i.header(t)))},i.renderYearHeader=function(){return o.a.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},P(i.state.date))},i.renderMonths=function(){if(!i.props.showTimeSelectOnly){for(var e=[],t=0;t<i.props.monthsShown;++t){var n=t-i.props.monthSelectedIn,r=Object(h.default)(i.state.date,n),s="month-"+t;e.push(o.a.createElement("div",{key:s,ref:function(e){i.monthContainer=e},className:"react-datepicker__month-container"},i.props.showMonthYearPicker?i.renderYearHeader({monthDate:r,i:t}):i.props.renderCustomHeader?i.renderCustomHeader({monthDate:r,i:t}):i.renderDefaultHeader({monthDate:r,i:t}),o.a.createElement(zn,{onChange:i.changeMonthYear,day:r,dayClassName:i.props.dayClassName,onDayClick:i.handleDayClick,onDayMouseEnter:i.handleDayMouseEnter,onMouseLeave:i.handleMonthMouseLeave,onWeekSelect:i.props.onWeekSelect,orderInDisplay:t,formatWeekNumber:i.props.formatWeekNumber,locale:i.props.locale,minDate:i.props.minDate,maxDate:i.props.maxDate,excludeDates:i.props.excludeDates,highlightDates:i.props.highlightDates,selectingDate:i.state.selectingDate,includeDates:i.props.includeDates,inline:i.props.inline,fixedHeight:i.props.fixedHeight,filterDate:i.props.filterDate,preSelection:i.props.preSelection,selected:i.props.selected,selectsStart:i.props.selectsStart,selectsEnd:i.props.selectsEnd,showWeekNumbers:i.props.showWeekNumbers,startDate:i.props.startDate,endDate:i.props.endDate,peekNextMonth:i.props.peekNextMonth,setOpen:i.props.setOpen,shouldCloseOnSelect:i.props.shouldCloseOnSelect,renderDayContents:i.props.renderDayContents,disabledKeyboardNavigation:i.props.disabledKeyboardNavigation,showMonthYearPicker:i.props.showMonthYearPicker})))}return e}},i.renderTimeSection=function(){if(i.props.showTimeSelect&&(i.state.monthContainer||i.props.showTimeSelectOnly))return o.a.createElement(Gn,{selected:i.props.selected,onChange:i.props.onTimeChange,format:i.props.timeFormat,includeTimes:i.props.includeTimes,intervals:i.props.timeIntervals,minTime:i.props.minTime,maxTime:i.props.maxTime,excludeTimes:i.props.excludeTimes,timeCaption:i.props.timeCaption,todayButton:i.props.todayButton,showMonthDropdown:i.props.showMonthDropdown,showMonthYearDropdown:i.props.showMonthYearDropdown,showYearDropdown:i.props.showYearDropdown,withPortal:i.props.withPortal,monthRef:i.state.monthContainer,injectTimes:i.props.injectTimes,locale:i.props.locale})},i.renderInputTimeSection=function(){var e=new Date(i.props.selected),t=En(e.getHours())+":"+En(e.getMinutes());if(i.props.showTimeInput)return o.a.createElement(Qn,{timeString:t,timeInputLabel:i.props.timeInputLabel,onChange:i.props.onTimeChange})},i.state={date:i.getDateInView(),selectingDate:null,monthContainer:null},i}return Xt(t,e),Kt(t,null,[{key:"defaultProps",get:function(){return{onDropdownFocus:function(){},monthsShown:1,monthSelectedIn:0,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month"}}}]),t.prototype.componentDidMount=function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=void e.setState({monthContainer:e.monthContainer}))},t.prototype.componentDidUpdate=function(e){this.props.preSelection&&!bn(this.props.preSelection,e.preSelection)?this.setState({date:this.props.preSelection}):this.props.openToDate&&!bn(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate})},t.prototype.render=function(){var e=this.props.container||Hn;return o.a.createElement(e,{className:Object(r.default)("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly})},this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.props.children)},t}(o.a.Component),Kn=function(e){function t(){return Yt(this,t),Zt(this,e.apply(this,arguments))}return Xt(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.hidePopper,i=e.popperComponent,s=e.popperModifiers,a=e.popperPlacement,c=e.popperProps,l=e.targetComponent,d=void 0;if(!n){var u=Object(r.default)("react-datepicker-popper",t);d=o.a.createElement(qt,Jt({modifiers:s,placement:a},c),(function(e){var t=e.ref,n=e.style,r=e.placement,s=e.arrowProps;return o.a.createElement("div",Jt({ref:t,style:n},{className:u,"data-placement":r}),o.a.cloneElement(i,{arrowProps:s}))}))}return this.props.popperContainer&&(d=o.a.createElement(this.props.popperContainer,{},d)),o.a.createElement(Tt,null,o.a.createElement(zt,null,(function(e){var t=e.ref;return o.a.createElement("div",{ref:t,className:"react-datepicker-wrapper"},l)})),d)},Kt(t,null,[{key:"defaultProps",get:function(){return{hidePopper:!0,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!0,boundariesElement:"viewport"}},popperProps:{},popperPlacement:"bottom-start"}}}]),t}(o.a.Component),Jn=de(Yn);var Xn=function(e){function t(n){Yt(this,t);var i=Zt(this,e.call(this,n));return i.getPreSelection=function(){return i.props.openToDate?i.props.openToDate:i.props.selectsEnd&&i.props.startDate?i.props.startDate:i.props.selectsStart&&i.props.endDate?i.props.endDate:tn()},i.calcInitialState=function(){var e=i.getPreSelection(),t=Cn(i.props),n=kn(i.props),o=t&&Object(Y.default)(e,t)?t:n&&Object(W.default)(e,n)?n:e;return{open:i.props.startOpen||!1,preventFocus:!1,preSelection:i.props.selected?i.props.selected:o,highlightDates:An(i.props.highlightDates),focused:!1}},i.clearPreventFocusTimeout=function(){i.preventFocusTimeout&&clearTimeout(i.preventFocusTimeout)},i.setFocus=function(){i.input&&i.input.focus&&i.input.focus()},i.setBlur=function(){i.input&&i.input.blur&&i.input.blur(),i.cancelFocusInput()},i.setOpen=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.setState({open:e,preSelection:e&&i.state.open?i.state.preSelection:i.calcInitialState().preSelection,lastPreSelectChange:ei},(function(){e||i.setState((function(e){return{focused:!!t&&e.focused}}),(function(){!t&&i.setBlur(),i.setState({inputValue:null})}))}))},i.inputOk=function(){return Object(s.a)(i.state.preSelection)},i.isCalendarOpen=function(){return void 0===i.props.open?i.state.open&&!i.props.disabled&&!i.props.readOnly:i.props.open},i.handleFocus=function(e){i.state.preventFocus||(i.props.onFocus(e),i.props.preventOpenOnFocus||i.props.readOnly||i.setOpen(!0)),i.setState({focused:!0})},i.cancelFocusInput=function(){clearTimeout(i.inputFocusTimeout),i.inputFocusTimeout=null},i.deferFocusInput=function(){i.cancelFocusInput(),i.inputFocusTimeout=setTimeout((function(){return i.setFocus()}),1)},i.handleDropdownFocus=function(){i.cancelFocusInput()},i.handleBlur=function(e){!i.state.open||i.props.withPortal||i.props.showTimeInput?i.props.onBlur(e):i.deferFocusInput(),i.setState({focused:!1})},i.handleCalendarClickOutside=function(e){i.props.inline||i.setOpen(!1),i.props.onClickOutside(e),i.props.withPortal&&e.preventDefault()},i.handleChange=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[0];if(!i.props.onChangeRaw||(i.props.onChangeRaw.apply(i,t),"function"==typeof o.isDefaultPrevented&&!o.isDefaultPrevented())){i.setState({inputValue:o.target.value,lastPreSelectChange:Zn});var r=nn(o.target.value,i.props.dateFormat,i.props.locale,i.props.strictParsing);!r&&o.target.value||i.setSelected(r,o,!0)}},i.handleSelect=function(e,t,n){i.setState({preventFocus:!0},(function(){return i.preventFocusTimeout=setTimeout((function(){return i.setState({preventFocus:!1})}),50),i.preventFocusTimeout})),i.setSelected(e,t,void 0,n),!i.props.shouldCloseOnSelect||i.props.showTimeSelect?i.setPreSelection(e):i.props.inline||i.setOpen(!1)},i.setSelected=function(e,t,n,o){var r=e;if(null===r||!xn(r,i.props)){if(!mn(i.props.selected,r)||i.props.allowSameDay){if(null!==r){if(i.props.selected){var s=i.props.selected;n&&(s=tn(r)),r=sn(r,{hour:I(s),minute:v(s),second:y(s)})}i.props.inline||i.setState({preSelection:r}),i.props.inline&&i.props.monthsShown>1&&!i.props.inlineFocusSelectedMonth&&i.setState({monthSelectedIn:o})}i.props.onChange(r,t)}i.props.onSelect(r,t),n||i.setState({inputValue:null})}},i.setPreSelection=function(e){var t=void 0!==i.props.minDate,n=void 0!==i.props.maxDate,o=!0;e&&(t&&n?o=jn(e,i.props.minDate,i.props.maxDate):t?o=Object(W.default)(e,i.props.minDate):n&&(o=Object(Y.default)(e,i.props.maxDate))),o&&i.setState({preSelection:e})},i.handleTimeChange=function(e){var t=sn(i.props.selected?i.props.selected:i.getPreSelection(),{hour:I(e),minute:v(e)});i.setState({preSelection:t}),i.props.onChange(t),i.props.shouldCloseOnSelect&&i.setOpen(!1),i.props.showTimeInput&&i.setOpen(!0),i.setState({inputValue:null})},i.onInputClick=function(){i.props.disabled||i.props.readOnly||i.setOpen(!0),i.props.onInputClick()},i.onInputKeyDown=function(e){i.props.onKeyDown(e);var t=e.key;if(i.state.open||i.props.inline||i.props.preventOpenOnFocus){var n=tn(i.state.preSelection);if("Enter"===t)e.preventDefault(),i.inputOk()&&i.state.lastPreSelectChange===ei?(i.handleSelect(n,e),!i.props.shouldCloseOnSelect&&i.setPreSelection(n)):i.setOpen(!1);else if("Escape"===t)e.preventDefault(),i.setOpen(!1),i.inputOk()||i.props.onInputError({code:1,msg:"Date input not valid."});else if("Tab"===t)i.setOpen(!1,!0);else if(!i.props.disabledKeyboardNavigation){var o=void 0;switch(t){case"ArrowLeft":o=Object(m.a)(n,1);break;case"ArrowRight":o=Object(u.default)(n,1);break;case"ArrowUp":o=Object(j.a)(n,1);break;case"ArrowDown":o=Object(p.a)(n,1);break;case"PageUp":o=Object(f.default)(n,1);break;case"PageDown":o=Object(h.default)(n,1);break;case"Home":o=Object(O.a)(n,1);break;case"End":o=Object(b.default)(n,1)}if(!o)return void(i.props.onInputError&&i.props.onInputError({code:1,msg:"Date input not valid."}));e.preventDefault(),i.setState({lastPreSelectChange:ei}),i.props.adjustDateOnChange&&i.setSelected(o),i.setPreSelection(o)}}else"ArrowDown"!==t&&"ArrowUp"!==t||i.onInputClick()},i.onClearClick=function(e){e&&e.preventDefault&&e.preventDefault(),i.props.onChange(null,e),i.setState({inputValue:null})},i.clear=function(){i.onClearClick()},i.renderCalendar=function(){return i.props.inline||i.isCalendarOpen()?o.a.createElement(Jn,{ref:function(e){i.calendar=e},locale:i.props.locale,adjustDateOnChange:i.props.adjustDateOnChange,setOpen:i.setOpen,shouldCloseOnSelect:i.props.shouldCloseOnSelect,dateFormat:i.props.dateFormatCalendar,useWeekdaysShort:i.props.useWeekdaysShort,formatWeekDay:i.props.formatWeekDay,dropdownMode:i.props.dropdownMode,selected:i.props.selected,preSelection:i.state.preSelection,onSelect:i.handleSelect,onWeekSelect:i.props.onWeekSelect,openToDate:i.props.openToDate,minDate:i.props.minDate,maxDate:i.props.maxDate,selectsStart:i.props.selectsStart,selectsEnd:i.props.selectsEnd,startDate:i.props.startDate,endDate:i.props.endDate,excludeDates:i.props.excludeDates,filterDate:i.props.filterDate,onClickOutside:i.handleCalendarClickOutside,formatWeekNumber:i.props.formatWeekNumber,highlightDates:i.state.highlightDates,includeDates:i.props.includeDates,includeTimes:i.props.includeTimes,injectTimes:i.props.injectTimes,inline:i.props.inline,peekNextMonth:i.props.peekNextMonth,showMonthDropdown:i.props.showMonthDropdown,useShortMonthInDropdown:i.props.useShortMonthInDropdown,showMonthYearDropdown:i.props.showMonthYearDropdown,showWeekNumbers:i.props.showWeekNumbers,showYearDropdown:i.props.showYearDropdown,withPortal:i.props.withPortal,forceShowMonthNavigation:i.props.forceShowMonthNavigation,showDisabledMonthNavigation:i.props.showDisabledMonthNavigation,scrollableYearDropdown:i.props.scrollableYearDropdown,scrollableMonthYearDropdown:i.props.scrollableMonthYearDropdown,todayButton:i.props.todayButton,weekLabel:i.props.weekLabel,outsideClickIgnoreClass:"react-datepicker-ignore-onclickoutside",fixedHeight:i.props.fixedHeight,monthsShown:i.props.monthsShown,monthSelectedIn:i.state.monthSelectedIn,onDropdownFocus:i.handleDropdownFocus,onMonthChange:i.props.onMonthChange,onYearChange:i.props.onYearChange,dayClassName:i.props.dayClassName,showTimeSelect:i.props.showTimeSelect,showTimeSelectOnly:i.props.showTimeSelectOnly,onTimeChange:i.handleTimeChange,timeFormat:i.props.timeFormat,timeIntervals:i.props.timeIntervals,minTime:i.props.minTime,maxTime:i.props.maxTime,excludeTimes:i.props.excludeTimes,timeCaption:i.props.timeCaption,className:i.props.calendarClassName,container:i.props.calendarContainer,yearDropdownItemNumber:i.props.yearDropdownItemNumber,previousMonthButtonLabel:i.props.previousMonthButtonLabel,nextMonthButtonLabel:i.props.nextMonthButtonLabel,timeInputLabel:i.props.timeInputLabel,disabledKeyboardNavigation:i.props.disabledKeyboardNavigation,renderCustomHeader:i.props.renderCustomHeader,popperProps:i.props.popperProps,renderDayContents:i.props.renderDayContents,onDayMouseEnter:i.props.onDayMouseEnter,onMonthMouseLeave:i.props.onMonthMouseLeave,showTimeInput:i.props.showTimeInput,showMonthYearPicker:i.props.showMonthYearPicker},i.props.children):null},i.renderDateInput=function(){var e,t,n,s,a,c,l=Object(r.default)(i.props.className,((e={})["react-datepicker-ignore-onclickoutside"]=i.state.open,e)),d=i.props.customInput||o.a.createElement("input",{type:"text"}),u=i.props.customInputRef||"ref",p="string"==typeof i.props.value?i.props.value:"string"==typeof i.state.inputValue?i.state.inputValue:(n=i.props.selected,s=i.props,a=s.dateFormat,c=s.locale,n&&rn(n,Array.isArray(a)?a[0]:a,c)||"");return o.a.cloneElement(d,((t={})[u]=function(e){i.input=e},t.value=p,t.onBlur=i.handleBlur,t.onChange=i.handleChange,t.onClick=i.onInputClick,t.onFocus=i.handleFocus,t.onKeyDown=i.onInputKeyDown,t.id=i.props.id,t.name=i.props.name,t.autoFocus=i.props.autoFocus,t.placeholder=i.props.placeholderText,t.disabled=i.props.disabled,t.autoComplete=i.props.autoComplete,t.className=l,t.title=i.props.title,t.readOnly=i.props.readOnly,t.required=i.props.required,t.tabIndex=i.props.tabIndex,t))},i.renderClearButton=function(){return i.props.isClearable&&null!=i.props.selected?o.a.createElement("button",{type:"button",className:"react-datepicker__close-icon",onClick:i.onClearClick,title:i.props.clearButtonTitle,tabIndex:-1}):null},i.state=i.calcInitialState(),i}return Xt(t,e),Kt(t,null,[{key:"defaultProps",get:function(){return{allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showMonthYearPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next month",timeInputLabel:"Time",renderDayContents:function(e){return e},inlineFocusSelectedMonth:!1}}}]),t.prototype.componentDidUpdate=function(e,t){var n,i;e.inline&&(n=e.selected,i=this.props.selected,n&&i?S(n)!==S(i)||P(n)!==P(i):n!==i)&&this.setPreSelection(this.props.selected),void 0!==this.state.monthSelectedIn&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:An(this.props.highlightDates)}),t.focused||mn(e.selected,this.props.selected)||this.setState({inputValue:null})},t.prototype.componentWillUnmount=function(){this.clearPreventFocusTimeout()},t.prototype.render=function(){var e=this.renderCalendar();return this.props.inline&&!this.props.withPortal?e:this.props.withPortal?o.a.createElement("div",null,this.props.inline?null:o.a.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),this.state.open||this.props.inline?o.a.createElement("div",{className:"react-datepicker__portal"},e):null):o.a.createElement(Kn,{className:this.props.popperClassName,hidePopper:!this.isCalendarOpen(),popperModifiers:this.props.popperModifiers,targetComponent:o.a.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),popperContainer:this.props.popperContainer,popperComponent:e,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps})},t}(o.a.Component),Zn="input",ei="navigate";t.a=Xn},695:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return E}));var i=n(192),o=n(1),r=n(5),s=n(71),a=n(0);let c;var l=Object(r.withConnection)(Object(r.gql)(c||(c=(e=>e)`query ProfilePublicationSearchList($id: ID!, $after: Int = null, $count: Int = 10, $searchKeyword: String = "", $sortBy: String = "newest", $publicationType: String = null, $filter: String = null) {
  account(id: $id) {
    id
    researchItems(first: $count, after: $after, searchKeyword: $searchKeyword, publicationType: $publicationType, sortBy: $sortBy, filter: $filter) @connection {
      nodes {
        id
        ...PublicationNoLinksItemRenderer @embed
        ...PublicationStatsItemRenderer @embed
        __typename
      }
      pageInfo {
        endCursor
        hasNextPage
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o;return{researchItems:null!==(t=null==e||null===(n=e.researchItems)||void 0===n?void 0:n.nodes)&&void 0!==t?t:[],hasNextPage:null==e||null===(i=e.researchItems)||void 0===i||null===(o=i.pageInfo)||void 0===o?void 0:o.hasNextPage}},preloader:s.b})(({researchItems:e,queryStatus:t,loadMore:n,hasNextPage:c,itemRenderer:l})=>{if(!e.length)return Object(a.jsx)(o.Text,{children:"We haven't found a match yet, or there isn't a publication matching your search. Try entering more words to continue your search."});return Object(a.jsxs)(o.Stack,{children:[Object(a.jsx)(o.Stack.Item,{children:Object(a.jsx)(i.default,{awaitMore:c,items:e,itemsRenderer:(e,t)=>Object(a.jsx)(o.Stack,{ref:t,gutter:"none",children:e}),onIntersection:()=>{c&&t!==r.QueryStatus.LOADING&&n(10)},pageSize:10,children:t=>Object(a.jsx)(o.Stack.Item,{children:l(e[t].id)},t)})}),t===r.QueryStatus.LOADING&&Object(a.jsx)(o.Stack.Item,{children:Object(a.jsx)(s.b,{})})]})}),d=n(2),u=n(8),p=n.n(u),h=n(14),b=n(13),m=n(69),j=n(59);n(1167);let f;const O=new p.a({name:"publication-stats-item-renderer"});var g=Object(r.withQuery)(Object(r.gql)(f||(f=(e=>e)`query PublicationStatsItemRenderer($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    statsUrl
    ...PublicationItemTitle @embed
    ...PublicationItemBadges @embed
    ...PublicationItemMetaItems @embed
    ...PublicationItemAuthors @embed
    __typename
  }
  __typename
}
`)))(({publicationId:e,publication:t,experiment:n})=>{var i;const r=n?Object(b.a)(t.statsUrl,Object(h.b)(null==n||null===(i=n.selectPublication)||void 0===i?void 0:i.goal)):t.statsUrl;return Object(a.jsx)("div",Object(d.a)(Object(d.a)({},O()),{},{children:Object(a.jsxs)(o.PublicationItem,{children:[Object(a.jsx)(j.p,{id:e,url:r}),Object(a.jsx)(j.c,{id:e}),Object(a.jsx)(j.e,{id:e}),Object(a.jsx)(j.b,{id:e,context:m.v})]})}))}),x=n(7),y=n(6),v=n(295),I=n(156),_=n(296),w=n(157);let S;var P=Object(x.a)(Object(y.h)(o.PublicationItem.MetaItems),Object(r.withQuery)(Object(r.gql)(S||(S=(e=>e)`query PublicationItemMetaItems($id: ID!) {
  publication(id: $id) {
    id
    ...PublicationItemPublicationDate @embed
    ...PublicationItemMetaItemJournal @embed
    ...PublicationItemMetaItemCitations @embed
    ...PublicationItemMetricReads @embed
    __typename
  }
  __typename
}
`))))(({id:e})=>Object(a.jsxs)(o.PublicationItem.MetaItems,{children:[Object(a.jsx)(w.a,{id:e}),Object(a.jsx)(I.a,{id:e}),Object(a.jsx)(v.a,{id:e}),Object(a.jsx)(_.a,{id:e})]}));let C;var k=Object(r.withQuery)(Object(r.gql)(C||(C=(e=>e)`query PublicationItemNoLinks($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...PublicationItemTitle @embed
    ...PublicationItemBadges @embed
    ...PublicationItemMetaItems @embed
    ...PublicationItemAuthors @embed
    __typename
  }
  __typename
}
`)))(({publicationId:e})=>Object(a.jsxs)(o.PublicationItem,{children:[Object(a.jsx)(j.p,{id:e}),Object(a.jsx)(j.c,{id:e,disableLinks:!0}),Object(a.jsx)(P,{id:e}),Object(a.jsx)(j.b,{id:e,context:m.y,disableLinks:!0,isTooltipEnabled:!1})]}));n(1168);let A;const D=new p.a({name:"publication-no-links-item-renderer"});var E=Object(r.withQuery)(Object(r.gql)(A||(A=(e=>e)`query PublicationNoLinksItemRenderer($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...PublicationItemNoLinks @embed
    __typename
  }
  __typename
}
`)))(({publicationId:e,onClick:t})=>Object(a.jsx)("div",Object(d.a)(Object(d.a)({},D()),{},{onClick:()=>t(e),children:Object(a.jsx)(k,{publicationId:e})})))},699:function(e,t,n){"use strict";var i=n(5);let o;Object(i.gql)(o||(o=(e=>e)`fragment CountryFragment on Country {
  id
  name
  isSanctioned
  isRestricted
  isEU
  __typename
}
`))},70:function(e,t,n){var i=n(113),o=Function.prototype.call;e.exports=i?o.bind(o):function(){return o.apply(o,arguments)}},705:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a}));var i=n(1),o=n(0);var r=({name:e})=>e?Object(o.jsx)(i.EntityItemInfo,{title:"Department",children:Object(o.jsx)(i.EntityItemInfoItem,{children:e})}):null;var s=({description:e})=>e?Object(o.jsx)(i.EntityItemInfo,{title:"Description",children:Object(o.jsx)(i.EntityItemInfoItem,{children:e})}):null;var a=({url:e,imageUrl:t,name:n})=>t?Object(o.jsx)(i.EntityItemImage,{href:e,imageUrl:t,alt:n}):null;var c=({city:e,country:t})=>t?Object(o.jsx)(i.EntityItemInfo,{title:"Location",children:Object(o.jsx)(i.EntityItemInfoItem,{children:[e,t].filter(Boolean).join(", ")})}):null;var l=({name:e,url:t})=>e?Object(o.jsx)(i.EntityItemTitle,{href:t,children:e}):null;var d=({position:e})=>e?Object(o.jsx)(i.EntityItemInfo,{title:"Position",children:Object(o.jsx)(i.EntityItemInfoItem,{children:e})}):null,u=n(191);var p=({startDate:e,endDate:t})=>e?Object(o.jsxs)(i.EntityItemMetaItem,{children:[Object(o.jsx)(u.default,{value:e,utc:!0,month:"long",day:"none"})," - ",t?Object(o.jsx)(u.default,{value:t,utc:!0,month:"long",day:"none"}):"Present"]}):null},706:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(3),s=n.n(r),a=n(4),c=n(9),l=n(197),d=n(7),u=n(6),p=n(224),h=n(91),b=n(0);const m=["onAttentionChange"];t.a=(e,t=(({context:e})=>e),n=(({currentAccountId:e})=>e))=>r=>{class j extends a.Component{render(){const e=this.props,{onAttentionChange:t}=e,n=Object(o.a)(e,m);return Object(b.jsx)(l.a,{onChange:t,children:Object(b.jsx)(r,Object(i.a)({},n))})}}return j.displayName="DecoratedComponent",j.propTypes={onAttentionChange:s.a.func.isRequired},Object(d.a)(Object(u.n)(Object(h.a)(r,"withJsComponentAttentionTracking")),Object(p.a)(i=>({componentIdentifier:e,context:t(i),currentAccountId:n(i),rgKey:new c.a(e,c.b.TYPE_JSCOMPONENT).toString()})))(j)}},707:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(131),l=(n(1101),n(0));const d=new s.a({name:"box-promo"}),u={green:"green",white:"black"};class p extends o.Component{constructor(...e){super(...e),this.state={visible:this.props.visible},this.onClose=()=>{this.hide(),this.props.onClose&&this.props.onClose()}}componentDidUpdate(e,t){const n=this.props.visible,i=t.visible;null!==n&&n!==i&&this.setState({visible:n})}hide(){this.setState({visible:!1})}content(){if(!this.state.visible)return null;const{color:e,size:t,borderColor:n,closeable:o,children:r,elevated:s}=this.props,c={["color-"+e]:!0,["size-"+t]:t,["border-color-"+n]:n,elevated:s},p=Object(l.jsxs)("div",Object(i.a)(Object(i.a)({},d("",c)),{},{children:[o?Object(l.jsx)("div",Object(i.a)(Object(i.a)({},d("close")),{},{children:Object(l.jsx)(a.Button,{type:"button",theme:"bare",color:u[e],onClick:this.onClose,children:Object(l.jsx)(a.Button.Icon,{identifier:"close"})})})):null,r]}));return this.state.visible&&this.props.renderCard?Object(l.jsx)(a.Card,{spacing:"m",children:p}):p}render(){const{transition:e}=this.props;return e?Object(l.jsx)(c.CSSTransitionGroup,Object(i.a)(Object(i.a)({transitionName:e,transitionEnterTimeout:500,transitionLeaveTimeout:500,component:"div"},d("transition-wrapper")),{},{children:this.content()})):this.content()}}p.displayName="Promo",p.defaultProps={color:"green",size:"xl",hasBorder:!1,closeable:!1,visible:!0,onClose:()=>{},renderCard:!0};t.a=p},719:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(24),c=n(1),l=n(6),d=n(654),u=n(478),p=n(307),h=(n(1055),n(0));const b=new s.a({name:"profile-additional-email-dialog"});class m extends o.Component{render(){const{isDialogVisible:e,isFormProcessing:t,isFormSubmitSucceeded:n,isForceConfirmStep:o,handleFormSubmit:r,closeDialog:s}=this.props,a=t?"busy":"",l=n||o;return Object(h.jsx)("div",Object(i.a)(Object(i.a)({},b()),{},{children:Object(h.jsxs)(c.Modal,Object(i.a)(Object(i.a)({},b("modal")),{},{isOpen:e,onRequestClose:s,children:[Object(h.jsx)(c.Modal.Body,Object(i.a)(Object(i.a)({},b("body")),{},{children:Object(h.jsxs)(c.MediaObject,{gutter:"s",verticalAlign:"top",children:[Object(h.jsx)(c.MediaObject.Item,{width:"full",children:l?this.getConfirmationDialogBody():this.getDialogBodyWithEmailForm()}),Object(h.jsx)(c.MediaObject.Item,{children:Object(h.jsx)("img",Object(i.a)({src:d.a},b("mail-image")))})]})})),Object(h.jsx)(c.Modal.Footer,Object(i.a)(Object(i.a)({},b("modal-footer")),{},{children:l?Object(h.jsx)(c.Button,{type:"button",onClick:s,children:"Done"}):Object(h.jsx)(c.Button,{type:"button",onClick:r,status:a,children:"Add"})}))]}))}))}getDialogBodyWithEmailForm(){const{primaryEmail:e}=this.props;return Object(h.jsxs)("div",{children:[Object(h.jsx)(c.Heading,{spacing:"xs",size:"xl",children:"Add an additional email address"}),Object(h.jsx)(c.Text,Object(i.a)(Object(i.a)({spacing:"m"},b("description")),{},{children:"Secure your account by adding another email address."})),Object(h.jsx)(p.d,{primaryEmail:e})]})}getConfirmationDialogBody(){const{formAdditionalEmail:e,confirmedFromOuterScriptEmail:t}=this.props,n=e||t;return Object(h.jsxs)("div",{children:[Object(h.jsxs)(c.Heading,{spacing:"xs",size:"xl",children:["We've sent you a confirmation at: ",n]}),Object(h.jsx)(c.Text,Object(i.a)(Object(i.a)({spacing:"m"},b("description")),{},{children:"Please click on the link to verify your additional address."}))]})}}m.displayName="ProfileAdditionalEmailDialog";t.a=Object(l.b)(e=>{var t,n,i,o,r,s;const a=null!==(t=null===(n=e[p.c])||void 0===n?void 0:n.isProcessing)&&void 0!==t&&t;return{isFormSubmitSucceeded:null!==(i=null===(o=e[p.c])||void 0===o?void 0:o.isSubmitSucceeded)&&void 0!==i&&i,isFormProcessing:a,formAdditionalEmail:null!==(r=null===(s=e[p.c])||void 0===s?void 0:s.additionalEmail)&&void 0!==r&&r}},(e,t)=>({handleFormSubmit:n=>{var i;n.preventDefault(),e(Object(a.submit)(p.c)),null===(i=t.hidePromo)||void 0===i||i.call(t)},closeDialog:()=>{e({type:u.c}),t.closeDialog()}}))(m)},73:function(e,t,n){var i=n(177),o=n(168);e.exports=function(e){return i(o(e))}},730:function(e,t,n){"use strict";var i=n(1),o=n(737),r=n(680),s=n(0);t.a=({title:e})=>Object(s.jsxs)(i.Flex,{gutter:"xs",alignItems:"center",children:[Object(s.jsx)(i.Flex.Item,{children:Object(s.jsx)("img",{src:o.a,alt:"spotlight-branding-logo",width:40,style:{display:"block"}})}),Object(s.jsx)(i.Flex.Item,{children:Object(s.jsx)(i.Text,{color:"blue-800",size:"l",children:Object(s.jsx)("strong",{children:e})})}),Object(s.jsx)(i.Flex.Item,{children:Object(s.jsx)(r.a,{})})]})},735:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(48),s=n(4),a=n(1),c=n(67),l=n(27),d=n(0);const u=["field","className"],p=["children","className"],h=e=>{let{field:{name:t,value:n},className:c}=e,p=Object(o.a)(e,u);const{setFieldValue:h,setFieldTouched:b}=Object(r.g)(),m=Object(s.useRef)(!0);return Object(s.useEffect)(()=>{m.current?m.current=!1:b(t,!0)},[n]),Object(d.jsx)("div",{className:c,children:Object(d.jsx)(a.AdvancedSelect,Object(i.a)(Object(i.a)(Object(i.a)({},Object(l.a)(t)),p),{},{defaultValues:n,onChange:e=>{h(t,e,!1)}}))})};t.a=e=>{let{children:t,className:n}=e,r=Object(o.a)(e,p);return Object(d.jsx)(c.a,Object(i.a)(Object(i.a)({},r),{},{children:({field:e})=>Object(d.jsx)(h,Object(i.a)({field:e,className:n},r))}))}},737:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/43143473193451/images/spotlight/spotlight-branding.svg"},739:function(e,t,n){"use strict";var i=n(2),o=n(16),r=n.n(o),s=n(4),a=n(8),c=n.n(a),l=n(1),d=n(6),u=n(18),p=n(20),h=IMAGES_STATIC_URL+"m/42727621936542/images/icons/svgicons/full-text-circle.svg",b=n(324),m=(n(1173),n(0));const j=new c.a({name:"publications-without-fulltexts-promo"});class f extends s.Component{constructor(...e){super(...e),this.getHeadline=e=>e>1?e+" of your research items don't have full-texts yet":e+" of your research items doesn't have the full-text yet",this.getHeadlineSidebar=e=>`${e} of your research items ${e>1?"are":"is"} missing a full-text`,this.getSubHeadline=e=>e>1?"Add them to your profile to create visibility for more of your work and boost your stats totals.":"Add it to your profile to create visibility for more of your work and boost your stats totals.",this.storeFeaturedPublicationSeen=()=>{const{declineUrl:e,featuredPublication:t}=this.props;Object(u.post)(e,{publicationUid:t.publicationUid}).catch(e=>Object(p.default)(e))},this.askLater=()=>{Object(u.post)(this.props.skipUrl),this.props.onRequestNext?this.props.onRequestNext():this.hidePromoVisually()},this.handleSkipClicked=()=>{this.hidePromoVisually(),Object(u.post)(this.props.skipUrl)}}getPrimaryAction(){const{ctaUrl:e,featuredPublication:t,count:n}=this.props;return Object(m.jsx)(l.Button,{href:e,type:"button",theme:"ghost",size:"s",children:t?"Add full-text":"View research "+r()("item",n)})}hidePromoVisually(){const{featuredPublication:e,onSkip:t}=this.props;e&&this.storeFeaturedPublicationSeen(),t()}getCardVersion(){const{count:e,featuredPublication:t,isCardElevated:n}=this.props;return Object(m.jsxs)(l.Card,{spacing:"xl",elevation:n?"1-above":"none",className:"publications-without-fulltexts",role:"complementary","aria-labelledby":"fulltext-promo-heading",children:[Object(m.jsx)(l.Card.Action,{children:Object(m.jsx)(l.Button,{onClick:this.handleSkipClicked,theme:"bare",color:"black",children:Object(m.jsx)(l.Icon,{identifier:"close"})})}),Object(m.jsxs)(l.Card.Body,{children:[t?Object(m.jsxs)("div",Object(i.a)(Object(i.a)({},j("publication")),{},{children:[Object(m.jsx)(l.Heading,{size:"xl",spacing:"m",id:"fulltext-promo-heading",children:`Your recent ${t.type.toLowerCase()} doesn’t have the full-text yet`}),Object(m.jsx)(l.Text,{size:"m",spacing:"m",children:"Add the full-text of your recent life science work so that others can read and cite it."}),Object(m.jsx)(l.Card,{spacing:"s",elevation:"none",children:Object(m.jsx)(b.a,Object(i.a)({},t))})]})):Object(m.jsxs)(l.Stack,{children:[Object(m.jsx)(l.Stack.Item,{children:Object(m.jsx)(l.Heading,{size:"xl",spacing:"xxs",children:this.getHeadlineSidebar(e)})}),Object(m.jsx)(l.Stack.Item,{children:Object(m.jsxs)(l.Flex,{children:[Object(m.jsx)(l.Flex.Item,{children:Object(m.jsx)(l.Text,{size:"m",spacing:"m",children:"Add full-texts to help increase the visibility of your work."})}),Object(m.jsx)(l.Flex.Item,{children:Object(m.jsx)("img",{src:h,role:"presentation",alt:"Icon"})})]})})]}),Object(m.jsx)("div",Object(i.a)(Object(i.a)({},j("fulltext_cta")),{},{children:this.getPrimaryAction()}))]})]})}getFlatVersion(){const{count:e,isAskMeLaterLinkVisible:t,featuredPublication:n}=this.props;return Object(m.jsxs)("div",Object(i.a)(Object(i.a)({},j()),{},{children:[Object(m.jsx)("div",Object(i.a)(Object(i.a)({},j("content")),{},{children:n?Object(m.jsxs)("div",Object(i.a)(Object(i.a)({},j("publication")),{},{children:[Object(m.jsxs)(l.Heading,{size:"xl",spacing:"m",children:["Your recent ",n.type.toLowerCase()," doesn’t have the full-text yet"]}),Object(m.jsx)(l.Text,{size:"m",spacing:"m",children:"Add the full-text of your recent life science work so that others can read and cite it."}),Object(m.jsx)(l.Card,{spacing:"s",elevation:"none",children:Object(m.jsx)(b.a,Object(i.a)({},n))})]})):Object(m.jsxs)("div",{children:[Object(m.jsx)(l.Text,Object(i.a)(Object(i.a)({size:"l",spacing:"xs"},j("headline")),{},{children:this.getHeadline(e)})),Object(m.jsx)(l.Text,{size:"m",children:this.getSubHeadline(e)})]})})),Object(m.jsx)("div",Object(i.a)(Object(i.a)({},j("footer")),{},{children:Object(m.jsxs)(l.ButtonGroup,{children:[this.getPrimaryAction(),t&&Object(m.jsx)(l.Button,{onClick:this.askLater,theme:"bare",type:"button",children:"Ask me later"})]})}))]}))}render(){return this.props.isCardDesign?this.getCardVersion():this.getFlatVersion()}}f.displayName="PublicationsWithoutFulltextsPromo",f.defaultProps={isCardDesign:!1};t.a=Object(d.b)()(f)},762:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=e=>e.projectsShare.get("recommendAlert")},763:function(e,t,n){"use strict";(function(e){var i=n(253),o=n.n(i),r=n(4),s=n(47),a=n(9),c=n(1),l=n(7),d=n(6),u=n(11),p=n(655),h=n(15),b=n(20),m=n(851),j=(n(984),n(762)),f=n(710),O=n(852),g=n(0);class x extends r.Component{constructor(...e){super(...e),this.handleNotificationClick=()=>{this.openDialog("notification"),this.pullRecommendAlert()}}openDialog(){const{projectId:t,context:i}=this.props,o=new a.a(t,a.b.TYPE_PROJECT).toString();this.props.dispatch(Object(h.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:o,context:i},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))}pullRecommendAlert(){let e;for(this.props.dispatch(Object(p.e)());e=this.UIDs.shift();)this.props.dispatch(Object(u.pullAlert)(e));this.UIDs=null}pushRecommendAlert(e){const{startExperimentUrl:t,dialogViewId:n}=this.props;this.UIDs=e.UIDs.slice(),Object(m.a)(t,n,e.context||f.d).then(t=>{t&&(this.UIDs.push(o()()),this.props.dispatch(Object(u.pushAlert)(()=>Object(g.jsx)(c.Alert,{title:e.title||"Would you like to share this project with someone you know?",children:Object(g.jsx)(c.ButtonGroup,{children:Object(g.jsx)(c.Button,{type:"button",theme:"inverted",onClick:this.handleNotificationClick,children:"Yes"})})}),this.UIDs[1])))}).catch(b.default)}componentDidUpdate(e){const{recommendAlert:t}=this.props;t.shown!==e.recommendAlert.shown&&t.shown&&this.pushRecommendAlert(t)}render(){return null}}x.displayName="ProjectShare";const y=Object(l.a)(Object(d.b)(()=>Object(s.b)({recommendAlert:j.a})),Object(d.e)(["recommendAlert"]))(x);y.Button=O.a,t.a=y}).call(this,n(58)(e))},768:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(5),l=n(306),d=n(7),u=n(6),p=n(11),h=n(18),b=n(14),m=n(20),j=n(629),f=(n(1244),n(0));let O;const g=new s.a({name:"profile-highlights-stats-promo-author-claim-new"});class x extends o.Component{constructor(...e){super(...e),this.handleClose=()=>{Object(h.post)("profile.ProfileHighlightsStatsPromoAuthorClaimNew.hidePromo.html").catch(e=>{Object(m.default)(e),Object(p.pushAlert)(Object(f.jsx)(l.a,{error:e}))}),Object(b.a)(this.props.closeGoal),this.props.onClose()}}render(){const{acceptUrl:e,declineUrl:t,isSmallDesign:n,publicationId:o}=this.props;return Object(f.jsx)("div",Object(i.a)(Object(i.a)({},g()),{},{children:Object(f.jsxs)(a.Card,{spacing:n?"s":"m",role:"complementary","aria-labelledby":"profile-author-claim-promo-heading",children:[Object(f.jsx)(a.Card.Action,{children:Object(f.jsx)(a.Button,{onClick:this.handleClose,theme:"bare",color:"black",children:Object(f.jsx)(a.Icon,{identifier:"close"})})}),Object(f.jsxs)(a.Card.Body,{children:[Object(f.jsx)(a.Text,{size:n?"m":"xl",spacing:n?"xs":"m",id:"profile-author-claim-promo-heading",children:n?Object(f.jsx)("strong",{children:"Is this your publication?"}):"Is this your publication?"}),Object(f.jsxs)(a.Stack,{gutter:"m",children:[Object(f.jsx)(a.Stack.Item,{children:n?Object(f.jsx)("div",Object(i.a)(Object(i.a)({},g("small-publication")),{},{children:Object(f.jsx)(j.a,{publicationId:o})})):Object(f.jsx)(j.a,{publicationId:o})}),Object(f.jsx)(a.Stack.Item,{children:Object(f.jsxs)(a.ButtonGroup,{wrap:!0,children:[Object(f.jsx)(a.Button,{theme:"ghost",type:"button",size:n?"xs":"s",href:e,children:"I am the author"}),Object(f.jsx)(a.Button,{type:"button",theme:"bare",size:n?"xs":"s",href:t,children:"This isn't me"})]})})]})]})]})}))}}x.displayName="ProfileHighlightsStatsPromoAuthorClaimNew",t.a=Object(d.a)(Object(u.b)(),Object(c.withQuery)(Object(c.gql)(O||(O=(e=>e)`query ProfileHighlightsStatsPromoAuthorClaimNew($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...PublicationItemPromo @embed
    __typename
  }
  __typename
}
`))))(x)},772:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(12),s=n(1),a=n(15),c=n(14),l=n(20),d=n(13),u=n(50),p=n(339),h=n(0);class b extends o.Component{constructor(...e){super(...e),this.handleClick=()=>{const{dispatch:e,context:t,questionPostCreationChannelExperiment:n,ctaClickedGoal:i}=this.props;e(Object(a.mountModal)(()=>Object(h.jsx)(p.a,{id:"create-question",isOpen:!0,context:t,postType:u.b,onFinishPromise:this.handleFinish,additionalRequestParameters:n?Object(c.b)(n.goalSubmit):{},onReject:this.onReject}))),n&&Object(c.a)(n.goalModalSeen),i&&Object(c.a)(i)},this.handleFinish=({id:e,url:t})=>{const{onFinishPromise:n,goalAskQuestionCreated:i,milestoneAskQuestionDialogClickAsk:o}=this.props;return this.props.dispatch(Object(a.unmountModal)()),o&&Object(c.a)(o),n?Promise.resolve(n({id:e,url:t})).catch(l.default):(i?Object(d.c)(Object(d.a)(t,Object(c.b)(i))):Object(d.c)(t),null)},this.onReject=()=>{const{milestoneAskQuestionDialogClickCancel:e}=this.props;e&&Object(c.a)(e)}}render(){const{buttonProps:e}=this.props;return Object(h.jsx)("div",{children:Object(h.jsx)(s.Button,Object(i.a)(Object(i.a)({},e),{},{type:"submit",onClick:this.handleClick,children:Object(h.jsx)(s.Button.Label,{children:"Ask a question"})}))})}}b.displayName="TopicPostAskQuestionButton",t.a=Object(r.connect)()(b)},781:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={HOME_FEED:"HOME_FEED",PROFILE_STATS:"PROFILE_STATS",PROFILE_OVERVIEW:"PROFILE_OVERVIEW",PROFILE_STATS_REPORT:"PROFILE_STATS_REPORT",HOME_FEED_RIGHT_COLUMN:"HOME_FEED_RIGHT_COLUMN",PROFILE_STATS_RESEARCH_INTEREST:"PROFILE_STATS_RESEARCH_INTEREST",PROFILE_RESEARCH_TAB:"PROFILE_RESEARCH_TAB",RESEARCH_DETAIL_OVERVIEW_TAB:"RESEARCH_DETAIL_OVERVIEW_TAB",HOME_FEED_CAROUSEL:"HOME_FEED_CAROUSEL"}},787:function(e,t,n){"use strict";var i=n(3),o=n.n(i);const r=o.a.shape({accountId:o.a.number,authorUid:o.a.number,name:o.a.string});o.a.shape({id:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string,collaborators:o.a.arrayOf(r).isRequired,ownerAccountIds:o.a.arrayOf(o.a.number).isRequired,projectURL:o.a.string.isRequired,startDate:o.a.string,endDate:o.a.string}),o.a.shape({startTyping:o.a.string.isRequired}),o.a.shape({imageAlt:o.a.string,imageUrl:o.a.string,labelPrimary:o.a.string,labelPrimaryUrl:o.a.string,labelSecondary:o.a.string,labelSecondaryUrl:o.a.string})},793:function(e,t,n){var i=n(982)("map",n(1333));i.placeholder=n(961),e.exports=i},796:function(e,t,n){var i=n(1212),o=n(1001);e.exports=function(e,t){return o(e||[],t||[],i)}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(145),o=n.n(i),r=n(18),s=n(300);let a,c,l=e=>e;function d(e,t,n){return Object(r.default)("api/projects"+Object(s.a)(a||(a=l`/${0}/claimCandidate`),e),{method:"POST",body:{viewIds:t,context:n}}).then(o()("result"))}function u(e,t,n){return Object(r.default)("api/projects"+Object(s.a)(c||(c=l`/${0}/rejectCandidate`),e),{method:"POST",body:{viewIds:t,context:n}}).then(o()("result"))}},81:function(e,t,n){var i=n(889);e.exports=function(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},82:function(e,t,n){"use strict";var i=n(2),o=n(10),r=n(4),s=n.n(r),a=n(1),c=n(8);const l="SocialActions";new(n.n(c).a)({name:"social-actions"});var d=n(0);const u=["children","icon"],p=Object(r.forwardRef)((e,t)=>{let{children:n,icon:r}=e,c=Object(o.a)(e,u);return s.a.Children.count(n)?Object(d.jsxs)(a.Button,Object(i.a)(Object(i.a)({color:"black",theme:"bare",type:"button"},c),{},{ref:t,children:[r&&Object(d.jsx)(a.Button.Icon,{identifier:r}),Object(d.jsx)(a.Button.Label,{children:n})]})):null});p.displayName=l+".Action";var h=p;const b=["children","grow"],m=Object(r.forwardRef)((e,t)=>{let{children:n,grow:r}=e,c=Object(o.a)(e,b);return s.a.Children.count(n)?Object(d.jsx)(a.Flex.Item,Object(i.a)(Object(i.a)({grow:r},c),{},{ref:t,children:Object(d.jsx)(a.ButtonGroup,{children:n})})):null});m.displayName=l+".Column";var j=m;const f=["children"],O=Object(r.forwardRef)((e,t)=>{let{children:n}=e,r=Object(o.a)(e,f);const c=s.a.Children.toArray(n).filter(s.a.isValidElement).map((e,t)=>{const n=e;return n.type!==j?Object(d.jsx)(j,{children:n},"key-"+t):n});return Object(d.jsx)(a.Flex,Object(i.a)(Object(i.a)({wrap:"wrap"},r),{},{ref:t,children:c}))});O.displayName=l,O.Action=h,O.Action.displayName=l+".Action",O.Column=j,O.Column.displayName=l+".Column";var g=O;t.a=g},85:function(e,t,n){var i=n(31),o=n(52),r=n(397),s=n(175);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(i(n)&&r(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(e){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},851:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(18);n(573);function o(e,t,n){return Object(i.default)(e,{method:"POST",body:{viewId:t,context:n}}).catch(r)}function r(e){0}},852:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(9),s=n(1),a=n(6),c=n(15),l=n(29),d=n(14),u=n(0);class p extends o.Component{constructor(...t){super(...t),this.openDialog=()=>{const{projectId:t,context:i}=this.props,o=new r.a(t,r.b.TYPE_PROJECT).toString();this.props.dispatch(Object(c.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:o,context:i},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1)),this.props.recommendGoal&&Object(d.a)(this.props.recommendGoal)}}render(){const{buttonProps:e,showSuffix:t,children:n,renderAs:o}=this.props,r=`${n||"Share"}${t?" project":""}`;return Object(u.jsx)(o,Object(i.a)(Object(i.a)({onClick:Object(l.c)(this.openDialog,this.props.onClick)},e),{},{type:"button",children:r}))}}p.displayName="ShareButton",p.defaultProps={renderAs:s.Button,buttonProps:{}},t.a=Object(a.b)()(p)}).call(this,n(58)(e))},870:function(e,t,n){"use strict";t.a=()=>"js-id-"+Math.floor(1e5*Math.random())},877:function(e,t,n){"use strict";var i=n(2),o=n(23),r=n(200),s=n.n(r),a=n(34),c=n.n(a),l=n(16),d=n.n(l),u=n(1),p=(n(787),n(6)),h=n(681),b=n(763),m=n(0);const j=({url:e,projectId:t,context:n,iepl:i,isLoggedOut:o,isCollaborator:r,addUpdateUrl:s,showShareButton:a,viewId:c,showSocialBar:l})=>{let d,p;return o||l||(d=Object(m.jsx)(h.a,{projectId:t,context:n,useHover:!1,theme:"bare",extraParams:i})),r&&(p=Object(m.jsx)(u.EntityItemAction,{priority:"tertiary",href:s,children:"Add update"},"addUpdate")),Object(m.jsxs)(u.EntityItemActions,{children:[Object(m.jsx)(u.EntityItemAction,{priority:"tertiary",href:e,children:"View"}),d,p,!l&&a&&Object(m.jsx)(b.a.Button,{projectId:t,context:n,dialogViewId:c,buttonProps:{theme:"bare"}},"share")]})};j.defaultProps={isCollaborator:!1};var f=Object(p.h)(u.EntityItemActions)(j),O=n(896);var g=({imageUrl:e,imageAlt:t,labelPrimaryUrl:n,labelPrimary:i,labelSecondaryUrl:o,labelSecondary:r})=>Object(m.jsxs)(u.Qualifier,{children:[e&&Object(m.jsx)(u.Qualifier.Image,{alt:t,src:e}),(i||r)&&Object(m.jsxs)(u.Qualifier.Labels,{children:[i&&Object(m.jsx)(u.Qualifier.Label,{children:Object(m.jsx)(u.Link,{theme:"bare",href:n,children:i})}),r&&Object(m.jsx)(u.Qualifier.Label,{children:Object(m.jsx)(u.Link,{theme:"bare",href:o,children:r})})]})]}),x=n(897);const y=({className:e,projectId:t,title:n,description:r,url:a,updateCount:l,followerCount:p,readCount:h,context:b,metaItems:j,status:y,actions:v,collaborators:I,qualifier:_,ieplForFollowAction:w,isLoggedOut:S,isCollaborator:P,addUpdateUrl:C,showShareButton:k,viewId:A,clampTitle:D,clampDescription:E,showSocialBar:T,showListSocialBar:F,gtmClassName:M})=>{const R=y?s()(y+" project"):"Project",N="active"!==y&&y?"inactive":"active",L=Object(o.default)(e,M),B=Object(m.jsx)("div",{className:L,children:Object(m.jsxs)(u.EntityItem,{status:N,children:[_&&Object(m.jsx)(g,Object(i.a)({},_)),Object(m.jsx)(u.EntityItemTitle,{href:a,clamp:D?"3":"none",children:n}),Object(m.jsx)(u.EntityItemBadges,{children:Object(m.jsx)(u.EntityItemBadge,{children:R})}),j&&Object(m.jsx)(u.EntityItemMetaItems,{children:j.map((e,t)=>Object(m.jsx)(u.EntityItemMetaItem,{children:e},t))}),r&&Object(m.jsx)(u.EntityItemDescription,{clamp:E?"3":"none",children:r}),F?null:v||Object(m.jsx)(f,{url:a,projectId:t,context:b,iepl:w,isLoggedOut:S,isCollaborator:P,addUpdateUrl:C,showShareButton:k,viewId:A,showSocialBar:T}),I,(h>0||l>0||p>0)&&Object(m.jsxs)(u.EntityItemMetrics,{children:[h>0&&Object(m.jsx)(u.EntityItemMetric,{href:a,children:`${c()(h).format("0,0")} ${d()("Read",h)}`}),l>0&&Object(m.jsx)(u.EntityItemMetric,{href:a,children:`${c()(l).format("0,0")} ${d()("Update",l)}`}),p>0&&Object(m.jsx)(u.EntityItemMetric,{href:a,children:`${c()(p).format("0,0")} ${d()("Follower",p)}`})]})]})});if(T||F){const e=T?x.a:O.a,n=T?"xl":"s";return Object(m.jsxs)(u.Stack,{gutter:n,showDivider:T,children:[Object(m.jsx)(u.Stack.Item,{children:B}),Object(m.jsx)(u.Stack.Item,{children:Object(m.jsx)(e,{projectId:t,context:b,iepl:w,isCollaborator:P,viewId:A,projectUrl:a,ignoreFollowIsVisible:!0})})]})}return B};y.defaultProps={clampTitle:!0,clampDescription:!0};t.a=y},888:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,i)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},889:function(e,t,n){var i=n(687).default,o=n(890);e.exports=function(e){var t=o(e,"string");return"symbol"===i(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},890:function(e,t,n){var i=n(687).default;e.exports=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},891:function(e,t,n){"use strict";t.__esModule=!0;var i=n(4),o=(s(i),s(n(3))),r=s(n(892));s(n(616));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,i){e=n,t.forEach((function(t){return t(e,i)}))}}}t.default=function(e,t){var n,s,u="__create-react-context-"+(0,r.default)()+"__",p=function(e){function n(){var t,i;a(this,n);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=i=c(this,e.call.apply(e,[this].concat(r))),i.emitter=d(i.props.value),c(i,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,i=e.value,o=void 0;((r=n)===(s=i)?0!==r||1/r==1/s:r!=r&&s!=s)?o=0:(o="function"==typeof t?t(n,i):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,s},n.prototype.render=function(){return this.props.children},n}(i.Component);p.childContextTypes=((n={})[u]=o.default.object.isRequired,n);var h=function(t){function n(){var e,i;a(this,n);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=i=c(this,t.call.apply(t,[this].concat(r))),i.state={value:i.getValue()},i.onUpdate=function(e,t){0!=((0|i.observedBits)&t)&&i.setState({value:i.getValue()})},c(i,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[u]?this.context[u].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(i.Component);return h.contextTypes=((s={})[u]=o.default.object,s),{Provider:p,Consumer:h}},e.exports=t.default},892:function(e,t,n){"use strict";var i="__global_unique_id__";e.exports=function(){return global[i]=(global[i]||0)+1}},893:function(e,t,n){},894:function(e,t,n){},896:function(e,t,n){"use strict";(function(e){var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(9),c=n(1),l=n(7),d=n(6),u=n(15),p=n(515),h=n(0);const b=new s.a("social-bar");class m extends o.Component{constructor(...t){super(...t),this.openShareDialog=()=>{this.props.dispatch(Object(u.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:new a.a(this.props.projectId,a.b.TYPE_PROJECT).toString(),context:this.props.context},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))}}getPrimary(){const{projectUrl:e}=this.props;return Object(h.jsx)(c.ButtonGroup,{children:Object(h.jsx)(c.Button,{type:"button",theme:"ghost",size:"s",href:e,children:"View"})})}getActions(){const{isCollaborator:e,isFollowing:t,follow:n,unfollow:i}=this.props;return Object(h.jsxs)(c.ButtonGroup,{children:[!e&&Object(h.jsx)(c.Button,{type:"button",theme:"bare",color:"black",onClick:t?i:n,children:t?"Following":"Follow"}),Object(h.jsx)(c.Button,{type:"button",theme:"bare",color:"black",onClick:this.openShareDialog,children:"Share"})]})}render(){return this.props.isMobile?Object(h.jsxs)(c.Stack,Object(i.a)(Object(i.a)({gutter:"s"},b()),{},{children:[Object(h.jsx)(c.Stack.Item,{children:this.getActions()}),Object(h.jsx)(c.Stack.Item,{children:this.getPrimary()})]})):Object(h.jsxs)(c.Flex,Object(i.a)(Object(i.a)({},b()),{},{children:[Object(h.jsx)(c.Flex.Item,{grow:!0,alignSelf:"center",children:this.getPrimary()}),Object(h.jsx)(c.Flex.Item,{alignSelf:"center",children:this.getActions()})]}))}}m.displayName="ProjectItemSocialBar",t.a=Object(l.a)(Object(d.b)(),Object(p.a)())(Object(d.m)(m))}).call(this,n(58)(e))},897:function(e,t,n){"use strict";(function(e){var i=n(4),o=n(9),r=n(82),s=n(7),a=n(6),c=n(15),l=n(515),d=n(0);class u extends i.Component{constructor(...t){super(...t),this.openShareDialog=()=>{this.props.dispatch(Object(c.mountAsyncModal)("application.UniversalShareDialog.html",{rgKey:new o.a(this.props.projectId,o.b.TYPE_PROJECT).toString(),context:this.props.context},void 0,()=>Promise.all([n.e(0),n.e(41)]).then(n.bind(null,129)),e.hot&&!1))}}render(){const{isCollaborator:e,isFollowing:t,follow:n,unfollow:i}=this.props;return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(r.a.Column,{grow:!1,children:!e&&Object(d.jsx)(r.a.Action,{icon:t?"bookmark-fill":"bookmark",onClick:t?i:n,children:t?"Following":"Follow"})}),Object(d.jsx)(r.a.Column,{children:Object(d.jsx)(r.a.Action,{icon:"arrow-corner-top-right",onClick:this.openShareDialog,children:"Share"})})]})}}u.displayName="ProjectItemSocialBar",t.a=Object(s.a)(Object(a.b)(),Object(l.a)())(Object(a.m)(u))}).call(this,n(58)(e))},932:function(e,t,n){},933:function(e,t,n){},938:function(e,t,n){"use strict";var i=n(5);let o;Object(i.gql)(o||(o=(e=>e)`fragment ProfileAcademicFragment on Account {
  id
  profile {
    scientificSocietyMemberships
    orcid
    __typename
  }
  __typename
}
`))},939:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(297),r=n.n(o),s=n(4),a=n(197),c=n(6),l=n(118),d=n(129),u=n(1),p=n(5),h=n(7),b=n(20),m=n(13);let j,f=e=>e;function O(e){return{mutation:Object(p.gql)(j||(j=f`mutation DismissHomeFeedRecommendationsCleanUpPromo($id: ID!) {
  dismissHomeFeedRecommendationsCleanUpPromo(id: $id) {
    id
    flags {
      isHomeFeedRecommendationsCleanUpPromoVisible
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e},optimisticResponse:{dismissHomeFeedRecommendationsCleanUpPromo:{__typename:"Account",id:e,flags:{isHomeFeedRecommendationsCleanUpPromoVisible:!1}}}}}let g,x=e=>e;var y=n(0);let v;var I=Object(h.a)(Object(c.b)(),Object(p.withQuery)(Object(p.gql)(v||(v=(e=>e)`query HomeFeedCleanUpPromo($accountId: ID!) {
  account(id: $accountId) {
    id
    flags {
      isHomeFeedRecommendationsCleanUpPromoVisible
      hasSeenHomeFeedRecommendationsCleanUpPromo
      __typename
    }
    isHomeFeedCleanUpPromoBlogLinkEnabled: isFeatureFlagActive(featureName: "homeFeedCleanUpPromoBlogLink")
    __typename
  }
  urlGenerator {
    coauthorsBrowseUrl
    blogHomeFeedEmailUpdateUrl
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e,urlGenerator:t})=>{var n,i;return{isHomeFeedRecommendationsCleanUpPromoVisible:null==e||null===(n=e.flags)||void 0===n?void 0:n.isHomeFeedRecommendationsCleanUpPromoVisible,hasSeenHomeFeedRecommendationsCleanUpPromo:null==e||null===(i=e.flags)||void 0===i?void 0:i.hasSeenHomeFeedRecommendationsCleanUpPromo,coauthorsBrowseUrl:null==t?void 0:t.coauthorsBrowseUrl,blogHomeFeedEmailUpdateUrl:null!=e&&e.isHomeFeedCleanUpPromoBlogLinkEnabled?null==t?void 0:t.blogHomeFeedEmailUpdateUrl:null}}}))(({mutate:e,accountId:t,isHomeFeedRecommendationsCleanUpPromoVisible:n,hasSeenHomeFeedRecommendationsCleanUpPromo:i,coauthorsBrowseUrl:o,blogHomeFeedEmailUpdateUrl:r})=>{Object(s.useEffect)(()=>{var o;!i&&n&&e((o=t,{mutation:Object(p.gql)(g||(g=x`mutation SetHomeFeedRecommendationsCleanUpPromoSeen($id: ID!) {
  setHomeFeedRecommendationsCleanUpPromoSeen(id: $id) {
    id
    flags {
      hasSeenHomeFeedRecommendationsCleanUpPromo
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:o},optimisticResponse:{setHomeFeedRecommendationsCleanUpPromoSeen:{__typename:"Account",id:o,flags:{hasSeenHomeFeedRecommendationsCleanUpPromo:!1}}}})).catch(b.default)},[]);return n?Object(y.jsxs)(u.Promo,{variant:"m",theme:"simple",onCloseRequest:()=>{e(O(t)).catch(b.default)},children:[Object(y.jsx)(u.Promo.Badge,{children:"New"}),Object(y.jsx)(u.Promo.Title,{spacing:"xs",children:"Follow your co-authors to keep seeing their updates"}),Object(y.jsx)(u.Promo.Description,{children:Object(y.jsxs)(u.Stack,{gutter:"s",children:[Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Text,{size:"l",children:"You'll no longer automatically see updates from your co-authors in your home feed. Follow them to stay up to date on their work."})}),r&&Object(y.jsx)(u.Stack.Item,{children:Object(y.jsxs)(u.Text,{size:"l",children:["Read our"," ",Object(y.jsx)(u.Link,{href:r,target:"_blank",rel:"noopener",children:"blog post"})," ","to learn more."]})})]})}),Object(y.jsx)(u.Promo.Actions,{children:Object(y.jsx)(u.Promo.Action,{onClick:()=>{e(O(t)).then(()=>Object(m.c)(o)).catch(e=>{Object(b.default)(e),Object(m.c)(o)})},children:"View co-authors"})})]}):null}),_=n(43);let w,S=e=>e;function P(e){return{mutation:Object(p.gql)(w||(w=S`mutation DismissHomeFeedProjectsRemovalNoticePromo($id: ID!) {
  dismissHomeFeedProjectsRemovalNoticePromo(id: $id) {
    id
    flags {
      isHomeFeedProjectsRemovalNoticePromoVisible
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e},optimisticResponse:{dismissHomeFeedProjectsRemovalNoticePromo:{__typename:"Account",id:e,flags:{isHomeFeedProjectsRemovalNoticePromoVisible:!1}}}}}let C;var k=Object(h.a)(Object(c.b)(),Object(p.withQuery)(Object(p.gql)(C||(C=(e=>e)`query HomeFeedProjectsRemovalNoticePromo($accountId: ID!) {
  account(id: $accountId) {
    id
    flags {
      isHomeFeedProjectsRemovalNoticePromoVisible
      __typename
    }
    __typename
  }
  urlGenerator {
    projectsRemovalNoticeUrl
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e,urlGenerator:t})=>{var n;return{isHomeFeedProjectsRemovalNoticePromoVisible:null==e||null===(n=e.flags)||void 0===n?void 0:n.isHomeFeedProjectsRemovalNoticePromoVisible,projectsRemovalNoticeUrl:null==t?void 0:t.projectsRemovalNoticeUrl}}}))(({mutate:e,accountId:t,isHomeFeedProjectsRemovalNoticePromoVisible:n,projectsRemovalNoticeUrl:i})=>n?Object(y.jsxs)(u.Promo,{variant:"m",theme:"simple",onCloseRequest:()=>{e(P(t)).catch(b.default)},children:[Object(y.jsx)(u.Promo.Title,{spacing:"xs",children:Object(y.jsx)(u.Text,{size:"l",children:Object(y.jsx)("strong",{children:Object(_.a)(()=>["We're retiring Projects on March 31, 2023"])})})}),Object(y.jsx)(u.Promo.Description,{children:Object(y.jsxs)(u.Stack,{gutter:"s",children:[Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Text,{children:Object(_.a)(()=>["After much consideration, we've decided to discontinue Projects. You can no longer create new projects, and we’ll remove all current projects at the end of March."])})}),Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Text,{children:Object(_.a)(e=>[e.feed__promo__projects_retirement__body1__all_research," which was added to projects — such as preprints, experimental findings, and final papers — ",e.feed__promo__projects_retirement__body1__on_profile," and won’t be removed from ResearchGate."],{feed__promo__projects_retirement__body1__all_research:Object(y.jsx)("b",{children:Object(_.a)(()=>["All of your research"])}),feed__promo__projects_retirement__body1__on_profile:Object(y.jsx)("b",{children:Object(_.a)(()=>["will stay on your profile"])})})})}),Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Text,{children:Object(_.a)(e=>["Read our blog to find out ",e.feed__promo__projects_retirement__body__means_for_you," and what we’re working on next."],{feed__promo__projects_retirement__body__means_for_you:Object(y.jsx)("b",{children:Object(_.a)(()=>["what this means for you"])})})})})]})}),Object(y.jsx)(u.Promo.Actions,{children:Object(y.jsx)(u.Promo.Action,{onClick:()=>{e(P(t)).then(()=>Object(m.f)(i)).catch(e=>{Object(b.default)(e),Object(m.f)(i)})},children:Object(_.a)(()=>["Read the blog post"])})}),Object(y.jsx)(u.Promo.Badge,{children:Object(_.a)(()=>["News"])})]}):null),A=n(1035),D=n(8),E=n.n(D),T=n(18),F=IMAGES_STATIC_URL+"m/427577062382304/images/home/home-promo-bg.svg",M=IMAGES_STATIC_URL+"m/43314901424416/images/home/telescope.svg";const R=new E.a("home-feed-promo");class N extends s.Component{constructor(e){super(e),this.state={promoVisible:!0},this.onHidePromo=this.onHidePromo.bind(this)}onHidePromo(){this.setState({promoVisible:!1}),Object(T.default)(this.props.hidePromoUrl,{method:"POST"})}render(){return this.state.promoVisible?Object(y.jsxs)(u.Card,Object(i.a)(Object(i.a)({spacing:"none"},R()),{},{role:"complementary","aria-labelledby":"feed-welcome-promo-heading",children:[Object(y.jsxs)("div",Object(i.a)(Object(i.a)({},R("header")),{},{style:{backgroundImage:`url(${F})`},children:[Object(y.jsx)("div",Object(i.a)(Object(i.a)({},R("dropdown")),{},{children:Object(y.jsx)(u.Dropdown,{target:Object(y.jsx)(u.Icon,{identifier:"arrow-down",color:"grey"}),children:Object(y.jsx)(u.Dropdown.Action,{type:"button",onClick:this.onHidePromo,children:"Hide"})})})),Object(y.jsx)("img",Object(i.a)(Object(i.a)({},R("icon")),{},{src:M,alt:"promo icon"}))]})),Object(y.jsxs)("div",Object(i.a)(Object(i.a)({},R("body")),{},{children:[Object(y.jsxs)(u.Heading,{size:"xl",spacing:"xxs",id:"feed-welcome-promo-heading",children:[this.props.firstName,", discover new research in your field"]}),Object(y.jsx)(u.Text,{children:"This is where you'll see updates from your network, including the people and publications you follow, as well as new research recommendations."})]}))]})):null}}N.displayName="HomeFeedWelcomePromo";var L=Object(c.b)()(N),B=n(1079),q=n(949),U=n(1004),$=n(952),V=n(1005),z=n(1011),G=n(1012),Q=n(1006),H=n(768),W=n(739),Y=n(29),K=n(730),J=n(652),X=n(781);n(1344);let Z;const ee=new E.a("profile-research-tab-spotlight-creation-promo"),te=({accountId:e,dispatch:t,onModalClose:n,learnMoreAboutSpotlightUrl:o,spotlightCreated:r,flowEntered:s,publicationId:a,publicationTitle:c})=>{const{handleCreateWithPublication:l}=Object(J.a)({dispatch:t,accountId:e,entryChannel:X.a.PROFILE_RESEARCH_TAB,onModalClose:n,onMount:()=>Object(Y.l)(s),onSuccess:()=>Object(Y.l)(r)});return Object(y.jsx)("div",Object(i.a)(Object(i.a)({},ee()),{},{children:Object(y.jsxs)(u.Card,{spacing:"m",elevation:"none",color:"blue",children:[Object(y.jsx)(u.Card.Header,{children:Object(y.jsx)(K.a,{title:"Research Spotlight"})}),Object(y.jsx)(u.Card.Body,{spacing:"m",children:Object(y.jsxs)(u.Stack,{gutter:"m",children:[Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Text,{size:"l",children:Object(y.jsx)("strong",{children:"Want 4x more reads of your recent work?"})})}),Object(y.jsx)(u.Stack.Item,{children:Object(y.jsxs)(u.Text,{children:["Showcase your work in a Spotlight to get ",Object(y.jsx)("strong",{children:"4x more reads"})," on average."," ",Object(y.jsx)(u.Link,{target:"_blank",rel:"noopener",href:o,children:"Learn more"})]})}),Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)("div",Object(i.a)(Object(i.a)({},ee("publication")),{},{children:Object(y.jsx)(u.Text,{color:"grey-600",children:Object(y.jsx)("strong",{children:c})})}))}),Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Button,{onClick:()=>{l(a)},type:"button",children:Object(y.jsx)(u.Button.Label,{children:"Create Spotlight"})})})]})})]})}))};te.defaultProps={onModalClose:()=>{}};var ne=Object(h.a)(Object(c.b)(),Object(p.withQuery)(Object(p.gql)(Z||(Z=(e=>e)`query ProfileResearchTabSpotlightCreationPromo($accountId: ID!) {
  account(id: $accountId) {
    id
    spotlights {
      suggestedSpotlightPublication {
        id
        title
        __typename
      }
      experiments {
        spotlightCreationPromo(promo: PROFILE_RESEARCH_TAB) {
          spotlightCreated: goal
          flowEntered: milestone(name: "spotlightCreationFlowEntered")
          __typename
        }
        __typename
      }
      learnMoreAboutSpotlightUrl
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a,c,l,d,u;return{spotlightCreated:null==e||null===(t=e.spotlights)||void 0===t||null===(n=t.experiments)||void 0===n||null===(i=n.spotlightCreationPromo)||void 0===i?void 0:i.spotlightCreated,flowEntered:null==e||null===(o=e.spotlights)||void 0===o||null===(r=o.experiments)||void 0===r||null===(s=r.spotlightCreationPromo)||void 0===s?void 0:s.flowEntered,learnMoreAboutSpotlightUrl:null==e||null===(a=e.spotlights)||void 0===a?void 0:a.learnMoreAboutSpotlightUrl,publicationId:null==e||null===(c=e.spotlights)||void 0===c||null===(l=c.suggestedSpotlightPublication)||void 0===l?void 0:l.id,publicationTitle:null==e||null===(d=e.spotlights)||void 0===d||null===(u=d.suggestedSpotlightPublication)||void 0===u?void 0:u.title}}}))(te);var ie=Object(c.b)()(({promo:e,onRequestNext:t})=>Object(y.jsx)(H.a,{widgetId:e,onClose:t}));var oe=Object(c.b)()(({promo:e,onRequestNext:t})=>Object(y.jsx)(W.a,{widgetId:e,isCardDesign:!0,onSkip:t,isCardElevated:!0})),re=n(1009),se=n(1013),ae=n(1028),ce=n(16),le=n.n(ce);class de extends s.Component{render(){const{publicationSuggestionsCount:e,fulltextRequestsCount:t,publicationsWithoutFulltextCount:n,publicationsWithoutFulltextUrl:i,fulltextRequestsUrl:o,oneClickUploadUrl:r}=this.props;if(e>0){const t=e>1?"them":"it";return Object(y.jsxs)(u.Card,{orientation:"vertical",children:[Object(y.jsxs)(u.Card.Body,{children:[Object(y.jsx)(u.Text,{size:"xl",spacing:"s",children:`We’ve found ${e} more of your full-texts online`}),Object(y.jsx)(u.Text,{size:"m",spacing:"xs",children:`Upload ${t} now to add ${t} to your profile.`})]}),Object(y.jsx)(u.Card.Footer,{align:"right",children:Object(y.jsx)(u.Button,{href:r,children:"Upload"})})]})}return t>0?Object(y.jsxs)(u.Card,{orientation:"vertical",children:[Object(y.jsxs)(u.Card.Body,{children:[Object(y.jsx)(u.Heading,{size:"xl",spacing:"s",children:`You have ${t} pending full-text ${le()("request",t)}`}),Object(y.jsx)(u.Text,{size:"m",spacing:"xs",children:"Manage your full-text requests from your mailbox."})]}),Object(y.jsx)(u.Card.Footer,{align:"right",children:Object(y.jsx)(u.Button,{href:o,children:"Manage requests"})})]}):n>0?Object(y.jsxs)(u.Card,{orientation:"vertical",children:[Object(y.jsxs)(u.Card.Body,{children:[Object(y.jsx)(u.Heading,{size:"xl",spacing:"s",children:`You have ${n} more ${le()("publication",n)} without full-texts`}),Object(y.jsx)(u.Text,{size:"m",spacing:"xs",children:`Upload the ${le()("full-text",n)} now to make your research visible.`})]}),Object(y.jsx)(u.Card.Footer,{align:"right",children:Object(y.jsx)(u.Button,{href:i,children:"Upload more "+le()("full-text",n)})})]}):null}}de.displayName="MissingFullTextsModal";var ue=Object(c.b)()(de),pe=n(28);let he;class be extends s.Component{constructor(...e){super(...e),this.handleDialogClose=()=>{window.location.reload()}}render(){const e=Object(pe.y)(this.props.publication.type);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(u.Modal.Body,{children:[Object(y.jsx)(u.Heading,{size:"xl",spacing:"s",children:`Your ${e.toLowerCase()} was successfully stored`}),Object(y.jsx)(u.Text,{size:"l",spacing:"xs",children:`This ${e.toLowerCase()} is now available to view.`})]}),Object(y.jsx)(u.Modal.Footer,{align:"right",children:Object(y.jsx)(u.Button,{onClick:this.handleDialogClose,children:"Close"})})]})}}be.displayName="UploadPublicFileSuccessful";const me=Object(p.gql)(he||(he=(e=>e)`query UploadPublicFileEot($publicationKey: ID!) {
  publication(id: $publicationKey) {
    id
    type
    __typename
  }
  __typename
}
`));var je=Object(h.a)(Object(c.b)(),Object(p.withQuery)(me))(be);var fe=Object(c.b)()(({image:e,firstname:t,url:n})=>Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsx)(u.Card,{spacing:"xl",children:Object(y.jsxs)(u.Stack,{children:[Object(y.jsx)(u.Stack.Item,{children:Object(y.jsxs)(u.Flex,{justifyContent:"center",alignItems:"baseline",gutter:"s",children:[Object(y.jsx)(u.Flex.Item,{children:Object(y.jsx)("img",{src:e,width:"40",height:"40",className:"img-circle"})}),Object(y.jsx)(u.Flex.Item,{children:Object(y.jsxs)(u.Text,{size:"l",children:[t,", increase your impact even more."]})})]})}),Object(y.jsx)(u.Stack.Item,{children:Object(y.jsx)(u.Button,{size:"m",width:"full",color:"blue",href:n,type:"button",children:"View suggestions"})})]})})})),Oe=n(1014);function ge({onRequestNext:e}){return{onRequestNext:e}}const xe={"rg\\modules\\research\\actions\\fulltextUploadFlow\\AuthorsInviteStep":{component:ae.default},"rg\\modules\\profile\\actions\\statsPromoStack\\promos\\ProfileStatsPromoStackAuthorClaim":{component:ie},"rg\\modules\\profile\\actions\\statsPromoStack\\promos\\ProfileStatsPromoStackPublicationsWithoutFulltext":{component:oe},"rg\\modules\\profilecommon\\actions\\SuccessStoryDetailsInvitationPromo":{component:re.a,mapComponentProps:({onRequestNext:e})=>({onNoMoreSuggestions:e,onSkip:e})},"rg\\modules\\successstories\\actions\\promos\\SuccessStoryDetailsProfileStatsImprovementsPromo":{component:fe},"rg\\modules\\home\\actions\\UpdateCompanyAffiliationPromo":{component:B.a},"rg\\modules\\literature\\actions\\OneClickPublishingRightColumnPromo":{component:V.a},"rg\\modules\\profile\\actions\\ProfileHighlightsStatsPromoAuthorClaimNew":{component:H.a,mapComponentProps:({onRequestNext:e})=>({onClose:e})},"rg\\modules\\projects\\actions\\ProjectCandidateClaimingWidgetPromo":{component:se.a},"rg\\modules\\literature\\actions\\AuthorSuggestionsPromo":{component:$.a},"rg\\modules\\literature\\actions\\PreprintPromo":{component:z.a},"rg\\modules\\literature\\actions\\AddResearchPromo":{component:U.a},"rg\\modules\\profile\\actions\\ProfileAdditionalEmailPromo":{component:G.a},"rg\\modules\\profile\\actions\\ProfileCompletionHomeFeedPromo":{component:Q.a},"rg\\modules\\topics\\actions\\TopicPostAskQuestionPromo":{component:Oe.a},"rg\\modules\\invitations\\actions\\AfterClaimInviteCoauthors":{component:q.default},"rg\\modules\\application\\actions\\UniversalShareDialog":{component:d.default},"rg\\modules\\research\\actions\\fulltextUploadFlow\\uploadSteps\\MissingFullTexts":{component:ue},"rg\\modules\\research\\actions\\fulltextUploadFlow\\uploadSteps\\UploadPublicFileSuccessful":{component:je},"rg\\modules\\profile\\actions\\PublicationsWithoutFulltextsPromo":{component:W.a,mapComponentProps:({onRequestNext:e})=>({onSkip:e})},"rg\\modules\\home\\actions\\promos\\HomeFeedWelcomePromo":{component:L},"rg\\modules\\home\\actions\\promos\\HomeFeedCleanUpPromo":{component:I},"rg\\modules\\profile\\actions\\spotlight\\ProfileResearchTabSpotlightCreationPromo":{component:ne},"rg\\modules\\home\\actions\\promos\\HomeFeedSpotlightCreationPromo":{component:A.a},"rg\\modules\\home\\actions\\promos\\HomeFeedProjectsRemovalNoticePromo":{component:k}};class ye extends s.Component{constructor(...e){super(...e),this.handleRequestNext=()=>{const{roadMap:e,onRequestNext:t,onRequestClose:n}=this.props;e?t({roadMap:e}):n()},this.handleObserverChanged=(e,t)=>{if(this.props.onIntersectChange){("boolean"==typeof e.isIntersecting?e.isIntersecting:!(0===e.intersectionRatio&&0===e.intersectionRect.top))&&t(),this.props.onIntersectChange(e,this.getPromoItemProps())}}}getPromoItemProps(){return r()(this.props,["context","phpFullClassName"])}renderComponent({PromoComponent:e,promo:t,propMap:n}){return Object(y.jsx)(e,Object(i.a)({widgetId:t},n))}render(){const{promo:e,phpFullClassName:t}=this.props,n=function(e){return Object(l.a)(xe,e)?xe[e].component:null}(t);if(!n)return null;const i=function(e){const t=xe[e].mapComponentProps;return t||ge}(t)({onRequestNext:this.handleRequestNext});return this.props.onIntersectChange?Object(y.jsx)(a.a,{onChange:this.handleObserverChanged,children:this.renderComponent({PromoComponent:n,promo:e,propMap:i})}):this.renderComponent({PromoComponent:n,promo:e,propMap:i})}}ye.displayName="PromoStackItem";t.default=Object(c.b)()(ye)},940:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));const i={ASSOCIATE_EDITOR:"Associate Editor",CHIEF_EDITOR:"Chief Editor",COORDINATOR:"Coordinator",DEPUTY_EDITOR:"Deputy Editor",DIVISION_EDITOR:"Division Editor",EDITORIAL_BOARD_MEMBER:"Editorial Board Member",EDITORIAL_OFFICE_STAFF:"Editorial Office Staff",EDITOR_IN_CHIEF:"Editor-in-Chief",FIELD_CHIEF_EDITOR:"Field Chief Editor",GUEST_EDITOR:"Guest Editor",JOURNAL_MANAGER:"Journal Manager",JOURNAL_REFEREE:"Journal Referee",MANAGING_EDITOR:"Managing Editor",PEER_REVIEWER:"Peer Reviewer",PUBLISHING_EDITOR:"Publishing Editor",REVIEW_MANAGER:"Review Editor",SECTION_CHIEF_EDITOR:"Section Chief Editor",SECTION_EDITOR:"Section Editor",SENIOR_EDITOR:"Senior Editor",SPECIALITY_CHIEF_EDITOR:"Speciality Chief Editor",STAFF_EDITOR:"Staff Editor",SUBJECT_AREA_EDITOR:"Subject Area Editor"},o=3,r=5},949:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(16),r=n.n(o),s=n(4),a=n(8),c=n.n(a),l=n(1),d=n(118),u=n(6),p=n(11),h=n(18),b=n(14),m=n(20),j=IMAGES_STATIC_URL+"m/43398128462511/images/symbols/mail-grey.svg",f=n(242),O=n(472),g=n(9),x=n(684),y=n(748),v=n(633),I=n(0);const _=new c.a("invite-authors-list");class w extends s.Component{constructor(...e){super(...e),this.onAuthorInputChange=e=>{const t=e.currentTarget,n=t.value,i=this.props.authors;i[t.name].email=n,this.props.dispatch(Object(x.f)(i[t.name].authorUid,n))},this.onConfirmAuthorEmail=e=>{this.props.dispatch(Object(x.d)(e.authorUid)),Object(b.a)(this.props.milestones.confirmedEmail)},this.onRemoveAuthorEmail=e=>{this.props.dispatch(Object(x.e)(e.authorUid)),Object(b.a)(this.props.milestones.removedEmail)},this.onInvite=()=>{this.props.onInvite()}}getEmailInput(e,t){return Object(I.jsx)(l.Input,Object(i.a)(Object(i.a)({},_("author-input")),{},{placeholder:"Enter an email address",type:"email",name:e.authorKey,autoFocus:t,value:e.email,onChange:this.onAuthorInputChange}))}getAuthors(){const e=[];let t=!0;return Object.keys(this.props.authors).forEach(n=>{const o=this.props.authors[n];this.props.u2uApprovedAuthorRgKeys[n]||(e.push(Object(s.createElement)("div",Object(i.a)(Object(i.a)({},_("author-item-container")),{},{key:n}),Object(I.jsx)(l.MediaObject,Object(i.a)(Object(i.a)({verticalAlign:"top"},_("author-item")),{},{children:Object(I.jsx)(l.MediaObject.Item,{width:"full",children:Object(I.jsxs)(l.Stack,{gutter:"xs",spacing:"none",gutterOutside:!1,showDivider:!1,children:[Object(I.jsx)(l.Stack.Item,{children:Object(I.jsxs)(l.List,{type:"inline",spacing:"none",children:[Object(I.jsx)(l.List.Item,{children:Object(I.jsx)("b",{children:o.name})}),Object(I.jsx)(l.List.Item,Object(i.a)(Object(i.a)({},_("author-affiliation")),{},{children:o.affiliation}))]})}),Object(I.jsx)(l.Stack.Item,{children:this.getEmailInput(o,t)})]})})})))),t=!1)}),e}getBody(){const e=Object.keys(this.props.authors).length;let t;return this.props.hideHeadline||(t=Object(I.jsx)("div",Object(i.a)(Object(i.a)({},_("body-headline")),{},{children:Object(I.jsxs)(l.Heading,{size:"xl",family:"sans-serif",spacing:"none",tag:"div",children:["You have ",e," unconfirmed"," ",r()("co-author",e)]})}))),Object(I.jsxs)("div",Object(i.a)(Object(i.a)({},_("body")),{},{children:[t,Object(I.jsx)("div",Object(i.a)(Object(i.a)({},_("body-coauthors")),{},{children:this.getAuthors()}))]}))}render(){return Object(I.jsx)("div",Object(i.a)(Object(i.a)({},_()),{},{children:this.getBody()}))}}w.displayName="InviteAuthorsList";var S=Object(u.b)(e=>{const t={},n=Object(v.a)(e);return n&&n.length>0&&n.forEach(e=>{if(e.status===y.STATUS_APPROVED&&e.targetAuthorUid){const n=new g.a(e.targetAuthorUid,g.b.TYPE_AUTHOR);t[n.toString()]=y.STATUS_APPROVED}}),{authors:e.invitationsInviteAuthorsList.authors,u2uApprovedAuthorRgKeys:t}})(w);n(1170);const P=new c.a("after-claim-invite-coauthors");class C extends s.Component{constructor(e){super(e),this.onSkip=()=>{Object(b.a)(this.props.milestones.skip),this.props.onSkipped&&this.props.onSkipped(),this.props.onRequestNext&&this.props.onRequestNext()},this.onInvite=()=>{this.setState({inviteButtonStatus:"busy"}),Object(h.default)("invitations.AfterClaimInviteCoauthors.html",{method:"POST",body:{authors:this.props.authors,invitationContext:this.props.invitationContext,invitationChannel:this.props.invitationChannel}}).then(e=>{const t=e.result.invitedAuthorNames,n=Object.keys(t).length,i=n>1?`You've invited ${n} researchers`:"You've invited "+t[0];this.props.dispatch(Object(p.pushAlert)(()=>Object(I.jsx)(l.Alert,{title:"Your invitation is on the way",description:i,color:"green"}))),this.props.onInvited&&this.props.onInvited()}).catch(e=>{Object(m.default)(e),this.setState({inviteButtonStatus:""});let t="Something went wrong";e.errors&&(t=e.errors[0]),this.props.dispatch(Object(p.pushAlert)(()=>Object(I.jsx)(l.Alert,{title:"Invalid email addresses.",description:t,color:"red"})))})},this.getTooltipContents=()=>Object(I.jsxs)("div",{className:"tooltip",children:[Object(I.jsx)(l.Text,{size:"m",children:Object(I.jsx)("b",{children:"From:"})}),Object(I.jsxs)(l.Text,{size:"m",spacing:"xs",children:[this.props.inviterAccount.fullname," via ResearchGate"]}),Object(I.jsx)(l.Text,{size:"m",children:Object(I.jsx)("b",{children:"Subject:"})}),Object(I.jsxs)(l.Text,{size:"m",spacing:"xs",children:[this.props.inviterAccount.fullname," invited you to confirm authorship of your work"]}),Object(I.jsx)(l.Text,{size:"m",children:Object(I.jsx)("b",{children:"Message:"})}),Object(I.jsxs)(l.Text,{size:"m",spacing:"xxs",children:[this.props.inviterAccount.fullname," invited you to join ResearchGate and confirm authorship of your publications."]})]}),this.state={inviteButtonStatus:"disabled"}}UNSAFE_componentWillReceiveProps(e){let t=!1;for(const n in e.authors)if(Object(d.a)(e.authors,n)){if(e.authors[n].email.length>4){t=!0;break}}this.setState({inviteButtonStatus:t?"":"disabled"})}getHeader(){let e="Some of your co-authors aren't on ResearchGate yet.";this.props.header?e=this.props.header:this.props.showSocialProof&&this.props.unconfirmedCoauthorsCount?e=this.props.unconfirmedCoauthorsCount+"% of your co-authors aren't confirmed yet.":this.props.unconfirmedCoauthorsCount&&(e=this.props.unconfirmedCoauthorsCount+"% of your co-authors aren't on ResearchGate yet.");let t="Quickly invite them to confirm their authorship and gain more visibility for your mutual work.";return this.props.subHeader?t=this.props.subHeader:this.props.showSocialProof&&(t="Publications with confirmed co-authors are easier to find by researchers in your field on ResearchGate."),Object(I.jsxs)(l.MediaObject,{verticalAlign:"top",gutter:"none",children:[Object(I.jsxs)(l.MediaObject.Item,{width:"full",children:[Object(I.jsx)(l.Heading,{size:"xl",family:"sans-serif",spacing:"s",tag:"div",children:e}),Object(I.jsx)(l.Text,{size:"m",family:"sans-serif",spacing:"s",tag:"div",children:t}),this.getSocialProof()]}),Object(I.jsx)(l.MediaObject.Item,{children:"default"===this.props.variant?Object(I.jsx)("img",{src:j,width:"80",height:"80",alt:"Mail"}):null})]})}getSocialProof(){if(!this.props.socialProof)return null;const e=Object.keys(this.props.socialProofDisplayableAccounts).length;if(e<=0)return null;let t;if(1===e)t=Object(I.jsxs)("span",{children:[Object(I.jsx)("b",{children:Object.values(this.props.socialProofDisplayableAccounts)[0].fullName})," is an already confirmed co-author on ResearchGate"]});else if(2===e){const e=this.props.socialProof.coauthorAccountIdsTotalCount;2===e?t=Object(I.jsxs)("span",{children:[Object(I.jsx)("b",{children:Object.values(this.props.socialProofDisplayableAccounts)[0].fullName})," and"," ",Object(I.jsx)("b",{children:Object.values(this.props.socialProofDisplayableAccounts)[1].fullName})," are already confirmed co-authors on ResearchGate"]}):e>=3&&(t=Object(I.jsxs)("span",{children:[Object(I.jsx)("b",{children:Object.values(this.props.socialProofDisplayableAccounts)[0].fullName}),","," ",Object(I.jsx)("b",{children:Object.values(this.props.socialProofDisplayableAccounts)[1].fullName}),", and"," ",Object(I.jsxs)("b",{children:[e," ",r()("other",e)]})," ","are already confirmed co-authors on ResearchGate"]}))}return Object(I.jsx)(l.MediaObject.Item,Object(i.a)(Object(i.a)({},P("social-proof")),{},{children:Object(I.jsxs)(l.Pack,{width:"auto",verticalAlign:"middle",gutter:"none",children:[Object(I.jsx)(l.Pack.Item,{children:Object(I.jsx)(O.a,Object(i.a)(Object(i.a)({},P("facepile")),{},{accountIds:this.props.socialProof.coauthorAccountIdsDisplayed,size:"m"}))}),Object(I.jsx)(l.Pack.Item,{children:Object(I.jsx)(l.Text,{size:"m",children:t})})]})}))}getBody(){return Object(I.jsx)(S,{onInvite:this.onInvite,widgetId:this.props.inviteAuthorsList})}getFooter(){return Object(I.jsx)("div",Object(i.a)(Object(i.a)({},P("footer")),{},{children:Object(I.jsxs)(l.Pack,{verticalAlign:"middle",width:"full",children:[Object(I.jsx)(l.Pack.Item,{children:Object(I.jsx)(l.Tooltip,{scope:"local",target:Object(I.jsx)(l.Link,Object(i.a)(Object(i.a)({},P("preview-link")),{},{children:Object(I.jsx)(l.Text,{size:"m",children:"Preview email"})})),children:this.getTooltipContents()})}),Object(I.jsx)(l.Pack.Item,{children:Object(I.jsxs)(l.ButtonGroup,Object(i.a)(Object(i.a)({},P("footer-actions")),{},{children:[this.props.isSkipAvailable?Object(I.jsx)(l.Button,{size:"m",theme:"bare",color:"blue",onClick:this.onSkip,type:"button",children:Object(I.jsx)(l.Button.Label,{children:"Skip"})}):null,Object(I.jsx)(l.Button,{size:"m",theme:"solid",color:"blue",onClick:this.onInvite,status:this.state.inviteButtonStatus,type:"button",children:Object(I.jsx)(l.Button.Label,{children:"Invite co-authors"})})]}))})]})}))}render(){return Object(I.jsxs)("div",Object(i.a)(Object(i.a)({},P()),{},{children:[this.getHeader(),this.getBody(),this.getFooter()]}))}}C.displayName="AfterClaimInviteCoauthors";t.default=Object(u.b)((e,t)=>{const n=[];return t.socialProof&&t.socialProof.coauthorAccountIdsDisplayed&&t.socialProof.coauthorAccountIdsDisplayed.forEach(t=>{n.push(Object(f.c)(e,{accountId:t}))}),{socialProofDisplayableAccounts:n,authors:e.invitationsInviteAuthorsList.authors}})(C)},952:function(e,t,n){"use strict";var i=n(2),o=n(54),r=n.n(o),s=n(4),a=n(8),c=n.n(a),l=n(9),d=n(1),u=n(131),p=n(5),h=n(7),b=n(6),m=n(18),j=n(347),f=n(633),O=n(629),g=n(0);let x;class y extends s.Component{constructor(...e){super(...e),this.approveSuggestion=()=>{const{suggester:e,isRequestInProgress:t,onAction:n,context:i}=this.props;if(t)return;const o=l.a.parse(e.targetAccount.id).id,r=l.a.parse(e.id).id;this.props.dispatch(Object(j.f)(o,r,Object(j.g)(o,r),i)),n&&n(r)},this.hideSuggestion=()=>{const{suggester:e,isRequestInProgress:t,onAction:n,context:i}=this.props;if(t)return;const o=l.a.parse(e.targetAccount.id).id,r=l.a.parse(e.id).id;this.props.dispatch(Object(j.h)(o,r,Object(j.g)(o,r),i)),n&&n(r)},this.ignoreSuggestion=()=>{const{suggester:e,isRequestInProgress:t,onAction:n,context:i}=this.props;if(t)return;const o=l.a.parse(e.targetAccount.id).id,r=l.a.parse(e.id).id;this.props.dispatch(Object(j.i)(o,r,Object(j.g)(o,r),i)),n&&n(r)}}componentDidMount(){this.startExperiment()}startExperiment(){const{context:e,suggester:t}=this.props,n=l.a.parse(t.targetAccount.id).id,i=l.a.parse(t.id).id;Object(m.default)("/api/u2u/startSuggesterExperiment",{method:"POST",body:{viewId:Object(j.g)(n,i),context:e}})}render(){const{publicationId:e,suggester:{targetAccount:t}}=this.props;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.Stack,{spacing:"none",gutterOutside:!1,gutter:"m",children:[Object(g.jsx)(d.Stack.Item,{children:Object(g.jsxs)(d.MediaObject,{gutter:"xs",verticalAlign:"middle",children:[Object(g.jsx)(d.MediaObject.Item,{children:Object(g.jsx)(d.Avatar,{size:"m",alt:t.fullName,href:t.url,src:t.imageUrl})}),Object(g.jsx)(d.MediaObject.Item,{width:"full",children:Object(g.jsxs)(d.Text,{size:"l",family:"sans-serif",tag:"div",children:["Did ",t.fullName," author this?"]})})]})}),Object(g.jsx)(d.Stack.Item,{children:Object(g.jsx)(O.a,{publicationId:e})}),Object(g.jsx)(d.Stack.Item,{children:Object(g.jsxs)(d.ButtonGroup,{gutter:"xs",children:[Object(g.jsx)(d.Button,{type:"button",size:"s",onClick:this.approveSuggestion,children:"Yes"},"yesBtn"),Object(g.jsx)(d.Button,{type:"button",size:"s",onClick:this.hideSuggestion,theme:"ghost",children:"No"},"noBtn"),Object(g.jsx)(d.Button,{type:"button",size:"s",onClick:this.ignoreSuggestion,theme:"bare",children:"I don't know"},"ignoreBtn")]})}),Object(g.jsx)(d.Stack.Item,{children:Object(g.jsx)(d.Text,{children:"We'll let them know you think they're the author."})})]})})}}y.displayName="AuthorAccountMappingSuggester";var v=Object(h.a)(Object(b.b)(e=>({isRequestInProgress:Object(f.c)(e)})),Object(p.withQuery)(Object(p.gql)(x||(x=(e=>e)`query AuthorAccountMappingSuggester($publicationId: ID!) {
  publication(id: $publicationId) {
    id
    ...PublicationItemPromo @embed
    __typename
  }
  __typename
}
`))))(y);n(1172);let I;const _=new c.a({name:"author-suggestions-promo"});class w extends s.Component{constructor(e){super(e),this.shouldDisplaySuggester=e=>e.author&&e.targetAccount&&e.samplePublication,this.hidePromo=()=>{const{hideUrl:e}=this.props;Object(m.default)(e,{method:"POST"}),this.props.onRequestNext?this.props.onRequestNext():this.setState({display:!1})},this.onNextSuggestion=e=>{const t=Array.from(this.state.suggesters.values());this.setState({suggesters:t.filter(t=>l.a.parse(t.id).id!==e)},()=>{0===this.state.suggesters.length?this.props.onRequestNext&&this.props.onRequestNext():this.props.hasMoreData&&this.props.loadMore(15)})};const t=e.viewer.account.authorAccountMappingSuggesters?Array.from(e.viewer.account.authorAccountMappingSuggesters.values()):[];this.state={suggesters:t.filter(this.shouldDisplaySuggester),renderedSuggesterIds:t.map(e=>e.id),display:!0}}UNSAFE_componentWillReceiveProps(e){let t=e.viewer.account.authorAccountMappingSuggesters?Array.from(e.viewer.account.authorAccountMappingSuggesters.values()):[];t=t.filter(e=>!this.state.renderedSuggesterIds.includes(e.id)),r()(t)||this.setState({suggesters:this.state.suggesters.concat(t.filter(this.shouldDisplaySuggester)),renderedSuggesterIds:this.state.renderedSuggesterIds.concat(t.map(e=>e.id))})}componentDidMount(){this.trackLoadingTime()}render(){const{display:e}=this.state;if(!e)return null;const{context:t}=this.props,n=this.state.suggesters[0];return n?Object(g.jsx)(d.Card,Object(i.a)(Object(i.a)({spacing:"m",elevation:"none"},_()),{},{role:"complementary","aria-label":"help us find authorship connections",children:Object(g.jsxs)(d.Card.Body,{children:[Object(g.jsx)(d.Button,Object(i.a)(Object(i.a)({type:"button",theme:"bare",color:"black"},_("btn-hide-promo")),{},{onClick:this.hidePromo,children:Object(g.jsx)(d.Button.Icon,{identifier:"close"})})),Object(g.jsx)(u.CSSTransitionGroup,{transitionName:_("animation").className,transitionEnterTimeout:500,transitionLeave:!1,children:Object(g.jsx)(v,{publicationId:n.samplePublication.id,suggester:n,onAction:this.onNextSuggestion,context:t},n.id)})]})})):null}trackLoadingTime(){const e=window.performance;if(!e||!e.timing)return;const t=RGCommons.monitoring,n={key:"indirectSuggestionNewPromo",timer:Date.now()-e.timing.navigationStart};t.trackByImage(this.props.monitoringEndpoint,n)}}w.displayName="AuthorSuggestionsPromo";t.a=Object(h.a)(Object(b.b)(),Object(p.withPagination)(Object(p.gql)(I||(I=(e=>e)`query AuthorSuggestionsPromo($offset: Int = 0, $limit: Int = 3) {
  viewer {
    account {
      id
      authorAccountMappingSuggestersCount
      authorAccountMappingSuggesters(offset: $offset, limit: $limit) {
        id
        author {
          id
          fullName
          __typename
        }
        targetAccount {
          id
          url
          fullName
          imageUrl
          __typename
        }
        samplePublication {
          id
          ...AuthorAccountMappingSuggester @embed
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
`)),{hasMoreData:({viewer:e},{offset:t,limit:n})=>e.account.authorAccountMappingSuggestersCount>t+n}))(w)},953:function(e,t,n){"use strict";t.a=IMAGES_STATIC_URL+"m/412604731842461/images/icons/svgicons/hand-bulb.svg"},956:function(e,t,n){"use strict";var i=n(2),o=n(4),r=n(8),s=n.n(r),a=n(1),c=n(43),l=n(7),d=n(6),u=n(29),p=n(18),h=n(20),b=IMAGES_STATIC_URL+"m/431975303523861/images/nativeApp/rg_app_ios_logo_small.png",m=n(706),j=(n(1178),n(0));const f=new s.a("native-app-recruitment-container"),O={appName:Object(c.a)(()=>["ResearchGate app"]),tagLine:Object(c.a)(()=>["Get it on Google Play now"]),cta:Object(c.a)(()=>["Install"]),benefit0:Object(c.a)(()=>["Keep up with your stats and more"]),benefit1:Object(c.a)(()=>["Access scientific knowledge from anywhere"])},g={appName:"ResearchGate iOS App",tagLine:"Get it from the App Store now.",cta:"Install",benefit0:"Keep up with your stats and more",benefit1:"Access scientific knowledge from anywhere"};class x extends o.Component{constructor(...e){super(...e),this.state={visible:!0},this.handleClose=()=>{const{declinedUrl:e}=this.props;this.setState({visible:!1}),Object(p.default)(e,{method:"POST",headers:{Accept:"text/html"}}).catch(h.default)}}componentDidMount(){Object(u.l)(this.props.iosAcquisitionPromoBannerLoaded)}render(){const{isMobileAppAcquisitionPromosEnabled:e,platformType:t,goalUrl:n}=this.props,o=e&&"android"===t?O:g;return this.state.visible?Object(j.jsx)("div",Object(i.a)(Object(i.a)({},f()),{},{children:Object(j.jsx)("div",Object(i.a)(Object(i.a)({},f("top-display")),{},{children:Object(j.jsx)(a.Card,{spacing:"xs",elevation:"none",children:Object(j.jsx)(a.Card.Body,{children:Object(j.jsxs)(a.Stack,{gutter:"xxs",children:[Object(j.jsx)(a.Stack.Item,{children:Object(j.jsxs)(a.Flex,{alignItems:"center",gutter:"s",children:[Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Button,{type:"button",theme:"bare",size:"xs",onClick:this.handleClose,children:Object(j.jsx)(a.Icon,{identifier:"close",size:"s",color:"grey"})})}),Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Link,{href:n,theme:"silent",children:Object(j.jsx)("img",Object(i.a)(Object(i.a)({},f("app-image")),{},{alt:"RG Logo",src:b,height:"30",width:"30",style:{borderRadius:"3px"}}))})}),Object(j.jsx)(a.Flex.Item,{grow:!0,children:Object(j.jsx)(a.Link,{href:n,theme:"silent",children:Object(j.jsxs)(a.Stack,{gutter:"xxs",children:[Object(j.jsx)(a.Stack.Item,{children:Object(j.jsx)(a.Text,{size:"m",children:Object(j.jsx)("b",{children:o.appName})})}),Object(j.jsx)(a.Stack.Item,{children:Object(j.jsx)(a.Text,{size:"s",color:"grey-500",children:o.tagLine})})]})})}),Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Button,{theme:"solid",color:"blue",size:"s",href:n,children:o.cta})})]})}),Object(j.jsx)(a.Stack.Item,{children:Object(j.jsx)(a.Link,{href:n,theme:"silent",children:Object(j.jsxs)(a.Flex,{gutter:"xxs",children:[Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Icon,{identifier:"check-circle",size:"s",color:"green"})}),Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Text,{color:"grey-800",size:"s",children:o.benefit0})})]})})}),Object(j.jsx)(a.Stack.Item,{children:Object(j.jsx)(a.Link,{href:n,theme:"silent",children:Object(j.jsxs)(a.Flex,{gutter:"xxs",children:[Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Icon,{identifier:"check-circle",size:"s",color:"green"})}),Object(j.jsx)(a.Flex.Item,{children:Object(j.jsx)(a.Text,{color:"grey-800",size:"s",children:o.benefit1})})]})})})]})})})}))})):null}}x.displayName="NativeAppRecruitmentBannerIOS";t.a=Object(l.a)(Object(d.b)(),Object(m.a)("modules/application/components/NativeAppRecruitmentBannerIOS",({relativePath:e})=>"nativeApp_"+e,({accountId:e})=>e))(x)},96:function(e,t,n){var i=n(164),o=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},965:function(e,t,n){"use strict";var i=n(1),o=n(0);t.a=({href:e,onClick:t,type:n,icon:r,children:s})=>Object(o.jsxs)(i.Button,{href:e,onClick:t,type:n||"button",theme:"bare",color:"grey",children:[Object(o.jsx)(i.Button.Label,{children:s}),Object(o.jsx)(i.Button.Icon,{identifier:r})]})},974:function(e,t,n){"use strict";var i=n(5),o=n(7),r=n(6),s=n(29),a=n(20),c=n(13);let l,d=e=>e;function u(e){return{mutation:Object(i.gql)(l||(l=d`mutation DismissIosAcquisitionInterstitialPromo($id: ID!) {
  dismissIosAcquisitionInterstitialPromo(id: $id) {
    id
    flags {
      isAppAcquisitionInterstitialPromoVisible
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e},optimisticResponse:{dismissIosAcquisitionInterstitialPromo:{__typename:"Account",id:e,flags:{isAppAcquisitionInterstitialPromoVisible:!1}}}}}const p="android";var h=n(956),b=n(2),m=n(4),j=n(8),f=n.n(j),O=n(1),g=n(43),x=IMAGES_STATIC_URL+"m/437528591575024/images/icons/svgicons/rg-title-grey.svg",y=IMAGES_STATIC_URL+"m/42839196977344659/images/mobileapp/app-preview.png",v=IMAGES_STATIC_URL+"m/433176215873594653/images/mobileapp/app-preview.svg",I=IMAGES_STATIC_URL+"m/48271130058402/images/mobileapp/appstore.svg",_=IMAGES_STATIC_URL+"m/412657368249181/images/mobileapp/playstore.svg",w=(n(1253),n(0));const S=new f.a("ios-acquisition-mobile-interstitial-download-banner");var P=({onBannerClick:e,platformType:t})=>{const n=t===p?_:I;return Object(w.jsx)("div",Object(b.a)(Object(b.a)({},S("")),{},{onClick:e,children:Object(w.jsxs)(O.Flex,{alignItems:"center",justifyContent:"space-between",gutter:"xxs",children:[Object(w.jsx)(O.Flex.Item,{basis:"145px",shrink:0,children:Object(w.jsxs)(O.Flex,{alignItems:"center",gutter:"xs",children:[Object(w.jsx)(O.Flex.Item,{children:Object(w.jsx)("div",Object(b.a)({},S("download-for-free-icon")))}),Object(w.jsx)(O.Flex.Item,{children:Object(w.jsx)(O.Text,Object(b.a)(Object(b.a)({spacing:"auto"},S("download-for-free")),{},{color:"grey-900",children:Object(g.a)(()=>["Download for free"])}))})]})}),Object(w.jsx)(O.Flex.Item,{children:Object(w.jsx)("img",{src:n,alt:"app store logo"})})]})}))};n(1254);const C=new f.a("ios-acquisition-mobile-interstitial");var k=({renderedMilestone:e,dismissedMilestone:t,getAppGoal:n,onClose:i,onInstallApp:o,platformType:r,showAlternativeImage:a})=>{Object(m.useLayoutEffect)(()=>(document.body.classList.add("nova-has-modal"),document.documentElement.classList.add("nova-has-modal"),()=>{document.body.classList.remove("nova-has-modal"),document.documentElement.classList.remove("nova-has-modal")}),[]),Object(m.useEffect)(()=>{Object(s.l)(e)},[]);const c=()=>{null==i||i(t)};return Object(w.jsx)("div",Object(b.a)(Object(b.a)({},C("background")),{},{children:Object(w.jsxs)("div",Object(b.a)(Object(b.a)({},C("container")),{},{onClick:c,children:[Object(w.jsxs)("div",Object(b.a)(Object(b.a)({},C("top-content")),{},{children:[Object(w.jsxs)(O.Stack,{gutter:"xxl",children:[Object(w.jsx)(O.Stack.Item,{children:Object(w.jsxs)(O.Flex,{justifyContent:"space-between",alignItems:"center",children:[Object(w.jsx)(O.Flex.Item,{children:Object(w.jsx)("img",{src:x,alt:"ResearchGate logo"})}),Object(w.jsx)(O.Flex.Item,{children:Object(w.jsx)(O.Button,{theme:"bare",color:"white",onClick:c,children:Object(w.jsx)(O.Button.Icon,{identifier:"close"})})})]})}),Object(w.jsx)(O.Stack.Item,{children:Object(w.jsx)("div",Object(b.a)({},C("divider")))}),Object(w.jsx)(O.Stack.Item,{children:Object(w.jsxs)(O.Stack,{gutter:"m",children:[Object(w.jsx)(O.Stack.Item,{children:Object(w.jsxs)(O.Text,{size:"xxxxl",children:[Object(w.jsx)("strong",{children:"ResearchGate"})," ",Object(w.jsx)("br",{}),"is better on the app"]})}),Object(w.jsx)(O.Stack.Item,{children:Object(w.jsx)("div",Object(b.a)(Object(b.a)({},C("figures")),{},{children:Object(w.jsxs)(O.Stack,{gutter:"none",children:[Object(w.jsx)(O.Stack.Item,{children:Object(w.jsxs)(O.Text,{spacing:"auto",size:"l",children:[Object(w.jsx)(O.Icon,{identifier:"arrow-tail-right"})," Access"," ",Object(w.jsx)("strong",{children:"150+ million"})," publication pages and"," ",Object(w.jsx)("strong",{children:"20+ million"})," researcher profiles"]})}),Object(w.jsx)(O.Stack.Item,{children:Object(w.jsxs)(O.Text,{spacing:"auto",size:"l",children:[Object(w.jsx)(O.Icon,{identifier:"arrow-tail-right"})," ",Object(g.a)(()=>["Download full-texts and read them later."])]})})]})}))})]})})]}),Object(w.jsx)("div",Object(b.a)(Object(b.a)({},C("app-preview-container")),{},{children:Object(w.jsx)("img",Object(b.a)({src:a?y:v,alt:"ResearchGate app preview",height:"100%"},C("app-preview")))}))]})),Object(w.jsx)(P,{onBannerClick:()=>{null==o||o(n)},platformType:r})]}))}))};let A,D,E=e=>e;t.a=Object(o.a)(Object(r.b)(),Object(i.withQuery)(Object(i.gql)(A||(A=E`query IosAcquisitionMobilePromo($accountId: ID!) {
  account(id: $accountId) {
    id
    flags {
      isAppAcquisitionInterstitialPromoVisible
      __typename
    }
    experiments {
      mobileApp {
        iosAcquisitionPromoExperiment {
          selectedVariant
          goal
          iosAcquisitionPromoBannerLoaded: milestone(name: "iosAcquisitionPromoBannerLoaded")
          iosAcquisitionPromoInterstitialLoaded: milestone(name: "iosAcquisitionPromoInterstitialLoaded")
          iosAcquisitionPromoInterstitialClosed: milestone(name: "iosAcquisitionPromoInterstitialClosed")
          __typename
        }
        __typename
      }
      __typename
    }
    isEnableMobileAppAcquisitionPromosEnabled: isFeatureFlagActive(featureName: "enableMobileAppAcquisitionPromos")
    __typename
  }
  __typename
}
`)),{mapDataToProps:({account:e})=>{var t,n,i,o,r,s,a,c,l,d,u,p,h,b,m,j;return{selectedVariant:null==e||null===(t=e.experiments)||void 0===t||null===(n=t.mobileApp)||void 0===n||null===(i=n.iosAcquisitionPromoExperiment)||void 0===i?void 0:i.selectedVariant,goal:null==e||null===(o=e.experiments)||void 0===o||null===(r=o.mobileApp)||void 0===r||null===(s=r.iosAcquisitionPromoExperiment)||void 0===s?void 0:s.goal,iosAcquisitionPromoBannerLoaded:null==e||null===(a=e.experiments)||void 0===a||null===(c=a.mobileApp)||void 0===c||null===(l=c.iosAcquisitionPromoExperiment)||void 0===l?void 0:l.iosAcquisitionPromoBannerLoaded,iosAcquisitionPromoInterstitialLoaded:null==e||null===(d=e.experiments)||void 0===d||null===(u=d.mobileApp)||void 0===u||null===(p=u.iosAcquisitionPromoExperiment)||void 0===p?void 0:p.iosAcquisitionPromoInterstitialLoaded,iosAcquisitionPromoInterstitialClosed:null==e||null===(h=e.experiments)||void 0===h||null===(b=h.mobileApp)||void 0===b||null===(m=b.iosAcquisitionPromoExperiment)||void 0===m?void 0:m.iosAcquisitionPromoInterstitialClosed,isAppAcquisitionInterstitialPromoVisible:null==e||null===(j=e.flags)||void 0===j?void 0:j.isAppAcquisitionInterstitialPromoVisible,isEnableMobileAppAcquisitionPromosEnabled:null==e?void 0:e.isEnableMobileAppAcquisitionPromosEnabled}}}),Object(i.withQuery)(Object(i.gql)(D||(D=E`query IosAcquisitionMobilePromo_Url {
  urlGenerator {
    mobileApp {
      androidAppAcquisitionPromo: androidDownloadUrl(useCase: APP_ACQUISITION_PROMO)
      iosAppAcquisitionPromo: iosDownloadUrl(useCase: APP_ACQUISITION_PROMO)
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({urlGenerator:e})=>{var t,n;return{androidAppDownloadUrl:null==e||null===(t=e.mobileApp)||void 0===t?void 0:t.androidAppAcquisitionPromo,iosDownloadUrl:null==e||null===(n=e.mobileApp)||void 0===n?void 0:n.iosAppAcquisitionPromo}}}))(({selectedVariant:e,goal:t,accountId:n,iosAcquisitionPromoInterstitialLoaded:i,iosAcquisitionPromoInterstitialClosed:o,iosAcquisitionPromoBannerLoaded:r,nativeAppRecruitmentBannerIOSWidgetId:l,iosDownloadUrl:d,androidAppDownloadUrl:b,mutate:m,isAppAcquisitionInterstitialPromoVisible:j,isEnableMobileAppAcquisitionPromosEnabled:f})=>{const O=e===p?b:d,g=e=>{m(u(n)).then(()=>{Object(s.l)(e)}).catch(a.default)},x=e=>{m(u(n)).then(()=>{Object(s.l)(e,[],{interstitial:1}),Object(c.c)(O)}).catch(a.default)};return j?Object(w.jsx)(k,{dismissedMilestone:o,getAppGoal:t,renderedMilestone:i,onClose:g,onInstallApp:x,platformType:e,showAlternativeImage:f}):l?Object(w.jsx)(h.a,{widgetId:l,iosAcquisitionPromoBannerLoaded:r,platformType:e}):null})},975:function(e,t,n){"use strict";var i=n(4),o=n(5),r=n(7),s=n(6),a=n(14),c=n(20),l=n(13);let d,u=e=>e;var p=e=>({mutation:Object(o.gql)(d||(d=u`mutation DismissAppDownloadInterstitial($id: ID!) {
  dismissAppDownloadInterstitial(id: $id) {
    id
    promos {
      isAppDownloadInterstitialVisible
      isAppDownloadToasterVisible
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e},optimisticResponse:{dismissAppDownloadInterstitial:{__typename:"Account",id:e,promos:{isAppDownloadInterstitialVisible:!1}}}});let h,b=e=>e;var m=e=>({mutation:Object(o.gql)(h||(h=b`mutation DismissAppDownloadToaster($id: ID!) {
  dismissAppDownloadToaster(id: $id) {
    id
    promos {
      isAppDownloadToasterVisible
      __typename
    }
    __typename
  }
  __typename
}
`)),variables:{id:e},optimisticResponse:{dismissAppDownloadToaster:{__typename:"Account",id:e,promos:{isAppDownloadToasterVisible:!1}}}}),j=n(2),f=n(8),O=n.n(f),g=n(1),x=n(43),y=IMAGES_STATIC_URL+"m/4370188472710256/images/mobileapp/app-download-android.png",v=IMAGES_STATIC_URL+"m/4422292720810403/images/mobileapp/app-download-ios.png",I=IMAGES_STATIC_URL+"m/41681557974616273/images/mobileapp/app-screenshot.png",_=IMAGES_STATIC_URL+"m/435370385411094/images/mobileapp/qr-code.png",w=(n(1251),n(0));const S=new O.a("app-download-interstitial");var P=({urlIos:e,urlAndroid:t,onClose:n,onClickIos:o,onClickAndroid:r})=>{Object(i.useLayoutEffect)(()=>(document.body.classList.add("nova-has-modal"),document.documentElement.classList.add("nova-has-modal"),()=>{document.body.classList.remove("nova-has-modal"),document.documentElement.classList.remove("nova-has-modal")}),[]);const s={badge:Object(x.a)(()=>["NEW FOR ANDROID"]),line1:Object(x.a)(()=>["Don’t miss new research"]),line2:Object(x.a)(()=>["with the ResearchGate app"]),line3:Object(x.a)(()=>["Download it now to discover new research anytime and get updates about your work — all on the go."]),line4:Object(x.a)(()=>["Scan the QR code to download the app. Available now for Android and iOS."])};return Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("background")),{},{onClick:n,children:Object(w.jsxs)("div",Object(j.a)(Object(j.a)({},S("container")),{},{onClick:e=>{e.stopPropagation()},children:[Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("top-with-close-button")),{},{children:Object(w.jsx)(g.Button,{onClick:n,theme:"bare",color:"black",size:"l",children:Object(w.jsx)(g.Button.Icon,{identifier:"close"})})})),Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("main-content")),{},{children:Object(w.jsxs)(g.Flex,{justifyContent:"space-between",alignItems:"flex-start",gutter:"l",children:[Object(w.jsx)(g.Flex.Item,{children:Object(w.jsxs)(g.Stack,{gutter:"s",children:[Object(w.jsx)(g.Stack.Item,{children:Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("badge")),{},{children:s.badge}))}),Object(w.jsx)(g.Stack.Item,{children:Object(w.jsx)(g.Heading,{children:Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("line1")),{},{children:s.line1}))})}),Object(w.jsx)(g.Stack.Item,{children:Object(w.jsx)(g.Heading,{children:Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("line2")),{},{children:s.line2}))})}),Object(w.jsx)(g.Stack.Item,{children:Object(w.jsx)(g.Text,{children:Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("line3")),{},{children:s.line3}))})}),Object(w.jsx)(g.Stack.Item,{children:Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("buttons")),{},{children:Object(w.jsxs)(g.Flex,{alignItems:"flex-end",gutter:"m",children:[Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("img",{src:_,alt:"QR code for downloading the app",width:"136"})}),Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("a",{href:t,onClick:r,rel:"noopener",target:"_blank",children:Object(w.jsx)("img",{src:y,alt:"Get it on Google Play",height:"40"})})}),Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("a",{href:e,onClick:o,rel:"noopener",target:"_blank",children:Object(w.jsx)("img",{src:v,alt:"Download on the App Store",height:"40"})})})]})}))}),Object(w.jsx)(g.Stack.Item,{children:Object(w.jsx)(g.Text,{children:Object(w.jsx)("div",Object(j.a)(Object(j.a)({},S("line4")),{},{children:s.line4}))})})]})}),Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("img",{src:I,alt:"ResearchGate app preview",width:"340"})})]})}))]}))}))},C=IMAGES_STATIC_URL+"m/432916531179384/images/mobileapp/app-download-toaster-qr-code.svg";n(1252);const k=new O.a("app-download-toaster");var A=({urlIos:e,urlAndroid:t,onClose:n,onClickIos:i,onClickAndroid:o})=>Object(w.jsxs)("div",Object(j.a)(Object(j.a)({},k()),{},{children:[Object(w.jsx)("div",Object(j.a)(Object(j.a)({},k("close-button")),{},{children:Object(w.jsx)(g.Button,{onClick:n,theme:"bare",color:"black",size:"s",children:Object(w.jsx)(g.Button.Icon,{identifier:"close"})})})),Object(w.jsx)("div",Object(j.a)(Object(j.a)({},k("container")),{},{children:Object(w.jsxs)(g.Flex,{alignItems:"center",gutter:"s",children:[Object(w.jsxs)(g.Flex.Item,{grow:!0,children:[Object(w.jsx)(g.Heading,{color:"grey-900",size:"xl",spacing:"xs",children:Object(x.a)(()=>["Available now for Android and iOS"])}),Object(w.jsx)(g.Text,{color:"grey-900",size:"m",children:Object(x.a)(()=>["Scan the QR code to download the ResearchGate app"])})]}),Object(w.jsx)(g.Flex.Item,{children:Object(w.jsxs)(g.Flex,{alignItems:"center",gutter:"s",children:[Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("img",{src:C,alt:"QR code for downloading the app",width:76,height:76})}),Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("a",{href:t,onClick:o,rel:"noopener",target:"_blank",children:Object(w.jsx)("img",{src:y,alt:"Get it on Google Play",height:"40"})})}),Object(w.jsx)(g.Flex.Item,{children:Object(w.jsx)("a",{href:e,onClick:i,rel:"noopener",target:"_blank",children:Object(w.jsx)("img",{src:v,alt:"Download on the App Store",height:"40"})})})]})})]})}))]}));let D;t.a=Object(r.a)(Object(s.b)(),Object(o.withQuery)(Object(o.gql)(D||(D=(e=>e)`query AppDownloadPromos {
  viewer {
    account {
      id
      promos {
        isAppDownloadInterstitialVisible
        isAppDownloadToasterVisible
        __typename
      }
      experiments {
        mobileApp {
          appDownloadPromos {
            goal
            viewInterstitial: milestone(name: "appDownloadInterstitialView")
            closeInterstitial: milestone(name: "appDownloadInterstitialClose")
            clickIosInterstitial: milestone(name: "appDownloadInterstitialIos")
            clickAndroidInterstitial: milestone(name: "appDownloadInterstitialAndroid")
            viewToaster: milestone(name: "appDownloadToasterView")
            closeToaster: milestone(name: "appDownloadToasterClose")
            clickIosToaster: milestone(name: "appDownloadToasterIos")
            clickAndroidToaster: milestone(name: "appDownloadToasterAndroid")
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    urlGenerator {
      mobileApp {
        androidInterstitial: androidDownloadUrl(useCase: APP_DOWNLOAD_INTERSTITIAL)
        androidToaster: androidDownloadUrl(useCase: APP_DOWNLOAD_TOASTER)
        iosInterstitial: iosDownloadUrl(useCase: APP_DOWNLOAD_INTERSTITIAL)
        iosToaster: iosDownloadUrl(useCase: APP_DOWNLOAD_TOASTER)
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
`)),{mapDataToProps:({viewer:{account:e,urlGenerator:t}})=>{var n,i,o,r,s,a,c,l;return{accountId:null==e?void 0:e.id,isInterstitialVisible:null==e||null===(n=e.promos)||void 0===n?void 0:n.isAppDownloadInterstitialVisible,isToasterVisible:null==e||null===(i=e.promos)||void 0===i?void 0:i.isAppDownloadToasterVisible,experiment:null==e||null===(o=e.experiments)||void 0===o||null===(r=o.mobileApp)||void 0===r?void 0:r.appDownloadPromos,urlAndroidInterstitial:null==t||null===(s=t.mobileApp)||void 0===s?void 0:s.androidInterstitial,urlAndroidToaster:null==t||null===(a=t.mobileApp)||void 0===a?void 0:a.androidToaster,urlIosInterstitial:null==t||null===(c=t.mobileApp)||void 0===c?void 0:c.iosInterstitial,urlIosToaster:null==t||null===(l=t.mobileApp)||void 0===l?void 0:l.iosToaster}}}))(({disableInterstitial:e,disableToaster:t,accountId:n,isInterstitialVisible:o,isToasterVisible:r,experiment:s,urlAndroidInterstitial:d,urlAndroidToaster:u,urlIosInterstitial:h,urlIosToaster:b,mutate:j})=>{Object(i.useEffect)(()=>{!e&&o&&Object(a.a)(s.viewInterstitial),!t&&r&&Object(a.a)(s.viewToaster)},[e,t,o,r,s]);const f=(e,t)=>()=>j(e(n)).then(()=>Object(a.a)(t)).catch(c.default),O=(e,t,i)=>o=>{o.preventDefault(),j(t(n)).then(()=>{Object(a.g)([i,s.goal]),Object(l.c)(e)}).catch(c.default)},g={interstitial:{close:f(p,s.closeInterstitial),click:{ios:O(h,p,s.clickIosInterstitial),android:O(d,p,s.clickAndroidInterstitial)}},toaster:{close:f(m,s.closeToaster),click:{ios:O(b,m,s.clickIosToaster),android:O(u,m,s.clickAndroidToaster)}}};return Object(w.jsxs)(w.Fragment,{children:[!e&&o&&Object(w.jsx)(P,{urlIos:h,urlAndroid:d,onClose:g.interstitial.close,onClickIos:g.interstitial.click.ios,onClickAndroid:g.interstitial.click.android}),!t&&r&&Object(w.jsx)(A,{urlIos:b,urlAndroid:u,onClose:g.toaster.close,onClickIos:g.toaster.click.ios,onClickAndroid:g.toaster.click.android})]})})},98:function(e,t,n){var i=n(394),o=n(30);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},984:function(e,t,n){"use strict";var i=n(3),o=n.n(i);o.a.shape({shown:o.a.bool.isRequired,title:o.a.string,description:o.a.string,context:o.a.string,UIDs:o.a.array.isRequired})}},[[5374,1,2,0,3,5]]]);