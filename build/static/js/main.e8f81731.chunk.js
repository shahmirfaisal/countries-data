(this["webpackJsonpcountries-data"]=this["webpackJsonpcountries-data"]||[]).push([[0],{33:function(e,t,n){e.exports={Header:"Header_Header__3Oxol"}},34:function(e,t,n){e.exports={Search:"Search_Search__1Tn8r"}},35:function(e,t,n){e.exports={Input:"Input_Input__rDncH"}},37:function(e,t,n){e.exports={Filter:"Filter_Filter__2bwiK"}},38:function(e,t,n){e.exports={Countries:"Countries_Countries__3TBD6"}},39:function(e,t,n){e.exports={Country:"Country_Country__2QNKg"}},41:function(e,t,n){e.exports={Spinner:"Spinner_Spinner__2cdPI","lds-ring":"Spinner_lds-ring__36aWR"}},44:function(e,t,n){e.exports=n(76)},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l),o=(n(49),n(22)),u=n(33),i=n.n(u),s=function(){var e=Object(a.useState)("dark"),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)("Dark Mode"),u=Object(o.a)(c,2),s=u[0],m=u[1],f=function(e,t,n){var a=document.querySelector(":root");a.style.setProperty("--bg-color",e),a.style.setProperty("--section-color",t),a.style.setProperty("--text-color",n)};return r.a.createElement("header",{className:i.a.Header},r.a.createElement("h1",null,"Where in the world?"),r.a.createElement("h5",{onClick:function(){"dark"===n?(f("hsl(207, 26%, 17%)","hsl(209, 23%, 22%)","rgb(245,245,245)"),l("light"),m("Light Mode")):(f("rgba(245, 245, 245)","white","rgb(26, 26, 26)"),l("dark"),m("Dark Mode"))}},r.a.createElement("i",{className:"far fa-moon"}),s))},m=n(34),f=n.n(m),E=n(35),p=n.n(E),d=n(5),y=Object(d.b)(null,(function(e){return{filterDataByName:function(t){return e({type:"FILTER_NAME",name:t})}}}))((function(e){var t=e.filterDataByName;return r.a.createElement("div",{className:p.a.Input},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{onChange:function(e){var n=e.target.value;t(n)},type:"text",placeholder:"Search for a country..."}))})),_=n(37),g=n.n(_),C=Object(d.b)(null,(function(e){return{filterByRegion:function(t){return e({type:"FILTER_REGION",region:t})}}}))((function(e){var t=e.filterByRegion;return r.a.createElement("select",{onChange:function(e){var n=e.target.value;t(n)},className:g.a.Filter},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Africa"),r.a.createElement("option",null,"Asia"),r.a.createElement("option",null,"America"),r.a.createElement("option",null,"Europe"),r.a.createElement("option",null,"Oceania"),r.a.createElement("option",{selected:!0,disabled:!0,hidden:!0},"Filter by Region"))})),h=function(){return r.a.createElement("section",{className:f.a.Search},r.a.createElement(y,null),r.a.createElement(C,null))},b=n(38),v=n.n(b),N=n(39),O=n.n(N),F=n(8),j=function(e){var t=e.country,n=Object(F.f)();return r.a.createElement("div",{className:O.a.Country,onClick:function(){n.push("/country_".concat(t.name.toLowerCase()))}},r.a.createElement("header",null,r.a.createElement("img",{src:t.flag,alt:"".concat(t.name," Flag")})),r.a.createElement("div",null,r.a.createElement("h3",null,t.name),r.a.createElement("p",null,r.a.createElement("span",null,"Population: "),t.population),r.a.createElement("p",null,r.a.createElement("span",null,"Region: "),t.region),r.a.createElement("p",null,r.a.createElement("span",null,"Capital: "),t.capital)))},T=n(41),k=n.n(T),R=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:k.a.Spinner},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("p",{style:{textAlign:"center",fontWeight:"600",fontSize:"1.5rem"}},"Loading..."))},S=n(42),w=n.n(S),L=Object(d.b)((function(e){return{countries:e.filterCountries}}),(function(e){return{resetCountries:function(){return e({type:"RESET_COUNTRIES"})}}}))((function(e){var t=e.countries,n=e.resetCountries;return Object(a.useEffect)((function(){return function(){return n()}}),[]),r.a.createElement("section",{className:v.a.Countries},t?t.map((function(e,t){return r.a.createElement(w.a,{key:t},r.a.createElement(j,{country:e}))})):r.a.createElement(R,null))})),D=n(16),A=n.n(D),I=n(9),x=n.n(I),B=Object(d.b)((function(e){return{country:e.fullCountry}}),(function(e){return{fetchData:function(t){return e(function(e){return function(t){A.a.get("name/".concat(e)).then((function(e){var n=e.data;t({type:"FETCH_FULL_COUNTRY",data:n[0]})})).catch((function(e){return console.log(e)}))}}(t))},removeData:function(){return e({type:"REMOVE_DATA"})}}}))((function(e){var t=e.fetchData,n=e.country,l=e.removeData,c=Object(F.g)(),o=Object(F.f)();return Object(a.useEffect)((function(){return t(c.country),function(){return l()}}),[]),r.a.createElement("section",{className:x.a.FullCountry},r.a.createElement("button",{className:x.a.back,onClick:function(){return o.goBack()}},r.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),"Back"),n?r.a.createElement("div",null,r.a.createElement("div",{className:x.a.body},r.a.createElement("div",{className:x.a.img},r.a.createElement("img",{src:n.flag,alt:n.name})),r.a.createElement("div",{className:x.a.info},r.a.createElement("h3",null,n.name),r.a.createElement("div",{className:x.a.furtherInfo},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Native Name: "),n.nativeName),r.a.createElement("p",null,r.a.createElement("span",null,"Population: "),n.population),r.a.createElement("p",null,r.a.createElement("span",null,"Region: "),n.region),r.a.createElement("p",null,r.a.createElement("span",null,"Sub Region: "),n.subregion),r.a.createElement("p",null,r.a.createElement("span",null,"Capital: "),n.capital)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Top Level Domain: "),n.topLevelDomain[0]),r.a.createElement("p",null,r.a.createElement("span",null,"Currencies: "),n.currencies.map((function(e,t){return r.a.createElement("span",{key:t},e.name," ")}))),r.a.createElement("p",null,r.a.createElement("span",null,"Languages: "),n.languages.map((function(e,t){return r.a.createElement("span",{key:t},e.name," ")}))))),r.a.createElement("div",{className:x.a.border},r.a.createElement("p",null,"Border Countries: "),r.a.createElement("div",null,n.borders.length?n.borders.map((function(e,t){return r.a.createElement("button",{key:t},e)})):r.a.createElement("span",{style:{fontSize:"1.4rem",marginTop:"1rem",display:"inline-block"}},"None")))))):r.a.createElement(R,null))})),H=function(){return r.a.createElement("section",{style:{textAlign:"center",marginTop:"5rem"}},r.a.createElement("h2",{style:{fontSize:"5rem"}},"404"),r.a.createElement("h3",{style:{fontSize:"2rem",fontWeight:600,opacity:.9}},"Page Not Found."))},M=Object(d.b)(null,(function(e){return{fetchData:function(){return e((function(e){A.a.get("/all").then((function(t){var n=t.data;e({type:"FETCH_DATA",data:n})})).catch((function(e){return console.log(e)}))}))}}}))((function(e){var t=e.fetchData;return Object(a.useEffect)((function(){t()}),[]),r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",exact:!0,render:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(L,null))}}),r.a.createElement(F.a,{path:"/country_:country",component:B}),r.a.createElement(F.a,{component:H})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(13),W=n(10),P={fullCountries:null,filterCountries:null,fullCountry:null},z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_DATA":return Object(W.a)({},t,{fullCountries:n.data,filterCountries:n.data});case"FILTER_NAME":return e=t.fullCountries.filter((function(e){return e.name.toLowerCase().startsWith(n.name.toLowerCase())})),Object(W.a)({},t,{filterCountries:e});case"FILTER_REGION":return"All"===n.region?Object(W.a)({},t,{filterCountries:t.fullCountries}):(e=t.fullCountries.filter((function(e){return e.region.toLowerCase().startsWith(n.region.toLowerCase())})),Object(W.a)({},t,{filterCountries:e}));case"FETCH_FULL_COUNTRY":return Object(W.a)({},t,{fullCountry:n.data});case"REMOVE_DATA":return Object(W.a)({},t,{fullCountry:null});case"RESET_COUNTRIES":return Object(W.a)({},t,{filterCountries:t.fullCountries})}return t},G=n(15),J=n(43);A.a.defaults.baseURL="https://restcountries.eu/rest/v2";var K=Object(G.c)(z,Object(G.a)(J.a));c.a.render(r.a.createElement(d.a,{store:K},r.a.createElement(U.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports={FullCountry:"FullCountry_FullCountry__jN5wf",back:"FullCountry_back__3GHB4",body:"FullCountry_body__1oBtp",img:"FullCountry_img__2t_UK",info:"FullCountry_info__3-aJv",furtherInfo:"FullCountry_furtherInfo__2cp_1",border:"FullCountry_border__1Mfsu"}}},[[44,1,2]]]);
//# sourceMappingURL=main.e8f81731.chunk.js.map