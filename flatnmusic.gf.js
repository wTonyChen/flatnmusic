// ==UserScript==
// @name:en Userscript Helper for Flat-Style Netease Music Userstyle 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:en Provides a better experience for Flat-Style Netease Music Userstyle. 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name:zh 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description:zh 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @name 适用于网易云音乐扁平风格样式表的辅助用户脚本
// @description 为网易云音乐扁平风格样式表提供更佳的用户体验。
// @namespace wTonyChen.flatnmusich
// @version 0.2.1-0.8.7
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
  let a,
    s = getComputedStyle(t),
    l = {
      86: "1f603",
      85: "1f60a",
      359: "263a",
      95: "1f60d",
      363: "1f618",
      96: "1f631",
      356: "1f62d",
      362: "1f619",
      352: "1f633",
      342: "1f61e",
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
      87: "1f614",
      358: "1f625",
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
      let t = s.getPropertyValue("--" + e);
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
    o = (e) => {
      let t;
      return window.localStorage && (t = localStorage.getItem(e)), t;
    },
    r = n("wkhi-a"),
    c = n("wkhi-b");
  if (!c) return void t.parentElement.removeChild(t);
  document.documentElement.setAttribute("wk-style-assist", "true");
  let m = o("wkoptin") || !1,
    d = function () {
      let e = arguments[0];
      for (let t = 1; t < arguments.length; t++) {
        let a = RegExp("\\{" + t + "\\}", "g");
        e = e.replace(a, arguments[t]);
      }
      return e;
    };
  ((e) => {
    let t = 0,
      a = !1,
      s = document.querySelector("#g-topbar"),
      l = document.querySelector("#g_iframe"),
      i = 0,
      n = 0;
    if (!s || !Object.is(window.self, window.top)) return;
    let r = 1.6 * s.getBoundingClientRect().height;
    l.addEventListener("load", (e) => {
      (n = 0), (i = 0), (t = 0);
      let c = !1,
        m = s.animate([{ transform: "translateY(0)" }], {
          duration: 200,
          fill: "backwards",
          easing: "cubic-bezier(.16,1,.29,.99)",
        });
      (m.onfinish = (e) => {
        (c = !0), (s.style.transform = "translateY(0)");
      }),
        l.contentDocument.addEventListener("scroll", (e) => {
          c || m.cancel(),
            (t = l.contentWindow.scrollY),
            a ||
              (window.requestAnimationFrame((e) => {
                ((e) => {
                  if (o("wksdscrolling")) {
                    let t = e - i;
                    (n = Math.max(Math.min(n + t, r), 0)),
                      (s.style.top = "0 !important"),
                      (s.style.transform = `translateY(-${n}px)`);
                  } else (s.style.top = ""), (s.style.transform = ""), (n = 0);
                  i = e;
                })(t),
                  (a = !1);
              }),
              (a = !0));
        });
    });
  })(),
    o("wksplayinguiani") &&
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
    o("wksfullpl") &&
      ((e) => {
        let t = n("wkhi-c"),
          a = n("wkhi-d");
        if (t && a) {
          (t = t.split("|")), (a = a.split("|"));
          for (let e = 0; e < t.length; e++)
            for (let i = 0; i < a.length; i++)
              (s = t[e]),
                (l = a[i]),
                (document.cookie = `${s};path=${l};max-age=3153600000`);
          var s, l;
        }
      })();
  let f = (e) => {
    if (
      (o("wkshiresimages") &&
        ((e) => {
          let t = document.querySelectorAll("img[data-src]");
          for (let e = 0; e < t; e++)
            t[e].dataset.src && "" == t[e].src && (t[e].src = t[e].dataset.src);
          let a = document.querySelectorAll('img[src*="param="]');
          for (let e = 0; e < a.length; e++) {
            let t = a[e].src.split("?")[0];
            if (a[e].src != t) {
              let s = new Image(),
                l = (i) => {
                  a[e] &&
                    (a[e].src.split("?")[0] == t &&
                      ((a[e].src = t), a[e].classList.add("wk-hires-loaded")),
                    s.removeEventListener("load", l, !1));
                };
              s.addEventListener("load", l, !1),
                a[e].classList.remove("wk-hires-loaded"),
                (s.src = t);
            }
          }
        })(),
      o("wksemojisym") &&
        ((e) => {
          let t = document.querySelectorAll(`img[src*="${i}"]`);
          for (let e = 0; e < t.length; e++) {
            let a = t[e].src.split(i)[1];
            a &&
              ((a = a.split(".")[0]),
              !isNaN(+a) &&
                l[+a] &&
                (t[
                  e
                ].src = `data:image/svg+xml;charset=utf-8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="21"%20height="21"><text%20xmlns="http://www.w3.org/2000/svg"%20font-size="14"%20x="10.5"%20y="12.4"%20font-family="AppleColorEmoji,'Noto%20Color%20Emoji','Segoe%20UI%20Emoji'"%20style="text-anchor:middle;dominant-baseline:middle">%26%23x${
                  l[+a]
                };</text></svg>`));
          }
        })(),
      o("wksimprovedlook"))
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
          s = document.querySelector(".m-proifo .name #j-name-wrap");
        a &&
          s &&
          ((s.dataset.wkUsernameFull = s.title = a.innerText),
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
      s = "/" == location.pathname,
      n =
        "video" == location.pathname.substring(1).split("/")[0] ||
        "mv" == location.pathname.substring(1).split("/")[0];
    if (
      o("wksmusicsessionmeta") &&
      "mediaSession" in navigator &&
      (n || (s && !t))
    ) {
      let t = document.querySelector(
          n ? ".n-mv .title h2" : ".m-playbar .words .name"
        ),
        s = document.querySelector(
          n ? ".n-mv .title .name" : ".m-playbar .words .by"
        ),
        l = document.querySelector(
          n ? ".m-ctvideo .poster .pic" : ".m-playbar .head img"
        ),
        i = [],
        o =
          (document.querySelector(n ? null : ".m-playbar .btns .prv"),
          document.querySelector(
            n
              ? ".m-ctvideo.z-play .controls .wrap .play"
              : ".m-playbar .btns .ply"
          ),
          document.querySelector(n ? null : ".m-playbar .btns .nxt"),
          document.querySelector(n ? ".m-ctvideo" : ".m-playbar .btns .ply"));
      (o = o
        ? o.classList.contains(n ? "z-play" : "pas")
          ? "playing"
          : o.classList.contains(n ? "z-pause" : "ply")
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
          title: t ? t.innerText : document.title,
          artist: s ? s.innerText : "",
          album: s ? s.innerText : "",
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
    c &&
      (function () {
        if ("/user/update" == location.pathname) {
          let e = (e) => {
            let t = document.querySelector("#baseBox");
            if (t) {
              let e = `<div class="item"><h3><span class="f-fs1">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x8bbe;&#x7f6e;</span><span class="sub s-fc3">&#x8f85;&#x52a9;&#x811a;&#x672c;&#x7248;&#x672c;&#xff1a;0.2.1-0.8.7</span><span class="sub s-fc3">&#x6837;&#x5f0f;&#x8868;&#x7248;&#x672c;&#xff1a;${r}</span></h3><ul class="n-plist n-plist-1">{1}</ul></div>`,
                a =
                  '<li><label><input type="checkbox" class="f-rdi" {2}>{1}</label></li>',
                s = [
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
                  {
                    label:
                      "&#x4f7f;&#x7528;&#x52a8;&#x6001;&#x56fa;&#x5b9a;&#x7684;&#x9876;&#x680f; (&#x4f1a;&#x5ffd;&#x7565; &#x9876;&#x680f;&#x6eda;&#x52a8;&#x72b6;&#x6001; &#x8bbe;&#x7f6e;, Beta)",
                    lsm: "wksdscrolling",
                  },
                  {
                    label:
                      "&#x5c06;&#x8868;&#x60c5;&#x56fe;&#x7247;&#x66ff;&#x6362;&#x6210; Emoji &#x8868;&#x60c5; (Beta)",
                    lsm: "wksemojisym",
                  },
                  {
                    label:
                      "&#x4f7f;&#x7528;&#x6b63;&#x5728;&#x64ad;&#x653e;&#x6b4c;&#x5355;&#x754c;&#x9762;&#x548c;&#x7a97;&#x53e3;&#x7684;&#x589e;&#x5f3a;&#x52a8;&#x753b; (&#x5237;&#x65b0;&#x9875;&#x9762;&#x5e94;&#x7528;&#x66f4;&#x6539;, Beta)",
                    lsm: "wksplayinguiani",
                  },
                ],
                l = "";
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
                let i = o(s[e].lsm);
                l += d(
                  a,
                  s[e].label,
                  `${i ? "checked " : ""}data-wk-lsm="${s[e].lsm}"`
                );
              }
              l = d(e, l);
              let i = document.createElement("div");
              (i.className = "n-priv f-cb"),
                (i.innerHTML = l),
                i.addEventListener("change", (e) => {
                  let t = e.target.closest("[data-wk-lsm]"),
                    a = t.dataset.wkLsm;
                  t &&
                    a &&
                    ((e, t) => {
                      window.localStorage && localStorage.setItem(e, t);
                    })(a, t.checked ? "1" : "");
                }),
                t.appendChild(i);
            }
          };
          window.addEventListener("load", e);
        }
      })();
})();
