// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.2.3-0.8.17
// @author wTonyChen
// @copyright 2021 wTonyChen (https://github.com/wTonyChen)
// @compatible chrome 89+
// @compatible edge 89+
// @compatible opera 74+
// @compatible firefox 86+
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
  let l,
    a = getComputedStyle(t),
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
    n = "/style/web2/emt/emoji_",
    i = (e) => {
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
    c = i("wkhi-a"),
    d = i("wkhi-b");
  if (!d) return void t.parentElement.removeChild(t);
  document.documentElement.setAttribute("wk-style-assist", "true");
  let m = r("wkoptin") || !1,
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
      a = !1,
      s = document.querySelector("#g-topbar"),
      n = document.querySelector("#g_iframe"),
      i = 0,
      o = 0,
      c = !0;
    if (!s || !Object.is(window.self, window.top)) return;
    let d = 1.6 * s.getBoundingClientRect().height,
      m = (e) => {
        t && t.cancel(),
          (o = 0),
          (i = 0),
          (l = 0),
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
    n.addEventListener("load", (e) => {
      n.contentWindow.addEventListener("beforeunload", m),
        n.contentDocument.addEventListener("scroll", (e) => {
          c || t.cancel(),
            (l = n.contentWindow.scrollY),
            a ||
              (window.requestAnimationFrame((e) => {
                ((e) => {
                  if (r("wksdscrolling")) {
                    let t = e - i;
                    (o = Math.max(Math.min(o + t, d), 0)),
                      (s.style.top = "0 !important"),
                      (s.style.transform = `translateY(-${o}px)`);
                  } else (s.style.top = ""), (s.style.transform = ""), (o = 0);
                  i = e;
                })(l),
                  (a = !1);
              }),
              (a = !0));
        });
    });
  })(),
    r("wksplayinguiani") &&
      ((DocumentFragment.prototype.appendChildHost =
        DocumentFragment.prototype.appendChild),
      (DocumentFragment.prototype.appendChild = function () {
        if (
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
    r("wksfullpl") &&
      ((e) => {
        let t = i("wkhi-c"),
          l = i("wkhi-d");
        if (t && l) {
          (t = t.split("|")), (l = l.split("|"));
          for (let e = 0; e < t.length; e++)
            for (let n = 0; n < l.length; n++)
              (a = t[e]),
                (s = l[n]),
                (document.cookie = `${a};path=${s};max-age=3153600000`);
          var a, s;
        }
      })();
  let p = (e) => {
    if (
      (r("wkshiresimages") &&
        ((e) => {
          let t = document.querySelectorAll("img[data-src]");
          for (let e = 0; e < t; e++)
            t[e].dataset.src && "" == t[e].src && (t[e].src = t[e].dataset.src);
          let l = document.querySelectorAll('img[src*="param="]');
          for (let e = 0; e < l.length; e++) {
            let t = l[e].src.split("?")[0];
            if (l[e].src != t) {
              let a = new Image(),
                s = (n) => {
                  l[e] &&
                    (l[e].src.split("?")[0] == t &&
                      ((l[e].src = t), l[e].classList.add("wk-hires-loaded")),
                    a.removeEventListener("load", s, !1));
                };
              a.addEventListener("load", s, !1),
                l[e].classList.remove("wk-hires-loaded"),
                (a.src = t);
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
                s[+l] &&
                (t[
                  e
                ].src = `data:image/svg+xml;charset=utf-8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="21"%20height="21"><text%20xmlns="http://www.w3.org/2000/svg"%20font-size="14"%20x="10.5"%20y="12.4"%20font-family="Apple%20Color%20Emoji,'Noto%20Color%20Emoji','Segoe%20UI%20Emoji'"%20style="text-anchor:middle;dominant-baseline:middle">%26%23x${
                  s[+l]
                };</text></svg>`));
          }
        })(),
      r("wklrctrans") &&
        ((e) => {
          if (!Object.is(window.self, window.top)) return;
          let t = document.querySelectorAll(
            ".m-playbar .listlyric>p:not(.wk-upgraded)"
          );
          for (let e = 0; e < t.length; e++)
            (t[e].innerText = t[e].innerText.split("\n")[0]),
              t[e].classList.add("wk-upgraded");
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
    let t =
        location.hash &&
        ("video" == location.hash.substring(2).split("?")[0].split("/")[0] ||
          "mv" == location.hash.substring(2).split("?")[0].split("/")[0]),
      a = "/" == location.pathname,
      i =
        "video" == location.pathname.substring(1).split("/")[0] ||
        "mv" == location.pathname.substring(1).split("/")[0];
    if (
      r("wksmusicsessionmeta") &&
      "mediaSession" in navigator &&
      (i || (a && !t))
    ) {
      let t = document.querySelector(
          i ? ".n-mv .title h2" : ".m-playbar .words .name"
        ),
        a = document.querySelector(
          i ? ".n-mv .title .name" : ".m-playbar .words .by"
        ),
        s = document.querySelector(
          i ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
        ),
        n = [],
        r =
          (document.querySelector(i ? null : ".m-playbar .btns .prv"),
          document.querySelector(
            i
              ? ".m-ctvideo.z-play .controls .wrap .play"
              : ".m-playbar .btns .ply"
          ),
          document.querySelector(i ? null : ".m-playbar .btns .nxt"),
          document.querySelector(i ? ".m-ctvideo" : ".m-playbar .btns .ply"));
      (r = r
        ? r.classList.contains(i ? "z-play" : "pas")
          ? "playing"
          : r.classList.contains(i ? "z-pause" : "ply")
          ? "paused"
          : "none"
        : "none"),
        s &&
          s.src &&
          (n = [
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
        })(e, l) &&
          i &&
          ((l = e), (navigator.mediaSession.metadata = new MediaMetadata(l)));
      } catch (e) {}
    }
  };
  p(),
    window.setInterval(p, 500),
    d &&
      (function () {
        if ("/user/update" == location.pathname) {
          let e = (e) => {
            let t = document.querySelector("#baseBox");
            if (t) {
              let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.2.3-0.8.17</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${c}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                l =
                  '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                a =
                  '<li><label>{1}:&nbsp;<input type="number" class="u-txt txt" {2}></label></li>',
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
                      "&#x9690;&#x85cf;&#x6b63;&#x5728;&#x64ad;&#x653e;&#x6b4c;&#x5355;&#x754c;&#x9762;&#x5185;&#x6b4c;&#x8bcd;&#x7ffb;&#x8bd1;",
                    lsm: "wklrctrans",
                  },
                ],
                n = "";
              for (let e = 0; e < s.length; e++) {
                if (s[e].roi && !m) continue;
                let t = !0;
                if (s[e].test) {
                  t = !1;
                  try {
                    t = !!window.eval(s[e].test);
                  } catch (e) {}
                }
                if (!t) continue;
                let i = r(s[e].lsm);
                "n" == s[e].t
                  ? (n += f(
                      a,
                      s[e].label,
                      `${
                        isNaN(i) || 0 == i ? "" : `value="${i}" `
                      }data-wk-lsm="${s[e].lsm}"`
                    ))
                  : (n += f(
                      l,
                      s[e].label,
                      `${i ? "checked " : ""}data-wk-lsm="${s[e].lsm}"`
                    ));
              }
              n = f(e, n);
              let i = document.createElement("div");
              (i.className = "n-priv f-cb flatnmusic-settings"),
                (i.style.display = "none"),
                (i.innerHTML = n),
                i.addEventListener("change", (e) => {
                  let t = e.target.closest("[data-wk-lsm]"),
                    l = t.dataset.wkLsm;
                  t &&
                    l &&
                    ("checkbox" == t.type
                      ? o(l, t.checked ? "1" : "")
                      : o(l, t.value));
                }),
                t.appendChild(i);
            }
          };
          window.addEventListener("load", e);
        }
      })();
})();
