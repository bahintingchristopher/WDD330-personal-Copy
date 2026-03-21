import{r as s,l as r,a as c}from"./utils-DYUUmGX3.js";import{u as n}from"./cartCounter-xWrP7A_8.js";import{P as o}from"./ProductData-BVjDHXcN.js";function l(t){const e=t.FinalPrice<t.SuggestedRetailPrice;(t.SuggestedRetailPrice-t.FinalPrice).toFixed(2);const a=Math.round((t.SuggestedRetailPrice-t.FinalPrice)/t.SuggestedRetailPrice*100);return`<li class="product-card ${e?"discounted":""}">
      <a href="/product_pages/?product=${t.Id}"> 
        <img src="${t.Images.PrimaryMedium}" alt="${t.Name}">

        ${e?`
          <span class="discount-badge">${a}% OFF</span>
        `:""}

        <h3>${t.Brand.Name}</h3>
        <p>${t.NameWithoutBrand}</p>

        <p class="product-card__price">
          $${t.FinalPrice}
        </p>

        ${e?`
          <p class="product-card__retail-price">
            <s>$${t.SuggestedRetailPrice}</s>
          </p>
        `:""}
      </a>
    </li>
    `}class d{constructor(e,a,i){this.category=e,this.dataSource=a,this.listElement=i}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e),document.querySelector(".title").textContent=this.category}renderList(e){s(l,this.listElement,e)}}async function u(){await r(),n();const t=c("category"),e=new o("tents"),a=document.querySelector(".product-list");new d(t,e,a).init()}u();
