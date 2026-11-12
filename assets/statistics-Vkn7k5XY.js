import{d as v,g as c,t as p,a as C}from"./language-B6ddr21c.js";import{a as f,p as E,C as g,d as A,q as $}from"./quizText-DqMymLy5.js";import{Q as w}from"./Quizzes-p-ut6us-.js";class L{attempts;constructor(t){this.attempts=t}get averageScore(){if(this.attempts.length===0)return 0;const t=this.attempts.reduce((s,n)=>s+n.scorePercentage,0);return Math.round(t/this.attempts.length)}get bestScore(){return this.attempts.length===0?0:Math.max(...this.attempts.map(t=>t.scorePercentage))}get accuracy(){let t=0,s=0;return this.attempts.forEach(e=>{t+=e.correctQuestions,s+=e.totalQuestions}),{percentage:s===0?0:Math.round(t/s*100),correct:t,total:s}}get quizzesTaken(){return this.attempts.length}get passRate(){if(this.attempts.length===0)return 0;const t=this.attempts.filter(s=>s.scorePercentage>=60).length;return Math.round(t/this.attempts.length*100)}get timeSpentFormatted(){if(this.attempts.length===0)return{formatted:"0h 0m",avgFormatted:"0m 0s avg"};const t=this.attempts.reduce((r,i)=>r+i.timeSpentSeconds,0),s=Math.round(t/this.attempts.length),n=Math.floor(t/3600),e=Math.floor(t%3600/60),a=Math.floor(s/60),d=s%60;return{formatted:`${n}h ${e}m`,avgFormatted:`${a}m ${d}s avg`}}getScoresByCourse(){const t={};this.attempts.forEach(n=>{const e=n.course||"General";t[e]||(t[e]={totalScore:0,count:0}),t[e].totalScore+=n.scorePercentage,t[e].count+=1});const s={};for(const[n,e]of Object.entries(t))s[n]=Math.round(e.totalScore/e.count);return s}}function _(o){const t=w.find(s=>A(o,s.quizSettings));return t?$(t.quizSettings):o.quizTitle}const h={Exam:"STATISTICS_MODE_EXAM",Practice:"STATISTICS_MODE_PRACTICE",Training:"STATISTICS_MODE_TRAINING"};console.log("lLOLL213");document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();async function b(){console.log("lLOLL");const t=await new f().getAllAttempts(),s=await v();await E(),O(t,s),T(t,"all",s),document.getElementById("course-filter")?.addEventListener("change",n=>{const e=n.target.value;T(t,e,s)}),document.getElementById("attempts-table-body")?.addEventListener("click",async n=>{const e=n.target.closest(".review-past-btn");if(!e)return;const a=Number(e.dataset.attemptId),i=(await new f().getAllAttempts()).find(l=>l.id===a);if(i&&i.quizSnapshot){const l=i.quizSnapshot;l.isHistoricalReview=!0,localStorage.setItem("quizStats",JSON.stringify(l)),localStorage.setItem("state","ongoing"),window.location.href="./index.html"}else console.error("No snapshot found for this attempt.")})}function T(o,t,s){const n=document.getElementById("stats-subtitle"),e=document.getElementById("empty-state"),a=document.getElementById("stats-content");let d=o;if(t!=="all"){d=o.filter(m=>m.course===t);const i=g.find(m=>m.id===t),l=i?c(s,i.name):t;n.innerText=`${c(s,"STATISTICS_DESCRIPTION_SHORT")} ${l}`}else n.innerText=c(s,"STATISTICS_DESCRIPTION");if(d.length===0){e.classList.remove("hidden"),a.classList.add("hidden");return}else e.classList.add("hidden"),a.classList.remove("hidden");const r=new L(d);R(r,s),k(d,s),D(d,r,s),lucide.createIcons()}function O(o,t){const s=document.getElementById("course-filter");if(!s)return;const n=[...new Set(o.map(r=>r.course))],e=g.filter(r=>n.includes(r.id));let a=`<option value="all">${c(t,"STATISTICS_ALL_COURSES")}</option>`;console.log("languageData",c(t,"STATISTICS_ALL_COURSES")),e.forEach(r=>{const i=c(t,r.name);a+=`<option value="${r.id}">${i}</option>`}),n.filter(r=>!g.find(i=>i.id===r)).forEach(r=>{a+=`<option value="${r}">${r} (${p("STATISTICS_ARCHIVED")})</option>`}),s.innerHTML=a}function R(o,t){const s=document.getElementById("stat-cards-container"),n=[{label:c(t,"STATISTICS_AVERAGE_SCORE"),value:`${o.averageScore}%`,icon:"target",sub:""},{label:c(t,"STATISTICS_BEST_SCORE"),value:`${o.bestScore}%`,icon:"trophy",sub:""},{label:c(t,"STATISTICS_ACCURACY"),value:`${o.accuracy.percentage}%`,icon:"check-circle-2",sub:`${o.accuracy.correct}/${o.accuracy.total} ${c(t,"STATISTICS_TABLE_CORRECT").toLowerCase()}`},{label:c(t,"STATISTICS_QUIZZES_TAKEN"),value:`${o.quizzesTaken}`,icon:"clipboard-list",sub:""},{label:c(t,"STATISTICS_PASS_RATE"),value:`${o.passRate}%`,icon:"trending-up",sub:""},{label:c(t,"STATISTICS_TIME_SPENT"),value:o.timeSpentFormatted.formatted,icon:"clock",sub:o.timeSpentFormatted.avgFormatted}];s.innerHTML=n.map(e=>`
        <div class="rounded-xl border border-border bg-card text-card-foreground shadow">
            <div class="p-4 flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-medium text-muted-foreground">${e.label}</span>
                    <i data-lucide="${e.icon}" class="h-4 w-4 text-primary"></i>
                </div>
                <div>
                    <p class="text-2xl font-bold tabular-nums">${e.value}</p>
                    ${e.sub?`<p class="text-xs text-muted-foreground mt-0.5">${e.sub}</p>`:""}
                </div>
            </div>
        </div>
    `).join("")}function B(o){return o>=80?"text-success":o>=60?"text-warning":"text-destructive"}function M(o){const t=o.toLowerCase();return t.includes("lecture")?"book-open":t.includes("practice")?"file-text":"award"}function z(o){const t=Math.floor(o/60),s=o%60;return t>0?`${t}m ${s}s`:`${s}s`}function k(o,t){const s=document.getElementById("attempts-table-body");document.getElementById("history-title").innerText=p("STATISTICS_HISTORY_COUNT",{count:o.length});const n=[...o].sort((e,a)=>new Date(a.dateCompleted).getTime()-new Date(e.dateCompleted).getTime());s.innerHTML=n.map(e=>{const a=g.find(r=>r.id===e.course),d=a?c(t,a.name):e.course;return`
        <tr class="border-b transition-colors hover:bg-muted/50">
            <td class="p-4 align-middle font-medium text-foreground">${_(e)}</td>
            <td class="p-4 align-middle hidden sm:table-cell">
                <span class="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">${d}</span>
            </td>
            <td class="p-4 align-middle hidden md:table-cell">
                <span class="flex items-center gap-1.5 text-muted-foreground">
                    <i data-lucide="${M(e.type)}" class="h-3.5 w-3.5"></i>
                    ${h[e.type]?p(h[e.type]):e.type}
                </span>
            </td>
            <td class="p-4 align-middle hidden md:table-cell text-muted-foreground">
                ${new Date(e.dateCompleted).toLocaleDateString(C())}
            </td>
            <td class="p-4 align-middle text-center tabular-nums text-muted-foreground">
                ${e.correctQuestions}/${e.totalQuestions}
            </td>
            <td class="p-4 align-middle hidden sm:table-cell text-center tabular-nums text-muted-foreground">
                ${z(e.timeSpentSeconds)}
            </td>
            <td class="p-4 align-middle text-center font-semibold tabular-nums ${B(e.scorePercentage)}">
                ${e.scorePercentage}%
            </td>
            <td class="p-4 align-middle text-center">
                <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    ${e.grade}
                </span>
            </td>
            <td class="p-4 align-middle text-right">
                <button data-attempt-id="${e.id}" class="review-past-btn inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-8 w-8">
                    <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </button>
            </td>
        </tr>
    `}).join("")}function D(o,t,s){const n=Chart.getChart("scoreOverTimeChart");n&&n.destroy();const e=Chart.getChart("scoreByCourseChart");e&&e.destroy();const a=[...o].sort((u,S)=>new Date(u.dateCompleted).getTime()-new Date(S.dateCompleted).getTime()),d=a.map(u=>new Date(u.dateCompleted).toLocaleDateString(C(),{month:"short",day:"numeric"})),r=a.map(u=>u.scorePercentage);new Chart(document.getElementById("scoreOverTimeChart"),{type:"line",data:{labels:d,datasets:[{label:p("STATISTICS_CHART_SCORE"),data:r,borderColor:"#2563eb",backgroundColor:"rgba(37, 99, 235, 0.1)",tension:.3,fill:!0,borderWidth:2,pointRadius:4,pointBackgroundColor:"#2563eb"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{min:0,max:100,grid:{borderDash:[4,4]}},x:{grid:{display:!1}}}}});const i=document.getElementById("course-chart-card"),l=document.getElementById("charts-grid"),m=t.getScoresByCourse();if(Object.keys(m).length<=1){i.style.display="none",l.classList.remove("lg:grid-cols-2"),l.classList.add("grid-cols-1");return}else i.style.display="block",l.classList.add("lg:grid-cols-2"),l.classList.remove("grid-cols-1");const I=Object.keys(m).map(u=>{const S=g.find(x=>x.id===u);return S?c(s,S.name):u}),y=Object.values(m);new Chart(document.getElementById("scoreByCourseChart"),{type:"bar",data:{labels:I,datasets:[{label:p("STATISTICS_AVERAGE_SCORE"),data:y,backgroundColor:"#2563eb",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{min:0,max:100,grid:{borderDash:[4,4]}},x:{grid:{display:!1}}}}})}
