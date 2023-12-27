/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-touch-shiv-addtest-teststyles-prefixes
 */
;window.Modernizr = function (a, b, c) {
    function v(a) {
        i.cssText = a
    }

    function w(a, b) {
        return v(l.join(a + ";") + (b || ""))
    }

    function x(a, b) {
        return typeof a === b
    }

    function y(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function z(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : x(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    var d = "2.5.3", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style, j,
        k = {}.toString, l = " -webkit- -moz- -o- -ms- ".split(" "), m = {}, n = {}, o = {}, p = [], q = p.slice, r,
        s = function (a, c, d, e) {
            var h, i, j, k = b.createElement("div"), l = b.body, m = l ? l : b.createElement("body");
            if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : g + (d + 1), k.appendChild(j);
            return h = ["&#173;", "<style>", a, "</style>"].join(""), k.id = g, m.innerHTML += h, m.appendChild(k), l || (m.style.background = "", f.appendChild(m)), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !!i
        }, t = {}.hasOwnProperty, u;
    !x(t, "undefined") && !x(t.call, "undefined") ? u = function (a, b) {
        return t.call(a, b)
    } : u = function (a, b) {
        return b in a && x(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = q.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(q.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(q.call(arguments)))
        };
        return e
    });
    var A = function (c, d) {
        var f = c.join(""), g = d.length;
        s(f, function (c, d) {
            var f = b.styleSheets[b.styleSheets.length - 1],
                h = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "", i = c.childNodes,
                j = {};
            while (g--) j[i[g].id] = i[g];
            e.touch = "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch || (j.touch && j.touch.offsetTop) === 9
        }, g, d)
    }([, ["@media (", l.join("touch-enabled),("), g, ")", "{#touch{top:9px;position:absolute}}"].join("")], [, "touch"]);
    m.touch = function () {
        return e.touch
    };
    for (var B in m) u(m, B) && (r = B.toLowerCase(), e[r] = m[B](), p.push((e[r] ? "" : "no-") + r));
    return e.addTest = function (a, b) {
        if (typeof a == "object") for (var d in a) u(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, f.className += " " + (b ? "" : "no-") + a, e[a] = b
        }
        return e
    }, v(""), h = j = null, function (a, b) {
        function g(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function h() {
            var a = k.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function i(a) {
            var b = {}, c = a.createElement, e = a.createDocumentFragment, f = e();
            a.createElement = function (a) {
                var e = (b[a] || (b[a] = c(a))).cloneNode();
                return k.shivMethods && e.canHaveChildren && !d.test(a) ? f.appendChild(e) : e
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function (a) {
                return b[a] = c(a), f.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(k, f)
        }

        function j(a) {
            var b;
            return a.documentShived ? a : (k.shivCSS && !e && (b = !!g(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), f || (b = !i(a)), b && (a.documentShived = b), a)
        }

        var c = a.html5 || {}, d = /^<|^(?:button|form|map|select|textarea)$/i, e, f;
        (function () {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", e = "hidden" in a, f = a.childNodes.length == 1 || function () {
                try {
                    b.createElement("a")
                } catch (a) {
                    return !0
                }
                var c = b.createDocumentFragment();
                return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
            }()
        })();
        var k = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: j
        };
        a.html5 = k, j(b)
    }(this, b), e._version = d, e._prefixes = l, e.testStyles = s, e
}(this, this.document);