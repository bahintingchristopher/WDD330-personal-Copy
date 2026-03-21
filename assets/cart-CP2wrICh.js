import{l,g as d}from"./utils-DYUUmGX3.js";import{u}from"./cartCounter-xWrP7A_8.js";async function g(){await l(),u(),p()}function p(){let t=d("so-cart")||[];Array.isArray(t)||(t=[t]);const e=t.map(a=>m(a));document.querySelector(".product-list").innerHTML=e.join("");const r=document.querySelector(".cart-footer");if(t.length>0){r.classList.remove("hide");const a=t.reduce((c,s)=>{const o=Number(s.SuggestedRetailPrice),i=o*.2,n=o-i;return c+n},0);document.querySelector(".cart-total").textContent=`Total: $${a.toFixed(2)}`}else r.classList.add("hide")}function m(t){let e=t.Image||t.Images&&t.Images.PrimaryLarge||"";e.startsWith("http")||(e.startsWith("../")?e=e.replace("../","/"):e&&!e.startsWith("/")&&(e="/"+e));const a=(t.SuggestedRetailPrice*.2).toFixed(2),c=(t.SuggestedRetailPrice-a).toFixed(2);return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${e}" 
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>

  ${a>0?` 
  <p class="cart-card__discount"> Save $${a}! </p>
  <p class="cart-card__retail-price"> Suggested Price $${t.SuggestedRetailPrice} </p>
  `:""}
  <p class="cart-card__price">Final Price $${c}</p>
</li>`}g();
