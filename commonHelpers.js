import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i}from"./assets/vendor-77e16229.js";const e={dateForm:document.querySelector("#datetime-picker"),btnStart:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null,c=null;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(!t[0]||t[0]<=d.defaultDate){i.show({title:"Error",message:"Please choose a date in the future!",position:"topRight",titleColor:"white",messageColor:"white",backgroundColor:"red"});return}c=t[0],e.btnStart.addEventListener("click",S)}},C=t=>{const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:f}},o=t=>String(t).padStart(2,"0"),g=t=>{const{days:n,hours:r,minutes:s,seconds:a}=C(t);e.days.textContent=o(n),e.hours.textContent=o(r),e.minutes.textContent=o(s),e.seconds.textContent=o(a)},S=()=>{u=setInterval(()=>{const t=c-new Date;t<=0&&clearInterval(u),g(t)},1e3),i.show({title:"Info",message:"The countdown has started!",position:"topRight",titleColor:"white",messageColor:"white",backgroundColor:"blue"})};y(e.dateForm,d);
//# sourceMappingURL=commonHelpers.js.map
