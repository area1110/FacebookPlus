const LEFT_NAV_CLASS =
  ".x9f619.x1ja2u2z.xnp8db0.x112wk31.xnjgh8c.xxc7z9f.x1t2pt76.x1u2d2a2.x6ikm8r.x10wlt62.x1xzczws.x7wzq59.xxzkxad.x9e5oc1";
const TOP_NAV_CLASS = ".xds687c.xixxii4.x17qophe.x13vifvy.x1vjfegm";
const RIGHT_NAV_CLASS = ".x9f619.x1ja2u2z.xnp8db0.x112wk31.xnjgh8c.xxc7z9f.x1t2pt76.x1u2d2a2.x6ikm8r.x10wlt62.x7wzq59.xxzkxad.x1daaz14";
window.onload = function (){
    hideElement(LEFT_NAV_CLASS);
    hideElement(TOP_NAV_CLASS);
    hideElement(RIGHT_NAV_CLASS);
}

function hideElement(className){
    document.querySelectorAll(className)[0].style.display = "none";
}