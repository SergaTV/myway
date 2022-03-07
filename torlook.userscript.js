// ==UserScript==
// @name         torlook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://*.torlook.*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
document.addEventListener("keypress", function(e) {
    if (e.which == 101) {
         let yes = document.getElementsByTagName("html")[0].innerHTML.match(/<a href='(.+?)'.Download<\/a>/g);
         if (yes == null) alert("Тыкни на магнитик сначала");
         else {
             yes[0] = yes[0].replace("<a href='","").replace("'>Download</a>","")
             copyToClipboard(yes[0]);
             alert("Скопировано")
         }
    }
});
