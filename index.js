import{a as f,S as u,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="49651039-b61b5892bf5245ff30c976637";async function m(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(d,{params:r})).data}let c;function y(s){const r=document.querySelector(".gallery"),n=s.map(o=>`
    <li>
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${o.likes}</p>
        <p>Views: ${o.views}</p>
        <p>Comments: ${o.comments}</p>
        <p>Downloads: ${o.downloads}</p>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new u(".gallery a")}function g(){document.querySelector(".gallery").innerHTML=""}const h=document.querySelector(".form"),L=document.querySelector("#loader");h.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search term.",position:"topRight"});return}g(),l(!0);try{const n=await m(r);n.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(n.hits)}catch(n){a.error({message:`Error: ${n.message}`,position:"topRight"})}finally{l(!1)}});function l(s){L.classList.toggle("hidden",!s)}
//# sourceMappingURL=index.js.map
