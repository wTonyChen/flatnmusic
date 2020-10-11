// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh-CN 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh-CN 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.1.6-0.7.13
// @author wTonyChen (https://wtonychen.github.io)
// @compatible chrome 83+
// @compatible edge 83+
// @compatible opera 67+
// @compatible firefox 78+
// @license Apache-2.0
// @homepage https://wtonychen.github.io/flatnmusic/
// @supportURL https://github.com/wTonyChen/flatnmusic/issues
// @updateURL https://wtonychen.github.io/flatnmusic/flatnmusic.user.js
// @match http*://music.163.com/*
// @run-at document-end
// @grant none
// ==/UserScript==

!(function (e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var l = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(l.exports, l, l.exports, a), (l.l = !0), l.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var l in e)
          a.d(
            n,
            l,
            function (t) {
              return e[t];
            }.bind(null, l)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 0));
})([
  function (e, t) {
    !(function () {
      "use strict";
      let e = document.querySelector(".wk-fnm-hi-cfg");
      e ||
        ((e = document.createElement("div")),
        (e.className = "wk-fnm-hi-cfg"),
        document.body.appendChild(e));
      let t,
        a = getComputedStyle(e),
        n = (e) => {
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
        l = (e) => {
          let t = void 0;
          return window.localStorage && (t = localStorage.getItem(e)), t;
        },
        s = n("wkhi-a"),
        i = n("wkhi-b");
      if (!i) return void e.parentElement.removeChild(e);
      document.documentElement.setAttribute("wk-style-assist", "true");
      let r = l("wkoptin") || !1,
        o = function () {
          let e = arguments[0];
          for (let t = 1; t < arguments.length; t++) {
            let a = RegExp("\\{" + t + "\\}", "g");
            e = e.replace(a, arguments[t]);
          }
          return e;
        };
      r &&
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
        l("wksfullpl") &&
          ((e) => {
            let t = n("wkhi-c"),
              a = n("wkhi-d");
            if (!t || !a) return;
            (t = t.split("|")), (a = a.split("|"));
            for (let e = 0; e < t.length; e++)
              for (let n = 0; n < a.length; n++)
                (l = t[e]),
                  (s = a[n]),
                  (document.cookie = `${l};path=${s};max-age=3153600000`);
            var l, s;
          })();
      let c = (e) => {
        if (
          (l("wkshiresimages") &&
            ((e) => {
              let t = document.querySelectorAll("img[data-src]");
              for (let e = 0; e < t; e++)
                t[e].dataset.src &&
                  "" == t[e].src &&
                  (t[e].src = t[e].dataset.src);
              let a = window.document.images;
              for (let e = 0; e < a.length; e++) {
                let t = a[e].src.split("?")[0];
                if (a[e].src != t) {
                  let n = new Image(),
                    l = (s) => {
                      a[e] &&
                        (a[e].src.split("?")[0] == t &&
                          ((a[e].src = t),
                          a[e].classList.add("wk-hires-loaded")),
                        n.removeEventListener("load", l, !1));
                    };
                  n.addEventListener("load", l, !1),
                    a[e].classList.remove("wk-hires-loaded"),
                    (n.src = t);
                }
              }
            })(),
          l("wksimprovedlook"))
        ) {
          if (0 == location.pathname.indexOf("/user/")) {
            let e = document.querySelector(".m-proifo dt img"),
              t = document.querySelector(".g-bd");
            e &&
              e.src &&
              t &&
              (document.documentElement.classList.add("has-upb"),
              (t.style.cssText = `--upb:url("${e.src}")`));
            let a = document.querySelector(".m-proifo .name .tit"),
              n = document.querySelector(".m-proifo .name #j-name-wrap");
            a &&
              n &&
              ((n.dataset.wkUsernameFull = n.title = a.innerText),
              n.classList.add("wk-full-username"));
          }
          let e = document.querySelector(".g-wrap>.m-info .cover img"),
            t = document.querySelector(".g-wrap>.m-info");
          e &&
            t &&
            (document.documentElement.classList.add("has-mib"),
            (t.style.cssText = `--mib:url("${e.src}")`));
        }
        let a =
            location.hash &&
            (0 == location.hash.indexOf("#/video") ||
              0 == location.hash.indexOf("#/mv")),
          n = "/" == location.pathname,
          s =
            0 == location.pathname.indexOf("/video") ||
            0 == location.pathname.indexOf("/mv");
        if (
          l("wksmusicsessionmeta") &&
          "mediaSession" in navigator &&
          (s || (n && !a))
        ) {
          let a = document.querySelector(
              s ? ".n-mv .title h2" : ".m-playbar .words .name"
            ),
            n = document.querySelector(
              s ? ".n-mv .title .name" : ".m-playbar .words .by"
            ),
            l = document.querySelector(
              s ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
            ),
            i = [],
            r = document.querySelector(s ? null : ".m-playbar .btns .prv"),
            o = document.querySelector(
              s
                ? ".m-ctvideo.z-play .controls .wrap .play"
                : ".m-playbar .btns .ply"
            ),
            c = document.querySelector(s ? null : ".m-playbar .btns .nxt"),
            d = document.querySelector(
              s ? ".m-ctvideo" : ".m-playbar .btns .ply"
            );
          (d = d
            ? d.classList.contains(s ? "z-play" : "pas")
              ? "playing"
              : d.classList.contains(s ? "z-pause" : "ply")
              ? "paused"
              : "none"
            : "none"),
            l &&
              l.src &&
              (i = [
                {
                  src: l.src.split("?")[0] + "?param=96y96",
                  sizes: "96x96",
                  type: "image/jpeg",
                },
                {
                  src: l.src.split("?")[0] + "?param=128y128",
                  sizes: "128x128",
                  type: "image/jpeg",
                },
                {
                  src: l.src.split("?")[0] + "?param=192y192",
                  sizes: "192x192",
                  type: "image/jpeg",
                },
                {
                  src: l.src.split("?")[0] + "?param=256y256",
                  sizes: "256x256",
                  type: "image/jpeg",
                },
                {
                  src: l.src.split("?")[0] + "?param=384y384",
                  sizes: "384x384",
                  type: "image/jpeg",
                },
                {
                  src: l.src.split("?")[0] + "?param=512y512",
                  sizes: "512x512",
                  type: "image/jpeg",
                },
                { src: l.src.split("?")[0], sizes: "any", type: "image/jpeg" },
              ]);
          try {
            let e = {
              title: a ? a.innerText : document.title,
              artist: n ? n.innerText : "",
              album: n ? n.innerText : "",
              artwork: i,
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
            })(e, t) &&
              s &&
              ((t = e),
              (navigator.mediaSession.metadata = new MediaMetadata(t)));
          } catch (e) {}
          navigator.mediaSession.setActionHandler(
            "play",
            o
              ? (e) => {
                  o && o.click();
                }
              : null
          ),
            navigator.mediaSession.setActionHandler(
              "pause",
              o
                ? (e) => {
                    o && o.click();
                  }
                : null
            ),
            navigator.mediaSession.setActionHandler(
              "previoustrack",
              r
                ? (e) => {
                    r && r.click();
                  }
                : null
            ),
            navigator.mediaSession.setActionHandler(
              "nexttrack",
              c
                ? (e) => {
                    c && c.click();
                  }
                : null
            );
        }
      };
      c(), window.setInterval(c, 2e3);
      i &&
        (function () {
          if ("/user/update" == location.pathname) {
            let e = (e) => {
              let t = document.querySelector("#baseBox");
              if (t) {
                let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.1.6-0.7.13</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${s}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                  a =
                    '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                  n = [
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
                        "&#x542f;&#x7528;&#x5a92;&#x4f53;&#x952e;&#x63a7;&#x5236;&#x548c;&#x5a92;&#x4f53;&#x4fe1;&#x606f;&#x663e;&#x793a;&#xff08;&#x9700;&#x8981;&#x64cd;&#x4f5c;&#x7cfb;&#x7edf;&#x652f;&#x6301;&#xff09;",
                      lsm: "wksmusicsessionmeta",
                      test: "'mediaSession' in navigator",
                    },
                  ],
                  i = "";
                for (let e = 0; e < n.length; e++) {
                  if (n[e].roi && !r) continue;
                  let t = !0;
                  if (n[e].test) {
                    t = !1;
                    try {
                      t = !!window.eval(n[e].test);
                    } catch (e) {}
                  }
                  if (!t) continue;
                  let s = l(n[e].lsm);
                  i += o(
                    a,
                    n[e].label,
                    `${s ? "checked " : ""}data-wk-lsm="${n[e].lsm}"`
                  );
                }
                i = o(e, i);
                let c = document.createElement("div");
                (c.className = "n-priv f-cb"),
                  (c.innerHTML = i),
                  c.addEventListener("change", (e) => {
                    let t = e.target.closest("[data-wk-lsm]"),
                      a = t.dataset.wkLsm;
                    t &&
                      a &&
                      ((e, t) => {
                        window.localStorage && localStorage.setItem(e, t);
                      })(a, t.checked ? "1" : "");
                  }),
                  t.appendChild(c);
              }
            };
            window.addEventListener("load", e);
          }
        })();
    })();
  },
]);
