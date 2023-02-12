(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s="/assets/javascript-8dac5379.svg",i=async()=>{const o=await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json();return console.log(o[0]),o[0]},l=async n=>{const o="Loading bitch...";document.querySelector("#app-title").innerHTML="BrakingBad App",n.innerHTML=o;const c=document.createElement("blockquote"),a=document.createElement("h3"),e=document.createElement("button");e.innerText="Next";const t=r=>{c.innerHTML=r.quote,a.innerHTML=r.author,n.replaceChildren(c,a,e)};e.addEventListener("click",async()=>{n.replaceChildren(o),t(await i())}),t(await i())};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${s}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card"></div>
  </div>
`;const d=document.querySelector(".card");l(d);
