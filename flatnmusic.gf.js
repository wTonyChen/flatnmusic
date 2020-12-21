// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh-CN 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh-CN 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.1.7-0.7.15
// @author wTonyChen (https://wtonychen.github.io)
// @compatible chrome 87+
// @compatible edge 87+
// @compatible opera 73+
// @compatible firefox 84+
// @license Apache-2.0
// @homepage https://wtonychen.github.io/flatnmusic/
// @supportURL https://github.com/wTonyChen/flatnmusic/issues
// @updateURL https://wtonychen.github.io/flatnmusic/flatnmusic.user.js
// @match http*://music.163.com/*
// @run-at document-end
// @grant none
// ==/UserScript==

!(function () {
  "use strict";
  let e = "wk-fnm-hi-cfg",
    t = document.querySelector("." + e);
  t ||
    ((t = document.createElement("div")),
    (t.className = e),
    document.body.appendChild(t));
  let s,
    a = getComputedStyle(t),
    l = (e) => {
      let t = a.getPropertyValue("--" + e);
      if (t)
        try {
          t &&
            t.indexOf("/") > -1 &&
            (t = decodeURIComponent(t.replace(/\//g, "%")));
        } catch (e) {}
      return (
        ((0 === t.indexOf('"') && t.lastIndexOf('"') === t.length - 1) ||
          (0 === t.indexOf("'") && t.lastIndexOf("'") === t.length - 1)) &&
          (t = t.substr(1, t.length - 2)),
        t
      );
    },
    i = (e) => {
      let t;
      return window.localStorage && (t = localStorage.getItem(e)), t;
    },
    n = l("wkhi-a"),
    r = l("wkhi-b");
  if (!r) return void t.parentElement.removeChild(t);
  document.documentElement.setAttribute("wk-style-assist", "true");
  let o = i("wkoptin") || !1,
    c = function () {
      let e = arguments[0];
      for (let t = 1; t < arguments.length; t++) {
        let s = RegExp("\\{" + t + "\\}", "g");
        e = e.replace(s, arguments[t]);
      }
      return e;
    };
  o &&
    ((DocumentFragment.prototype.appendChildHost =
      DocumentFragment.prototype.appendChild),
    (DocumentFragment.prototype.appendChild = function () {
      "g_playlist" == arguments[0].id
        ? arguments[0].classList.add("hidden")
        : this.appendChildHost.call(this, ...arguments);
    }),
    (Element.prototype.appendChildHost = Element.prototype.appendChild),
    (Element.prototype.appendChild = function () {
      "g_playlist" == arguments[0].id &&
        arguments[0].classList.remove("hidden"),
        this.appendChildHost.call(this, ...arguments);
    })),
    i("wksfullpl") &&
      ((e) => {
        let t = l("wkhi-c"),
          s = l("wkhi-d");
        if (t && s) {
          (t = t.split("|")), (s = s.split("|"));
          for (let e = 0; e < t.length; e++)
            for (let l = 0; l < s.length; l++)
              (a = t[e]),
                (i = s[l]),
                (document.cookie = `${a};path=${i};max-age=3153600000`);
          var a, i;
        }
      })();
  let p = (e) => {
    if (
      (i("wkshiresimages") &&
        ((e) => {
          let t = document.querySelectorAll("img[data-src]");
          for (let e = 0; e < t; e++)
            t[e].dataset.src && "" == t[e].src && (t[e].src = t[e].dataset.src);
          let s = window.document.images;
          for (let e = 0; e < s.length; e++) {
            let t = s[e].src.split("?")[0];
            if (s[e].src != t) {
              let a = new Image(),
                l = (i) => {
                  s[e] &&
                    (s[e].src.split("?")[0] == t &&
                      ((s[e].src = t), s[e].classList.add("wk-hires-loaded")),
                    a.removeEventListener("load", l, !1));
                };
              a.addEventListener("load", l, !1),
                s[e].classList.remove("wk-hires-loaded"),
                (a.src = t);
            }
          }
        })(),
      i("wksimprovedlook"))
    ) {
      if ("user" == location.pathname.substring(1).split("/")[0]) {
        let e = document.querySelector(".m-proifo dt img"),
          t = document.querySelector(".g-bd");
        e &&
          e.src &&
          t &&
          (document.documentElement.classList.add("has-upb"),
          (t.style.cssText = `--upb:url("${e.src}")`));
        let s = document.querySelector(".m-proifo .name .tit"),
          a = document.querySelector(".m-proifo .name #j-name-wrap");
        s &&
          a &&
          ((a.dataset.wkUsernameFull = a.title = s.innerText),
          a.classList.add("wk-full-username"));
      }
      let e = document.querySelector(".g-wrap>.m-info .cover img"),
        t = document.querySelector(".g-wrap>.m-info");
      e &&
        t &&
        (document.documentElement.classList.add("has-mib"),
        (t.style.cssText = `--mib:url("${e.src}")`));
    }
    let t =
        location.hash &&
        ("video" == location.hash.substring(2).split("?")[0].split("/")[0] ||
          "mv" == location.hash.substring(2).split("?")[0].split("/")[0]),
      a = "/" == location.pathname,
      l =
        "video" == location.pathname.substring(1).split("/")[0] ||
        "mv" == location.pathname.substring(1).split("/")[0];
    if (
      i("wksmusicsessionmeta") &&
      "mediaSession" in navigator &&
      (l || (a && !t))
    ) {
      let t = document.querySelector(
          l ? ".n-mv .title h2" : ".m-playbar .words .name"
        ),
        a = document.querySelector(
          l ? ".n-mv .title .name" : ".m-playbar .words .by"
        ),
        i = document.querySelector(
          l ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
        ),
        n = [],
        r =
          (document.querySelector(l ? null : ".m-playbar .btns .prv"),
          document.querySelector(
            l
              ? ".m-ctvideo.z-play .controls .wrap .play"
              : ".m-playbar .btns .ply"
          ),
          document.querySelector(l ? null : ".m-playbar .btns .nxt"),
          document.querySelector(l ? ".m-ctvideo" : ".m-playbar .btns .ply"));
      (r = r
        ? r.classList.contains(l ? "z-play" : "pas")
          ? "playing"
          : r.classList.contains(l ? "z-pause" : "ply")
          ? "paused"
          : "none"
        : "none"),
        i &&
          i.src &&
          (n = [
            {
              src: i.src.split("?")[0] + "?param=96y96",
              sizes: "96x96",
              type: "image/jpeg",
            },
            {
              src: i.src.split("?")[0] + "?param=128y128",
              sizes: "128x128",
              type: "image/jpeg",
            },
            {
              src: i.src.split("?")[0] + "?param=192y192",
              sizes: "192x192",
              type: "image/jpeg",
            },
            {
              src: i.src.split("?")[0] + "?param=256y256",
              sizes: "256x256",
              type: "image/jpeg",
            },
            {
              src: i.src.split("?")[0] + "?param=384y384",
              sizes: "384x384",
              type: "image/jpeg",
            },
            {
              src: i.src.split("?")[0] + "?param=512y512",
              sizes: "512x512",
              type: "image/jpeg",
            },
            { src: i.src.split("?")[0], sizes: "any", type: "image/jpeg" },
          ]);
      try {
        let e = {
          title: t ? t.innerText : document.title,
          artist: a ? a.innerText : "",
          album: a ? a.innerText : "",
          artwork: n,
        };
        !((e, t) => {
          if ("object" == typeof e)
            try {
              e = JSON.stringify(e);
            } catch (e) {}
          if ("object" == typeof t)
            try {
              t = JSON.stringify(t);
            } catch (e) {}
          return e == t;
        })(e, s) &&
          l &&
          ((s = e), (navigator.mediaSession.metadata = new MediaMetadata(s)));
      } catch (e) {}
    }
  };
  p(),
    window.setInterval(p, 2e3),
    r &&
      (function () {
        if ("/user/update" == location.pathname) {
          let e = (e) => {
            let t = document.querySelector("#baseBox");
            if (t) {
              let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.1.7-0.7.15</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${n}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                s =
                  '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                a = [
                  {
                    label:
                      "&#x4f7f;&#x7528;&#x6837;&#x5f0f;&#x8868;&#x7684;&#x589e;&#x5f3a;&#x5916;&#x89c2;",
                    lsm: "wksimprovedlook",
                  },
                  {
                    label: "&#x663e;&#x793a;&#x5b8c;&#x6574;&#x6b4c;&#x5355;",
                    lsm: "wksfullpl",
                  },
                  {
                    label: "&#x663e;&#x793a;&#x9ad8;&#x6e05;&#x56fe;&#x7247;",
                    lsm: "wkshiresimages",
                  },
                  {
                    label:
                      "&#x542f;&#x7528;&#x89c6;&#x9891;&#x9875;&#x9762;&#x7684;&#x5a92;&#x4f53;&#x4fe1;&#x606f;&#x663e;&#x793a;",
                    lsm: "wksmusicsessionmeta",
                    test: "'mediaSession' in navigator",
                  },
                ],
                l = "";
              for (let e = 0; e < a.length; e++) {
                if (a[e].roi && !o) continue;
                let t = !0;
                if (a[e].test) {
                  t = !1;
                  try {
                    t = !!window.eval(a[e].test);
                  } catch (e) {}
                }
                if (!t) continue;
                let n = i(a[e].lsm);
                l += c(
                  s,
                  a[e].label,
                  `${n ? "checked " : ""}data-wk-lsm="${a[e].lsm}"`
                );
              }
              l = c(e, l);
              let r = document.createElement("div");
              (r.className = "n-priv f-cb"),
                (r.innerHTML = l),
                r.addEventListener("change", (e) => {
                  let t = e.target.closest("[data-wk-lsm]"),
                    s = t.dataset.wkLsm;
                  t &&
                    s &&
                    ((e, t) => {
                      window.localStorage && localStorage.setItem(e, t);
                    })(s, t.checked ? "1" : "");
                }),
                t.appendChild(r);
            }
          };
          window.addEventListener("load", e);
        }
      })();
})();
