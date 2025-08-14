import{d as N,aE as H,aF as F,c as m,o as d,a as e,J as Q,aG as I,O as u,aj as R,K as D,P as U,a6 as B,D as J,r as M,m as G,M as L,Q as V,u as c,T as K,I as Y,R as W,b as P,w as X,n as Z,H as j,t as O}from"./vue-BqyYyVhM.js";import{d as tt,e as et}from"./elementPlus-tPvvSRko.js";import{_ as st,u as ot}from"./index-ael2ZC7G.js";import{s as nt,l as at}from"./storage-ybdTsWmj.js";const rt={class:"space-y-6 text-left"},lt={class:"flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"},it={class:"text-sm text-gray-500 dark:text-gray-400"},ut={class:"flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0"},dt=N({__name:"SettingsForm",props:H({digitMin:{},digitMax:{}},{operation:{},operationModifiers:{},digitLevel:{},digitLevelModifiers:{},questionCount:{},questionCountModifiers:{}}),emits:H(["start"],["update:operation","update:digitLevel","update:questionCount"]),setup(g,{emit:l}){const o=F(g,"operation"),v=F(g,"digitLevel"),n=F(g,"questionCount"),f=l;return(s,t)=>(d(),m("div",rt,[e("div",null,[t[5]||(t[5]=e("label",{class:"block font-semibold mb-1"},"選擇練習項目：",-1)),Q(e("select",{"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),class:"w-full border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},t[4]||(t[4]=[e("option",{value:"+"},"加法",-1),e("option",{value:"-"},"減法",-1),e("option",{value:"*"},"乘法",-1),e("option",{value:"/"},"除法",-1)]),512),[[I,o.value]])]),e("div",lt,[t[7]||(t[7]=e("div",{class:"font-semibold min-w-[100px]"},"難度等級：",-1)),Q(e("select",{"onUpdate:modelValue":t[1]||(t[1]=r=>v.value=r),class:"w-full sm:w-auto border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},t[6]||(t[6]=[e("option",{value:1},"🐣 1位數",-1),e("option",{value:2},"🐥 1~2位數",-1),e("option",{value:3},"✨ 2~3位數",-1),e("option",{value:4},"🚀 3~4位數",-1),e("option",{value:5},"🌟 4~5位數",-1),e("option",{value:6},"🔥 2~7位數（高手挑戰）",-1)]),512),[[I,v.value,void 0,{number:!0}]]),e("p",it," 出題範圍："+u(s.digitMin)+" 位數 ～ "+u(s.digitMax)+" 位數 ",1)]),e("div",ut,[t[8]||(t[8]=e("label",{class:"font-semibold sm:flex-shrink-0"},"題目數量（3～50）：",-1)),Q(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=r=>n.value=r),min:"3",max:"50",class:"flex-1 border p-2 rounded dark:bg-gray-800 dark:border-gray-600"},null,512),[[R,n.value,void 0,{number:!0}]])]),e("button",{onClick:t[3]||(t[3]=r=>f("start")),class:"w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg"}," 開始練習 ")]))}}),pt={class:"space-y-4 text-left"},ct=["onUpdate:modelValue","disabled"],mt={class:"flex flex-col sm:flex-row justify-end gap-2 mt-4"},gt={key:0,class:"mt-4"},vt=N({__name:"QuestionList",props:{questions:{},submitted:{type:Boolean},correctCount:{},elapsedTime:{},formatTime:{type:Function}},emits:["end","restart"],setup(g,{emit:l}){const o=l,v=n=>n==="*"?"×":n==="/"?"÷":n;return(n,f)=>(d(),m("div",pt,[(d(!0),m(U,null,B(n.questions,(s,t)=>(d(),m("div",{key:t,class:"flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2"},[e("span",null,u(t+1)+".",1),e("span",null,u(s.a)+" "+u(v(s.op))+" "+u(s.b)+" =",1),Q(e("input",{type:"number","onUpdate:modelValue":r=>s.userAnswer=r,disabled:n.submitted,class:"w-full sm:w-24 p-2 text-base border rounded dark:bg-gray-800 dark:border-gray-600"},null,8,ct),[[R,s.userAnswer]]),n.submitted?(d(),m("span",{key:0,class:J(s.correct?"text-green-500":"text-red-500")}," （"+u(s.correct?"正確":"錯誤")+"，答案："+u(s.answer)+"） ",3)):D("",!0)]))),128)),e("div",mt,[n.submitted?D("",!0):(d(),m("button",{key:0,onClick:f[0]||(f[0]=s=>o("end")),class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"}," 結束練習 ")),e("button",{onClick:f[1]||(f[1]=s=>o("restart")),class:"bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"},u(n.submitted?"重新開始":"重新選擇練習項目"),1)]),n.submitted?(d(),m("div",gt,[f[2]||(f[2]=e("h3",{class:"text-xl font-bold"},"批改結果：",-1)),e("p",null,"正確 "+u(n.correctCount)+" / "+u(n.questions.length)+" 題",1),e("p",null,"作答時間："+u(n.formatTime(n.elapsedTime)),1)])):D("",!0)]))}}),ft={class:"mt-6"},bt={class:"space-y-4 text-left"},yt={class:"flex justify-between items-center mb-2"},xt={class:"font-semibold text-lg"},wt={class:"text-sm text-gray-500"},ht={key:0,class:"ml-2 text-yellow-500"},kt={key:0,class:"mt-2"},$t=["onClick","aria-expanded"],Mt={class:"flex items-center"},_t={class:"mt-2 space-y-1 text-sm"},Ct={key:0},Tt={key:1,class:"text-lg"},qt=["onClick","aria-expanded"],zt={class:"flex items-center"},Lt=N({__name:"HistoryList",props:{history:{},formatTime:{type:Function}},setup(g){const l=g,o=M([]);G(()=>{o.value=l.history.map((s,t)=>o.value[t]||!1)});const v=s=>{o.value[s]=!o.value[s]},n=(s,t)=>t>0?Math.round(s/t*100):0,f=s=>({"*":"×","/":"÷"})[s]||s;return(s,t)=>(d(),m("div",ft,[t[6]||(t[6]=e("h2",{class:"text-2xl font-bold mb-4"},"📚 最近 10 筆紀錄",-1)),e("ul",bt,[(d(!0),m(U,null,B(s.history,(r,b)=>(d(),m("li",{key:b,class:"p-4 border rounded shadow-sm dark:bg-gray-800 dark:border-gray-700"},[e("div",yt,[e("span",xt,u(b+1)+".",1),e("span",wt,u(r.date),1)]),e("p",null,[t[0]||(t[0]=e("strong",null,"運算方式：",-1)),L(u(r.operation||"未知"),1)]),e("p",null,[t[1]||(t[1]=e("strong",null,"題目總數：",-1)),L(" "+u(r.total)+" 題， ",1),t[2]||(t[2]=e("strong",null,"答對：",-1)),L(" "+u(r.correct)+" 題 ("+u(n(r.correct,r.total))+"%) ",1),r.correct===r.total&&r.total>0?(d(),m("span",ht," 🏅 滿分！ ")):D("",!0)]),e("p",null,[t[3]||(t[3]=e("strong",null,"作答時間：",-1)),L(u(s.formatTime(r.time)),1)]),r.questions?.length?(d(),m("div",kt,[o.value[b]?D("",!0):(d(),m("button",{key:0,class:"text-blue-600 hover:underline text-sm mb-2",onClick:p=>v(b),"aria-expanded":o.value[b]},[e("div",Mt,[V(c(tt),{class:"w-4 h-4 mr-1"}),t[4]||(t[4]=L(" 顯示作答內容 "))])],8,$t)),V(K,{name:"fade-slide"},{default:Y(()=>[Q(e("ul",_t,[(d(!0),m(U,null,B(r.questions,(p,h)=>(d(),m("li",{key:h,class:J(p.correct?"text-green-600":"text-red-500")},[L(u(h+1)+". "+u(p.a)+" "+u(f(p.op))+" "+u(p.b)+" = ",1),e("strong",null,u(p.userAnswer??"（未作答）"),1),p.correct?(d(),m("span",Tt,"⭐️")):(d(),m("span",Ct,"（正解："+u(p.answer)+"）",1))],2))),128)),e("li",null,[e("button",{class:"text-blue-600 hover:underline text-sm mt-2",onClick:p=>v(b),"aria-expanded":o.value[b]},[e("div",zt,[V(c(et),{class:"w-4 h-4 mr-1"}),t[5]||(t[5]=L(" 收合題目 "))])],8,qt)])],512),[[W,o.value[b]]])]),_:2},1024)])):D("",!0)]))),128))])]))}}),Dt=st(Lt,[["__scopeId","data-v-654c35a5"]]),St={key:0},Nt={key:1},At=N({__name:"ModeToggle",props:{darkMode:{type:Boolean},toggleDarkMode:{type:Function}},setup(g){return(l,o)=>(d(),m("button",{onClick:o[0]||(o[0]=(...v)=>l.toggleDarkMode&&l.toggleDarkMode(...v)),class:"w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"},[l.darkMode?(d(),m("span",St,"🌞 切換光照模式")):(d(),m("span",Nt,"🌙 切換深色模式"))]))}}),Qt=N({__name:"PrintButton",props:{questions:{}},setup(g){const l=g,o=t=>t==="*"?"×":t==="/"?"÷":t,v=t=>({"+":"加法","-":"減法","*":"乘法","/":"除法"})[t]||"數學",n=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},f=()=>{if(!l.questions.length)return;const t=v(l.questions[0].op),r=n(),b=40,p=Math.ceil(l.questions.length/b),h=[];for(let x=0;x<p;x++){const k=[],$=x*b,w=Math.min($+b,l.questions.length);for(let z=$;z<w;z+=2){const a=l.questions[z],i=l.questions[z+1],y=`<td style="padding: 8px; width: 50%;">
        ${z+1}. ${a.a} ${o(a.op)} ${a.b}
        = <span class="answer-line"></span>
      </td>`,A=i?`<td style="padding: 8px; width: 50%;">
            ${z+2}. ${i.a} ${o(i.op)} ${i.b}
            = <span class="answer-line"></span>
          </td>`:'<td style="padding: 8px; width: 50%;"></td>';k.push(`<tr>${y}${A}</tr>`)}const E=`
      <div class="print-page">
        <h2>${t}練習題目</h2>
        ${x===0?`<div class="info-row">
                <div>班級：<span class="line short"></span></div>
                <div>學生姓名：<span class="line short"></span></div>
                <div>日期：${r}</div>
              </div>`:""}
        <table>${k.join(`
`)}</table>
        <div class="footer">第 ${x+1} 頁</div>
      </div>
    `;h.push(E)}const T=[];for(let x=0;x<l.questions.length;x+=2){const k=l.questions[x],$=l.questions[x+1],w=`<td style="padding: 8px; width: 50%;">
      ${x+1}. ${k.a} ${o(k.op)} ${k.b} = <strong>${k.answer??s(k)}</strong>
    </td>`,_=$?`<td style="padding: 8px; width: 50%;">
          ${x+2}. ${$.a} ${o($.op)} ${$.b} = <strong>${$.answer??s($)}</strong>
        </td>`:'<td style="padding: 8px; width: 50%;"></td>';T.push(`<tr>${w}${_}</tr>`)}const S=`
    <div class="print-page">
      <h2>${t}練習題目：答案頁</h2>
      <table>${T.join(`
`)}</table>
      <div class="footer">第 ${p+1} 頁（答案）</div>
    </div>
  `;h.push(S);const q=`
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
        ${h.join(`
`)}
      </body>
    </html>
  `,C=window.open("","","width=800,height=1000");C&&(C.document.write(q),C.document.close(),C.print())},s=t=>{switch(t.op){case"+":return t.a+t.b;case"-":return t.a-t.b;case"*":return t.a*t.b;case"/":return t.b!==0?Math.round(t.a/t.b):"NaN";default:return""}};return(t,r)=>(d(),m("button",{onClick:f,class:"w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"}," 🖨️ 列印題目 "))}});function Vt(){const g=ot(),l=M("+"),o=M(2),v=M(5),n=M([]),f=M(!1),s=M(!1),t=M(0),r=M(null),b=M(null),p=M([]),h=P(()=>[1,1,2,3,4,2][o.value-1]||1),T=P(()=>[1,2,3,4,5,7][o.value-1]||2),S=P(()=>n.value.filter(a=>a.correct).length);X(()=>g.user?.id,a=>{if(!a){p.value=[],console.warn("⚠️ 使用者未登入，清空 quiz 歷史");return}const i=at(a);Array.isArray(i)?(p.value=i.map(y=>({...y,questions:y.questions??void 0})),console.log("✅ 已載入 quiz 歷史 for",a)):(p.value=[],console.log("ℹ️ 無 quiz 歷史資料 for",a))},{immediate:!0});const q=a=>{const i=Math.pow(10,a-1),y=Math.pow(10,a)-1;return Math.floor(Math.random()*(y-i+1))+i},C=()=>{let a=q(h.value),i=q(T.value);const y=l.value;if(y==="/"){for(;i===0;)i=q(T.value);a=i*q(h.value)}y==="-"&&a<i&&([a,i]=[i,a]);const A={"+":a+i,"-":a-i,"*":a*i,"/":a/i}[y]??0;return A===0||A===1?C():{a,b:i,op:y,answer:A,userAnswer:null,correct:!1}},x=()=>{if(v.value<3||v.value>50){alert("題目數量需介於 3 到 50 題！");return}n.value=Array.from({length:v.value},C),f.value=!0,s.value=!1,t.value=0,w()},k=()=>{n.value.forEach(y=>{y.correct=Number(y.userAnswer)===y.answer}),s.value=!0,_();const a={date:new Date().toLocaleString(),operation:z(l.value),correct:S.value,total:n.value.length,time:t.value,questions:JSON.parse(JSON.stringify(n.value))};p.value.unshift(a),p.value=p.value.slice(0,10);const i=g.user?.id;i?nt(i,p.value):console.warn("⚠️ 未登入，無法儲存 quiz 歷史")},$=()=>{f.value=!1,s.value=!1,n.value=[],t.value=0,_()},w=()=>{b.value=Date.now(),r.value=setInterval(()=>{t.value=Math.floor((Date.now()-(b.value||0))/1e3)},1e3)},_=()=>{r.value&&clearInterval(r.value)},E=a=>{const i=Math.floor(a/60),y=a%60;return`${i} 分 ${y} 秒`},z=a=>({"+":"加法","-":"減法","*":"乘法","/":"除法"})[a]||a;return{operation:l,digitLevel:o,questionCount:v,questions:n,started:f,submitted:s,elapsedTime:t,history:p,digitMin:h,digitMax:T,correctCount:S,startQuiz:x,endQuiz:k,restart:$,formatTime:E}}function Et(){const g=M(!1),l=()=>{g.value=!g.value,document.documentElement.classList.toggle("dark",g.value),localStorage.setItem("math_quiz_dark_mode",g.value?"1":"0")};return Z(()=>{const o=localStorage.getItem("math_quiz_dark_mode")==="1";g.value=o,document.documentElement.classList.toggle("dark",o)}),{darkMode:g,toggleDarkMode:l}}const Ft={class:"max-w-3xl mx-auto mt-5 p-4 sm:p-6 text-center dark:bg-black/95 dark:text-white/90"},Pt={class:"space-y-6"},jt={class:"flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2"},It=N({__name:"MathPageV2",setup(g){const{operation:l,digitLevel:o,questionCount:v,questions:n,started:f,submitted:s,elapsedTime:t,history:r,digitMin:b,digitMax:p,correctCount:h,startQuiz:T,endQuiz:S,restart:q,formatTime:C}=Vt(),{darkMode:x,toggleDarkMode:k}=Et();return($,w)=>(d(),m("div",Ft,[w[3]||(w[3]=e("h1",{class:"text-3xl font-bold mb-6"},"國小數學運算練習系統",-1)),e("div",Pt,[e("div",jt,[V(At,{darkMode:c(x),toggleDarkMode:c(k)},null,8,["darkMode","toggleDarkMode"]),c(f)&&!c(s)?(d(),j(Qt,{key:0,questions:c(n)},null,8,["questions"])):D("",!0)]),c(f)?(d(),j(vt,{key:1,questions:c(n),submitted:c(s),correctCount:c(h),elapsedTime:c(t),formatTime:c(C),onEnd:c(S),onRestart:c(q)},null,8,["questions","submitted","correctCount","elapsedTime","formatTime","onEnd","onRestart"])):(d(),j(dt,{key:0,operation:c(l),"onUpdate:operation":w[0]||(w[0]=_=>O(l)?l.value=_:null),digitLevel:c(o),"onUpdate:digitLevel":w[1]||(w[1]=_=>O(o)?o.value=_:null),questionCount:c(v),"onUpdate:questionCount":w[2]||(w[2]=_=>O(v)?v.value=_:null),digitMin:c(b),digitMax:c(p),onStart:c(T)},null,8,["operation","digitLevel","questionCount","digitMin","digitMax","onStart"])),V(Dt,{history:c(r),formatTime:c(C)},null,8,["history","formatTime"])])]))}});export{It as default};
