import{l as a}from"./utils-DYUUmGX3.js";import{u as i}from"./cartCounter-xWrP7A_8.js";const c=["tents","backpacks","sleeping-bags","hammocks"];function l(o){const e=document.querySelector(".product-list"),n=o.map(t=>`
    <li>
      <a href="product_listing/index.html?category=${t}">
        <img src="images/category-${t}.svg" alt="${t}">
        <h2>${t.charAt(0).toUpperCase()+t.slice(1).replaceAll("-"," ")}</h2>
      </a>
    </li>
  `);e.innerHTML=n.join("")}async function r(){await a(),i(),l(c)}r();console.log("Modal script loaded");document.addEventListener("DOMContentLoaded",()=>{const o=t=>new Promise(s=>setTimeout(s,t)),e=document.getElementById("ad-modal");e.innerHTML=`
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>BIG SALE!</h2>
        <p>Avail our tents today! Save up to 20% Discount.</p>
    </div>`;const n=e.querySelector(".close-button");o(1500).then(()=>{e.classList.add("show")}),n.onclick=()=>{e.classList.remove("show")},window.onclick=t=>{t.target==e&&(e.style.display="none")}});
