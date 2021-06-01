// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.2.9-0.9.8
// @author wTonyChen
// @copyright 2021 wTonyChen (https://github.com/wTonyChen)
// @compatible chrome 90+
// @compatible edge 90+
// @compatible opera 76+
// @compatible firefox 88+
// @license GPL-3.0-or-later
// @homepage https://wtonychen.github.io/flatnmusic/
// @supportURL https://github.com/wTonyChen/flatnmusic/issues
// @updateURL https://openuserjs.org/meta/wTonyChen/%E9%80%82%E7%94%A8%E4%BA%8E%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%89%81%E5%B9%B3%E9%A3%8E%E6%A0%BC%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E8%BE%85%E5%8A%A9%E7%94%A8%E6%88%B7%E8%84%9A%E6%9C%AC.meta.js
// @downloadURL https://openuserjs.org/install/wTonyChen/%E9%80%82%E7%94%A8%E4%BA%8E%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E6%89%81%E5%B9%B3%E9%A3%8E%E6%A0%BC%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E8%BE%85%E5%8A%A9%E7%94%A8%E6%88%B7%E8%84%9A%E6%9C%AC.user.js
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
  let a,
    l = getComputedStyle(t),
    s = {
      86: "1f603",
      85: "1f60a",
      359: "263a",
      95: "1f60d",
      363: "1f618",
      96: "1f631",
      356: "1f62d",
      362: "1f619",
      352: "1f633",
      87: "1f61e",
      343: "1f601",
      348: "1f61d",
      353: "1f612",
      361: "1f621",
      341: "1f60f",
      97: "1f613",
      346: "1f616",
      354: "1f630",
      350: "1f628",
      351: "1f637",
      357: "1f602",
      355: "1f635",
      115: "1f47f",
      360: "1f604",
      94: "1f61c",
      342: "1f614",
      358: "1f622",
      33: "2764",
      34: "1f494",
      303: "1f498",
      309: "2b50",
      314: "1f4a2",
      89: "1f4a9",
      13: "1f44d",
      372: "1f44e",
      14: "1f64f",
      379: "1f46b",
      380: "1f46f",
      374: "1f645",
      262: "1f481",
      106: "1f48f",
      376: "1f491",
      367: "1f444",
      81: "1f436",
      78: "1f431",
      100: "1f437",
      459: "1f430",
      450: "1f424",
      461: "1f414",
      116: "1f47b",
      411: "1f385",
      101: "1f47d",
      52: "1f48e",
      107: "1f381",
      0: "1f466",
      1: "1f467",
      337: "1f382",
      186: "1f51e",
      312: "2b55",
      313: "274c",
    },
    i = "/style/web2/emt/emoji_",
    n = (e) => {
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
    x = (e) => {
      let t;
      return window.localStorage && (t = localStorage.getItem(e)), t;
    },
    r = (e, t) => {
      window.localStorage && localStorage.setItem(e, t);
    },
    c = n("wkhi-a"),
    o = n("wkhi-b");
  if (!o) return void t.parentElement.removeChild(t);
  document.documentElement.setAttribute("wk-style-assist", "true");
  let d = x("wkoptin") || !1,
    p = function () {
      let e = arguments[0];
      for (let t = 1; t < arguments.length; t++) {
        let a = RegExp("\\{" + t + "\\}", "g");
        e = e.replace(a, arguments[t]);
      }
      return e;
    };
  ((e) => {
    let t,
      a = 0,
      l = !1,
      s = document.querySelector("#g-topbar"),
      i = document.querySelector("#g_iframe"),
      n = 0,
      r = 0,
      c = !0;
    if (!s || !Object.is(window.self, window.top)) return;
    let o = 1.6 * s.getBoundingClientRect().height,
      d = (e) => {
        t && t.cancel(),
          (r = 0),
          (n = 0),
          (a = 0),
          (c = !1),
          (t = s.animate([{ transform: "translateY(0)" }], {
            duration: 200,
            fill: "backwards",
            easing: "cubic-bezier(.16,1,.29,.99)",
          })),
          (t.onfinish = (e) => {
            (c = !0), (s.style.transform = "translateY(0)");
          });
      };
    i.addEventListener("load", (e) => {
      i.contentWindow.addEventListener("beforeunload", d),
        i.contentDocument.addEventListener("scroll", (e) => {
          c || t.cancel(),
            (a = i.contentWindow.scrollY),
            l ||
              (window.requestAnimationFrame((e) => {
                ((e) => {
                  if (x("wksdscrolling")) {
                    let t = e - n;
                    (r = Math.max(Math.min(r + t, o), 0)),
                      (s.style.top = "0 !important"),
                      (s.style.transform = `translateY(-${r}px)`);
                  } else (s.style.top = ""), (s.style.transform = ""), (r = 0);
                  n = e;
                })(a),
                  (l = !1);
              }),
              (l = !0));
        });
    });
  })(),
    x("wklrctrans") && document.body.classList.add("wk-playlist-applied"),
    (DocumentFragment.prototype.appendChildHost =
      DocumentFragment.prototype.appendChild),
    (DocumentFragment.prototype.appendChild = function () {
      if (
        x("wksplayinguiani") &&
        arguments[0].classList.contains("m-layer") &&
        arguments[0].parentElement
      ) {
        let e = arguments[0].cloneNode(!0);
        arguments[0].parentElement.insertBefore(e, arguments[0]),
          e.addEventListener("animationend", (t) => {
            e.remove();
          }),
          e.classList.add("hidden");
      }
      let e = "",
        t = x("wkspipfont"),
        a = x("wkspipfont2"),
        l = x("wkspipfsize"),
        s = x("wkspipfweight"),
        i = x("wkspipletterspacing"),
        n = x("wkspipwordspacing"),
        r = x("wkspiplinespacing"),
        c = x("wkspiplineheight"),
        o = x("wkspipcustomstyle");
      if ("STYLE" == arguments[0].tagName) {
        x("wklrctrans") && (e += ".container>.line>.compare{display:none}");
        let d = [];
        t && d.push(`"${t.replace(/"/g, '\\"')}"`),
          a && d.push(`"${a.replace(/"/g, '\\"')}"`),
          d.length > 0 &&
            (e += `.container{font-family:${d.join(",")} !important}`),
          s &&
            !isNaN(+s) &&
            (e += `.container,.container *{font-weight:${+s} !important}`),
          l &&
            !isNaN(+l) &&
            (e += `.container>.line>.compare,.container>.line>.origin{font-size:${+l}px !important}`),
          i &&
            !isNaN(+i) &&
            (e += `.container,.container *{letter-spacing:${+i}px !important}`),
          n &&
            !isNaN(+n) &&
            (e += `.container,.container *{word-spacing:${+n}px !important}`),
          r &&
            !isNaN(+r) &&
            (e += `.container>.line{padding:${+r}px 0 !important}`),
          c &&
            !isNaN(+c) &&
            (e += `.container>.line{line-height:${+c}px !important}`),
          e &&
            (this.appendChildHost.call(
              this,
              document.createElement("style")
            ).innerHTML = e),
          o &&
            (this.appendChildHost.call(
              this,
              document.createElement("style")
            ).innerHTML = o);
      }
      if (!x("wksplayinguiani") || "g_playlist" != arguments[0].id)
        return this.appendChildHost.call(this, ...arguments);
      arguments[0].classList.add("hidden"),
        document.body.classList.remove("wk-playlist-showing");
    }),
    (Element.prototype.appendChildHost = Element.prototype.appendChild),
    (Element.prototype.appendChild = function () {
      return (
        x("wksplayinguiani") &&
          "g_playlist" == arguments[0].id &&
          (arguments[0].classList.remove("hidden"),
          document.body.classList.add("wk-playlist-showing")),
        this.appendChildHost.call(this, ...arguments)
      );
    }),
    x("wksfullpl") &&
      ((e) => {
        let t = n("wkhi-c"),
          a = n("wkhi-d");
        if (t && a) {
          (t = t.split("|")), (a = a.split("|"));
          for (let e = 0; e < t.length; e++)
            for (let i = 0; i < a.length; i++)
              (l = t[e]),
                (s = a[i]),
                (document.cookie = `${l};path=${s};max-age=3153600000`);
          var l, s;
        }
      })(),
    x("wkslowbrightness") &&
      Object.is(window.self, window.top) &&
      (document.documentElement.style.filter = "brightness(.5)");
  let f = (e) => {
    if (
      (x("wkshiresimages") &&
        ((e) => {
          let t = document.querySelectorAll("img[data-src]");
          for (let e = 0; e < t; e++)
            t[e].dataset.src && "" == t[e].src && (t[e].src = t[e].dataset.src);
          let a = document.querySelectorAll('img[src*="param="]');
          for (let e = 0; e < a.length; e++) {
            let t = a[e].src.split("?")[0];
            if (a[e].src != t) {
              let l = new Image(),
                s = (i) => {
                  a[e] &&
                    (a[e].src.split("?")[0] == t &&
                      ((a[e].src = t), a[e].classList.add("wk-hires-loaded")),
                    l.removeEventListener("load", s, !1));
                };
              l.addEventListener("load", s, !1),
                a[e].classList.remove("wk-hires-loaded"),
                (l.src = t);
            }
          }
        })(),
      x("wksemojisym") &&
        ((e) => {
          let t = document.querySelectorAll(`img[src*="${i}"]`);
          for (let e = 0; e < t.length; e++) {
            let a = t[e].src.split(i)[1];
            a &&
              ((a = a.split(".")[0]),
              !isNaN(+a) &&
                s[+a] &&
                (t[
                  e
                ].src = `data:image/svg+xml;charset=utf-8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="21"%20height="21"><text%20xmlns="http://www.w3.org/2000/svg"%20font-size="14"%20x="10.5"%20y="12.4"%20font-family="Apple%20Color%20Emoji,'Noto%20Color%20Emoji','Segoe%20UI%20Emoji'"%20style="text-anchor:middle;dominant-baseline:middle">%26%23x${
                  s[+a]
                };</text></svg>`));
          }
        })(),
      x("wklrctrans") &&
        ((e) => {
          if (!Object.is(window.self, window.top)) return;
          let t = document.querySelectorAll(
            ".m-playbar .listlyric>p:not(.wk-upgraded)"
          );
          for (let e = 0; e < t.length; e++)
            (t[e].innerText = t[e].innerText.split("\n")[0]),
              t[e].classList.add("wk-upgraded");
        })(),
      x("wksimprovedlook"))
    ) {
      if ("user" == location.pathname.substring(1).split("/")[0]) {
        let e = document.querySelector(".m-proifo dt img"),
          t = document.querySelector(".g-bd");
        e &&
          e.src &&
          t &&
          (document.documentElement.classList.add("has-upb"),
          (t.style.cssText = `--upb:url("${e.src}")`));
        let a = document.querySelector(".m-proifo .name .tit"),
          l = document.querySelector(".m-proifo .name #j-name-wrap");
        a &&
          l &&
          ((l.dataset.wkUsernameFull = l.title = a.innerText),
          l.classList.add("wk-full-username"));
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
      l = "/" == location.pathname,
      n =
        "video" == location.pathname.substring(1).split("/")[0] ||
        "mv" == location.pathname.substring(1).split("/")[0];
    if (
      x("wksmusicsessionmeta") &&
      "mediaSession" in navigator &&
      (n || (l && !t))
    ) {
      let t = document.querySelector(
          n ? ".n-mv .title h2" : ".m-playbar .words .name"
        ),
        l = document.querySelector(
          n ? ".n-mv .title .name" : ".m-playbar .words .by"
        ),
        s = document.querySelector(
          n ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
        ),
        i = [],
        x =
          (document.querySelector(n ? null : ".m-playbar .btns .prv"),
          document.querySelector(
            n
              ? ".m-ctvideo.z-play .controls .wrap .play"
              : ".m-playbar .btns .ply"
          ),
          document.querySelector(n ? null : ".m-playbar .btns .nxt"),
          document.querySelector(n ? ".m-ctvideo" : ".m-playbar .btns .ply"));
      (x = x
        ? x.classList.contains(n ? "z-play" : "pas")
          ? "playing"
          : x.classList.contains(n ? "z-pause" : "ply")
          ? "paused"
          : "none"
        : "none"),
        s &&
          s.src &&
          (i = [
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
          title: t ? t.innerText : document.title,
          artist: l ? l.innerText : "",
          album: l ? l.innerText : "",
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
        })(e, a) &&
          n &&
          ((a = e), (navigator.mediaSession.metadata = new MediaMetadata(a)));
      } catch (e) {}
    }
  };
  f(),
    window.setInterval(f, 500),
    o &&
      (function () {
        if ("/user/update" == location.pathname) {
          let e = (e) => {
            let t = document.querySelector("#baseBox");
            if (t) {
              let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.2.9-0.9.8</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${c}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                a =
                  '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                l =
                  '<li class="wk-settings-button-line"><a class="u-btn2 u-btn2-2 u-btn2-w2" href="javascript:;" {2}><i>&#x4fee;&#x6539;</i></a>&nbsp;<label>{1}</label></li>',
                s = [
                  {
                    label:
                      "&#x6837;&#x5f0f;&#x8868;&#x589e;&#x5f3a;&#x5916;&#x89c2;",
                    lsm: "wksimprovedlook",
                  },
                  {
                    label:
                      "&#x663e;&#x793a;&#x6b4c;&#x5355;&#x5185;&#x5168;&#x90e8;&#x97f3;&#x4e50;",
                    lsm: "wksfullpl",
                  },
                  {
                    label: "&#x663e;&#x793a;&#x9ad8;&#x6e05;&#x56fe;&#x7247;",
                    lsm: "wkshiresimages",
                  },
                  {
                    label:
                      "&#x89c6;&#x9891;&#x9875;&#x9762;&#x5a92;&#x4f53;&#x4fe1;&#x606f;&#x663e;&#x793a;&#x652f;&#x6301;",
                    lsm: "wksmusicsessionmeta",
                    test: "'mediaSession' in navigator",
                  },
                  {
                    label:
                      "&#x9876;&#x680f;&#x52a8;&#x6001;&#x56fa;&#x5b9a; (&#x5ffd;&#x7565;&#x9876;&#x680f;&#x6eda;&#x52a8;&#x72b6;&#x6001;&#x8bbe;&#x7f6e;)",
                    lsm: "wksdscrolling",
                  },
                  {
                    label:
                      "&#x8868;&#x60c5;&#x56fe;&#x7247;&#x4ee5;&#x7cfb;&#x7edf; Emoji &#x8868;&#x60c5;&#x663e;&#x793a;",
                    lsm: "wksemojisym",
                  },
                  {
                    label:
                      "&#x6b63;&#x5728;&#x64ad;&#x653e;&#x6b4c;&#x5355;&#x754c;&#x9762;&#x548c;&#x7a97;&#x53e3;&#x7684;&#x589e;&#x5f3a;&#x52a8;&#x753b; (&#x5237;&#x65b0;&#x9875;&#x9762;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wksplayinguiani",
                  },
                  {
                    label:
                      "&#x9690;&#x85cf;&#x6b63;&#x5728;&#x64ad;&#x653e;&#x754c;&#x9762;&#x548c;&#x753b;&#x4e2d;&#x753b;&#x6b4c;&#x8bcd;&#x7ffb;&#x8bd1;",
                    lsm: "wklrctrans",
                  },
                  {
                    label:
                      "&#x964d;&#x4f4e;&#x9875;&#x9762;&#x4eae;&#x5ea6; (&#x5237;&#x65b0;&#x9875;&#x9762;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkslowbrightness",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x663e;&#x793a;&#x9996;&#x9009;&#x5b57;&#x4f53;&#x540d;&#x79f0; (&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipfont",
                    t: "t",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x663e;&#x793a;&#x5907;&#x9009;&#x5b57;&#x4f53;&#x540d;&#x79f0; (&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipfont2",
                    t: "t",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x663e;&#x793a;&#x5b57;&#x4f53;&#x7c97;&#x7ec6; (&#x8303;&#x56f4; 100-900&#xff0c;&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipfweight",
                    t: "n",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x6b4c;&#x8bcd;&#x5b57;&#x4f53;&#x5927;&#x5c0f; (&#x50cf;&#x7d20;&#xff0c;&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipfsize",
                    t: "n",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x6b4c;&#x8bcd;&#x884c;&#x95f4;&#x8ddd; (&#x50cf;&#x7d20;&#xff0c;&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspiplinespacing",
                    t: "n",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x6b4c;&#x8bcd;&#x884c;&#x9ad8; (&#x50cf;&#x7d20;&#xff0c;&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspiplineheight",
                    t: "n",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x663e;&#x793a;&#x5b57;&#x95f4;&#x8ddd; (&#x50cf;&#x7d20;&#xff0c;&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipletterspacing",
                    t: "n",
                  },
                  {
                    label:
                      "&#x753b;&#x4e2d;&#x753b;&#x663e;&#x793a;&#x8bcd;&#x95f4;&#x8ddd; (&#x50cf;&#x7d20;&#xff0c;&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipwordspacing",
                    t: "n",
                  },
                  {
                    label:
                      "&#x81ea;&#x5b9a;&#x4e49;&#x753b;&#x4e2d;&#x753b;&#x6837;&#x5f0f; (&#x6362;&#x6b4c;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkspipcustomstyle",
                    t: "t",
                  },
                ],
                i = "";
              for (let e = 0; e < s.length; e++) {
                if (s[e].roi && !d) continue;
                let t = !0;
                if (s[e].test) {
                  t = !1;
                  try {
                    t = !!window.eval(s[e].test);
                  } catch (e) {}
                }
                if (!t) continue;
                let n = x(s[e].lsm);
                "n" == s[e].t || "t" == s[e].t
                  ? (i += p(
                      l,
                      s[e].label,
                      `data-wk-lsm="${s[e].lsm}" data-wk-t="${s[e].t}" data-wk-l="${s[e].label}"`
                    ))
                  : (i += p(
                      a,
                      s[e].label,
                      `${n ? "checked " : ""}data-wk-lsm="${s[e].lsm}"`
                    ));
              }
              i = p(e, i);
              let n = document.createElement("div");
              (n.className = "n-priv f-cb flatnmusic-settings"),
                (n.style.display = "none"),
                (n.innerHTML = i),
                n.addEventListener("change", (e) => {
                  let t = e.target.closest("[data-wk-lsm]");
                  if (!t || !t.dataset) return;
                  let a = t.dataset.wkLsm;
                  t &&
                    a &&
                    ("checkbox" == t.type
                      ? r(a, t.checked ? "1" : "")
                      : r(a, t.value));
                }),
                t.appendChild(n),
                n.addEventListener("click", (e) => {
                  let t = e.target.closest("[data-wk-t]");
                  if (!t || !t.dataset) return;
                  let a = t.dataset.wkLsm,
                    l = t.dataset.wkT,
                    s = t.dataset.wkL,
                    i = x(a);
                  if (t && a) {
                    let e = window.prompt(
                      "&#x8bf7;&#x8f93;&#x5165;" + s,
                      i || ""
                    );
                    if ("n" == l && isNaN(+e) && "" != e)
                      return void alert("&#x65e0;&#x6548;&#x7684;&#x503c;");
                    null != e && r(a, e || "");
                  }
                });
            }
          };
          window.addEventListener("load", e);
        }
      })();
})();
