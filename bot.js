// ==UserScript==
// @name         LinkedIn Endorse-bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ternsip
// @match        www.linkedin.com/*
// ==/UserScript==


console.log("LinkedIn endorse bot started");

function endrose(item) {
    item.getElementsByClassName("endorse-plus")[0].click();
}

function endrose_all() {
    items = document.getElementsByClassName("endorse-item has-endorsements endorsable");
    for (i = 0; i < items.length; ++i) {
        if (items[i] !== undefined) {
            (function (item, index) {
                setTimeout(function() {console.log("click [" + index + "] button"); endrose(item); }, (index + 1) * 150);
            })(items[i], i);
        }
    }
}

start = setTimeout(endrose_all(), 250);