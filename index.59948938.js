function e(){return{openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-menu]"),panes:document.querySelector("[data-panes]")}}const t=e();t.panes.addEventListener("click",function(e){if(e.preventDefault(),"A"!==e.target.nodeName&&!e.target.classList.contains("collapse-link__icon"))return;let n=t.panes.querySelector(".collapse-link--active");if(n&&n!==e.target){n.classList.remove("collapse-link--active"),n.classList.add("collapse-link--inactive");let e=n.getAttribute("href").slice(1),l=t.panes.querySelector(`#${e}`);l.classList.remove("collapse--active")}let l=e.target;l.classList.toggle("collapse-link--inactive"),l.classList.toggle("collapse-link--active");let c=l.getAttribute("href").slice(1),s=t.panes.querySelector(`#${c}`);s.classList.toggle("collapse--active")});const n=e();n.openMenuBtn.addEventListener("click",function(){n.mobileMenu.classList.add("mobile-menu--open"),document.body.classList.add("modal-open")}),n.closeMenuBtn.addEventListener("click",function(){n.mobileMenu.classList.remove("mobile-menu--open"),document.body.classList.remove("modal-open")});
//# sourceMappingURL=index.59948938.js.map
