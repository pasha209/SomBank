(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{n0d4:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),s=function(){return function(){}}(),e=u("pMnS"),a=u("Ip0R"),i=u("gIcY"),o=u("6P3b"),b=function(){function l(l){this.multi=l}return l.prototype.ngOnInit=function(){var l=this;this.lang=this.multi.lang,this.getContent(this.lang),this.multi.tlang.subscribe(function(n){l.lang=n,l.getContent(n)})},l.prototype.getContent=function(l){"eng"===l?this.content=this.multi.tplusPageContent.eng:"som"===l?this.content=this.multi.tplusPageContent.som:"arb"===l&&(this.content=this.multi.tplusPageContent.arb)},l.prototype.onSubmit=function(l){this.multi.onSubmit(l,this.lang)},l}(),r=t.ob({encapsulation:2,styles:[],data:{}});function c(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,81,"section",[["class","clearfix"],["id","intro"],["style","background-image:url(../assets/img/bg.png)"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,80,"div",[["class","container d-flex h-100"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,79,"div",[["class","row justify-content-center align-self-center extra-space"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,75,"div",[["class","col-md-6 intro-info order-md-first order-last align-self-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,8,"h2",[],null,null,null,null,null)),t.pb(5,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(6,{arabicSH:0}),(l()(),t.Fb(7,null,["",""])),(l()(),t.qb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.qb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Fb(10,null,["",""])),(l()(),t.qb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Fb(12,null,[" ",""])),(l()(),t.qb(13,0,null,null,65,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var s=!0,e=l.component;return"submit"===n&&(s=!1!==t.zb(l,15).onSubmit(u)&&s),"reset"===n&&(s=!1!==t.zb(l,15).onReset()&&s),"ngSubmit"===n&&(s=!1!==e.onSubmit(t.zb(l,15))&&s),s},null,null)),t.pb(14,16384,null,0,i.s,[],null,null),t.pb(15,4210688,[["f",4]],0,i.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Cb(2048,null,i.b,null,[i.l]),t.pb(17,16384,null,0,i.k,[[4,i.b]],null,null),(l()(),t.qb(18,0,null,null,60,"div",[],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,13,"div",[["class","form-row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,12,"div",[["class","col-9"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,11,"input",[["class","form-control custom-remove-border"],["email",""],["maxlength","50"],["name","email"],["ngModel",""],["placeholder","email@test.com"],["required",""],["type","email"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var s=!0;return"input"===n&&(s=!1!==t.zb(l,24)._handleInput(u.target.value)&&s),"blur"===n&&(s=!1!==t.zb(l,24).onTouched()&&s),"compositionstart"===n&&(s=!1!==t.zb(l,24)._compositionStart()&&s),"compositionend"===n&&(s=!1!==t.zb(l,24)._compositionEnd(u.target.value)&&s),s},null,null)),t.pb(22,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(23,{"custom-form-control":0}),t.pb(24,16384,null,0,i.c,[t.E,t.k,[2,i.a]],null,null),t.pb(25,16384,null,0,i.o,[],{required:[0,"required"]},null),t.pb(26,540672,null,0,i.f,[],{maxlength:[0,"maxlength"]},null),t.pb(27,16384,null,0,i.d,[],{email:[0,"email"]},null),t.Cb(1024,null,i.g,function(l,n,u){return[l,n,u]},[i.o,i.f,i.d]),t.Cb(1024,null,i.h,function(l){return[l]},[i.c]),t.pb(30,671744,[["email",4]],0,i.m,[[2,i.b],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},null),t.Cb(2048,null,i.i,null,[i.m]),t.pb(32,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),t.qb(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,37,"div",[["class","form-row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(35,0,null,null,24,"div",[["class","col-3"]],null,null,null,null,null)),(l()(),t.qb(36,0,null,null,23,"select",[["class","custom-select mr-sm-2 custom-remove-border"],["name","ext"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var s=!0;return"change"===n&&(s=!1!==t.zb(l,37).onChange(u.target.value)&&s),"blur"===n&&(s=!1!==t.zb(l,37).onTouched()&&s),s},null,null)),t.pb(37,16384,null,0,i.p,[t.E,t.k],null,null),t.pb(38,16384,null,0,i.o,[],{required:[0,"required"]},null),t.Cb(1024,null,i.g,function(l){return[l]},[i.o]),t.Cb(1024,null,i.h,function(l){return[l]},[i.p]),t.pb(41,671744,[["ext",4]],0,i.m,[[2,i.b],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},null),t.Cb(2048,null,i.i,null,[i.m]),t.pb(43,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),t.qb(44,0,null,null,3,"option",[["value","+91"]],null,null,null,null,null)),t.pb(45,147456,null,0,i.n,[t.k,t.E,[2,i.p]],{value:[0,"value"]},null),t.pb(46,147456,null,0,i.u,[t.k,t.E,[8,null]],{value:[0,"value"]},null),(l()(),t.Fb(-1,null,["+91"])),(l()(),t.qb(48,0,null,null,3,"option",[["value","+252"]],null,null,null,null,null)),t.pb(49,147456,null,0,i.n,[t.k,t.E,[2,i.p]],{value:[0,"value"]},null),t.pb(50,147456,null,0,i.u,[t.k,t.E,[8,null]],{value:[0,"value"]},null),(l()(),t.Fb(-1,null,["+252"])),(l()(),t.qb(52,0,null,null,3,"option",[["value","+1"]],null,null,null,null,null)),t.pb(53,147456,null,0,i.n,[t.k,t.E,[2,i.p]],{value:[0,"value"]},null),t.pb(54,147456,null,0,i.u,[t.k,t.E,[8,null]],{value:[0,"value"]},null),(l()(),t.Fb(-1,null,["+1"])),(l()(),t.qb(56,0,null,null,3,"option",[["value","+6"]],null,null,null,null,null)),t.pb(57,147456,null,0,i.n,[t.k,t.E,[2,i.p]],{value:[0,"value"]},null),t.pb(58,147456,null,0,i.u,[t.k,t.E,[8,null]],{value:[0,"value"]},null),(l()(),t.Fb(-1,null,["+6"])),(l()(),t.qb(60,0,null,null,11,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.qb(61,0,null,null,10,"input",[["class","form-control custom-remove-border"],["name","cell"],["ngModel",""],["placeholder","Mobile Number"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var s=!0;return"input"===n&&(s=!1!==t.zb(l,64)._handleInput(u.target.value)&&s),"blur"===n&&(s=!1!==t.zb(l,64).onTouched()&&s),"compositionstart"===n&&(s=!1!==t.zb(l,64)._compositionStart()&&s),"compositionend"===n&&(s=!1!==t.zb(l,64)._compositionEnd(u.target.value)&&s),"change"===n&&(s=!1!==t.zb(l,65).onChange(u.target.value)&&s),"input"===n&&(s=!1!==t.zb(l,65).onChange(u.target.value)&&s),"blur"===n&&(s=!1!==t.zb(l,65).onTouched()&&s),s},null,null)),t.pb(62,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(63,{"custom-form-control":0}),t.pb(64,16384,null,0,i.c,[t.E,t.k,[2,i.a]],null,null),t.pb(65,16384,null,0,i.r,[t.E,t.k],null,null),t.pb(66,16384,null,0,i.o,[],{required:[0,"required"]},null),t.Cb(1024,null,i.g,function(l){return[l]},[i.o]),t.Cb(1024,null,i.h,function(l,n){return[l,n]},[i.c,i.r]),t.pb(69,671744,[["cell",4]],0,i.m,[[2,i.b],[6,i.g],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},null),t.Cb(2048,null,i.i,null,[i.m]),t.pb(71,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),t.qb(72,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.qb(73,0,null,null,5,"div",[["class","form-row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(74,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.qb(75,0,null,null,3,"button",[["class","btn btn-primary form-control"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),t.pb(76,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(77,{"arabicH4-center":0}),(l()(),t.Fb(78,null,[" "," "])),(l()(),t.qb(79,0,null,null,2,"div",[["class","col-md-6 intro-info order-md-last order-first"]],null,null,null,null,null)),(l()(),t.qb(80,0,null,null,1,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(81,0,null,null,0,"img",[["alt",""],["class","custom-img-fluid img-fluid"],["src","../../assets/img/slider-t-plus-anim.gif"]],null,null,null,null,null)),(l()(),t.qb(82,0,null,null,54,"main",[["id","main"]],null,null,null,null,null)),(l()(),t.qb(83,0,null,null,53,"section",[["id","features"]],null,null,null,null,null)),(l()(),t.qb(84,0,null,null,52,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.qb(85,0,null,null,12,"div",[["class","row feature-item"]],null,null,null,null,null)),(l()(),t.qb(86,0,null,null,8,"div",[["class","col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r"]],null,null,null,null,null)),(l()(),t.qb(87,0,null,null,3,"h3",[],null,null,null,null,null)),t.pb(88,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(89,{arabicH4:0}),(l()(),t.Fb(90,null,[" "," "])),(l()(),t.qb(91,0,null,null,3,"p",[],null,null,null,null,null)),t.pb(92,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(93,{arabicP:0}),(l()(),t.Fb(94,null,[" "," "])),(l()(),t.qb(95,0,null,null,2,"div",[["class","col-lg-6 wow fadeInUp"]],null,null,null,null,null)),(l()(),t.qb(96,0,null,null,1,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(97,0,null,null,0,"img",[["alt",""],["class","custom-img-fluid-business img-fluid"],["src","https://assets.revolut.com/media/business/step1-9.png"]],null,null,null,null,null)),(l()(),t.qb(98,0,null,null,12,"div",[["class","row feature-item extra-space"]],null,null,null,null,null)),(l()(),t.qb(99,0,null,null,8,"div",[["class","col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r"]],null,null,null,null,null)),(l()(),t.qb(100,0,null,null,3,"h3",[],null,null,null,null,null)),t.pb(101,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(102,{arabicH4:0}),(l()(),t.Fb(103,null,[" "," "])),(l()(),t.qb(104,0,null,null,3,"p",[],null,null,null,null,null)),t.pb(105,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(106,{arabicP:0}),(l()(),t.Fb(107,null,[" "," "])),(l()(),t.qb(108,0,null,null,2,"div",[["class","col-lg-6 wow fadeInUp"]],null,null,null,null,null)),(l()(),t.qb(109,0,null,null,1,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(110,0,null,null,0,"img",[["alt",""],["class","custom-img-fluid-business img-fluid"],["src","https://assets.revolut.com/media/business/step2-9.png"]],null,null,null,null,null)),(l()(),t.qb(111,0,null,null,12,"div",[["class","row feature-item extra-space"]],null,null,null,null,null)),(l()(),t.qb(112,0,null,null,8,"div",[["class","col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r"]],null,null,null,null,null)),(l()(),t.qb(113,0,null,null,3,"h3",[],null,null,null,null,null)),t.pb(114,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(115,{arabicH4:0}),(l()(),t.Fb(116,null,[" "," "])),(l()(),t.qb(117,0,null,null,3,"p",[],null,null,null,null,null)),t.pb(118,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(119,{arabicP:0}),(l()(),t.Fb(120,null,[" "," "])),(l()(),t.qb(121,0,null,null,2,"div",[["class","col-lg-6 wow fadeInUp"]],null,null,null,null,null)),(l()(),t.qb(122,0,null,null,1,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(123,0,null,null,0,"img",[["alt",""],["class","custom-img-fluid-business img-fluid"],["src","https://assets.revolut.com/media/business/step3-9.png"]],null,null,null,null,null)),(l()(),t.qb(124,0,null,null,12,"div",[["class","row feature-item extra-space"]],null,null,null,null,null)),(l()(),t.qb(125,0,null,null,8,"div",[["class","col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r"]],null,null,null,null,null)),(l()(),t.qb(126,0,null,null,3,"h3",[],null,null,null,null,null)),t.pb(127,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(128,{arabicH4:0}),(l()(),t.Fb(129,null,[" "," "])),(l()(),t.qb(130,0,null,null,3,"p",[],null,null,null,null,null)),t.pb(131,278528,null,0,a.h,[t.s,t.t,t.k,t.E],{ngClass:[0,"ngClass"]},null),t.Bb(132,{arabicP:0}),(l()(),t.Fb(133,null,[" "," "])),(l()(),t.qb(134,0,null,null,2,"div",[["class","col-lg-6 wow fadeInUp"]],null,null,null,null,null)),(l()(),t.qb(135,0,null,null,1,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.qb(136,0,null,null,0,"img",[["alt",""],["class","custom-img-fluid-business img-fluid"],["src","https://assets.revolut.com/media/business/step3-9.png"]],null,null,null,null,null))],function(l,n){var u=n.component,t=l(n,6,0,"som"===u.lang||"arb"===u.lang);l(n,5,0,t);var s=l(n,23,0,"som"===u.lang||"arb"===u.lang);l(n,22,0,"form-control custom-remove-border",s),l(n,25,0,""),l(n,26,0,"50"),l(n,27,0,""),l(n,30,0,"email",""),l(n,38,0,""),l(n,41,0,"ext","+252"),l(n,45,0,"+91"),l(n,46,0,"+91"),l(n,49,0,"+252"),l(n,50,0,"+252"),l(n,53,0,"+1"),l(n,54,0,"+1"),l(n,57,0,"+6"),l(n,58,0,"+6");var e=l(n,63,0,"som"===u.lang||"arb"===u.lang);l(n,62,0,"form-control custom-remove-border",e),l(n,66,0,""),l(n,69,0,"cell","");var a=l(n,77,0,"som"===u.lang||"arb"===u.lang);l(n,76,0,"btn btn-primary form-control",a);var i=l(n,89,0,"arb"===u.lang||"som"===u.lang);l(n,88,0,i);var o=l(n,93,0,"arb"===u.lang||"som"===u.lang);l(n,92,0,o);var b=l(n,102,0,"arb"===u.lang||"som"===u.lang);l(n,101,0,b);var r=l(n,106,0,"arb"===u.lang||"som"===u.lang);l(n,105,0,r);var c=l(n,115,0,"arb"===u.lang||"som"===u.lang);l(n,114,0,c);var g=l(n,119,0,"arb"===u.lang||"som"===u.lang);l(n,118,0,g);var d=l(n,128,0,"arb"===u.lang||"som"===u.lang);l(n,127,0,d);var m=l(n,132,0,"arb"===u.lang||"som"===u.lang);l(n,131,0,m)},function(l,n){var u=n.component;l(n,7,0,u.content.heading1),l(n,10,0,u.content.heading2),l(n,12,0,u.content.heading3),l(n,13,0,t.zb(n,17).ngClassUntouched,t.zb(n,17).ngClassTouched,t.zb(n,17).ngClassPristine,t.zb(n,17).ngClassDirty,t.zb(n,17).ngClassValid,t.zb(n,17).ngClassInvalid,t.zb(n,17).ngClassPending),l(n,21,0,t.zb(n,25).required?"":null,t.zb(n,26).maxlength?t.zb(n,26).maxlength:null,t.zb(n,32).ngClassUntouched,t.zb(n,32).ngClassTouched,t.zb(n,32).ngClassPristine,t.zb(n,32).ngClassDirty,t.zb(n,32).ngClassValid,t.zb(n,32).ngClassInvalid,t.zb(n,32).ngClassPending),l(n,36,0,t.zb(n,38).required?"":null,t.zb(n,43).ngClassUntouched,t.zb(n,43).ngClassTouched,t.zb(n,43).ngClassPristine,t.zb(n,43).ngClassDirty,t.zb(n,43).ngClassValid,t.zb(n,43).ngClassInvalid,t.zb(n,43).ngClassPending),l(n,61,0,t.zb(n,66).required?"":null,t.zb(n,71).ngClassUntouched,t.zb(n,71).ngClassTouched,t.zb(n,71).ngClassPristine,t.zb(n,71).ngClassDirty,t.zb(n,71).ngClassValid,t.zb(n,71).ngClassInvalid,t.zb(n,71).ngClassPending),l(n,75,0,t.zb(n,15).invalid),l(n,78,0,u.content.button),l(n,90,0,u.content.section1.heading),l(n,94,0,u.content.section1.content),l(n,103,0,u.content.section2.heading),l(n,107,0,u.content.section2.content),l(n,116,0,u.content.section3.heading),l(n,120,0,u.content.section3.content),l(n,129,0,u.content.section4.heading),l(n,133,0,u.content.section4.content)})}function g(l){return t.Gb(0,[(l()(),t.qb(0,0,null,null,1,"t-plus",[],null,null,null,c,r)),t.pb(1,114688,null,0,b,[o.a],null,null)],function(l,n){l(n,1,0)},null)}var d=t.mb("t-plus",b,g,{},{},[]),m=u("ZYCi"),p=function(){return function(){}}();u.d(n,"TPlusAccountModuleNgFactory",function(){return v});var v=t.nb(s,[],function(l){return t.xb([t.yb(512,t.j,t.cb,[[8,[e.a,d]],[3,t.j],t.x]),t.yb(4608,a.k,a.j,[t.u,[2,a.r]]),t.yb(4608,i.t,i.t,[]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,i.q,i.q,[]),t.yb(1073742336,i.e,i.e,[]),t.yb(1073742336,m.n,m.n,[[2,m.t],[2,m.k]]),t.yb(1073742336,p,p,[]),t.yb(1073742336,s,s,[]),t.yb(1024,m.i,function(){return[[{path:"",component:b}]]},[])])})}}]);