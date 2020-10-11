// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh-CN 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh-CN 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.1.5-0.7.12
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
  function n(l) {
    if (t[l]) return t[l].exports;
    var a = (t[l] = { i: l, l: !1, exports: {} });
    return e[l].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, l) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (
        (n.r(l),
        Object.defineProperty(l, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            l,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return l;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t) {
    !(function () {
      "use strict";
      let e = document.querySelector(".wk-fnm-hi-cfg");
      e ||
        ((e = document.createElement("div")),
        (e.className = "wk-fnm-hi-cfg"),
        document.body.appendChild(e));
      let t = getComputedStyle(e),
        n = (e) => {
          let n = t.getPropertyValue("--" + e);
          if (n)
            try {
              n &&
                n.indexOf("/") > -1 &&
                (n = decodeURIComponent(n.replace(/\//g, "%")));
            } catch (e) {}
          return (
            ((0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1) ||
              (0 === n.indexOf("'") && n.lastIndexOf("'") === n.length - 1)) &&
              (n = n.substr(1, n.length - 2)),
            n
          );
        },
        l = (e) => {
          let t = void 0;
          return window.localStorage && (t = localStorage.getItem(e)), t;
        },
        a = n("wkhi-a"),
        r = n("wkhi-b");
      if (!r) return void e.parentElement.removeChild(e);
      document.documentElement.setAttribute("wk-style-assist", "true");
      let o = l("wkoptin") || !1,
        s = function () {
          let e = arguments[0];
          for (let t = 1; t < arguments.length; t++) {
            let n = RegExp("\\{" + t + "\\}", "g");
            e = e.replace(n, arguments[t]);
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
        l("wksfullpl") &&
          ((e) => {
            let t = n("wkhi-c"),
              l = n("wkhi-d");
            if (!t || !l) return;
            (t = t.split("|")), (l = l.split("|"));
            for (let e = 0; e < t.length; e++)
              for (let n = 0; n < l.length; n++)
                (a = t[e]),
                  (r = l[n]),
                  (document.cookie = `${a};path=${r};max-age=3153600000`);
            var a, r;
          })();
      let i = (e) => {
        if (
          (l("wkshiresimages") &&
            ((e) => {
              let t = document.querySelectorAll("img[data-src]");
              for (let e = 0; e < t; e++)
                t[e].dataset.src &&
                  "" == t[e].src &&
                  (t[e].src = t[e].dataset.src);
              let n = window.document.images;
              for (let e = 0; e < n.length; e++) {
                let t = n[e].src.split("?")[0];
                if (n[e].src != t) {
                  let l = new Image(),
                    a = (r) => {
                      n[e] &&
                        (n[e].src.split("?")[0] == t &&
                          ((n[e].src = t),
                          n[e].classList.add("wk-hires-loaded")),
                        l.removeEventListener("load", a, !1));
                    };
                  l.addEventListener("load", a, !1),
                    n[e].classList.remove("wk-hires-loaded"),
                    (l.src = t);
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
            let n = document.querySelector(".m-proifo .name .tit"),
              l = document.querySelector(".m-proifo .name #j-name-wrap");
            n &&
              l &&
              ((l.dataset.wkUsernameFull = l.title = n.innerText),
              l.classList.add("wk-full-username"));
          }
          let e = document.querySelector(".g-wrap>.m-info .cover img"),
            t = document.querySelector(".g-wrap>.m-info");
          e &&
            t &&
            (document.documentElement.classList.add("has-mib"),
            (t.style.cssText = `--mib:url("${e.src}")`));
        }
        if (l("wksmusicsessionmeta") && "mediaSession" in navigator) {
          let e = document.querySelector(".m-playbar .words .name"),
            t = document.querySelector(".m-playbar .words .by"),
            n = document.querySelector(".m-playbar .head img"),
            l = [],
            a = document.querySelector(".m-playbar .btns .prv"),
            r = document.querySelector(".m-playbar .btns .ply"),
            o = document.querySelector(".m-playbar .btns .nxt");
          n && n.src && l.push([{ src: n.src.split("?")[0] }]),
            (navigator.mediaSession.metadata = new MediaMetadata({
              title: e ? e.innerText : document.title,
              artist: e ? t.innerText : "",
              artwork: l,
            })),
            navigator.mediaSession.setActionHandler(
              "play",
              (e) => !!r && r.click()
            ),
            navigator.mediaSession.setActionHandler(
              "pause",
              (e) => !!r && r.click()
            ),
            navigator.mediaSession.setActionHandler(
              "previoustrack",
              (e) => !!a && a.click()
            ),
            navigator.mediaSession.setActionHandler(
              "nexttrack",
              (e) => !!o && o.click()
            );
        }
      };
      i(), window.setInterval(i, 2e3);
      r &&
        (function () {
          if ("/user/update" == location.pathname) {
            let e = (e) => {
              let t = document.querySelector("#baseBox");
              if (t) {
                let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.1.5-0.7.12</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${a}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                  n =
                    '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                  r = [
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
                        "&#x5728;&#x7cfb;&#x7edf;&#x4e2d;&#x663e;&#x793a;&#x5a92;&#x4f53;&#x4fe1;&#x606f;&#xff08;&#x9700;&#x8981;&#x64cd;&#x4f5c;&#x7cfb;&#x7edf;&#x652f;&#x6301;&#xff09;",
                      lsm: "wksmusicsessionmeta",
                      test: "'mediaSession' in navigator",
                    },
                  ],
                  i = "";
                for (let e = 0; e < r.length; e++) {
                  if (r[e].roi && !o) continue;
                  let t = !0;
                  if (r[e].test) {
                    t = !1;
                    try {
                      t = !!window.eval(r[e].test);
                    } catch (e) {}
                  }
                  if (!t) continue;
                  let a = l(r[e].lsm);
                  i += s(
                    n,
                    r[e].label,
                    `${a ? "checked " : ""}data-wk-lsm="${r[e].lsm}"`
                  );
                }
                i = s(e, i);
                let c = document.createElement("div");
                (c.className = "n-priv f-cb"),
                  (c.innerHTML = i),
                  c.addEventListener("change", (e) => {
                    let t = e.target.closest("[data-wk-lsm]"),
                      n = t.dataset.wkLsm;
                    t &&
                      n &&
                      ((e, t) => {
                        window.localStorage && localStorage.setItem(e, t);
                      })(n, t.checked ? "1" : "");
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
