import{a as u,S as f,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="49651039-b61b5892bf5245ff30c976637";async function m(s){const t={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(d,{params:t})).data}let c;function y(s){const t=document.querySelector(".gallery"),n=s.map(o=>`
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
  `).join("");t.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new f(".gallery a")}function g(){document.querySelector(".gallery").innerHTML=""}const h=document.querySelector(".form");document.querySelector("#loader");h.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){a.error({message:"Please enter a search term.",position:"topRight"});return}g(),l(!0);try{const n=await m(t);n.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(n.hits)}catch(n){a.error({message:`Error: ${n.message}`,position:"topRight"})}finally{l(!1)}});function l(s){document.querySelector(".loader").classList.toggle("hidden",!s)}
//# sourceMappingURL=index.js.map
