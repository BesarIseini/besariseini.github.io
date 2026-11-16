import{d,l as I,n as v,k as T,t as y,g as M,Q as P,m as B,e as $,i as H}from"./sync-pKPzET4W.js";import{e as h,s as O}from"./htmlGuard-1ClRyj-3.js";import{C as A}from"./Courses-B3SlDX0c.js";import{Q as u}from"./localize-ClBg08ie.js";import{q as b,a as w}from"./quizText-Bd3gyDRo.js";import{c as _}from"./courseNameById-MD2FdJ0E.js";import{i as q}from"./accountUi-C1rcmJqD.js";function p(e,t,n){let i="";e.tags.length>0&&(i=`<div class="flex flex-wrap gap-1.5 mb-4">${e.tags.map(r=>`<span class="inline-flex items-center justify-center rounded-md border border-border px-2 py-0.5 text-[11px] font-normal text-muted-foreground w-fit whitespace-nowrap shrink-0">${r}</span>`).join("")}</div>`);const s=e.community===!0;if(s){const c=e.official?"":`<span class="community-badge inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary w-fit whitespace-nowrap shrink-0">${h(d(n,"SELECTION_COMMUNITY"))}</span>`,r=e.author?`<span class="community-author inline-flex items-center rounded-md border border-border px-2 py-0.5 text-[11px] font-normal text-muted-foreground max-w-[14rem] truncate">${h(d(n,"SELECTION_BY_AUTHOR").replace("{name}",e.author))}</span>`:"";i=c||r?`<div class="flex flex-wrap gap-1.5 mb-4">${c}${r}</div>`:""}const o=s?h(b(e)):b(e),l=s?h(w(e)):w(e);return`<div id="quiz_${e.id}" data-quiz-key="${h(e.key)}" role="button" tabindex="0" class="icon group/card relative flex flex-col p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 text-left w-full focus-visible:outline-none cursor-pointer">
                                            <div class="flex items-start justify-between gap-3 mb-3">
                                                <h4 class="text-base font-semibold text-foreground group-hover/card:text-primary transition-colors line-clamp-2">
                                                    ${o}
                                                </h4>
                                                <span class="${t.style}">
                                  ${t.text}
                              </span>
                                            </div>
                                            <p class="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">${l}</p>
                                            
                                            ${i}
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                                                    <span>${e.questionCount} ${d(n,"SELECTION_ICON_QUESTIONS")}</span>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground group-hover/card:text-primary group-hover/card:translate-x-1 transition-all"><path d="m9 18 6-6-6-6"/></svg>
                                            </div>
                                            <div class="absolute inset-0 rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-background opacity-0 group-focus-visible/card:opacity-100 pointer-events-none"></div>
                                        </div>
                                    
    `}function N(e,t){if(!e.length)return"";let n="";const i={style:"shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",text:d(t,"SELECTION_LECTURE")};for(let s=0;s<e.length;s++)n+=p(e[s],i,t);return`<div>
                                    <div class="flex items-center gap-2 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                        </svg>
                                        <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">${d(t,"SELECTION_LECTURES")}</h3>
                                        <span class="text-xs text-muted-foreground">(${e.length})</span>
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        ${n}
                                    </div>
                                    
                                </div>`}function Q(e,t){if(!e.length)return"";let n="";const i={style:"shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",text:d(t,"SELECTION_LABORATORY")};for(let s=0;s<e.length;s++)n+=p(e[s],i,t);return`<div>
                                    <div class="flex items-center gap-2 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground">
                                          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.62 20.397A2 2 0 0 0 6.402 23h11.196a2 2 0 0 0 1.782-2.603l-5.169-11.974A2 2 0 0 1 14 7.527V2"/>
                                          <path d="M8.5 2h7"/>
                                          <path d="M6.1 15h11.8"/>
                                        </svg>
                                        <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">${d(t,"SELECTION_LABORATORIES")}</h3>
                                        <span class="text-xs text-muted-foreground">(${e.length})</span>
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        ${n}
                                    </div>
                                    
                                </div>`}function R(e,t){if(!e.length)return"";let n="";const i={style:"shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none text-foreground",text:d(t,"SELECTION_MIDTERM")};for(let s=0;s<e.length;s++)n+=p(e[s],i,t);return`<div>
                                    <div class="flex items-center gap-2 mb-3">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                        </svg>
                                        <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">${d(t,"SELECTION_MIDTERMS")}</h3>
                                        <span class="text-xs text-muted-foreground">(${e.length})</span>
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        ${n}
                                    </div>
                                    
                                </div>`}function j(e,t){if(!e.length)return"";let n="";const i={style:"shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-primary/50 text-primary",text:`${d(t,"SELECTION_PRACTICAL")}`};for(let s=0;s<e.length;s++)n+=p(e[s],i,t);return`<div>
                                    <div class="flex items-center gap-2 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground">
                                            <path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/>
                                        </svg>
                                        <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">${d(t,"SELECTION_PRACTICALS")}</h3>
                                        <span class="text-xs text-muted-foreground">(${e.length})</span>
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        ${n}
                                    </div>
                                    
                                </div>`}function D(e,t){if(!e.length)return"";let n="";const i={style:"shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-primary text-primary-foreground hover:bg-primary/80",text:d(t,"SELECTION_EXAM")};for(let s=0;s<e.length;s++)n+=p(e[s],i,t);return`<div>
                                    <div class="flex items-center gap-2 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground">
                                            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                                        </svg>
                                        <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">${d(t,"SELECTION_EXAMS")}</h3>
                                        <span class="text-xs text-muted-foreground">(${e.length})</span>
                                    </div>

                                    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        ${n}
                                    </div>
                                    
                                </div>`}const g=await I();function S(e){let t=0;const n=[],i=[],s=[],o=[],l=[];for(let r=0;r<u.length;r++)if(e.id===u[r].courseId)switch(t++,u[r].category){case"Lecture":n.push(u[r]);break;case"Laboratory":i.push(u[r]);break;case"Midterm":s.push(u[r]);break;case"Practical":o.push(u[r]);break;case"Exam":l.push(u[r]);break}if(!t)return"";let c="";return e.tags&&e.tags.length>0&&(c=`<div class="flex flex-wrap gap-1.5 mt-2">${e.tags.map(m=>`<span class="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-[11px] font-normal text-secondary-foreground w-fit whitespace-nowrap shrink-0">${m}</span>`).join("")}</div>`),`<div class="rounded-xl border border-border bg-card overflow-hidden semester_${e.semester} course" data-course-name="${e.name.toLowerCase()}" data-course-id="${e.id.toLowerCase()}">

                    <input type="checkbox" id="course-${e.id}" class="accordion-checkbox peer sr-only" />

                    <label for="course-${e.id}" class="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors text-left cursor-pointer peer-checked:[&_.chevron]:rotate-180">
                        <div class="flex items-center gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                  <span class="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    ${e.id}
                  </span>
                                </div>
                                <h2 class="text-xl font-semibold text-foreground">${e.name}</h2>
                                <p class="text-sm text-muted-foreground mt-0.5">
                                    ${t} ${d(g,"SELECTION_QUIZZES_AVAILABLE")}
                                </p>
                                
                                ${c}
                            </div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron h-5 w-5 text-muted-foreground transition-transform duration-300">
                            <path d="m6 9 6 6 6-6"/>
                        </svg>
                    </label>

                    <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out peer-checked:grid-rows-[1fr]">
                        <div class="overflow-hidden">

                            <div class="px-6 pb-6 space-y-6">

                                ${N(n,g)}
                                ${Q(i,g)}
                                ${R(s,g)}
                                ${j(o,g)}
                                ${D(l,g)}
                                
                            </div>
                        </div>
                    </div>
                </div>
`}const C={learning:"SELECTION_LEARNING_MODE",practice:"SELECTION_PRACTICE_MODE",exam:"SELECTION_EXAM_MODE"};class z{courseSection=document.getElementById("course-sections");courses=A;currentSelection;mainSelection=document.getElementById("courses");quizSettings=document.getElementById("settings");selectionTitle=document.getElementById("selection-title");selectionPill=document.getElementById("selection-pill");selectionCourse=document.getElementById("selection-course");selectionDescription=document.getElementById("selection-description");selectionQuestions=document.getElementById("selection-questions");selectionTimeEstimation=document.getElementById("selection-time-estimation");selectionCourseIdPill=document.getElementById("selection-course-id-pill");selection20=document.getElementById("selection-20percent");selection40=document.getElementById("selection-40percent");selection60=document.getElementById("selection-60percent");selection80=document.getElementById("selection-80percent");selection100=document.getElementById("selection-100percent");selectionCustomMax=document.getElementById("selection-custom-max");selectionCustomInput=document.getElementById("selection-custom-input");selection20Container=document.getElementById("selection-20percent-container");selection40Container=document.getElementById("selection-40percent-container");selection60Container=document.getElementById("selection-60percent-container");selection80Container=document.getElementById("selection-80percent-container");selection100Container=document.getElementById("selection-100percent-container");finalQuestions=document.getElementById("final-questions");finalTime=document.getElementById("final-time");finalShuffle=document.getElementById("final-shuffle");shuffleQuestions=document.getElementById("shuffle-questions");shuffleAnswers=document.getElementById("shuffle-answers");filterSelect=document.getElementById("filter-select");filterText=document.getElementById("filter-text");quizLanguageSection=document.getElementById("quiz-language-section");languageOptionsContainer=document.getElementById("language-options-container");summaryLangRow=document.getElementById("summary-lang-row");summaryLangDivider=document.getElementById("summary-lang-divider");summaryLangFlag=document.getElementById("summary-lang-flag");summaryLangText=document.getElementById("summary-lang-text");selectionPercentages={percent20:0,percent40:0,percent60:0,percent80:0,percent100:0,min:1,max:1,customPercent:0};constructor(){this.courseSection.innerHTML="";for(let o=0;o<this.courses.length;o++)this.courseSection.innerHTML+=S(this.courses[o]);this.currentSelection=u[0];const t=document.getElementsByClassName("icon");for(let o=0;o<t.length;o++)t[o].addEventListener("click",()=>{const l=+t[o].id.split("_")[1];this.updateSelection(l)});this.selectionCustomInput.addEventListener("input",()=>{+this.selectionCustomInput.value>this.selectionPercentages.max&&(this.selectionCustomInput.value=this.selectionPercentages.max.toString()),+this.selectionCustomInput.value<0&&(this.selectionCustomInput.value="1"),this.selectionPercentages.customPercent=+this.selectionCustomInput.value,+this.selectionCustomInput.value==0&&(this.selectionPercentages.customPercent=1),this.finalQuestions.innerHTML=this.selectionPercentages.customPercent.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.customPercent*.5).toString()}),this.filterSelect.addEventListener("change",()=>{this.filterSelectFunction()}),this.filterText.addEventListener("input",()=>{if(this.filterText.value.trim().length===0){this.filterSelectFunction();return}document.querySelectorAll(".course").forEach(r=>{r.style.display="none"});const l=document.querySelectorAll(`[data-course-name*="${this.filterText.value.toLowerCase().trim()}"]`),c=document.querySelectorAll(`[data-course-id*="${this.filterText.value.toLowerCase().trim()}"]`);l.forEach(r=>{r.style.display="block"}),c.forEach(r=>{r.style.display="block"})}),document.getElementById("submit-btn").addEventListener("click",()=>{const o=document.querySelector('input[name="question-count"]:checked');if(o==null)return;let l;switch(+o.value){case 0:l=this.selectionPercentages.percent20;break;case 1:l=this.selectionPercentages.percent40;break;case 2:l=this.selectionPercentages.percent60;break;case 3:l=this.selectionPercentages.percent80;break;case 4:l=this.selectionPercentages.percent100;break;case 5:l=this.selectionPercentages.customPercent;break;default:l=0}const c=document.querySelector('input[name="quiz-mode"]:checked'),r=document.querySelector('input[name="quiz-language"]:checked'),m=v(r?r.value:this.currentSelection.defaultLanguage),f={quizKey:this.currentSelection.key,quizPath:this.currentSelection.path,quizRevision:this.currentSelection.revision,quizId:this.currentSelection.id,nrOfQuestions:l,shuffleQuestions:this.shuffleQuestions.checked,shuffleAnswers:!this.shuffleAnswers.checked,selectedMode:c.value,selectedLanguage:m};localStorage.setItem("state","starting"),localStorage.setItem("parameters",JSON.stringify(f)),window.location.replace("../index.html")});const n=document.getElementById("mode-type"),i=o=>{n.textContent=C[o]?y(C[o]):o},s=document.querySelector('input[name="quiz-mode"]:checked');s&&i(s.value),document.querySelectorAll('input[name="quiz-mode"]').forEach(o=>{o.addEventListener("click",()=>i(o.value))}),document.querySelectorAll('input[name="question-count"]').forEach(o=>{o.addEventListener("click",()=>{const l=document.querySelector('input[name="question-count"]:checked');if(l!=null)switch(+l.value){case 0:this.finalQuestions.innerHTML=this.selectionPercentages.percent20.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.percent20*.5).toString();break;case 1:this.finalQuestions.innerHTML=this.selectionPercentages.percent40.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.percent40*.5).toString();break;case 2:this.finalQuestions.innerHTML=this.selectionPercentages.percent60.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.percent60*.5).toString();break;case 3:this.finalQuestions.innerHTML=this.selectionPercentages.percent80.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.percent80*.5).toString();break;case 4:this.finalQuestions.innerHTML=this.selectionPercentages.percent100.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.percent100*.5).toString();break;case 5:this.finalQuestions.innerHTML=this.selectionPercentages.customPercent.toString(),this.finalTime.innerHTML=Math.ceil(this.selectionPercentages.customPercent*.5).toString();break}})})}renderQuizLanguages(t=[],n="en"){if(!this.quizLanguageSection||!this.languageOptionsContainer)return;const i=t.slice(0,3);if(i.length<=1){this.languageOptionsContainer.innerHTML="",this.quizLanguageSection.style.display="none",this.summaryLangRow&&(this.summaryLangRow.style.display="none"),this.summaryLangDivider&&(this.summaryLangDivider.style.display="none");return}this.quizLanguageSection.style.display="block",this.summaryLangRow&&(this.summaryLangRow.style.display="flex"),this.summaryLangDivider&&(this.summaryLangDivider.style.display="block"),this.languageOptionsContainer.innerHTML="",i.forEach(s=>{const o=T(s),l={label:o.nativeLabel,flag:o.flag},c=s===n;c&&this.summaryLangFlag&&this.summaryLangText&&(this.summaryLangFlag.textContent=l.flag,this.summaryLangText.textContent=l.label);const r=document.createElement("label");r.className="group/langbtn cursor-pointer flex items-center gap-2.5 pl-3 pr-5 py-3 rounded-lg border-2 font-medium transition-all select-none border-border bg-card hover:border-primary/50 text-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary",r.innerHTML=`
                <input type="radio" name="quiz-language" value="${s}" class="sr-only" quiz="selection-input" ${c?"checked":""}>
                <span class="text-xl">${l.flag}</span>
                <span>${l.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 ml-0.5 hidden group-has-[:checked]/langbtn:block text-primary"><path d="M20 6 9 17l-5-5"/></svg>
            `;const m=r.querySelector("input");m.addEventListener("change",()=>{m.checked&&this.summaryLangFlag&&this.summaryLangText&&(this.summaryLangFlag.textContent=l.flag,this.summaryLangText.textContent=l.label)}),this.languageOptionsContainer.appendChild(r)})}filterSelectFunction(){for(let n=1;n<=8;n++){const i=document.getElementsByClassName(`semester_${n}`);for(let s=0;s<i.length;s++)+this.filterSelect.value!==n&&(i[s].style.display="none"),(+this.filterSelect.value===n||+this.filterSelect.value==0)&&(i[s].style.display="block")}const t=document.getElementsByClassName("semester_-1");for(let n=0;n<t.length;n++)+this.filterSelect.value!=-1&&(t[n].style.display="none"),+this.filterSelect.value==-1&&(t[n].style.display="block")}generateCourses(){for(let t=0;t<this.courses.length;t++)this.courseSection.innerHTML+=S(this.courses[t])}updateSelection(t){this.currentSelection=u[t],this.mainSelection.style.display="none",this.quizSettings.style.display="block",this.selectionTitle.innerHTML=b(this.currentSelection),this.selectionDescription.innerHTML=w(this.currentSelection),this.selectionQuestions.innerHTML=String(this.currentSelection.questionCount),this.selectionCourse.innerHTML=_(this.currentSelection.courseId),this.selectionCourseIdPill.innerHTML=this.currentSelection.courseId,this.selectionTimeEstimation.innerHTML=String(this.currentSelection.estimatedMinutes),this.selectionPill.innerHTML=y(`SELECTION_${this.currentSelection.category.toUpperCase()}`),this.selectionPercentages.max=this.currentSelection.questionCount;const n=this.selectionPercentages.max;this.selectionPercentages.percent20=Math.floor(n*.2),this.selectionPercentages.percent40=Math.floor(n*.4),this.selectionPercentages.percent60=Math.floor(n*.6),this.selectionPercentages.percent80=Math.floor(n*.8),this.selectionPercentages.percent100=n,this.selection20.innerHTML=String(this.selectionPercentages.percent20),this.selection40.innerHTML=String(this.selectionPercentages.percent40),this.selection60.innerHTML=String(this.selectionPercentages.percent60),this.selection80.innerHTML=String(this.selectionPercentages.percent80),this.selection100.innerHTML=String(this.selectionPercentages.percent100),this.selectionCustomMax.innerHTML=String(this.selectionPercentages.max),this.selectionPercentages.percent20||(this.selection20Container.style.display="none"),this.selectionPercentages.percent40||(this.selection40Container.style.display="none"),this.selectionPercentages.percent60||(this.selection60Container.style.display="none"),this.selectionPercentages.percent80||(this.selection80Container.style.display="none"),this.selectionPercentages.percent100||(this.selection100Container.style.display="none"),this.selectionPercentages.percent20==this.selectionPercentages.percent40&&(this.selection20Container.style.display="none"),this.selectionPercentages.percent40==this.selectionPercentages.percent60&&(this.selection40Container.style.display="none"),this.selectionPercentages.percent60==this.selectionPercentages.percent80&&(this.selection60Container.style.display="none"),this.selectionPercentages.percent80==this.selectionPercentages.percent100&&(this.selection80Container.style.display="none"),this.selectionCustomInput.max=String(n),this.selectionCustomInput.min="1",this.selectionCustomInput.placeholder=y("SELECTION_CUSTOM_PLACEHOLDER",{max:n}),this.finalQuestions.innerHTML=this.selectionPercentages.percent100.toString(),this.finalTime.innerHTML=String(this.currentSelection.estimatedMinutes),this.shuffleQuestions.checked=this.currentSelection.shuffleQuestions;const i=M(),s=this.currentSelection.languages.map(v),o=v(this.currentSelection.defaultLanguage),l=s.includes(i)?i:o;this.renderQuizLanguages(s,l),this.renderQuizHistoryPanel(this.currentSelection)}getScoreColorClass(t){return t>=80?"text-success":t>=60?"text-warning":"text-destructive"}async renderQuizHistoryPanel(t){const n=document.getElementById("quiz-history-section"),i=document.getElementById("history-empty-state"),s=document.getElementById("history-populated-state");if(!n||!i||!s)return;n.style.display="block";const c=(await new P().getAllAttempts()).filter(a=>B(a,t));if(c.length===0){i.classList.remove("hidden"),s.classList.add("hidden");return}i.classList.add("hidden"),s.classList.remove("hidden"),c.sort((a,x)=>new Date(x.dateCompleted).getTime()-new Date(a.dateCompleted).getTime());const r=c.map(a=>a.scorePercentage),m=Math.max(...r),f=Math.round(r.reduce((a,x)=>a+x,0)/r.length);document.getElementById("history-count").innerText=c.length.toString();const E=document.getElementById("history-best");E.innerText=`${m}%`,E.className=`text-2xl font-bold tabular-nums ${this.getScoreColorClass(m)}`;const L=document.getElementById("history-avg");L.innerText=`${f}%`,L.className=`text-2xl font-bold tabular-nums ${this.getScoreColorClass(f)}`;const k=document.getElementById("history-attempts-list");k.innerHTML=c.slice(0,3).map(a=>`
            <div class="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 mb-2">
                <div class="flex flex-col">
                    <span class="text-sm font-medium text-foreground">
                        ${new Date(a.dateCompleted).toLocaleDateString($())}
                    </span>
                    <span class="text-xs text-muted-foreground">
                        ${y("SELECTION_HISTORY_CORRECT",{correct:a.correctQuestions,total:a.totalQuestions})}
                    </span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-sm font-semibold tabular-nums ${this.getScoreColorClass(a.scorePercentage)}">
                        ${a.scorePercentage}%
                    </span>
                    <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-sm font-bold text-foreground">
                        ${a.grade}
                    </span>
                </div>
            </div>
        `).join(""),window.lucide&&lucide.createIcons()}}O(!0);await H;new z;q();
