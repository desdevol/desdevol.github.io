import{a as d,r as v,b as w,e as x,f as C,h as k,i as r,w as S,j as z,o as c,k as _,u as e,c as g,l as I,t as A,m as B,I as D,p as b,q}from"./entry.77460e37.js";function N(){const s=d();return s._appConfig||(s._appConfig=v(w)),s._appConfig}const $=["width","height"],j=x({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(s){let o,h;const a=s,y=d(),p=N().nuxtIcon,l=C("icons",()=>({}),"$lO7JImsU4D"),u=k(!1),m=r(()=>{var t;return(t=l.value)==null?void 0:t[a.name]}),i=r(()=>y.vueApp.component(a.name)),n=r(()=>{const t=a.size||(p==null?void 0:p.size)||"1em";return String(Number(t))===t?`${t}px`:t});async function f(){var t;i.value||(t=l.value)!=null&&t[a.name]||(u.value=!0,l.value[a.name]=await b(a.name).catch(()=>{}),u.value=!1)}return S(()=>a.name,f),!i.value&&([o,h]=z(()=>f()),o=await o,h()),(t,E)=>u.value?(c(),_("span",{key:0,class:"icon",width:e(n),height:e(n)},null,8,$)):e(m)?(c(),g(e(D),{key:1,icon:e(m),class:"icon",width:e(n),height:e(n)},null,8,["icon","width","height"])):e(i)?(c(),g(I(e(i)),{key:2,class:"icon",width:e(n),height:e(n)},null,8,["width","height"])):(c(),_("span",{key:3,class:"icon",style:B({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},A(s.name),5))}}),H=q(j,[["__scopeId","data-v-3121a4a0"]]);export{H as default};
