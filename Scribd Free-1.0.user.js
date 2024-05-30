// ==UserScript==
// @name         Scribd Free
// @namespace    https://www.youtube.com/channel/UC_FFw-90w_XPp0jdCeHZUxA/
// @version      1.0
// @description  Obtener cualquier documento de Scribd de manera gratuita.
// @author       El Blog de Trodi
// @match        *://*.scribd.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scribd.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const host = window.location.host;
    const pathName = window.location.pathname;
    const pathSplit = pathName.split("/");
    if (pathSplit[1] == "document") {
        const idDoc = pathSplit[2];
        const newUrl = `https://${host}/embeds/${idDoc}/content`;
        window.location.href = newUrl;
    } else if (pathSplit[1] == "embeds") {
        const toolbarTop = document.querySelector(".toolbar_top");
        toolbarTop.style.display = "flex";
        toolbarTop.style.justifyContent = "space-around";
        toolbarTop.innerHTML += `
      <a style="display: inline-flex; align-items: center; text-decoration: none" href="https://www.youtube.com/channel/UC_FFw-90w_XPp0jdCeHZUxA/">
        <img style="width:30px; border-radius: 50%; padding: 3px; background: black" src="https://yt3.googleusercontent.com/2yf_HNXa2OiCHpHru1Fs3KqzWGmXBdSi9wTLfG_-Z3pfmG4XWw_BHlw5gbhbLCOklCFQjvuF3A=s176-c-k-c0x00ffffff-no-rj">
        <span style="margin-left: 0.5rem; font-weight: bold; font-size: 20px">El blog de Trodi</span>
        </a>`;
    }


})();