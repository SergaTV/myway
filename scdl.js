// ==UserScript==
// @name            Press E to download
// @description     Download music from SoundCloud.
// @author          a
// @namespace       a
// @homepageURL     https://openuserjs.org/scripts/tumpio/Endless_Google
// @supportURL      https://github.com/tumpio/gmscripts/issues
// @icon            https://github.com/tumpio/gmscripts/raw/master/Endless_Google/large.png
// @include         https://soundcloud.*
// @run-at          document-start
// @version         0.0.7
// @license         MIT
// @noframes
// ==/UserScript==
// press e button to download song on soundcloud
function scdl() {
    if (typeof scdl.c == "undefined") {
        scdl.c = 0n;
    }
    let key = "scdl" + Math.floor(Math.random() * 0x100000000).toString(0x10).padStart(8, "0") + scdl.c++;
    let fuck = true;
    webpackJsonp.push([[], { [key]: function (_, __, r) {
        if (fuck) {
            fuck = false;
            return;
        }
        for (let idx = 0; typeof scdl.f == "undefined"; ++idx) {
            let obj = r(idx);
            if ("getCurrentSound" in obj) {
                scdl.f = obj;
            }
        }
        let player = scdl.f.getCurrentSound().player.player._player._controllerManager._cacheManager._players.find(e => e._playlistSegmentRetriever != null);
        if (!player) {
            return alert("Play a song.");
        }
        let segments = player._playlistSegmentRetriever._segments;
        if (player._playlist._data.segments.length != segments.length) {
            return alert("Song not fully downloaded yet.");
        }
        let u8_arrays = [];
        for (let idx = 0; idx < segments.length; ++idx) {
            u8_arrays.push(segments[idx].dataRetrieveJob._jobControl.progressUpdates.getProgressSoFar().data);
        }
        alert("issa " + player._transmuxerAndMimeType.mimeType);
        location = URL.createObjectURL(new Blob(u8_arrays, { type: "application/octet-stream" }));
    } }, [[key]]]);
}

document.addEventListener("keypress", function(e) {
    if (e.which == 101) {
        scdl();
    }
});
