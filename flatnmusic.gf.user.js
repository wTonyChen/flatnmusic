// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.2.15-0.9.15
// @author wTonyChen
// @copyright 2021 wTonyChen (https://github.com/wTonyChen)
// @compatible chrome 95+
// @compatible edge 95+
// @compatible opera 80+
// @compatible firefox 93+ 有限支持
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
  let e = "0.2.15-0.9.15",
    t = "wk-fnm-hi-cfg",
    l = document.querySelector("." + t);
  l ||
    ((l = document.createElement("div")),
    (l.className = t),
    document.body.appendChild(l));
  let s,
    a = getComputedStyle(l),
    i = {
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
    n = "/style/web2/emt/emoji_",
    x = (e) => {
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
    r = (e) => {
      let t;
      return window.localStorage && (t = localStorage.getItem(e)), t;
    },
    o = (e, t) => {
      window.localStorage && localStorage.setItem(e, t);
    },
    c = x("wkhi-a"),
    d = x("wkhi-b");
  if (!d) return void l.parentElement.removeChild(l);
  document.documentElement.setAttribute("wk-style-assist", "true");
  let p = r("wkoptin") || !1,
    f = function () {
      let e = arguments[0];
      for (let t = 1; t < arguments.length; t++) {
        let l = RegExp("\\{" + t + "\\}", "g");
        e = e.replace(l, arguments[t]);
      }
      return e;
    };
  ((e) => {
    let t,
      l = 0,
      s = !1,
      a = document.querySelector("#g-topbar"),
      i = document.querySelector("#g_iframe"),
      n = 0,
      x = 0,
      o = !0;
    if (!a || !Object.is(window.self, window.top)) return;
    let c = 1.6 * a.getBoundingClientRect().height,
      d = (e) => {
        t && t.cancel(),
          (x = 0),
          (n = 0),
          (l = 0),
          (o = !1),
          (t = a.animate([{ transform: "translateY(0)" }], {
            duration: 200,
            fill: "backwards",
            easing: "cubic-bezier(.16,1,.29,.99)",
          })),
          (t.onfinish = (e) => {
            (o = !0), (a.style.transform = "translateY(0)");
          });
      };
    i.addEventListener("load", (e) => {
      i.contentWindow.addEventListener("beforeunload", d),
        i.contentDocument.addEventListener("scroll", (e) => {
          o || t.cancel(),
            (l = i.contentWindow.scrollY),
            s ||
              (window.requestAnimationFrame((e) => {
                ((e) => {
                  if (r("wksdscrolling")) {
                    let t = e - n;
                    (x = Math.max(Math.min(x + t, c), 0)),
                      (a.style.top = "0 !important"),
                      (a.style.transform = `translateY(-${x}px)`);
                  } else (a.style.top = ""), (a.style.transform = ""), (x = 0);
                  n = e;
                })(l),
                  (s = !1);
              }),
              (s = !0));
        });
    });
  })();
  let m = (e) => {
      let t = "" + e,
        l = 0;
      for (let e = 0; e < t.length; e++) l += t[e].charCodeAt();
      return l;
    },
    u = (e) => {
      if (!Object.is(window.self, window.top)) return;
      let t = document.querySelectorAll(
        ".m-playbar .listlyric>p:not(.wk-upgraded)"
      );
      for (let e = 0; e < t.length; e++)
        (t[e].innerText = t[e].innerText.split("\n")[0]),
          t[e].classList.add("wk-upgraded");
    };
  r("wklrctrans") && document.body.classList.add("wk-playlist-applied"),
    (DocumentFragment.prototype.appendChildHost =
      DocumentFragment.prototype.appendChild),
    (DocumentFragment.prototype.appendChild = function () {
      if (
        r("wksplayinguiani") &&
        arguments[0].classList.contains("m-layer") &&
        arguments[0].parentElement
      ) {
        let e = arguments[0].cloneNode(!0);
        arguments[0].dataset &&
          arguments[0].dataset.wkAdvisedSize &&
          ((e.style.minHeight = arguments[0].dataset.wkAdvisedSize + "px"),
          (arguments[0].dataset.wkAdvisedSize = "")),
          arguments[0].parentElement.insertBefore(e, arguments[0]),
          e.addEventListener("animationend", (t) => {
            e.remove();
          }),
          e.classList.add("hidden");
      }
      let e = "",
        t = r("wkspipfont"),
        l = r("wkspipfont2"),
        s = r("wkspipfsize"),
        a = r("wkspipfweight"),
        i = r("wkspipletterspacing"),
        n = r("wkspipwordspacing"),
        x = r("wkspiplinespacing"),
        o = r("wkspiplineheight"),
        c = r("wkspipcustomstyle");
      if ("STYLE" == arguments[0].tagName) {
        r("wklrctrans") && (e += ".container>.line>.compare{display:none}");
        let d = [];
        t && d.push(`"${t.replace(/"/g, '\\"')}"`),
          l && d.push(`"${l.replace(/"/g, '\\"')}"`),
          d.length > 0 &&
            (e += `.container{font-family:${d.join(",")} !important}`),
          a &&
            !isNaN(+a) &&
            (e += `.container,.container *{font-weight:${+a} !important}`),
          s &&
            !isNaN(+s) &&
            (e += `.container>.line>.compare,.container>.line>.origin{font-size:${+s}px !important}`),
          i &&
            !isNaN(+i) &&
            (e += `.container,.container *{letter-spacing:${+i}px !important}`),
          n &&
            !isNaN(+n) &&
            (e += `.container,.container *{word-spacing:${+n}px !important}`),
          x &&
            !isNaN(+x) &&
            (e += `.container>.line{padding:${+x}px 0 !important}`),
          o &&
            !isNaN(+o) &&
            (e += `.container>.line{line-height:${+o}px !important}`),
          e &&
            (this.appendChildHost.call(
              this,
              document.createElement("style")
            ).innerHTML = e),
          c &&
            (this.appendChildHost.call(
              this,
              document.createElement("style")
            ).innerHTML = c);
      }
      if (!r("wksplayinguiani") || "g_playlist" != arguments[0].id)
        return this.appendChildHost.call(this, ...arguments);
      arguments[0].classList.add("hidden"),
        document.body.classList.remove("wk-playlist-showing");
    }),
    (Element.prototype.appendChildHost = Element.prototype.appendChild),
    (Element.prototype.appendChild = function () {
      return (
        r("wksplayinguiani") &&
          "g_playlist" == arguments[0].id &&
          (arguments[0].classList.remove("hidden"),
          document.body.classList.add("wk-playlist-showing")),
        r("wksplayinguiani") &&
          arguments[0].classList &&
          arguments[0].classList.contains("m-layer") &&
          arguments[0].dataset &&
          setTimeout((e) => {
            arguments[0].dataset.wkAdvisedSize = arguments[0].clientHeight;
          }, 50),
        r("wklrctrans") && "g_playlist" == arguments[0].id && setTimeout(u, 50),
        this.appendChildHost.call(this, ...arguments)
      );
    }),
    ((e) => {
      if (r("wklistdisd") && !e) return;
      let t = x("wkhi-c"),
        l = x("wkhi-d");
      if (!t || !l) return;
      (t = t.split("|")), (l = l.split("|"));
      let s = e ? 31536e5 : 1,
        a = (t, l) => {
          let a =
            `${t};path=${l};max-age=${s}` +
            (e ? "" : `;expires=${new Date(70).toGMTString()}`);
          document.cookie = a;
        };
      for (let e = 0; e < t.length; e++)
        for (let s = 0; s < l.length; s++) a(t[e], l[s]);
      o("wklistdisd", e ? 0 : 1);
    })(!!r("wksfullpl")),
    r("wkslowcontrast") &&
      Object.is(window.self, window.top) &&
      (document.documentElement.style.filter = "contrast(.8)"),
    r("wkslowbrightness") &&
      Object.is(window.self, window.top) &&
      (document.documentElement.style.filter =
        document.documentElement.style.filter + " brightness(.5)");
  let b = {
      kw7: (e) => {
        !isNaN(+e) &&
          +e > 99999 &&
          +e < 1e6 &&
          alert(
            ((e) => {
              let t = "" + e,
                l = 0,
                s = t.length;
              for (let e = 0; e < s; e++) {
                let a = (
                  t[e].codePointAt() * (s - e) * (e + 1) +
                  1 +
                  e
                ).toString(26);
                l += a
                  .substr(a.length - 1, 1)
                  .toUpperCase()
                  .codePointAt();
              }
              let a = ((9301 * l + 49297) % 233280) / 233280;
              return Math.round(1e5 + 899999 * a);
            })(e)
          );
      },
    },
    w = (e) => {
      if (
        (r("wklrctrans") && u(),
        r("wkshiresimages") &&
          ((e) => {
            let t = document.querySelectorAll("img[data-src]");
            for (let e = 0; e < t; e++)
              t[e].dataset.src &&
                "" == t[e].src &&
                (t[e].src = t[e].dataset.src);
            let l = document.querySelectorAll('img[src*="param="]');
            for (let e = 0; e < l.length; e++) {
              let t = l[e].src.split("?")[0];
              if (l[e].src != t) {
                let s = new Image(),
                  a = (i) => {
                    l[e] &&
                      (l[e].src.split("?")[0] == t &&
                        ((l[e].src = t), l[e].classList.add("wk-hires-loaded")),
                      s.removeEventListener("load", a, !1));
                  };
                s.addEventListener("load", a, !1),
                  l[e].classList.remove("wk-hires-loaded"),
                  (s.src = t);
              }
            }
          })(),
        r("wksemojisym") &&
          ((e) => {
            let t = document.querySelectorAll(`img[src*="${n}"]`);
            for (let e = 0; e < t.length; e++) {
              let l = t[e].src.split(n)[1];
              l &&
                ((l = l.split(".")[0]),
                !isNaN(+l) &&
                  i[+l] &&
                  (t[
                    e
                  ].src = `data:image/svg+xml;charset=utf-8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="21"%20height="21"><text%20xmlns="http://www.w3.org/2000/svg"%20font-size="14"%20x="10.5"%20y="12.4"%20font-family="Apple%20Color%20Emoji,'Noto%20Color%20Emoji','Segoe%20UI%20Emoji'"%20style="text-anchor:middle;dominant-baseline:middle">%26%23x${
                    i[+l]
                  };</text></svg>`));
            }
          })(),
        r("wksimprovedlook"))
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
            s = document.querySelector(".m-proifo .name #j-name-wrap");
          l &&
            s &&
            ((s.dataset.wkUsernameFull = s.title = l.innerText),
            s.classList.add("wk-full-username"));
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
        a =
          "video" == location.pathname.substring(1).split("/")[0] ||
          "mv" == location.pathname.substring(1).split("/")[0];
      if (
        r("wksmusicsessionmeta") &&
        "mediaSession" in navigator &&
        (a || (l && !t))
      ) {
        let t = document.querySelector(
            a ? ".n-mv .title h2" : ".m-playbar .words .name"
          ),
          l = document.querySelector(
            a ? ".n-mv .title .name" : ".m-playbar .words .by"
          ),
          i = document.querySelector(
            a ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
          ),
          n = [],
          x =
            (document.querySelector(a ? null : ".m-playbar .btns .prv"),
            document.querySelector(
              a
                ? ".m-ctvideo.z-play .controls .wrap .play"
                : ".m-playbar .btns .ply"
            ),
            document.querySelector(a ? null : ".m-playbar .btns .nxt"),
            document.querySelector(a ? ".m-ctvideo" : ".m-playbar .btns .ply"));
        (x = x
          ? x.classList.contains(a ? "z-play" : "pas")
            ? "playing"
            : x.classList.contains(a ? "z-pause" : "ply")
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
            artist: l ? l.innerText : "",
            album: l ? l.innerText : "",
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
            a &&
            ((s = e), (navigator.mediaSession.metadata = new MediaMetadata(s)));
        } catch (e) {}
      }
    };
  w(),
    window.setInterval(w, 500),
    d &&
      (function () {
        if ("/user/update" == location.pathname) {
          let t = (t) => {
            let l = document.querySelector("#baseBox");
            if (l) {
              ((e = 0, t = 0) => {
                let l = ("" + e).split("."),
                  s = ("" + t).split(".");
                for (let e = 0; e < Math.max(l.length, s.length); e++) {
                  let t = m(l[e] ? s[e] : 0),
                    a = m(s[e] ? s[e] : 0);
                  if (t > a) return !1;
                  if (t < a) return !0;
                }
              })(e.split("-")[1], c);
              let t = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;${e}</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${c}</span></h3><ul class="n-plist n-plist-1" data-prompt-prefix="&#x8bf7;&#x8f93;&#x5165;">{1}</ul></div>`,
                s =
                  '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                a =
                  '<li class="wk-settings-button-line"><a class="u-btn2 u-btn2-2 u-btn2-w2" href="javascript:;" {2}><i>{3}</i></a>&nbsp;&nbsp;<label>{1}</label></li>',
                i = [
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
                      "&#x964d;&#x4f4e;&#x9875;&#x9762;&#x5bf9;&#x6bd4;&#x5ea6; (&#x5237;&#x65b0;&#x9875;&#x9762;&#x5e94;&#x7528;&#x66f4;&#x6539;)",
                    lsm: "wkslowcontrast",
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
                n = "";
              for (let e = 0; e < i.length; e++) {
                if (i[e].roi && !p) continue;
                let t = !0;
                if (i[e].test) {
                  t = !1;
                  try {
                    t = !!window.eval(i[e].test);
                  } catch (e) {}
                }
                if (!t) continue;
                let l = r(i[e].lsm);
                "n" == i[e].t || "t" == i[e].t || "p" == i[e].t
                  ? (n += f(
                      a,
                      i[e].label,
                      `data-wk-lsm="${i[e].lsm}" data-wk-t="${i[e].t}" data-wk-l="${i[e].label}"`,
                      "p" == i[e].t ? "&#x5f00;&#x59cb;" : "&#x4fee;&#x6539;"
                    ))
                  : (n += f(
                      s,
                      i[e].label,
                      `${l ? "checked " : ""}data-wk-lsm="${i[e].lsm}"`
                    ));
              }
              n = f(t, n);
              let x = document.createElement("div");
              (x.className = "n-priv f-cb flatnmusic-settings"),
                (x.style.display = "none"),
                (x.innerHTML = n),
                x.addEventListener("change", (e) => {
                  let t = e.target.closest("[data-wk-lsm]");
                  if (!t || !t.dataset) return;
                  let l = t.dataset.wkLsm;
                  t &&
                    l &&
                    ("checkbox" == t.type
                      ? o(l, t.checked ? "1" : "")
                      : o(l, t.value));
                }),
                l.appendChild(x),
                x.addEventListener("click", (e) => {
                  let t = e.target.closest("[data-wk-t]");
                  if (!t || !t.dataset) return;
                  let l = t.dataset.wkLsm,
                    s = t.dataset.wkT,
                    a = t.dataset.wkL,
                    i = r(l),
                    n = t.closest("[data-prompt-prefix]");
                  if (((n = n ? n.dataset.promptPrefix : ""), t && l)) {
                    let e = n + a;
                    "p" == s && (e = n);
                    let t = window.prompt(e, i || ""),
                      x = ((e) => {
                        let t = 0,
                          l = "" + e,
                          s = l.length;
                        for (let e = 0; e < s; e++) t += l[e].codePointAt();
                        return t.toString(36) + s;
                      })(l);
                    if ("n" == s && isNaN(+t) && "" != t)
                      return void alert(
                        ((e) => {
                          let t = "&#x65e0;&#x6548;&#x7684;&#x503c;",
                            l = t.match(/\&#x[a-fA-F0-9]+;/g);
                          if (l)
                            for (let e = 0; e < l.length; e++) {
                              let s = l[e].substring(3, l[e].length - 1);
                              try {
                                s = JSON.parse(`"\\u${s.padStart(4, 0)}"`);
                              } catch (e) {}
                              t = t.replace(l[e], s);
                            }
                          return t;
                        })()
                      );
                    null != t && "p" != s
                      ? o(l, t || "")
                      : "p" == s &&
                        b[x] &&
                        "function" == typeof b[x] &&
                        b[x](t);
                  }
                });
            }
          };
          window.addEventListener("load", t);
        }
      })();
})();
