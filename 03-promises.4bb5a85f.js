var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("7Y9D8");const u={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btn:document.querySelector("button"),form:document.querySelector("form")};function l(e,t){const o=Math.random()>.3;return new Promise(((n,u)=>{o?n(r.Notify.success(`Fulfilled promise ${e} in ${t}`)):u(r.Notify.failure(`Rejected promise ${e} in ${t}`))}))}u.form.addEventListener("submit",(function(e){console.log(u.btn),e.preventDefault();const t=Number(u.amount.value),o=Number(u.delay.value),n=Number(u.step.value);for(let e=1;e<=t;e++){let t=o+n*(e-1);setTimeout((()=>{l(e,t)}),t)}u.form.reset()}));
//# sourceMappingURL=03-promises.4bb5a85f.js.map
