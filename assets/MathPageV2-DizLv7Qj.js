import{d as L,aD as U,aE as j,c as v,o as u,a as e,J as A,aF as B,O as i,ak as J,K as S,P as E,a6 as I,D as R,r as k,M as z,Q as O,u as c,R as Y,b as F,p as H,H as P,t as Q}from"./vue-CAuFNoKu.js";import{d as G,e as W}from"./elementPlus-BnQvSxNU.js";const X={class:"space-y-6 text-left"},Z={class:"flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"},tt={class:"text-sm text-gray-500 dark:text-gray-400"},et={class:"flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"},st=L({__name:"SettingsForm",props:U({digitMin:{},digitMax:{}},{operation:{},operationModifiers:{},digitLevel:{},digitLevelModifiers:{},questionCount:{},questionCountModifiers:{}}),emits:U(["start"],["update:operation","update:digitLevel","update:questionCount"]),setup(f,{emit:n}){const r=j(f,"operation"),m=j(f,"digitLevel"),l=j(f,"questionCount"),a=n;return(s,t)=>(u(),v("div",X,[e("div",null,[t[5]||(t[5]=e("label",{class:"block font-semibold mb-1"},"選擇練習項目：",-1)),A(e("select",{"onUpdate:modelValue":t[0]||(t[0]=d=>r.value=d),class:"w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},t[4]||(t[4]=[e("option",{value:"+"},"加法",-1),e("option",{value:"-"},"減法",-1),e("option",{value:"*"},"乘法",-1),e("option",{value:"/"},"除法",-1)]),512),[[B,r.value]])]),e("div",Z,[t[7]||(t[7]=e("div",{class:"font-semibold min-w-[100px]"},"難度等級：",-1)),A(e("select",{"onUpdate:modelValue":t[1]||(t[1]=d=>m.value=d),class:"w-full sm:w-auto border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},t[6]||(t[6]=[e("option",{value:1},"🐣 1位數",-1),e("option",{value:2},"🐥 1~2位數",-1),e("option",{value:3},"✨ 2~3位數",-1),e("option",{value:4},"🚀 3~4位數",-1),e("option",{value:5},"🌟 4~5位數",-1),e("option",{value:6},"🔥 2~7位數（高手挑戰）",-1)]),512),[[B,m.value,void 0,{number:!0}]]),e("p",tt," 出題範圍："+i(s.digitMin)+" 位數 ～ "+i(s.digitMax)+" 位數 ",1)]),e("div",et,[t[8]||(t[8]=e("label",{class:"font-semibold sm:flex-shrink-0"},"題目數量（3～50）：",-1)),A(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=d=>l.value=d),min:"3",max:"50",class:"flex-1 border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},null,512),[[J,l.value,void 0,{number:!0}]])]),e("button",{onClick:t[3]||(t[3]=d=>a("start")),class:"w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg"}," 開始練習 ")]))}}),ot={class:"space-y-4 text-left"},nt=["onUpdate:modelValue","disabled"],at={class:"flex flex-col sm:flex-row justify-end gap-2 mt-4"},rt={key:0,class:"mt-4"},lt=L({__name:"QuestionList",props:{questions:{},submitted:{type:Boolean},correctCount:{},elapsedTime:{},formatTime:{type:Function}},emits:["end","restart"],setup(f,{emit:n}){const r=n,m=l=>l==="*"?"×":l==="/"?"÷":l;return(l,a)=>(u(),v("div",ot,[(u(!0),v(E,null,I(l.questions,(s,t)=>(u(),v("div",{key:t,class:"flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2"},[e("span",null,i(t+1)+".",1),e("span",null,i(s.a)+" "+i(m(s.op))+" "+i(s.b)+" =",1),A(e("input",{type:"number","onUpdate:modelValue":d=>s.userAnswer=d,disabled:l.submitted,class:"w-full sm:w-24 p-2 text-base border rounded dark:bg-gray-800 dark:border-gray-600"},null,8,nt),[[J,s.userAnswer]]),l.submitted?(u(),v("span",{key:0,class:R(s.correct?"text-green-500":"text-red-500")}," （"+i(s.correct?"正確":"錯誤")+"，答案："+i(s.answer)+"） ",3)):S("",!0)]))),128)),e("div",at,[l.submitted?S("",!0):(u(),v("button",{key:0,onClick:a[0]||(a[0]=s=>r("end")),class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"}," 結束練習 ")),e("button",{onClick:a[1]||(a[1]=s=>r("restart")),class:"bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"},i(l.submitted?"重新開始":"重新選擇練習項目"),1)]),l.submitted?(u(),v("div",rt,[a[2]||(a[2]=e("h3",{class:"text-xl font-bold"},"批改結果：",-1)),e("p",null,"正確 "+i(l.correctCount)+" / "+i(l.questions.length)+" 題",1),e("p",null,"作答時間："+i(l.formatTime(l.elapsedTime)),1)])):S("",!0)]))}}),it={class:"mt-6"},ut={class:"space-y-4 text-left"},dt={class:"flex justify-between items-center mb-2"},pt={class:"font-semibold text-lg"},ct={class:"text-sm text-gray-500"},mt={key:0,class:"ml-2 text-yellow-500"},gt={key:0,class:"mt-2"},vt=["onClick"],ft={class:"flex justify-start items-center"},bt={class:"mt-2 space-y-1 text-sm"},yt={key:0},xt={key:1,class:"text-lg"},ht=["onClick"],wt={class:"flex justify-start items-center"},kt=L({__name:"HistoryList",props:{history:{},formatTime:{type:Function}},setup(f){const n=k([]),r=a=>{n.value[a]=!n.value[a]},m=(a,s)=>s>0?Math.round(a/s*100):0,l=a=>({"*":"×","/":"÷"})[a]||a;return(a,s)=>(u(),v("div",it,[s[6]||(s[6]=e("h2",{class:"text-2xl font-bold mb-4"},"📚 最近 10 筆紀錄",-1)),e("ul",ut,[(u(!0),v(E,null,I(a.history,(t,d)=>(u(),v("li",{key:d,class:"p-4 border rounded shadow-sm dark:bg-gray-800 dark:border-gray-700"},[e("div",dt,[e("span",pt,i(d+1)+".",1),e("span",ct,i(t.date),1)]),e("p",null,[s[0]||(s[0]=e("strong",null,"運算方式：",-1)),z(i(t.operation||"未知"),1)]),e("p",null,[s[1]||(s[1]=e("strong",null,"題目總數：",-1)),z(" "+i(t.total)+" 題， ",1),s[2]||(s[2]=e("strong",null,"答對：",-1)),z(" "+i(t.correct)+" 題 ("+i(m(t.correct,t.total))+"%) ",1),t.correct===t.total&&t.total>0?(u(),v("span",mt," 🏅 滿分！ ")):S("",!0)]),e("p",null,[s[3]||(s[3]=e("strong",null,"作答時間：",-1)),z(i(a.formatTime(t.time)),1)]),t.questions?.length?(u(),v("div",gt,[n.value[d]?S("",!0):(u(),v("button",{key:0,class:"text-blue-600 hover:underline text-sm mb-2",onClick:g=>r(d)},[e("div",ft,[O(c(G),{class:"w-4 h-4 mr-1"}),s[4]||(s[4]=e("p",null,"顯示作答內容",-1))])],8,vt)),A(e("ul",bt,[(u(!0),v(E,null,I(t.questions,(g,$)=>(u(),v("li",{key:$,class:R(g.correct?"text-green-600":"text-red-500")},[z(i($+1)+". "+i(g.a)+" "+i(l(g.op))+" "+i(g.b)+" = "+i(g.userAnswer??"（未作答）")+" ",1),g.correct?(u(),v("span",xt,"⭐️")):(u(),v("span",yt,"（正解："+i(g.answer)+"）",1))],2))),128)),e("li",null,[e("button",{class:"text-blue-600 hover:underline text-sm",onClick:g=>r(d)},[e("div",wt,[O(c(W),{class:"w-4 h-4 mr-1"}),s[5]||(s[5]=e("p",null,"收合題目",-1))])],8,ht)])],512),[[Y,n.value[d]]])])):S("",!0)]))),128))])]))}}),$t={key:0},Mt={key:1},_t=L({__name:"ModeToggle",props:{darkMode:{type:Boolean},toggleDarkMode:{type:Function}},setup(f){return(n,r)=>(u(),v("button",{onClick:r[0]||(r[0]=(...m)=>n.toggleDarkMode&&n.toggleDarkMode(...m)),class:"w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"},[n.darkMode?(u(),v("span",$t,"🌞 切換光照模式")):(u(),v("span",Mt,"🌙 切換深色模式"))]))}}),Ct=L({__name:"PrintButton",props:{questions:{}},setup(f){const n=f,r=t=>t==="*"?"×":t==="/"?"÷":t,m=t=>({"+":"加法","-":"減法","*":"乘法","/":"除法"})[t]||"數學",l=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},a=()=>{if(!n.questions.length)return;const t=m(n.questions[0].op),d=l(),g=40,$=Math.ceil(n.questions.length/g),_=[];for(let b=0;b<$;b++){const h=[],w=b*g,x=Math.min(w+g,n.questions.length);for(let o=w;o<x;o+=2){const p=n.questions[o],y=n.questions[o+1],N=`<td style="padding: 8px; width: 50%;">
        ${o+1}. ${p.a} ${r(p.op)} ${p.b}
        = <span class="answer-line"></span>
      </td>`,K=y?`<td style="padding: 8px; width: 50%;">
            ${o+2}. ${y.a} ${r(y.op)} ${y.b}
            = <span class="answer-line"></span>
          </td>`:'<td style="padding: 8px; width: 50%;"></td>';h.push(`<tr>${N}${K}</tr>`)}const V=`
      <div class="print-page">
        <h2>${t}練習題目</h2>
        ${b===0?`<div class="info-row">
                <div>班級：<span class="line short"></span></div>
                <div>學生姓名：<span class="line short"></span></div>
                <div>日期：${d}</div>
              </div>`:""}
        <table>${h.join(`
`)}</table>
        <div class="footer">第 ${b+1} 頁</div>
      </div>
    `;_.push(V)}const q=[];for(let b=0;b<n.questions.length;b+=2){const h=n.questions[b],w=n.questions[b+1],x=`<td style="padding: 8px; width: 50%;">
      ${b+1}. ${h.a} ${r(h.op)} ${h.b} = <strong>${h.answer??s(h)}</strong>
    </td>`,M=w?`<td style="padding: 8px; width: 50%;">
          ${b+2}. ${w.a} ${r(w.op)} ${w.b} = <strong>${w.answer??s(w)}</strong>
        </td>`:'<td style="padding: 8px; width: 50%;"></td>';q.push(`<tr>${x}${M}</tr>`)}const T=`
    <div class="print-page">
      <h2>${t}練習題目：答案頁</h2>
      <table>${q.join(`
`)}</table>
      <div class="footer">第 ${$+1} 頁（答案）</div>
    </div>
  `;_.push(T);const D=`
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
        ${_.join(`
`)}
      </body>
    </html>
  `,C=window.open("","","width=800,height=1000");C&&(C.document.write(D),C.document.close(),C.print())},s=t=>{switch(t.op){case"+":return t.a+t.b;case"-":return t.a-t.b;case"*":return t.a*t.b;case"/":return t.b!==0?Math.round(t.a/t.b):"NaN";default:return""}};return(t,d)=>(u(),v("button",{onClick:a,class:"w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"}," 🖨️ 列印題目 "))}});function Tt(){const f=k("+"),n=k(2),r=k(5),m=k([]),l=k(!1),a=k(!1),s=k(0),t=k(null),d=k(null),g=k([]),$=F(()=>[1,1,2,3,4,2][n.value-1]||1),_=F(()=>[1,2,3,4,5,7][n.value-1]||2),q=F(()=>m.value.filter(o=>o.correct).length);H(()=>{const o=localStorage.getItem("math_quiz_history");if(o)try{const p=JSON.parse(o);Array.isArray(p)&&(g.value=p.map(y=>({...y,questions:y.questions??void 0})))}catch{console.warn("無法解析歷史紀錄")}});const T=o=>{const p=Math.pow(10,o-1),y=Math.pow(10,o)-1;return Math.floor(Math.random()*(y-p+1))+p},D=()=>{let o=T($.value),p=T(_.value);const y=f.value;if(y==="/"){for(;p===0;)p=T(_.value);o=p*T($.value)}y==="-"&&o<p&&([o,p]=[p,o]);const N={"+":o+p,"-":o-p,"*":o*p,"/":o/p}[y]??0;return N===0||N===1?D():{a:o,b:p,op:y,answer:N,userAnswer:null,correct:!1}},C=()=>{if(r.value<3||r.value>50){alert("題目數量需介於 3 到 50 題！");return}m.value=Array.from({length:r.value},D),l.value=!0,a.value=!1,s.value=0,w()},b=()=>{m.value.forEach(o=>{o.correct=Number(o.userAnswer)===o.answer}),a.value=!0,x(),g.value.unshift({date:new Date().toLocaleString(),operation:V(f.value),correct:q.value,total:m.value.length,time:s.value,questions:JSON.parse(JSON.stringify(m.value))}),g.value=g.value.slice(0,10),localStorage.setItem("math_quiz_history",JSON.stringify(g.value))},h=()=>{l.value=!1,a.value=!1,m.value=[],s.value=0,x()},w=()=>{d.value=Date.now(),t.value=setInterval(()=>{s.value=Math.floor((Date.now()-(d.value||0))/1e3)},1e3)},x=()=>{t.value&&clearInterval(t.value)},M=o=>{const p=Math.floor(o/60),y=o%60;return`${p} 分 ${y} 秒`},V=o=>({"+":"加法","-":"減法","*":"乘法","/":"除法"})[o]||o;return{operation:f,digitLevel:n,questionCount:r,questions:m,started:l,submitted:a,elapsedTime:s,history:g,digitMin:$,digitMax:_,correctCount:q,startQuiz:C,endQuiz:b,restart:h,formatTime:M}}function qt(){const f=k(!1),n=()=>{f.value=!f.value,document.documentElement.classList.toggle("dark",f.value),localStorage.setItem("math_quiz_dark_mode",f.value?"1":"0")};return H(()=>{const r=localStorage.getItem("math_quiz_dark_mode")==="1";f.value=r,document.documentElement.classList.toggle("dark",r)}),{darkMode:f,toggleDarkMode:n}}const St={class:"max-w-3xl mx-auto mt-5 p-4 sm:p-6 text-center dark:bg-black/95 dark:text-white/90"},Dt={class:"space-y-6"},Lt={class:"flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2"},At=L({__name:"MathPageV2",setup(f){const{operation:n,digitLevel:r,questionCount:m,questions:l,started:a,submitted:s,elapsedTime:t,history:d,digitMin:g,digitMax:$,correctCount:_,startQuiz:q,endQuiz:T,restart:D,formatTime:C}=Tt(),{darkMode:b,toggleDarkMode:h}=qt();return(w,x)=>(u(),v("div",St,[x[3]||(x[3]=e("h1",{class:"text-3xl font-bold mb-6"},"國小數學運算練習系統",-1)),e("div",Dt,[e("div",Lt,[O(_t,{darkMode:c(b),toggleDarkMode:c(h)},null,8,["darkMode","toggleDarkMode"]),c(a)&&!c(s)?(u(),P(Ct,{key:0,questions:c(l)},null,8,["questions"])):S("",!0)]),c(a)?(u(),P(lt,{key:1,questions:c(l),submitted:c(s),correctCount:c(_),elapsedTime:c(t),formatTime:c(C),onEnd:c(T),onRestart:c(D)},null,8,["questions","submitted","correctCount","elapsedTime","formatTime","onEnd","onRestart"])):(u(),P(st,{key:0,operation:c(n),"onUpdate:operation":x[0]||(x[0]=M=>Q(n)?n.value=M:null),digitLevel:c(r),"onUpdate:digitLevel":x[1]||(x[1]=M=>Q(r)?r.value=M:null),questionCount:c(m),"onUpdate:questionCount":x[2]||(x[2]=M=>Q(m)?m.value=M:null),digitMin:c(g),digitMax:c($),onStart:c(q)},null,8,["operation","digitLevel","questionCount","digitMin","digitMax","onStart"])),O(kt,{history:c(d),formatTime:c(C)},null,8,["history","formatTime"])])]))}});export{At as default};
