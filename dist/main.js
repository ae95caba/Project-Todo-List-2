(()=>{"use strict";let e={Todos:{}};function t(t,n,d){console.log(d),console.log(e),console.log(e[d.innerText]);let l=null;Object.keys(e[d.innerText]).length>0&&(null==document.getElementById("tasks-ul")?(l=document.createElement("ul"),l.id="tasks-ul",t.insertBefore(l,n)):(document.getElementById("tasks-ul").remove(),l=document.createElement("ul"),l.id="tasks-ul",t.insertBefore(l,n)),Object.getOwnPropertyNames(e[d.innerText]).forEach((e=>{const t=document.createElement("li");t.innerText=e,l.appendChild(t)})))}const n=()=>{const n=document.getElementById("add-task-button"),d=document.getElementById("content"),l=document.getElementById("tittle");n.style.display="none";const c=document.createElement("form");c.id="form";const o=document.createElement("label");o.for="tittle-input",o.innerText="Tittle:";const i=document.createElement("input");i.type="text",i.id="tittle-input";const s=document.createElement("label");s.for="details-input",s.innerText="Details(Optional):";const a=document.createElement("input");a.id="details-input";const m=document.createElement("button");m.type="button",m.innerText="Add";const r=document.createElement("button");r.type="button",r.innerText="Cancel",c.appendChild(o),c.appendChild(i),c.appendChild(s),c.appendChild(a),c.appendChild(m),c.appendChild(r),d.appendChild(c),m.addEventListener("click",(()=>{e[l.innerText][i.value]={},e[l.innerText][i.value]={details:a.value,test:"hola"},n.style.display="inline",c.style.display="none",t(d,n,l)})),r.addEventListener("click",(()=>{c.style.display="none",n.style.display="inline"}))},d=e=>{document.getElementById("content").remove();const d=document.createElement("div");d.id="content";const l=document.createElement("p");l.innerText=e,l.id="tittle";const c=document.createElement("button");c.id="add-task-button",c.innerText="Add Task",d.appendChild(l),d.appendChild(c),t(d,c,l),document.body.appendChild(d),c.addEventListener("click",n)},l=e=>{e.addEventListener("mouseover",(()=>{"clicked"!==e.className&&e.setAttribute("class","hovered")})),e.addEventListener("mouseout",(()=>{"clicked"!==e.className&&e.removeAttribute("class")})),e.addEventListener("click",(()=>{let t=document.querySelector(".clicked");null==t||t.removeAttribute("class"),e.setAttribute("class","clicked")}))};document.querySelectorAll("button").forEach((e=>{l(e)})),document.getElementById("important").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="Important",t.id="tittle",e.appendChild(t),document.body.appendChild(e)})),document.getElementById("all-tasks").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="All tasks",t.id="tittle",e.appendChild(t),document.body.appendChild(e)})),document.getElementById("today").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="Today",t.id="tittle",e.appendChild(t),document.body.appendChild(e)})),document.getElementById("next-seven-days").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="All tasks",t.id="tittle",e.appendChild(t),document.body.appendChild(e)}));const c=document.getElementById("todos");c.addEventListener("click",(()=>d(c.innerText))),(()=>{const t=document.getElementById("new-project-div"),n=document.getElementById("add-project-button"),c=document.getElementById("add"),o=document.getElementById("cancel"),i=document.getElementById("projects-list"),s=document.getElementById("input");n.addEventListener("click",(()=>{n.style.display="none",t.style.display="flex"})),o.addEventListener("click",(()=>{t.style.display="none",n.style.display="inline",s.value=""})),c.addEventListener("click",(()=>{const c=document.createElement("button");c.innerText=s.value,i.insertBefore(c,n),t.style.display="none",n.style.display="inline",e[c.innerText]={},console.log(e),s.value="",c.addEventListener("click",(()=>d(c.innerText))),l(c)}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsVUFDaERzQyxFQUFpQjdDLFVBQVk0QyxFQUFNaEIsTUFDbkNlLEVBQWFsQyxhQUFhb0MsRUFBa0JILEdBQzVDRCxFQUFXekIsTUFBTUMsUUFBVSxPQUMzQnlCLEVBQWlCMUIsTUFBTUMsUUFBVSxTQUNqQ3pCLEVBQVlxRCxFQUFpQjdDLFdBQVcsQ0FBQyxFQUN6Q0YsUUFBUUMsSUFBSVAsR0FDWm9ELEVBQU1oQixNQUFRLEdBR2RpQixFQUFpQmxCLGlCQUFpQixTQUFRLElBQUssRUFBZWtCLEVBQWlCN0MsYUFFL0UsRUFBa0I2QyxFQUFpQixHQUl0QyxFTFBMLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC0yLy4vc3JjL3Byb2plY3RzT2JqLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0LTIvLi9zcmMvc2hvd1Rhc2tzTGlzdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC0yLy4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QtMi8uL3NyYy9wcm9qZWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC0yLy4vc3JjL21vdXNlT3Zlck91dENsaWNrLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0LTIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QtMi8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QtMi8uL3NyYy9hbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC0yLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0LTIvLi9zcmMvbmV4dFNldmVuRGF5cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC0yLy4vc3JjL2FkZFByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHByb2plY3RzT2JqID17VG9kb3M6e319O1xuXG5cblxuZXhwb3J0ICB7cHJvamVjdHNPYmp9OyIsImltcG9ydCB7IHByb2plY3RzT2JqIH0gZnJvbSBcIi4vcHJvamVjdHNPYmpcIjtcblxuZnVuY3Rpb24gc2hvd1Rhc2tzTGlzdCAoY29udGVudCxhZGRUYXNrQnV0dG9uLHRpdHRsZSl7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRpdHRsZSk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c09iaik7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c09ialt0aXR0bGUuaW5uZXJUZXh0XSk7XG4gICAgICBsZXQgdGFza3NVbCA9IG51bGw7XG4gICAgLy9jaGVjayBpZiB0aGVyZSBpcyBhdGxlc2F0IDEgdGFza1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9qZWN0c09ialt0aXR0bGUuaW5uZXJUZXh0XSkubGVuZ3RoPjApe1xuICAgICAgICAvL2NoZWNrcyBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIHVsXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtdWxcIik9PW51bGwpe1xuICAgICAgICB0YXNrc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICB0YXNrc1VsLmlkPSBcInRhc2tzLXVsXCI7XG4gICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUodGFza3NVbCxhZGRUYXNrQnV0dG9uKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLXVsXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGFza3NVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIHRhc2tzVWwuaWQ9IFwidGFza3MtdWxcIjtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzVWwsYWRkVGFza0J1dHRvbik7XG4gICAgICAgIH07XG4gICAgICAgXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb2plY3RzT2JqW3RpdHRsZS5pbm5lclRleHRdKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICB0YXNrTGkuaW5uZXJUZXh0PSB0YXNrO1xuICAgICAgICAgIHRhc2tzVWwuYXBwZW5kQ2hpbGQodGFza0xpKTtcbiAgICBcbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBcbiAgZXhwb3J0IHtzaG93VGFza3NMaXN0fTtcblxuICAvL21ha2UgaXQgbm9uIGRlcGVuZGFuIG9uIHBsYWNlIHB1dCB0aGUgc2hvd3Rhc2tzIGxpc3QgZnVuY3Rpb24iLCJcbmltcG9ydCB7IHByb2plY3RzT2JqIH0gZnJvbSBcIi4vcHJvamVjdHNPYmpcIjtcblxuaW1wb3J0IHsgc2hvd1Rhc2tzTGlzdCB9IGZyb20gXCIuL3Nob3dUYXNrc0xpc3RcIjtcblxuY29uc3QgYWRkVGFzayA9ICgpPT57XG4vLy8gZ2V0cyBhZGRUYXNrQnV0dG9uIGFuZCBjb250ZW50IGZyb20gcHJvamVjdCBjb250ZW50XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgdGl0dGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXR0bGVcIik7XG5cbiAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8vIGNyZWF0ZXMgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlkPVwiZm9ybVwiO1xuXG4gICAgY29uc3QgdGl0dGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0dGxlTGFiZWwuZm9yPVwidGl0dGxlLWlucHV0XCJcbiAgICB0aXR0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdHRsZTpcIlxuXG4gICAgY29uc3QgdGl0dGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0dGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdHRsZUlucHV0LmlkID0gXCJ0aXR0bGUtaW5wdXRcIjtcblxuICAgIGNvbnN0IGRldGFpbHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXRhaWxzTGFiZWwuZm9yPVwiZGV0YWlscy1pbnB1dFwiXG4gICAgZGV0YWlsc0xhYmVsLmlubmVyVGV4dCA9IFwiRGV0YWlscyhPcHRpb25hbCk6XCJcblxuICAgIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBcbiAgICBkZXRhaWxzSW5wdXQuaWQgPSBcImRldGFpbHMtaW5wdXRcIjtcblxuICAgIGNvbnN0IGFkZEJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0PVwiQWRkXCI7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dD1cIkNhbmNlbFwiO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXR0bGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXR0bGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PnsgXG4gICAgICAgIHByb2plY3RzT2JqW3RpdHRsZS5pbm5lclRleHRdW3RpdHRsZUlucHV0LnZhbHVlXT17fTtcbiAgICAgICAgcHJvamVjdHNPYmpbdGl0dGxlLmlubmVyVGV4dF1bdGl0dGxlSW5wdXQudmFsdWVdPXtkZXRhaWxzOiBkZXRhaWxzSW5wdXQudmFsdWUsIHRlc3Q6IFwiaG9sYVwifTtcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XG4gICAgICAgIHNob3dUYXNrc0xpc3QoY29udGVudCxhZGRUYXNrQnV0dG9uLHRpdHRsZSk7XG5cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIH0pXG4gICAgXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2s7IiwiIGltcG9ydCBhZGRUYXNrIGZyb20gXCIuL2FkZFRhc2tcIjtcbiBcbmltcG9ydCB7IHNob3dUYXNrc0xpc3QgfSBmcm9tIFwiLi9zaG93VGFza3NMaXN0XCI7XG5cblxuXG4gY29uc3QgcHJvamVjdENvbnRlbnQgPSAobmFtZSk9PntcbiAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjdXJyZW50Q29udGVudC5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuICAgIGNvbnN0IHRpdHRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdHRsZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIHRpdHRsZS5pZD1cInRpdHRsZVwiO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J1dHRvbi5pZCA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lclRleHQ9XCJBZGQgVGFza1wiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXR0bGUpO1xuICAgICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICBzaG93VGFza3NMaXN0KGNvbnRlbnQsYWRkVGFza0J1dHRvbix0aXR0bGUpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFkZFRhc2spO1xuXG4gfVxuXG4gZXhwb3J0IGRlZmF1bHQgcHJvamVjdENvbnRlbnQ7XG4iLCJjb25zdCBtb3VzZU92ZXJPdXRDbGljayA9IChidXR0b24pPT57XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgICgpPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYoYnV0dG9uLmNsYXNzTmFtZSAhPT1cImNsaWNrZWRcIil7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvdmVyZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgICgpPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYoYnV0dG9uLmNsYXNzTmFtZSAhPT1cImNsaWNrZWRcIil7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7fVxuXG4gICAgfSk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCk9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJldml1c2x5Q2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xpY2tlZFwiKTtcbiAgICAgICAgaWYgKHByZXZpdXNseUNsaWNrZWQ9PW51bGwpe31lbHNle1xuICAgICAgICAgICAgcHJldml1c2x5Q2xpY2tlZC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NsaWNrZWQnKTsgICBcbiAgICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3VzZU92ZXJPdXRDbGljazsiLCJpbXBvcnQgaW1wb3J0YW50IGZyb20gXCIuL2ltcG9ydGFudFwiO1xuXG5pbXBvcnQgYWxsVGFza3MgZnJvbSBcIi4vYWxsVGFza3NcIjtcbmltcG9ydCBuZXh0U2V2ZW5EYXlzIGZyb20gXCIuL25leHRTZXZlbkRheXNcIjtcbmltcG9ydCB0b2RheSBmcm9tIFwiLi90b2RheVwiO1xuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vYWRkUHJvamVjdFwiO1xuaW1wb3J0IHByb2plY3RDb250ZW50IGZyb20gXCIuL3Byb2plY3RDb250ZW50XCI7XG5pbXBvcnQgbW91c2VPdmVyT3V0Q2xpY2sgZnJvbSBcIi4vbW91c2VPdmVyT3V0Q2xpY2tcIjtcblxuXG5cblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5cbmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuXG5tb3VzZU92ZXJPdXRDbGljayhidXR0b24pO1xuXG59KTtcblxuY29uc3QgaW1wb3J0YW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRhbnRcIik7XG5pbXBvcnRhbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW1wb3J0YW50KTtcblxuY29uc3QgYWxsVGFza3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrc1wiKTtcbmFsbFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFsbFRhc2tzKTtcblxuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xudG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdG9kYXkpO1xuXG5jb25zdCBuZXh0U2V2ZW5EYXlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXNldmVuLWRheXNcIik7XG5uZXh0U2V2ZW5EYXlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5leHRTZXZlbkRheXMpO1xuXG5jb25zdCB0b2Rvc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XG50b2Rvc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+IHByb2plY3RDb250ZW50KHRvZG9zQnV0dG9uLmlubmVyVGV4dCkpO1xuXG5hZGRQcm9qZWN0KCk7XG5cblxuXG5cblxuIiwiY29uc3QgaW1wb3J0YW50ID0gKCk9PntcbiAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjdXJyZW50Q29udGVudC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29uc3QgdGl0dGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXR0bGUuaW5uZXJUZXh0PVwiSW1wb3J0YW50XCI7XG4gICAgdGl0dGxlLmlkPVwidGl0dGxlXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXR0bGUpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGltcG9ydGFudDsiLCJjb25zdCBhbGxUYXNrcyA9ICgpPT57XG4gICAgY29uc3QgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY3VycmVudENvbnRlbnQucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnN0IHRpdHRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0dGxlLmlubmVyVGV4dD1cIkFsbCB0YXNrc1wiO1xuICAgIHRpdHRsZS5pZD1cInRpdHRsZVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0dGxlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGxUYXNrczsiLCJjb25zdCB0b2RheSA9ICgpPT57XG4gICAgY29uc3QgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY3VycmVudENvbnRlbnQucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnN0IHRpdHRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0dGxlLmlubmVyVGV4dD1cIlRvZGF5XCI7XG4gICAgdGl0dGxlLmlkPVwidGl0dGxlXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXR0bGUpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5OyIsImNvbnN0IG5leHRTZXZlbkRheXMgPSAoKT0+e1xuICAgIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGN1cnJlbnRDb250ZW50LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb25zdCB0aXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdHRsZS5pbm5lclRleHQ9XCJBbGwgdGFza3NcIjtcbiAgICB0aXR0bGUuaWQ9XCJ0aXR0bGVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdHRsZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV4dFNldmVuRGF5czsiLCJpbXBvcnQgcHJvamVjdENvbnRlbnQgZnJvbSBcIi4vcHJvamVjdENvbnRlbnRcIjtcbmltcG9ydCBtb3VzZU92ZXJPdXRDbGljayBmcm9tIFwiLi9tb3VzZU92ZXJPdXRDbGlja1wiO1xuaW1wb3J0IHsgcHJvamVjdHNPYmogfSBmcm9tIFwiLi9wcm9qZWN0c09ialwiO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCk9PntcbiAgICAvL3NlYXJjaHMgZm9yIGh0bWwgZWxlbWVudHMgLCBwcm9qZWN0RGl2IGlzIGhpZGRlbiBieSBkZWZhdWx0IHdpdGggY3NzIGRpc3BsYXk6bm9uZVxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWRpdlwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7Ly9pbiBwcm9qZWN0RGl2XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIik7Ly9pbiBwcm9qZWN0RGl2XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTsvL2luIHByb2plY3REaXZcbiAgICBcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gICAgfSlcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBwcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSlcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsvL2l0cyB0aGUgbmV3IGNyZWF0ZWQgcHJvamVjdFxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0c0xpc3QuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3RCdXR0b24sIGFkZFByb2plY3RCdXR0b24pXG4gICAgICAgIHByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiIFxuICAgICAgICBwcm9qZWN0c09ialtuZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dF09e307XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzT2JqKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIC8vYWRkIHRvIHRoZSBuZXcgcHJvamVjdCBjcmVhdGVkLCBpdHMgb3duIGNvbnRlbnRcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+IHByb2plY3RDb250ZW50KG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0KSk7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgQUREIEhJR0hMSVRIRUQgQU5EIFNFTEVDVEVEIENTUyBQUk9QRVJUSUVTIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICBtb3VzZU92ZXJPdXRDbGljayhuZXdQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICAvL3Byb2plY3RzQXJyW3Byb2plY3RDb250ZW50KzFdPVtdO1xuICAgICAgICBcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0OyJdLCJuYW1lcyI6WyJwcm9qZWN0c09iaiIsIlRvZG9zIiwic2hvd1Rhc2tzTGlzdCIsImNvbnRlbnQiLCJhZGRUYXNrQnV0dG9uIiwidGl0dGxlIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsInRhc2tzVWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwidGFzayIsInRhc2tMaSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9ybSIsInRpdHRsZUxhYmVsIiwiZm9yIiwidGl0dGxlSW5wdXQiLCJ0eXBlIiwiZGV0YWlsc0xhYmVsIiwiZGV0YWlsc0lucHV0IiwiYWRkQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiZGV0YWlscyIsInRlc3QiLCJuYW1lIiwiYm9keSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInByZXZpdXNseUNsaWNrZWQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZG9zQnV0dG9uIiwicHJvamVjdERpdiIsImFkZFByb2plY3RCdXR0b24iLCJwcm9qZWN0c0xpc3QiLCJpbnB1dCIsIm5ld1Byb2plY3RCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9