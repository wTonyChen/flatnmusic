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
  function l(a) {
    if (t[a]) return t[a].exports;
    var s = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(s.exports, s, s.exports, l), (s.l = !0), s.exports;
  }
  (l.m = e),
    (l.c = t),
    (l.d = function (e, t, a) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          l.d(
            a,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = ""),
    l((l.s = 0));
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
        l = getComputedStyle(e),
        a = (e) => {
          let t = l.getPropertyValue("--" + e);
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
        s = (e) => {
          let t = void 0;
          return window.localStorage && (t = localStorage.getItem(e)), t;
        },
        n = a("wkhi-a"),
        r = a("wkhi-b");
      if (!r) return void e.parentElement.removeChild(e);
      document.documentElement.setAttribute("wk-style-assist", "true");
      let i = s("wkoptin") || !1,
        o = function () {
          let e = arguments[0];
          for (let t = 1; t < arguments.length; t++) {
            let l = RegExp("\\{" + t + "\\}", "g");
            e = e.replace(l, arguments[t]);
          }
          return e;
        };
      i &&
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
        s("wksfullpl") &&
          ((e) => {
            let t = a("wkhi-c"),
              l = a("wkhi-d");
            if (!t || !l) return;
            (t = t.split("|")), (l = l.split("|"));
            for (let e = 0; e < t.length; e++)
              for (let a = 0; a < l.length; a++)
                (s = t[e]),
                  (n = l[a]),
                  (document.cookie = `${s};path=${n};max-age=3153600000`);
            var s, n;
          })();
      let c = (e) => {
        if (
          (s("wkshiresimages") &&
            ((e) => {
              let t = document.querySelectorAll("img[data-src]");
              for (let e = 0; e < t; e++)
                t[e].dataset.src &&
                  "" == t[e].src &&
                  (t[e].src = t[e].dataset.src);
              let l = window.document.images;
              for (let e = 0; e < l.length; e++) {
                let t = l[e].src.split("?")[0];
                if (l[e].src != t) {
                  let a = new Image(),
                    s = (n) => {
                      l[e] &&
                        (l[e].src.split("?")[0] == t &&
                          ((l[e].src = t),
                          l[e].classList.add("wk-hires-loaded")),
                        a.removeEventListener("load", s, !1));
                    };
                  a.addEventListener("load", s, !1),
                    l[e].classList.remove("wk-hires-loaded"),
                    (a.src = t);
                }
              }
            })(),
          s("wksimprovedlook"))
        ) {
          if ("user" == location.pathname.substring(1).split("/")[0]) {
            let e = document.querySelector(".m-proifo dt img"),
              t = document.querySelector(".g-bd");
            e &&
              e.src &&
              t &&
              (document.documentElement.classList.add("has-upb"),
              (t.style.cssText = `--upb:url("${e.src}")`));
            let l = document.querySelector(".m-proifo .name .tit"),
              a = document.querySelector(".m-proifo .name #j-name-wrap");
            l &&
              a &&
              ((a.dataset.wkUsernameFull = a.title = l.innerText),
              a.classList.add("wk-full-username"));
          }
          let e = document.querySelector(".g-wrap>.m-info .cover img"),
            t = document.querySelector(".g-wrap>.m-info");
          e &&
            t &&
            (document.documentElement.classList.add("has-mib"),
            (t.style.cssText = `--mib:url("${e.src}")`));
        }
        let l =
            location.hash &&
            ("video" ==
              location.hash.substring(2).split("?")[0].split("/")[0] ||
              "mv" == location.hash.substring(2).split("?")[0].split("/")[0]),
          a = "/" == location.pathname,
          n =
            "video" == location.pathname.substring(1).split("/")[0] ||
            "mv" == location.pathname.substring(1).split("/")[0];
        if (
          s("wksmusicsessionmeta") &&
          "mediaSession" in navigator &&
          (n || (a && !l))
        ) {
          let l = document.querySelector(
              n ? ".n-mv .title h2" : ".m-playbar .words .name"
            ),
            a = document.querySelector(
              n ? ".n-mv .title .name" : ".m-playbar .words .by"
            ),
            s = document.querySelector(
              n ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
            ),
            r = [],
            i =
              (document.querySelector(n ? null : ".m-playbar .btns .prv"),
              document.querySelector(
                n
                  ? ".m-ctvideo.z-play .controls .wrap .play"
                  : ".m-playbar .btns .ply"
              ),
              document.querySelector(n ? null : ".m-playbar .btns .nxt"),
              document.querySelector(
                n ? ".m-ctvideo" : ".m-playbar .btns .ply"
              ));
          (i = i
            ? i.classList.contains(n ? "z-play" : "pas")
              ? "playing"
              : i.classList.contains(n ? "z-pause" : "ply")
              ? "paused"
              : "none"
            : "none"),
            s &&
              s.src &&
              (r = [
                {
                  src: s.src.split("?")[0] + "?param=96y96",
                  sizes: "96x96",
                  type: "image/jpeg",
                },
                {
                  src: s.src.split("?")[0] + "?param=128y128",
                  sizes: "128x128",
                  type: "image/jpeg",
                },
                {
                  src: s.src.split("?")[0] + "?param=192y192",
                  sizes: "192x192",
                  type: "image/jpeg",
                },
                {
                  src: s.src.split("?")[0] + "?param=256y256",
                  sizes: "256x256",
                  type: "image/jpeg",
                },
                {
                  src: s.src.split("?")[0] + "?param=384y384",
                  sizes: "384x384",
                  type: "image/jpeg",
                },
                {
                  src: s.src.split("?")[0] + "?param=512y512",
                  sizes: "512x512",
                  type: "image/jpeg",
                },
                { src: s.src.split("?")[0], sizes: "any", type: "image/jpeg" },
              ]);
          try {
            let e = {
              title: l ? l.innerText : document.title,
              artist: a ? a.innerText : "",
              album: a ? a.innerText : "",
              artwork: r,
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
              n &&
              ((t = e),
              (navigator.mediaSession.metadata = new MediaMetadata(t)));
          } catch (e) {}
        }
      };
      c(), window.setInterval(c, 2e3);
      r &&
        (function () {
          if ("/user/update" == location.pathname) {
            let e = (e) => {
              let t = document.querySelector("#baseBox");
              if (t) {
                let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.1.7-0.7.15</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${n}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                  l =
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
                  r = "";
                for (let e = 0; e < a.length; e++) {
                  if (a[e].roi && !i) continue;
                  let t = !0;
                  if (a[e].test) {
                    t = !1;
                    try {
                      t = !!window.eval(a[e].test);
                    } catch (e) {}
                  }
                  if (!t) continue;
                  let n = s(a[e].lsm);
                  r += o(
                    l,
                    a[e].label,
                    `${n ? "checked " : ""}data-wk-lsm="${a[e].lsm}"`
                  );
                }
                r = o(e, r);
                let c = document.createElement("div");
                (c.className = "n-priv f-cb"),
                  (c.innerHTML = r),
                  c.addEventListener("change", (e) => {
                    let t = e.target.closest("[data-wk-lsm]"),
                      l = t.dataset.wkLsm;
                    t &&
                      l &&
                      ((e, t) => {
                        window.localStorage && localStorage.setItem(e, t);
                      })(l, t.checked ? "1" : "");
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
