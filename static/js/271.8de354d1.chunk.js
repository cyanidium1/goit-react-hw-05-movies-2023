"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[271],{271:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(791),c=n(87),i=n(689),u="Search_form__U5vWD",o="Search_input__G1KLA",s=n(184),h=function(){var e,t=(0,c.lr)(),n=(0,r.Z)(t,2),h=n[0],l=n[1],f=null!==(e=h.get("search"))&&void 0!==e?e:"",m=(0,a.useState)([]),d=(0,r.Z)(m,2),p=d[0],j=d[1],x=(0,i.TH)();return(0,a.useEffect)((function(){if(""!==f){fetch("https://api.themoviedb.org/3/search/movie?query=".concat(f,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGE2YzA4YmYzNTFmY2Q4YWViMDRhOTQ3MmYxOWEyZSIsInN1YiI6IjY0YTM0MzkzZThkMDI4MDEzOTE2MWE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_uy0Y5amAn0DH7cfOOqT828mZRf10axAv84-OrLYlI"}}).then((function(e){return e.json()})).then((function(e){return j(e.results)})).catch((function(e){return console.error(e)}))}}),[f]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("form",{className:u,children:(0,s.jsx)("input",{className:o,type:"text",value:f,onChange:function(e){""===e.target.value?l({}):l({search:e.target.value})}})}),(0,s.jsx)("ul",{children:0===p.length?(0,s.jsx)("p",{children:"No matches"}):p.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:x},children:e.title})},e.id)}))})]})},l=function(){return(0,s.jsx)(h,{})}}}]);
//# sourceMappingURL=271.8de354d1.chunk.js.map