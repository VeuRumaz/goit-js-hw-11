import{S as c,i}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const d="44423682-ae5a9afd37f02d31d9155c276",f="https://pixabay.com/api/",u=async s=>{const t=await fetch(`${f}?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return await t.json()};function m(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(r=>`
    <a href="${r.largeImageURL}" class="gallery__link" data-caption="${r.tags}">
      <img src="${r.webformatURL}" alt="${r.tags}" class="gallery__image"/>
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
    </a>`).join(""),new c(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const p="/goit-js-hw-11/assets/error-4f06a8ee.svg",g=document.querySelector(".search-form"),y=document.querySelector(".gallery"),l=document.querySelector(".loader");i.settings({position:"topRight",resetOnHover:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,closeOnEscape:!0,theme:"dark",messageColor:"white",iconUrl:p,backgroundColor:"red",titleColor:"#fff",titleSize:"16px"});g.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(t===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}y.innerHTML="",l.classList.remove("hidden"),setTimeout(()=>{u(t).then(({hits:a})=>{a.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):m(a)}).catch(a=>{i.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",a)}).finally(()=>{l.classList.add("hidden")})},1e3)});
//# sourceMappingURL=commonHelpers.js.map
