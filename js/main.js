
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = !!e && "length"in e && e.length
          , i = re.type(e);
        return "function" !== i && !re.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function n(e, t, i) {
        if (re.isFunction(t))
            return re.grep(e, function(e, n) {
                return !!t.call(e, n, e) !== i
            });
        if (t.nodeType)
            return re.grep(e, function(e) {
                return e === t !== i
            });
        if ("string" == typeof t) {
            if (ge.test(t))
                return re.filter(t, e, i);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return J.call(t, e) > -1 !== i
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function r(e) {
        var t = {};
        return re.each(e.match(Te) || [], function(e, i) {
            t[i] = !0
        }),
        t
    }
    function s() {
        X.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        re.ready()
    }
    function a() {
        this.expando = re.expando + a.uid++
    }
    function l(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Ie, "-$&").toLowerCase(),
            i = e.getAttribute(n),
            "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ae.test(i) ? re.parseJSON(i) : i)
                } catch (o) {}
                Ee.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    function d(e, t, i, n) {
        var o, r = 1, s = 20, a = n ? function() {
            return n.cur()
        }
        : function() {
            return re.css(e, t, "")
        }
        , l = a(), d = i && i[3] || (re.cssNumber[t] ? "" : "px"), c = (re.cssNumber[t] || "px" !== d && +l) && De.exec(re.css(e, t));
        if (c && c[3] !== d) {
            d = d || c[3],
            i = i || [],
            c = +l || 1;
            do
                r = r || ".5",
                c /= r,
                re.style(e, t, c + d);
            while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (c = +c || +l || 0,
        o = i[1] ? c + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = d,
        n.start = c,
        n.end = o)),
        o
    }
    function c(e, t) {
        var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], i) : i
    }
    function u(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            xe.set(e[i], "globalEval", !t || xe.get(t[i], "globalEval"))
    }
    function f(e, t, i, n, o) {
        for (var r, s, a, l, d, f, p = t.createDocumentFragment(), h = [], g = 0, m = e.length; g < m; g++)
            if (r = e[g],
            r || 0 === r)
                if ("object" === re.type(r))
                    re.merge(h, r.nodeType ? [r] : r);
                else if (Me.test(r)) {
                    for (s = s || p.appendChild(t.createElement("div")),
                    a = (Fe.exec(r) || ["", ""])[1].toLowerCase(),
                    l = Le[a] || Le._default,
                    s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2],
                    f = l[0]; f--; )
                        s = s.lastChild;
                    re.merge(h, s.childNodes),
                    s = p.firstChild,
                    s.textContent = ""
                } else
                    h.push(t.createTextNode(r));
        for (p.textContent = "",
        g = 0; r = h[g++]; )
            if (n && re.inArray(r, n) > -1)
                o && o.push(r);
            else if (d = re.contains(r.ownerDocument, r),
            s = c(p.appendChild(r), "script"),
            d && u(s),
            i)
                for (f = 0; r = s[f++]; )
                    Pe.test(r.type || "") && i.push(r);
        return p
    }
    function p() {
        return !0
    }
    function h() {
        return !1
    }
    function g() {
        try {
            return X.activeElement
        } catch (e) {}
    }
    function m(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i,
            i = void 0);
            for (a in t)
                m(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i,
        n = i = void 0) : null == o && ("string" == typeof i ? (o = n,
        n = void 0) : (o = n,
        n = i,
        i = void 0)),
        o === !1)
            o = h;
        else if (!o)
            return e;
        return 1 === r && (s = o,
        o = function(e) {
            return re().off(e),
            s.apply(this, arguments)
        }
        ,
        o.guid = s.guid || (s.guid = re.guid++)),
        e.each(function() {
            re.event.add(this, t, o, n, i)
        })
    }
    function v(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function b(e) {
        var t = We.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        var i, n, o, r, s, a, l, d;
        if (1 === t.nodeType) {
            if (xe.hasData(e) && (r = xe.access(e),
            s = xe.set(t, r),
            d = r.events)) {
                delete s.handle,
                s.events = {};
                for (o in d)
                    for (i = 0,
                    n = d[o].length; i < n; i++)
                        re.event.add(t, o, d[o][i])
            }
            Ee.hasData(e) && (a = Ee.access(e),
            l = re.extend({}, a),
            Ee.set(t, l))
        }
    }
    function T(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && _e.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }
    function S(e, t, i, n) {
        t = G.apply([], t);
        var o, r, s, a, l, d, u = 0, p = e.length, h = p - 1, g = t[0], m = re.isFunction(g);
        if (m || p > 1 && "string" == typeof g && !ne.checkClone && ze.test(g))
            return e.each(function(o) {
                var r = e.eq(o);
                m && (t[0] = g.call(this, o, r.html())),
                S(r, t, i, n)
            });
        if (p && (o = f(t, e[0].ownerDocument, !1, e, n),
        r = o.firstChild,
        1 === o.childNodes.length && (o = r),
        r || n)) {
            for (s = re.map(c(o, "script"), y),
            a = s.length; u < p; u++)
                l = o,
                u !== h && (l = re.clone(l, !0, !0),
                a && re.merge(s, c(l, "script"))),
                i.call(e[u], l, u);
            if (a)
                for (d = s[s.length - 1].ownerDocument,
                re.map(s, b),
                u = 0; u < a; u++)
                    l = s[u],
                    Pe.test(l.type || "") && !xe.access(l, "globalEval") && re.contains(d, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Be, "")))
        }
        return e
    }
    function C(e, t, i) {
        for (var n, o = t ? re.filter(t, e) : e, r = 0; null != (n = o[r]); r++)
            i || 1 !== n.nodeType || re.cleanData(c(n)),
            n.parentNode && (i && re.contains(n.ownerDocument, n) && u(c(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    function k(e, t) {
        var i = re(t.createElement(e)).appendTo(t.body)
          , n = re.css(i[0], "display");
        return i.detach(),
        n
    }
    function x(e) {
        var t = X
          , i = Ve[e];
        return i || (i = k(e, t),
        "none" !== i && i || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Ze[0].contentDocument,
        t.write(),
        t.close(),
        i = k(e, t),
        Ze.detach()),
        Ve[e] = i),
        i
    }
    function E(e, t, i) {
        var n, o, r, s, a = e.style;
        return i = i || Ke(e),
        s = i ? i.getPropertyValue(t) || i[t] : void 0,
        "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)),
        i && !ne.pixelMarginRight() && Xe.test(s) && Ye.test(t) && (n = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = i.width,
        a.width = n,
        a.minWidth = o,
        a.maxWidth = r),
        void 0 !== s ? s + "" : s
    }
    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function I(e) {
        if (e in nt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--; )
            if (e = it[i] + t,
            e in nt)
                return e
    }
    function $(e, t, i) {
        var n = De.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function D(e, t, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2)
            "margin" === i && (s += re.css(e, i + Ne[r], !0, o)),
            n ? ("content" === i && (s -= re.css(e, "padding" + Ne[r], !0, o)),
            "margin" !== i && (s -= re.css(e, "border" + Ne[r] + "Width", !0, o))) : (s += re.css(e, "padding" + Ne[r], !0, o),
            "padding" !== i && (s += re.css(e, "border" + Ne[r] + "Width", !0, o)));
        return s
    }
    function N(t, i, n) {
        var o = !0
          , r = "width" === i ? t.offsetWidth : t.offsetHeight
          , s = Ke(t)
          , a = "border-box" === re.css(t, "boxSizing", !1, s);
        if (X.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[i])),
        r <= 0 || null == r) {
            if (r = E(t, i, s),
            (r < 0 || null == r) && (r = t.style[i]),
            Xe.test(r))
                return r;
            o = a && (ne.boxSizingReliable() || r === t.style[i]),
            r = parseFloat(r) || 0
        }
        return r + D(t, i, n || (a ? "border" : "content"), o, s) + "px"
    }
    function O(e, t) {
        for (var i, n, o, r = [], s = 0, a = e.length; s < a; s++)
            n = e[s],
            n.style && (r[s] = xe.get(n, "olddisplay"),
            i = n.style.display,
            t ? (r[s] || "none" !== i || (n.style.display = ""),
            "" === n.style.display && Oe(n) && (r[s] = xe.access(n, "olddisplay", x(n.nodeName)))) : (o = Oe(n),
            "none" === i && o || xe.set(n, "olddisplay", o ? i : re.css(n, "display"))));
        for (s = 0; s < a; s++)
            n = e[s],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }
    function _(e, t, i, n, o) {
        return new _.prototype.init(e,t,i,n,o)
    }
    function F() {
        return e.setTimeout(function() {
            ot = void 0
        }),
        ot = re.now()
    }
    function P(e, t) {
        var i, n = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            i = Ne[n],
            o["margin" + i] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function L(e, t, i) {
        for (var n, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (n = o[r].call(i, t, e))
                return n
    }
    function M(e, t, i) {
        var n, o, r, s, a, l, d, c, u = this, f = {}, p = e.style, h = e.nodeType && Oe(e), g = xe.get(e, "fxshow");
        i.queue || (a = re._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        u.always(function() {
            u.always(function() {
                a.unqueued--,
                re.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY],
        d = re.css(e, "display"),
        c = "none" === d ? xe.get(e, "olddisplay") || x(e.nodeName) : d,
        "inline" === c && "none" === re.css(e, "float") && (p.display = "inline-block")),
        i.overflow && (p.overflow = "hidden",
        u.always(function() {
            p.overflow = i.overflow[0],
            p.overflowX = i.overflow[1],
            p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (o = t[n],
            st.exec(o)) {
                if (delete t[n],
                r = r || "toggle" === o,
                o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[n])
                        continue;
                    h = !0
                }
                f[n] = g && g[n] || re.style(e, n)
            } else
                d = void 0;
        if (re.isEmptyObject(f))
            "inline" === ("none" === d ? x(e.nodeName) : d) && (p.display = d);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = xe.access(e, "fxshow", {}),
            r && (g.hidden = !h),
            h ? re(e).show() : u.done(function() {
                re(e).hide()
            }),
            u.done(function() {
                var t;
                xe.remove(e, "fxshow");
                for (t in f)
                    re.style(e, t, f[t])
            });
            for (n in f)
                s = L(h ? g[n] : 0, n, u),
                n in g || (g[n] = s.start,
                h && (s.end = s.start,
                s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function H(e, t) {
        var i, n, o, r, s;
        for (i in e)
            if (n = re.camelCase(i),
            o = t[n],
            r = e[i],
            re.isArray(r) && (o = r[1],
            r = e[i] = r[0]),
            i !== n && (e[n] = r,
            delete e[i]),
            s = re.cssHooks[n],
            s && "expand"in s) {
                r = s.expand(r),
                delete e[n];
                for (i in r)
                    i in e || (e[i] = r[i],
                    t[i] = o)
            } else
                t[n] = o
    }
    function U(e, t, i) {
        var n, o, r = 0, s = U.prefilters.length, a = re.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = ot || F(), i = Math.max(0, d.startTime + d.duration - t), n = i / d.duration || 0, r = 1 - n, s = 0, l = d.tweens.length; s < l; s++)
                d.tweens[s].run(r);
            return a.notifyWith(e, [d, r, i]),
            r < 1 && l ? i : (a.resolveWith(e, [d]),
            !1)
        }, d = a.promise({
            elem: e,
            props: re.extend({}, t),
            opts: re.extend(!0, {
                specialEasing: {},
                easing: re.easing._default
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: ot || F(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = re.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                return d.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0
                  , n = t ? d.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i < n; i++)
                    d.tweens[i].run(1);
                return t ? (a.notifyWith(e, [d, 1, 0]),
                a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]),
                this
            }
        }), c = d.props;
        for (H(c, d.opts.specialEasing); r < s; r++)
            if (n = U.prefilters[r].call(d, e, c, d.opts))
                return re.isFunction(n.stop) && (re._queueHooks(d.elem, d.opts.queue).stop = re.proxy(n.stop, n)),
                n;
        return re.map(c, L, d),
        re.isFunction(d.opts.start) && d.opts.start.call(e, d),
        re.fx.timer(re.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })),
        d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }
    function j(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function R(e) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var n, o = 0, r = t.toLowerCase().match(Te) || [];
            if (re.isFunction(i))
                for (; n = r[o++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function q(e, t, i, n) {
        function o(a) {
            var l;
            return r[a] = !0,
            re.each(e[a] || [], function(e, a) {
                var d = a(t, i, n);
                return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d),
                o(d),
                !1)
            }),
            l
        }
        var r = {}
          , s = e === Et;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function z(e, t) {
        var i, n, o = re.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n),
        e
    }
    function W(e, t, i) {
        for (var n, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0]in i)
            r = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r)
            return r !== l[0] && l.unshift(r),
            i[r]
    }
    function B(e, t, i, n) {
        var o, r, s, a, l, d = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                d[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r; )
            if (e.responseFields[r] && (i[e.responseFields[r]] = t),
            !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = r,
            r = c.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (s = d[l + " " + r] || d["* " + r],
                    !s)
                        for (o in d)
                            if (a = o.split(" "),
                            a[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                                s === !0 ? s = d[o] : d[o] !== !0 && (r = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (u) {
                                return {
                                    state: "parsererror",
                                    error: s ? u : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Z(e, t, i, n) {
        var o;
        if (re.isArray(t))
            re.each(t, function(t, o) {
                i || Dt.test(e) ? n(e, o) : Z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
            });
        else if (i || "object" !== re.type(t))
            n(e, t);
        else
            for (o in t)
                Z(e + "[" + o + "]", t[o], i, n)
    }
    function V(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = []
      , X = e.document
      , K = Y.slice
      , G = Y.concat
      , Q = Y.push
      , J = Y.indexOf
      , ee = {}
      , te = ee.toString
      , ie = ee.hasOwnProperty
      , ne = {}
      , oe = "2.2.3"
      , re = function(e, t) {
        return new re.fn.init(e,t)
    }
      , se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ae = /^-ms-/
      , le = /-([\da-z])/gi
      , de = function(e, t) {
        return t.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return re.each(this, e)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Q,
        sort: Y.sort,
        splice: Y.splice
    },
    re.extend = re.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof s && (d = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || re.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = s[t],
                    n = e[t],
                    s !== n && (d && n && (re.isPlainObject(n) || (o = re.isArray(n))) ? (o ? (o = !1,
                    r = i && re.isArray(i) ? i : []) : r = i && re.isPlainObject(i) ? i : {},
                    s[t] = re.extend(d, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }
    ,
    re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== re.type(e) || e.nodeType || re.isWindow(e))
                return !1;
            if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || ie.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            e = re.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"),
            t.text = e,
            X.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(le, de)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e))
                for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++)
                    ;
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)),
            n
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : J.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++)
                e[o++] = t[n];
            return e.length = o,
            e
        },
        grep: function(e, t, i) {
            for (var n, o = [], r = 0, s = e.length, a = !i; r < s; r++)
                n = !t(e[r], r),
                n !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, n) {
            var o, r, s = 0, a = [];
            if (i(e))
                for (o = e.length; s < o; s++)
                    r = t(e[s], s, n),
                    null != r && a.push(r);
            else
                for (s in e)
                    r = t(e[s], s, n),
                    null != r && a.push(r);
            return G.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            re.isFunction(e))
                return n = K.call(arguments, 2),
                o = function() {
                    return e.apply(t || this, n.concat(K.call(arguments)))
                }
                ,
                o.guid = e.guid = e.guid || re.guid++,
                o
        },
        now: Date.now,
        support: ne
    }),
    "function" == typeof Symbol && (re.fn[Symbol.iterator] = Y[Symbol.iterator]),
    re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, i, n) {
            var o, r, s, a, l, d, u, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return i;
            if (!n && ((t ? t.ownerDocument || t : j) !== O && N(t),
            t = t || O,
            F)) {
                if (11 !== g && (d = ve.exec(e)))
                    if (o = d[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(o)))
                                return i;
                            if (s.id === o)
                                return i.push(s),
                                i
                        } else if (h && (s = h.getElementById(o)) && H(t, s) && s.id === o)
                            return i.push(s),
                            i
                    } else {
                        if (d[2])
                            return Q.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((o = d[3]) && T.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(i, t.getElementsByClassName(o)),
                            i
                    }
                if (T.qsa && !B[e + " "] && (!P || !P.test(e))) {
                    if (1 !== g)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = U),
                        u = x(e),
                        r = u.length,
                        l = fe.test(a) ? "#" + a : "[id='" + a + "']"; r--; )
                            u[r] = l + " " + f(u[r]);
                        p = u.join(","),
                        h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Q.apply(i, h.querySelectorAll(p)),
                            i
                        } catch (m) {} finally {
                            a === U && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(ae, "$1"), t, i, n)
        }
        function i() {
            function e(i, n) {
                return t.push(i + " ") > S.cacheLength && delete e[t.shift()],
                e[i + " "] = n
            }
            var t = [];
            return e
        }
        function n(e) {
            return e[U] = !0,
            e
        }
        function o(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function r(e, t) {
            for (var i = e.split("|"), n = i.length; n--; )
                S.attrHandle[i[n]] = t
        }
        function s(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function d(e) {
            return n(function(t) {
                return t = +t,
                n(function(i, n) {
                    for (var o, r = e([], i.length, t), s = r.length; s--; )
                        i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function u() {}
        function f(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function p(e, t, i) {
            var n = t.dir
              , o = i && "parentNode" === n
              , r = q++;
            return t.first ? function(t, i, r) {
                for (; t = t[n]; )
                    if (1 === t.nodeType || o)
                        return e(t, i, r)
            }
            : function(t, i, s) {
                var a, l, d, c = [R, r];
                if (s) {
                    for (; t = t[n]; )
                        if ((1 === t.nodeType || o) && e(t, i, s))
                            return !0
                } else
                    for (; t = t[n]; )
                        if (1 === t.nodeType || o) {
                            if (d = t[U] || (t[U] = {}),
                            l = d[t.uniqueID] || (d[t.uniqueID] = {}),
                            (a = l[n]) && a[0] === R && a[1] === r)
                                return c[2] = a[2];
                            if (l[n] = c,
                            c[2] = e(t, i, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var o = e.length; o--; )
                    if (!e[o](t, i, n))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, i, n) {
            for (var o = 0, r = i.length; o < r; o++)
                t(e, i[o], n);
            return n
        }
        function m(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)
                (r = e[a]) && (i && !i(r, n, o) || (s.push(r),
                d && t.push(a)));
            return s
        }
        function v(e, t, i, o, r, s) {
            return o && !o[U] && (o = v(o)),
            r && !r[U] && (r = v(r, s)),
            n(function(n, s, a, l) {
                var d, c, u, f = [], p = [], h = s.length, v = n || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !n && t ? v : m(v, f, e, a, l), b = i ? r || (n ? e : h || o) ? [] : s : y;
                if (i && i(y, b, a, l),
                o)
                    for (d = m(b, p),
                    o(d, [], a, l),
                    c = d.length; c--; )
                        (u = d[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (d = [],
                            c = b.length; c--; )
                                (u = b[c]) && d.push(y[c] = u);
                            r(null, b = [], d, l)
                        }
                        for (c = b.length; c--; )
                            (u = b[c]) && (d = r ? ee(n, u) : f[c]) > -1 && (n[d] = !(s[d] = u))
                    }
                } else
                    b = m(b === s ? b.splice(h, b.length) : b),
                    r ? r(null, s, b, l) : Q.apply(s, b)
            })
        }
        function y(e) {
            for (var t, i, n, o = e.length, r = S.relative[e[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = p(function(e) {
                return e === t
            }, s, !0), d = p(function(e) {
                return ee(t, e) > -1
            }, s, !0), c = [function(e, i, n) {
                var o = !r && (n || i !== I) || ((t = i).nodeType ? l(e, i, n) : d(e, i, n));
                return t = null,
                o
            }
            ]; a < o; a++)
                if (i = S.relative[e[a].type])
                    c = [p(h(c), i)];
                else {
                    if (i = S.filter[e[a].type].apply(null, e[a].matches),
                    i[U]) {
                        for (n = ++a; n < o && !S.relative[e[n].type]; n++)
                            ;
                        return v(a > 1 && h(c), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), i, a < n && y(e.slice(a, n)), n < o && y(e = e.slice(n)), n < o && f(e))
                    }
                    c.push(i)
                }
            return h(c)
        }
        function b(e, i) {
            var o = i.length > 0
              , r = e.length > 0
              , s = function(n, s, a, l, d) {
                var c, u, f, p = 0, h = "0", g = n && [], v = [], y = I, b = n || r && S.find.TAG("*", d), w = R += null == y ? 1 : Math.random() || .1, T = b.length;
                for (d && (I = s === O || s || d); h !== T && null != (c = b[h]); h++) {
                    if (r && c) {
                        for (u = 0,
                        s || c.ownerDocument === O || (N(c),
                        a = !F); f = e[u++]; )
                            if (f(c, s || O, a)) {
                                l.push(c);
                                break
                            }
                        d && (R = w)
                    }
                    o && ((c = !f && c) && p--,
                    n && g.push(c))
                }
                if (p += h,
                o && h !== p) {
                    for (u = 0; f = i[u++]; )
                        f(g, v, s, a);
                    if (n) {
                        if (p > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = K.call(l));
                        v = m(v)
                    }
                    Q.apply(l, v),
                    d && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                }
                return d && (R = w,
                I = y),
                g
            };
            return o ? n(s) : s
        }
        var w, T, S, C, k, x, E, A, I, $, D, N, O, _, F, P, L, M, H, U = "sizzle" + 1 * new Date, j = e.document, R = 0, q = 0, z = i(), W = i(), B = i(), Z = function(e, t) {
            return e === t && (D = !0),
            0
        }, V = 1 << 31, Y = {}.hasOwnProperty, X = [], K = X.pop, G = X.push, Q = X.push, J = X.slice, ee = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]", re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ie + "+","g"), ae = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$","g"), le = new RegExp("^" + ie + "*," + ie + "*"), de = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), ce = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]","g"), ue = new RegExp(re), fe = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)","ig"), Te = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, Se = function() {
            N()
        };
        try {
            Q.apply(X = J.call(j.childNodes), j.childNodes),
            X[j.childNodes.length].nodeType
        } catch (Ce) {
            Q = {
                apply: X.length ? function(e, t) {
                    G.apply(e, J.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        T = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        N = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : j;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n,
            _ = O.documentElement,
            F = !k(O),
            (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Se, !1) : i.attachEvent && i.attachEvent("onunload", Se)),
            T.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            T.getElementsByTagName = o(function(e) {
                return e.appendChild(O.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            T.getElementsByClassName = me.test(O.getElementsByClassName),
            T.getById = o(function(e) {
                return _.appendChild(e).id = U,
                !O.getElementsByName || !O.getElementsByName(U).length
            }),
            T.getById ? (S.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ,
            S.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete S.find.ID,
            S.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            S.find.TAG = T.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[o++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }
            ,
            S.find.CLASS = T.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && F)
                    return t.getElementsByClassName(e)
            }
            ,
            L = [],
            P = [],
            (T.qsa = me.test(O.querySelectorAll)) && (o(function(e) {
                _.appendChild(e).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ie + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || P.push("\\[" + ie + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + U + "-]").length || P.push("~="),
                e.querySelectorAll(":checked").length || P.push(":checked"),
                e.querySelectorAll("a#" + U + "+*").length || P.push(".#.+[+~]")
            }),
            o(function(e) {
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && P.push("name" + ie + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                P.push(",.*:")
            })),
            (T.matchesSelector = me.test(M = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && o(function(e) {
                T.disconnectedMatch = M.call(e, "div"),
                M.call(e, "[s!='']:x"),
                L.push("!=", re)
            }),
            P = P.length && new RegExp(P.join("|")),
            L = L.length && new RegExp(L.join("|")),
            t = me.test(_.compareDocumentPosition),
            H = t || me.test(_.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Z = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === O || e.ownerDocument === j && H(j, e) ? -1 : t === O || t.ownerDocument === j && H(j, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var i, n = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                if (!o || !r)
                    return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : $ ? ee($, e) - ee($, t) : 0;
                if (o === r)
                    return s(e, t);
                for (i = e; i = i.parentNode; )
                    a.unshift(i);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (; a[n] === l[n]; )
                    n++;
                return n ? s(a[n], l[n]) : a[n] === j ? -1 : l[n] === j ? 1 : 0
            }
            ,
            O) : O
        }
        ,
        t.matches = function(e, i) {
            return t(e, null, null, i)
        }
        ,
        t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== O && N(e),
            i = i.replace(ce, "='$1']"),
            T.matchesSelector && F && !B[i + " "] && (!L || !L.test(i)) && (!P || !P.test(i)))
                try {
                    var n = M.call(e, i);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (o) {}
            return t(i, O, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && N(e),
            H(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && N(e);
            var i = S.attrHandle[t.toLowerCase()]
              , n = i && Y.call(S.attrHandle, t.toLowerCase()) ? i(e, t, !F) : void 0;
            return void 0 !== n ? n : T.attributes || !F ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, i = [], n = 0, o = 0;
            if (D = !T.detectDuplicates,
            $ = !T.sortStable && e.slice(0),
            e.sort(Z),
            D) {
                for (; t = e[o++]; )
                    t === e[o] && (n = i.push(o));
                for (; n--; )
                    e.splice(i[n], 1)
            }
            return $ = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += C(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += C(t);
            return i
        }
        ,
        S = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ue.test(i) && (t = x(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === i : !i || (r += "",
                        "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === n && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, i, l) {
                        var d, c, u, f, p, h, g = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (r) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (f = m,
                                u = f[U] || (f[U] = {}),
                                c = u[f.uniqueID] || (u[f.uniqueID] = {}),
                                d = c[e] || [],
                                p = d[0] === R && d[1],
                                b = p && d[2],
                                f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [R, p, b];
                                        break
                                    }
                            } else if (y && (f = t,
                            u = f[U] || (f[U] = {}),
                            c = u[f.uniqueID] || (u[f.uniqueID] = {}),
                            d = c[e] || [],
                            p = d[0] === R && d[1],
                            b = p),
                            b === !1)
                                for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (u = f[U] || (f[U] = {}),
                                c = u[f.uniqueID] || (u[f.uniqueID] = {}),
                                c[e] = [R, b]),
                                f !== t)); )
                                    ;
                            return b -= o,
                            b === n || b % n === 0 && b / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var o, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[U] ? r(i) : r.length > 1 ? (o = [e, e, "", i],
                    S.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, o = r(e, i), s = o.length; s--; )
                            n = ee(e, o[s]),
                            e[n] = !(t[n] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = []
                      , i = []
                      , o = E(e.replace(ae, "$1"));
                    return o[U] ? n(function(e, t, i, n) {
                        for (var r, s = o(e, null, n, []), a = e.length; a--; )
                            (r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, n, r) {
                        return t[0] = e,
                        o(t, null, r, i),
                        t[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(we, Te),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, Te).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === e || 0 === i.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === _
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !S.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(e, t) {
                    return [t - 1]
                }),
                eq: d(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: d(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: d(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: d(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0; )
                        e.push(n);
                    return e
                }),
                gt: d(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        },
        S.pseudos.nth = S.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            S.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            S.pseudos[w] = l(w);
        return u.prototype = S.filters = S.pseudos,
        S.setFilters = new u,
        x = t.tokenize = function(e, i) {
            var n, o, r, s, a, l, d, c = W[e + " "];
            if (c)
                return i ? 0 : c.slice(0);
            for (a = e,
            l = [],
            d = S.preFilter; a; ) {
                n && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = de.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(ae, " ")
                }),
                a = a.slice(n.length));
                for (s in S.filter)
                    !(o = pe[s].exec(a)) || d[s] && !(o = d[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return i ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }
        ,
        E = t.compile = function(e, t) {
            var i, n = [], o = [], r = B[e + " "];
            if (!r) {
                for (t || (t = x(e)),
                i = t.length; i--; )
                    r = y(t[i]),
                    r[U] ? n.push(r) : o.push(r);
                r = B(e, b(o, n)),
                r.selector = e
            }
            return r
        }
        ,
        A = t.select = function(e, t, i, n) {
            var o, r, s, a, l, d = "function" == typeof e && e, u = !n && x(e = d.selector || e);
            if (i = i || [],
            1 === u.length) {
                if (r = u[0] = u[0].slice(0),
                r.length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === t.nodeType && F && S.relative[r[1].type]) {
                    if (t = (S.find.ID(s.matches[0].replace(we, Te), t) || [])[0],
                    !t)
                        return i;
                    d && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o],
                !S.relative[a = s.type]); )
                    if ((l = S.find[a]) && (n = l(s.matches[0].replace(we, Te), ye.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        e = n.length && f(r),
                        !e)
                            return Q.apply(i, n),
                            i;
                        break
                    }
            }
            return (d || E(e, u))(n, t, !F, i, !t || ye.test(e) && c(t.parentNode) || t),
            i
        }
        ,
        T.sortStable = U.split("").sort(Z).join("") === U,
        T.detectDuplicates = !!D,
        N(),
        T.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        T.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, i) {
            var n;
            if (!i)
                return e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        t
    }(e);
    re.find = ce,
    re.expr = ce.selectors,
    re.expr[":"] = re.expr.pseudos,
    re.uniqueSort = re.unique = ce.uniqueSort,
    re.text = ce.getText,
    re.isXMLDoc = ce.isXML,
    re.contains = ce.contains;
    var ue = function(e, t, i) {
        for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && re(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
      , fe = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , pe = re.expr.match.needsContext
      , he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , ge = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? re.find.matchesSelector(n, e) ? [n] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    re.fn.extend({
        find: function(e) {
            var t, i = this.length, n = [], o = this;
            if ("string" != typeof e)
                return this.pushStack(re(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (re.contains(o[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                re.find(e, o[t], n);
            return n = this.pushStack(i > 1 ? re.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && pe.test(e) ? re(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = re.fn.init = function(e, t, i) {
        var n, o;
        if (!e)
            return this;
        if (i = i || me,
        "string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof re ? t[0] : t,
                re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : X, !0)),
                he.test(n[1]) && re.isPlainObject(t))
                    for (n in t)
                        re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return o = X.getElementById(n[2]),
            o && o.parentNode && (this.length = 1,
            this[0] = o),
            this.context = X,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : re.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        re.makeArray(e, this))
    }
    ;
    ye.prototype = re.fn,
    me = re(X);
    var be = /^(?:parents|prev(?:Until|All))/
      , we = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    re.fn.extend({
        has: function(e) {
            var t = re(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (re.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, r = [], s = pe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; n < o; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, e))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.call(re(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ue(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ue(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ue(e, "nextSibling")
        },
        prevAll: function(e) {
            return ue(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ue(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ue(e, "previousSibling", i)
        },
        siblings: function(e) {
            return fe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return fe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(i, n) {
            var o = re.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (o = re.filter(n, o)),
            this.length > 1 && (we[e] || re.uniqueSort(o),
            be.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var Te = /\S+/g;
    re.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : re.extend({}, e);
        var t, i, n, o, s = [], a = [], l = -1, d = function() {
            for (o = e.once,
            n = t = !0; a.length; l = -1)
                for (i = a.shift(); ++l < s.length; )
                    s[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = s.length,
                    i = !1);
            e.memory || (i = !1),
            t = !1,
            o && (s = i ? [] : "")
        }, c = {
            add: function() {
                return s && (i && !t && (l = s.length - 1,
                a.push(i)),
                function n(t) {
                    re.each(t, function(t, i) {
                        re.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== re.type(i) && n(i)
                    })
                }(arguments),
                i && !t && d()),
                this
            },
            remove: function() {
                return re.each(arguments, function(e, t) {
                    for (var i; (i = re.inArray(t, s, i)) > -1; )
                        s.splice(i, 1),
                        i <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? re.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return o = a = [],
                s = i = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return o = a = [],
                i || (s = i = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, i) {
                return o || (i = i || [],
                i = [e, i.slice ? i.slice() : i],
                a.push(i),
                t || d()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return c
    }
    ,
    re.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]]
              , i = "pending"
              , n = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return re.Deferred(function(i) {
                        re.each(t, function(t, r) {
                            var s = re.isFunction(e[t]) && e[t];
                            o[r[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && re.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? re.extend(e, n) : n
                }
            }
              , o = {};
            return n.pipe = n.then,
            re.each(t, function(e, r) {
                var s = r[2]
                  , a = r[3];
                n[r[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = s.fireWith
            }),
            n.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, i, n, o = 0, r = K.call(arguments), s = r.length, a = 1 !== s || e && re.isFunction(e.promise) ? s : 0, l = 1 === a ? e : re.Deferred(), d = function(e, i, n) {
                return function(o) {
                    i[e] = this,
                    n[e] = arguments.length > 1 ? K.call(arguments) : o,
                    n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                i = new Array(s),
                n = new Array(s); o < s; o++)
                    r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(d(o, i, t)).done(d(o, n, r)).fail(l.reject) : --a;
            return a || l.resolveWith(n, r),
            l.promise()
        }
    });
    var Se;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e),
        this
    }
    ,
    re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0,
            e !== !0 && --re.readyWait > 0 || (Se.resolveWith(X, [re]),
            re.fn.triggerHandler && (re(X).triggerHandler("ready"),
            re(X).off("ready"))))
        }
    }),
    re.ready.promise = function(t) {
        return Se || (Se = re.Deferred(),
        "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(re.ready) : (X.addEventListener("DOMContentLoaded", s),
        e.addEventListener("load", s))),
        Se.promise(t)
    }
    ,
    re.ready.promise();
    var Ce = function(e, t, i, n, o, r, s) {
        var a = 0
          , l = e.length
          , d = null == i;
        if ("object" === re.type(i)) {
            o = !0;
            for (a in i)
                Ce(e, t, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0,
        re.isFunction(n) || (s = !0),
        d && (s ? (t.call(e, n),
        t = null) : (d = t,
        t = function(e, t, i) {
            return d.call(re(e), i)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : d ? t.call(e) : l ? t(e[0], i) : r
    }
      , ke = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(e, t) {
            var i = t || {};
            return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!ke(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t)
                o[t] = i;
            else
                for (n in t)
                    o[n] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t),
            void 0 !== n ? n : this.get(e, re.camelCase(t))) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t)
                    this.register(e);
                else {
                    re.isArray(t) ? n = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t),
                    t in r ? n = [t, o] : (n = o,
                    n = n in r ? [n] : n.match(Te) || [])),
                    i = n.length;
                    for (; i--; )
                        delete r[n[i]]
                }
                (void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !re.isEmptyObject(t)
        }
    };
    var xe = new a
      , Ee = new a
      , Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ie = /[A-Z]/g;
    re.extend({
        hasData: function(e) {
            return Ee.hasData(e) || xe.hasData(e)
        },
        data: function(e, t, i) {
            return Ee.access(e, t, i)
        },
        removeData: function(e, t) {
            Ee.remove(e, t)
        },
        _data: function(e, t, i) {
            return xe.access(e, t, i)
        },
        _removeData: function(e, t) {
            xe.remove(e, t)
        }
    }),
    re.fn.extend({
        data: function(e, t) {
            var i, n, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ee.get(r),
                1 === r.nodeType && !xe.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--; )
                        s[i] && (n = s[i].name,
                        0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)),
                        l(r, n, o[n])));
                    xe.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Ee.set(this, e)
            }) : Ce(this, function(t) {
                var i, n;
                if (r && void 0 === t) {
                    if (i = Ee.get(r, e) || Ee.get(r, e.replace(Ie, "-$&").toLowerCase()),
                    void 0 !== i)
                        return i;
                    if (n = re.camelCase(e),
                    i = Ee.get(r, n),
                    void 0 !== i)
                        return i;
                    if (i = l(r, n, void 0),
                    void 0 !== i)
                        return i
                } else
                    n = re.camelCase(e),
                    this.each(function() {
                        var i = Ee.get(this, n);
                        Ee.set(this, n, t),
                        e.indexOf("-") > -1 && void 0 !== i && Ee.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ee.remove(this, e)
            })
        }
    }),
    re.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return t = (t || "fx") + "queue",
                n = xe.get(e, t),
                i && (!n || re.isArray(i) ? n = xe.access(e, t, re.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = re.queue(e, t)
              , n = i.length
              , o = i.shift()
              , r = re._queueHooks(e, t)
              , s = function() {
                re.dequeue(e, t)
            };
            "inprogress" === o && (o = i.shift(),
            n--),
            o && ("fx" === t && i.unshift("inprogress"),
            delete r.stop,
            o.call(e, s, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return xe.get(e, i) || xe.access(e, i, {
                empty: re.Callbacks("once memory").add(function() {
                    xe.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    re.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            i--),
            arguments.length < i ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = re.queue(this, e, t);
                re._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, o = re.Deferred(), r = this, s = this.length, a = function() {
                --n || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                i = xe.get(r[s], e + "queueHooks"),
                i && i.empty && (n++,
                i.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , De = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$","i")
      , Ne = ["Top", "Right", "Bottom", "Left"]
      , Oe = function(e, t) {
        return e = t || e,
        "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
    }
      , _e = /^(?:checkbox|radio)$/i
      , Fe = /<([\w:-]+)/
      , Pe = /^$|\/(?:java|ecma)script/i
      , Le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Le.optgroup = Le.option,
    Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead,
    Le.th = Le.td;
    var Me = /<|&#?\w+;/;
    !function() {
        var e = X.createDocumentFragment()
          , t = e.appendChild(X.createElement("div"))
          , i = X.createElement("input");
        i.setAttribute("type", "radio"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        t.appendChild(i),
        ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var He = /^key/
      , Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , je = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var r, s, a, l, d, c, u, f, p, h, g, m = xe.get(e);
            if (m)
                for (i.handler && (r = i,
                i = r.handler,
                o = r.selector),
                i.guid || (i.guid = re.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(Te) || [""],
                d = t.length; d--; )
                    a = je.exec(t[d]) || [],
                    p = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    p && (u = re.event.special[p] || {},
                    p = (o ? u.delegateType : u.bindType) || p,
                    u = re.event.special[p] || {},
                    c = re.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && re.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (f = l[p]) || (f = l[p] = [],
                    f.delegateCount = 0,
                    u.setup && u.setup.call(e, n, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)),
                    u.add && (u.add.call(e, c),
                    c.handler.guid || (c.handler.guid = i.guid)),
                    o ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    re.event.global[p] = !0)
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, d, c, u, f, p, h, g, m = xe.hasData(e) && xe.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(Te) || [""],
                d = t.length; d--; )
                    if (a = je.exec(t[d]) || [],
                    p = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (u = re.event.special[p] || {},
                        p = (n ? u.delegateType : u.bindType) || p,
                        f = l[p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = f.length; r--; )
                            c = f[r],
                            !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (f.splice(r, 1),
                            c.selector && f.delegateCount--,
                            u.remove && u.remove.call(e, c));
                        s && !f.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || re.removeEvent(e, p, m.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            re.event.remove(e, p + t[d], i, n, !0);
                re.isEmptyObject(l) && xe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, i, n, o, r, s = [], a = K.call(arguments), l = (xe.get(this, "events") || {})[e.type] || [], d = re.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (s = re.event.handlers.call(this, e, l),
                t = 0; (o = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    i = 0; (r = o.handlers[i++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r,
                        e.data = r.data,
                        n = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [],
                        i = 0; i < a; i++)
                            r = t[i],
                            o = r.selector + " ",
                            void 0 === n[o] && (n[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length),
                            n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, o, r = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || X,
                n = i.documentElement,
                o = i.body,
                e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0),
                e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[re.expando])
                return e;
            var t, i, n, o = e.type, r = e, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ue.test(o) ? this.mouseHooks : He.test(o) ? this.keyHooks : {}),
            n = s.props ? this.props.concat(s.props) : this.props,
            e = new re.Event(r),
            t = n.length; t--; )
                i = n[t],
                e[i] = r[i];
            return e.target || (e.target = X),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== g() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === g() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && re.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    re.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e,
        t && re.extend(this, t),
        this.timeStamp = e && e.timeStamp || re.now(),
        void (this[re.expando] = !0)) : new re.Event(e,t)
    }
    ,
    re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            e && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === n || re.contains(n, o)) || (e.type = r.origType,
                i = r.handler.apply(this, arguments),
                e.type = t),
                i
            }
        }
    }),
    re.fn.extend({
        on: function(e, t, i, n) {
            return m(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return m(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                re(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (i = t,
            t = void 0),
            i === !1 && (i = h),
            this.each(function() {
                re.event.remove(this, e, i, t)
            })
        }
    });
    var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , ze = /checked\s*(?:[^=]|=\s*.checked.)/i
      , We = /^true\/(.*)/
      , Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
        htmlPrefilter: function(e) {
            return e.replace(Re, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, o, r, s, a = e.cloneNode(!0), l = re.contains(e.ownerDocument, e);
            if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (s = c(a),
                r = c(e),
                n = 0,
                o = r.length; n < o; n++)
                    T(r[n], s[n]);
            if (t)
                if (i)
                    for (r = r || c(e),
                    s = s || c(a),
                    n = 0,
                    o = r.length; n < o; n++)
                        w(r[n], s[n]);
                else
                    w(e, a);
            return s = c(a, "script"),
            s.length > 0 && u(s, !l && c(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, i, n, o = re.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (ke(i)) {
                    if (t = i[xe.expando]) {
                        if (t.events)
                            for (n in t.events)
                                o[n] ? re.event.remove(i, n) : re.removeEvent(i, n, t.handle);
                        i[xe.expando] = void 0
                    }
                    i[Ee.expando] && (i[Ee.expando] = void 0)
                }
        }
    }),
    re.fn.extend({
        domManip: S,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ce(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (re.cleanData(c(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !Le[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = re.htmlPrefilter(e);
                    try {
                        for (; i < n; i++)
                            t = this[i] || {},
                            1 === t.nodeType && (re.cleanData(c(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return S(this, arguments, function(t) {
                var i = this.parentNode;
                re.inArray(this, e) < 0 && (re.cleanData(c(this)),
                i && i.replaceChild(t, this))
            }, e)
        }
    }),
    re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var i, n = [], o = re(e), r = o.length - 1, s = 0; s <= r; s++)
                i = s === r ? this : this.clone(!0),
                re(o[s])[t](i),
                Q.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ze, Ve = {
        HTML: "block",
        BODY: "block"
    }, Ye = /^margin/, Xe = new RegExp("^(" + $e + ")(?!px)[a-z%]+$","i"), Ke = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e),
        i.getComputedStyle(t)
    }, Ge = function(e, t, i, n) {
        var o, r, s = {};
        for (r in t)
            s[r] = e.style[r],
            e.style[r] = t[r];
        o = i.apply(e, n || []);
        for (r in t)
            e.style[r] = s[r];
        return o
    }, Qe = X.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Qe.appendChild(s);
            var t = e.getComputedStyle(a);
            i = "1%" !== t.top,
            r = "2px" === t.marginLeft,
            n = "4px" === t.width,
            a.style.marginRight = "50%",
            o = "4px" === t.marginRight,
            Qe.removeChild(s)
        }
        var i, n, o, r, s = X.createElement("div"), a = X.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        ne.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        re.extend(ne, {
            pixelPosition: function() {
                return t(),
                i
            },
            boxSizingReliable: function() {
                return null == n && t(),
                n
            },
            pixelMarginRight: function() {
                return null == n && t(),
                o
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                r
            },
            reliableMarginRight: function() {
                var t, i = a.appendChild(X.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                a.style.width = "1px",
                Qe.appendChild(s),
                t = !parseFloat(e.getComputedStyle(i).marginRight),
                Qe.removeChild(s),
                a.removeChild(i),
                t
            }
        }))
    }();
    var Je = /^(none|table(?!-c[ea]).+)/
      , et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , tt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , it = ["Webkit", "O", "Moz", "ms"]
      , nt = X.createElement("div").style;
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = E(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = re.camelCase(t), l = e.style;
                return t = re.cssProps[a] || (re.cssProps[a] = I(a) || a),
                s = re.cssHooks[t] || re.cssHooks[a],
                void 0 === i ? s && "get"in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t] : (r = typeof i,
                "string" === r && (o = De.exec(i)) && o[1] && (i = d(e, t, o),
                r = "number"),
                null != i && i === i && ("number" === r && (i += o && o[3] || (re.cssNumber[a] ? "" : "px")),
                ne.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                s && "set"in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i)),
                void 0)
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = re.camelCase(t);
            return t = re.cssProps[a] || (re.cssProps[a] = I(a) || a),
            s = re.cssHooks[t] || re.cssHooks[a],
            s && "get"in s && (o = s.get(e, !0, i)),
            void 0 === o && (o = E(e, t, n)),
            "normal" === o && t in tt && (o = tt[t]),
            "" === i || i ? (r = parseFloat(o),
            i === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }),
    re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, i, n) {
                if (i)
                    return Je.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, et, function() {
                        return N(e, t, n)
                    }) : N(e, t, n)
            },
            set: function(e, i, n) {
                var o, r = n && Ke(e), s = n && D(e, t, n, "border-box" === re.css(e, "boxSizing", !1, r), r);
                return s && (o = De.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i,
                i = re.css(e, t)),
                $(e, i, s)
            }
        }
    }),
    re.cssHooks.marginLeft = A(ne.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    re.cssHooks.marginRight = A(ne.reliableMarginRight, function(e, t) {
        if (t)
            return Ge(e, {
                display: "inline-block"
            }, E, [e, "marginRight"])
    }),
    re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    o[e + Ne[n] + t] = r[n] || r[n - 2] || r[0];
                return o
            }
        },
        Ye.test(e) || (re.cssHooks[e + t].set = $)
    }),
    re.fn.extend({
        css: function(e, t) {
            return Ce(this, function(e, t, i) {
                var n, o, r = {}, s = 0;
                if (re.isArray(t)) {
                    for (n = Ke(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = re.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? re.style(e, t, i) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? re(this).show() : re(this).hide()
            })
        }
    }),
    re.Tween = _,
    _.prototype = {
        constructor: _,
        init: function(e, t, i, n, o, r) {
            this.elem = e,
            this.prop = i,
            this.easing = o || re.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (re.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : _.propHooks._default.set(this),
            this
        }
    },
    _.prototype.init.prototype = _.prototype,
    _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    re.fx = _.prototype.init,
    re.fx.step = {};
    var ot, rt, st = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    re.Animation = re.extend(U, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return d(i.elem, e, De.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            re.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Te);
            for (var i, n = 0, o = e.length; n < o; n++)
                i = e[n],
                U.tweeners[i] = U.tweeners[i] || [],
                U.tweeners[i].unshift(t)
        },
        prefilters: [M],
        prefilter: function(e, t) {
            t ? U.prefilters.unshift(e) : U.prefilters.push(e)
        }
    }),
    re.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? re.extend({}, e) : {
            complete: i || !i && t || re.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !re.isFunction(t) && t
        };
        return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default,
        null != n.queue && n.queue !== !0 || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            re.isFunction(n.old) && n.old.call(this),
            n.queue && re.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    re.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(Oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var o = re.isEmptyObject(e)
              , r = re.speed(t, i, n)
              , s = function() {
                var t = U(this, re.extend({}, e), r);
                (o || xe.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = re.timers
                  , s = xe.get(this);
                if (o)
                    s[o] && s[o].stop && n(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && at.test(o) && n(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i),
                    t = !1,
                    r.splice(o, 1));
                !t && i || re.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, i = xe.get(this), n = i[e + "queue"], o = i[e + "queueHooks"], r = re.timers, s = n ? n.length : 0;
                for (i.finish = !0,
                re.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < s; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }),
    re.each(["toggle", "show", "hide"], function(e, t) {
        var i = re.fn[t];
        re.fn[t] = function(e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(P(t, !0), e, n, o)
        }
    }),
    re.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        re.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }),
    re.timers = [],
    re.fx.tick = function() {
        var e, t = 0, i = re.timers;
        for (ot = re.now(); t < i.length; t++)
            e = i[t],
            e() || i[t] !== e || i.splice(t--, 1);
        i.length || re.fx.stop(),
        ot = void 0
    }
    ,
    re.fx.timer = function(e) {
        re.timers.push(e),
        e() ? re.fx.start() : re.timers.pop()
    }
    ,
    re.fx.interval = 13,
    re.fx.start = function() {
        rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
    }
    ,
    re.fx.stop = function() {
        e.clearInterval(rt),
        rt = null
    }
    ,
    re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    re.fn.delay = function(t, i) {
        return t = re.fx ? re.fx.speeds[t] || t : t,
        i = i || "fx",
        this.queue(i, function(i, n) {
            var o = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = X.createElement("input")
          , t = X.createElement("select")
          , i = t.appendChild(X.createElement("option"));
        e.type = "checkbox",
        ne.checkOn = "" !== e.value,
        ne.optSelected = i.selected,
        t.disabled = !0,
        ne.optDisabled = !i.disabled,
        e = X.createElement("input"),
        e.value = "t",
        e.type = "radio",
        ne.radioValue = "t" === e.value
    }();
    var lt, dt = re.expr.attrHandle;
    re.fn.extend({
        attr: function(e, t) {
            return Ce(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }),
    re.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return "undefined" == typeof e.getAttribute ? re.prop(e, t, i) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(),
                o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)),
                void 0 !== i ? null === i ? void re.removeAttr(e, t) : o && "set"in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : o && "get"in o && null !== (n = o.get(e, t)) ? n : (n = re.find.attr(e, t),
                null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, o = 0, r = t && t.match(Te);
            if (r && 1 === e.nodeType)
                for (; i = r[o++]; )
                    n = re.propFix[i] || i,
                    re.expr.match.bool.test(i) && (e[n] = !1),
                    e.removeAttribute(i)
        }
    }),
    lt = {
        set: function(e, t, i) {
            return t === !1 ? re.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = dt[t] || re.find.attr;
        dt[t] = function(e, t, n) {
            var o, r;
            return n || (r = dt[t],
            dt[t] = o,
            o = null != i(e, t, n) ? t.toLowerCase() : null,
            dt[t] = r),
            o
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i
      , ut = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Ce(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[re.propFix[e] || e]
            })
        }
    }),
    re.extend({
        prop: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t,
                o = re.propHooks[t]),
                void 0 !== i ? o && "set"in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get"in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    });
    var ft = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).addClass(e.call(this, t, j(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Te) || []; i = this[l++]; )
                    if (o = j(i),
                    n = 1 === i.nodeType && (" " + o + " ").replace(ft, " ")) {
                        for (s = 0; r = t[s++]; )
                            n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = re.trim(n),
                        o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, j(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Te) || []; i = this[l++]; )
                    if (o = j(i),
                    n = 1 === i.nodeType && (" " + o + " ").replace(ft, " ")) {
                        for (s = 0; r = t[s++]; )
                            for (; n.indexOf(" " + r + " ") > -1; )
                                n = n.replace(" " + r + " ", " ");
                        a = re.trim(n),
                        o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(i) {
                re(this).toggleClass(e.call(this, i, j(this), t), t)
            }) : this.each(function() {
                var t, n, o, r;
                if ("string" === i)
                    for (n = 0,
                    o = re(this),
                    r = e.match(Te) || []; t = r[n++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== i || (t = j(this),
                    t && xe.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : xe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++]; )
                if (1 === i.nodeType && (" " + j(i) + " ").replace(ft, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var pt = /\r/g
      , ht = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            {
                if (arguments.length)
                    return n = re.isFunction(e),
                    this.each(function(i) {
                        var o;
                        1 === this.nodeType && (o = n ? e.call(this, i, re(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value,
                    "string" == typeof i ? i.replace(pt, "") : null == i ? "" : i)
            }
        }
    }),
    re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (i = n[l],
                        (i.selected || l === o) && (ne.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !re.nodeName(i.parentNode, "optgroup"))) {
                            if (t = re(i).val(),
                            r)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = re.makeArray(t), s = o.length; s--; )
                        n = o[s],
                        (n.selected = re.inArray(re.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                if (re.isArray(t))
                    return e.checked = re.inArray(re(e).val(), t) > -1
            }
        },
        ne.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
        trigger: function(t, i, n, o) {
            var r, s, a, l, d, c, u, f = [n || X], p = ie.call(t, "type") ? t.type : t, h = ie.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = n = n || X,
            3 !== n.nodeType && 8 !== n.nodeType && !gt.test(p + re.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            d = p.indexOf(":") < 0 && "on" + p,
            t = t[re.expando] ? t : new re.Event(p,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            i = null == i ? [t] : re.makeArray(i, [t]),
            u = re.event.special[p] || {},
            o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!o && !u.noBubble && !re.isWindow(n)) {
                    for (l = u.delegateType || p,
                    gt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        a = s;
                    a === (n.ownerDocument || X) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
                    t.type = r > 1 ? l : u.bindType || p,
                    c = (xe.get(s, "events") || {})[t.type] && xe.get(s, "handle"),
                    c && c.apply(s, i),
                    c = d && s[d],
                    c && c.apply && ke(s) && (t.result = c.apply(s, i),
                    t.result === !1 && t.preventDefault());
                return t.type = p,
                o || t.isDefaultPrevented() || u._default && u._default.apply(f.pop(), i) !== !1 || !ke(n) || d && re.isFunction(n[p]) && !re.isWindow(n) && (a = n[d],
                a && (n[d] = null),
                re.event.triggered = p,
                n[p](),
                re.event.triggered = void 0,
                a && (n[d] = a)),
                t.result
            }
        },
        simulate: function(e, t, i) {
            var n = re.extend(new re.Event, i, {
                type: e,
                isSimulated: !0
            });
            re.event.trigger(n, null, t),
            n.isDefaultPrevented() && i.preventDefault()
        }
    }),
    re.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return re.event.trigger(e, t, i, !0)
        }
    }),
    re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }),
    re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ne.focusin = "onfocusin"in e,
    ne.focusin || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e))
        };
        re.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , o = xe.access(n, t);
                o || n.addEventListener(e, i, !0),
                xe.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , o = xe.access(n, t) - 1;
                o ? xe.access(n, t, o) : (n.removeEventListener(e, i, !0),
                xe.remove(n, t))
            }
        }
    });
    var mt = e.location
      , vt = re.now()
      , yt = /\?/;
    re.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    re.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t)
            return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t),
        i
    }
    ;
    var bt = /#.*$/
      , wt = /([?&])_=[^&]*/
      , Tt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Ct = /^(?:GET|HEAD)$/
      , kt = /^\/\//
      , xt = {}
      , Et = {}
      , At = "*/".concat("*")
      , It = X.createElement("a");
    It.href = mt.href,
    re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: St.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? z(z(e, re.ajaxSettings), t) : z(re.ajaxSettings, e)
        },
        ajaxPrefilter: R(xt),
        ajaxTransport: R(Et),
        ajax: function(t, i) {
            function n(t, i, n, a) {
                var d, u, y, b, T, C = i;
                2 !== w && (w = 2,
                l && e.clearTimeout(l),
                o = void 0,
                s = a || "",
                S.readyState = t > 0 ? 4 : 0,
                d = t >= 200 && t < 300 || 304 === t,
                n && (b = W(f, S, n)),
                b = B(f, b, S, d),
                d ? (f.ifModified && (T = S.getResponseHeader("Last-Modified"),
                T && (re.lastModified[r] = T),
                T = S.getResponseHeader("etag"),
                T && (re.etag[r] = T)),
                204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                u = b.data,
                y = b.error,
                d = !y)) : (y = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                S.status = t,
                S.statusText = (i || C) + "",
                d ? g.resolveWith(p, [u, C, S]) : g.rejectWith(p, [S, C, y]),
                S.statusCode(v),
                v = void 0,
                c && h.trigger(d ? "ajaxSuccess" : "ajaxError", [S, f, d ? u : y]),
                m.fireWith(p, [S, C]),
                c && (h.trigger("ajaxComplete", [S, f]),
                --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t,
            t = void 0),
            i = i || {};
            var o, r, s, a, l, d, c, u, f = re.ajaxSetup({}, i), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? re(p) : re.event, g = re.Deferred(), m = re.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, w = 0, T = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!a)
                            for (a = {}; t = Tt.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? s : null
                },
                setRequestHeader: function(e, t) {
                    var i = e.toLowerCase();
                    return w || (e = b[i] = b[i] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            S.always(e[S.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return o && o.abort(t),
                    n(0, t),
                    this
                }
            };
            if (g.promise(S).complete = m.add,
            S.success = S.done,
            S.error = S.fail,
            f.url = ((t || f.url || mt.href) + "").replace(bt, "").replace(kt, mt.protocol + "//"),
            f.type = i.method || i.type || f.method || f.type,
            f.dataTypes = re.trim(f.dataType || "*").toLowerCase().match(Te) || [""],
            null == f.crossDomain) {
                d = X.createElement("a");
                try {
                    d.href = f.url,
                    d.href = d.href,
                    f.crossDomain = It.protocol + "//" + It.host != d.protocol + "//" + d.host
                } catch (C) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = re.param(f.data, f.traditional)),
            q(xt, f, i, S),
            2 === w)
                return S;
            c = re.event && f.global,
            c && 0 === re.active++ && re.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Ct.test(f.type),
            r = f.url,
            f.hasContent || (f.data && (r = f.url += (yt.test(r) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = wt.test(r) ? r.replace(wt, "$1_=" + vt++) : r + (yt.test(r) ? "&" : "?") + "_=" + vt++)),
            f.ifModified && (re.lastModified[r] && S.setRequestHeader("If-Modified-Since", re.lastModified[r]),
            re.etag[r] && S.setRequestHeader("If-None-Match", re.etag[r])),
            (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && S.setRequestHeader("Content-Type", f.contentType),
            S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + At + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers)
                S.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (f.beforeSend.call(p, S, f) === !1 || 2 === w))
                return S.abort();
            T = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            })
                S[u](f[u]);
            if (o = q(Et, f, i, S)) {
                if (S.readyState = 1,
                c && h.trigger("ajaxSend", [S, f]),
                2 === w)
                    return S;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, f.timeout));
                try {
                    w = 1,
                    o.send(y, n)
                } catch (C) {
                    if (!(w < 2))
                        throw C;
                    n(-1, C)
                }
            } else
                n(-1, "No Transport");
            return S
        },
        getJSON: function(e, t, i) {
            return re.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }),
    re.each(["get", "post"], function(e, t) {
        re[t] = function(e, i, n, o) {
            return re.isFunction(i) && (o = o || n,
            n = i,
            i = void 0),
            re.ajax(re.extend({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            }, re.isPlainObject(e) && e))
        }
    }),
    re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    re.fn.extend({
        wrapAll: function(e) {
            var t;
            return re.isFunction(e) ? this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return re.isFunction(e) ? this.each(function(t) {
                re(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = re(this)
                  , i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(i) {
                re(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    re.expr.filters.hidden = function(e) {
        return !re.expr.filters.visible(e)
    }
    ,
    re.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var $t = /%20/g
      , Dt = /\[\]$/
      , Nt = /\r?\n/g
      , Ot = /^(?:submit|button|image|reset|file)$/i
      , _t = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var i, n = [], o = function(e, t) {
            t = re.isFunction(t) ? t() : null == t ? "" : t,
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional),
        re.isArray(e) || e.jquery && !re.isPlainObject(e))
            re.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (i in e)
                Z(i, e[i], t, o);
        return n.join("&").replace($t, "+")
    }
    ,
    re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && _t.test(this.nodeName) && !Ot.test(e) && (this.checked || !_e.test(e))
            }).map(function(e, t) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Nt, "\r\n")
                }
            }).get()
        }
    }),
    re.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Ft = {
        0: 200,
        1223: 204
    }
      , Pt = re.ajaxSettings.xhr();
    ne.cors = !!Pt && "withCredentials"in Pt,
    ne.ajax = Pt = !!Pt,
    re.ajaxTransport(function(t) {
        var i, n;
        if (ne.cors || Pt && !t.crossDomain)
            return {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o)
                        a.setRequestHeader(s, o[s]);
                    i = function(e) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = i(),
                    n = a.onerror = i("error"),
                    void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            i && n()
                        })
                    }
                    ,
                    i = i("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (i)
                            throw l
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e),
                e
            }
        }
    }),
    re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, o) {
                    t = re("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(),
                        i = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    X.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Lt = []
      , Mt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || re.expando + "_" + vt++;
            return this[e] = !0,
            e
        }
    }),
    re.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, r, s, a = t.jsonp !== !1 && (Mt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Mt, "$1" + o) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return s || re.error(o + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                s = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? re(e).removeProp(o) : e[o] = r,
                t[o] && (t.jsonpCallback = i.jsonpCallback,
                Lt.push(o)),
                s && re.isFunction(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    re.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (i = t,
        t = !1),
        t = t || X;
        var n = he.exec(e)
          , o = !i && [];
        return n ? [t.createElement(n[1])] : (n = f([e], t, o),
        o && o.length && re(o).remove(),
        re.merge([], n.childNodes))
    }
    ;
    var Ht = re.fn.load;
    re.fn.load = function(e, t, i) {
        if ("string" != typeof e && Ht)
            return Ht.apply(this, arguments);
        var n, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (n = re.trim(e.slice(a)),
        e = e.slice(0, a)),
        re.isFunction(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && re.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(n ? re("<div>").append(re.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    re.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, d, c = re.css(e, "position"), u = re(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            r = re.css(e, "top"),
            l = re.css(e, "left"),
            d = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1,
            d ? (n = u.position(),
            s = n.top,
            o = n.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            re.isFunction(t) && (t = t.call(e, i, re.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, f) : u.css(f)
        }
    },
    re.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
            var t, i, n = this[0], o = {
                top: 0,
                left: 0
            }, r = n && n.ownerDocument;
            if (r)
                return t = r.documentElement,
                re.contains(t, n) ? (o = n.getBoundingClientRect(),
                i = V(r),
                {
                    top: o.top + i.pageYOffset - t.clientTop,
                    left: o.left + i.pageXOffset - t.clientLeft
                }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                re.nodeName(e[0], "html") || (n = e.offset()),
                n.top += re.css(e[0], "borderTopWidth", !0),
                n.left += re.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - re.css(i, "marginTop", !0),
                    left: t.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === re.css(e, "position"); )
                    e = e.offsetParent;
                return e || Qe
            })
        }
    }),
    re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        re.fn[e] = function(n) {
            return Ce(this, function(e, n, o) {
                var r = V(e);
                return void 0 === o ? r ? r[t] : e[n] : void (r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o)
            }, e, n, arguments.length)
        }
    }),
    re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = A(ne.pixelPosition, function(e, i) {
            if (i)
                return i = E(e, t),
                Xe.test(i) ? re(e).position()[t] + "px" : i
        })
    }),
    re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            re.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n)
                  , s = i || (n === !0 || o === !0 ? "margin" : "border");
                return Ce(this, function(t, i, n) {
                    var o;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? re.css(t, i, s) : re.style(t, i, n, s)
                }, t, r ? n : void 0, r, null)
            }
        })
    }),
    re.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        size: function() {
            return this.length
        }
    }),
    re.fn.andSelf = re.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var Ut = e.jQuery
      , jt = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = jt),
        t && e.jQuery === re && (e.jQuery = Ut),
        re
    }
    ,
    t || (e.jQuery = e.$ = re),
    re
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.Tether = t()
}(this, function(e, t, i) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e) {
        var t = getComputedStyle(e) || {}
          , i = t.position
          , n = [];
        if ("fixed" === i)
            return [e];
        for (var o = e; (o = o.parentNode) && o && 1 === o.nodeType; ) {
            var r = void 0;
            try {
                r = getComputedStyle(o)
            } catch (s) {}
            if ("undefined" == typeof r || null === r)
                return n.push(o),
                n;
            var a = r
              , l = a.overflow
              , d = a.overflowX
              , c = a.overflowY;
            /(auto|scroll)/.test(l + c + d) && ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(o)
        }
        return n.push(document.body),
        n
    }
    function r() {
        k && document.body.removeChild(k),
        k = null
    }
    function s(e) {
        var t = void 0;
        e === document ? (t = document,
        e = document.documentElement) : t = e.ownerDocument;
        var i = t.documentElement
          , n = {}
          , o = e.getBoundingClientRect();
        for (var r in o)
            n[r] = o[r];
        var s = A();
        return n.top -= s.top,
        n.left -= s.left,
        "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right),
        "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom),
        n.top = n.top - i.clientTop,
        n.left = n.left - i.clientLeft,
        n.right = t.body.clientWidth - n.width - n.left,
        n.bottom = t.body.clientHeight - n.height - n.top,
        n
    }
    function a(e) {
        return e.offsetParent || document.documentElement
    }
    function l() {
        var e = document.createElement("div");
        e.style.width = "100%",
        e.style.height = "200px";
        var t = document.createElement("div");
        d(t.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }),
        t.appendChild(e),
        document.body.appendChild(t);
        var i = e.offsetWidth;
        t.style.overflow = "scroll";
        var n = e.offsetWidth;
        i === n && (n = t.clientWidth),
        document.body.removeChild(t);
        var o = i - n;
        return {
            width: o,
            height: o
        }
    }
    function d() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
          , t = [];
        return Array.prototype.push.apply(t, arguments),
        t.slice(1).forEach(function(t) {
            if (t)
                for (var i in t)
                    ({}).hasOwnProperty.call(t, i) && (e[i] = t[i])
        }),
        e
    }
    function c(e, t) {
        if ("undefined" != typeof e.classList)
            t.split(" ").forEach(function(t) {
                t.trim() && e.classList.remove(t)
            });
        else {
            var i = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)","gi")
              , n = p(e).replace(i, " ");
            h(e, n)
        }
    }
    function u(e, t) {
        if ("undefined" != typeof e.classList)
            t.split(" ").forEach(function(t) {
                t.trim() && e.classList.add(t)
            });
        else {
            c(e, t);
            var i = p(e) + (" " + t);
            h(e, i)
        }
    }
    function f(e, t) {
        if ("undefined" != typeof e.classList)
            return e.classList.contains(t);
        var i = p(e);
        return new RegExp("(^| )" + t + "( |$)","gi").test(i)
    }
    function p(e) {
        return e.className instanceof SVGAnimatedString ? e.className.baseVal : e.className
    }
    function h(e, t) {
        e.setAttribute("class", t)
    }
    function g(e, t, i) {
        i.forEach(function(i) {
            t.indexOf(i) === -1 && f(e, i) && c(e, i)
        }),
        t.forEach(function(t) {
            f(e, t) || u(e, t)
        })
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function m(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function v(e, t) {
        var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return e + i >= t && t >= e - i
    }
    function y() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }
    function b() {
        for (var e = {
            top: 0,
            left: 0
        }, t = arguments.length, i = Array(t), n = 0; n < t; n++)
            i[n] = arguments[n];
        return i.forEach(function(t) {
            var i = t.top
              , n = t.left;
            "string" == typeof i && (i = parseFloat(i, 10)),
            "string" == typeof n && (n = parseFloat(n, 10)),
            e.top += i,
            e.left += n
        }),
        e
    }
    function w(e, t) {
        return "string" == typeof e.left && e.left.indexOf("%") !== -1 && (e.left = parseFloat(e.left, 10) / 100 * t.width),
        "string" == typeof e.top && e.top.indexOf("%") !== -1 && (e.top = parseFloat(e.top, 10) / 100 * t.height),
        e
    }
    function T(e, t) {
        return "scrollParent" === t ? t = e.scrollParents[0] : "window" === t && (t = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
        t === document && (t = t.documentElement),
        "undefined" != typeof t.nodeType && !function() {
            var e = s(t)
              , i = e
              , n = getComputedStyle(t);
            t = [i.left, i.top, e.width + i.left, e.height + i.top],
            V.forEach(function(e, i) {
                e = e[0].toUpperCase() + e.substr(1),
                "Top" === e || "Left" === e ? t[i] += parseFloat(n["border" + e + "Width"]) : t[i] -= parseFloat(n["border" + e + "Width"])
            })
        }(),
        t
    }
    var S = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , C = void 0;
    "undefined" == typeof C && (C = {
        modules: []
    });
    var k = null
      , x = function() {
        var e = 0;
        return function() {
            return ++e
        }
    }()
      , E = {}
      , A = function() {
        var e = k;
        e || (e = document.createElement("div"),
        e.setAttribute("data-tether-id", x()),
        d(e.style, {
            top: 0,
            left: 0,
            position: "absolute"
        }),
        document.body.appendChild(e),
        k = e);
        var t = e.getAttribute("data-tether-id");
        if ("undefined" == typeof E[t]) {
            E[t] = {};
            var i = e.getBoundingClientRect();
            for (var n in i)
                E[t][n] = i[n];
            $(function() {
                delete E[t]
            })
        }
        return E[t]
    }
      , I = []
      , $ = function(e) {
        I.push(e)
    }
      , D = function() {
        for (var e = void 0; e = I.pop(); )
            e()
    }
      , N = function() {
        function e() {
            n(this, e)
        }
        return S(e, [{
            key: "on",
            value: function(e, t, i) {
                var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                "undefined" == typeof this.bindings[e] && (this.bindings[e] = []),
                this.bindings[e].push({
                    handler: t,
                    ctx: i,
                    once: n
                })
            }
        }, {
            key: "once",
            value: function(e, t, i) {
                this.on(e, t, i, !0)
            }
        }, {
            key: "off",
            value: function(e, t) {
                if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[e])
                    if ("undefined" == typeof t)
                        delete this.bindings[e];
                    else
                        for (var i = 0; i < this.bindings[e].length; )
                            this.bindings[e][i].handler === t ? this.bindings[e].splice(i, 1) : ++i
            }
        }, {
            key: "trigger",
            value: function(e) {
                if ("undefined" != typeof this.bindings && this.bindings[e]) {
                    for (var t = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                        n[o - 1] = arguments[o];
                    for (; t < this.bindings[e].length; ) {
                        var r = this.bindings[e][t]
                          , s = r.handler
                          , a = r.ctx
                          , l = r.once
                          , d = a;
                        "undefined" == typeof d && (d = this),
                        s.apply(d, n),
                        l ? this.bindings[e].splice(t, 1) : ++t
                    }
                }
            }
        }]),
        e
    }();
    C.Utils = {
        getScrollParents: o,
        getBounds: s,
        getOffsetParent: a,
        extend: d,
        addClass: u,
        removeClass: c,
        hasClass: f,
        updateClasses: g,
        defer: $,
        flush: D,
        uniqueId: x,
        Evented: N,
        getScrollBarSize: l,
        removeUtilElements: r
    };
    var O = function() {
        function e(e, t) {
            var i = []
              , n = !0
              , o = !1
              , r = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                !t || i.length !== t); n = !0)
                    ;
            } catch (l) {
                o = !0,
                r = l
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (o)
                        throw r
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , S = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , _ = function(e, t, i) {
        for (var n = !0; n; ) {
            var o = e
              , r = t
              , s = i;
            n = !1,
            null === o && (o = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(o, r);
            if (void 0 !== a) {
                if ("value"in a)
                    return a.value;
                var l = a.get;
                if (void 0 === l)
                    return;
                return l.call(s)
            }
            var d = Object.getPrototypeOf(o);
            if (null === d)
                return;
            e = d,
            t = r,
            i = s,
            n = !0,
            a = d = void 0
        }
    };
    if ("undefined" == typeof C)
        throw new Error("You must include the utils.js file before tether.js");
    var F = C.Utils
      , o = F.getScrollParents
      , s = F.getBounds
      , a = F.getOffsetParent
      , d = F.extend
      , u = F.addClass
      , c = F.removeClass
      , g = F.updateClasses
      , $ = F.defer
      , D = F.flush
      , l = F.getScrollBarSize
      , r = F.removeUtilElements
      , P = function() {
        if ("undefined" == typeof document)
            return "";
        for (var e = document.createElement("div"), t = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < t.length; ++i) {
            var n = t[i];
            if (void 0 !== e.style[n])
                return n
        }
    }()
      , L = []
      , M = function() {
        L.forEach(function(e) {
            e.position(!1)
        }),
        D()
    };
    !function() {
        var e = null
          , t = null
          , i = null
          , n = function o() {
            return "undefined" != typeof t && t > 16 ? (t = Math.min(t - 16, 250),
            void (i = setTimeout(o, 250))) : void ("undefined" != typeof e && y() - e < 10 || (null != i && (clearTimeout(i),
            i = null),
            e = y(),
            M(),
            t = y() - e))
        };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(e) {
            window.addEventListener(e, n)
        })
    }();
    var H = {
        center: "center",
        left: "right",
        right: "left"
    }
      , U = {
        middle: "middle",
        top: "bottom",
        bottom: "top"
    }
      , j = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
    }
      , R = function(e, t) {
        var i = e.left
          , n = e.top;
        return "auto" === i && (i = H[t.left]),
        "auto" === n && (n = U[t.top]),
        {
            left: i,
            top: n
        }
    }
      , q = function(e) {
        var t = e.left
          , i = e.top;
        return "undefined" != typeof j[e.left] && (t = j[e.left]),
        "undefined" != typeof j[e.top] && (i = j[e.top]),
        {
            left: t,
            top: i
        }
    }
      , z = function(e) {
        var t = e.split(" ")
          , i = O(t, 2)
          , n = i[0]
          , o = i[1];
        return {
            top: n,
            left: o
        }
    }
      , W = z
      , B = function(e) {
        function t(e) {
            var i = this;
            n(this, t),
            _(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.position = this.position.bind(this),
            L.push(this),
            this.history = [],
            this.setOptions(e, !1),
            C.modules.forEach(function(e) {
                "undefined" != typeof e.initialize && e.initialize.call(i)
            }),
            this.position()
        }
        return m(t, e),
        S(t, [{
            key: "getClass",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                  , t = this.options.classes;
                return "undefined" != typeof t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
            }
        }, {
            key: "setOptions",
            value: function(e) {
                var t = this
                  , i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1]
                  , n = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                };
                this.options = d(n, e);
                var r = this.options
                  , s = r.element
                  , a = r.target
                  , l = r.targetModifier;
                if (this.element = s,
                this.target = a,
                this.targetModifier = l,
                "viewport" === this.target ? (this.target = document.body,
                this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body,
                this.targetModifier = "scroll-handle"),
                ["element", "target"].forEach(function(e) {
                    if ("undefined" == typeof t[e])
                        throw new Error("Tether Error: Both element and target must be defined");
                    "undefined" != typeof t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                }),
                u(this.element, this.getClass("element")),
                this.options.addTargetClasses !== !1 && u(this.target, this.getClass("target")),
                !this.options.attachment)
                    throw new Error("Tether Error: You must provide an attachment");
                this.targetAttachment = W(this.options.targetAttachment),
                this.attachment = W(this.options.attachment),
                this.offset = z(this.options.offset),
                this.targetOffset = z(this.options.targetOffset),
                "undefined" != typeof this.scrollParents && this.disable(),
                "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = o(this.target),
                this.options.enabled !== !1 && this.enable(i)
            }
        }, {
            key: "getTargetBounds",
            value: function() {
                if ("undefined" == typeof this.targetModifier)
                    return s(this.target);
                if ("visible" === this.targetModifier) {
                    if (this.target === document.body)
                        return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                    var e = s(this.target)
                      , t = {
                        height: e.height,
                        width: e.width,
                        top: e.top,
                        left: e.left
                    };
                    return t.height = Math.min(t.height, e.height - (pageYOffset - e.top)),
                    t.height = Math.min(t.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))),
                    t.height = Math.min(innerHeight, t.height),
                    t.height -= 2,
                    t.width = Math.min(t.width, e.width - (pageXOffset - e.left)),
                    t.width = Math.min(t.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))),
                    t.width = Math.min(innerWidth, t.width),
                    t.width -= 2,
                    t.top < pageYOffset && (t.top = pageYOffset),
                    t.left < pageXOffset && (t.left = pageXOffset),
                    t
                }
                if ("scroll-handle" === this.targetModifier) {
                    var e = void 0
                      , i = this.target;
                    i === document.body ? (i = document.documentElement,
                    e = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                    }) : e = s(i);
                    var n = getComputedStyle(i)
                      , o = i.scrollWidth > i.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body
                      , r = 0;
                    o && (r = 15);
                    var a = e.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r
                      , t = {
                        width: 15,
                        height: .975 * a * (a / i.scrollHeight),
                        left: e.left + e.width - parseFloat(n.borderLeftWidth) - 15
                    }
                      , l = 0;
                    a < 408 && this.target === document.body && (l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58),
                    this.target !== document.body && (t.height = Math.max(t.height, 24));
                    var d = this.target.scrollTop / (i.scrollHeight - a);
                    return t.top = d * (a - t.height - l) + e.top + parseFloat(n.borderTopWidth),
                    this.target === document.body && (t.height = Math.max(t.height, 24)),
                    t
                }
            }
        }, {
            key: "clearCache",
            value: function() {
                this._cache = {}
            }
        }, {
            key: "cache",
            value: function(e, t) {
                return "undefined" == typeof this._cache && (this._cache = {}),
                "undefined" == typeof this._cache[e] && (this._cache[e] = t.call(this)),
                this._cache[e]
            }
        }, {
            key: "enable",
            value: function() {
                var e = this
                  , t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                this.options.addTargetClasses !== !1 && u(this.target, this.getClass("enabled")),
                u(this.element, this.getClass("enabled")),
                this.enabled = !0,
                this.scrollParents.forEach(function(t) {
                    t !== document && t.addEventListener("scroll", e.position)
                }),
                t && this.position()
            }
        }, {
            key: "disable",
            value: function() {
                var e = this;
                c(this.target, this.getClass("enabled")),
                c(this.element, this.getClass("enabled")),
                this.enabled = !1,
                "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(t) {
                    t.removeEventListener("scroll", e.position)
                })
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                this.disable(),
                L.forEach(function(t, i) {
                    t === e && L.splice(i, 1)
                }),
                0 === L.length && r()
            }
        }, {
            key: "updateAttachClasses",
            value: function(e, t) {
                var i = this;
                e = e || this.attachment,
                t = t || this.targetAttachment;
                var n = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length),
                "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                var o = this._addAttachClasses;
                e.top && o.push(this.getClass("element-attached") + "-" + e.top),
                e.left && o.push(this.getClass("element-attached") + "-" + e.left),
                t.top && o.push(this.getClass("target-attached") + "-" + t.top),
                t.left && o.push(this.getClass("target-attached") + "-" + t.left);
                var r = [];
                n.forEach(function(e) {
                    r.push(i.getClass("element-attached") + "-" + e),
                    r.push(i.getClass("target-attached") + "-" + e)
                }),
                $(function() {
                    "undefined" != typeof i._addAttachClasses && (g(i.element, i._addAttachClasses, r),
                    i.options.addTargetClasses !== !1 && g(i.target, i._addAttachClasses, r),
                    delete i._addAttachClasses)
                })
            }
        }, {
            key: "position",
            value: function() {
                var e = this
                  , t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                if (this.enabled) {
                    this.clearCache();
                    var i = R(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, i);
                    var n = this.cache("element-bounds", function() {
                        return s(e.element)
                    })
                      , o = n.width
                      , r = n.height;
                    if (0 === o && 0 === r && "undefined" != typeof this.lastSize) {
                        var d = this.lastSize;
                        o = d.width,
                        r = d.height
                    } else
                        this.lastSize = {
                            width: o,
                            height: r
                        };
                    var c = this.cache("target-bounds", function() {
                        return e.getTargetBounds()
                    })
                      , u = c
                      , f = w(q(this.attachment), {
                        width: o,
                        height: r
                    })
                      , p = w(q(i), u)
                      , h = w(this.offset, {
                        width: o,
                        height: r
                    })
                      , g = w(this.targetOffset, u);
                    f = b(f, h),
                    p = b(p, g);
                    for (var m = c.left + p.left - f.left, v = c.top + p.top - f.top, y = 0; y < C.modules.length; ++y) {
                        var T = C.modules[y]
                          , S = T.position.call(this, {
                            left: m,
                            top: v,
                            targetAttachment: i,
                            targetPos: c,
                            elementPos: n,
                            offset: f,
                            targetOffset: p,
                            manualOffset: h,
                            manualTargetOffset: g,
                            scrollbarSize: x,
                            attachment: this.attachment
                        });
                        if (S === !1)
                            return !1;
                        "undefined" != typeof S && "object" == typeof S && (v = S.top,
                        m = S.left)
                    }
                    var k = {
                        page: {
                            top: v,
                            left: m
                        },
                        viewport: {
                            top: v - pageYOffset,
                            bottom: pageYOffset - v - r + innerHeight,
                            left: m - pageXOffset,
                            right: pageXOffset - m - o + innerWidth
                        }
                    }
                      , x = void 0;
                    return document.body.scrollWidth > window.innerWidth && (x = this.cache("scrollbar-size", l),
                    k.viewport.bottom -= x.height),
                    document.body.scrollHeight > window.innerHeight && (x = this.cache("scrollbar-size", l),
                    k.viewport.right -= x.width),
                    ["", "static"].indexOf(document.body.style.position) !== -1 && ["", "static"].indexOf(document.body.parentElement.style.position) !== -1 || (k.page.bottom = document.body.scrollHeight - v - r,
                    k.page.right = document.body.scrollWidth - m - o),
                    "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function() {
                        var t = e.cache("target-offsetparent", function() {
                            return a(e.target)
                        })
                          , i = e.cache("target-offsetparent-bounds", function() {
                            return s(t)
                        })
                          , n = getComputedStyle(t)
                          , o = i
                          , r = {};
                        if (["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                            r[e.toLowerCase()] = parseFloat(n["border" + e + "Width"])
                        }),
                        i.right = document.body.scrollWidth - i.left - o.width + r.right,
                        i.bottom = document.body.scrollHeight - i.top - o.height + r.bottom,
                        k.page.top >= i.top + r.top && k.page.bottom >= i.bottom && k.page.left >= i.left + r.left && k.page.right >= i.right) {
                            var l = t.scrollTop
                              , d = t.scrollLeft;
                            k.offset = {
                                top: k.page.top - i.top + l - r.top,
                                left: k.page.left - i.left + d - r.left
                            }
                        }
                    }(),
                    this.move(k),
                    this.history.unshift(k),
                    this.history.length > 3 && this.history.pop(),
                    t && D(),
                    !0
                }
            }
        }, {
            key: "move",
            value: function(e) {
                var t = this;
                if ("undefined" != typeof this.element.parentNode) {
                    var i = {};
                    for (var n in e) {
                        i[n] = {};
                        for (var o in e[n]) {
                            for (var r = !1, s = 0; s < this.history.length; ++s) {
                                var l = this.history[s];
                                if ("undefined" != typeof l[n] && !v(l[n][o], e[n][o])) {
                                    r = !0;
                                    break
                                }
                            }
                            r || (i[n][o] = !0)
                        }
                    }
                    var c = {
                        top: "",
                        left: "",
                        right: "",
                        bottom: ""
                    }
                      , u = function(e, i) {
                        var n = "undefined" != typeof t.options.optimizations
                          , o = n ? t.options.optimizations.gpu : null;
                        if (o !== !1) {
                            var r = void 0
                              , s = void 0;
                            e.top ? (c.top = 0,
                            r = i.top) : (c.bottom = 0,
                            r = -i.bottom),
                            e.left ? (c.left = 0,
                            s = i.left) : (c.right = 0,
                            s = -i.right),
                            c[P] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)",
                            "msTransform" !== P && (c[P] += " translateZ(0)")
                        } else
                            e.top ? c.top = i.top + "px" : c.bottom = i.bottom + "px",
                            e.left ? c.left = i.left + "px" : c.right = i.right + "px"
                    }
                      , f = !1;
                    if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (c.position = "absolute",
                    u(i.page, e.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (c.position = "fixed",
                    u(i.viewport, e.viewport)) : "undefined" != typeof i.offset && i.offset.top && i.offset.left ? !function() {
                        c.position = "absolute";
                        var n = t.cache("target-offsetparent", function() {
                            return a(t.target)
                        });
                        a(t.element) !== n && $(function() {
                            t.element.parentNode.removeChild(t.element),
                            n.appendChild(t.element)
                        }),
                        u(i.offset, e.offset),
                        f = !0
                    }() : (c.position = "absolute",
                    u({
                        top: !0,
                        left: !0
                    }, e.page)),
                    !f) {
                        for (var p = !0, h = this.element.parentNode; h && 1 === h.nodeType && "BODY" !== h.tagName; ) {
                            if ("static" !== getComputedStyle(h).position) {
                                p = !1;
                                break
                            }
                            h = h.parentNode
                        }
                        p || (this.element.parentNode.removeChild(this.element),
                        document.body.appendChild(this.element))
                    }
                    var g = {}
                      , m = !1;
                    for (var o in c) {
                        var y = c[o]
                          , b = this.element.style[o];
                        b !== y && (m = !0,
                        g[o] = y)
                    }
                    m && $(function() {
                        d(t.element.style, g)
                    })
                }
            }
        }]),
        t
    }(N);
    B.modules = [],
    C.position = M;
    var Z = d(B, C)
      , O = function() {
        function e(e, t) {
            var i = []
              , n = !0
              , o = !1
              , r = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                !t || i.length !== t); n = !0)
                    ;
            } catch (l) {
                o = !0,
                r = l
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (o)
                        throw r
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , F = C.Utils
      , s = F.getBounds
      , d = F.extend
      , g = F.updateClasses
      , $ = F.defer
      , V = ["left", "top", "right", "bottom"];
    C.modules.push({
        position: function(e) {
            var t = this
              , i = e.top
              , n = e.left
              , o = e.targetAttachment;
            if (!this.options.constraints)
                return !0;
            var r = this.cache("element-bounds", function() {
                return s(t.element)
            })
              , a = r.height
              , l = r.width;
            if (0 === l && 0 === a && "undefined" != typeof this.lastSize) {
                var c = this.lastSize;
                l = c.width,
                a = c.height
            }
            var u = this.cache("target-bounds", function() {
                return t.getTargetBounds()
            })
              , f = u.height
              , p = u.width
              , h = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(e) {
                var t = e.outOfBoundsClass
                  , i = e.pinnedClass;
                t && h.push(t),
                i && h.push(i)
            }),
            h.forEach(function(e) {
                ["left", "top", "right", "bottom"].forEach(function(t) {
                    h.push(e + "-" + t)
                })
            });
            var m = []
              , v = d({}, o)
              , y = d({}, this.attachment);
            return this.options.constraints.forEach(function(e) {
                var r = e.to
                  , s = e.attachment
                  , d = e.pin;
                "undefined" == typeof s && (s = "");
                var c = void 0
                  , u = void 0;
                if (s.indexOf(" ") >= 0) {
                    var h = s.split(" ")
                      , g = O(h, 2);
                    u = g[0],
                    c = g[1]
                } else
                    c = u = s;
                var b = T(t, r);
                "target" !== u && "both" !== u || (i < b[1] && "top" === v.top && (i += f,
                v.top = "bottom"),
                i + a > b[3] && "bottom" === v.top && (i -= f,
                v.top = "top")),
                "together" === u && ("top" === v.top && ("bottom" === y.top && i < b[1] ? (i += f,
                v.top = "bottom",
                i += a,
                y.top = "top") : "top" === y.top && i + a > b[3] && i - (a - f) >= b[1] && (i -= a - f,
                v.top = "bottom",
                y.top = "bottom")),
                "bottom" === v.top && ("top" === y.top && i + a > b[3] ? (i -= f,
                v.top = "top",
                i -= a,
                y.top = "bottom") : "bottom" === y.top && i < b[1] && i + (2 * a - f) <= b[3] && (i += a - f,
                v.top = "top",
                y.top = "top")),
                "middle" === v.top && (i + a > b[3] && "top" === y.top ? (i -= a,
                y.top = "bottom") : i < b[1] && "bottom" === y.top && (i += a,
                y.top = "top"))),
                "target" !== c && "both" !== c || (n < b[0] && "left" === v.left && (n += p,
                v.left = "right"),
                n + l > b[2] && "right" === v.left && (n -= p,
                v.left = "left")),
                "together" === c && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p,
                v.left = "right",
                n += l,
                y.left = "left") : "left" === y.left && (n += p,
                v.left = "right",
                n -= l,
                y.left = "right") : n + l > b[2] && "right" === v.left ? "left" === y.left ? (n -= p,
                v.left = "left",
                n -= l,
                y.left = "right") : "right" === y.left && (n -= p,
                v.left = "left",
                n += l,
                y.left = "left") : "center" === v.left && (n + l > b[2] && "left" === y.left ? (n -= l,
                y.left = "right") : n < b[0] && "right" === y.left && (n += l,
                y.left = "left"))),
                "element" !== u && "both" !== u || (i < b[1] && "bottom" === y.top && (i += a,
                y.top = "top"),
                i + a > b[3] && "top" === y.top && (i -= a,
                y.top = "bottom")),
                "element" !== c && "both" !== c || (n < b[0] && ("right" === y.left ? (n += l,
                y.left = "left") : "center" === y.left && (n += l / 2,
                y.left = "left")),
                n + l > b[2] && ("left" === y.left ? (n -= l,
                y.left = "right") : "center" === y.left && (n -= l / 2,
                y.left = "right"))),
                "string" == typeof d ? d = d.split(",").map(function(e) {
                    return e.trim()
                }) : d === !0 && (d = ["top", "left", "right", "bottom"]),
                d = d || [];
                var w = []
                  , S = [];
                i < b[1] && (d.indexOf("top") >= 0 ? (i = b[1],
                w.push("top")) : S.push("top")),
                i + a > b[3] && (d.indexOf("bottom") >= 0 ? (i = b[3] - a,
                w.push("bottom")) : S.push("bottom")),
                n < b[0] && (d.indexOf("left") >= 0 ? (n = b[0],
                w.push("left")) : S.push("left")),
                n + l > b[2] && (d.indexOf("right") >= 0 ? (n = b[2] - l,
                w.push("right")) : S.push("right")),
                w.length && !function() {
                    var e = void 0;
                    e = "undefined" != typeof t.options.pinnedClass ? t.options.pinnedClass : t.getClass("pinned"),
                    m.push(e),
                    w.forEach(function(t) {
                        m.push(e + "-" + t)
                    })
                }(),
                S.length && !function() {
                    var e = void 0;
                    e = "undefined" != typeof t.options.outOfBoundsClass ? t.options.outOfBoundsClass : t.getClass("out-of-bounds"),
                    m.push(e),
                    S.forEach(function(t) {
                        m.push(e + "-" + t)
                    })
                }(),
                (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1),
                (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1),
                v.top === o.top && v.left === o.left && y.top === t.attachment.top && y.left === t.attachment.left || (t.updateAttachClasses(y, v),
                t.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }),
            $(function() {
                t.options.addTargetClasses !== !1 && g(t.target, m, h),
                g(t.element, m, h)
            }),
            {
                top: i,
                left: n
            }
        }
    });
    var F = C.Utils
      , s = F.getBounds
      , g = F.updateClasses
      , $ = F.defer;
    C.modules.push({
        position: function(e) {
            var t = this
              , i = e.top
              , n = e.left
              , o = this.cache("element-bounds", function() {
                return s(t.element)
            })
              , r = o.height
              , a = o.width
              , l = this.getTargetBounds()
              , d = i + r
              , c = n + a
              , u = [];
            i <= l.bottom && d >= l.top && ["left", "right"].forEach(function(e) {
                var t = l[e];
                t !== n && t !== c || u.push(e)
            }),
            n <= l.right && c >= l.left && ["top", "bottom"].forEach(function(e) {
                var t = l[e];
                t !== i && t !== d || u.push(e)
            });
            var f = []
              , p = []
              , h = ["left", "top", "right", "bottom"];
            return f.push(this.getClass("abutted")),
            h.forEach(function(e) {
                f.push(t.getClass("abutted") + "-" + e)
            }),
            u.length && p.push(this.getClass("abutted")),
            u.forEach(function(e) {
                p.push(t.getClass("abutted") + "-" + e)
            }),
            $(function() {
                t.options.addTargetClasses !== !1 && g(t.target, p, f),
                g(t.element, p, f)
            }),
            !0
        }
    });
    var O = function() {
        function e(e, t) {
            var i = []
              , n = !0
              , o = !1
              , r = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                !t || i.length !== t); n = !0)
                    ;
            } catch (l) {
                o = !0,
                r = l
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (o)
                        throw r
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return C.modules.push({
        position: function(e) {
            var t = e.top
              , i = e.left;
            if (this.options.shift) {
                var n = this.options.shift;
                "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                    top: t,
                    left: i
                }));
                var o = void 0
                  , r = void 0;
                if ("string" == typeof n) {
                    n = n.split(" "),
                    n[1] = n[1] || n[0];
                    var s = n
                      , a = O(s, 2);
                    o = a[0],
                    r = a[1],
                    o = parseFloat(o, 10),
                    r = parseFloat(r, 10)
                } else
                    o = n.top,
                    r = n.left;
                return t += o,
                i += r,
                {
                    top: t,
                    left: i
                }
            }
        }
    }),
    Z
});
var Util = function(e) {
    function t(e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }
    function i(e) {
        return (e[0] || e).nodeType
    }
    function n() {
        return {
            bindType: a.end,
            delegateType: a.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        }
    }
    function o() {
        if (window.QUnit)
            return !1;
        var e = document.createElement("bootstrap");
        for (var t in l)
            if (void 0 !== e.style[t])
                return {
                    end: l[t]
                };
        return !1
    }
    function r(t) {
        var i = this
          , n = !1;
        return e(this).one(d.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || d.triggerTransitionEnd(i)
        }, t),
        this
    }
    function s() {
        a = o(),
        e.fn.emulateTransitionEnd = r,
        d.supportsTransitionEnd() && (e.event.special[d.TRANSITION_END] = n())
    }
    var a = !1
      , l = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    }
      , d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do
                e += ~~(1e6 * Math.random());
            while (document.getElementById(e));return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            return t || (t = e.getAttribute("href") || "",
            t = /^#[a-z]/i.test(t) ? t : null),
            t
        },
        reflow: function(e) {
            new Function("bs","return bs")(e.offsetHeight)
        },
        triggerTransitionEnd: function(t) {
            e(t).trigger(a.end)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        typeCheckConfig: function(e, n, o) {
            for (var r in o)
                if (o.hasOwnProperty(r)) {
                    var s = o[r]
                      , a = n[r]
                      , l = void 0;
                    if (l = a && i(a) ? "element" : t(a),
                    !new RegExp(s).test(l))
                        throw new Error(e.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                }
        }
    };
    return s(),
    d
}(jQuery)
  , _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i),
        n && e(t, n),
        t
    }
}()
  , Dropdown = function(e) {
    var t = "dropdown"
      , i = "4.0.0-alpha"
      , n = "bs.dropdown"
      , o = "." + n
      , r = ".data-api"
      , s = e.fn[t]
      , a = {
        HIDE: "hide" + o,
        HIDDEN: "hidden" + o,
        SHOW: "show" + o,
        SHOWN: "shown" + o,
        CLICK: "click" + o,
        CLICK_DATA_API: "click" + o + r,
        KEYDOWN_DATA_API: "keydown" + o + r
    }
      , l = {
        BACKDROP: "dropdown-backdrop",
        DISABLED: "disabled",
        OPEN: "open"
    }
      , d = {
        BACKDROP: ".dropdown-backdrop",
        DATA_TOGGLE: '[data-toggle="dropdown"]',
        FORM_CHILD: ".dropdown form",
        ROLE_MENU: '[role="menu"]',
        ROLE_LISTBOX: '[role="listbox"]',
        NAVBAR_NAV: ".navbar-nav",
        VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
    }
      , c = function() {
        function t(e) {
            _classCallCheck(this, t),
            this._element = e,
            this._addEventListeners()
        }
        return _createClass(t, [{
            key: "toggle",
            value: function() {
                if (this.disabled || e(this).hasClass(l.DISABLED))
                    return !1;
                var i = t._getParentFromElement(this)
                  , n = e(i).hasClass(l.OPEN);
                if (t._clearMenus(),
                n)
                    return !1;
                if ("ontouchstart"in document.documentElement && !e(i).closest(d.NAVBAR_NAV).length) {
                    var o = document.createElement("div");
                    o.className = l.BACKDROP,
                    e(o).insertBefore(this),
                    e(o).on("click", t._clearMenus)
                }
                var r = {
                    relatedTarget: this
                }
                  , s = e.Event(a.SHOW, r);
                return e(i).trigger(s),
                !s.isDefaultPrevented() && (this.focus(),
                this.setAttribute("aria-expanded", "true"),
                e(i).toggleClass(l.OPEN),
                e(i).trigger(e.Event(a.SHOWN, r)),
                !1)
            }
        }, {
            key: "dispose",
            value: function() {
                e.removeData(this._element, n),
                e(this._element).off(o),
                this._element = null
            }
        }, {
            key: "_addEventListeners",
            value: function() {
                e(this._element).on(a.CLICK, this.toggle)
            }
        }], [{
            key: "_jQueryInterface",
            value: function(i) {
                return this.each(function() {
                    var o = e(this).data(n);
                    if (o || e(this).data(n, o = new t(this)),
                    "string" == typeof i) {
                        if (void 0 === o[i])
                            throw new Error('No method named "' + i + '"');
                        o[i].call(this)
                    }
                })
            }
        }, {
            key: "_clearMenus",
            value: function(i) {
                if (!i || 3 !== i.which) {
                    var n = e(d.BACKDROP)[0];
                    n && n.parentNode.removeChild(n);
                    for (var o = e.makeArray(e(d.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                        var s = t._getParentFromElement(o[r])
                          , c = {
                            relatedTarget: o[r]
                        };
                        if (e(s).hasClass(l.OPEN) && !(i && "click" === i.type && /input|textarea/i.test(i.target.tagName) && e.contains(s, i.target))) {
                            var u = e.Event(a.HIDE, c);
                            e(s).trigger(u),
                            u.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"),
                            e(s).removeClass(l.OPEN).trigger(e.Event(a.HIDDEN, c)))
                        }
                    }
                }
            }
        }, {
            key: "_getParentFromElement",
            value: function(t) {
                var i = void 0
                  , n = Util.getSelectorFromElement(t);
                return n && (i = e(n)[0]),
                i || t.parentNode
            }
        }, {
            key: "_dataApiKeydownHandler",
            value: function(i) {
                if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(),
                i.stopPropagation(),
                !this.disabled && !e(this).hasClass(l.DISABLED))) {
                    var n = t._getParentFromElement(this)
                      , o = e(n).hasClass(l.OPEN);
                    if (!o && 27 !== i.which || o && 27 === i.which) {
                        if (27 === i.which) {
                            var r = e(n).find(d.DATA_TOGGLE)[0];
                            e(r).trigger("focus")
                        }
                        return void e(this).trigger("click")
                    }
                    var s = e.makeArray(e(d.VISIBLE_ITEMS));
                    if (s = s.filter(function(e) {
                        return e.offsetWidth || e.offsetHeight
                    }),
                    s.length) {
                        var a = s.indexOf(i.target);
                        38 === i.which && a > 0 && a--,
                        40 === i.which && a < s.length - 1 && a++,
                        ~a || (a = 0),
                        s[a].focus()
                    }
                }
            }
        }, {
            key: "VERSION",
            get: function() {
                return i
            }
        }]),
        t
    }();
    return e(document).on(a.KEYDOWN_DATA_API, d.DATA_TOGGLE, c._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, d.ROLE_MENU, c._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, d.ROLE_LISTBOX, c._dataApiKeydownHandler).on(a.CLICK_DATA_API, c._clearMenus).on(a.CLICK_DATA_API, d.DATA_TOGGLE, c.prototype.toggle).on(a.CLICK_DATA_API, d.FORM_CHILD, function(e) {
        e.stopPropagation()
    }),
    e.fn[t] = c._jQueryInterface,
    e.fn[t].Constructor = c,
    e.fn[t].noConflict = function() {
        return e.fn[t] = s,
        c._jQueryInterface
    }
    ,
    c
}(jQuery)
  , _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i),
        n && e(t, n),
        t
    }
}()
  , Modal = function(e) {
    var t = "modal"
      , i = "4.0.0-alpha"
      , n = "bs.modal"
      , o = "." + n
      , r = ".data-api"
      , s = e.fn[t]
      , a = 300
      , l = 150
      , d = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , c = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , u = {
        HIDE: "hide" + o,
        HIDDEN: "hidden" + o,
        SHOW: "show" + o,
        SHOWN: "shown" + o,
        FOCUSIN: "focusin" + o,
        RESIZE: "resize" + o,
        CLICK_DISMISS: "click.dismiss" + o,
        KEYDOWN_DISMISS: "keydown.dismiss" + o,
        MOUSEUP_DISMISS: "mouseup.dismiss" + o,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + o,
        CLICK_DATA_API: "click" + o + r
    }
      , f = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        IN: "in"
    }
      , p = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
    }
      , h = function() {
        function r(t, i) {
            _classCallCheck(this, r),
            this._config = this._getConfig(i),
            this._element = t,
            this._dialog = e(t).find(p.DIALOG)[0],
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._originalBodyPadding = 0,
            this._scrollbarWidth = 0
        }
        return _createClass(r, [{
            key: "toggle",
            value: function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
        }, {
            key: "show",
            value: function(t) {
                var i = this
                  , n = e.Event(u.SHOW, {
                    relatedTarget: t
                });
                e(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                e(document.body).addClass(f.OPEN),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(u.CLICK_DISMISS, p.DATA_DISMISS, e.proxy(this.hide, this)),
                e(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                    e(i._element).one(u.MOUSEUP_DISMISS, function(t) {
                        e(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(e.proxy(this._showElement, this, t)))
            }
        }, {
            key: "hide",
            value: function(t) {
                t && t.preventDefault();
                var i = e.Event(u.HIDE);
                e(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented() && (this._isShown = !1,
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off(u.FOCUSIN),
                e(this._element).removeClass(f.IN),
                e(this._element).off(u.CLICK_DISMISS),
                e(this._dialog).off(u.MOUSEDOWN_DISMISS),
                Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE) ? e(this._element).one(Util.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(a) : this._hideModal())
            }
        }, {
            key: "dispose",
            value: function() {
                e.removeData(this._element, n),
                e(window).off(o),
                e(document).off(o),
                e(this._element).off(o),
                e(this._backdrop).off(o),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._originalBodyPadding = null,
                this._scrollbarWidth = null
            }
        }, {
            key: "_getConfig",
            value: function(i) {
                return i = e.extend({}, d, i),
                Util.typeCheckConfig(t, i, c),
                i
            }
        }, {
            key: "_showElement",
            value: function(t) {
                var i = this
                  , n = Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.scrollTop = 0,
                n && Util.reflow(this._element),
                e(this._element).addClass(f.IN),
                this._config.focus && this._enforceFocus();
                var o = e.Event(u.SHOWN, {
                    relatedTarget: t
                })
                  , r = function() {
                    i._config.focus && i._element.focus(),
                    e(i._element).trigger(o)
                };
                n ? e(this._dialog).one(Util.TRANSITION_END, r).emulateTransitionEnd(a) : r()
            }
        }, {
            key: "_enforceFocus",
            value: function() {
                var t = this;
                e(document).off(u.FOCUSIN).on(u.FOCUSIN, function(i) {
                    t._element === i.target || e(t._element).has(i.target).length || t._element.focus()
                })
            }
        }, {
            key: "_setEscapeEvent",
            value: function() {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(u.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && t.hide()
                }) : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS)
            }
        }, {
            key: "_setResizeEvent",
            value: function() {
                this._isShown ? e(window).on(u.RESIZE, e.proxy(this._handleUpdate, this)) : e(window).off(u.RESIZE)
            }
        }, {
            key: "_hideModal",
            value: function() {
                var t = this;
                this._element.style.display = "none",
                this._showBackdrop(function() {
                    e(document.body).removeClass(f.OPEN),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    e(t._element).trigger(u.HIDDEN)
                })
            }
        }, {
            key: "_removeBackdrop",
            value: function() {
                this._backdrop && (e(this._backdrop).remove(),
                this._backdrop = null)
            }
        }, {
            key: "_showBackdrop",
            value: function(t) {
                var i = this
                  , n = e(this._element).hasClass(f.FADE) ? f.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var o = Util.supportsTransitionEnd() && n;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = f.BACKDROP,
                    n && e(this._backdrop).addClass(n),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(u.CLICK_DISMISS, function(e) {
                        return i._ignoreBackdropClick ? void (i._ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                    }),
                    o && Util.reflow(this._backdrop),
                    e(this._backdrop).addClass(f.IN),
                    !t)
                        return;
                    if (!o)
                        return void t();
                    e(this._backdrop).one(Util.TRANSITION_END, t).emulateTransitionEnd(l)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(f.IN);
                    var r = function() {
                        i._removeBackdrop(),
                        t && t()
                    };
                    Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE) ? e(this._backdrop).one(Util.TRANSITION_END, r).emulateTransitionEnd(l) : r()
                } else
                    t && t()
            }
        }, {
            key: "_handleUpdate",
            value: function() {
                this._adjustDialog()
            }
        }, {
            key: "_adjustDialog",
            value: function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px~")
            }
        }, {
            key: "_resetAdjustments",
            value: function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
        }, {
            key: "_checkScrollbar",
            value: function() {
                var e = window.innerWidth;
                if (!e) {
                    var t = document.documentElement.getBoundingClientRect();
                    e = t.right - Math.abs(t.left)
                }
                this._isBodyOverflowing = document.body.clientWidth < e,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
        }, {
            key: "_setScrollbar",
            value: function() {
                var t = parseInt(e(p.FIXED_CONTENT).css("padding-right") || 0, 10);
                this._originalBodyPadding = document.body.style.paddingRight || "",
                this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
            }
        }, {
            key: "_resetScrollbar",
            value: function() {
                document.body.style.paddingRight = this._originalBodyPadding
            }
        }, {
            key: "_getScrollbarWidth",
            value: function() {
                var e = document.createElement("div");
                e.className = f.SCROLLBAR_MEASURER,
                document.body.appendChild(e);
                var t = e.offsetWidth - e.clientWidth;
                return document.body.removeChild(e),
                t
            }
        }], [{
            key: "_jQueryInterface",
            value: function(t, i) {
                return this.each(function() {
                    var o = e(this).data(n)
                      , s = e.extend({}, r.Default, e(this).data(), "object" == typeof t && t);
                    if (o || (o = new r(this,s),
                    e(this).data(n, o)),
                    "string" == typeof t) {
                        if (void 0 === o[t])
                            throw new Error('No method named "' + t + '"');
                        o[t](i)
                    } else
                        s.show && o.show(i)
                })
            }
        }, {
            key: "VERSION",
            get: function() {
                return i
            }
        }, {
            key: "Default",
            get: function() {
                return d
            }
        }]),
        r
    }();
    return e(document).on(u.CLICK_DATA_API, p.DATA_TOGGLE, function(t) {
        var i = this
          , o = void 0
          , r = Util.getSelectorFromElement(this);
        r && (o = e(r)[0]);
        var s = e(o).data(n) ? "toggle" : e.extend({}, e(o).data(), e(this).data());
        "A" === this.tagName && t.preventDefault();
        var a = e(o).one(u.SHOW, function(t) {
            t.isDefaultPrevented() || a.one(u.HIDDEN, function() {
                e(i).is(":visible") && i.focus()
            })
        });
        h._jQueryInterface.call(e(o), s, this)
    }),
    e.fn[t] = h._jQueryInterface,
    e.fn[t].Constructor = h,
    e.fn[t].noConflict = function() {
        return e.fn[t] = s,
        h._jQueryInterface
    }
    ,
    h
}(jQuery)
  , _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i),
        n && e(t, n),
        t
    }
}()
  , Tooltip = function(e) {
    if (void 0 === window.Tether)
        throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
    var t = "tooltip"
      , i = "4.0.0-alpha"
      , n = "bs.tooltip"
      , o = "." + n
      , r = e.fn[t]
      , s = 150
      , a = "bs-tether"
      , l = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: "0 0",
        constraints: []
    }
      , d = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "string",
        constraints: "array"
    }
      , c = {
        TOP: "bottom center",
        RIGHT: "middle left",
        BOTTOM: "top center",
        LEFT: "middle right"
    }
      , u = {
        IN: "in",
        OUT: "out"
    }
      , f = {
        HIDE: "hide" + o,
        HIDDEN: "hidden" + o,
        SHOW: "show" + o,
        SHOWN: "shown" + o,
        INSERTED: "inserted" + o,
        CLICK: "click" + o,
        FOCUSIN: "focusin" + o,
        FOCUSOUT: "focusout" + o,
        MOUSEENTER: "mouseenter" + o,
        MOUSELEAVE: "mouseleave" + o
    }
      , p = {
        FADE: "fade",
        IN: "in"
    }
      , h = {
        TOOLTIP: ".tooltip",
        TOOLTIP_INNER: ".tooltip-inner"
    }
      , g = {
        element: !1,
        enabled: !1
    }
      , m = {
        HOVER: "hover",
        FOCUS: "focus",
        CLICK: "click",
        MANUAL: "manual"
    }
      , v = function() {
        function r(e, t) {
            _classCallCheck(this, r),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._tether = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        return _createClass(r, [{
            key: "enable",
            value: function() {
                this._isEnabled = !0
            }
        }, {
            key: "disable",
            value: function() {
                this._isEnabled = !1
            }
        }, {
            key: "toggleEnabled",
            value: function() {
                this._isEnabled = !this._isEnabled
            }
        }, {
            key: "toggle",
            value: function(t) {
                if (t) {
                    var i = this.constructor.DATA_KEY
                      , n = e(t.currentTarget).data(i);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    e(t.currentTarget).data(i, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (e(this.getTipElement()).hasClass(p.IN))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
            }
        }, {
            key: "dispose",
            value: function() {
                clearTimeout(this._timeout),
                this.cleanupTether(),
                e.removeData(this.element, this.constructor.DATA_KEY),
                e(this.element).off(this.constructor.EVENT_KEY),
                this.tip && e(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                this._tether = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
        }, {
            key: "show",
            value: function() {
                var t = this
                  , i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var n = e.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !n)
                        return;
                    var o = this.getTipElement()
                      , s = Util.getUID(this.constructor.NAME);
                    o.setAttribute("id", s),
                    this.element.setAttribute("aria-describedby", s),
                    this.setContent(),
                    this.config.animation && e(o).addClass(p.FADE);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                      , d = this._getAttachment(l);
                    e(o).data(this.constructor.DATA_KEY, this).appendTo(document.body),
                    e(this.element).trigger(this.constructor.Event.INSERTED),
                    this._tether = new Tether({
                        attachment: d,
                        element: o,
                        target: this.element,
                        classes: g,
                        classPrefix: a,
                        offset: this.config.offset,
                        constraints: this.config.constraints,
                        addTargetClasses: !1
                    }),
                    Util.reflow(o),
                    this._tether.position(),
                    e(o).addClass(p.IN);
                    var c = function() {
                        var i = t._hoverState;
                        t._hoverState = null,
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        i === u.OUT && t._leave(null, t)
                    };
                    if (Util.supportsTransitionEnd() && e(this.tip).hasClass(p.FADE))
                        return void e(this.tip).one(Util.TRANSITION_END, c).emulateTransitionEnd(r._TRANSITION_DURATION);
                    c()
                }
            }
        }, {
            key: "hide",
            value: function(t) {
                var i = this
                  , n = this.getTipElement()
                  , o = e.Event(this.constructor.Event.HIDE)
                  , r = function() {
                    i._hoverState !== u.IN && n.parentNode && n.parentNode.removeChild(n),
                    i.element.removeAttribute("aria-describedby"),
                    e(i.element).trigger(i.constructor.Event.HIDDEN),
                    i.cleanupTether(),
                    t && t()
                };
                e(this.element).trigger(o),
                o.isDefaultPrevented() || (e(n).removeClass(p.IN),
                Util.supportsTransitionEnd() && e(this.tip).hasClass(p.FADE) ? e(n).one(Util.TRANSITION_END, r).emulateTransitionEnd(s) : r(),
                this._hoverState = "")
            }
        }, {
            key: "isWithContent",
            value: function() {
                return Boolean(this.getTitle());
            }
        }, {
            key: "getTipElement",
            value: function() {
                return this.tip = this.tip || e(this.config.template)[0]
            }
        }, {
            key: "setContent",
            value: function() {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(h.TOOLTIP_INNER), this.getTitle()),
                t.removeClass(p.FADE).removeClass(p.IN),
                this.cleanupTether()
            }
        }, {
            key: "setElementContent",
            value: function(t, i) {
                var n = this.config.html;
                "object" == typeof i && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i)
            }
        }, {
            key: "getTitle",
            value: function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                e
            }
        }, {
            key: "cleanupTether",
            value: function() {
                this._tether && this._tether.destroy()
            }
        }, {
            key: "_getAttachment",
            value: function(e) {
                return c[e.toUpperCase()]
            }
        }, {
            key: "_setListeners",
            value: function() {
                var t = this
                  , i = this.config.trigger.split(" ");
                i.forEach(function(i) {
                    if ("click" === i)
                        e(t.element).on(t.constructor.Event.CLICK, t.config.selector, e.proxy(t.toggle, t));
                    else if (i !== m.MANUAL) {
                        var n = i === m.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                          , o = i === m.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(n, t.config.selector, e.proxy(t._enter, t)).on(o, t.config.selector, e.proxy(t._leave, t))
                    }
                }),
                this.config.selector ? this.config = e.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
        }, {
            key: "_fixTitle",
            value: function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
        }, {
            key: "_enter",
            value: function(t, i) {
                var n = this.constructor.DATA_KEY;
                return i = i || e(t.currentTarget).data(n),
                i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                e(t.currentTarget).data(n, i)),
                t && (i._activeTrigger["focusin" === t.type ? m.FOCUS : m.HOVER] = !0),
                e(i.getTipElement()).hasClass(p.IN) || i._hoverState === u.IN ? void (i._hoverState = u.IN) : (clearTimeout(i._timeout),
                i._hoverState = u.IN,
                i.config.delay && i.config.delay.show ? void (i._timeout = setTimeout(function() {
                    i._hoverState === u.IN && i.show()
                }, i.config.delay.show)) : void i.show())
            }
        }, {
            key: "_leave",
            value: function(t, i) {
                var n = this.constructor.DATA_KEY;
                if (i = i || e(t.currentTarget).data(n),
                i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                e(t.currentTarget).data(n, i)),
                t && (i._activeTrigger["focusout" === t.type ? m.FOCUS : m.HOVER] = !1),
                !i._isWithActiveTrigger())
                    return clearTimeout(i._timeout),
                    i._hoverState = u.OUT,
                    i.config.delay && i.config.delay.hide ? void (i._timeout = setTimeout(function() {
                        i._hoverState === u.OUT && i.hide()
                    }, i.config.delay.hide)) : void i.hide()
            }
        }, {
            key: "_isWithActiveTrigger",
            value: function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e])
                        return !0;
                return !1
            }
        }, {
            key: "_getConfig",
            value: function(i) {
                return i = e.extend({}, this.constructor.Default, e(this.element).data(), i),
                i.delay && "number" == typeof i.delay && (i.delay = {
                    show: i.delay,
                    hide: i.delay
                }),
                Util.typeCheckConfig(t, i, this.constructor.DefaultType),
                i
            }
        }, {
            key: "_getDelegateConfig",
            value: function() {
                var e = {};
                if (this.config)
                    for (var t in this.config)
                        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }
        }], [{
            key: "_jQueryInterface",
            value: function(t) {
                return this.each(function() {
                    var i = e(this).data(n)
                      , o = "object" == typeof t ? t : null;
                    if ((i || !/destroy|hide/.test(t)) && (i || (i = new r(this,o),
                    e(this).data(n, i)),
                    "string" == typeof t)) {
                        if (void 0 === i[t])
                            throw new Error('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }
        }, {
            key: "VERSION",
            get: function() {
                return i
            }
        }, {
            key: "Default",
            get: function() {
                return l
            }
        }, {
            key: "NAME",
            get: function() {
                return t
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return n
            }
        }, {
            key: "Event",
            get: function() {
                return f
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return o
            }
        }, {
            key: "DefaultType",
            get: function() {
                return d
            }
        }]),
        r
    }();
    return e.fn[t] = v._jQueryInterface,
    e.fn[t].Constructor = v,
    e.fn[t].noConflict = function() {
        return e.fn[t] = r,
        v._jQueryInterface
    }
    ,
    v
}(jQuery);
!function(e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.noUiSlider = e()
}(function() {
    "use strict";
    function e(e) {
        return e.filter(function(e) {
            return !this[e] && (this[e] = !0)
        }, {})
    }
    function t(e, t) {
        return Math.round(e / t) * t
    }
    function i(e) {
        var t = e.getBoundingClientRect()
          , i = e.ownerDocument
          , n = i.documentElement
          , o = u();
        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0),
        {
            top: t.top + o.y - n.clientTop,
            left: t.left + o.x - n.clientLeft
        }
    }
    function n(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e)
    }
    function o(e, t, i) {
        l(e, t),
        setTimeout(function() {
            d(e, t)
        }, i)
    }
    function r(e) {
        return Math.max(Math.min(e, 100), 0)
    }
    function s(e) {
        return Array.isArray(e) ? e : [e]
    }
    function a(e) {
        var t = e.split(".");
        return t.length > 1 ? t[1].length : 0
    }
    function l(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    }
    function d(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
    }
    function c(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    }
    function u() {
        var e = void 0 !== window.pageXOffset
          , t = "CSS1Compat" === (document.compatMode || "")
          , i = e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft
          , n = e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop;
        return {
            x: i,
            y: n
        }
    }
    function f() {
        return window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        }
    }
    function p(e, t) {
        return 100 / (t - e)
    }
    function h(e, t) {
        return 100 * t / (e[1] - e[0])
    }
    function g(e, t) {
        return h(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0])
    }
    function m(e, t) {
        return t * (e[1] - e[0]) / 100 + e[0]
    }
    function v(e, t) {
        for (var i = 1; e >= t[i]; )
            i += 1;
        return i
    }
    function y(e, t, i) {
        if (i >= e.slice(-1)[0])
            return 100;
        var n, o, r, s, a = v(i, e);
        return n = e[a - 1],
        o = e[a],
        r = t[a - 1],
        s = t[a],
        r + g([n, o], i) / p(r, s)
    }
    function b(e, t, i) {
        if (i >= 100)
            return e.slice(-1)[0];
        var n, o, r, s, a = v(i, t);
        return n = e[a - 1],
        o = e[a],
        r = t[a - 1],
        s = t[a],
        m([n, o], (i - r) * p(r, s))
    }
    function w(e, i, n, o) {
        if (100 === o)
            return o;
        var r, s, a = v(o, e);
        return n ? (r = e[a - 1],
        s = e[a],
        o - r > (s - r) / 2 ? s : r) : i[a - 1] ? e[a - 1] + t(o - e[a - 1], i[a - 1]) : o
    }
    function T(e, t, i) {
        var o;
        if ("number" == typeof t && (t = [t]),
        "[object Array]" !== Object.prototype.toString.call(t))
            throw new Error("noUiSlider: 'range' contains invalid value.");
        if (o = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e),
        !n(o) || !n(t[0]))
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        i.xPct.push(o),
        i.xVal.push(t[0]),
        o ? i.xSteps.push(!isNaN(t[1]) && t[1]) : isNaN(t[1]) || (i.xSteps[0] = t[1])
    }
    function S(e, t, i) {
        return !t || void (i.xSteps[e] = h([i.xVal[e], i.xVal[e + 1]], t) / p(i.xPct[e], i.xPct[e + 1]))
    }
    function C(e, t, i, n) {
        this.xPct = [],
        this.xVal = [],
        this.xSteps = [n || !1],
        this.xNumSteps = [!1],
        this.snap = t,
        this.direction = i;
        var o, r = [];
        for (o in e)
            e.hasOwnProperty(o) && r.push([e[o], o]);
        for (r.length && "object" == typeof r[0][0] ? r.sort(function(e, t) {
            return e[0][0] - t[0][0]
        }) : r.sort(function(e, t) {
            return e[0] - t[0]
        }),
        o = 0; o < r.length; o++)
            T(r[o][1], r[o][0], this);
        for (this.xNumSteps = this.xSteps.slice(0),
        o = 0; o < this.xNumSteps.length; o++)
            S(o, this.xNumSteps[o], this)
    }
    function k(e, t) {
        if (!n(t))
            throw new Error("noUiSlider: 'step' is not numeric.");
        e.singleStep = t
    }
    function x(e, t) {
        if ("object" != typeof t || Array.isArray(t))
            throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === t.min || void 0 === t.max)
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        if (t.min === t.max)
            throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        e.spectrum = new C(t,e.snap,e.dir,e.singleStep)
    }
    function E(e, t) {
        if (t = s(t),
        !Array.isArray(t) || !t.length || t.length > 2)
            throw new Error("noUiSlider: 'start' option is incorrect.");
        e.handles = t.length,
        e.start = t
    }
    function A(e, t) {
        if (e.snap = t,
        "boolean" != typeof t)
            throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }
    function I(e, t) {
        if (e.animate = t,
        "boolean" != typeof t)
            throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }
    function $(e, t) {
        if (e.animationDuration = t,
        "number" != typeof t)
            throw new Error("noUiSlider: 'animationDuration' option must be a number.")
    }
    function D(e, t) {
        if ("lower" === t && 1 === e.handles)
            e.connect = 1;
        else if ("upper" === t && 1 === e.handles)
            e.connect = 2;
        else if (t === !0 && 2 === e.handles)
            e.connect = 3;
        else {
            if (t !== !1)
                throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            e.connect = 0
        }
    }
    function N(e, t) {
        switch (t) {
        case "horizontal":
            e.ort = 0;
            break;
        case "vertical":
            e.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }
    function O(e, t) {
        if (!n(t))
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (0 !== t && (e.margin = e.spectrum.getMargin(t),
        !e.margin))
            throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }
    function _(e, t) {
        if (!n(t))
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (e.limit = e.spectrum.getMargin(t),
        !e.limit)
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }
    function F(e, t) {
        switch (t) {
        case "ltr":
            e.dir = 0;
            break;
        case "rtl":
            e.dir = 1,
            e.connect = [0, 2, 1, 3][e.connect];
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }
    function P(e, t) {
        if ("string" != typeof t)
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var i = t.indexOf("tap") >= 0
          , n = t.indexOf("drag") >= 0
          , o = t.indexOf("fixed") >= 0
          , r = t.indexOf("snap") >= 0
          , s = t.indexOf("hover") >= 0;
        if (n && !e.connect)
            throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
        e.events = {
            tap: i || r,
            drag: n,
            fixed: o,
            snap: r,
            hover: s
        }
    }
    function L(e, t) {
        var i;
        if (t !== !1)
            if (t === !0)
                for (e.tooltips = [],
                i = 0; i < e.handles; i++)
                    e.tooltips.push(!0);
            else {
                if (e.tooltips = s(t),
                e.tooltips.length !== e.handles)
                    throw new Error("noUiSlider: must pass a formatter for all handles.");
                e.tooltips.forEach(function(e) {
                    if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to))
                        throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }
    function M(e, t) {
        if (e.format = t,
        "function" == typeof t.to && "function" == typeof t.from)
            return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }
    function H(e, t) {
        if (void 0 !== t && "string" != typeof t && t !== !1)
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        e.cssPrefix = t
    }
    function U(e, t) {
        if (void 0 !== t && "object" != typeof t)
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        if ("string" == typeof e.cssPrefix) {
            e.cssClasses = {};
            for (var i in t)
                t.hasOwnProperty(i) && (e.cssClasses[i] = e.cssPrefix + t[i])
        } else
            e.cssClasses = t
    }
    function j(e) {
        var t, i = {
            margin: 0,
            limit: 0,
            animate: !0,
            animationDuration: 300,
            format: z
        };
        t = {
            step: {
                r: !1,
                t: k
            },
            start: {
                r: !0,
                t: E
            },
            connect: {
                r: !0,
                t: D
            },
            direction: {
                r: !0,
                t: F
            },
            snap: {
                r: !1,
                t: A
            },
            animate: {
                r: !1,
                t: I
            },
            animationDuration: {
                r: !1,
                t: $
            },
            range: {
                r: !0,
                t: x
            },
            orientation: {
                r: !1,
                t: N
            },
            margin: {
                r: !1,
                t: O
            },
            limit: {
                r: !1,
                t: _
            },
            behaviour: {
                r: !0,
                t: P
            },
            format: {
                r: !1,
                t: M
            },
            tooltips: {
                r: !1,
                t: L
            },
            cssPrefix: {
                r: !1,
                t: H
            },
            cssClasses: {
                r: !1,
                t: U
            }
        };
        var n = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                stacking: "stacking",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };
        return Object.keys(t).forEach(function(o) {
            if (void 0 === e[o] && void 0 === n[o]) {
                if (t[o].r)
                    throw new Error("noUiSlider: '" + o + "' is required.");
                return !0
            }
            t[o].t(i, void 0 === e[o] ? n[o] : e[o])
        }),
        i.pips = e.pips,
        i.style = i.ort ? "top" : "left",
        i
    }
    function R(t, n, p) {
        function h(e, t, i) {
            var n = e + t[0]
              , o = e + t[1];
            return i ? (n < 0 && (o += Math.abs(n)),
            o > 100 && (n -= o - 100),
            [r(n), r(o)]) : [n, o]
        }
        function g(e, t) {
            e.preventDefault();
            var i, n, o = 0 === e.type.indexOf("touch"), r = 0 === e.type.indexOf("mouse"), s = 0 === e.type.indexOf("pointer"), a = e;
            return 0 === e.type.indexOf("MSPointer") && (s = !0),
            o && (i = e.changedTouches[0].pageX,
            n = e.changedTouches[0].pageY),
            t = t || u(),
            (r || s) && (i = e.clientX + t.x,
            n = e.clientY + t.y),
            a.pageOffset = t,
            a.points = [i, n],
            a.cursor = r || s,
            a
        }
        function m(e, t) {
            var i = document.createElement("div")
              , o = document.createElement("div")
              , r = [n.cssClasses.handleLower, n.cssClasses.handleUpper];
            return e && r.reverse(),
            l(o, n.cssClasses.handle),
            l(o, r[t]),
            l(i, n.cssClasses.origin),
            i.appendChild(o),
            i
        }
        function v(e, t, i) {
            switch (e) {
            case 1:
                l(t, n.cssClasses.connect),
                l(i[0], n.cssClasses.background);
                break;
            case 3:
                l(i[1], n.cssClasses.background);
            case 2:
                l(i[0], n.cssClasses.connect);
            case 0:
                l(t, n.cssClasses.background)
            }
        }
        function y(e, t, i) {
            var n, o = [];
            for (n = 0; n < e; n += 1)
                o.push(i.appendChild(m(t, n)));
            return o
        }
        function b(e, t, i) {
            l(i, n.cssClasses.target),
            0 === e ? l(i, n.cssClasses.ltr) : l(i, n.cssClasses.rtl),
            0 === t ? l(i, n.cssClasses.horizontal) : l(i, n.cssClasses.vertical);
            var o = document.createElement("div");
            return l(o, n.cssClasses.base),
            i.appendChild(o),
            o
        }
        function w(e, t) {
            if (!n.tooltips[t])
                return !1;
            var i = document.createElement("div");
            return i.className = n.cssClasses.tooltip,
            e.firstChild.appendChild(i)
        }
        function T() {
            n.dir && n.tooltips.reverse();
            var e = Y.map(w);
            n.dir && (e.reverse(),
            n.tooltips.reverse()),
            W("update", function(t, i, o) {
                e[i] && (e[i].innerHTML = n.tooltips[i] === !0 ? t[i] : n.tooltips[i].to(o[i]))
            })
        }
        function S(e, t, i) {
            if ("range" === e || "steps" === e)
                return J.xVal;
            if ("count" === e) {
                var n, o = 100 / (t - 1), r = 0;
                for (t = []; (n = r++ * o) <= 100; )
                    t.push(n);
                e = "positions"
            }
            return "positions" === e ? t.map(function(e) {
                return J.fromStepping(i ? J.getStep(e) : e)
            }) : "values" === e ? i ? t.map(function(e) {
                return J.fromStepping(J.getStep(J.toStepping(e)))
            }) : t : void 0
        }
        function C(t, i, n) {
            function o(e, t) {
                return (e + t).toFixed(7) / 1
            }
            var r = J.direction
              , s = {}
              , a = J.xVal[0]
              , l = J.xVal[J.xVal.length - 1]
              , d = !1
              , c = !1
              , u = 0;
            return J.direction = 0,
            n = e(n.slice().sort(function(e, t) {
                return e - t
            })),
            n[0] !== a && (n.unshift(a),
            d = !0),
            n[n.length - 1] !== l && (n.push(l),
            c = !0),
            n.forEach(function(e, r) {
                var a, l, f, p, h, g, m, v, y, b, w = e, T = n[r + 1];
                if ("steps" === i && (a = J.xNumSteps[r]),
                a || (a = T - w),
                w !== !1 && void 0 !== T)
                    for (l = w; l <= T; l = o(l, a)) {
                        for (p = J.toStepping(l),
                        h = p - u,
                        v = h / t,
                        y = Math.round(v),
                        b = h / y,
                        f = 1; f <= y; f += 1)
                            g = u + f * b,
                            s[g.toFixed(5)] = ["x", 0];
                        m = n.indexOf(l) > -1 ? 1 : "steps" === i ? 2 : 0,
                        !r && d && (m = 0),
                        l === T && c || (s[p.toFixed(5)] = [l, m]),
                        u = p
                    }
            }),
            J.direction = r,
            s
        }
        function k(e, t, i) {
            function o(e, t) {
                var i = t === n.cssClasses.value
                  , o = i ? f : p
                  , r = i ? c : u;
                return t + " " + o[n.ort] + " " + r[e]
            }
            function r(e, t, i) {
                return 'class="' + o(i[1], t) + '" style="' + n.style + ": " + e + '%"'
            }
            function s(e, o) {
                J.direction && (e = 100 - e),
                o[1] = o[1] && t ? t(o[0], o[1]) : o[1],
                d += "<div " + r(e, n.cssClasses.marker, o) + "></div>",
                o[1] && (d += "<div " + r(e, n.cssClasses.value, o) + ">" + i.to(o[0]) + "</div>")
            }
            var a = document.createElement("div")
              , d = ""
              , c = [n.cssClasses.valueNormal, n.cssClasses.valueLarge, n.cssClasses.valueSub]
              , u = [n.cssClasses.markerNormal, n.cssClasses.markerLarge, n.cssClasses.markerSub]
              , f = [n.cssClasses.valueHorizontal, n.cssClasses.valueVertical]
              , p = [n.cssClasses.markerHorizontal, n.cssClasses.markerVertical];
            return l(a, n.cssClasses.pips),
            l(a, 0 === n.ort ? n.cssClasses.pipsHorizontal : n.cssClasses.pipsVertical),
            Object.keys(e).forEach(function(t) {
                s(t, e[t])
            }),
            a.innerHTML = d,
            a
        }
        function x(e) {
            var t = e.mode
              , i = e.density || 1
              , n = e.filter || !1
              , o = e.values || !1
              , r = e.stepped || !1
              , s = S(t, o, r)
              , a = C(i, t, s)
              , l = e.format || {
                to: Math.round
            };
            return G.appendChild(k(a, n, l))
        }
        function E() {
            var e = V.getBoundingClientRect()
              , t = "offset" + ["Width", "Height"][n.ort];
            return 0 === n.ort ? e.width || V[t] : e.height || V[t]
        }
        function A(e, t, i) {
            var o;
            for (o = 0; o < n.handles; o++)
                if (Q[o] === -1)
                    return;
            void 0 !== t && 1 !== n.handles && (t = Math.abs(t - n.dir)),
            Object.keys(te).forEach(function(n) {
                var o = n.split(".")[0];
                e === o && te[n].forEach(function(e) {
                    e.call(X, s(R()), t, s(I(Array.prototype.slice.call(ee))), i || !1, Q)
                })
            })
        }
        function I(e) {
            return 1 === e.length ? e[0] : n.dir ? e.reverse() : e
        }
        function $(e, t, i, o) {
            var r = function(t) {
                return !G.hasAttribute("disabled") && (!c(G, n.cssClasses.tap) && (t = g(t, o.pageOffset),
                !(e === K.start && void 0 !== t.buttons && t.buttons > 1) && ((!o.hover || !t.buttons) && (t.calcPoint = t.points[n.ort],
                void i(t, o)))))
            }
              , s = [];
            return e.split(" ").forEach(function(e) {
                t.addEventListener(e, r, !1),
                s.push([e, r])
            }),
            s
        }
        function D(e, t) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === e.buttons && 0 !== t.buttonsProperty)
                return N(e, t);
            var i, n, o = t.handles || Y, r = !1, s = 100 * (e.calcPoint - t.start) / t.baseSize, a = o[0] === Y[0] ? 0 : 1;
            if (i = h(s, t.positions, o.length > 1),
            r = M(o[0], i[a], 1 === o.length),
            o.length > 1) {
                if (r = M(o[1], i[a ? 0 : 1], !1) || r)
                    for (n = 0; n < t.handles.length; n++)
                        A("slide", n)
            } else
                r && A("slide", a)
        }
        function N(e, t) {
            var i = V.querySelector("." + n.cssClasses.active)
              , o = t.handles[0] === Y[0] ? 0 : 1;
            null !== i && d(i, n.cssClasses.active),
            e.cursor && (document.body.style.cursor = "",
            document.body.removeEventListener("selectstart", document.body.noUiListener));
            var r = document.documentElement;
            r.noUiListeners.forEach(function(e) {
                r.removeEventListener(e[0], e[1])
            }),
            d(G, n.cssClasses.drag),
            A("set", o),
            A("change", o),
            void 0 !== t.handleNumber && A("end", t.handleNumber)
        }
        function O(e, t) {
            "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && N(e, t)
        }
        function _(e, t) {
            var i = document.documentElement;
            if (1 === t.handles.length) {
                if (t.handles[0].hasAttribute("disabled"))
                    return !1;
                l(t.handles[0].children[0], n.cssClasses.active)
            }
            e.preventDefault(),
            e.stopPropagation();
            var o = $(K.move, i, D, {
                start: e.calcPoint,
                baseSize: E(),
                pageOffset: e.pageOffset,
                handles: t.handles,
                handleNumber: t.handleNumber,
                buttonsProperty: e.buttons,
                positions: [Q[0], Q[Y.length - 1]]
            })
              , r = $(K.end, i, N, {
                handles: t.handles,
                handleNumber: t.handleNumber
            })
              , s = $("mouseout", i, O, {
                handles: t.handles,
                handleNumber: t.handleNumber
            });
            if (i.noUiListeners = o.concat(r, s),
            e.cursor) {
                document.body.style.cursor = getComputedStyle(e.target).cursor,
                Y.length > 1 && l(G, n.cssClasses.drag);
                var a = function() {
                    return !1
                };
                document.body.noUiListener = a,
                document.body.addEventListener("selectstart", a, !1)
            }
            void 0 !== t.handleNumber && A("start", t.handleNumber)
        }
        function F(e) {
            var t, r, s = e.calcPoint, a = 0;
            return e.stopPropagation(),
            Y.forEach(function(e) {
                a += i(e)[n.style]
            }),
            t = s < a / 2 || 1 === Y.length ? 0 : 1,
            Y[t].hasAttribute("disabled") && (t = t ? 0 : 1),
            s -= i(V)[n.style],
            r = 100 * s / E(),
            n.events.snap || o(G, n.cssClasses.tap, n.animationDuration),
            !Y[t].hasAttribute("disabled") && (M(Y[t], r),
            A("slide", t, !0),
            A("set", t, !0),
            A("change", t, !0),
            void (n.events.snap && _(e, {
                handles: [Y[t]]
            })))
        }
        function P(e) {
            var t = e.calcPoint - i(V)[n.style]
              , o = J.getStep(100 * t / E())
              , r = J.fromStepping(o);
            Object.keys(te).forEach(function(e) {
                "hover" === e.split(".")[0] && te[e].forEach(function(e) {
                    e.call(X, r)
                })
            })
        }
        function L(e) {
            if (e.fixed || Y.forEach(function(e, t) {
                $(K.start, e.children[0], _, {
                    handles: [e],
                    handleNumber: t
                })
            }),
            e.tap && $(K.start, V, F, {
                handles: Y
            }),
            e.hover && $(K.move, V, P, {
                hover: !0
            }),
            e.drag) {
                var t = [V.querySelector("." + n.cssClasses.connect)];
                l(t[0], n.cssClasses.draggable),
                e.fixed && t.push(Y[t[0] === Y[0] ? 1 : 0].children[0]),
                t.forEach(function(e) {
                    $(K.start, e, _, {
                        handles: Y
                    })
                })
            }
        }
        function M(e, t, i) {
            var o = e !== Y[0] ? 1 : 0
              , s = Q[0] + n.margin
              , a = Q[1] - n.margin
              , c = Q[0] + n.limit
              , u = Q[1] - n.limit;
            return Y.length > 1 && (t = o ? Math.max(t, s) : Math.min(t, a)),
            i !== !1 && n.limit && Y.length > 1 && (t = o ? Math.min(t, c) : Math.max(t, u)),
            t = J.getStep(t),
            t = r(t),
            t !== Q[o] && (window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                e.style[n.style] = t + "%"
            }) : e.style[n.style] = t + "%",
            e.previousSibling || (d(e, n.cssClasses.stacking),
            t > 50 && l(e, n.cssClasses.stacking)),
            Q[o] = t,
            ee[o] = J.fromStepping(t),
            A("update", o),
            !0)
        }
        function H(e, t) {
            var i, o, r;
            for (n.limit && (e += 1),
            i = 0; i < e; i += 1)
                o = i % 2,
                r = t[o],
                null !== r && r !== !1 && ("number" == typeof r && (r = String(r)),
                r = n.format.from(r),
                (r === !1 || isNaN(r) || M(Y[o], J.toStepping(r), i === 3 - n.dir) === !1) && A("update", o))
        }
        function U(e, t) {
            var i, r, a = s(e);
            for (t = void 0 === t || !!t,
            n.dir && n.handles > 1 && a.reverse(),
            n.animate && Q[0] !== -1 && o(G, n.cssClasses.tap, n.animationDuration),
            i = Y.length > 1 ? 3 : 1,
            1 === a.length && (i = 1),
            H(i, a),
            r = 0; r < Y.length; r++)
                null !== a[r] && t && A("set", r)
        }
        function R() {
            var e, t = [];
            for (e = 0; e < n.handles; e += 1)
                t[e] = n.format.to(ee[e]);
            return I(t)
        }
        function q() {
            for (var e in n.cssClasses)
                n.cssClasses.hasOwnProperty(e) && d(G, n.cssClasses[e]);
            for (; G.firstChild; )
                G.removeChild(G.firstChild);
            delete G.noUiSlider
        }
        function z() {
            var e = Q.map(function(e, t) {
                var i = J.getApplicableStep(e)
                  , n = a(String(i[2]))
                  , o = ee[t]
                  , r = 100 === e ? null : i[2]
                  , s = Number((o - i[2]).toFixed(n))
                  , l = 0 === e ? null : s >= i[1] ? i[2] : i[0] || !1;
                return [l, r]
            });
            return I(e)
        }
        function W(e, t) {
            te[e] = te[e] || [],
            te[e].push(t),
            "update" === e.split(".")[0] && Y.forEach(function(e, t) {
                A("update", t)
            })
        }
        function B(e) {
            var t = e && e.split(".")[0]
              , i = t && e.substring(t.length);
            Object.keys(te).forEach(function(e) {
                var n = e.split(".")[0]
                  , o = e.substring(n.length);
                t && t !== n || i && i !== o || delete te[e]
            })
        }
        function Z(e, t) {
            var i = R()
              , o = j({
                start: [0, 0],
                margin: e.margin,
                limit: e.limit,
                step: void 0 === e.step ? n.singleStep : e.step,
                range: e.range,
                animate: e.animate,
                snap: void 0 === e.snap ? n.snap : e.snap
            });
            ["margin", "limit", "range", "animate"].forEach(function(t) {
                void 0 !== e[t] && (n[t] = e[t])
            }),
            o.spectrum.direction = J.direction,
            J = o.spectrum,
            Q = [-1, -1],
            U(e.start || i, t)
        }
        var V, Y, X, K = f(), G = t, Q = [-1, -1], J = n.spectrum, ee = [], te = {};
        if (G.noUiSlider)
            throw new Error("Slider was already initialized.");
        return V = b(n.dir, n.ort, G),
        Y = y(n.handles, n.dir, V),
        v(n.connect, G, Y),
        n.pips && x(n.pips),
        n.tooltips && T(),
        X = {
            destroy: q,
            steps: z,
            on: W,
            off: B,
            get: R,
            set: U,
            updateOptions: Z,
            options: p,
            target: G,
            pips: x
        },
        L(n.events),
        X
    }
    function q(e, t) {
        if (!e.nodeName)
            throw new Error("noUiSlider.create requires a single element.");
        var i = j(t, e)
          , n = R(e, i, t);
        return n.set(i.start),
        e.noUiSlider = n,
        n
    }
    C.prototype.getMargin = function(e) {
        return 2 === this.xPct.length && h(this.xVal, e)
    }
    ,
    C.prototype.toStepping = function(e) {
        return e = y(this.xVal, this.xPct, e),
        this.direction && (e = 100 - e),
        e
    }
    ,
    C.prototype.fromStepping = function(e) {
        return this.direction && (e = 100 - e),
        b(this.xVal, this.xPct, e)
    }
    ,
    C.prototype.getStep = function(e) {
        return this.direction && (e = 100 - e),
        e = w(this.xPct, this.xSteps, this.snap, e),
        this.direction && (e = 100 - e),
        e
    }
    ,
    C.prototype.getApplicableStep = function(e) {
        var t = v(e, this.xPct)
          , i = 100 === e ? 2 : 1;
        return [this.xNumSteps[t - 2], this.xVal[t - i], this.xNumSteps[t - i]]
    }
    ,
    C.prototype.convert = function(e) {
        return this.getStep(this.toStepping(e))
    }
    ;
    var z = {
        to: function(e) {
            return void 0 !== e && e.toFixed(2)
        },
        from: Number
    };
    return {
        create: q
    }
}),
function(e) {
    if ("function" == typeof define && define.amd)
        define(e);
    else if ("object" == typeof exports)
        module.exports = e();
    else {
        var t = window.Cookies
          , i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = t,
            i
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i)
                t[n] = i[n]
        }
        return t
    }
    function t(i) {
        function n(t, o, r) {
            var s;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (r = e({
                        path: "/"
                    }, n.defaults, r),
                    "number" == typeof r.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires),
                        r.expires = a
                    }
                    try {
                        s = JSON.stringify(o),
                        /^[\{\[]/.test(s) && (o = s)
                    } catch (l) {}
                    return o = i.write ? i.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    t = encodeURIComponent(String(t)),
                    t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                    t = t.replace(/[\(\)]/g, escape),
                    document.cookie = [t, "=", o, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure" : ""].join("")
                }
                t || (s = {});
                for (var d = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, u = 0; u < d.length; u++) {
                    var f = d[u].split("=")
                      , p = f.slice(1).join("=");
                    '"' === p.charAt(0) && (p = p.slice(1, -1));
                    try {
                        var h = f[0].replace(c, decodeURIComponent);
                        if (p = i.read ? i.read(p, h) : i(p, h) || p.replace(c, decodeURIComponent),
                        this.json)
                            try {
                                p = JSON.parse(p)
                            } catch (l) {}
                        if (t === h) {
                            s = p;
                            break
                        }
                        t || (s[h] = p)
                    } catch (l) {}
                }
                return s
            }
        }
        return n.set = n,
        n.get = function(e) {
            return n(e)
        }
        ,
        n.getJSON = function() {
            return n.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        n.defaults = {},
        n.remove = function(t, i) {
            n(t, "", e(i, {
                expires: -1
            }))
        }
        ,
        n.withConverter = t,
        n
    }
    return t(function() {})
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function t() {
        var t, i, n = {
            height: d.innerHeight,
            width: d.innerWidth
        };
        return n.height || (t = l.compatMode,
        !t && e.support.boxModel || (i = "CSS1Compat" === t ? c : l.body,
        n = {
            height: i.clientHeight,
            width: i.clientWidth
        })),
        n
    }
    function i() {
        return {
            top: d.pageYOffset || c.scrollTop || l.body.scrollTop,
            left: d.pageXOffset || c.scrollLeft || l.body.scrollLeft
        }
    }
    function n() {
        if (a.length) {
            var n = 0
              , s = e.map(a, function(e) {
                var t = e.data.selector
                  , i = e.$element;
                return t ? i.find(t) : i
            });
            for (o = o || t(),
            r = r || i(); n < a.length; n++)
                if (e.contains(c, s[n][0])) {
                    var l = e(s[n])
                      , d = {
                        height: l[0].offsetHeight,
                        width: l[0].offsetWidth
                    }
                      , u = l.offset()
                      , f = l.data("inview");
                    if (!r || !o)
                        return;
                    u.top + d.height > r.top && u.top < r.top + o.height && u.left + d.width > r.left && u.left < r.left + o.width ? f || l.data("inview", !0).trigger("inview", [!0]) : f && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var o, r, s, a = [], l = document, d = window, c = l.documentElement;
    e.event.special.inview = {
        add: function(t) {
            a.push({
                data: t,
                $element: e(this),
                element: this
            }),
            !s && a.length && (s = setInterval(n, 250))
        },
        remove: function(e) {
            for (var t = 0; t < a.length; t++) {
                var i = a[t];
                if (i.element === this && i.data.guid === e.guid) {
                    a.splice(t, 1);
                    break
                }
            }
            a.length || (clearInterval(s),
            s = null)
        }
    },
    e(d).on("scroll resize scrollstop", function() {
        o = r = null
    }),
    !c.addEventListener && c.attachEvent && c.attachEvent("onfocusin", function() {
        r = null
    })
}),
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            e.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = e(t),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            o = e(t).data("slick") || {},
            r.options = e.extend({}, r.defaults, n, o),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden",
            r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden",
            r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = e.proxy(r.autoPlay, r),
            r.autoPlayClear = e.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
            r.changeSlide = e.proxy(r.changeSlide, r),
            r.clickHandler = e.proxy(r.clickHandler, r),
            r.selectHandler = e.proxy(r.selectHandler, r),
            r.setPosition = e.proxy(r.setPosition, r),
            r.swipeHandler = e.proxy(r.swipeHandler, r),
            r.dragHandler = e.proxy(r.dragHandler, r),
            r.keyHandler = e.proxy(r.keyHandler, r),
            r.instanceUid = i++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
        var i = 0;
        return t
    }(),
    t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
        var o = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (0 > i || i >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : n === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    t.prototype.animateSlide = function(t, i) {
        var n = {}
          , o = this;
        o.animateHeight(),
        o.options.rtl === !0 && o.options.vertical === !1 && (t = -t),
        o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
        e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                o.options.vertical === !1 ? (n[o.animType] = "translate(" + e + "px, 0px)",
                o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)",
                o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(),
        t = Math.ceil(t),
        o.options.vertical === !1 ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)",
        o.$slideTrack.css(n),
        i && setTimeout(function() {
            o.disableTransition(),
            i.call()
        }, o.options.speed))
    }
    ,
    t.prototype.getNavTarget = function() {
        var t = this
          , i = t.options.asNavFor;
        return i && null !== i && (i = e(i).not(t.$slider)),
        i
    }
    ,
    t.prototype.asNavFor = function(t) {
        var i = this
          , n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }
    ,
    t.prototype.applyTransition = function(e) {
        var t = this
          , i = {};
        t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }
    ,
    t.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 === 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    t.prototype.buildDots = function() {
        var t, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"),
            i = e("<ul />").addClass(n.options.dotsClass),
            t = 0; t <= n.getDotCount(); t += 1)
                i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.options.draggable === !0 && t.$list.addClass("draggable")
    }
    ,
    t.prototype.buildRows = function() {
        var e, t, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = e * s + (t * a.options.slidesPerRow + i);
                        r.get(c) && d.appendChild(r.get(c))
                    }
                    l.appendChild(d)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    t.prototype.checkResponsive = function(t, i) {
        var n, o, r, s = this, a = !1, l = s.$slider.width(), d = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (n in s.breakpoints)
                s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            t === !0 && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            t === !0 && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            t === !0 && (s.currentSlide = s.options.initialSlide),
            s.refresh(t),
            a = o),
            t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    t.prototype.changeSlide = function(t, i) {
        var n, o, r, s = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        r = s.slideCount % s.options.slidesToScroll !== 0,
        n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        t.data.message) {
        case "previous":
            o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
            break;
        case "next":
            o = 0 === n ? s.options.slidesToScroll : n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
            break;
        case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, i),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    t.prototype.checkNavigable = function(e) {
        var t, i, n = this;
        if (t = n.getNavigableIndexes(),
        i = 0,
        e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = i;
                    break
                }
                i = t[o]
            }
        return e
    }
    ,
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        t.$slider.off("focus.slick blur.slick"),
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(),
        e.removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        e(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        t || i.$slider.trigger("destroy", [i])
    }
    ,
    t.prototype.disableTransition = function(e) {
        var t = this
          , i = {};
        i[t.transitionType] = "",
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    t.prototype.fadeSlide = function(e, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(e),
            t.call()
        }, i.options.speed))
    }
    ,
    t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"),
                t.autoPlay())
            }, 0)
        })
    }
    ,
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }
    ,
    t.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , i = 0
          , n = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0)
            n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }
    ,
    t.prototype.getLeft = function(e) {
        var t, i, n, o = this, r = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        r = i * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (e + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r,
        o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
        t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
        t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        t += (o.$list.width() - n.outerWidth()) / 2)),
        t
    }
    ,
    t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }
    ,
    t.prototype.getNavigableIndexes = function() {
        var e, t = this, i = 0, n = 0, o = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
        n = -1 * t.options.slidesToScroll,
        e = 2 * t.slideCount); e > i; )
            o.push(i),
            i = n + t.options.slidesToScroll,
            n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }
    ,
    t.prototype.getSlick = function() {
        return this
    }
    ,
    t.prototype.getSlideCount = function() {
        var t, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (i = r,
            !1) : void 0
        }),
        t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        t && i.$slider.trigger("init", [i]),
        i.options.accessibility === !0 && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }
    ,
    t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }
    ,
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }
    ,
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this)
                  , i = e(this).attr("data-lazy")
                  , n = document.createElement("img");
                n.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        s.$slider.trigger("lazyLoaded", [s, t, i])
                    })
                }
                ,
                n.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    s.$slider.trigger("lazyLoadError", [s, t, i])
                }
                ,
                n.src = i
            })
        }
        var i, n, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1),
        r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
        r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
        r = Math.ceil(o + s.options.slidesToShow),
        s.options.fade === !0 && (o > 0 && o--,
        r <= s.slideCount && r++)),
        i = s.$slider.find(".slick-slide").slice(o, r),
        t(i),
        s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"),
        t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
        t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
        t(n))
    }
    ,
    t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(),
        e.setPosition()
    }
    ,
    t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    }
    ,
    t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 && t.initADA())
    }
    ,
    t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, o, r = this, s = e("img[data-lazy]", r.$slider);
        s.length ? (i = s.first(),
        n = i.attr("data-lazy"),
        o = document.createElement("img"),
        o.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"),
            r.options.adaptiveHeight === !0 && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, i, n]),
            r.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            3 > t ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, i, n]),
            r.progressiveLazyLoad())
        }
        ,
        o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    t.prototype.refresh = function(t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        i = o.currentSlide,
        o.destroy(!0),
        e.extend(o, o.initials, {
            currentSlide: i
        }),
        o.init(),
        t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    t.prototype.registerBreakpoints = function() {
        var t, i, n, o = this, r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r)
                if (n = o.breakpoints.length - 1,
                i = r[t].breakpoint,
                r.hasOwnProperty(t)) {
                    for (; n >= 0; )
                        o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1),
                        n--;
                    o.breakpoints.push(i),
                    o.breakpointSettings[i] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }
    ,
    t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var n = this;
        return "boolean" == typeof e ? (t = e,
        e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e,
        !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(),
        i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    t.prototype.setCSS = function(e) {
        var t, i, n = this, o = {};
        n.options.rtl === !0 && (e = -e),
        t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        o[n.positionProp] = e,
        n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {},
        n.cssTransitions === !1 ? (o[n.animType] = "translate(" + t + ", " + i + ")",
        n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)",
        n.$slideTrack.css(o)))
    }
    ,
    t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(n, o) {
            t = i.slideWidth * n * -1,
            i.options.rtl === !0 ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, n, o, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")),
        "single" === r)
            s.options[n] = o;
        else if ("multiple" === r)
            e.each(n, function(e, t) {
                s.options[e] = t
            });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== e.type(s.options.responsive))
                    s.options.responsive = [o[i]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0; )
                        s.options.responsive[t].breakpoint === o[i].breakpoint && s.options.responsive.splice(t, 1),
                        t--;
                    s.options.responsive.push(o[i])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    t.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }
    ,
    t.prototype.setSlideClasses = function(e) {
        var t, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(e).addClass("slick-current"),
        r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2),
        r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e,
        i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
        r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
        n = r.options.infinite === !0 ? r.options.slidesToShow + e : e,
        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }
    ,
    t.prototype.setupInfinite = function() {
        var t, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1),
        o.options.infinite === !0 && o.options.fade === !1 && (i = null,
        o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            t = o.slideCount; t > o.slideCount - n; t -= 1)
                i = t - 1,
                e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; n > t; t += 1)
                i = t,
                e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }
    ,
    t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(),
        t.interrupted = e
    }
    ,
    t.prototype.selectHandler = function(t) {
        var i = this
          , n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
          , o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0),
        i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o),
        void i.asNavFor(o)) : void i.slideHandler(o)
    }
    ,
    t.prototype.slideHandler = function(e, t, i) {
        var n, o, r, s, a, l = null, d = this;
        return t = t || !1,
        d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (t === !1 && d.asNavFor(e),
        n = e,
        l = d.getLeft(n),
        s = d.getLeft(d.currentSlide),
        d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft,
        d.options.infinite === !1 && d.options.centerMode === !1 && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void (d.options.fade === !1 && (n = d.currentSlide,
        i !== !0 ? d.animateSlide(s, function() {
            d.postSlide(n)
        }) : d.postSlide(n))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void (d.options.fade === !1 && (n = d.currentSlide,
        i !== !0 ? d.animateSlide(s, function() {
            d.postSlide(n)
        }) : d.postSlide(n))) : (d.options.autoplay && clearInterval(d.autoPlayTimer),
        o = 0 > n ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : n - d.slideCount : n,
        d.animating = !0,
        d.$slider.trigger("beforeChange", [d, d.currentSlide, o]),
        r = d.currentSlide,
        d.currentSlide = o,
        d.setSlideClasses(d.currentSlide),
        d.options.asNavFor && (a = d.getNavTarget(),
        a = a.slick("getSlick"),
        a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)),
        d.updateDots(),
        d.updateArrows(),
        d.options.fade === !0 ? (i !== !0 ? (d.fadeSlideOut(r),
        d.fadeSlide(o, function() {
            d.postSlide(o)
        })) : d.postSlide(o),
        void d.animateHeight()) : void (i !== !0 ? d.animateSlide(l, function() {
            d.postSlide(o)
        }) : d.postSlide(o))))
    }
    ,
    t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    t.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        i = Math.atan2(t, e),
        n = Math.round(180 * i / Math.PI),
        0 > n && (n = 360 - Math.abs(n)),
        45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
    }
    ,
    t.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1,
        n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend"in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    t.prototype.swipeMove = function(e) {
        var t, i, n, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX,
        s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        i = s.swipeDirection(),
        "vertical" !== i ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(),
        o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        n = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        s.options.vertical === !1 ? s.swipeLeft = t + n * o : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * o,
        s.options.verticalSwiping === !0 && (s.swipeLeft = t + n * o),
        s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }
    ,
    t.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        void (i.dragging = !0))
    }
    ,
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2),
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    e.fn.slick = function() {
        var e, i, n = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (e = 0; s > e; e++)
            if ("object" == typeof o || "undefined" == typeof o ? n[e].slick = new t(n[e],o) : i = n[e].slick[o].apply(n[e].slick, r),
            "undefined" != typeof i)
                return i;
        return n
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length)
                return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = e.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new e.validator(t,this[0]),
            e.data(this[0], "validator", i),
            i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target),
                e(this).hasClass("cancel") && (i.cancelSubmit = !0),
                void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(t) {
                function n() {
                    var n, o;
                    return !i.settings.submitHandler || (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)),
                    o = i.settings.submitHandler.call(i, i.currentForm, t),
                    i.submitButton && n.remove(),
                    void 0 !== o && o)
                }
                return i.settings.debug && t.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1,
                n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : n() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            var t, i, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (n = [],
            t = !0,
            i = e(this[0].form).validate(),
            this.each(function() {
                t = i.element(this) && t,
                t || (n = n.concat(i.errorList))
            }),
            i.errorList = n),
            t
        },
        rules: function(t, i) {
            var n, o, r, s, a, l, d = this[0];
            if (null != d && null != d.form) {
                if (t)
                    switch (n = e.data(d.form, "validator").settings,
                    o = n.rules,
                    r = e.validator.staticRules(d),
                    t) {
                    case "add":
                        e.extend(r, e.validator.normalizeRule(i)),
                        delete r.messages,
                        o[d.name] = r,
                        i.messages && (n.messages[d.name] = e.extend(n.messages[d.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {},
                        e.each(i.split(/\s/), function(t, i) {
                            l[i] = r[i],
                            delete r[i],
                            "required" === i && e(d).removeAttr("aria-required")
                        }),
                        l) : (delete o[d.name],
                        r)
                    }
                return s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(d), e.validator.attributeRules(d), e.validator.dataRules(d), e.validator.staticRules(d)), d),
                s.required && (a = s.required,
                delete s.required,
                s = e.extend({
                    required: a
                }, s),
                e(d).attr("aria-required", "true")),
                s.remote && (a = s.remote,
                delete s.remote,
                s = e.extend(s, {
                    remote: a
                })),
                s
            }
        }
    }),
    e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var i = e(t).val();
            return null !== i && !!e.trim("" + i)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }),
    e.validator = function(t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t),
        this.currentForm = i,
        this.init()
    }
    ,
    e.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = e.makeArray(arguments);
            return i.unshift(t),
            e.validator.format.apply(this, i)
        }
        : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        e.each(i, function(e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                return i
            })
        }),
        t)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(t) || e.inArray(i.keyCode, n) !== -1 || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
            },
            unhighlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
                    var i = e.data(this.form, "validator")
                      , n = "on" + t.type.replace(/^validate/, "")
                      , o = i.settings;
                    o[n] && !e(this).is(o.ignore) && o[n].call(i, this, t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                e.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)),
                    e.each(i, function(e, i) {
                        n[i] = t
                    })
                }),
                i = this.settings.rules,
                e.each(i, function(t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }),
                e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                e.extend(this.submitted, this.errorMap),
                this.invalid = e.extend({}, this.errorMap),
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var i, n, o = this.clean(t), r = this.validationTargetFor(o), s = this, a = !0;
                return void 0 === r ? delete this.invalid[o.name] : (this.prepareElement(r),
                this.currentElements = e(r),
                n = this.groups[r.name],
                n && e.each(this.groups, function(e, t) {
                    t === n && e !== r.name && (o = s.validationTargetFor(s.clean(s.findByName(e))),
                    o && o.name in s.invalid && (s.currentElements.push(o),
                    a = s.check(o) && a))
                }),
                i = this.check(r) !== !1,
                a = a && i,
                i ? this.invalid[r.name] = !1 : this.invalid[r.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                e(t).attr("aria-invalid", !i)),
                a
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    e.extend(this.errorMap, t),
                    this.errorList = e.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: i.findByName(t)[0]
                        }
                    }),
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                        this.findByName(e[t].name).removeClass(this.settings.validClass);
                else
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, i = 0;
                for (t in e)
                    e[t] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""),
                this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var n = this.name || e(this).attr("name");
                    return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]),
                    !(n in i || !t.objectLength(e(this).rules())) && (i[n] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = e([]),
                this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var i, n, o = e(t), r = t.type;
                return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : o.val() : (i = t.hasAttribute("contenteditable") ? o.text() : o.val(),
                "file" === r ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/"),
                n >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\"),
                n >= 0 ? i.substr(n + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i, n, o, r = e(t).rules(), s = e.map(r, function(e, t) {
                    return t
                }).length, a = !1, l = this.elementValue(t);
                if ("function" == typeof r.normalizer) {
                    if (l = r.normalizer.call(t, l),
                    "string" != typeof l)
                        throw new TypeError("The normalizer should return a string value.");
                    delete r.normalizer
                }
                for (n in r) {
                    o = {
                        method: n,
                        parameters: r[n]
                    };
                    try {
                        if (i = e.validator.methods[n].call(this, l, t, o.parameters),
                        "dependency-mismatch" === i && 1 === s) {
                            a = !0;
                            continue
                        }
                        if (a = !1,
                        "pending" === i)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i)
                            return this.formatAndAdd(t, o),
                            !1
                    } catch (d) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", d),
                        d instanceof TypeError && (d.message += ".  Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method."),
                        d
                    }
                }
                if (!a)
                    return this.objectLength(r) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, i) {
                return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e]
            },
            defaultMessage: function(t, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                  , o = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, i.parameters, t) : o.test(n) && (n = e.validator.format(n.replace(o, "{$1}"), i.parameters)),
                n
            },
            formatAndAdd: function(e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }),
                this.errorMap[e.name] = i,
                this.submitted[e.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++)
                    i = this.errorList[e],
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var n, o, r, s, a = this.errorsFor(t), l = this.idOrName(t), d = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                a.html(i)) : (a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""),
                n = a,
                this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t),
                a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = a.attr("id"),
                d ? d.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (d += " " + r) : d = r,
                e(t).attr("aria-describedby", d),
                o = this.groups[t.name],
                o && (s = this,
                e.each(s.groups, function(t, i) {
                    i === o && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                })))),
                !i && this.settings.success && (a.text(""),
                "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)),
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function(t) {
                var i = this.escapeCssMeta(this.idOrName(t))
                  , n = e(t).attr("aria-describedby")
                  , o = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (o = o + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")),
                this.errors().filter(o)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return e("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, i) {
                    return !!e(t, i.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                e(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                e(t).removeClass(this.settings.pendingClass),
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = "string" == typeof i && i || "remote",
                e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , n = e(t).attr("class");
            return n && e.each(n.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }),
            i
        },
        normalizeAttributeRule: function(e, t, i, n) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n),
            isNaN(n) && (n = void 0)),
            n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function(t) {
            var i, n, o = {}, r = e(t), s = t.getAttribute("type");
            for (i in e.validator.methods)
                "required" === i ? (n = t.getAttribute(i),
                "" === n && (n = !0),
                n = !!n) : n = r.attr(i),
                this.normalizeAttributeRule(o, s, i, n);
            return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength,
            o
        },
        dataRules: function(t) {
            var i, n, o = {}, r = e(t), s = t.getAttribute("type");
            for (i in e.validator.methods)
                n = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                this.normalizeAttributeRule(o, s, i, n);
            return o
        },
        staticRules: function(t) {
            var i = {}
              , n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return e.each(t, function(n, o) {
                if (o === !1)
                    return void delete t[n];
                if (o.param || o.depends) {
                    var r = !0;
                    switch (typeof o.depends) {
                    case "string":
                        r = !!e(o.depends, i.form).length;
                        break;
                    case "function":
                        r = o.depends.call(i, i)
                    }
                    r ? t[n] = void 0 === o.param || o.param : (e.data(i.form, "validator").resetElements(e(i)),
                    delete t[n])
                }
            }),
            e.each(t, function(n, o) {
                t[n] = e.isFunction(o) && "normalizer" !== n ? o(i) : o
            }),
            e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            e.each(["rangelength", "range"], function() {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                t[this] = [Number(i[0]), Number(i[1])]))
            }),
            e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), function() {
                    i[this] = !0
                }),
                t = i
            }
            return t
        },
        addMethod: function(t, i, n) {
            e.validator.methods[t] = i,
            e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t],
            i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, n) {
                if (!this.depend(n, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var o = e(i).val();
                    return o && o.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, i, n) {
                var o = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || o >= n
            },
            maxlength: function(t, i, n) {
                var o = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || o <= n
            },
            rangelength: function(t, i, n) {
                var o = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || o >= n[0] && o <= n[1]
            },
            min: function(e, t, i) {
                return this.optional(t) || e >= i
            },
            max: function(e, t, i) {
                return this.optional(t) || e <= i
            },
            range: function(e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            },
            step: function(t, i, n) {
                var o, r = e(i).attr("type"), s = "Step attribute on input type " + r + " is not supported.", a = ["text", "number", "range"], l = new RegExp("\\b" + r + "\\b"), d = r && !l.test(a.join()), c = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }, u = function(e) {
                    return Math.round(e * Math.pow(10, o))
                }, f = !0;
                if (d)
                    throw new Error(s);
                return o = c(n),
                (c(t) > o || u(t) % u(n) !== 0) && (f = !1),
                this.optional(i) || f
            },
            equalTo: function(t, i, n) {
                var o = e(n);
                return this.settings.onfocusout && o.not(".validate-equalTo-blur").length && o.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    e(i).valid()
                }),
                t === o.val()
            },
            remote: function(t, i, n, o) {
                if (this.optional(i))
                    return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var r, s, a, l = this.previousValue(i, o);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                l.originalMessage = l.originalMessage || this.settings.messages[i.name][o],
                this.settings.messages[i.name][o] = l.message,
                n = "string" == typeof n && {
                    url: n
                } || n,
                a = e.param(e.extend({
                    data: t
                }, n.data)),
                l.old === a ? l.valid : (l.old = a,
                r = this,
                this.startRequest(i),
                s = {},
                s[i.name] = t,
                e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: s,
                    context: r.currentForm,
                    success: function(e) {
                        var n, s, a, d = e === !0 || "true" === e;
                        r.settings.messages[i.name][o] = l.originalMessage,
                        d ? (a = r.formSubmitted,
                        r.resetInternals(),
                        r.toHide = r.errorsFor(i),
                        r.formSubmitted = a,
                        r.successList.push(i),
                        r.invalid[i.name] = !1,
                        r.showErrors()) : (n = {},
                        s = e || r.defaultMessage(i, {
                            method: o,
                            parameters: t
                        }),
                        n[i.name] = l.message = s,
                        r.invalid[i.name] = !0,
                        r.showErrors(n)),
                        l.valid = d,
                        r.stopRequest(i, d)
                    }
                }, n)),
                "pending")
            }
        }
    });
    var t, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, n) {
        var o = e.port;
        "abort" === e.mode && (i[o] && i[o].abort(),
        i[o] = n)
    }) : (t = e.ajax,
    e.ajax = function(n) {
        var o = ("mode"in n ? n : e.ajaxSettings).mode
          , r = ("port"in n ? n : e.ajaxSettings).port;
        return "abort" === o ? (i[r] && i[r].abort(),
        i[r] = t.apply(this, arguments),
        i[r]) : t.apply(this, arguments)
    }
    ),
    e
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    return function() {
        function t(e) {
            return e.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
        }
        e.validator.addMethod("maxWords", function(e, i, n) {
            return this.optional(i) || t(e).match(/\b\w+\b/g).length <= n
        }, e.validator.format("Please enter {0} words or less.")),
        e.validator.addMethod("minWords", function(e, i, n) {
            return this.optional(i) || t(e).match(/\b\w+\b/g).length >= n
        }, e.validator.format("Please enter at least {0} words.")),
        e.validator.addMethod("rangeWords", function(e, i, n) {
            var o = t(e)
              , r = /\b\w+\b/g;
            return this.optional(i) || o.match(r).length >= n[0] && o.match(r).length <= n[1]
        }, e.validator.format("Please enter between {0} and {1} words."))
    }(),
    e.validator.addMethod("accept", function(t, i, n) {
        var o, r, s, a = "string" == typeof n ? n.replace(/\s/g, "") : "image/*", l = this.optional(i);
        if (l)
            return l;
        if ("file" === e(i).attr("type") && (a = a.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"),
        i.files && i.files.length))
            for (s = new RegExp(".?(" + a + ")$","i"),
            o = 0; o < i.files.length; o++)
                if (r = i.files[o],
                !r.type.match(s))
                    return !1;
        return !0
    }, e.validator.format("Please enter a value with a valid mimetype.")),
    e.validator.addMethod("alphanumeric", function(e, t) {
        return this.optional(t) || /^\w+$/i.test(e)
    }, "Letters, numbers, and underscores only please"),
    e.validator.addMethod("bankaccountNL", function(e, t) {
        if (this.optional(t))
            return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e))
            return !1;
        var i, n, o, r = e.replace(/ /g, ""), s = 0, a = r.length;
        for (i = 0; i < a; i++)
            n = a - i,
            o = r.substring(i, i + 1),
            s += n * o;
        return s % 11 === 0
    }, "Please specify a valid bank account number"),
    e.validator.addMethod("bankorgiroaccountNL", function(t, i) {
        return this.optional(i) || e.validator.methods.bankaccountNL.call(this, t, i) || e.validator.methods.giroaccountNL.call(this, t, i)
    }, "Please specify a valid bank or giro account number"),
    e.validator.addMethod("bic", function(e, t) {
        return this.optional(t) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e.toUpperCase())
    }, "Please specify a valid BIC code"),
    e.validator.addMethod("cifES", function(e) {
        "use strict";
        function t(e) {
            return e % 2 === 0
        }
        var i, n, o, r, s = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi), a = e.substring(0, 1), l = e.substring(1, 8), d = e.substring(8, 9), c = 0, u = 0, f = 0;
        if (9 !== e.length || !s.test(e))
            return !1;
        for (i = 0; i < l.length; i++)
            n = parseInt(l[i], 10),
            t(i) ? (n *= 2,
            f += n < 10 ? n : n - 9) : u += n;
        return c = u + f,
        o = (10 - c.toString().substr(-1)).toString(),
        o = parseInt(o, 10) > 9 ? "0" : o,
        r = "JABCDEFGHI".substr(o, 1).toString(),
        a.match(/[ABEH]/) ? d === o : a.match(/[KPQS]/) ? d === r : d === o || d === r
    }, "Please specify a valid CIF number."),
    e.validator.addMethod("cpfBR", function(e) {
        if (e = e.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""),
        11 !== e.length)
            return !1;
        var t, i, n, o, r = 0;
        if (t = parseInt(e.substring(9, 10), 10),
        i = parseInt(e.substring(10, 11), 10),
        n = function(e, t) {
            var i = 10 * e % 11;
            return 10 !== i && 11 !== i || (i = 0),
            i === t
        }
        ,
        "" === e || "00000000000" === e || "11111111111" === e || "22222222222" === e || "33333333333" === e || "44444444444" === e || "55555555555" === e || "66666666666" === e || "77777777777" === e || "88888888888" === e || "99999999999" === e)
            return !1;
        for (o = 1; o <= 9; o++)
            r += parseInt(e.substring(o - 1, o), 10) * (11 - o);
        if (n(r, t)) {
            for (r = 0,
            o = 1; o <= 10; o++)
                r += parseInt(e.substring(o - 1, o), 10) * (12 - o);
            return n(r, i)
        }
        return !1
    }, "Please specify a valid CPF number"),
    e.validator.addMethod("creditcard", function(e, t) {
        if (this.optional(t))
            return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(e))
            return !1;
        var i, n, o = 0, r = 0, s = !1;
        if (e = e.replace(/\D/g, ""),
        e.length < 13 || e.length > 19)
            return !1;
        for (i = e.length - 1; i >= 0; i--)
            n = e.charAt(i),
            r = parseInt(n, 10),
            s && (r *= 2) > 9 && (r -= 9),
            o += r,
            s = !s;
        return o % 10 === 0
    }, "Please enter a valid credit card number."),
    e.validator.addMethod("creditcardtypes", function(e, t, i) {
        if (/[^0-9\-]+/.test(e))
            return !1;
        e = e.replace(/\D/g, "");
        var n = 0;
        return i.mastercard && (n |= 1),
        i.visa && (n |= 2),
        i.amex && (n |= 4),
        i.dinersclub && (n |= 8),
        i.enroute && (n |= 16),
        i.discover && (n |= 32),
        i.jcb && (n |= 64),
        i.unknown && (n |= 128),
        i.all && (n = 255),
        1 & n && /^(5[12345])/.test(e) ? 16 === e.length : 2 & n && /^(4)/.test(e) ? 16 === e.length : 4 & n && /^(3[47])/.test(e) ? 15 === e.length : 8 & n && /^(3(0[012345]|[68]))/.test(e) ? 14 === e.length : 16 & n && /^(2(014|149))/.test(e) ? 15 === e.length : 32 & n && /^(6011)/.test(e) ? 16 === e.length : 64 & n && /^(3)/.test(e) ? 16 === e.length : 64 & n && /^(2131|1800)/.test(e) ? 15 === e.length : !!(128 & n)
    }, "Please enter a valid credit card number."),
    e.validator.addMethod("currency", function(e, t, i) {
        var n, o = "string" == typeof i, r = o ? i : i[0], s = !!o || i[1];
        return r = r.replace(/,/g, ""),
        r = s ? r + "]" : r + "]?",
        n = "^[" + r + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",
        n = new RegExp(n),
        this.optional(t) || n.test(e)
    }, "Please specify a valid currency"),
    e.validator.addMethod("dateFA", function(e, t) {
        return this.optional(t) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(e)
    }, e.validator.messages.date),
    e.validator.addMethod("dateITA", function(e, t) {
        var i, n, o, r, s, a = !1, l = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return l.test(e) ? (i = e.split("/"),
        n = parseInt(i[0], 10),
        o = parseInt(i[1], 10),
        r = parseInt(i[2], 10),
        s = new Date(Date.UTC(r, o - 1, n, 12, 0, 0, 0)),
        a = s.getUTCFullYear() === r && s.getUTCMonth() === o - 1 && s.getUTCDate() === n) : a = !1,
        this.optional(t) || a
    }, e.validator.messages.date),
    e.validator.addMethod("dateNL", function(e, t) {
        return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)
    }, e.validator.messages.date),
    e.validator.addMethod("extension", function(e, t, i) {
        return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif",
        this.optional(t) || e.match(new RegExp("\\.(" + i + ")$","i"))
    }, e.validator.format("Please enter a value with a valid extension.")),
    e.validator.addMethod("giroaccountNL", function(e, t) {
        return this.optional(t) || /^[0-9]{1,7}$/.test(e)
    }, "Please specify a valid giro account number"),
    e.validator.addMethod("iban", function(e, t) {
        if (this.optional(t))
            return !0;
        var i, n, o, r, s, a, l, d, c, u = e.replace(/ /g, "").toUpperCase(), f = "", p = !0, h = "", g = "", m = 5;
        if (u.length < m)
            return !1;
        if (i = u.substring(0, 2),
        a = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}"
        },
        s = a[i],
        "undefined" != typeof s && (l = new RegExp("^[A-Z]{2}\\d{2}" + s + "$",""),
        !l.test(u)))
            return !1;
        for (n = u.substring(4, u.length) + u.substring(0, 4),
        d = 0; d < n.length; d++)
            o = n.charAt(d),
            "0" !== o && (p = !1),
            p || (f += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(o));
        for (c = 0; c < f.length; c++)
            r = f.charAt(c),
            g = "" + h + r,
            h = g % 97;
        return 1 === h
    }, "Please specify a valid IBAN"),
    e.validator.addMethod("integer", function(e, t) {
        return this.optional(t) || /^-?\d+$/.test(e)
    }, "A positive or negative non-decimal number please"),
    e.validator.addMethod("ipv4", function(e, t) {
        return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)
    }, "Please enter a valid IP v4 address."),
    e.validator.addMethod("ipv6", function(e, t) {
        return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)
    }, "Please enter a valid IP v6 address."),
    e.validator.addMethod("lettersonly", function(e, t) {
        return this.optional(t) || /^[a-z]+$/i.test(e)
    }, "Letters only please"),
    e.validator.addMethod("letterswithbasicpunc", function(e, t) {
        return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(e)
    }, "Letters or punctuation only please"),
    e.validator.addMethod("mobileNL", function(e, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
    }, "Please specify a valid mobile number"),
    e.validator.addMethod("mobileUK", function(e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""),
        this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"),
    e.validator.addMethod("nieES", function(e) {
        "use strict";
        var t, i = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi), n = "TRWAGMYFPDXBNJZSQVHLCKET", o = e.substr(e.length - 1).toUpperCase();
        return e = e.toString().toUpperCase(),
        !(e.length > 10 || e.length < 9 || !i.test(e)) && (e = e.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2"),
        t = 9 === e.length ? e.substr(0, 8) : e.substr(0, 9),
        n.charAt(parseInt(t, 10) % 23) === o)
    }, "Please specify a valid NIE number."),
    e.validator.addMethod("nifES", function(e) {
        "use strict";
        return e = e.toUpperCase(),
        !!e.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(e) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.substring(8, 0) % 23) === e.charAt(8) : !!/^[KLM]{1}/.test(e) && e[8] === String.fromCharCode(64))
    }, "Please specify a valid NIF number."),
    e.validator.addMethod("notEqualTo", function(t, i, n) {
        return this.optional(i) || !e.validator.methods.equalTo.call(this, t, i, n)
    }, "Please enter a different value, values must not be the same."),
    e.validator.addMethod("nowhitespace", function(e, t) {
        return this.optional(t) || /^\S+$/i.test(e)
    }, "No white space please"),
    e.validator.addMethod("pattern", function(e, t, i) {
        return !!this.optional(t) || ("string" == typeof i && (i = new RegExp("^(?:" + i + ")$")),
        i.test(e))
    }, "Invalid format."),
    e.validator.addMethod("phoneNL", function(e, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
    }, "Please specify a valid phone number."),
    e.validator.addMethod("phonesUK", function(e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""),
        this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"),
    e.validator.addMethod("phoneUK", function(e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""),
        this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"),
    e.validator.addMethod("phoneUS", function(e, t) {
        return e = e.replace(/\s+/g, ""),
        this.optional(t) || e.length > 9 && e.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number"),
    e.validator.addMethod("postalcodeBR", function(e, t) {
        return this.optional(t) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(e)
    }, "Informe um CEP válido."),
    e.validator.addMethod("postalCodeCA", function(e, t) {
        return this.optional(t) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(e)
    }, "Please specify a valid postal code"),
    e.validator.addMethod("postalcodeIT", function(e, t) {
        return this.optional(t) || /^\d{5}$/.test(e)
    }, "Please specify a valid postal code"),
    e.validator.addMethod("postalcodeNL", function(e, t) {
        return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e)
    }, "Please specify a valid postal code"),
    e.validator.addMethod("postcodeUK", function(e, t) {
        return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e)
    }, "Please specify a valid UK postcode"),
    e.validator.addMethod("require_from_group", function(t, i, n) {
        var o = e(n[1], i.form)
          , r = o.eq(0)
          , s = r.data("valid_req_grp") ? r.data("valid_req_grp") : e.extend({}, this)
          , a = o.filter(function() {
            return s.elementValue(this)
        }).length >= n[0];
        return r.data("valid_req_grp", s),
        e(i).data("being_validated") || (o.data("being_validated", !0),
        o.each(function() {
            s.element(this)
        }),
        o.data("being_validated", !1)),
        a
    }, e.validator.format("Please fill at least {0} of these fields.")),
    e.validator.addMethod("skip_or_fill_minimum", function(t, i, n) {
        var o = e(n[1], i.form)
          , r = o.eq(0)
          , s = r.data("valid_skip") ? r.data("valid_skip") : e.extend({}, this)
          , a = o.filter(function() {
            return s.elementValue(this)
        }).length
          , l = 0 === a || a >= n[0];
        return r.data("valid_skip", s),
        e(i).data("being_validated") || (o.data("being_validated", !0),
        o.each(function() {
            s.element(this)
        }),
        o.data("being_validated", !1)),
        l
    }, e.validator.format("Please either skip these fields or fill at least {0} of them.")),
    e.validator.addMethod("stateUS", function(e, t, i) {
        var n, o = "undefined" == typeof i, r = !o && "undefined" != typeof i.caseSensitive && i.caseSensitive, s = !o && "undefined" != typeof i.includeTerritories && i.includeTerritories, a = !o && "undefined" != typeof i.includeMilitary && i.includeMilitary;
        return n = s || a ? s && a ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : s ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",
        n = r ? new RegExp(n) : new RegExp(n,"i"),
        this.optional(t) || n.test(e)
    }, "Please specify a valid state"),
    e.validator.addMethod("strippedminlength", function(t, i, n) {
        return e(t).text().length >= n
    }, e.validator.format("Please enter at least {0} characters")),
    e.validator.addMethod("time", function(e, t) {
        return this.optional(t) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(e)
    }, "Please enter a valid time, between 00:00 and 23:59"),
    e.validator.addMethod("time12h", function(e, t) {
        return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)
    }, "Please enter a valid time in 12-hour am/pm format"),
    e.validator.addMethod("url2", function(e, t) {
        return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
    }, e.validator.messages.url),
    e.validator.addMethod("vinUS", function(e) {
        if (17 !== e.length)
            return !1;
        var t, i, n, o, r, s, a = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], l = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9], d = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], c = 0;
        for (t = 0; t < 17; t++) {
            if (o = d[t],
            n = e.slice(t, t + 1),
            8 === t && (s = n),
            isNaN(n)) {
                for (i = 0; i < a.length; i++)
                    if (n.toUpperCase() === a[i]) {
                        n = l[i],
                        n *= o,
                        isNaN(s) && 8 === i && (s = a[i]);
                        break
                    }
            } else
                n *= o;
            c += n
        }
        return r = c % 11,
        10 === r && (r = "X"),
        r === s
    }, "The specified vehicle identification number (VIN) is invalid."),
    e.validator.addMethod("zipcodeUS", function(e, t) {
        return this.optional(t) || /^\d{5}(-\d{4})?$/.test(e)
    }, "The specified US ZIP Code is invalid"),
    e.validator.addMethod("ziprange", function(e, t) {
        return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(e)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"),
    e
});
var SITE = {
    Settings: {
        property: "singlegrain"
    },
    PreConfig: {},
    init: function() {
        "use strict";
        "undefined" != typeof SG_PRE_CONFIG && (SITE.PreConfig = SG_PRE_CONFIG),
        SITE.Utils.setVisitorCountry(),
        SITE.UI.init(),
        SITE.Pages.home.init(),
        SITE.Drip.init(),
        SITE.Modals.TabbedForm.init(),
        SITE.Modals.SignupForm.init(),
        SITE.Pages.init(),
        SITE.Tracking.init(),
        SITE.Pages.common.search()
    },
    validationDefaults: function() {
        "use strict";
        $.validator.setDefaults({
            highlight: function(e) {
                $(e).closest(".form-group").addClass("has-danger")
            },
            unhighlight: function(e) {
                $(e).closest(".form-group").removeClass("has-danger")
            }
        }),
        $.validator.addMethod("website", function(e, t) {
            var i = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i;
            if (1 == i.test(e))
                return !0;
            var n = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/i;
            return 1 == n.test(e)
        }, "Please enter a valid website URL.")
    }
};
jQuery(document).ready(function() {
    "use strict";
    SITE.init()
}),
SITE.UI = {
    viewport: {
        width: 0,
        height: 0,
        mode: "",
        touch: !1,
        scrollTop: 0
    },
    breakpoints: {
        xs: 0,
        sm: 544,
        md: 768,
        lg: 992,
        xl: 1200
    },
    containerWidths: {
        sm: 576,
        md: 750,
        lg: 960,
        xl: 1100
    },
    init: function() {
        "use strict";
        switch (SITE.UI.nav.init(),
        SITE.Utils.Validate.init(),
        SITE.UI.setSize(),
        $(window).resize(function() {
            SITE.UI.setSize(),
            SITE.UI.CardGrid.init(),
            SITE.Utils.eqHeight()
        }),
        SITE.UI.CardGrid.init(),
        SITE.UI.viewport.touch = "ontouchstart"in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        SITE.Utils.backToTopBtn(),
        SITE.Utils.eqHeight(),
        $(".inview").on("inview", function(e, t) {
            t && $(this).addClass("in-view")
        }),
        window.location.hash) {
        case "#clients":
            SITE.UI.scrollTo("#featClients")
        }
        SITE.UI.toc(),
        SITE.UI.internalLinks(),
        SITE.UI.clickableImg(),
        SITE.UI.customLinks(),
        SITE.UI.SlickCarousel.init(),
        $(window).resize(function() {
            SITE.UI.SlickCarousel.init()
        })
    },
    setSize: function() {
        "use strict";
        var e;
        SITE.UI.viewport.width = e = $(window).width(),
        SITE.UI.viewport.height = $(window).height(),
        $.each(SITE.UI.breakpoints, function(t, i) {
            e > i && (SITE.UI.viewport.mode = t)
        })
    },
    nav: {
        stickyNavOn: !0,
        init: function() {
            "use strict";
            $(".dropdown-toggle").dropdown(),
            $("body").hasClass("no-sticky-nav") && (SITE.UI.nav.stickyNavOn = !1),
            SITE.UI.nav.sticky(),
            SITE.UI.nav.mobile()
        },
        sticky: function() {
            "use strict";
            $(window).scroll(function() {
                SITE.UI.viewport.scrollTop = $(window).scrollTop(),
                SITE.UI.nav.stickyNavOn && ($("body").hasClass("no-nav") || (SITE.UI.viewport.scrollTop > 115 ? $("body").addClass("sticky-nav") : $("body").removeClass("sticky-nav")))
            })
        },
        mobile: function() {
            "use strict";
            $("#hamburger").click(function() {
                $("body").toggleClass("mob-nav-open")
            })
        }
    },
    CardGrid: {
        run: !0,
        init: function() {
            "use strict";
            return "xs" === SITE.UI.viewport.mode ? (this.run === !0 && $(".card-grid").each(function() {
                $(this).children().each(function() {
                    $(this).children("div").height("auto")
                })
            }),
            !1) : (this.run = !0,
            $(".card-grid img").load(function() {
                SITE.UI.CardGrid.setEqualHeights()
            }),
            void this.setEqualHeights())
        },
        setEqualHeights: function() {
            "use strict";
            var e, t = 0, i = 0;
            $(".card-grid").each(function() {
                i = 0,
                e = $(this).children(),
                e.each(function() {
                    $(this).children("div").height(0)
                }),
                e.each(function() {
                    t = $(this).height(),
                    t > i && (i = t)
                }),
                $("body").hasClass("post-slug-locations") && (i -= 150),
                e.each(function() {
                    $(this).children("div").height(i)
                })
            })
        }
    },
    toc: function() {
        "use strict";
        var e, t, i = $("#toc,#hoverTocNav");
        i.length > 0 && (e = "",
        $("h2").each(function(i) {
            t = $(this).attr("id"),
            t || (t = "h" + i,
            $(this).attr("id", t)),
            e += "<li><a href='#" + t + "'>" + $(this).text() + "</a></li>"
        }),
        e = "<ol>" + e + "</ol>",
        i.append(e))
    },
    internalLinks: function() {
        "use strict";
        $("a[href^='#']").not("[data-toggle=modal]").click(function() {
            return SITE.UI.scrollTo($(this).attr("href")),
            !1
        })
    },
    scrollTo: function(e) {
        "use strict";
        if ("landing" == $("body").data("page")) {
            if ("xs" == SITE.UI.viewport.mode || "md" == SITE.UI.viewport.mode)
                var t = $(e).offset().top - 200;
            else
                var t = 0;
            $("html, body").animate({
                scrollTop: t
            }, 600)
        }
    },
    clickableImg: function() {
        "use strict";
        var e, t, i, n;
        $("img.clickable").click(function() {
            n = $(this).attr("src"),
            $("<img/>").attr("src", n).load(function() {
                t = this.width,
                i = this.height,
                e = $("#imgModal"),
                e.find(".modal-body img").attr("src", $(this).attr("src")).attr("width", t).attr("height", i),
                e.find(".modal-dialog").css("width", t + "px").css("height", i + "px"),
                e.modal("show")
            })
        })
    },
    customLinks: function() {
        "use strict";
        $("[data-target=open-chat]").click(function() {
            return $("#intercom-container").show(),
            Intercom("showNewMessage"),
            !1
        })
    },
    SlickCarousel: {
        init: function() {
            "use strict";
            "xs" !== SITE.UI.viewport.mode && "sm" !== SITE.UI.viewport.mode && "md" !== SITE.UI.viewport.mode,
            $(".sg-review-table ol").length > 0 && !$(".sg-review-table ol").hasClass("slick-initialized") && $(".sg-review-table ol").slick({
                infinite: !0,
                arrows: !0,
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: !0,
                unslick: !0,
                responsive: [{
                    breakpoint: 3200,
                    settings: "unslick"
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        arrows: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }),
            $(".sg-landing-logos").length > 0 && !$(".sg-landing-logos").hasClass("slick-initialized") && $(".sg-landing-logos").slick({
                infinite: !0,
                arrows: !1,
                dots: !0,
                unslick: !0
            })
        }
    }
},
SITE.Pages = {
    init: function() {
        "use strict";
        var e = $("body").data("page");
        "undefined" != typeof e && (e = e.replace("-", ""),
        "undefined" != typeof SITE.Pages[e] && SITE.Pages[e].init()),
        "undefined" == typeof SG_HEADER_IMG || $("body").hasClass("single") || ($("#masthead").css("background-image", "url('" + SG_HEADER_IMG + "')"),
        $("#headerWrap").addClass("activated"))
    },
    common: {
        init: function() {
            "use strict"
        },
        search: function() {
            "use strict";
            $("#searchToggle").click(function() {
                return $(this).parent().toggleClass("open"),
                $("#searchCrit").focus(),
                !1
            })
        }
    },
    home: {
        init: function() {
            "use strict"
        },
        parallax: function() {
            "use strict";
            var e = $("#prodImg")
              , t = 0;
            $(window).scroll(function() {
                t = parseInt(e.css("bottom")),
                t > -200 && e.css("bottom", t - 1 + "px")
            })
        }
    },
    blog: {
        init: function() {
            "use strict"
        }
    },
    resources: {
        CurrentFilters: {
            cat: "",
            tag: ""
        },
        init: function() {
            "use strict";
            if ($(".resource-filter a").click(function() {
                var e = "";
                if ($(this).hasClass("cat"))
                    e = "cat";
                else {
                    if (!$(this).hasClass("tag"))
                        return !1;
                    e = "tag"
                }
                SITE.Pages.resources.CurrentFilters[e] = $(this).data("term"),
                $(".resource-filter li." + e).removeClass("active"),
                $(this).parent().addClass("active");
                var t = $(this).data("term-name")
                  , i = $(this).data("term-url");
                return window.history.pushState("string", t, i),
                SITE.Pages.resources.filter(),
                !1
            }),
            $(".resource-filter-preselected").length) {
                var e = $(".resource-filter-preselected").data("resource-filter-type")
                  , t = $(".resource-filter-preselected").data("resource-filter-term-id");
                $(".resource-filter ul li." + e + ' a[data-term="' + t + '"]').click()
            }
        },
        filter: function() {
            "use strict";
            var e, t = SITE.Pages.resources.CurrentFilters.cat, i = SITE.Pages.resources.CurrentFilters.tag, n = "";
            $("#ResNotFound").hide(),
            t > 0 && (n = '[data-cat="' + t + '"]'),
            i > 0 && (n += '[data-tag="' + i + '"]'),
            "" !== n ? (e = $(".resource-listing li").hide().filter(n),
            e.length > 0 ? e.fadeIn() : $("#ResNotFound").find(".cat").text($(".cat[data-term=" + t + "]").text()).end().find(".tag").text($(".tag[data-term=" + i + "]").text()).end().fadeIn()) : $(".resource-listing li").show()
        }
    },
    niche: {
        init: function() {
            "use strict";
            SITE.UI.nav.stickyNavOn = !1,
            SITE.Pages.niche.heroHeightAdjust(),
            $(window).resize(function() {
                SITE.Pages.niche.heroHeightAdjust()
            })
        },
        heroHeightAdjust: function() {
            "use strict";
            var e = $("body");
            switch (SITE.UI.viewport.mode) {
            case "sm":
            case "md":
            case "lg":
            case "xl":
                SITE.UI.viewport.height < 830 && SITE.UI.viewport.height > 600 && e.css("paddingTop", SITE.UI.viewport.height - 20)
            }
        }
    },
    standalone: {
        init: function() {
            "use strict";
            dataLayer.push({
                event: "standalonePageLoaded"
            }),
            "undefined" != typeof SG_WEBINAR_ID && "undefined" != typeof SG_WEBINAR_NAME && dataLayer.push({
                event: "webinarLandingPageLoaded"
            })
        }
    },
    epicres: {
        init: function() {
            "use strict";
            "undefined" != typeof dataLayer && dataLayer.push({
                event: "epicResPageLoaded"
            }),
            SITE.UI.internalLinks(),
            $("#toc").on("inview", function(e, t) {
                t ? ($("body").removeClass("hover-toc"),
                $("#hoverTocNav").hide(),
                $("#hoverToc").removeClass("cl")) : $("body").addClass("hover-toc")
            }),
            $("#hoverToc").click(function() {
                $(this).toggleClass("cl"),
                $("#hoverTocNav").slideToggle(200)
            })
        }
    },
    thankyou: {
        init: function() {
            "use strict";
            SITE.Pages.thankyou.valign(),
            $(window).resize(function() {
                SITE.Pages.thankyou.valign()
            })
        },
        valign: function() {
            "use strict";
            var e = $("#strategySession")
              , t = e.find(".stratses__vid")
              , i = t.height()
              , n = e.find(".stratses__signup")
              , o = 0;
            switch (SITE.UI.viewport.mode) {
            case "lg":
            case "xl":
                n.css("min-height", i + "px"),
                o = (i - n.children().eq(0).height()) / 2,
                n.css("padding-top", o + "px")
            }
        }
    }
},
SITE.Modals = {
    TabbedForm: {
        partialDataAdded: !1,
        init: function() {
            "use strict";
            var e, t;
            this.slider(document.getElementById("budgetSlider")),
            $("#cfPage").val(window.location.href),
            "#contactModal" === window.location.hash && $("#contactModal").modal("show"),
            $("[data-role='tabbed-form']").each(function() {
                e = $(this),
                e.data("total-steps", e.find(".tab").length),
                e.data("current-step", 1),
                e.find("[data-toggle='form-advance']").click(function() {
                    e.find("form").attr("action", "https://www.getdrip.com/forms/87353426/submissions"),
                    SITE.Modals.TabbedForm.isValid(e) && (t = $("#cfPhone").val(),
                    SITE.Modals.TabbedForm.partialDataAdded || SITE.Drip.push("subscribe", {
                        campaign_id: "85026915",
                        fields: {
                            email: $("#cfEmail").val(),
                            name: $("#cfName").val(),
                            phone: $("#cfPhone").val(),
                            url: $("#cfUrl").val(),
                            page: $("#cfPage").val(),
                            partial: "true"
                        },
                        double_optin: !1,
                        success: function() {
                            SITE.Modals.TabbedForm.partialDataAdded = !0
                        }
                    }),
                    SITE.Modals.TabbedForm.advanceForm(e, 1))
                }),
                e.find("[data-toggle='form-reverse']").click(function() {
                    SITE.Modals.TabbedForm.advanceForm(e, -1)
                }),
                e.find("[data-toggle='other-field']").click(function() {
                    $(this).find("input[type=checkbox]").is(":checked") ? $("#" + $(this).data("target")).slideDown() : $("#" + $(this).data("target")).slideUp().find("textarea").val("")
                }),
                SITE.Modals.TabbedForm.recordServicesNeeded(),
                $("#contactModal").on("hidden.bs.modal", function(e) {
                    SITE.Tracking.Conversions.track($("#freeConsultForm").data("tracking"), "dismiss"),
                    SITE.Marketing.activeNow = ""
                }).on("shown.bs.modal", function(e) {
                    var t = $(e.relatedTarget).data("track-type");
                    "undefined" == typeof t && (t = $(e.relatedTarget).data("track-type-m")),
                    $("#freeConsultForm").data("tracking", t),
                    SITE.Tracking.Conversions.track(t, "click"),
                    SITE.Marketing.activeNow = "Get In Touch"
                })
            })
        },
        advanceForm: function(e, t) {
            "use strict";
            var i, n, o = e.data("current-step"), r = e.data("total-steps");
            o += t,
            o > 1 ? e.addClass("past-first-base") : e.removeClass("past-first-base"),
            o <= r ? (e.find(".tab").removeClass("active").eq(o - 1).addClass("active"),
            e.find(".step-indicator li").removeClass("active").eq(o - 1).addClass("active"),
            e.data("current-step", o),
            n = e.find(".btn-primary"),
            o === r ? (n.data("original-text", n.text()),
            i = n.data("step-final-text")) : i = n.data("original-text"),
            "undefined" != typeof i && "" !== i && n.text(i)) : e.find("form").submit()
        },
        isValid: function(e) {
            "use strict";
            var t = !0
              , i = e.find(".tab.active")
              , n = $("#freeConsultForm").validate();
            return i.find(".form-control").each(function() {
                ($(this).is("[required]") || $(this).is("[data-required]")) && "desktop-only" === $(this).data("required") && "xs" === SITE.UI.viewport.mode && $(this).removeAttr("required"),
                !n.element(this) && t && (t = !1)
            }),
            t
        },
        slider: function(e) {
            "use strict";
            var e, t, i, n;
            return SITE.UI.viewport.touch || "xs" === SITE.UI.viewport.mode ? ($("#cfBudget").show(),
            $("#budgetSlider").addClass("dropdown-only"),
            !0) : ($("#cfBudget").change(function() {
                switch ($(this).val()) {
                case "$0 - $2,500":
                case "$2,500 - $5,000":
                    $("#cfSvcsGrp .sme-svc").show(),
                    $("#cfSvcsGrp .corp-svc").hide();
                    break;
                default:
                    $("#cfSvcsGrp .corp-svc").show(),
                    $("#cfSvcsGrp .sme-svc").hide()
                }
            }),
            t = ["$0 - $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "$20,000 - $40,000", "$40,000 - $80,000", "$80,000 - $160,000", "$160,000+"],
            noUiSlider.create(e, {
                start: [4],
                step: 1,
                range: {
                    min: [0],
                    max: [7]
                }
            }),
            void e.noUiSlider.on("update", function(o, r) {
                n = parseInt(o[r]),
                i = t[n],
                r = $(e).find(".noUi-handle"),
                r.attr("data-title", i).removeClass("min").removeClass("max"),
                0 === n && r.addClass("min"),
                5 === n && r.addClass("max"),
                $("#cfBudget").val(i).trigger("change")
            }))
        },
        recordServicesNeeded: function() {
            "use strict";
            var e = $("#cfSvcsGrp input[type=checkbox]")
              , t = $("#cfServices")
              , i = "";
            e.change(function() {
                i = "",
                e.filter(":checked").each(function() {
                    "" !== i && (i += ", "),
                    i += $(this).val()
                }),
                t.val(i)
            })
        }
    },
    SignupForm: {
        init: function() {
            "use strict";
            var e, t, i = $("#signupModal"), n = i.find("form"), o = "";
            i.on("show.bs.modal", function(i) {
                var r = $(i.relatedTarget)
                  , s = $(this);
                o = r.data("dripid"),
                t = r.data("deliverable"),
                s.find(".modal-body .h2").html(r.data("headline")),
                s.find(".modal-body .subheading").html(r.data("subheading")),
                s.find(".modal-body #cfDeliverable").val(t),
                "undefined" != typeof r.data("request") && (e = s.find("input[name='fields[request]']"),
                0 === e.length ? (e = $("<input type='hidden' name='fields[request]' value='" + r.data("request") + "'>"),
                s.find(".modal-body").append(e)) : e.val(r.data("request"))),
                n.attr("action", "https://www.getdrip.com/forms/" + o + "/submissions").attr("data-drip-embedded-form", o),
                n.submit(function(e) {
                    return e.preventDefault(),
                    this.submit(),
                    $("#signupModal").modal("toggle"),
                    !0
                })
            }),
            $("#signupModal").on("hidden.bs.modal", function(e) {
                SITE.Marketing.activeNow = "",
                SITE.Tracking.Conversions.track($("#modalSignupForm").data("tracking"), "dismiss")
            }).on("shown.bs.modal", function(e) {
                var t = $(e.relatedTarget).data("track-type");
                $("#modalSignupForm").data("tracking", t),
                SITE.Tracking.Conversions.track(t, "click"),
                SITE.Marketing.activeNow = "Signup Modal",
                SITE.Marketing.HeaderBar.hide()
            })
        }
    }
},
SITE.Drip = {
    apiTries: 0,
    loaded: !1,
    subscribed: !1,
    User: {
        email: "",
        fields: {},
        tags: [],
        score: 0
    },
    init: function() {
        "use strict";
        SITE.Drip.ifLoaded(function() {
            SITE.Drip.identifyUser(),
            SITE.Drip.checkUrlParam(),
            SITE.Drip.initTaggingLinks(),
            SITE.Drip.bodyTagging()
        })
    },
    identifyUser: function() {
        "use strict";
        SITE.Drip.identify({
            success: function(e) {
                SITE.Tracking.Conversions.setDripID(e.visitor_uuid),
                SITE.Drip.User.email = e.email,
                SITE.Drip.User.fields = e.custom_fields,
                SITE.Drip.User.tags = e.tags,
                SITE.Drip.User.score = e.lead_score,
                e.anonymous === !1 ? (SITE.Drip.subscribed = !0,
                SITE.Marketing.disable(),
                SITE.Tracking.Conversions.setEmail(e.email)) : (SITE.Marketing.enable(),
                SITE.Tracking.Conversions.trackShow())
            },
            failure: function() {}
        })
    },
    checkUrlParam: function() {
        "use strict";
        var e = SITE.Drip.getEmailFromUrl();
        e !== !1 && "" !== e && SITE.Drip.identify({
            email: e
        })
    },
    getEmailFromUrl: function() {
        "use strict";
        var e = SITE.Utils.getUrlParamByName("e");
        return e === !1 && (e = SITE.Utils.getUrlParamByName("drip_email")),
        e
    },
    initTaggingLinks: function() {
        "use strict";
        var e, t, i = SITE.Drip.getEmailFromUrl();
        jQuery("[data-driptag]").click(function() {
            return e = jQuery(this).data("driptag"),
            "" !== e && (t = {
                tags: [e]
            },
            i !== !1 && (t.email = i),
            SITE.Drip.identify(t),
            jQuery("[data-driphideaftertag]").slideUp(function() {
                jQuery("[data-dripshowaftertag]").slideDown()
            })),
            !1
        })
    },
    bodyTagging: function() {
        "use strict";
        SITE.Drip.trackTopInterest();
        var e = $("body").data("drip-tags");
        if (e) {
            var t, i, n = SITE.Drip.getEmailFromUrl();
            i = n !== !1 ? n : SITE.Drip.User.email,
            t = {
                tags: [e]
            },
            t.email = i,
            SITE.Drip.identify(t);
            var o = SITE.Drip.getTopInterest();
            if (o !== !1) {
                var r = ["SEO Interest", "PPC Interest", "Retargeting Interest", "Facebook Ads Interest", "Video Ads Interest", "Mobile Ads Interest", "Content Marketing Interest", "Infographics Interest", "CRO Interest", "Blog - SEO Interest", "Blog - Link Building Interest", "Blog - Conversions Interest", "Blog - Content Marketing Interest", "Blog - Blogging Interest"];
                if (jQuery.inArray(o, r) !== -1) {
                    var s = [];
                    $.each(r, function(e, t) {
                        s[e] = "Top Interest - " + t
                    }),
                    t = {
                        remove_tags: s
                    },
                    t.email = i,
                    SITE.Drip.identify(t),
                    t = {
                        tags: ["Top Interest - " + o]
                    },
                    t.email = i,
                    SITE.Drip.identify(t)
                }
            }
        }
    },
    trackTopInterest: function() {
        "use strict";
        var e = $("body").data("drip-tags");
        if (e && e.indexOf(" Interest") >= 0) {
            var t = Cookies.get("sg-top-interests");
            t = "undefined" == typeof t ? {} : Cookies.getJSON("sg-top-interests"),
            "undefined" == typeof t[e] ? t[e] = 1 : t[e] = t[e] + 1,
            Cookies.set("sg-top-interests", t, {
                expires: 365
            })
        }
    },
    getTopInterest: function() {
        "use strict";
        var e = Cookies.getJSON("sg-top-interests");
        if ("undefined" != typeof e) {
            var t = 0
              , i = !1;
            return $.each(e, function(e, n) {
                n >= t && (t = parseInt(n),
                i = e)
            }),
            i
        }
        return !1
    },
    ifLoaded: function(e) {
        "use strict";
        "undefined" == typeof _dcq ? (SITE.Drip.apiTries += 1,
        SITE.Drip.apiTries < 10 && window.setTimeout(function() {
            SITE.Drip.ifLoaded(e)
        }, 600)) : (SITE.Drip.loaded = !0,
        e())
    },
    identify: function(e) {
        "use strict";
        SITE.Drip.ifLoaded(function() {
            return _dcq.push(["identify", e])
        })
    },
    push: function(e, t) {
        "use strict";
        SITE.Drip.ifLoaded(function() {
            return _dcq.push([e, t])
        })
    }
},
SITE.Tracking = {
    pageLoadAt: Date.now(),
    init: function() {
        "use strict";
        return !$("body").hasClass("logged-in") && (SITE.Tracking.GA.init(),
        void SITE.Tracking.Conversions.init())
    },
    GA: {
        init: function() {
            "use strict";
            $("a[data-gaevent],button[data-gaevent]").click(function() {
                SITE.Tracking.GA.recordEvent("Button", "click", $(this).data("gaevent"))
            }),
            $("form[data-gaevent]").submit(function() {
                SITE.Tracking.GA.recordEvent("Form", "submit", $(this).data("gaevent"))
            })
        },
        recordEvent: function(e, t, i) {
            "use strict";
            "undefined" != typeof ga && ga("send", {
                hitType: "event",
                eventCategory: e,
                eventAction: t,
                eventLabel: i
            })
        }
    },
    Conversions: {
        userID: 0,
        init: function() {
            "use strict";
            SITE.Tracking.Conversions.identify(),
            $("form[data-tracking]").submit(function() {
                return SITE.Tracking.Conversions.track($(this).data("tracking"), "submit")
            }),
            $("[data-track-type]").each(function() {
                SITE.Tracking.Conversions.track($(this).data("track-type"), "show")
            }),
            "xs" === SITE.UI.viewport.mode && $("[data-track-type-m]").each(function() {
                SITE.Tracking.Conversions.track($(this).data("track-type-m"), "show")
            })
        },
        identify: function() {
            "use strict";
            var e = Cookies.get("sg-uid");
            "undefined" == typeof e ? $.get("/conversions-ga/index.php?identify", function(e) {
                SITE.Tracking.Conversions.userID = e,
                Cookies.set("sg-uid", e, {
                    expires: 365
                })
            }) : SITE.Tracking.Conversions.userID = e
        },
        setEmail: function(e) {
            "use strict";
            var t = {
                email: e,
                uid: SITE.Tracking.Conversions.userID
            };
            $.get("/conversions-ga/index.php", t)
        },
        setDripID: function(e) {
            "use strict";
            var t = {
                dripid: e,
                uid: SITE.Tracking.Conversions.userID
            };
            0 !== SITE.Tracking.Conversions.userID && $.get("/conversions-ga/index.php", t)
        },
        trackShow: function() {
            "use strict";
            $("[data-track-show]").each(function() {
                SITE.Tracking.Conversions.track($(this).data("track-show"), "show")
            })
        },
        track: function(e, t) {
            "use strict";
            var i = {
                type: e,
                action: t,
                page: window.location.pathname,
                uid: SITE.Tracking.Conversions.userID
            };
            return 0 === i.uid ? window.setTimeout(function() {
                SITE.Tracking.Conversions.track(e, t)
            }, 200) : $.get("/conversions-ga/index.php", i, function() {
                return !0
            }),
            !0
        }
    }
},
SITE.Utils = {
    getUrlParamByName: function(e) {
        "use strict";
        var t, i, n = window.location.search.substring(1), o = n.split("&");
        for (t = 0; t < o.length; t++)
            if (i = o[t].split("="),
            i[0] == e)
                return decodeURIComponent(i[1]);
        return !1
    },
    backToTopBtn: function() {
        "use strict";
        $("a[href='#top']").click(function() {
            return $("html, body").animate({
                scrollTop: 0
            }, "slow"),
            !1
        })
    },
    eqHeight: function() {
        "use strict";
        var e, t = 0, i = 0;
        $(".eq-height").each(function() {
            return (!$(this).parent().hasClass("sg-review-table") || "xs" != SITE.UI.viewport.mode && "sm" != SITE.UI.viewport.mode && "md" != SITE.UI.viewport.mode) && (e = $(this).children(),
            e.each(function() {
                t = $(this).height(),
                t > i && (i = t)
            }),
            void e.height(i))
        })
    },
    log: function(e) {
        "use strict";
        var t = "https://hooks.zapier.com/hooks/catch/77724/68q4qj/"
          , i = {
            msg: "[SG] " + e
        };
        $.post(t, i)
    },
    isBot: function() {
        "use strict";
        return navigator.userAgent.match(/bot|spider/i)
    },
    setVisitorCountry: function() {
        "use strict";
        var e;
        e = Cookies.get("sg-country"),
        "undefined" == typeof e && $.getJSON("https://ipinfo.io", function(e) {
            Cookies.get("sg-country", e.country)
        })
    }
},
SITE.Utils.Validate = {
    init: function() {
        "use strict";
        SITE.Utils.Validate.validateSearch();
        var e;
        SITE.validationDefaults(),
        $("form[data-validate]").each(function() {
            $(this).validate(),
            $(this).find("[data-submit]").click(function() {
                e = $(this).closest("form"),
                $(e).valid() && e.submit()
            })
        })
    },
    validateSearch: function() {
        "use strict";
        $("form#headerSearch").submit(function(e) {
            var t = $('form#headerSearch input[name="s"]')
              , i = t.val().trim();
            if ("" == i)
                return t.focus(),
                !1
        })
    }
},
SITE.Gtm = {
    event: function(e) {
        "use strict";
        return window.dataLayer = window.dataLayer || [],
        dataLayer.push({
            event: e
        })
    }
};
