import"./modulepreload-polyfill-B5Qt9EMX.js";async function n(e){return(await fetch(e)).text()}function i(e,t=document){return t.querySelector(e)}const s={properties:[],filteredProperties:[],filters:{}};function u(e){const t=e.querySelector("#menuBtn"),r=e.querySelector("nav");t.addEventListener("click",()=>{r.classList.toggle("hidden")})}document.getElementById("menuBtn").addEventListener("click",function(){document.getElementById("sidebar").classList.toggle("active")});function p(e,t){const r=e.querySelector("#filterType"),a=e.querySelector("#filterBeds"),c=e.querySelector("#filterPrice"),l=e.querySelector("#applyFilters"),d=e.querySelector("#clearFilters");l.addEventListener("click",()=>{t({type:r.value,beds:a.value,maxPrice:Number(c.value)||1/0})}),d.addEventListener("click",()=>{r.value="",a.value="",c.value="",t({type:"",beds:"",maxPrice:1/0})})}async function y(){const t=await(await fetch("data/properties.json")).json();return s.properties=t,s.filteredProperties=t,console.log("PROPIEDADES CARGADAS:",t.length),t}function o(e,t){console.log("CONTAINER:",e),console.log("Renderizando propiedades:",t),e.innerHTML="",t.forEach(r=>{const a=document.createElement("article");a.classList.add("property-card"),r.featured&&a.classList.add("featured"),a.innerHTML=`
      <img src="${r.image}" alt="${r.title}" class="property-card__image">
      <div class="property-card__body">
        <h3 class="property-card__title">${r.title}</h3>
        <p class="property-card__meta">${r.city} - ${r.type}</p>
        <div class="property-card__info">
          <span class="property-card__price">ARS ${r.price.toLocaleString()}</span>
          <span class="property-card__beds">${r.beds} dormitorios</span>
        </div>
        <div class="property-card__actions">
          <button class="btn btn--primary">Ver</button>
          <button class="btn btn--secondary">Contactar</button>
        </div>
      </div>
    `,e.appendChild(a)})}function f(e,t){if(!t||!t.length)return;const r=t[0],a=e.querySelector(".carousel"),c=`
    <div class="carousel__content">
      <h2 class="carousel__title">${r.title}</h2>
      <p class="carousel__subtitle">${r.subtitle}</p>
      <div class="carousel__actions">
        <a href="${r.ctaPrimary.target}" class="btn btn--primary">${r.ctaPrimary.label}</a>
        <a href="${r.ctaSecondary.target}" class="btn btn--secondary">${r.ctaSecondary.label}</a>
        </div>
      </div>
      <div class="carousel__media">
        <img src="${r.image}" alt="${r.title}">
      </div>
 `;a.innerHTML=c}function m(){const e=i("#year");e&&(e.textContent=new Date().getFullYear())}async function b(){return await(await fetch("data/carousel.json")).json()}function v(e){s.filters=e,s.filteredProperties=s.properties.filter(t=>!(e.type&&t.type!==e.type||e.beds&&t.beds<e.beds||t.price>e.maxPrice)),o(i("#cardsGrid"),s.filteredProperties)}async function _(){const e=i("#app");e.innerHTML=`
    ${await n("components/navbar.html")}
    ${await n("components/carousel.html")}
    ${await n("components/filters.html")}
    ${await n("components/services.html")}
    ${await n("components/footer.html")}
  `,await y();const t=await b();u(e),p(e,v),f(e,t),m(),console.log("ANTES DEL RENDER"),o(i("#cardsGrid"),s.properties),console.log("DESPUÉS DEL RENDER")}_();
