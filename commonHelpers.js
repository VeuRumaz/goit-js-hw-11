import{S as c,i as n}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const d="44423682-ae5a9afd37f02d31d9155c276",f="https://pixabay.com/api/";async function u(o){const t=await fetch(`${f}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return t.json()}function m(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(r=>`
    <a href="${r.largeImageURL}" class="gallery__link">
      <img src="${r.webformatURL}" alt="${r.tags}" class="gallery__image"/>
      <div class="description">${r.tags}</div>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${r.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${r.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${r.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${r.downloads}</span>
        </div>
      </div>
    </a>`).join(""),new c(".gallery a").refresh()}const y=document.querySelector(".search-form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader");n.settings({position:"topRight"});y.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(t===""){n.error({title:"Error",message:"Search query cannot be empty!"});return}p.innerHTML="",l.classList.remove("hidden"),setTimeout(async()=>{try{const{hits:i}=await u(t);i.length===0?n.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):m(i)}catch{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{l.classList.add("hidden")}},3e3)});
//# sourceMappingURL=commonHelpers.js.map
