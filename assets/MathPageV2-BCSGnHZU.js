import{d as N,aD as j,aE as V,c as m,o as u,a as e,J as A,aF as B,O as i,ak as J,K as D,P as Q,a6 as U,D as R,r as _,m as Y,M as S,Q as I,u as c,T as G,I as W,R as X,b as E,n as H,H as F,t as P}from"./vue-BG4hBqFv.js";import{d as Z,e as tt}from"./elementPlus-BIrCDVld.js";import{_ as et}from"./index-Cs2drSQK.js";const st={class:"space-y-6 text-left"},ot={class:"flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"},nt={class:"text-sm text-gray-500 dark:text-gray-400"},at={class:"flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"},rt=N({__name:"SettingsForm",props:j({digitMin:{},digitMax:{}},{operation:{},operationModifiers:{},digitLevel:{},digitLevelModifiers:{},questionCount:{},questionCountModifiers:{}}),emits:j(["start"],["update:operation","update:digitLevel","update:questionCount"]),setup(g,{emit:a}){const o=V(g,"operation"),d=V(g,"digitLevel"),l=V(g,"questionCount"),f=a;return(s,t)=>(u(),m("div",st,[e("div",null,[t[5]||(t[5]=e("label",{class:"block font-semibold mb-1"},"選擇練習項目：",-1)),A(e("select",{"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),class:"w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},t[4]||(t[4]=[e("option",{value:"+"},"加法",-1),e("option",{value:"-"},"減法",-1),e("option",{value:"*"},"乘法",-1),e("option",{value:"/"},"除法",-1)]),512),[[B,o.value]])]),e("div",ot,[t[7]||(t[7]=e("div",{class:"font-semibold min-w-[100px]"},"難度等級：",-1)),A(e("select",{"onUpdate:modelValue":t[1]||(t[1]=r=>d.value=r),class:"w-full sm:w-auto border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},t[6]||(t[6]=[e("option",{value:1},"🐣 1位數",-1),e("option",{value:2},"🐥 1~2位數",-1),e("option",{value:3},"✨ 2~3位數",-1),e("option",{value:4},"🚀 3~4位數",-1),e("option",{value:5},"🌟 4~5位數",-1),e("option",{value:6},"🔥 2~7位數（高手挑戰）",-1)]),512),[[B,d.value,void 0,{number:!0}]]),e("p",nt," 出題範圍："+i(s.digitMin)+" 位數 ～ "+i(s.digitMax)+" 位數 ",1)]),e("div",at,[t[8]||(t[8]=e("label",{class:"font-semibold sm:flex-shrink-0"},"題目數量（3～50）：",-1)),A(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=r=>l.value=r),min:"3",max:"50",class:"flex-1 border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},null,512),[[J,l.value,void 0,{number:!0}]])]),e("button",{onClick:t[3]||(t[3]=r=>f("start")),class:"w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg"}," 開始練習 ")]))}}),lt={class:"space-y-4 text-left"},it=["onUpdate:modelValue","disabled"],ut={class:"flex flex-col sm:flex-row justify-end gap-2 mt-4"},dt={key:0,class:"mt-4"},pt=N({__name:"QuestionList",props:{questions:{},submitted:{type:Boolean},correctCount:{},elapsedTime:{},formatTime:{type:Function}},emits:["end","restart"],setup(g,{emit:a}){const o=a,d=l=>l==="*"?"×":l==="/"?"÷":l;return(l,f)=>(u(),m("div",lt,[(u(!0),m(Q,null,U(l.questions,(s,t)=>(u(),m("div",{key:t,class:"flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2"},[e("span",null,i(t+1)+".",1),e("span",null,i(s.a)+" "+i(d(s.op))+" "+i(s.b)+" =",1),A(e("input",{type:"number","onUpdate:modelValue":r=>s.userAnswer=r,disabled:l.submitted,class:"w-full sm:w-24 p-2 text-base border rounded dark:bg-gray-800 dark:border-gray-600"},null,8,it),[[J,s.userAnswer]]),l.submitted?(u(),m("span",{key:0,class:R(s.correct?"text-green-500":"text-red-500")}," （"+i(s.correct?"正確":"錯誤")+"，答案："+i(s.answer)+"） ",3)):D("",!0)]))),128)),e("div",ut,[l.submitted?D("",!0):(u(),m("button",{key:0,onClick:f[0]||(f[0]=s=>o("end")),class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"}," 結束練習 ")),e("button",{onClick:f[1]||(f[1]=s=>o("restart")),class:"bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"},i(l.submitted?"重新開始":"重新選擇練習項目"),1)]),l.submitted?(u(),m("div",dt,[f[2]||(f[2]=e("h3",{class:"text-xl font-bold"},"批改結果：",-1)),e("p",null,"正確 "+i(l.correctCount)+" / "+i(l.questions.length)+" 題",1),e("p",null,"作答時間："+i(l.formatTime(l.elapsedTime)),1)])):D("",!0)]))}}),ct={class:"mt-6"},mt={class:"space-y-4 text-left"},gt={class:"flex justify-between items-center mb-2"},vt={class:"font-semibold text-lg"},ft={class:"text-sm text-gray-500"},bt={key:0,class:"ml-2 text-yellow-500"},yt={key:0,class:"mt-2"},xt=["onClick","aria-expanded"],ht={class:"flex items-center"},wt={class:"mt-2 space-y-1 text-sm"},kt={key:0},$t={key:1,class:"text-lg"},_t=["onClick","aria-expanded"],Mt={class:"flex items-center"},Ct=N({__name:"HistoryList",props:{history:{},formatTime:{type:Function}},setup(g){const a=g,o=_([]);Y(()=>{o.value=a.history.map((s,t)=>o.value[t]||!1)});const d=s=>{o.value[s]=!o.value[s]},l=(s,t)=>t>0?Math.round(s/t*100):0,f=s=>({"*":"×","/":"÷"})[s]||s;return(s,t)=>(u(),m("div",ct,[t[6]||(t[6]=e("h2",{class:"text-2xl font-bold mb-4"},"📚 最近 10 筆紀錄",-1)),e("ul",mt,[(u(!0),m(Q,null,U(s.history,(r,v)=>(u(),m("li",{key:v,class:"p-4 border rounded shadow-sm dark:bg-gray-800 dark:border-gray-700"},[e("div",gt,[e("span",vt,i(v+1)+".",1),e("span",ft,i(r.date),1)]),e("p",null,[t[0]||(t[0]=e("strong",null,"運算方式：",-1)),S(i(r.operation||"未知"),1)]),e("p",null,[t[1]||(t[1]=e("strong",null,"題目總數：",-1)),S(" "+i(r.total)+" 題， ",1),t[2]||(t[2]=e("strong",null,"答對：",-1)),S(" "+i(r.correct)+" 題 ("+i(l(r.correct,r.total))+"%) ",1),r.correct===r.total&&r.total>0?(u(),m("span",bt," 🏅 滿分！ ")):D("",!0)]),e("p",null,[t[3]||(t[3]=e("strong",null,"作答時間：",-1)),S(i(s.formatTime(r.time)),1)]),r.questions?.length?(u(),m("div",yt,[o.value[v]?D("",!0):(u(),m("button",{key:0,class:"text-blue-600 hover:underline text-sm mb-2",onClick:b=>d(v),"aria-expanded":o.value[v]},[e("div",ht,[I(c(Z),{class:"w-4 h-4 mr-1"}),t[4]||(t[4]=S(" 顯示作答內容 "))])],8,xt)),I(G,{name:"fade-slide"},{default:W(()=>[A(e("ul",wt,[(u(!0),m(Q,null,U(r.questions,(b,w)=>(u(),m("li",{key:w,class:R(b.correct?"text-green-600":"text-red-500")},[S(i(w+1)+". "+i(b.a)+" "+i(f(b.op))+" "+i(b.b)+" = ",1),e("strong",null,i(b.userAnswer??"（未作答）"),1),b.correct?(u(),m("span",$t,"⭐️")):(u(),m("span",kt,"（正解："+i(b.answer)+"）",1))],2))),128)),e("li",null,[e("button",{class:"text-blue-600 hover:underline text-sm mt-2",onClick:b=>d(v),"aria-expanded":o.value[v]},[e("div",Mt,[I(c(tt),{class:"w-4 h-4 mr-1"}),t[5]||(t[5]=S(" 收合題目 "))])],8,_t)])],512),[[X,o.value[v]]])]),_:2},1024)])):D("",!0)]))),128))])]))}}),Tt=et(Ct,[["__scopeId","data-v-654c35a5"]]),qt={key:0},St={key:1},Dt=N({__name:"ModeToggle",props:{darkMode:{type:Boolean},toggleDarkMode:{type:Function}},setup(g){return(a,o)=>(u(),m("button",{onClick:o[0]||(o[0]=(...d)=>a.toggleDarkMode&&a.toggleDarkMode(...d)),class:"w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"},[a.darkMode?(u(),m("span",qt,"🌞 切換光照模式")):(u(),m("span",St,"🌙 切換深色模式"))]))}}),Lt=N({__name:"PrintButton",props:{questions:{}},setup(g){const a=g,o=t=>t==="*"?"×":t==="/"?"÷":t,d=t=>({"+":"加法","-":"減法","*":"乘法","/":"除法"})[t]||"數學",l=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},f=()=>{if(!a.questions.length)return;const t=d(a.questions[0].op),r=l(),v=40,b=Math.ceil(a.questions.length/v),w=[];for(let y=0;y<b;y++){const k=[],$=y*v,h=Math.min($+v,a.questions.length);for(let n=$;n<h;n+=2){const p=a.questions[n],x=a.questions[n+1],z=`<td style="padding: 8px; width: 50%;">
        ${n+1}. ${p.a} ${o(p.op)} ${p.b}
        = <span class="answer-line"></span>
      </td>`,K=x?`<td style="padding: 8px; width: 50%;">
            ${n+2}. ${x.a} ${o(x.op)} ${x.b}
            = <span class="answer-line"></span>
          </td>`:'<td style="padding: 8px; width: 50%;"></td>';k.push(`<tr>${z}${K}</tr>`)}const O=`
      <div class="print-page">
        <h2>${t}練習題目</h2>
        ${y===0?`<div class="info-row">
                <div>班級：<span class="line short"></span></div>
                <div>學生姓名：<span class="line short"></span></div>
                <div>日期：${r}</div>
              </div>`:""}
        <table>${k.join(`
`)}</table>
        <div class="footer">第 ${y+1} 頁</div>
      </div>
    `;w.push(O)}const q=[];for(let y=0;y<a.questions.length;y+=2){const k=a.questions[y],$=a.questions[y+1],h=`<td style="padding: 8px; width: 50%;">
      ${y+1}. ${k.a} ${o(k.op)} ${k.b} = <strong>${k.answer??s(k)}</strong>
    </td>`,M=$?`<td style="padding: 8px; width: 50%;">
          ${y+2}. ${$.a} ${o($.op)} ${$.b} = <strong>${$.answer??s($)}</strong>
        </td>`:'<td style="padding: 8px; width: 50%;"></td>';q.push(`<tr>${h}${M}</tr>`)}const T=`
    <div class="print-page">
      <h2>${t}練習題目：答案頁</h2>
      <table>${q.join(`
`)}</table>
      <div class="footer">第 ${b+1} 頁（答案）</div>
    </div>
  `;w.push(T);const L=`
    <html>
      <head>
        <title>${t} 練習題目列印</title>
        <style>
          body {
            font-family: sans-serif;
            padding: 20px;
            font-size: 16px;
          }
          .print-page {
            page-break-after: always;
          }
          .print-page:last-child {
            page-break-after: auto;
          }
          h2 {
            margin-bottom: 10px;
            text-align: center;
            font-size: 20px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            font-size: 15px;
          }
          .line {
            display: inline-block;
            border-bottom: 1px solid #000;
            margin-left: 6px;
          }
          .short {
            width: 120px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          td {
            vertical-align: top;
            padding-bottom: 12px;
          }
          .answer-line {
            display: inline-block;
            margin-left: 10px;
            border-bottom: 1px solid #000;
            width: 100px;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 14px;
            color: #555;
          }
        </style>
      </head>
      <body>
        ${w.join(`
`)}
      </body>
    </html>
  `,C=window.open("","","width=800,height=1000");C&&(C.document.write(L),C.document.close(),C.print())},s=t=>{switch(t.op){case"+":return t.a+t.b;case"-":return t.a-t.b;case"*":return t.a*t.b;case"/":return t.b!==0?Math.round(t.a/t.b):"NaN";default:return""}};return(t,r)=>(u(),m("button",{onClick:f,class:"w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"}," 🖨️ 列印題目 "))}});function Nt(){const g=_("+"),a=_(2),o=_(5),d=_([]),l=_(!1),f=_(!1),s=_(0),t=_(null),r=_(null),v=_([]),b=E(()=>[1,1,2,3,4,2][a.value-1]||1),w=E(()=>[1,2,3,4,5,7][a.value-1]||2),q=E(()=>d.value.filter(n=>n.correct).length);H(()=>{const n=localStorage.getItem("math_quiz_history");if(n)try{const p=JSON.parse(n);Array.isArray(p)&&(v.value=p.map(x=>({...x,questions:x.questions??void 0})))}catch{console.warn("無法解析歷史紀錄")}});const T=n=>{const p=Math.pow(10,n-1),x=Math.pow(10,n)-1;return Math.floor(Math.random()*(x-p+1))+p},L=()=>{let n=T(b.value),p=T(w.value);const x=g.value;if(x==="/"){for(;p===0;)p=T(w.value);n=p*T(b.value)}x==="-"&&n<p&&([n,p]=[p,n]);const z={"+":n+p,"-":n-p,"*":n*p,"/":n/p}[x]??0;return z===0||z===1?L():{a:n,b:p,op:x,answer:z,userAnswer:null,correct:!1}},C=()=>{if(o.value<3||o.value>50){alert("題目數量需介於 3 到 50 題！");return}d.value=Array.from({length:o.value},L),l.value=!0,f.value=!1,s.value=0,$()},y=()=>{d.value.forEach(n=>{n.correct=Number(n.userAnswer)===n.answer}),f.value=!0,h(),v.value.unshift({date:new Date().toLocaleString(),operation:O(g.value),correct:q.value,total:d.value.length,time:s.value,questions:JSON.parse(JSON.stringify(d.value))}),v.value=v.value.slice(0,10),localStorage.setItem("math_quiz_history",JSON.stringify(v.value))},k=()=>{l.value=!1,f.value=!1,d.value=[],s.value=0,h()},$=()=>{r.value=Date.now(),t.value=setInterval(()=>{s.value=Math.floor((Date.now()-(r.value||0))/1e3)},1e3)},h=()=>{t.value&&clearInterval(t.value)},M=n=>{const p=Math.floor(n/60),x=n%60;return`${p} 分 ${x} 秒`},O=n=>({"+":"加法","-":"減法","*":"乘法","/":"除法"})[n]||n;return{operation:g,digitLevel:a,questionCount:o,questions:d,started:l,submitted:f,elapsedTime:s,history:v,digitMin:b,digitMax:w,correctCount:q,startQuiz:C,endQuiz:y,restart:k,formatTime:M}}function zt(){const g=_(!1),a=()=>{g.value=!g.value,document.documentElement.classList.toggle("dark",g.value),localStorage.setItem("math_quiz_dark_mode",g.value?"1":"0")};return H(()=>{const o=localStorage.getItem("math_quiz_dark_mode")==="1";g.value=o,document.documentElement.classList.toggle("dark",o)}),{darkMode:g,toggleDarkMode:a}}const At={class:"max-w-3xl mx-auto mt-5 p-4 sm:p-6 text-center dark:bg-black/95 dark:text-white/90"},It={class:"space-y-6"},Ot={class:"flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2"},Pt=N({__name:"MathPageV2",setup(g){const{operation:a,digitLevel:o,questionCount:d,questions:l,started:f,submitted:s,elapsedTime:t,history:r,digitMin:v,digitMax:b,correctCount:w,startQuiz:q,endQuiz:T,restart:L,formatTime:C}=Nt(),{darkMode:y,toggleDarkMode:k}=zt();return($,h)=>(u(),m("div",At,[h[3]||(h[3]=e("h1",{class:"text-3xl font-bold mb-6"},"國小數學運算練習系統",-1)),e("div",It,[e("div",Ot,[I(Dt,{darkMode:c(y),toggleDarkMode:c(k)},null,8,["darkMode","toggleDarkMode"]),c(f)&&!c(s)?(u(),F(Lt,{key:0,questions:c(l)},null,8,["questions"])):D("",!0)]),c(f)?(u(),F(pt,{key:1,questions:c(l),submitted:c(s),correctCount:c(w),elapsedTime:c(t),formatTime:c(C),onEnd:c(T),onRestart:c(L)},null,8,["questions","submitted","correctCount","elapsedTime","formatTime","onEnd","onRestart"])):(u(),F(rt,{key:0,operation:c(a),"onUpdate:operation":h[0]||(h[0]=M=>P(a)?a.value=M:null),digitLevel:c(o),"onUpdate:digitLevel":h[1]||(h[1]=M=>P(o)?o.value=M:null),questionCount:c(d),"onUpdate:questionCount":h[2]||(h[2]=M=>P(d)?d.value=M:null),digitMin:c(v),digitMax:c(b),onStart:c(q)},null,8,["operation","digitLevel","questionCount","digitMin","digitMax","onStart"])),I(Tt,{history:c(r),formatTime:c(C)},null,8,["history","formatTime"])])]))}});export{Pt as default};
