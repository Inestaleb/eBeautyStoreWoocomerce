import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$6}from"./sc-format-number2.js";import{d as defineCustomElement$5}from"./sc-price-range2.js";import{d as defineCustomElement$4}from"./sc-product-item-image2.js";import{d as defineCustomElement$3}from"./sc-product-item-price2.js";import{d as defineCustomElement$2}from"./sc-product-item-title2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scProductItemCss=".product-item{text-decoration:none;padding-top:var(--sc-product-item-padding-top);padding-bottom:var(--sc-product-item-padding-bottom);padding-left:var(--sc-product-item-padding-left);padding-right:var(--sc-product-item-padding-right);margin-top:var(--sc-product-item-margin-top);margin-bottom:var(--sc-product-item-margin-bottom);margin-left:var(--sc-product-item-margin-left);margin-right:var(--sc-product-item-margin-right);border:solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);border-radius:var(--sc-product-item-border-radius);color:var(--sc-product-title-text-color);background-color:var(--sc-product-item-background-color);height:100%;box-sizing:border-box;display:grid}",ScProductItem=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.product=void 0,this.layoutConfig=void 0}render(){var t;return h("a",{href:null===(t=this.product)||void 0===t?void 0:t.permalink,class:{"product-item":!0}},this.product&&(this.layoutConfig||[]).map((t=>{var e,r,i,o;const c=t.attributes||{};switch(t.blockName){case"surecart/product-item-title":return h("sc-product-item-title",{part:"title"},null===(e=this.product)||void 0===e?void 0:e.name);case"surecart/product-item-image":return h("sc-product-item-image",{part:"image",product:this.product,sizing:null===(r=t.attributes)||void 0===r?void 0:r.sizing});case"surecart/product-item-price":return h("sc-product-item-price",{part:"price",prices:null===(i=this.product)||void 0===i?void 0:i.prices.data,range:!!(null==c?void 0:c.range),metrics:null===(o=this.product)||void 0===o?void 0:o.metrics});default:return null}})))}static get style(){return scProductItemCss}},[1,"sc-product-item",{product:[16],layoutConfig:[16]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-product-item","sc-format-number","sc-price-range","sc-product-item-image","sc-product-item-price","sc-product-item-title","sc-visually-hidden"].forEach((t=>{switch(t){case"sc-product-item":customElements.get(t)||customElements.define(t,ScProductItem);break;case"sc-format-number":customElements.get(t)||defineCustomElement$6();break;case"sc-price-range":customElements.get(t)||defineCustomElement$5();break;case"sc-product-item-image":customElements.get(t)||defineCustomElement$4();break;case"sc-product-item-price":customElements.get(t)||defineCustomElement$3();break;case"sc-product-item-title":customElements.get(t)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(t)||defineCustomElement$1()}}))}export{ScProductItem as S,defineCustomElement as d};