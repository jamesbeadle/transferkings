var Ds = Object.defineProperty;
var Ms = (t, e, n) =>
  e in t
    ? Ds(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var He = (t, e, n) => Ms(t, typeof e != "symbol" ? e + "" : e, n);
import {
  u as js,
  A as Bs,
  L as Ot,
  c as ke,
  p as Jn,
  H as zr,
  a as Vr,
} from "./vendor.CNhbxWSu.js";
function L() {}
const dn = (t) => t;
function zs(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function Vs(t) {
  return (
    !!t &&
    (typeof t == "object" || typeof t == "function") &&
    typeof t.then == "function"
  );
}
function Ur(t) {
  return t();
}
function Qn() {
  return Object.create(null);
}
function Te(t) {
  t.forEach(Ur);
}
function wt(t) {
  return typeof t == "function";
}
function Q(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let Ut;
function er(t, e) {
  return t === e
    ? !0
    : (Ut || (Ut = document.createElement("a")), (Ut.href = e), t === Ut.href);
}
function Us(t) {
  return Object.keys(t).length === 0;
}
function Hr(t, ...e) {
  if (t == null) {
    for (const r of e) r(void 0);
    return L;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function je(t, e, n) {
  t.$$.on_destroy.push(Hr(e, n));
}
function _t(t, e, n, r) {
  if (t) {
    const s = qr(t, e, n, r);
    return t[0](s);
  }
}
function qr(t, e, n, r) {
  return t[1] && r ? zs(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function gt(t, e, n, r) {
  if (t[2] && r) {
    const s = t[2](r(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const i = [],
        l = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < l; o += 1) i[o] = e.dirty[o] | s[o];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function vt(t, e, n, r, s, i) {
  if (s) {
    const l = qr(e, n, r, i);
    t.p(l, s);
  }
}
function bt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let r = 0; r < n; r++) e[r] = -1;
    return e;
  }
  return -1;
}
function Hs(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function Qe(t) {
  return t ?? "";
}
function tr(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
const Kr = typeof window < "u";
let Nn = Kr ? () => window.performance.now() : () => Date.now(),
  xn = Kr ? (t) => requestAnimationFrame(t) : L;
const dt = new Set();
function Wr(t) {
  dt.forEach((e) => {
    e.c(t) || (dt.delete(e), e.f());
  }),
    dt.size !== 0 && xn(Wr);
}
function On(t) {
  let e;
  return (
    dt.size === 0 && xn(Wr),
    {
      promise: new Promise((n) => {
        dt.add((e = { c: t, f: n }));
      }),
      abort() {
        dt.delete(e);
      },
    }
  );
}
const qs =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
let hn = !1;
function Ks() {
  hn = !0;
}
function Ws() {
  hn = !1;
}
function Xs(t, e, n, r) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= r ? (t = s + 1) : (e = s);
  }
  return t;
}
function Gs(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const a = [];
    for (let c = 0; c < e.length; c++) {
      const f = e[c];
      f.claim_order !== void 0 && a.push(f);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1),
    r = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let a = 0; a < e.length; a++) {
    const c = e[a].claim_order,
      f =
        (s > 0 && e[n[s]].claim_order <= c
          ? s + 1
          : Xs(1, s, (d) => e[n[d]].claim_order, c)) - 1;
    r[a] = n[f] + 1;
    const h = f + 1;
    (n[h] = a), (s = Math.max(h, s));
  }
  const i = [],
    l = [];
  let o = e.length - 1;
  for (let a = n[s] + 1; a != 0; a = r[a - 1]) {
    for (i.push(e[a - 1]); o >= a; o--) l.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) l.push(e[o]);
  i.reverse(), l.sort((a, c) => a.claim_order - c.claim_order);
  for (let a = 0, c = 0; a < l.length; a++) {
    for (; c < i.length && l[a].claim_order >= i[c].claim_order; ) c++;
    const f = c < i.length ? i[c] : null;
    t.insertBefore(l[a], f);
  }
}
function Ys(t, e) {
  t.appendChild(e);
}
function Xr(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Zs(t) {
  const e = w("style");
  return (e.textContent = "/* empty */"), Js(Xr(t), e), e.sheet;
}
function Js(t, e) {
  return Ys(t.head || t, e), e.sheet;
}
function g(t, e) {
  if (hn) {
    for (
      Gs(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Qs(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t, e, n) {
  hn && !n
    ? g(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function p(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function nr(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function w(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ye(t) {
  return document.createTextNode(t);
}
function D() {
  return ye(" ");
}
function J() {
  return ye("");
}
function fe(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function In(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function u(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function oe(t) {
  return t.dataset.svelteH;
}
function y(t) {
  return Array.from(t.childNodes);
}
function Gr(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Yr(t, e, n, r, s = !1) {
  Gr(t);
  const i = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const o = t[l];
      if (e(o)) {
        const a = n(o);
        return (
          a === void 0 ? t.splice(l, 1) : (t[l] = a),
          s || (t.claim_info.last_index = l),
          o
        );
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const o = t[l];
      if (e(o)) {
        const a = n(o);
        return (
          a === void 0 ? t.splice(l, 1) : (t[l] = a),
          s
            ? a === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = l),
          o
        );
      }
    }
    return r();
  })();
  return (
    (i.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    i
  );
}
function Zr(t, e, n, r) {
  return Yr(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const i = [];
      for (let l = 0; l < s.attributes.length; l++) {
        const o = s.attributes[l];
        n[o.name] || i.push(o.name);
      }
      i.forEach((l) => s.removeAttribute(l));
    },
    () => r(e),
  );
}
function $(t, e, n) {
  return Zr(t, e, n, w);
}
function Y(t, e, n) {
  return Zr(t, e, n, W);
}
function Ce(t, e) {
  return Yr(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const r = "" + e;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length) return n.splitText(r.length);
      } else n.data = r;
    },
    () => ye(e),
    !0,
  );
}
function M(t) {
  return Ce(t, " ");
}
function rr(t, e, n) {
  for (let r = n; r < t.length; r += 1) {
    const s = t[r];
    if (s.nodeType === 8 && s.textContent.trim() === e) return r;
  }
  return -1;
}
function ei(t, e) {
  const n = rr(t, "HTML_TAG_START", 0),
    r = rr(t, "HTML_TAG_END", n + 1);
  if (n === -1 || r === -1) return new Wt(e);
  Gr(t);
  const s = t.splice(n, r - n + 1);
  p(s[0]), p(s[s.length - 1]);
  const i = s.slice(1, s.length - 1);
  if (i.length === 0) return new Wt(e);
  for (const l of i)
    (l.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new Wt(e, i);
}
function Ge(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Ht(t, e) {
  t.value = e ?? "";
}
function Ae(t, e, n, r) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function pe(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Jr(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
class ti {
  constructor(e = !1) {
    He(this, "is_svg", !1);
    He(this, "e");
    He(this, "n");
    He(this, "t");
    He(this, "a");
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, r = null) {
    this.e ||
      (this.is_svg
        ? (this.e = W(n.nodeName))
        : (this.e = w(n.nodeType === 11 ? "TEMPLATE" : n.nodeName)),
      (this.t = n.tagName !== "TEMPLATE" ? n : n.content),
      this.c(e)),
      this.i(r);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes,
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) Qs(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(p);
  }
}
class Wt extends ti {
  constructor(n = !1, r) {
    super(n);
    He(this, "l");
    (this.e = this.n = null), (this.l = r);
  }
  c(n) {
    this.l ? (this.n = this.l) : super.c(n);
  }
  i(n) {
    for (let r = 0; r < this.n.length; r += 1) R(this.t, this.n[r], n);
  }
}
function Be(t, e) {
  return new t(e);
}
const Yt = new Map();
let Zt = 0;
function ni(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function ri(t, e) {
  const n = { stylesheet: Zs(e), rules: {} };
  return Yt.set(t, n), n;
}
function Jt(t, e, n, r, s, i, l, o = 0) {
  const a = 16.666 / r;
  let c = `{
`;
  for (let b = 0; b <= 1; b += a) {
    const S = e + (n - e) * i(b);
    c +=
      b * 100 +
      `%{${l(S, 1 - S)}}
`;
  }
  const f =
      c +
      `100% {${l(n, 1 - n)}}
}`,
    h = `__svelte_${ni(f)}_${o}`,
    d = Xr(t),
    { stylesheet: _, rules: m } = Yt.get(d) || ri(d, t);
  m[h] ||
    ((m[h] = !0), _.insertRule(`@keyframes ${h} ${f}`, _.cssRules.length));
  const v = t.style.animation || "";
  return (
    (t.style.animation = `${v ? `${v}, ` : ""}${h} ${r}ms linear ${s}ms 1 both`),
    (Zt += 1),
    h
  );
}
function Qt(t, e) {
  const n = (t.style.animation || "").split(", "),
    r = n.filter(
      e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1,
    ),
    s = n.length - r.length;
  s && ((t.style.animation = r.join(", ")), (Zt -= s), Zt || si());
}
function si() {
  xn(() => {
    Zt ||
      (Yt.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && p(e);
      }),
      Yt.clear());
  });
}
let It;
function We(t) {
  It = t;
}
function Dt() {
  if (!It) throw new Error("Function called outside component initialization");
  return It;
}
function $t(t) {
  Dt().$$.on_mount.push(t);
}
function ii(t) {
  Dt().$$.after_update.push(t);
}
function Qr(t) {
  Dt().$$.on_destroy.push(t);
}
function es() {
  const t = Dt();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const i = Jr(e, n, { cancelable: r });
      return (
        s.slice().forEach((l) => {
          l.call(t, i);
        }),
        !i.defaultPrevented
      );
    }
    return !0;
  };
}
function yn(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const at = [],
  tt = [];
let ht = [];
const sr = [],
  ts = Promise.resolve();
let Cn = !1;
function ns() {
  Cn || ((Cn = !0), ts.then(Rn));
}
function rs() {
  return ns(), ts;
}
function xe(t) {
  ht.push(t);
}
const wn = new Set();
let st = 0;
function Rn() {
  if (st !== 0) return;
  const t = It;
  do {
    try {
      for (; st < at.length; ) {
        const e = at[st];
        st++, We(e), li(e.$$);
      }
    } catch (e) {
      throw ((at.length = 0), (st = 0), e);
    }
    for (We(null), at.length = 0, st = 0; tt.length; ) tt.pop()();
    for (let e = 0; e < ht.length; e += 1) {
      const n = ht[e];
      wn.has(n) || (wn.add(n), n());
    }
    ht.length = 0;
  } while (at.length);
  for (; sr.length; ) sr.pop()();
  (Cn = !1), wn.clear(), We(t);
}
function li(t) {
  if (t.fragment !== null) {
    t.update(), Te(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(xe);
  }
}
function oi(t) {
  const e = [],
    n = [];
  ht.forEach((r) => (t.indexOf(r) === -1 ? e.push(r) : n.push(r))),
    n.forEach((r) => r()),
    (ht = e);
}
let Pt;
function Fn() {
  return (
    Pt ||
      ((Pt = Promise.resolve()),
      Pt.then(() => {
        Pt = null;
      })),
    Pt
  );
}
function nt(t, e, n) {
  t.dispatchEvent(Jr(`${e ? "intro" : "outro"}${n}`));
}
const Xt = new Set();
let De;
function me() {
  De = { r: 0, c: [], p: De };
}
function _e() {
  De.r || Te(De.c), (De = De.p);
}
function P(t, e) {
  t && t.i && (Xt.delete(t), t.i(e));
}
function N(t, e, n, r) {
  if (t && t.o) {
    if (Xt.has(t)) return;
    Xt.add(t),
      De.c.push(() => {
        Xt.delete(t), r && (n && t.d(1), r());
      }),
      t.o(e);
  } else r && r();
}
const Ln = { duration: 0 };
function pn(t, e, n) {
  const r = { direction: "in" };
  let s = e(t, n, r),
    i = !1,
    l,
    o,
    a = 0;
  function c() {
    l && Qt(t, l);
  }
  function f() {
    const {
      delay: d = 0,
      duration: _ = 300,
      easing: m = dn,
      tick: v = L,
      css: b,
    } = s || Ln;
    b && (l = Jt(t, 0, 1, _, d, m, b, a++)), v(0, 1);
    const S = Nn() + d,
      O = S + _;
    o && o.abort(),
      (i = !0),
      xe(() => nt(t, !0, "start")),
      (o = On((T) => {
        if (i) {
          if (T >= O) return v(1, 0), nt(t, !0, "end"), c(), (i = !1);
          if (T >= S) {
            const k = m((T - S) / _);
            v(k, 1 - k);
          }
        }
        return i;
      }));
  }
  let h = !1;
  return {
    start() {
      h || ((h = !0), Qt(t), wt(s) ? ((s = s(r)), Fn().then(f)) : f());
    },
    invalidate() {
      h = !1;
    },
    end() {
      i && (c(), (i = !1));
    },
  };
}
function Dn(t, e, n) {
  const r = { direction: "out" };
  let s = e(t, n, r),
    i = !0,
    l;
  const o = De;
  o.r += 1;
  let a;
  function c() {
    const {
      delay: f = 0,
      duration: h = 300,
      easing: d = dn,
      tick: _ = L,
      css: m,
    } = s || Ln;
    m && (l = Jt(t, 1, 0, h, f, d, m));
    const v = Nn() + f,
      b = v + h;
    xe(() => nt(t, !1, "start")),
      "inert" in t && ((a = t.inert), (t.inert = !0)),
      On((S) => {
        if (i) {
          if (S >= b) return _(0, 1), nt(t, !1, "end"), --o.r || Te(o.c), !1;
          if (S >= v) {
            const O = d((S - v) / h);
            _(1 - O, O);
          }
        }
        return i;
      });
  }
  return (
    wt(s)
      ? Fn().then(() => {
          (s = s(r)), c();
        })
      : c(),
    {
      end(f) {
        f && "inert" in t && (t.inert = a),
          f && s.tick && s.tick(1, 0),
          i && (l && Qt(t, l), (i = !1));
      },
    }
  );
}
function en(t, e, n, r) {
  let i = e(t, n, { direction: "both" }),
    l = r ? 0 : 1,
    o = null,
    a = null,
    c = null,
    f;
  function h() {
    c && Qt(t, c);
  }
  function d(m, v) {
    const b = m.b - l;
    return (
      (v *= Math.abs(b)),
      {
        a: l,
        b: m.b,
        d: b,
        duration: v,
        start: m.start,
        end: m.start + v,
        group: m.group,
      }
    );
  }
  function _(m) {
    const {
        delay: v = 0,
        duration: b = 300,
        easing: S = dn,
        tick: O = L,
        css: T,
      } = i || Ln,
      k = { start: Nn() + v, b: m };
    m || ((k.group = De), (De.r += 1)),
      "inert" in t &&
        (m ? f !== void 0 && (t.inert = f) : ((f = t.inert), (t.inert = !0))),
      o || a
        ? (a = k)
        : (T && (h(), (c = Jt(t, l, m, b, v, S, T))),
          m && O(0, 1),
          (o = d(k, b)),
          xe(() => nt(t, m, "start")),
          On((C) => {
            if (
              (a &&
                C > a.start &&
                ((o = d(a, b)),
                (a = null),
                nt(t, o.b, "start"),
                T && (h(), (c = Jt(t, l, o.b, o.duration, 0, S, i.css)))),
              o)
            ) {
              if (C >= o.end)
                O((l = o.b), 1 - l),
                  nt(t, o.b, "end"),
                  a || (o.b ? h() : --o.group.r || Te(o.group.c)),
                  (o = null);
              else if (C >= o.start) {
                const E = C - o.start;
                (l = o.a + o.d * S(E / o.duration)), O(l, 1 - l);
              }
            }
            return !!(o || a);
          }));
  }
  return {
    run(m) {
      wt(i)
        ? Fn().then(() => {
            (i = i({ direction: m ? "in" : "out" })), _(m);
          })
        : _(m);
    },
    end() {
      h(), (o = a = null);
    },
  };
}
function ai(t, e) {
  const n = (e.token = {});
  function r(s, i, l, o) {
    if (e.token !== n) return;
    e.resolved = o;
    let a = e.ctx;
    l !== void 0 && ((a = a.slice()), (a[l] = o));
    const c = s && (e.current = s)(a);
    let f = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((h, d) => {
            d !== i &&
              h &&
              (me(),
              N(h, 1, 1, () => {
                e.blocks[d] === h && (e.blocks[d] = null);
              }),
              _e());
          })
        : e.block.d(1),
      c.c(),
      P(c, 1),
      c.m(e.mount(), e.anchor),
      (f = !0)),
      (e.block = c),
      e.blocks && (e.blocks[i] = c),
      f && Rn();
  }
  if (Vs(t)) {
    const s = Dt();
    if (
      (t.then(
        (i) => {
          We(s), r(e.then, 1, e.value, i), We(null);
        },
        (i) => {
          if ((We(s), r(e.catch, 2, e.error, i), We(null), !e.hasCatch))
            throw i;
        },
      ),
      e.current !== e.pending)
    )
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ci(t, e, n) {
  const r = e.slice(),
    { resolved: s } = t;
  t.current === t.then && (r[t.value] = s),
    t.current === t.catch && (r[t.error] = s),
    t.block.p(r, n);
}
function ct(t) {
  return t?.length !== void 0 ? t : Array.from(t);
}
function ui(t, e) {
  N(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function fi(t, e, n, r, s, i, l, o, a, c, f, h) {
  let d = t.length,
    _ = i.length,
    m = d;
  const v = {};
  for (; m--; ) v[t[m].key] = m;
  const b = [],
    S = new Map(),
    O = new Map(),
    T = [];
  for (m = _; m--; ) {
    const A = h(s, i, m),
      F = n(A);
    let x = l.get(F);
    x ? T.push(() => x.p(A, e)) : ((x = c(F, A)), x.c()),
      S.set(F, (b[m] = x)),
      F in v && O.set(F, Math.abs(m - v[F]));
  }
  const k = new Set(),
    C = new Set();
  function E(A) {
    P(A, 1), A.m(o, f), l.set(A.key, A), (f = A.first), _--;
  }
  for (; d && _; ) {
    const A = b[_ - 1],
      F = t[d - 1],
      x = A.key,
      j = F.key;
    A === F
      ? ((f = A.first), d--, _--)
      : S.has(j)
        ? !l.has(x) || k.has(x)
          ? E(A)
          : C.has(j)
            ? d--
            : O.get(x) > O.get(j)
              ? (C.add(x), E(A))
              : (k.add(j), d--)
        : (a(F, l), d--);
  }
  for (; d--; ) {
    const A = t[d];
    S.has(A.key) || a(A, l);
  }
  for (; _; ) E(b[_ - 1]);
  return Te(T), b;
}
function q(t) {
  t && t.c();
}
function K(t, e) {
  t && t.l(e);
}
function V(t, e, n) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n),
    xe(() => {
      const i = t.$$.on_mount.map(Ur).filter(wt);
      t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Te(i),
        (t.$$.on_mount = []);
    }),
    s.forEach(xe);
}
function U(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (oi(n.after_update),
    Te(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function di(t, e) {
  t.$$.dirty[0] === -1 && (at.push(t), ns(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ee(t, e, n, r, s, i, l = null, o = [-1]) {
  const a = It;
  We(t);
  const c = (t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: L,
    not_equal: s,
    bound: Qn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: Qn(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root,
  });
  l && l(c.root);
  let f = !1;
  if (
    ((c.ctx = n
      ? n(t, e.props || {}, (h, d, ..._) => {
          const m = _.length ? _[0] : d;
          return (
            c.ctx &&
              s(c.ctx[h], (c.ctx[h] = m)) &&
              (!c.skip_bound && c.bound[h] && c.bound[h](m), f && di(t, h)),
            d
          );
        })
      : []),
    c.update(),
    (f = !0),
    Te(c.before_update),
    (c.fragment = r ? r(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      Ks();
      const h = y(e.target);
      c.fragment && c.fragment.l(h), h.forEach(p);
    } else c.fragment && c.fragment.c();
    e.intro && P(t.$$.fragment), V(t, e.target, e.anchor), Ws(), Rn();
  }
  We(a);
}
class te {
  constructor() {
    He(this, "$$");
    He(this, "$$set");
  }
  $destroy() {
    U(this, 1), (this.$destroy = L);
  }
  $on(e, n) {
    if (!wt(n)) return L;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const s = r.indexOf(n);
        s !== -1 && r.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Us(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const hi = "4";
new URL("sveltekit-internal://");
function pi(t, e) {
  return t === "/" || e === "ignore"
    ? t
    : e === "never"
      ? t.endsWith("/")
        ? t.slice(0, -1)
        : t
      : e === "always" && !t.endsWith("/")
        ? t + "/"
        : t;
}
function mi(t) {
  return t.split("%25").map(decodeURI).join("%25");
}
function _i(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t;
}
function $n({ href: t }) {
  return t.split("#")[0];
}
const gi = ["href", "pathname", "search", "toString", "toJSON"];
function vi(t, e, n) {
  const r = new URL(t);
  Object.defineProperty(r, "searchParams", {
    value: new Proxy(r.searchParams, {
      get(s, i) {
        if (i === "get" || i === "getAll" || i === "has")
          return (o) => (n(o), s[i](o));
        e();
        const l = Reflect.get(s, i);
        return typeof l == "function" ? l.bind(s) : l;
      },
    }),
    enumerable: !0,
    configurable: !0,
  });
  for (const s of gi)
    Object.defineProperty(r, s, {
      get() {
        return e(), t[s];
      },
      enumerable: !0,
      configurable: !0,
    });
  return r;
}
const bi = "/__data.json",
  yi = ".html__data.json";
function wi(t) {
  return t.endsWith(".html")
    ? t.replace(/\.html$/, yi)
    : t.replace(/\/$/, "") + bi;
}
function $i(...t) {
  let e = 5381;
  for (const n of t)
    if (typeof n == "string") {
      let r = n.length;
      for (; r; ) e = (e * 33) ^ n.charCodeAt(--r);
    } else if (ArrayBuffer.isView(n)) {
      const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      let s = r.length;
      for (; s; ) e = (e * 33) ^ r[--s];
    } else throw new TypeError("value must be a string or TypedArray");
  return (e >>> 0).toString(36);
}
var Za =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Ja(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function ki(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
  return n.buffer;
}
const ss = window.fetch;
window.fetch = (t, e) => (
  (t instanceof Request ? t.method : e?.method || "GET") !== "GET" &&
    Nt.delete(Mn(t)),
  ss(t, e)
);
const Nt = new Map();
function Ei(t, e) {
  const n = Mn(t, e),
    r = document.querySelector(n);
  if (r?.textContent) {
    let { body: s, ...i } = JSON.parse(r.textContent);
    const l = r.getAttribute("data-ttl");
    return (
      l && Nt.set(n, { body: s, init: i, ttl: 1e3 * Number(l) }),
      r.getAttribute("data-b64") !== null && (s = ki(s)),
      Promise.resolve(new Response(s, i))
    );
  }
  return window.fetch(t, e);
}
function Ai(t, e, n) {
  if (Nt.size > 0) {
    const r = Mn(t, n),
      s = Nt.get(r);
    if (s) {
      if (
        performance.now() < s.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(n?.cache)
      )
        return new Response(s.body, s.init);
      Nt.delete(r);
    }
  }
  return window.fetch(e, n);
}
function Mn(t, e) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request ? t.url : t)}]`;
  if (e?.headers || e?.body) {
    const s = [];
    e.headers && s.push([...new Headers(e.headers)].join(",")),
      e.body &&
        (typeof e.body == "string" || ArrayBuffer.isView(e.body)) &&
        s.push(e.body),
      (r += `[data-hash="${$i(...s)}"]`);
  }
  return r;
}
const Ci = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Ti(t) {
  const e = [];
  return {
    pattern:
      t === "/"
        ? /^\/$/
        : new RegExp(
            `^${Si(t)
              .map((r) => {
                const s = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
                if (s)
                  return (
                    e.push({
                      name: s[1],
                      matcher: s[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const i = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
                if (i)
                  return (
                    e.push({
                      name: i[1],
                      matcher: i[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!r) return;
                const l = r.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  l
                    .map((a, c) => {
                      if (c % 2) {
                        if (a.startsWith("x+"))
                          return kn(
                            String.fromCharCode(parseInt(a.slice(2), 16)),
                          );
                        if (a.startsWith("u+"))
                          return kn(
                            String.fromCharCode(
                              ...a
                                .slice(2)
                                .split("-")
                                .map((v) => parseInt(v, 16)),
                            ),
                          );
                        const f = Ci.exec(a),
                          [, h, d, _, m] = f;
                        return (
                          e.push({
                            name: _,
                            matcher: m,
                            optional: !!h,
                            rest: !!d,
                            chained: d ? c === 1 && l[0] === "" : !1,
                          }),
                          d ? "(.*?)" : h ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return kn(a);
                    })
                    .join("")
                );
              })
              .join("")}/?$`,
          ),
    params: e,
  };
}
function Pi(t) {
  return !/^\([^)]+\)$/.test(t);
}
function Si(t) {
  return t.slice(1).split("/").filter(Pi);
}
function Ni(t, e, n) {
  const r = {},
    s = t.slice(1),
    i = s.filter((o) => o !== void 0);
  let l = 0;
  for (let o = 0; o < e.length; o += 1) {
    const a = e[o];
    let c = s[o - l];
    if (
      (a.chained &&
        a.rest &&
        l &&
        ((c = s
          .slice(o - l, o + 1)
          .filter((f) => f)
          .join("/")),
        (l = 0)),
      c === void 0)
    ) {
      a.rest && (r[a.name] = "");
      continue;
    }
    if (!a.matcher || n[a.matcher](c)) {
      r[a.name] = c;
      const f = e[o + 1],
        h = s[o + 1];
      f && !f.rest && f.optional && h && a.chained && (l = 0),
        !f && !h && Object.keys(r).length === i.length && (l = 0);
      continue;
    }
    if (a.optional && a.chained) {
      l++;
      continue;
    }
    return;
  }
  if (!l) return r;
}
function kn(t) {
  return t
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function xi({ nodes: t, server_loads: e, dictionary: n, matchers: r }) {
  const s = new Set(e);
  return Object.entries(n).map(([o, [a, c, f]]) => {
    const { pattern: h, params: d } = Ti(o),
      _ = {
        id: o,
        exec: (m) => {
          const v = h.exec(m);
          if (v) return Ni(v, d, r);
        },
        errors: [1, ...(f || [])].map((m) => t[m]),
        layouts: [0, ...(c || [])].map(l),
        leaf: i(a),
      };
    return (
      (_.errors.length = _.layouts.length =
        Math.max(_.errors.length, _.layouts.length)),
      _
    );
  });
  function i(o) {
    const a = o < 0;
    return a && (o = ~o), [a, t[o]];
  }
  function l(o) {
    return o === void 0 ? o : [s.has(o), t[o]];
  }
}
function is(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t]);
  } catch {}
}
function ir(t, e, n = JSON.stringify) {
  const r = n(e);
  try {
    sessionStorage[t] = r;
  } catch {}
}
const it = [];
function ls(t, e) {
  return { subscribe: Fe(t, e).subscribe };
}
function Fe(t, e = L) {
  let n;
  const r = new Set();
  function s(o) {
    if (Q(t, o) && ((t = o), n)) {
      const a = !it.length;
      for (const c of r) c[1](), it.push(c, t);
      if (a) {
        for (let c = 0; c < it.length; c += 2) it[c][0](it[c + 1]);
        it.length = 0;
      }
    }
  }
  function i(o) {
    s(o(t));
  }
  function l(o, a = L) {
    const c = [o, a];
    return (
      r.add(c),
      r.size === 1 && (n = e(s, i) || L),
      o(t),
      () => {
        r.delete(c), r.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: s, update: i, subscribe: l };
}
function kt(t, e, n) {
  const r = !Array.isArray(t),
    s = r ? [t] : t;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return ls(n, (l, o) => {
    let a = !1;
    const c = [];
    let f = 0,
      h = L;
    const d = () => {
        if (f) return;
        h();
        const m = e(r ? c[0] : c, l, o);
        i ? l(m) : (h = wt(m) ? m : L);
      },
      _ = s.map((m, v) =>
        Hr(
          m,
          (b) => {
            (c[v] = b), (f &= ~(1 << v)), a && d();
          },
          () => {
            f |= 1 << v;
          },
        ),
      );
    return (
      (a = !0),
      d(),
      function () {
        Te(_), h(), (a = !1);
      }
    );
  });
}
const Re = globalThis.__sveltekit_1g3xn24?.base ?? "",
  Oi = globalThis.__sveltekit_1g3xn24?.assets ?? Re,
  Ii = "1718502856903",
  os = "sveltekit:snapshot",
  as = "sveltekit:scroll",
  cs = "sveltekit:states",
  Ri = "sveltekit:pageurl",
  pt = "sveltekit:history",
  Rt = "sveltekit:navigation",
  tn = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
  Mt = location.origin;
function us(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL;
  }
  return new URL(t, e);
}
function jn() {
  return { x: pageXOffset, y: pageYOffset };
}
function lt(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`);
}
const lr = { ...tn, "": tn.hover };
function fs(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return e?.nodeType === 11 && (e = e.host), e;
}
function ds(t, e) {
  for (; t && t !== e; ) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = fs(t);
  }
}
function Tn(t, e) {
  let n;
  try {
    n = new URL(
      t instanceof SVGAElement ? t.href.baseVal : t.href,
      document.baseURI,
    );
  } catch {}
  const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
    s =
      !n ||
      !!r ||
      mn(n, e) ||
      (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    i = n?.origin === Mt && t.hasAttribute("download");
  return { url: n, external: s, target: r, download: i };
}
function nn(t) {
  let e = null,
    n = null,
    r = null,
    s = null,
    i = null,
    l = null,
    o = t;
  for (; o && o !== document.documentElement; )
    r === null && (r = lt(o, "preload-code")),
      s === null && (s = lt(o, "preload-data")),
      e === null && (e = lt(o, "keepfocus")),
      n === null && (n = lt(o, "noscroll")),
      i === null && (i = lt(o, "reload")),
      l === null && (l = lt(o, "replacestate")),
      (o = fs(o));
  function a(c) {
    switch (c) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return;
    }
  }
  return {
    preload_code: lr[r ?? "off"],
    preload_data: lr[s ?? "off"],
    keepfocus: a(e),
    noscroll: a(n),
    reload: a(i),
    replace_state: a(l),
  };
}
function or(t) {
  const e = Fe(t);
  let n = !0;
  function r() {
    (n = !0), e.update((l) => l);
  }
  function s(l) {
    (n = !1), e.set(l);
  }
  function i(l) {
    let o;
    return e.subscribe((a) => {
      (o === void 0 || (n && a !== o)) && l((o = a));
    });
  }
  return { notify: r, set: s, subscribe: i };
}
function Fi() {
  const { set: t, subscribe: e } = Fe(!1);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const s = await fetch(`${Oi}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!s.ok) return !1;
      const l = (await s.json()).version !== Ii;
      return l && (t(!0), clearTimeout(n)), l;
    } catch {
      return !1;
    }
  }
  return { subscribe: e, check: r };
}
function mn(t, e) {
  return t.origin !== Mt || !t.pathname.startsWith(e);
}
const hs = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...hs];
const Li = new Set([...hs]);
[...Li];
function Di(t) {
  return t.filter((e) => e != null);
}
class _n {
  constructor(e, n) {
    (this.status = e),
      typeof n == "string"
        ? (this.body = { message: n })
        : n
          ? (this.body = n)
          : (this.body = { message: `Error: ${e}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class ps {
  constructor(e, n) {
    (this.status = e), (this.location = n);
  }
}
class Bn extends Error {
  constructor(e, n, r) {
    super(r), (this.status = e), (this.text = n);
  }
}
const Mi = "x-sveltekit-invalidated",
  ji = "x-sveltekit-trailing-slash";
function rn(t) {
  return t instanceof _n || t instanceof Bn ? t.status : 500;
}
function Bi(t) {
  return t instanceof Bn ? t.text : "Internal Error";
}
const rt = is(as) ?? {},
  Ft = is(os) ?? {},
  Xe = { url: or({}), page: or({}), navigating: Fe(null), updated: Fi() };
function zn(t) {
  rt[t] = jn();
}
function zi(t, e) {
  let n = t + 1;
  for (; rt[n]; ) delete rt[n], (n += 1);
  for (n = e + 1; Ft[n]; ) delete Ft[n], (n += 1);
}
function yt(t) {
  return (location.href = t.href), new Promise(() => {});
}
function ar() {}
let gn, Pn, sn, Ke, Sn, Et;
const ms = [],
  ln = [];
let Ze = null;
const _s = [],
  Vi = [];
let ut = [],
  re = { branch: [], error: null, url: null },
  Vn = !1,
  on = !1,
  cr = !0,
  Lt = !1,
  St = !1,
  gs = !1,
  Un = !1,
  Hn,
  ve,
  Ne,
  Se,
  an;
const xt = new Set();
async function Qa(t, e, n) {
  document.URL !== location.href && (location.href = location.href),
    (Et = t),
    (gn = xi(t)),
    (Ke = document.documentElement),
    (Sn = e),
    (Pn = t.nodes[0]),
    (sn = t.nodes[1]),
    Pn(),
    sn(),
    (ve = history.state?.[pt]),
    (Ne = history.state?.[Rt]),
    ve ||
      ((ve = Ne = Date.now()),
      history.replaceState({ ...history.state, [pt]: ve, [Rt]: Ne }, ""));
  const r = rt[ve];
  r && ((history.scrollRestoration = "manual"), scrollTo(r.x, r.y)),
    n ? await Gi(Sn, n) : Cs(location.href, { replaceState: !0 }),
    Xi();
}
function Ui() {
  (ms.length = 0), (Un = !1);
}
function vs(t) {
  ln.some((e) => e?.snapshot) &&
    (Ft[t] = ln.map((e) => e?.snapshot?.capture()));
}
function bs(t) {
  Ft[t]?.forEach((e, n) => {
    ln[n]?.snapshot?.restore(e);
  });
}
function ur() {
  zn(ve), ir(as, rt), vs(Ne), ir(os, Ft);
}
async function ys(t, e, n, r) {
  return Gt({
    type: "goto",
    url: us(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: r,
    accept: () => {
      e.invalidateAll && (Un = !0);
    },
  });
}
async function Hi(t) {
  if (t.id !== Ze?.id) {
    const e = {};
    xt.add(e),
      (Ze = {
        id: t.id,
        token: e,
        promise: $s({ ...t, preload: e }).then(
          (n) => (
            xt.delete(e), n.type === "loaded" && n.state.error && (Ze = null), n
          ),
        ),
      });
  }
  return Ze.promise;
}
async function En(t) {
  const e = gn.find((n) => n.exec(ks(t)));
  e && (await Promise.all([...e.layouts, e.leaf].map((n) => n?.[1]())));
}
function ws(t, e, n) {
  re = t.state;
  const r = document.querySelector("style[data-sveltekit]");
  r && r.remove(),
    (Se = t.props.page),
    (Hn = new Et.root({
      target: e,
      props: { ...t.props, stores: Xe, components: ln },
      hydrate: n,
    })),
    bs(Ne);
  const s = {
    from: null,
    to: {
      params: re.params,
      route: { id: re.route?.id ?? null },
      url: new URL(location.href),
    },
    willUnload: !1,
    type: "enter",
    complete: Promise.resolve(),
  };
  ut.forEach((i) => i(s)), (on = !0);
}
async function cn({
  url: t,
  params: e,
  branch: n,
  status: r,
  error: s,
  route: i,
  form: l,
}) {
  let o = "never";
  if (Re && (t.pathname === Re || t.pathname === Re + "/")) o = "always";
  else for (const _ of n) _?.slash !== void 0 && (o = _.slash);
  (t.pathname = pi(t.pathname, o)), (t.search = t.search);
  const a = {
    type: "loaded",
    state: { url: t, params: e, branch: n, error: s, route: i },
    props: { constructors: Di(n).map((_) => _.node.component), page: Se },
  };
  l !== void 0 && (a.props.form = l);
  let c = {},
    f = !Se,
    h = 0;
  for (let _ = 0; _ < Math.max(n.length, re.branch.length); _ += 1) {
    const m = n[_],
      v = re.branch[_];
    m?.data !== v?.data && (f = !0),
      m &&
        ((c = { ...c, ...m.data }), f && (a.props[`data_${h}`] = c), (h += 1));
  }
  return (
    (!re.url ||
      t.href !== re.url.href ||
      re.error !== s ||
      (l !== void 0 && l !== Se.form) ||
      f) &&
      (a.props.page = {
        error: s,
        params: e,
        route: { id: i?.id ?? null },
        state: {},
        status: r,
        url: new URL(t),
        form: l ?? null,
        data: f ? c : Se.data,
      }),
    a
  );
}
async function qn({
  loader: t,
  parent: e,
  url: n,
  params: r,
  route: s,
  server_data_node: i,
}) {
  let l = null,
    o = !0;
  const a = {
      dependencies: new Set(),
      params: new Set(),
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set(),
    },
    c = await t();
  if (c.universal?.load) {
    let f = function (...d) {
      for (const _ of d) {
        const { href: m } = new URL(_, n);
        a.dependencies.add(m);
      }
    };
    const h = {
      route: new Proxy(s, { get: (d, _) => (o && (a.route = !0), d[_]) }),
      params: new Proxy(r, { get: (d, _) => (o && a.params.add(_), d[_]) }),
      data: i?.data ?? null,
      url: vi(
        n,
        () => {
          o && (a.url = !0);
        },
        (d) => {
          o && a.search_params.add(d);
        },
      ),
      async fetch(d, _) {
        let m;
        d instanceof Request
          ? ((m = d.url),
            (_ = {
              body:
                d.method === "GET" || d.method === "HEAD"
                  ? void 0
                  : await d.blob(),
              cache: d.cache,
              credentials: d.credentials,
              headers: d.headers,
              integrity: d.integrity,
              keepalive: d.keepalive,
              method: d.method,
              mode: d.mode,
              redirect: d.redirect,
              referrer: d.referrer,
              referrerPolicy: d.referrerPolicy,
              signal: d.signal,
              ..._,
            }))
          : (m = d);
        const v = new URL(m, n);
        return (
          o && f(v.href),
          v.origin === n.origin && (m = v.href.slice(n.origin.length)),
          on ? Ai(m, v.href, _) : Ei(m, _)
        );
      },
      setHeaders: () => {},
      depends: f,
      parent() {
        return o && (a.parent = !0), e();
      },
      untrack(d) {
        o = !1;
        try {
          return d();
        } finally {
          o = !0;
        }
      },
    };
    l = (await c.universal.load.call(null, h)) ?? null;
  }
  return {
    node: c,
    loader: t,
    server: i,
    universal: c.universal?.load ? { type: "data", data: l, uses: a } : null,
    data: l ?? i?.data ?? null,
    slash: c.universal?.trailingSlash ?? i?.slash,
  };
}
function fr(t, e, n, r, s, i) {
  if (Un) return !0;
  if (!s) return !1;
  if ((s.parent && t) || (s.route && e) || (s.url && n)) return !0;
  for (const l of s.search_params) if (r.has(l)) return !0;
  for (const l of s.params) if (i[l] !== re.params[l]) return !0;
  for (const l of s.dependencies) if (ms.some((o) => o(new URL(l)))) return !0;
  return !1;
}
function Kn(t, e) {
  return t?.type === "data" ? t : t?.type === "skip" ? e ?? null : null;
}
function qi(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const r of n) {
    const s = t.searchParams.getAll(r),
      i = e.searchParams.getAll(r);
    s.every((l) => i.includes(l)) &&
      i.every((l) => s.includes(l)) &&
      n.delete(r);
  }
  return n;
}
function dr({ error: t, url: e, route: n, params: r }) {
  return {
    type: "loaded",
    state: { error: t, url: e, route: n, params: r, branch: [] },
    props: { page: Se, constructors: [] },
  };
}
async function $s({
  id: t,
  invalidating: e,
  url: n,
  params: r,
  route: s,
  preload: i,
}) {
  if (Ze?.id === t) return xt.delete(Ze.token), Ze.promise;
  const { errors: l, layouts: o, leaf: a } = s,
    c = [...o, a];
  l.forEach((k) => k?.().catch(() => {})),
    c.forEach((k) => k?.[1]().catch(() => {}));
  let f = null;
  const h = re.url ? t !== re.url.pathname + re.url.search : !1,
    d = re.route ? s.id !== re.route.id : !1,
    _ = qi(re.url, n);
  let m = !1;
  const v = c.map((k, C) => {
    const E = re.branch[C],
      A = !!k?.[0] && (E?.loader !== k[1] || fr(m, d, h, _, E.server?.uses, r));
    return A && (m = !0), A;
  });
  if (v.some(Boolean)) {
    try {
      f = await Ts(n, v);
    } catch (k) {
      const C = await mt(k, { url: n, params: r, route: { id: t } });
      return xt.has(i)
        ? dr({ error: C, url: n, params: r, route: s })
        : vn({ status: rn(k), error: C, url: n, route: s });
    }
    if (f.type === "redirect") return f;
  }
  const b = f?.nodes;
  let S = !1;
  const O = c.map(async (k, C) => {
    if (!k) return;
    const E = re.branch[C],
      A = b?.[C];
    if (
      (!A || A.type === "skip") &&
      k[1] === E?.loader &&
      !fr(S, d, h, _, E.universal?.uses, r)
    )
      return E;
    if (((S = !0), A?.type === "error")) throw A;
    return qn({
      loader: k[1],
      url: n,
      params: r,
      route: s,
      parent: async () => {
        const x = {};
        for (let j = 0; j < C; j += 1) Object.assign(x, (await O[j])?.data);
        return x;
      },
      server_data_node: Kn(
        A === void 0 && k[0] ? { type: "skip" } : A ?? null,
        k[0] ? E?.server : void 0,
      ),
    });
  });
  for (const k of O) k.catch(() => {});
  const T = [];
  for (let k = 0; k < c.length; k += 1)
    if (c[k])
      try {
        T.push(await O[k]);
      } catch (C) {
        if (C instanceof ps) return { type: "redirect", location: C.location };
        if (xt.has(i))
          return dr({
            error: await mt(C, { params: r, url: n, route: { id: s.id } }),
            url: n,
            params: r,
            route: s,
          });
        let E = rn(C),
          A;
        if (b?.includes(C)) (E = C.status ?? E), (A = C.error);
        else if (C instanceof _n) A = C.body;
        else {
          if (await Xe.updated.check()) return await yt(n);
          A = await mt(C, { params: r, url: n, route: { id: s.id } });
        }
        const F = await Ki(k, T, l);
        return F
          ? await cn({
              url: n,
              params: r,
              branch: T.slice(0, F.idx).concat(F.node),
              status: E,
              error: A,
              route: s,
            })
          : await As(n, { id: s.id }, A, E);
      }
    else T.push(void 0);
  return await cn({
    url: n,
    params: r,
    branch: T,
    status: 200,
    error: null,
    route: s,
    form: e ? void 0 : null,
  });
}
async function Ki(t, e, n) {
  for (; t--; )
    if (n[t]) {
      let r = t;
      for (; !e[r]; ) r -= 1;
      try {
        return {
          idx: r + 1,
          node: {
            node: await n[t](),
            loader: n[t],
            data: {},
            server: null,
            universal: null,
          },
        };
      } catch {
        continue;
      }
    }
}
async function vn({ status: t, error: e, url: n, route: r }) {
  const s = {};
  let i = null;
  if (Et.server_loads[0] === 0)
    try {
      const c = await Ts(n, [!0]);
      if (c.type !== "data" || (c.nodes[0] && c.nodes[0].type !== "data"))
        throw 0;
      i = c.nodes[0] ?? null;
    } catch {
      (n.origin !== Mt || n.pathname !== location.pathname || Vn) &&
        (await yt(n));
    }
  const o = await qn({
      loader: Pn,
      url: n,
      params: s,
      route: r,
      parent: () => Promise.resolve({}),
      server_data_node: Kn(i),
    }),
    a = {
      node: await sn(),
      loader: sn,
      universal: null,
      server: null,
      data: null,
    };
  return await cn({
    url: n,
    params: s,
    branch: [o, a],
    status: t,
    error: e,
    route: null,
  });
}
function Wn(t, e) {
  if (!t || mn(t, Re)) return;
  let n;
  try {
    n = Et.hooks.reroute({ url: new URL(t) }) ?? t.pathname;
  } catch {
    return;
  }
  const r = ks(n);
  for (const s of gn) {
    const i = s.exec(r);
    if (i)
      return {
        id: t.pathname + t.search,
        invalidating: e,
        route: s,
        params: _i(i),
        url: t,
      };
  }
}
function ks(t) {
  return mi(t.slice(Re.length) || "/");
}
function Es({ url: t, type: e, intent: n, delta: r }) {
  let s = !1;
  const i = Ss(re, n, t, e);
  r !== void 0 && (i.navigation.delta = r);
  const l = {
    ...i.navigation,
    cancel: () => {
      (s = !0), i.reject(new Error("navigation cancelled"));
    },
  };
  return Lt || _s.forEach((o) => o(l)), s ? null : i;
}
async function Gt({
  type: t,
  url: e,
  popped: n,
  keepfocus: r,
  noscroll: s,
  replace_state: i,
  state: l = {},
  redirect_count: o = 0,
  nav_token: a = {},
  accept: c = ar,
  block: f = ar,
}) {
  const h = Wn(e, !1),
    d = Es({ url: e, type: t, delta: n?.delta, intent: h });
  if (!d) {
    f();
    return;
  }
  const _ = ve,
    m = Ne;
  c(), (Lt = !0), on && Xe.navigating.set(d.navigation), (an = a);
  let v = h && (await $s(h));
  if (!v) {
    if (mn(e, Re)) return await yt(e);
    v = await As(
      e,
      { id: null },
      await mt(new Bn(404, "Not Found", `Not found: ${e.pathname}`), {
        url: e,
        params: {},
        route: { id: null },
      }),
      404,
    );
  }
  if (((e = h?.url || e), an !== a))
    return d.reject(new Error("navigation aborted")), !1;
  if (v.type === "redirect")
    if (o >= 20)
      v = await vn({
        status: 500,
        error: await mt(new Error("Redirect loop"), {
          url: e,
          params: {},
          route: { id: null },
        }),
        url: e,
        route: { id: null },
      });
    else return ys(new URL(v.location, e).href, {}, o + 1, a), !1;
  else
    v.props.page.status >= 400 && (await Xe.updated.check()) && (await yt(e));
  if (
    (Ui(),
    zn(_),
    vs(m),
    v.props.page.url.pathname !== e.pathname &&
      (e.pathname = v.props.page.url.pathname),
    (l = n ? n.state : l),
    !n)
  ) {
    const T = i ? 0 : 1,
      k = { [pt]: (ve += T), [Rt]: (Ne += T), [cs]: l };
    (i ? history.replaceState : history.pushState).call(history, k, "", e),
      i || zi(ve, Ne);
  }
  if (((Ze = null), (v.props.page.state = l), on)) {
    (re = v.state), v.props.page && (v.props.page.url = e);
    const T = (await Promise.all(Vi.map((k) => k(d.navigation)))).filter(
      (k) => typeof k == "function",
    );
    if (T.length > 0) {
      let k = function () {
        ut = ut.filter((C) => !T.includes(C));
      };
      T.push(k), ut.push(...T);
    }
    Hn.$set(v.props), (gs = !0);
  } else ws(v, Sn, !1);
  const { activeElement: b } = document;
  await rs();
  const S = n ? n.scroll : s ? jn() : null;
  if (cr) {
    const T =
      e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
    S ? scrollTo(S.x, S.y) : T ? T.scrollIntoView() : scrollTo(0, 0);
  }
  const O =
    document.activeElement !== b && document.activeElement !== document.body;
  !r && !O && Yi(),
    (cr = !0),
    v.props.page && (Se = v.props.page),
    (Lt = !1),
    t === "popstate" && bs(Ne),
    d.fulfil(void 0),
    ut.forEach((T) => T(d.navigation)),
    Xe.navigating.set(null);
}
async function As(t, e, n, r) {
  return t.origin === Mt && t.pathname === location.pathname && !Vn
    ? await vn({ status: r, error: n, url: t, route: e })
    : await yt(t);
}
function Wi() {
  let t;
  Ke.addEventListener("mousemove", (i) => {
    const l = i.target;
    clearTimeout(t),
      (t = setTimeout(() => {
        r(l, 2);
      }, 20));
  });
  function e(i) {
    r(i.composedPath()[0], 1);
  }
  Ke.addEventListener("mousedown", e),
    Ke.addEventListener("touchstart", e, { passive: !0 });
  const n = new IntersectionObserver(
    (i) => {
      for (const l of i)
        l.isIntersecting && (En(l.target.href), n.unobserve(l.target));
    },
    { threshold: 0 },
  );
  function r(i, l) {
    const o = ds(i, Ke);
    if (!o) return;
    const { url: a, external: c, download: f } = Tn(o, Re);
    if (c || f) return;
    const h = nn(o);
    if (!h.reload)
      if (l <= h.preload_data) {
        const d = Wn(a, !1);
        d && Hi(d);
      } else l <= h.preload_code && En(a.pathname);
  }
  function s() {
    n.disconnect();
    for (const i of Ke.querySelectorAll("a")) {
      const { url: l, external: o, download: a } = Tn(i, Re);
      if (o || a) continue;
      const c = nn(i);
      c.reload ||
        (c.preload_code === tn.viewport && n.observe(i),
        c.preload_code === tn.eager && En(l.pathname));
    }
  }
  ut.push(s), s();
}
function mt(t, e) {
  if (t instanceof _n) return t.body;
  const n = rn(t),
    r = Bi(t);
  return (
    Et.hooks.handleError({ error: t, event: e, status: n, message: r }) ?? {
      message: r,
    }
  );
}
function Cs(t, e = {}) {
  return (
    (t = us(t)),
    t.origin !== Mt
      ? Promise.reject(new Error("goto: invalid URL"))
      : ys(t, e, 0)
  );
}
function Xi() {
  (history.scrollRestoration = "manual"),
    addEventListener("beforeunload", (e) => {
      let n = !1;
      if ((ur(), !Lt)) {
        const r = Ss(re, void 0, null, "leave"),
          s = {
            ...r.navigation,
            cancel: () => {
              (n = !0), r.reject(new Error("navigation cancelled"));
            },
          };
        _s.forEach((i) => i(s));
      }
      n
        ? (e.preventDefault(), (e.returnValue = ""))
        : (history.scrollRestoration = "auto");
    }),
    addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && ur();
    }),
    navigator.connection?.saveData || Wi(),
    Ke.addEventListener("click", async (e) => {
      if (
        e.button ||
        e.which !== 1 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      )
        return;
      const n = ds(e.composedPath()[0], Ke);
      if (!n) return;
      const { url: r, external: s, target: i, download: l } = Tn(n, Re);
      if (!r) return;
      if (i === "_parent" || i === "_top") {
        if (window.parent !== window) return;
      } else if (i && i !== "_self") return;
      const o = nn(n);
      if (
        (!(n instanceof SVGAElement) &&
          r.protocol !== location.protocol &&
          !(r.protocol === "https:" || r.protocol === "http:")) ||
        l
      )
        return;
      if (s || o.reload) {
        Es({ url: r, type: "link" }) ? (Lt = !0) : e.preventDefault();
        return;
      }
      const [c, f] = r.href.split("#");
      if (f !== void 0 && c === $n(location)) {
        const [, h] = re.url.href.split("#");
        if (h === f) {
          e.preventDefault(),
            f === "" ||
            (f === "top" && n.ownerDocument.getElementById("top") === null)
              ? window.scrollTo({ top: 0 })
              : n.ownerDocument.getElementById(f)?.scrollIntoView();
          return;
        }
        if (((St = !0), zn(ve), t(r), !o.replace_state)) return;
        St = !1;
      }
      e.preventDefault(),
        await new Promise((h) => {
          requestAnimationFrame(() => {
            setTimeout(h, 0);
          }),
            setTimeout(h, 100);
        }),
        Gt({
          type: "link",
          url: r,
          keepfocus: o.keepfocus,
          noscroll: o.noscroll,
          replace_state: o.replace_state ?? r.href === location.href,
        });
    }),
    Ke.addEventListener("submit", (e) => {
      if (e.defaultPrevented) return;
      const n = HTMLFormElement.prototype.cloneNode.call(e.target),
        r = e.submitter;
      if ((r?.formMethod || n.method) !== "get") return;
      const i = new URL(
        (r?.hasAttribute("formaction") && r?.formAction) || n.action,
      );
      if (mn(i, Re)) return;
      const l = e.target,
        o = nn(l);
      if (o.reload) return;
      e.preventDefault(), e.stopPropagation();
      const a = new FormData(l),
        c = r?.getAttribute("name");
      c && a.append(c, r?.getAttribute("value") ?? ""),
        (i.search = new URLSearchParams(a).toString()),
        Gt({
          type: "form",
          url: i,
          keepfocus: o.keepfocus,
          noscroll: o.noscroll,
          replace_state: o.replace_state ?? i.href === location.href,
        });
    }),
    addEventListener("popstate", async (e) => {
      if (e.state?.[pt]) {
        const n = e.state[pt];
        if (((an = {}), n === ve)) return;
        const r = rt[n],
          s = e.state[cs] ?? {},
          i = new URL(e.state[Ri] ?? location.href),
          l = e.state[Rt],
          o = $n(location) === $n(re.url);
        if (l === Ne && (gs || o)) {
          t(i),
            (rt[ve] = jn()),
            r && scrollTo(r.x, r.y),
            s !== Se.state &&
              ((Se = { ...Se, state: s }), Hn.$set({ page: Se })),
            (ve = n);
          return;
        }
        const c = n - ve;
        await Gt({
          type: "popstate",
          url: i,
          popped: { state: s, scroll: r, delta: c },
          accept: () => {
            (ve = n), (Ne = l);
          },
          block: () => {
            history.go(-c);
          },
          nav_token: an,
        });
      } else if (!St) {
        const n = new URL(location.href);
        t(n);
      }
    }),
    addEventListener("hashchange", () => {
      St &&
        ((St = !1),
        history.replaceState(
          { ...history.state, [pt]: ++ve, [Rt]: Ne },
          "",
          location.href,
        ));
    });
  for (const e of document.querySelectorAll("link"))
    e.rel === "icon" && (e.href = e.href);
  addEventListener("pageshow", (e) => {
    e.persisted && Xe.navigating.set(null);
  });
  function t(e) {
    (re.url = e), Xe.page.set({ ...Se, url: e }), Xe.page.notify();
  }
}
async function Gi(
  t,
  {
    status: e = 200,
    error: n,
    node_ids: r,
    params: s,
    route: i,
    data: l,
    form: o,
  },
) {
  Vn = !0;
  const a = new URL(location.href);
  ({ params: s = {}, route: i = { id: null } } = Wn(a, !1) || {});
  let c;
  try {
    const f = r.map(async (_, m) => {
        const v = l[m];
        return (
          v?.uses && (v.uses = Ps(v.uses)),
          qn({
            loader: Et.nodes[_],
            url: a,
            params: s,
            route: i,
            parent: async () => {
              const b = {};
              for (let S = 0; S < m; S += 1)
                Object.assign(b, (await f[S]).data);
              return b;
            },
            server_data_node: Kn(v),
          })
        );
      }),
      h = await Promise.all(f),
      d = gn.find(({ id: _ }) => _ === i.id);
    if (d) {
      const _ = d.layouts;
      for (let m = 0; m < _.length; m++) _[m] || h.splice(m, 0, void 0);
    }
    c = await cn({
      url: a,
      params: s,
      branch: h,
      status: e,
      error: n,
      form: o,
      route: d ?? null,
    });
  } catch (f) {
    if (f instanceof ps) {
      await yt(new URL(f.location, location.href));
      return;
    }
    c = await vn({
      status: rn(f),
      error: await mt(f, { url: a, params: s, route: i }),
      url: a,
      route: i,
    });
  }
  c.props.page && (c.props.page.state = {}), ws(c, t, !0);
}
async function Ts(t, e) {
  const n = new URL(t);
  (n.pathname = wi(t.pathname)),
    t.pathname.endsWith("/") && n.searchParams.append(ji, "1"),
    n.searchParams.append(Mi, e.map((s) => (s ? "1" : "0")).join(""));
  const r = await ss(n.href);
  if (!r.ok) {
    let s;
    throw (
      (r.headers.get("content-type")?.includes("application/json")
        ? (s = await r.json())
        : r.status === 404
          ? (s = "Not Found")
          : r.status === 500 && (s = "Internal Error"),
      new _n(r.status, s))
    );
  }
  return new Promise(async (s) => {
    const i = new Map(),
      l = r.body.getReader(),
      o = new TextDecoder();
    function a(f) {
      return js(f, {
        Promise: (h) =>
          new Promise((d, _) => {
            i.set(h, { fulfil: d, reject: _ });
          }),
      });
    }
    let c = "";
    for (;;) {
      const { done: f, value: h } = await l.read();
      if (f && !c) break;
      for (
        c +=
          !h && c
            ? `
`
            : o.decode(h, { stream: !0 });
        ;

      ) {
        const d = c.indexOf(`
`);
        if (d === -1) break;
        const _ = JSON.parse(c.slice(0, d));
        if (((c = c.slice(d + 1)), _.type === "redirect")) return s(_);
        if (_.type === "data")
          _.nodes?.forEach((m) => {
            m?.type === "data" && ((m.uses = Ps(m.uses)), (m.data = a(m.data)));
          }),
            s(_);
        else if (_.type === "chunk") {
          const { id: m, data: v, error: b } = _,
            S = i.get(m);
          i.delete(m), b ? S.reject(a(b)) : S.fulfil(a(v));
        }
      }
    }
  });
}
function Ps(t) {
  return {
    dependencies: new Set(t?.dependencies ?? []),
    params: new Set(t?.params ?? []),
    parent: !!t?.parent,
    route: !!t?.route,
    url: !!t?.url,
    search_params: new Set(t?.search_params ?? []),
  };
}
function Yi() {
  const t = document.querySelector("[autofocus]");
  if (t) t.focus();
  else {
    const e = document.body,
      n = e.getAttribute("tabindex");
    (e.tabIndex = -1),
      e.focus({ preventScroll: !0, focusVisible: !1 }),
      n !== null
        ? e.setAttribute("tabindex", n)
        : e.removeAttribute("tabindex");
    const r = getSelection();
    if (r && r.type !== "None") {
      const s = [];
      for (let i = 0; i < r.rangeCount; i += 1) s.push(r.getRangeAt(i));
      setTimeout(() => {
        if (r.rangeCount === s.length) {
          for (let i = 0; i < r.rangeCount; i += 1) {
            const l = s[i],
              o = r.getRangeAt(i);
            if (
              l.commonAncestorContainer !== o.commonAncestorContainer ||
              l.startContainer !== o.startContainer ||
              l.endContainer !== o.endContainer ||
              l.startOffset !== o.startOffset ||
              l.endOffset !== o.endOffset
            )
              return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function Ss(t, e, n, r) {
  let s, i;
  const l = new Promise((a, c) => {
    (s = a), (i = c);
  });
  return (
    l.catch(() => {}),
    {
      navigation: {
        from: {
          params: t.params,
          route: { id: t.route?.id ?? null },
          url: t.url,
        },
        to: n && {
          params: e?.params ?? null,
          route: { id: e?.route?.id ?? null },
          url: n,
        },
        willUnload: !e,
        type: r,
        complete: l,
      },
      fulfil: s,
      reject: i,
    }
  );
}
const Zi = "modulepreload",
  Ji = function (t, e) {
    return new URL(t, e).href;
  },
  hr = {},
  qe = function (e, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        o = l?.nonce || l?.getAttribute("nonce");
      s = Promise.all(
        n.map((a) => {
          if (((a = Ji(a, r)), a in hr)) return;
          hr[a] = !0;
          const c = a.endsWith(".css"),
            f = c ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let _ = i.length - 1; _ >= 0; _--) {
              const m = i[_];
              if (m.href === a && (!c || m.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${a}"]${f}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = c ? "stylesheet" : Zi),
            c || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = a),
            o && d.setAttribute("nonce", o),
            document.head.appendChild(d),
            c)
          )
            return new Promise((_, m) => {
              d.addEventListener("load", _),
                d.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${a}`)),
                );
            });
        }),
      );
    }
    return s
      .then(() => e())
      .catch((i) => {
        const l = new Event("vite:preloadError", { cancelable: !0 });
        if (((l.payload = i), window.dispatchEvent(l), !l.defaultPrevented))
          throw i;
      });
  },
  ec = {};
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(hi);
function Qi(t) {
  let e, n, r;
  var s = t[1][0];
  function i(l, o) {
    return { props: { data: l[3], form: l[2] } };
  }
  return (
    s && ((e = Be(s, i(t))), t[12](e)),
    {
      c() {
        e && q(e.$$.fragment), (n = J());
      },
      l(l) {
        e && K(e.$$.fragment, l), (n = J());
      },
      m(l, o) {
        e && V(e, l, o), R(l, n, o), (r = !0);
      },
      p(l, o) {
        if (o & 2 && s !== (s = l[1][0])) {
          if (e) {
            me();
            const a = e;
            N(a.$$.fragment, 1, 0, () => {
              U(a, 1);
            }),
              _e();
          }
          s
            ? ((e = Be(s, i(l))),
              l[12](e),
              q(e.$$.fragment),
              P(e.$$.fragment, 1),
              V(e, n.parentNode, n))
            : (e = null);
        } else if (s) {
          const a = {};
          o & 8 && (a.data = l[3]), o & 4 && (a.form = l[2]), e.$set(a);
        }
      },
      i(l) {
        r || (e && P(e.$$.fragment, l), (r = !0));
      },
      o(l) {
        e && N(e.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && p(n), t[12](null), e && U(e, l);
      },
    }
  );
}
function el(t) {
  let e, n, r;
  var s = t[1][0];
  function i(l, o) {
    return {
      props: { data: l[3], $$slots: { default: [tl] }, $$scope: { ctx: l } },
    };
  }
  return (
    s && ((e = Be(s, i(t))), t[11](e)),
    {
      c() {
        e && q(e.$$.fragment), (n = J());
      },
      l(l) {
        e && K(e.$$.fragment, l), (n = J());
      },
      m(l, o) {
        e && V(e, l, o), R(l, n, o), (r = !0);
      },
      p(l, o) {
        if (o & 2 && s !== (s = l[1][0])) {
          if (e) {
            me();
            const a = e;
            N(a.$$.fragment, 1, 0, () => {
              U(a, 1);
            }),
              _e();
          }
          s
            ? ((e = Be(s, i(l))),
              l[11](e),
              q(e.$$.fragment),
              P(e.$$.fragment, 1),
              V(e, n.parentNode, n))
            : (e = null);
        } else if (s) {
          const a = {};
          o & 8 && (a.data = l[3]),
            o & 8215 && (a.$$scope = { dirty: o, ctx: l }),
            e.$set(a);
        }
      },
      i(l) {
        r || (e && P(e.$$.fragment, l), (r = !0));
      },
      o(l) {
        e && N(e.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && p(n), t[11](null), e && U(e, l);
      },
    }
  );
}
function tl(t) {
  let e, n, r;
  var s = t[1][1];
  function i(l, o) {
    return { props: { data: l[4], form: l[2] } };
  }
  return (
    s && ((e = Be(s, i(t))), t[10](e)),
    {
      c() {
        e && q(e.$$.fragment), (n = J());
      },
      l(l) {
        e && K(e.$$.fragment, l), (n = J());
      },
      m(l, o) {
        e && V(e, l, o), R(l, n, o), (r = !0);
      },
      p(l, o) {
        if (o & 2 && s !== (s = l[1][1])) {
          if (e) {
            me();
            const a = e;
            N(a.$$.fragment, 1, 0, () => {
              U(a, 1);
            }),
              _e();
          }
          s
            ? ((e = Be(s, i(l))),
              l[10](e),
              q(e.$$.fragment),
              P(e.$$.fragment, 1),
              V(e, n.parentNode, n))
            : (e = null);
        } else if (s) {
          const a = {};
          o & 16 && (a.data = l[4]), o & 4 && (a.form = l[2]), e.$set(a);
        }
      },
      i(l) {
        r || (e && P(e.$$.fragment, l), (r = !0));
      },
      o(l) {
        e && N(e.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && p(n), t[10](null), e && U(e, l);
      },
    }
  );
}
function pr(t) {
  let e,
    n = t[6] && mr(t);
  return {
    c() {
      (e = w("div")), n && n.c(), this.h();
    },
    l(r) {
      e = $(r, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0,
      });
      var s = y(e);
      n && n.l(s), s.forEach(p), this.h();
    },
    h() {
      u(e, "id", "svelte-announcer"),
        u(e, "aria-live", "assertive"),
        u(e, "aria-atomic", "true"),
        Ae(e, "position", "absolute"),
        Ae(e, "left", "0"),
        Ae(e, "top", "0"),
        Ae(e, "clip", "rect(0 0 0 0)"),
        Ae(e, "clip-path", "inset(50%)"),
        Ae(e, "overflow", "hidden"),
        Ae(e, "white-space", "nowrap"),
        Ae(e, "width", "1px"),
        Ae(e, "height", "1px");
    },
    m(r, s) {
      R(r, e, s), n && n.m(e, null);
    },
    p(r, s) {
      r[6]
        ? n
          ? n.p(r, s)
          : ((n = mr(r)), n.c(), n.m(e, null))
        : n && (n.d(1), (n = null));
    },
    d(r) {
      r && p(e), n && n.d();
    },
  };
}
function mr(t) {
  let e;
  return {
    c() {
      e = ye(t[7]);
    },
    l(n) {
      e = Ce(n, t[7]);
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & 128 && Ge(e, n[7]);
    },
    d(n) {
      n && p(e);
    },
  };
}
function nl(t) {
  let e, n, r, s, i;
  const l = [el, Qi],
    o = [];
  function a(f, h) {
    return f[1][1] ? 0 : 1;
  }
  (e = a(t)), (n = o[e] = l[e](t));
  let c = t[5] && pr(t);
  return {
    c() {
      n.c(), (r = D()), c && c.c(), (s = J());
    },
    l(f) {
      n.l(f), (r = M(f)), c && c.l(f), (s = J());
    },
    m(f, h) {
      o[e].m(f, h), R(f, r, h), c && c.m(f, h), R(f, s, h), (i = !0);
    },
    p(f, [h]) {
      let d = e;
      (e = a(f)),
        e === d
          ? o[e].p(f, h)
          : (me(),
            N(o[d], 1, 1, () => {
              o[d] = null;
            }),
            _e(),
            (n = o[e]),
            n ? n.p(f, h) : ((n = o[e] = l[e](f)), n.c()),
            P(n, 1),
            n.m(r.parentNode, r)),
        f[5]
          ? c
            ? c.p(f, h)
            : ((c = pr(f)), c.c(), c.m(s.parentNode, s))
          : c && (c.d(1), (c = null));
    },
    i(f) {
      i || (P(n), (i = !0));
    },
    o(f) {
      N(n), (i = !1);
    },
    d(f) {
      f && (p(r), p(s)), o[e].d(f), c && c.d(f);
    },
  };
}
function rl(t, e, n) {
  let { stores: r } = e,
    { page: s } = e,
    { constructors: i } = e,
    { components: l = [] } = e,
    { form: o } = e,
    { data_0: a = null } = e,
    { data_1: c = null } = e;
  ii(r.page.notify);
  let f = !1,
    h = !1,
    d = null;
  $t(() => {
    const b = r.page.subscribe(() => {
      f &&
        (n(6, (h = !0)),
        rs().then(() => {
          n(7, (d = document.title || "untitled page"));
        }));
    });
    return n(5, (f = !0)), b;
  });
  function _(b) {
    tt[b ? "unshift" : "push"](() => {
      (l[1] = b), n(0, l);
    });
  }
  function m(b) {
    tt[b ? "unshift" : "push"](() => {
      (l[0] = b), n(0, l);
    });
  }
  function v(b) {
    tt[b ? "unshift" : "push"](() => {
      (l[0] = b), n(0, l);
    });
  }
  return (
    (t.$$set = (b) => {
      "stores" in b && n(8, (r = b.stores)),
        "page" in b && n(9, (s = b.page)),
        "constructors" in b && n(1, (i = b.constructors)),
        "components" in b && n(0, (l = b.components)),
        "form" in b && n(2, (o = b.form)),
        "data_0" in b && n(3, (a = b.data_0)),
        "data_1" in b && n(4, (c = b.data_1));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 768 && r.page.set(s);
    }),
    [l, i, o, a, c, f, h, d, r, s, _, m, v]
  );
}
class tc extends te {
  constructor(e) {
    super(),
      ee(this, e, rl, nl, Q, {
        stores: 8,
        page: 9,
        constructors: 1,
        components: 0,
        form: 2,
        data_0: 3,
        data_1: 4,
      });
  }
}
const nc = [
    () => qe(() => Promise.resolve().then(() => ol), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => hl), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => pa), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => va), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => Ra), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => Ma), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => Va), void 0, import.meta.url),
    () => qe(() => Promise.resolve().then(() => Ka), void 0, import.meta.url),
  ],
  rc = [],
  sc = {
    "/": [2],
    "/agent-hub": [3],
    "/contract-center": [4],
    "/my-agencies": [5],
    "/profile": [6],
    "/rules": [7],
  },
  ic = {
    handleError: ({ error: t }) => {
      console.error(t);
    },
    reroute: () => {},
  };
function sl(t) {
  let e;
  const n = t[1].default,
    r = _t(n, t, t[0], null);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, i) {
      r && r.m(s, i), (e = !0);
    },
    p(s, [i]) {
      r &&
        r.p &&
        (!e || i & 1) &&
        vt(r, n, s, s[0], e ? gt(n, s[0], i, null) : bt(s[0]), null);
    },
    i(s) {
      e || (P(r, s), (e = !0));
    },
    o(s) {
      N(r, s), (e = !1);
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function il(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  return (
    (t.$$set = (i) => {
      "$$scope" in i && n(0, (s = i.$$scope));
    }),
    [s, r]
  );
}
let ll = class extends te {
  constructor(e) {
    super(), ee(this, e, il, sl, Q, {});
  }
};
const ol = Object.freeze(
    Object.defineProperty(
      { __proto__: null, component: ll },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  al = () => {
    const t = Xe;
    return {
      page: { subscribe: t.page.subscribe },
      navigating: { subscribe: t.navigating.subscribe },
      updated: t.updated,
    };
  },
  cl = {
    subscribe(t) {
      return al().page.subscribe(t);
    },
  };
function ul(t) {
  let e,
    n = t[0].status + "",
    r,
    s,
    i,
    l = t[0].error?.message + "",
    o;
  return {
    c() {
      (e = w("h1")), (r = ye(n)), (s = D()), (i = w("p")), (o = ye(l));
    },
    l(a) {
      e = $(a, "H1", {});
      var c = y(e);
      (r = Ce(c, n)), c.forEach(p), (s = M(a)), (i = $(a, "P", {}));
      var f = y(i);
      (o = Ce(f, l)), f.forEach(p);
    },
    m(a, c) {
      R(a, e, c), g(e, r), R(a, s, c), R(a, i, c), g(i, o);
    },
    p(a, [c]) {
      c & 1 && n !== (n = a[0].status + "") && Ge(r, n),
        c & 1 && l !== (l = a[0].error?.message + "") && Ge(o, l);
    },
    i: L,
    o: L,
    d(a) {
      a && (p(e), p(s), p(i));
    },
  };
}
function fl(t, e, n) {
  let r;
  return je(t, cl, (s) => n(0, (r = s))), [r];
}
let dl = class extends te {
  constructor(e) {
    super(), ee(this, e, fl, ul, Q, {});
  }
};
const hl = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: dl },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function pl(t) {
  let e, n, r, s, i, l, o;
  return {
    c() {
      (e = W("svg")),
        (n = W("path")),
        (r = W("path")),
        (s = W("path")),
        (i = W("path")),
        (l = W("path")),
        (o = W("path")),
        this.h();
    },
    l(a) {
      e = Y(a, "svg", { xmlns: !0, class: !0, viewBox: !0, fill: !0 });
      var c = y(e);
      (n = Y(c, "path", { d: !0, fill: !0 })),
        y(n).forEach(p),
        (r = Y(c, "path", { d: !0, fill: !0 })),
        y(r).forEach(p),
        (s = Y(c, "path", { d: !0, fill: !0 })),
        y(s).forEach(p),
        (i = Y(c, "path", { d: !0, fill: !0 })),
        y(i).forEach(p),
        (l = Y(c, "path", { d: !0, fill: !0 })),
        y(l).forEach(p),
        (o = Y(c, "path", { transform: !0, d: !0, fill: !0 })),
        y(o).forEach(p),
        c.forEach(p),
        this.h();
    },
    h() {
      u(
        n,
        "d",
        "M46.6292 95.4787C42.6798 96.3015 39.6731 96.7241 37.73 96.9196C36.5527 97.038 35.6089 98.0884 35.6364 99.2713C35.6872 101.455 35.661 104.079 35.8442 104.995C37.1747 111.647 40.2975 113.94 41.0643 114.412C41.177 114.482 41.2938 114.526 41.422 114.559C42.8638 114.924 52.5373 117.274 64.1689 117.658C64.7159 117.676 65.2461 117.464 65.6331 117.077L74.9523 107.758C75.8724 106.838 75.684 105.298 74.5723 104.622C72.2459 103.207 69.2335 101.349 67.5647 100.237C65.6133 98.9359 61.9793 95.2268 59.7095 92.7894C59.0976 92.1323 58.1266 91.9495 57.2969 92.2924C55.1665 93.1727 51.3886 94.4872 46.6292 95.4787Z",
      ),
        u(n, "fill", t[1]),
        u(
          r,
          "d",
          "M117.683 76.7635C119.161 72.6979 119.159 67.6006 118.804 63.9461C118.657 62.4284 116.898 61.8085 115.742 62.8035L107.915 69.5441C107.3 70.0736 106.998 70.941 107.024 71.7521C107.056 72.7482 107.04 74.3482 106.898 76.7635C106.676 80.5448 103.837 88.1768 101.929 92.7808C101.522 93.7635 101.933 94.9015 102.896 95.3536C104.832 96.2625 107.151 97.2554 107.532 97.0646C108.167 96.7474 115.145 83.742 117.683 76.7635Z",
        ),
        u(r, "fill", t[1]),
        u(
          s,
          "d",
          "M0.482453 49.1884L9.96382 37.1445C10.8242 36.0516 12.5097 36.1488 13.2386 37.3334L21.4796 50.725C21.7417 51.1509 21.8347 51.6597 21.7403 52.1509L17.4628 74.3938C17.2722 75.385 16.3729 76.0788 15.3658 76.0117L4.11115 75.2614C3.34335 75.2102 2.66998 74.7238 2.43392 73.9914C2.24231 73.3969 2.03932 72.686 1.90323 72.0056C1.65867 70.7828 0.608827 57.6772 0.0597851 50.5764C0.0211178 50.0763 0.172196 49.5825 0.482453 49.1884Z",
        ),
        u(s, "fill", t[1]),
        u(
          i,
          "d",
          "M43.1398 1.58602C37.697 2.53261 29.6243 7.23081 25.5588 9.91831C25.0437 10.2588 24.7419 10.8368 24.7419 11.4542C24.7419 12.7933 26.1094 13.7081 27.3592 13.2274C29.8488 12.2698 33.3065 11.0317 36.4785 10.1506C40.5949 9.00711 45.1922 8.46477 47.5309 8.29137C47.9748 8.25846 48.3977 8.08906 48.7341 7.79757L52.808 4.26679C52.9178 4.17166 53.0376 4.08876 53.1653 4.01958L56.8741 2.01066C57.8012 1.50847 57.4236 0.137308 56.3711 0.200833C52.4309 0.438651 47.2056 0.878937 43.1398 1.58602Z",
        ),
        u(i, "fill", t[1]),
        u(
          l,
          "d",
          "M102.14 18.3978C97.9668 13.8453 93.2974 10.3089 90.1455 8.2392C89.6724 7.92853 89.2364 8.47056 89.6238 8.88321C90.9694 10.3167 92.4651 11.895 93.2583 12.6881C94.406 13.8359 96.3324 18.0117 97.394 20.52C97.5927 20.9897 97.9572 21.3691 98.4192 21.585C99.7758 22.2188 101.935 23.2651 103.409 24.1075C104.693 24.8414 107.934 28.3829 110.59 31.4475C110.976 31.8936 111.59 31.4806 111.292 30.9711C109.25 27.482 106.047 22.6603 102.14 18.3978Z",
        ),
        u(l, "fill", t[1]),
        u(o, "transform", "translate(40, 25)"),
        u(
          o,
          "d",
          "M44.6021 24.8356L16.4245 36.8429C15.8284 37.0969 15.5485 37.7924 15.8025 38.3885L16.7262 40.556C16.9802 41.152 17.6757 41.4319 18.2718 41.1779L46.4494 29.1706C47.0455 28.9166 47.3253 28.2211 47.0713 27.625L46.1477 25.4575C45.8937 24.8614 45.1982 24.5816 44.6021 24.8356ZM39.7008 1.31318C37.9058 2.07807 37.0701 4.15493 37.8349 5.9499C38.0399 6.43082 38.3388 6.83169 38.7045 7.16405L35.0532 12.1935C34.2756 13.2611 32.7776 13.4833 31.7245 12.6835L22.0881 5.37695C22.5589 4.47204 22.652 3.3759 22.2191 2.35988C21.4542 0.564907 19.3773 -0.27082 17.5823 0.49407C15.7874 1.25896 14.9516 3.33583 15.7165 5.1308C16.1495 6.14682 17.0046 6.83887 17.9834 7.12609L16.579 19.1375C16.4264 20.451 15.2218 21.3805 13.9199 21.199L7.77002 20.3461C7.77973 19.8618 7.70149 19.3589 7.49655 18.878C6.73167 17.083 4.6548 16.2473 2.85983 17.0122C1.06486 17.7771 0.222357 19.8568 0.987246 21.6518C1.75214 23.4468 3.829 24.2825 5.62397 23.5176C5.80008 23.4425 5.96465 23.3404 6.12244 23.2412L16.5846 34.2136L42.5947 23.1299L41.927 7.98378C42.1079 7.93871 42.2956 7.89076 42.4717 7.81571C44.2666 7.05082 45.1024 4.97396 44.3375 3.17898C43.5726 1.38401 41.4957 0.548287 39.7008 1.31318Z",
        ),
        u(o, "fill", t[1]),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "class", t[0]),
        u(e, "viewBox", "0 0 119 118"),
        u(e, "fill", "none");
    },
    m(a, c) {
      R(a, e, c), g(e, n), g(e, r), g(e, s), g(e, i), g(e, l), g(e, o);
    },
    p(a, [c]) {
      c & 2 && u(n, "fill", a[1]),
        c & 2 && u(r, "fill", a[1]),
        c & 2 && u(s, "fill", a[1]),
        c & 2 && u(i, "fill", a[1]),
        c & 2 && u(l, "fill", a[1]),
        c & 2 && u(o, "fill", a[1]),
        c & 1 && u(e, "class", a[0]);
    },
    i: L,
    o: L,
    d(a) {
      a && p(e);
    },
  };
}
function ml(t, e, n) {
  let { className: r = "" } = e,
    { fill: s = "" } = e;
  return (
    (t.$$set = (i) => {
      "className" in i && n(0, (r = i.className)),
        "fill" in i && n(1, (s = i.fill));
    }),
    [r, s]
  );
}
class et extends te {
  constructor(e) {
    super(), ee(this, e, ml, pl, Q, { className: 0, fill: 1 });
  }
}
const _r = "https://identity.ic0.app",
  _l = BigInt(60 * 60 * 1e3 * 1e3 * 1e3 * 24 * 14),
  gl = 576,
  vl = 625,
  An = () =>
    Bs.create({
      idleOptions: { disableIdle: !0, disableDefaultIdleCallback: !0 },
    }),
  bl = ({ width: t, height: e }) => {
    if (Ot(window) || Ot(window.top)) return;
    const {
        top: { innerWidth: n, innerHeight: r },
      } = window,
      s = r / 2 + screenY - e / 2,
      i = n / 2 + screenX - t / 2;
    return `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${t}, height=${e}, top=${s}, left=${i}`;
  };
let Le;
const yl = "https://transferkings.xyz",
  wl = "https://etq35-qqaaa-aaaal-qcrvq-cai.icp0.io",
  $l = () => window.location.origin === yl,
  kl = () => {
    const { subscribe: t, set: e, update: n } = Fe({ identity: void 0 });
    return {
      subscribe: t,
      sync: async () => {
        Le = Le ?? (await An());
        const r = await Le.isAuthenticated();
        e({ identity: r ? Le.getIdentity() : null });
      },
      signIn: ({ domain: r }) =>
        new Promise(async (s, i) => {
          Le = Le ?? (await An());
          const l = ke(_r)
            ? `http://localhost:4943?canisterId=${_r}`
            : `${r ?? "https://identity.ic0.app"}`;
          await Le?.login({
            maxTimeToLive: _l,
            onSuccess: () => {
              n((o) => ({ ...o, identity: Le?.getIdentity() })), s();
            },
            onError: i,
            identityProvider: l,
            ...($l() && { derivationOrigin: wl }),
            windowOpenerFeatures: bl({ width: gl, height: vl }),
          });
        }),
      signOut: async () => {
        await (Le ?? (await An())).logout(),
          (Le = null),
          n((s) => ({ ...s, identity: null }));
      },
    };
  },
  Ie = kl(),
  El = Fe(void 0),
  Al = (t) =>
    typeof t == "string"
      ? t
      : t instanceof Error || "message" in t
        ? t.message
        : void 0,
  At = 20,
  Cl = {
    close: "Close",
    back: "Back",
    menu: "Open menu to access navigation options",
    collapse: "Collapse",
    expand: "Expand",
    copy: "Copy to clipboard",
  },
  Tl = { switch_theme: "Switch theme" },
  Pl = { completed: "Completed", in_progress: "In progress" },
  Sl = { core: Cl, theme: Tl, progress: Pl },
  Xn = ls({ lang: "en", ...Sl });
function Nl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Me(t, { delay: e = 0, duration: n = 400, easing: r = dn } = {}) {
  const s = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: r, css: (i) => `opacity: ${i * s}` };
}
function xl(
  t,
  {
    delay: e = 0,
    duration: n = 400,
    easing: r = Nl,
    x: s = 0,
    y: i = 0,
    opacity: l = 0,
  } = {},
) {
  const o = getComputedStyle(t),
    a = +o.opacity,
    c = o.transform === "none" ? "" : o.transform,
    f = a * (1 - l),
    [h, d] = tr(s),
    [_, m] = tr(i);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (v, b) => `
			transform: ${c} translate(${(1 - v) * h}${d}, ${(1 - v) * _}${m});
			opacity: ${a - f * b}`,
  };
}
const Ol = ({ $event: { code: t }, callback: e }) => {
  ["Enter", "Space"].includes(t) && e();
};
function Il(t) {
  let e, n, r, s, i, l, o;
  return {
    c() {
      (e = w("div")), this.h();
    },
    l(a) {
      (e = $(a, "DIV", {
        role: !0,
        tabindex: !0,
        "aria-label": !0,
        class: !0,
        "data-tid": !0,
      })),
        y(e).forEach(p),
        this.h();
    },
    h() {
      u(e, "role", "button"),
        u(e, "tabindex", "-1"),
        u(e, "aria-label", (n = t[2].core.close)),
        u(e, "class", "backdrop svelte-1mpql1"),
        u(e, "data-tid", "backdrop"),
        pe(e, "visible", !t[1]),
        pe(e, "disablePointerEvents", t[0]);
    },
    m(a, c) {
      R(a, e, c),
        (i = !0),
        l ||
          ((o = [fe(e, "click", In(t[3])), fe(e, "keypress", t[4])]), (l = !0));
    },
    p(a, [c]) {
      (t = a),
        (!i || (c & 4 && n !== (n = t[2].core.close))) && u(e, "aria-label", n),
        (!i || c & 2) && pe(e, "visible", !t[1]),
        (!i || c & 1) && pe(e, "disablePointerEvents", t[0]);
    },
    i(a) {
      i ||
        (xe(() => {
          i && (s && s.end(1), (r = pn(e, Me, { duration: Rl })), r.start());
        }),
        (i = !0));
    },
    o(a) {
      r && r.invalidate(), (s = Dn(e, Me, { duration: Fl })), (i = !1);
    },
    d(a) {
      a && p(e), a && s && s.end(), (l = !1), Te(o);
    },
  };
}
const Rl = 75,
  Fl = 250;
function Ll(t, e, n) {
  let r;
  je(t, Xn, (c) => n(2, (r = c)));
  let { disablePointerEvents: s = !1 } = e,
    { invisible: i = !1 } = e;
  const l = es(),
    o = () => l("nnsClose"),
    a = (c) => Ol({ $event: c, callback: o });
  return (
    (t.$$set = (c) => {
      "disablePointerEvents" in c && n(0, (s = c.disablePointerEvents)),
        "invisible" in c && n(1, (i = c.invisible));
    }),
    [s, i, r, o, a]
  );
}
class Dl extends te {
  constructor(e) {
    super(), ee(this, e, Ll, Il, Q, { disablePointerEvents: 0, invisible: 1 });
  }
}
const Ml = Fe(0),
  jl = () => {
    const t = [],
      { subscribe: e, update: n, set: r } = Fe(t);
    return {
      subscribe: e,
      startBusy({ initiator: s, text: i }) {
        n((l) => [
          ...l.filter(({ initiator: o }) => s !== o),
          { initiator: s, text: i },
        ]);
      },
      stopBusy(s) {
        n((i) => i.filter(({ initiator: l }) => l !== s));
      },
      resetForTesting() {
        r(t);
      },
    };
  },
  un = jl(),
  Bl = kt(un, (t) => t.length > 0),
  zl = kt(un, (t) => t.reverse().find(({ text: e }) => ke(e))?.text);
function Vl(t) {
  let e, n, r;
  return {
    c() {
      (e = W("svg")), (n = W("circle")), this.h();
    },
    l(s) {
      e = Y(s, "svg", {
        class: !0,
        preserveAspectRatio: !0,
        focusable: !0,
        "aria-hidden": !0,
        "data-tid": !0,
        viewBox: !0,
      });
      var i = y(e);
      (n = Y(i, "circle", { cx: !0, cy: !0, r: !0, class: !0 })),
        y(n).forEach(p),
        i.forEach(p),
        this.h();
    },
    h() {
      u(n, "cx", "50%"),
        u(n, "cy", "50%"),
        u(n, "r", "45"),
        u(n, "class", "svelte-85668t"),
        u(e, "class", (r = Qe(t[1]) + " svelte-85668t")),
        u(e, "preserveAspectRatio", "xMidYMid meet"),
        u(e, "focusable", "false"),
        u(e, "aria-hidden", "true"),
        u(e, "data-tid", "spinner"),
        u(e, "viewBox", "0 0 100 100"),
        pe(e, "inline", t[0]);
    },
    m(s, i) {
      R(s, e, i), g(e, n);
    },
    p(s, [i]) {
      i & 2 && r !== (r = Qe(s[1]) + " svelte-85668t") && u(e, "class", r),
        i & 3 && pe(e, "inline", s[0]);
    },
    i: L,
    o: L,
    d(s) {
      s && p(e);
    },
  };
}
function Ul(t, e, n) {
  let { inline: r = !1 } = e,
    { size: s = "medium" } = e;
  return (
    (t.$$set = (i) => {
      "inline" in i && n(0, (r = i.inline)), "size" in i && n(1, (s = i.size));
    }),
    [r, s]
  );
}
class bn extends te {
  constructor(e) {
    super(), ee(this, e, Ul, Vl, Q, { inline: 0, size: 1 });
  }
}
function gr(t) {
  let e,
    n,
    r = ke(t[1]),
    s,
    i,
    l,
    o,
    a,
    c = r && vr(t);
  return (
    (l = new bn({ props: { inline: !0 } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          c && c.c(),
          (s = D()),
          (i = w("span")),
          q(l.$$.fragment),
          this.h();
      },
      l(f) {
        e = $(f, "DIV", { "data-tid": !0, class: !0 });
        var h = y(e);
        n = $(h, "DIV", { class: !0 });
        var d = y(n);
        c && c.l(d), (s = M(d)), (i = $(d, "SPAN", {}));
        var _ = y(i);
        K(l.$$.fragment, _), _.forEach(p), d.forEach(p), h.forEach(p), this.h();
      },
      h() {
        u(n, "class", "content svelte-14plyno"),
          u(e, "data-tid", "busy"),
          u(e, "class", "svelte-14plyno");
      },
      m(f, h) {
        R(f, e, h),
          g(e, n),
          c && c.m(n, null),
          g(n, s),
          g(n, i),
          V(l, i, null),
          (a = !0);
      },
      p(f, h) {
        h & 2 && (r = ke(f[1])),
          r
            ? c
              ? c.p(f, h)
              : ((c = vr(f)), c.c(), c.m(n, s))
            : c && (c.d(1), (c = null));
      },
      i(f) {
        a ||
          (P(l.$$.fragment, f),
          xe(() => {
            a && (o || (o = en(e, Me, {}, !0)), o.run(1));
          }),
          (a = !0));
      },
      o(f) {
        N(l.$$.fragment, f), o || (o = en(e, Me, {}, !1)), o.run(0), (a = !1);
      },
      d(f) {
        f && p(e), c && c.d(), U(l), f && o && o.end();
      },
    }
  );
}
function vr(t) {
  let e, n;
  return {
    c() {
      (e = w("p")), (n = ye(t[1])), this.h();
    },
    l(r) {
      e = $(r, "P", { class: !0 });
      var s = y(e);
      (n = Ce(s, t[1])), s.forEach(p), this.h();
    },
    h() {
      u(e, "class", "svelte-14plyno");
    },
    m(r, s) {
      R(r, e, s), g(e, n);
    },
    p(r, s) {
      s & 2 && Ge(n, r[1]);
    },
    d(r) {
      r && p(e);
    },
  };
}
function Hl(t) {
  let e,
    n,
    r = t[0] && gr(t);
  return {
    c() {
      r && r.c(), (e = J());
    },
    l(s) {
      r && r.l(s), (e = J());
    },
    m(s, i) {
      r && r.m(s, i), R(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[0]
        ? r
          ? (r.p(s, i), i & 1 && P(r, 1))
          : ((r = gr(s)), r.c(), P(r, 1), r.m(e.parentNode, e))
        : r &&
          (me(),
          N(r, 1, 1, () => {
            r = null;
          }),
          _e());
    },
    i(s) {
      n || (P(r), (n = !0));
    },
    o(s) {
      N(r), (n = !1);
    },
    d(s) {
      s && p(e), r && r.d(s);
    },
  };
}
function ql(t, e, n) {
  let r, s;
  return (
    je(t, Bl, (i) => n(0, (r = i))), je(t, zl, (i) => n(1, (s = i))), [r, s]
  );
}
class Kl extends te {
  constructor(e) {
    super(), ee(this, e, ql, Hl, Q, {});
  }
}
function Wl(t) {
  let e, n, r, s;
  return {
    c() {
      (e = W("svg")),
        (n = W("rect")),
        (r = W("path")),
        (s = W("rect")),
        this.h();
    },
    l(i) {
      e = Y(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var l = y(e);
      (n = Y(l, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        fill: !0,
      })),
        y(n).forEach(p),
        (r = Y(l, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        y(r).forEach(p),
        (s = Y(l, "rect", {
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          rx: !0,
          stroke: !0,
          "stroke-width": !0,
        })),
        y(s).forEach(p),
        l.forEach(p),
        this.h();
    },
    h() {
      u(n, "x", "1.25"),
        u(n, "y", "1.25"),
        u(n, "width", "21.5"),
        u(n, "height", "21.5"),
        u(n, "rx", "10.75"),
        u(n, "fill", "var(--icon-check-circle-background, transparent)"),
        u(r, "d", "M7 11L11 15L17 9"),
        u(r, "stroke", "var(--icon-check-circle-color, currentColor)"),
        u(r, "stroke-width", "1.5"),
        u(r, "stroke-linecap", "round"),
        u(r, "stroke-linejoin", "round"),
        u(s, "x", "1.25"),
        u(s, "y", "1.25"),
        u(s, "width", "21.5"),
        u(s, "height", "21.5"),
        u(s, "rx", "10.75"),
        u(s, "stroke", "var(--icon-check-circle-background, currentColor)"),
        u(s, "stroke-width", "1.5"),
        u(e, "width", t[0]),
        u(e, "height", t[0]),
        u(e, "viewBox", "0 0 24 24"),
        u(e, "fill", "none"),
        u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      R(i, e, l), g(e, n), g(e, r), g(e, s);
    },
    p(i, [l]) {
      l & 1 && u(e, "width", i[0]), l & 1 && u(e, "height", i[0]);
    },
    i: L,
    o: L,
    d(i) {
      i && p(e);
    },
  };
}
function Xl(t, e, n) {
  let { size: r = "24px" } = e;
  return (
    (t.$$set = (s) => {
      "size" in s && n(0, (r = s.size));
    }),
    [r]
  );
}
class Gl extends te {
  constructor(e) {
    super(), ee(this, e, Xl, Wl, Q, { size: 0 });
  }
}
function Yl(t) {
  let e, n, r;
  return {
    c() {
      (e = W("svg")), (n = W("rect")), (r = W("rect")), this.h();
    },
    l(s) {
      e = Y(s, "svg", {
        height: !0,
        width: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var i = y(e);
      (n = Y(i, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        rx: !0,
        transform: !0,
        fill: !0,
      })),
        y(n).forEach(p),
        (r = Y(i, "rect", {
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          rx: !0,
          transform: !0,
          fill: !0,
        })),
        y(r).forEach(p),
        i.forEach(p),
        this.h();
    },
    h() {
      u(n, "x", "14.4194"),
        u(n, "y", "4.52441"),
        u(n, "width", "1.5"),
        u(n, "height", "14"),
        u(n, "rx", "0.75"),
        u(n, "transform", "rotate(45 14.4194 4.52441)"),
        u(n, "fill", "currentColor"),
        u(r, "x", "4.5199"),
        u(r, "y", "5.58496"),
        u(r, "width", "1.5"),
        u(r, "height", "14"),
        u(r, "rx", "0.75"),
        u(r, "transform", "rotate(-45 4.5199 5.58496)"),
        u(r, "fill", "currentColor"),
        u(e, "height", t[0]),
        u(e, "width", t[0]),
        u(e, "viewBox", "0 0 20 20"),
        u(e, "fill", "none"),
        u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, i) {
      R(s, e, i), g(e, n), g(e, r);
    },
    p(s, [i]) {
      i & 1 && u(e, "height", s[0]), i & 1 && u(e, "width", s[0]);
    },
    i: L,
    o: L,
    d(s) {
      s && p(e);
    },
  };
}
function Zl(t, e, n) {
  let { size: r = `${At}px` } = e;
  return (
    (t.$$set = (s) => {
      "size" in s && n(0, (r = s.size));
    }),
    [r]
  );
}
class Ns extends te {
  constructor(e) {
    super(), ee(this, e, Zl, Yl, Q, { size: 0 });
  }
}
function Jl(t) {
  let e, n, r;
  return {
    c() {
      (e = W("svg")), (n = W("path")), (r = W("path")), this.h();
    },
    l(s) {
      e = Y(s, "svg", {
        xmlns: !0,
        height: !0,
        viewBox: !0,
        width: !0,
        fill: !0,
      });
      var i = y(e);
      (n = Y(i, "path", { d: !0, fill: !0 })),
        y(n).forEach(p),
        (r = Y(i, "path", { d: !0 })),
        y(r).forEach(p),
        i.forEach(p),
        this.h();
    },
    h() {
      u(n, "d", "M0 0h24v24H0z"),
        u(n, "fill", "none"),
        u(
          r,
          "d",
          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
        ),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "height", t[0]),
        u(e, "viewBox", "0 0 24 24"),
        u(e, "width", t[0]),
        u(e, "fill", "currentColor");
    },
    m(s, i) {
      R(s, e, i), g(e, n), g(e, r);
    },
    p(s, [i]) {
      i & 1 && u(e, "height", s[0]), i & 1 && u(e, "width", s[0]);
    },
    i: L,
    o: L,
    d(s) {
      s && p(e);
    },
  };
}
function Ql(t, e, n) {
  let { size: r = `${At}px` } = e;
  return (
    (t.$$set = (s) => {
      "size" in s && n(0, (r = s.size));
    }),
    [r]
  );
}
class eo extends te {
  constructor(e) {
    super(), ee(this, e, Ql, Jl, Q, { size: 0 });
  }
}
function to(t) {
  let e, n, r, s;
  return {
    c() {
      (e = W("svg")),
        (n = W("path")),
        (r = W("path")),
        (s = W("path")),
        this.h();
    },
    l(i) {
      e = Y(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        "data-tid": !0,
        class: !0,
      });
      var l = y(e);
      (n = Y(l, "path", {
        d: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      })),
        y(n).forEach(p),
        (r = Y(l, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        y(r).forEach(p),
        (s = Y(l, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        y(s).forEach(p),
        l.forEach(p),
        this.h();
    },
    h() {
      u(
        n,
        "d",
        "M10.2222 17.5C14.3643 17.5 17.7222 14.1421 17.7222 10C17.7222 5.85786 14.3643 2.5 10.2222 2.5C6.08003 2.5 2.72217 5.85786 2.72217 10C2.72217 14.1421 6.08003 17.5 10.2222 17.5Z",
      ),
        u(n, "stroke", "currentColor"),
        u(n, "stroke-width", "1.5"),
        u(n, "stroke-linecap", "round"),
        u(n, "stroke-linejoin", "round"),
        u(r, "d", "M10.2222 13.3333V10"),
        u(r, "stroke", "currentColor"),
        u(r, "stroke-width", "1.5"),
        u(r, "stroke-linecap", "round"),
        u(r, "stroke-linejoin", "round"),
        u(s, "d", "M10.2222 6.66699H10.2305"),
        u(s, "stroke", "currentColor"),
        u(s, "stroke-width", "1.5"),
        u(s, "stroke-linecap", "round"),
        u(s, "stroke-linejoin", "round"),
        u(e, "width", t[0]),
        u(e, "height", t[0]),
        u(e, "viewBox", "0 0 20 20"),
        u(e, "fill", "none"),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "data-tid", "icon-info"),
        u(e, "class", "svelte-1lui9gh");
    },
    m(i, l) {
      R(i, e, l), g(e, n), g(e, r), g(e, s);
    },
    p(i, [l]) {
      l & 1 && u(e, "width", i[0]), l & 1 && u(e, "height", i[0]);
    },
    i: L,
    o: L,
    d(i) {
      i && p(e);
    },
  };
}
function no(t, e, n) {
  let { size: r = `${At}px` } = e;
  return (
    (t.$$set = (s) => {
      "size" in s && n(0, (r = s.size));
    }),
    [r]
  );
}
class ro extends te {
  constructor(e) {
    super(), ee(this, e, no, to, Q, { size: 0 });
  }
}
function so(t) {
  let e, n;
  return {
    c() {
      (e = W("svg")), (n = W("path")), this.h();
    },
    l(r) {
      e = Y(r, "svg", {
        xmlns: !0,
        height: !0,
        viewBox: !0,
        width: !0,
        fill: !0,
      });
      var s = y(e);
      (n = Y(s, "path", { d: !0 })), y(n).forEach(p), s.forEach(p), this.h();
    },
    h() {
      u(n, "d", "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "height", t[0]),
        u(e, "viewBox", "0 0 24 24"),
        u(e, "width", t[0]),
        u(e, "fill", "currentColor");
    },
    m(r, s) {
      R(r, e, s), g(e, n);
    },
    p(r, [s]) {
      s & 1 && u(e, "height", r[0]), s & 1 && u(e, "width", r[0]);
    },
    i: L,
    o: L,
    d(r) {
      r && p(e);
    },
  };
}
function io(t, e, n) {
  let { size: r = `${At}px` } = e;
  return (
    (t.$$set = (s) => {
      "size" in s && n(0, (r = s.size));
    }),
    [r]
  );
}
class lo extends te {
  constructor(e) {
    super(), ee(this, e, io, so, Q, { size: 0 });
  }
}
let ot;
const oo = (t) => {
    if (t.getAttribute("data-target") === "blank") {
      const e = t.getAttribute("rel") || "",
        n = e.split(/\s+/),
        r = n.includes("noopener") || n.includes("noreferrer") ? e : "noopener";
      t.setAttribute("target", "_blank"),
        t.setAttribute("rel", r),
        t.removeAttribute("data-target");
    }
  },
  ao = (t) => (
    t.tagName === "A" &&
      t.getAttribute("target") === "_blank" &&
      t.setAttribute("data-target", "blank"),
    t
  ),
  br = (t) => {
    try {
      return (
        Ot(ot) &&
          (typeof Jn.sanitize == "function"
            ? (ot = Jn)
            : typeof global.DOMPurify.sanitize == "function" &&
              (ot = global.DOMPurify),
          ot?.addHook("beforeSanitizeElements", ao),
          ot?.addHook("afterSanitizeAttributes", oo)),
        ot?.sanitize(t) ?? ""
      );
    } catch (e) {
      console.error(e);
    }
    return console.error("no DOMPurify support"), "";
  };
let qt = {};
const yr = (t) => ((qt = { ...qt, [t]: (qt[t] ?? 0) + 1 }), `${t}${qt[t]}`);
function wr(t) {
  let e,
    n = br(t[0]) + "",
    r;
  return {
    c() {
      (e = new Wt(!1)), (r = J()), this.h();
    },
    l(s) {
      (e = ei(s, !1)), (r = J()), this.h();
    },
    h() {
      e.a = r;
    },
    m(s, i) {
      e.m(n, s, i), R(s, r, i);
    },
    p(s, i) {
      i & 1 && n !== (n = br(s[0]) + "") && e.p(n);
    },
    d(s) {
      s && (p(r), e.d());
    },
  };
}
function co(t) {
  let e = t[1] && ke(t[0]),
    n,
    r = e && wr(t);
  return {
    c() {
      r && r.c(), (n = J());
    },
    l(s) {
      r && r.l(s), (n = J());
    },
    m(s, i) {
      r && r.m(s, i), R(s, n, i);
    },
    p(s, [i]) {
      i & 3 && (e = s[1] && ke(s[0])),
        e
          ? r
            ? r.p(s, i)
            : ((r = wr(s)), r.c(), r.m(n.parentNode, n))
          : r && (r.d(1), (r = null));
    },
    i: L,
    o: L,
    d(s) {
      s && p(n), r && r.d(s);
    },
  };
}
function uo(t, e, n) {
  let { text: r = void 0 } = e,
    s = !1;
  return (
    $t(async () => n(1, (s = !0))),
    (t.$$set = (i) => {
      "text" in i && n(0, (r = i.text));
    }),
    [r, s]
  );
}
class fo extends te {
  constructor(e) {
    super(), ee(this, e, uo, co, Q, { text: 0 });
  }
}
var fn;
(function (t) {
  (t.DARK = "dark"), (t.LIGHT = "light");
})(fn || (fn = {}));
const xs = () =>
    typeof process < "u" &&
    process.versions != null &&
    process.versions.node != null,
  Os = ({ obj: t, value: e }) => Object.values(t).includes(e),
  Is = "theme",
  ho = "nnsTheme",
  po = () => {
    if (xs()) return;
    const t = document.documentElement.getAttribute(Is),
      e = Os({ obj: fn, value: t }) ? t : fn.DARK;
    return mo({ theme: e, preserve: !1 }), e;
  },
  mo = ({ theme: t, preserve: e = !0 }) => {
    const { documentElement: n, head: r } = document;
    n.setAttribute(Is, t);
    const s = getComputedStyle(n).getPropertyValue("--theme-color");
    r?.children?.namedItem("theme-color")?.setAttribute("content", s.trim()),
      e && localStorage.setItem(ho, JSON.stringify(t));
  };
po();
var Je;
(function (t) {
  (t.COLLAPSED = "collapsed"), (t.EXPANDED = "expanded");
})(Je || (Je = {}));
const Rs = "menu",
  _o = "nnsMenu",
  go = () => {
    if (xs()) return;
    const t = document.documentElement.getAttribute(Rs),
      e = Os({ obj: Je, value: t }) ? t : Je.EXPANDED;
    return Fs({ menu: e, preserve: !1 }), e;
  },
  Fs = ({ menu: t, preserve: e = !0 }) => {
    const { documentElement: n } = document;
    n.setAttribute(Rs, t), e && localStorage.setItem(_o, JSON.stringify(t));
  },
  vo = go(),
  bo = () => {
    const { subscribe: t, update: e } = Fe(vo);
    return {
      subscribe: t,
      toggle: () => {
        e((n) => {
          const r = n === Je.EXPANDED ? Je.COLLAPSED : Je.EXPANDED;
          return Fs({ menu: r, preserve: !0 }), r;
        });
      },
    };
  },
  yo = bo();
kt(yo, (t) => t === Je.COLLAPSED);
const wo = (t) => ({}),
  $r = (t) => ({}),
  $o = (t) => ({}),
  kr = (t) => ({}),
  ko = (t) => ({}),
  Er = (t) => ({});
function Ar(t) {
  let e, n, r, s, i, l, o, a, c, f, h, d, _, m, v, b, S, O;
  (n = new Dl({ props: { disablePointerEvents: t[3] } })),
    n.$on("nnsClose", t[14]);
  let T = t[4] && Cr(t);
  const k = t[11]["sub-title"],
    C = _t(k, t, t[10], kr),
    E = t[11].default,
    A = _t(E, t, t[10], null);
  let F = t[5] && Pr(t);
  return {
    c() {
      (e = w("div")),
        q(n.$$.fragment),
        (r = D()),
        (s = w("div")),
        T && T.c(),
        (i = D()),
        (l = w("div")),
        C && C.c(),
        (o = D()),
        (a = w("div")),
        (c = w("div")),
        A && A.c(),
        (f = D()),
        F && F.c(),
        this.h();
    },
    l(x) {
      e = $(x, "DIV", {
        class: !0,
        role: !0,
        "data-tid": !0,
        "aria-labelledby": !0,
        "aria-describedby": !0,
      });
      var j = y(e);
      K(n.$$.fragment, j), (r = M(j)), (s = $(j, "DIV", { class: !0 }));
      var z = y(s);
      T && T.l(z), (i = M(z)), (l = $(z, "DIV", { class: !0 }));
      var ue = y(l);
      C && C.l(ue), (o = M(ue)), (a = $(ue, "DIV", { class: !0 }));
      var se = y(a);
      c = $(se, "DIV", { class: !0, id: !0 });
      var ge = y(c);
      A && A.l(ge),
        ge.forEach(p),
        se.forEach(p),
        ue.forEach(p),
        (f = M(z)),
        F && F.l(z),
        z.forEach(p),
        j.forEach(p),
        this.h();
    },
    h() {
      u(c, "class", "content svelte-1bbimtl"),
        u(c, "id", t[9]),
        pe(c, "alert", t[1] === "alert"),
        u(a, "class", "container svelte-1bbimtl"),
        u(l, "class", "container-wrapper svelte-1bbimtl"),
        u(s, "class", (h = Qe(`wrapper ${t[1]}`) + " svelte-1bbimtl")),
        u(e, "class", "modal svelte-1bbimtl"),
        u(e, "role", t[1]),
        u(e, "data-tid", t[2]),
        u(e, "aria-labelledby", (m = t[4] ? t[8] : void 0)),
        u(e, "aria-describedby", t[9]);
    },
    m(x, j) {
      R(x, e, j),
        V(n, e, null),
        g(e, r),
        g(e, s),
        T && T.m(s, null),
        g(s, i),
        g(s, l),
        C && C.m(l, null),
        g(l, o),
        g(l, a),
        g(a, c),
        A && A.m(c, null),
        g(s, f),
        F && F.m(s, null),
        (b = !0),
        S ||
          ((O = [fe(e, "introend", t[12]), fe(e, "click", In(t[13]))]),
          (S = !0));
    },
    p(x, j) {
      t = x;
      const z = {};
      j & 8 && (z.disablePointerEvents = t[3]),
        n.$set(z),
        t[4]
          ? T
            ? (T.p(t, j), j & 16 && P(T, 1))
            : ((T = Cr(t)), T.c(), P(T, 1), T.m(s, i))
          : T &&
            (me(),
            N(T, 1, 1, () => {
              T = null;
            }),
            _e()),
        C &&
          C.p &&
          (!b || j & 1024) &&
          vt(C, k, t, t[10], b ? gt(k, t[10], j, $o) : bt(t[10]), kr),
        A &&
          A.p &&
          (!b || j & 1024) &&
          vt(A, E, t, t[10], b ? gt(E, t[10], j, null) : bt(t[10]), null),
        (!b || j & 2) && pe(c, "alert", t[1] === "alert"),
        t[5]
          ? F
            ? (F.p(t, j), j & 32 && P(F, 1))
            : ((F = Pr(t)), F.c(), P(F, 1), F.m(s, null))
          : F &&
            (me(),
            N(F, 1, 1, () => {
              F = null;
            }),
            _e()),
        (!b ||
          (j & 2 && h !== (h = Qe(`wrapper ${t[1]}`) + " svelte-1bbimtl"))) &&
          u(s, "class", h),
        (!b || j & 2) && u(e, "role", t[1]),
        (!b || j & 4) && u(e, "data-tid", t[2]),
        (!b || (j & 16 && m !== (m = t[4] ? t[8] : void 0))) &&
          u(e, "aria-labelledby", m);
    },
    i(x) {
      b ||
        (P(n.$$.fragment, x),
        P(T),
        P(C, x),
        P(A, x),
        P(F),
        xe(() => {
          b && (_ && _.end(1), (d = pn(s, Me, { duration: Ao })), d.start());
        }),
        xe(() => {
          b && (v || (v = en(e, Me, { duration: 25 }, !0)), v.run(1));
        }),
        (b = !0));
    },
    o(x) {
      N(n.$$.fragment, x),
        N(T),
        N(C, x),
        N(A, x),
        N(F),
        d && d.invalidate(),
        (_ = Dn(s, Me, { duration: Co })),
        v || (v = en(e, Me, { duration: 25 }, !1)),
        v.run(0),
        (b = !1);
    },
    d(x) {
      x && p(e),
        U(n),
        T && T.d(),
        C && C.d(x),
        A && A.d(x),
        F && F.d(),
        x && _ && _.end(),
        x && v && v.end(),
        (S = !1),
        Te(O);
    },
  };
}
function Cr(t) {
  let e, n, r, s;
  const i = t[11].title,
    l = _t(i, t, t[10], Er);
  let o = !t[3] && Tr(t);
  return {
    c() {
      (e = w("div")),
        (n = w("h2")),
        l && l.c(),
        (r = D()),
        o && o.c(),
        this.h();
    },
    l(a) {
      e = $(a, "DIV", { class: !0 });
      var c = y(e);
      n = $(c, "H2", { id: !0, "data-tid": !0, class: !0 });
      var f = y(n);
      l && l.l(f),
        f.forEach(p),
        (r = M(c)),
        o && o.l(c),
        c.forEach(p),
        this.h();
    },
    h() {
      u(n, "id", t[8]),
        u(n, "data-tid", "modal-title"),
        u(n, "class", "svelte-1bbimtl"),
        u(e, "class", "header svelte-1bbimtl");
    },
    m(a, c) {
      R(a, e, c),
        g(e, n),
        l && l.m(n, null),
        g(e, r),
        o && o.m(e, null),
        (s = !0);
    },
    p(a, c) {
      l &&
        l.p &&
        (!s || c & 1024) &&
        vt(l, i, a, a[10], s ? gt(i, a[10], c, ko) : bt(a[10]), Er),
        a[3]
          ? o &&
            (me(),
            N(o, 1, 1, () => {
              o = null;
            }),
            _e())
          : o
            ? (o.p(a, c), c & 8 && P(o, 1))
            : ((o = Tr(a)), o.c(), P(o, 1), o.m(e, null));
    },
    i(a) {
      s || (P(l, a), P(o), (s = !0));
    },
    o(a) {
      N(l, a), N(o), (s = !1);
    },
    d(a) {
      a && p(e), l && l.d(a), o && o.d();
    },
  };
}
function Tr(t) {
  let e, n, r, s, i, l;
  return (
    (n = new Ns({ props: { size: "24px" } })),
    {
      c() {
        (e = w("button")), q(n.$$.fragment), this.h();
      },
      l(o) {
        e = $(o, "BUTTON", { "data-tid": !0, "aria-label": !0, class: !0 });
        var a = y(e);
        K(n.$$.fragment, a), a.forEach(p), this.h();
      },
      h() {
        u(e, "data-tid", "close-modal"),
          u(e, "aria-label", (r = t[6].core.close)),
          u(e, "class", "svelte-1bbimtl");
      },
      m(o, a) {
        R(o, e, a),
          V(n, e, null),
          (s = !0),
          i || ((l = fe(e, "click", In(t[7]))), (i = !0));
      },
      p(o, a) {
        (!s || (a & 64 && r !== (r = o[6].core.close))) &&
          u(e, "aria-label", r);
      },
      i(o) {
        s || (P(n.$$.fragment, o), (s = !0));
      },
      o(o) {
        N(n.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && p(e), U(n), (i = !1), l();
      },
    }
  );
}
function Pr(t) {
  let e, n;
  const r = t[11].footer,
    s = _t(r, t, t[10], $r);
  return {
    c() {
      (e = w("div")), s && s.c(), this.h();
    },
    l(i) {
      e = $(i, "DIV", { class: !0 });
      var l = y(e);
      s && s.l(l), l.forEach(p), this.h();
    },
    h() {
      u(e, "class", "footer toolbar svelte-1bbimtl");
    },
    m(i, l) {
      R(i, e, l), s && s.m(e, null), (n = !0);
    },
    p(i, l) {
      s &&
        s.p &&
        (!n || l & 1024) &&
        vt(s, r, i, i[10], n ? gt(r, i[10], l, wo) : bt(i[10]), $r);
    },
    i(i) {
      n || (P(s, i), (n = !0));
    },
    o(i) {
      N(s, i), (n = !1);
    },
    d(i) {
      i && p(e), s && s.d(i);
    },
  };
}
function Eo(t) {
  let e,
    n,
    r = t[0] && Ar(t);
  return {
    c() {
      r && r.c(), (e = J());
    },
    l(s) {
      r && r.l(s), (e = J());
    },
    m(s, i) {
      r && r.m(s, i), R(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[0]
        ? r
          ? (r.p(s, i), i & 1 && P(r, 1))
          : ((r = Ar(s)), r.c(), P(r, 1), r.m(e.parentNode, e))
        : r &&
          (me(),
          N(r, 1, 1, () => {
            r = null;
          }),
          _e());
    },
    i(s) {
      n || (P(r), (n = !0));
    },
    o(s) {
      N(r), (n = !1);
    },
    d(s) {
      s && p(e), r && r.d(s);
    },
  };
}
const Ao = 125,
  Co = 200;
function To(t, e, n) {
  let r;
  je(t, Xn, (k) => n(6, (r = k)));
  let { $$slots: s = {}, $$scope: i } = e;
  const l = Hs(s);
  let { visible: o = !0 } = e,
    { role: a = "dialog" } = e,
    { testId: c = void 0 } = e,
    { disablePointerEvents: f = !1 } = e,
    h,
    d;
  const _ = es(),
    m = () => _("nnsClose"),
    v = yr("modal-title-"),
    b = yr("modal-content-");
  function S(k) {
    yn.call(this, t, k);
  }
  function O(k) {
    yn.call(this, t, k);
  }
  function T(k) {
    yn.call(this, t, k);
  }
  return (
    (t.$$set = (k) => {
      "visible" in k && n(0, (o = k.visible)),
        "role" in k && n(1, (a = k.role)),
        "testId" in k && n(2, (c = k.testId)),
        "disablePointerEvents" in k && n(3, (f = k.disablePointerEvents)),
        "$$scope" in k && n(10, (i = k.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 2 && n(5, (d = ke(l.footer) && a === "alert"));
    }),
    n(4, (h = ke(l.title))),
    [o, a, c, f, h, d, r, m, v, b, i, s, S, O, T]
  );
}
class Po extends te {
  constructor(e) {
    super(),
      ee(this, e, To, Eo, Q, {
        visible: 0,
        role: 1,
        testId: 2,
        disablePointerEvents: 3,
      });
  }
}
const So = () => {
    const { subscribe: t, update: e, set: n } = Fe([]);
    return {
      subscribe: t,
      show({ id: r, ...s }) {
        const i = r ?? Symbol("toast");
        return e((l) => [...l, { ...s, id: i }]), i;
      },
      hide(r) {
        e((s) => s.filter(({ id: i }) => i !== r));
      },
      update({ id: r, content: s }) {
        e((i) => i.map((l) => (l.id !== r ? l : { ...l, ...s })));
      },
      reset(r) {
        if (ke(r) && r.length > 0) {
          e((s) => s.filter(({ level: i }) => !r.includes(i)));
          return;
        }
        n([]);
      },
    };
  },
  Gn = So();
function No(t) {
  let e, n, r;
  var s = t[12](t[1]);
  function i(l, o) {
    return { props: { size: At } };
  }
  return (
    s && (e = Be(s, i())),
    {
      c() {
        e && q(e.$$.fragment), (n = J());
      },
      l(l) {
        e && K(e.$$.fragment, l), (n = J());
      },
      m(l, o) {
        e && V(e, l, o), R(l, n, o), (r = !0);
      },
      p(l, o) {
        if (o & 2 && s !== (s = l[12](l[1]))) {
          if (e) {
            me();
            const a = e;
            N(a.$$.fragment, 1, 0, () => {
              U(a, 1);
            }),
              _e();
          }
          s
            ? ((e = Be(s, i())),
              q(e.$$.fragment),
              P(e.$$.fragment, 1),
              V(e, n.parentNode, n))
            : (e = null);
        }
      },
      i(l) {
        r || (e && P(e.$$.fragment, l), (r = !0));
      },
      o(l) {
        e && N(e.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && p(n), e && U(e, l);
      },
    }
  );
}
function xo(t) {
  let e, n, r;
  var s = t[5];
  function i(l, o) {
    return {};
  }
  return (
    s && (e = Be(s, i())),
    {
      c() {
        e && q(e.$$.fragment), (n = J());
      },
      l(l) {
        e && K(e.$$.fragment, l), (n = J());
      },
      m(l, o) {
        e && V(e, l, o), R(l, n, o), (r = !0);
      },
      p(l, o) {
        if (o & 32 && s !== (s = l[5])) {
          if (e) {
            me();
            const a = e;
            N(a.$$.fragment, 1, 0, () => {
              U(a, 1);
            }),
              _e();
          }
          s
            ? ((e = Be(s, i())),
              q(e.$$.fragment),
              P(e.$$.fragment, 1),
              V(e, n.parentNode, n))
            : (e = null);
        }
      },
      i(l) {
        r || (e && P(e.$$.fragment, l), (r = !0));
      },
      o(l) {
        e && N(e.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && p(n), e && U(e, l);
      },
    }
  );
}
function Oo(t) {
  let e, n;
  return (
    (e = new bn({ props: { size: "small", inline: !0 } })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p: L,
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
function Sr(t) {
  let e, n;
  return {
    c() {
      (e = w("span")), (n = ye(t[3])), this.h();
    },
    l(r) {
      e = $(r, "SPAN", { class: !0 });
      var s = y(e);
      (n = Ce(s, t[3])), s.forEach(p), this.h();
    },
    h() {
      u(e, "class", "title svelte-w1j1kj");
    },
    m(r, s) {
      R(r, e, s), g(e, n);
    },
    p(r, s) {
      s & 8 && Ge(n, r[3]);
    },
    d(r) {
      r && p(e);
    },
  };
}
function Io(t) {
  let e;
  return {
    c() {
      e = ye(t[0]);
    },
    l(n) {
      e = Ce(n, t[0]);
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & 1 && Ge(e, n[0]);
    },
    i: L,
    o: L,
    d(n) {
      n && p(e);
    },
  };
}
function Ro(t) {
  let e, n;
  return (
    (e = new fo({ props: { text: t[0] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, s) {
        const i = {};
        s & 1 && (i.text = r[0]), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
function Fo(t) {
  let e,
    n,
    r,
    s,
    i,
    l,
    o,
    a,
    c,
    f = ke(t[3]),
    h,
    d,
    _,
    m,
    v,
    b,
    S,
    O,
    T,
    k,
    C,
    E,
    A;
  const F = [Oo, xo, No],
    x = [];
  function j(X, H) {
    return (
      H & 32 && (r = null),
      H & 2 && (s = null),
      X[2]
        ? 0
        : (r == null && (r = !!ke(X[5])),
          r ? 1 : (s == null && (s = !!X[12](X[1])), s ? 2 : -1))
    );
  }
  ~(i = j(t, -1)) && (l = x[i] = F[i](t));
  let z = f && Sr(t);
  const ue = [Ro, Io],
    se = [];
  function ge(X, H) {
    return X[7] ? 0 : 1;
  }
  return (
    (d = ge(t)),
    (_ = se[d] = ue[d](t)),
    (b = new Ns({})),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          l && l.c(),
          (a = D()),
          (c = w("p")),
          z && z.c(),
          (h = D()),
          _.c(),
          (m = D()),
          (v = w("button")),
          q(b.$$.fragment),
          this.h();
      },
      l(X) {
        e = $(X, "DIV", { role: !0, class: !0 });
        var H = y(e);
        n = $(H, "DIV", { class: !0, "aria-hidden": !0 });
        var he = y(n);
        l && l.l(he),
          he.forEach(p),
          (a = M(H)),
          (c = $(H, "P", { class: !0, style: !0 }));
        var we = y(c);
        z && z.l(we),
          (h = M(we)),
          _.l(we),
          we.forEach(p),
          (m = M(H)),
          (v = $(H, "BUTTON", { class: !0, "aria-label": !0 }));
        var Ee = y(v);
        K(b.$$.fragment, Ee), Ee.forEach(p), H.forEach(p), this.h();
      },
      h() {
        u(n, "class", (o = "icon " + t[1] + " svelte-w1j1kj")),
          u(n, "aria-hidden", "true"),
          u(c, "class", "msg svelte-w1j1kj"),
          u(c, "style", t[14]),
          pe(c, "truncate", t[9]),
          pe(c, "clamp", t[10]),
          pe(c, "scroll", t[8]),
          u(v, "class", "close svelte-w1j1kj"),
          u(v, "aria-label", (S = t[11].core.close)),
          u(e, "role", "dialog"),
          u(
            e,
            "class",
            (O = Qe(`toast ${t[6] ?? "themed"}`) + " svelte-w1j1kj"),
          );
      },
      m(X, H) {
        R(X, e, H),
          g(e, n),
          ~i && x[i].m(n, null),
          g(e, a),
          g(e, c),
          z && z.m(c, null),
          g(c, h),
          se[d].m(c, null),
          g(e, m),
          g(e, v),
          V(b, v, null),
          (C = !0),
          E || ((A = fe(v, "click", t[13])), (E = !0));
      },
      p(X, [H]) {
        t = X;
        let he = i;
        (i = j(t, H)),
          i === he
            ? ~i && x[i].p(t, H)
            : (l &&
                (me(),
                N(x[he], 1, 1, () => {
                  x[he] = null;
                }),
                _e()),
              ~i
                ? ((l = x[i]),
                  l ? l.p(t, H) : ((l = x[i] = F[i](t)), l.c()),
                  P(l, 1),
                  l.m(n, null))
                : (l = null)),
          (!C || (H & 2 && o !== (o = "icon " + t[1] + " svelte-w1j1kj"))) &&
            u(n, "class", o),
          H & 8 && (f = ke(t[3])),
          f
            ? z
              ? z.p(t, H)
              : ((z = Sr(t)), z.c(), z.m(c, h))
            : z && (z.d(1), (z = null));
        let we = d;
        (d = ge(t)),
          d === we
            ? se[d].p(t, H)
            : (me(),
              N(se[we], 1, 1, () => {
                se[we] = null;
              }),
              _e(),
              (_ = se[d]),
              _ ? _.p(t, H) : ((_ = se[d] = ue[d](t)), _.c()),
              P(_, 1),
              _.m(c, null)),
          (!C || H & 512) && pe(c, "truncate", t[9]),
          (!C || H & 1024) && pe(c, "clamp", t[10]),
          (!C || H & 256) && pe(c, "scroll", t[8]),
          (!C || (H & 2048 && S !== (S = t[11].core.close))) &&
            u(v, "aria-label", S),
          (!C ||
            (H & 64 &&
              O !==
                (O = Qe(`toast ${t[6] ?? "themed"}`) + " svelte-w1j1kj"))) &&
            u(e, "class", O);
      },
      i(X) {
        C ||
          (P(l),
          P(_),
          P(b.$$.fragment, X),
          xe(() => {
            C &&
              (k && k.end(1),
              (T = pn(e, xl, {
                y: (t[4] === "top" ? -1 : 1) * 100,
                duration: 200,
              })),
              T.start());
          }),
          (C = !0));
      },
      o(X) {
        N(l),
          N(_),
          N(b.$$.fragment, X),
          T && T.invalidate(),
          (k = Dn(e, Me, { delay: 100 })),
          (C = !1);
      },
      d(X) {
        X && p(e),
          ~i && x[i].d(),
          z && z.d(),
          se[d].d(),
          U(b),
          X && k && k.end(),
          (E = !1),
          A();
      },
    }
  );
}
function Lo(t, e, n) {
  let r;
  je(t, Xn, (A) => n(11, (r = A)));
  let { msg: s } = e;
  const i = (A) =>
      ({ success: Gl, warn: lo, error: eo, info: ro, custom: void 0 })[A],
    l = () => Gn.hide(s.id);
  let o, a, c, f, h, d, _, m, v, b, S, O, T;
  const k = () => {
      const { duration: A } = s;
      Ot(A) || (T = setTimeout(l, A));
    },
    C = () => {
      Ot(T) || clearTimeout(T);
    },
    E = `min-height: ${At}px;`;
  return (
    $t(k),
    Qr(C),
    (t.$$set = (A) => {
      "msg" in A && n(15, (s = A.msg));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 32768 &&
        n(
          0,
          ({
            text: o,
            level: a,
            spinner: c,
            title: f,
            overflow: h,
            position: d,
            icon: _,
            theme: m,
            renderAsHtml: v,
          } = s),
          o,
          (n(1, a), n(15, s)),
          (n(2, c), n(15, s)),
          (n(3, f), n(15, s)),
          (n(16, h), n(15, s)),
          (n(4, d), n(15, s)),
          (n(5, _), n(15, s)),
          (n(6, m), n(15, s)),
          (n(7, v), n(15, s)),
        ),
        t.$$.dirty & 65536 && n(8, (b = h === void 0 || h === "scroll")),
        t.$$.dirty & 65536 && n(9, (S = h === "truncate")),
        t.$$.dirty & 65536 && n(10, (O = h === "clamp"));
    }),
    [o, a, c, f, d, _, m, v, b, S, O, r, i, l, E, s, h]
  );
}
class Do extends te {
  constructor(e) {
    super(), ee(this, e, Lo, Fo, Q, { msg: 15 });
  }
}
function Nr(t, e, n) {
  const r = t.slice();
  return (r[5] = e[n]), r;
}
function xr(t) {
  let e,
    n = [],
    r = new Map(),
    s,
    i,
    l,
    o = ct(t[1]);
  const a = (c) => c[5].id;
  for (let c = 0; c < o.length; c += 1) {
    let f = Nr(t, o, c),
      h = a(f);
    r.set(h, (n[c] = Or(h, f)));
  }
  return {
    c() {
      e = w("div");
      for (let c = 0; c < n.length; c += 1) n[c].c();
      this.h();
    },
    l(c) {
      e = $(c, "DIV", { class: !0, style: !0 });
      var f = y(e);
      for (let h = 0; h < n.length; h += 1) n[h].l(f);
      f.forEach(p), this.h();
    },
    h() {
      u(e, "class", (s = Qe(`wrapper ${t[0]}`) + " svelte-24m335")),
        u(e, "style", (i = `--layout-bottom-offset: ${t[3]}px`)),
        pe(e, "error", t[2]);
    },
    m(c, f) {
      R(c, e, f);
      for (let h = 0; h < n.length; h += 1) n[h] && n[h].m(e, null);
      l = !0;
    },
    p(c, f) {
      f & 2 &&
        ((o = ct(c[1])),
        me(),
        (n = fi(n, f, a, 1, c, o, r, e, ui, Or, null, Nr)),
        _e()),
        (!l ||
          (f & 1 && s !== (s = Qe(`wrapper ${c[0]}`) + " svelte-24m335"))) &&
          u(e, "class", s),
        (!l || (f & 8 && i !== (i = `--layout-bottom-offset: ${c[3]}px`))) &&
          u(e, "style", i),
        (!l || f & 5) && pe(e, "error", c[2]);
    },
    i(c) {
      if (!l) {
        for (let f = 0; f < o.length; f += 1) P(n[f]);
        l = !0;
      }
    },
    o(c) {
      for (let f = 0; f < n.length; f += 1) N(n[f]);
      l = !1;
    },
    d(c) {
      c && p(e);
      for (let f = 0; f < n.length; f += 1) n[f].d();
    },
  };
}
function Or(t, e) {
  let n, r, s;
  return (
    (r = new Do({ props: { msg: e[5] } })),
    {
      key: t,
      first: null,
      c() {
        (n = J()), q(r.$$.fragment), this.h();
      },
      l(i) {
        (n = J()), K(r.$$.fragment, i), this.h();
      },
      h() {
        this.first = n;
      },
      m(i, l) {
        R(i, n, l), V(r, i, l), (s = !0);
      },
      p(i, l) {
        e = i;
        const o = {};
        l & 2 && (o.msg = e[5]), r.$set(o);
      },
      i(i) {
        s || (P(r.$$.fragment, i), (s = !0));
      },
      o(i) {
        N(r.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && p(n), U(r, i);
      },
    }
  );
}
function Mo(t) {
  let e,
    n,
    r = t[1].length > 0 && xr(t);
  return {
    c() {
      r && r.c(), (e = J());
    },
    l(s) {
      r && r.l(s), (e = J());
    },
    m(s, i) {
      r && r.m(s, i), R(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[1].length > 0
        ? r
          ? (r.p(s, i), i & 2 && P(r, 1))
          : ((r = xr(s)), r.c(), P(r, 1), r.m(e.parentNode, e))
        : r &&
          (me(),
          N(r, 1, 1, () => {
            r = null;
          }),
          _e());
    },
    i(s) {
      n || (P(r), (n = !0));
    },
    o(s) {
      N(r), (n = !1);
    },
    d(s) {
      s && p(e), r && r.d(s);
    },
  };
}
function jo(t, e, n) {
  let r, s;
  je(t, Gn, (a) => n(4, (r = a))), je(t, Ml, (a) => n(3, (s = a)));
  let { position: i = "bottom" } = e,
    l = [],
    o;
  return (
    (t.$$set = (a) => {
      "position" in a && n(0, (i = a.position));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 17 &&
        n(1, (l = r.filter(({ position: a }) => (a ?? "bottom") === i))),
        t.$$.dirty & 2 &&
          n(
            2,
            (o =
              l.find(({ level: a }) => ["error", "warn"].includes(a)) !==
              void 0),
          );
    }),
    [i, l, o, s, r]
  );
}
class Bo extends te {
  constructor(e) {
    super(), ee(this, e, jo, Mo, Q, { position: 0 });
  }
}
const zo = ({ msg: { text: t, ...e }, err: n }) => (
    ke(n) && console.error(n),
    Gn.show({ text: `${t}${ke(n) ? ` / ${Al(n)}` : ""}`, ...e, level: "error" })
  ),
  Vo = (t) => {
    if (!Uo()) {
      window.location.replace(t);
      return;
    }
    history.replaceState({}, "", t);
  },
  Uo = () =>
    window.history !== void 0 &&
    "pushState" in window.history &&
    typeof window.history.pushState < "u",
  Ho = async () =>
    qo({
      msg: {
        text: "You have been logged out because your session has expired.",
        level: "warn",
      },
    }),
  qo = async ({ msg: t = void 0 }) => {
    un.startBusy({ initiator: "sign-out", text: "Disconnecting..." }),
      await Ie.signOut(),
      t && Xo(t),
      un.stopBusy("sign-out"),
      window.location.reload();
  },
  Ko = "msg",
  Wo = "level",
  Xo = (t) => {
    const { text: e, level: n } = t,
      r = new URL(window.location.href);
    r.searchParams.append(Ko, encodeURI(e)),
      r.searchParams.append(Wo, n),
      Vo(r);
  },
  Go = async () => {
    const t = await qe(
        () => Promise.resolve().then(() => Xa),
        void 0,
        import.meta.url,
      ),
      e = new t.default();
    return (
      (e.onmessage = async ({ data: n }) => {
        const { msg: r, data: s } = n;
        switch (r) {
          case "signOutIdleTimer":
            await Ho();
            return;
          case "delegationRemainingTime":
            El.set(s?.authRemainingTime);
            return;
        }
      }),
      {
        syncAuthIdle: (n) => {
          if (!n.identity) {
            e.postMessage({ msg: "stopIdleTimer" });
            return;
          }
          e.postMessage({ msg: "startIdleTimer" });
        },
      }
    );
  };
function Yo(t) {
  let e, n, r, s;
  return {
    c() {
      (e = W("svg")),
        (n = W("rect")),
        (r = W("rect")),
        (s = W("rect")),
        this.h();
    },
    l(i) {
      e = Y(i, "svg", { class: !0, viewBox: !0, fill: !0, xmlns: !0 });
      var l = y(e);
      (n = Y(l, "rect", { y: !0, width: !0, height: !0, fill: !0 })),
        y(n).forEach(p),
        (r = Y(l, "rect", { y: !0, width: !0, height: !0, fill: !0 })),
        y(r).forEach(p),
        (s = Y(l, "rect", { y: !0, width: !0, height: !0, fill: !0 })),
        y(s).forEach(p),
        l.forEach(p),
        this.h();
    },
    h() {
      u(n, "y", "4"),
        u(n, "width", "24"),
        u(n, "height", "2"),
        u(n, "fill", t[1]),
        u(r, "y", "11"),
        u(r, "width", "24"),
        u(r, "height", "2"),
        u(r, "fill", t[1]),
        u(s, "y", "18"),
        u(s, "width", "24"),
        u(s, "height", "2"),
        u(s, "fill", t[1]),
        u(e, "class", t[0]),
        u(e, "viewBox", "0 0 24 24"),
        u(e, "fill", "none"),
        u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, l) {
      R(i, e, l), g(e, n), g(e, r), g(e, s);
    },
    p(i, [l]) {
      l & 2 && u(n, "fill", i[1]),
        l & 2 && u(r, "fill", i[1]),
        l & 2 && u(s, "fill", i[1]),
        l & 1 && u(e, "class", i[0]);
    },
    i: L,
    o: L,
    d(i) {
      i && p(e);
    },
  };
}
function Zo(t, e, n) {
  let { className: r = "w-6" } = e,
    { fill: s = "#FFFFFF" } = e;
  return (
    (t.$$set = (i) => {
      "className" in i && n(0, (r = i.className)),
        "fill" in i && n(1, (s = i.fill));
    }),
    [r, s]
  );
}
class Jo extends te {
  constructor(e) {
    super(), ee(this, e, Zo, Yo, Q, { className: 0, fill: 1 });
  }
}
const Qo = "nn75s-ayupf-j6mj3-kluyb-wjj7y-eang2-dwzzr-cfdxk-etbw7-cgwnb-lqe",
  ea = kt(Ie, ({ identity: t }) => t != null);
kt(Ie, ({ identity: t }) => t != null && t.getPrincipal().toString() === Qo);
const { window: ta } = qs;
function Ir(t, e, n) {
  const r = t.slice();
  return (r[20] = e[n]), r;
}
function Rr(t, e, n) {
  const r = t.slice();
  return (r[20] = e[n]), r;
}
function na(t) {
  return { c: L, l: L, m: L, p: L, i: L, o: L, d: L };
}
function ra(t) {
  let e,
    n,
    r,
    s,
    i,
    l,
    o,
    a = "Transfer Kings",
    c,
    f,
    h,
    d,
    _,
    m,
    v,
    b = "Options",
    S,
    O,
    T =
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>',
    k,
    C,
    E,
    A,
    F,
    x,
    j,
    z,
    ue,
    se,
    ge,
    X,
    H,
    he,
    we;
  (r = new Jo({ props: { fill: "#FFFFFF", className: "w-5 m-1" } })),
    (f = new et({ props: { fill: "#FFFFFF", className: "w-4 m-1" } }));
  let Ee = ct(t[3]),
    ne = [];
  for (let I = 0; I < Ee.length; I += 1) ne[I] = Fr(Rr(t, Ee, I));
  let ze = ct(t[5]),
    ae = [];
  for (let I = 0; I < ze.length; I += 1) ae[I] = Lr(Ir(t, ze, I));
  const $e = t[14].default,
    ie = _t($e, t, t[13], null);
  return (
    (X = new Bo({})),
    {
      c() {
        (e = w("div")),
          (n = w("button")),
          q(r.$$.fragment),
          (s = D()),
          (i = w("div")),
          (l = w("a")),
          (o = w("p")),
          (o.textContent = a),
          (c = D()),
          q(f.$$.fragment),
          (h = D()),
          (d = w("aside")),
          (_ = w("div")),
          (m = w("div")),
          (v = w("h2")),
          (v.textContent = b),
          (S = D()),
          (O = w("button")),
          (O.innerHTML = T),
          (k = D()),
          (C = w("ul"));
        for (let I = 0; I < ne.length; I += 1) ne[I].c();
        (E = D()), (A = w("div")), (F = w("div")), (x = D()), (j = w("ul"));
        for (let I = 0; I < ae.length; I += 1) ae[I].c();
        (z = D()),
          (ue = w("div")),
          (se = w("div")),
          ie && ie.c(),
          (ge = D()),
          q(X.$$.fragment),
          this.h();
      },
      l(I) {
        e = $(I, "DIV", { class: !0 });
        var le = y(e);
        n = $(le, "BUTTON", { class: !0 });
        var B = y(n);
        K(r.$$.fragment, B),
          B.forEach(p),
          (s = M(le)),
          (i = $(le, "DIV", { class: !0 }));
        var Oe = y(i);
        l = $(Oe, "A", { class: !0, href: !0 });
        var Ve = y(l);
        (o = $(Ve, "P", { class: !0, "data-svelte-h": !0 })),
          oe(o) !== "svelte-12o8gze" && (o.textContent = a),
          (c = M(Ve)),
          K(f.$$.fragment, Ve),
          Ve.forEach(p),
          Oe.forEach(p),
          le.forEach(p),
          (h = M(I)),
          (d = $(I, "ASIDE", { class: !0 }));
        var Ue = y(d);
        _ = $(Ue, "DIV", { class: !0 });
        var Pe = y(_);
        m = $(Pe, "DIV", { class: !0 });
        var Ye = y(m);
        (v = $(Ye, "H2", { class: !0, "data-svelte-h": !0 })),
          oe(v) !== "svelte-1yxjhcx" && (v.textContent = b),
          (S = M(Ye)),
          (O = $(Ye, "BUTTON", { class: !0, "data-svelte-h": !0 })),
          oe(O) !== "svelte-8sut70" && (O.innerHTML = T),
          Ye.forEach(p),
          (k = M(Pe)),
          (C = $(Pe, "UL", { class: !0 }));
        var Tt = y(C);
        for (let G = 0; G < ne.length; G += 1) ne[G].l(Tt);
        Tt.forEach(p),
          Pe.forEach(p),
          (E = M(Ue)),
          (A = $(Ue, "DIV", { class: !0 }));
        var ce = y(A);
        (F = $(ce, "DIV", { class: !0 })),
          y(F).forEach(p),
          (x = M(ce)),
          (j = $(ce, "UL", { class: !0 }));
        var de = y(j);
        for (let G = 0; G < ae.length; G += 1) ae[G].l(de);
        de.forEach(p),
          ce.forEach(p),
          Ue.forEach(p),
          (z = M(I)),
          (ue = $(I, "DIV", { class: !0 }));
        var Z = y(ue);
        se = $(Z, "DIV", { class: !0 });
        var be = y(se);
        ie && ie.l(be),
          be.forEach(p),
          (ge = M(Z)),
          K(X.$$.fragment, Z),
          Z.forEach(p),
          this.h();
      },
      h() {
        u(n, "class", "flex items-center"),
          u(o, "class", "text-sm"),
          u(l, "class", "flex flex-row items-center ml-auto"),
          u(l, "href", "/"),
          u(i, "class", "ml-auto"),
          u(e, "class", "menu-row flex items-center bg-Brand5b w-full p-2"),
          u(v, "class", "text-xl font-bold p-2"),
          u(O, "class", "close-button"),
          u(m, "class", "p-2 flex justify-between items-center"),
          u(C, "class", "mt-4 space-y-2"),
          u(_, "class", "p-2"),
          u(F, "class", "horizontal-divider my-2"),
          u(j, "class", "space-y-2 text-xs"),
          u(A, "class", "less-important p-2"),
          u(d, "class", "bg-Brand5 p-4 svelte-4loizu"),
          pe(d, "expanded", t[1]),
          u(se, "class", "flex-1 p-4"),
          u(ue, "class", "flex");
      },
      m(I, le) {
        R(I, e, le),
          g(e, n),
          V(r, n, null),
          g(e, s),
          g(e, i),
          g(i, l),
          g(l, o),
          g(l, c),
          V(f, l, null),
          R(I, h, le),
          R(I, d, le),
          g(d, _),
          g(_, m),
          g(m, v),
          g(m, S),
          g(m, O),
          g(_, k),
          g(_, C);
        for (let B = 0; B < ne.length; B += 1) ne[B] && ne[B].m(C, null);
        g(d, E), g(d, A), g(A, F), g(A, x), g(A, j);
        for (let B = 0; B < ae.length; B += 1) ae[B] && ae[B].m(j, null);
        t[15](d),
          R(I, z, le),
          R(I, ue, le),
          g(ue, se),
          ie && ie.m(se, null),
          g(ue, ge),
          V(X, ue, null),
          (H = !0),
          he ||
            ((we = [fe(n, "click", t[7]), fe(O, "click", t[8])]), (he = !0));
      },
      p(I, le) {
        if (le & 1545) {
          Ee = ct(I[3]);
          let B;
          for (B = 0; B < Ee.length; B += 1) {
            const Oe = Rr(I, Ee, B);
            ne[B]
              ? ne[B].p(Oe, le)
              : ((ne[B] = Fr(Oe)), ne[B].c(), ne[B].m(C, null));
          }
          for (; B < ne.length; B += 1) ne[B].d(1);
          ne.length = Ee.length;
        }
        if (le & 32) {
          ze = ct(I[5]);
          let B;
          for (B = 0; B < ze.length; B += 1) {
            const Oe = Ir(I, ze, B);
            ae[B]
              ? ae[B].p(Oe, le)
              : ((ae[B] = Lr(Oe)), ae[B].c(), ae[B].m(j, null));
          }
          for (; B < ae.length; B += 1) ae[B].d(1);
          ae.length = ze.length;
        }
        (!H || le & 2) && pe(d, "expanded", I[1]),
          ie &&
            ie.p &&
            (!H || le & 8192) &&
            vt(ie, $e, I, I[13], H ? gt($e, I[13], le, null) : bt(I[13]), null);
      },
      i(I) {
        H ||
          (P(r.$$.fragment, I),
          P(f.$$.fragment, I),
          P(ie, I),
          P(X.$$.fragment, I),
          (H = !0));
      },
      o(I) {
        N(r.$$.fragment, I),
          N(f.$$.fragment, I),
          N(ie, I),
          N(X.$$.fragment, I),
          (H = !1);
      },
      d(I) {
        I && (p(e), p(h), p(d), p(z), p(ue)),
          U(r),
          U(f),
          nr(ne, I),
          nr(ae, I),
          t[15](null),
          ie && ie.d(I),
          U(X),
          (he = !1),
          Te(we);
      },
    }
  );
}
function sa(t) {
  let e,
    n = t[20].name + "",
    r,
    s;
  return {
    c() {
      (e = w("a")), (r = ye(n)), this.h();
    },
    l(i) {
      e = $(i, "A", { href: !0, class: !0 });
      var l = y(e);
      (r = Ce(l, n)), l.forEach(p), this.h();
    },
    h() {
      u(e, "href", (s = t[20].href)),
        u(e, "class", "block rounded hover:bg-Brand5b px-4 py-2");
    },
    m(i, l) {
      R(i, e, l), g(e, r);
    },
    p(i, l) {
      l & 8 && n !== (n = i[20].name + "") && Ge(r, n),
        l & 8 && s !== (s = i[20].href) && u(e, "href", s);
    },
    d(i) {
      i && p(e);
    },
  };
}
function ia(t) {
  let e;
  function n(i, l) {
    return i[0] ? oa : la;
  }
  let r = n(t),
    s = r(t);
  return {
    c() {
      s.c(), (e = J());
    },
    l(i) {
      s.l(i), (e = J());
    },
    m(i, l) {
      s.m(i, l), R(i, e, l);
    },
    p(i, l) {
      r === (r = n(i)) && s
        ? s.p(i, l)
        : (s.d(1), (s = r(i)), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(i) {
      i && p(e), s.d(i);
    },
  };
}
function la(t) {
  let e, n, r, s, i;
  return {
    c() {
      (e = w("a")), (n = ye("Connect")), this.h();
    },
    l(l) {
      e = $(l, "A", { href: !0, class: !0 });
      var o = y(e);
      (n = Ce(o, "Connect")), o.forEach(p), this.h();
    },
    h() {
      u(e, "href", (r = t[20].href)),
        u(e, "class", "block rounded hover:bg-Brand5b px-4 py-2");
    },
    m(l, o) {
      R(l, e, o), g(e, n), s || ((i = fe(e, "click", t[9])), (s = !0));
    },
    p(l, o) {
      o & 8 && r !== (r = l[20].href) && u(e, "href", r);
    },
    d(l) {
      l && p(e), (s = !1), i();
    },
  };
}
function oa(t) {
  let e, n, r, s, i;
  return {
    c() {
      (e = w("a")), (n = ye("Disconnect")), this.h();
    },
    l(l) {
      e = $(l, "A", { href: !0, class: !0 });
      var o = y(e);
      (n = Ce(o, "Disconnect")), o.forEach(p), this.h();
    },
    h() {
      u(e, "href", (r = t[20].href)),
        u(e, "class", "block rounded hover:bg-Brand5b px-4 py-2");
    },
    m(l, o) {
      R(l, e, o), g(e, n), s || ((i = fe(e, "click", t[10])), (s = !0));
    },
    p(l, o) {
      o & 8 && r !== (r = l[20].href) && u(e, "href", r);
    },
    d(l) {
      l && p(e), (s = !1), i();
    },
  };
}
function Fr(t) {
  let e, n;
  function r(l, o) {
    return l[20].name === "Connect" ? ia : sa;
  }
  let s = r(t),
    i = s(t);
  return {
    c() {
      (e = w("li")), i.c(), (n = D());
    },
    l(l) {
      e = $(l, "LI", {});
      var o = y(e);
      i.l(o), (n = M(o)), o.forEach(p);
    },
    m(l, o) {
      R(l, e, o), i.m(e, null), g(e, n);
    },
    p(l, o) {
      s === (s = r(l)) && i
        ? i.p(l, o)
        : (i.d(1), (i = s(l)), i && (i.c(), i.m(e, n)));
    },
    d(l) {
      l && p(e), i.d();
    },
  };
}
function Lr(t) {
  let e,
    n,
    r = t[20].name + "",
    s,
    i;
  return {
    c() {
      (e = w("li")), (n = w("a")), (s = ye(r)), (i = D()), this.h();
    },
    l(l) {
      e = $(l, "LI", {});
      var o = y(e);
      n = $(o, "A", { href: !0, class: !0 });
      var a = y(n);
      (s = Ce(a, r)), a.forEach(p), (i = M(o)), o.forEach(p), this.h();
    },
    h() {
      u(n, "href", t[20].href),
        u(n, "class", "block rounded hover:bg-Brand5b px-4 py-2");
    },
    m(l, o) {
      R(l, e, o), g(e, n), g(n, s), g(e, i);
    },
    p: L,
    d(l) {
      l && p(e);
    },
  };
}
function aa(t) {
  let e, n, r, s;
  return (
    (n = new bn({})),
    {
      c() {
        (e = w("div")), q(n.$$.fragment);
      },
      l(i) {
        e = $(i, "DIV", {});
        var l = y(e);
        K(n.$$.fragment, l), l.forEach(p);
      },
      m(i, l) {
        R(i, e, l), V(n, e, null), (s = !0);
      },
      p: L,
      i(i) {
        s ||
          (P(n.$$.fragment, i),
          i &&
            (r ||
              xe(() => {
                (r = pn(e, Me, {})), r.start();
              })),
          (s = !0));
      },
      o(i) {
        N(n.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && p(e), U(n);
      },
    }
  );
}
function ca(t) {
  let e,
    n,
    r,
    s,
    i,
    l = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !1,
      pending: aa,
      then: ra,
      catch: na,
      value: 19,
      blocks: [, , ,],
    };
  return (
    ai(t[4](), l),
    (n = new Kl({})),
    {
      c() {
        l.block.c(), (e = D()), q(n.$$.fragment);
      },
      l(o) {
        l.block.l(o), (e = M(o)), K(n.$$.fragment, o);
      },
      m(o, a) {
        l.block.m(o, (l.anchor = a)),
          (l.mount = () => e.parentNode),
          (l.anchor = e),
          R(o, e, a),
          V(n, o, a),
          (r = !0),
          s || ((i = fe(ta, "storage", t[6])), (s = !0));
      },
      p(o, [a]) {
        (t = o), ci(l, t, a);
      },
      i(o) {
        r || (P(l.block), P(n.$$.fragment, o), (r = !0));
      },
      o(o) {
        for (let a = 0; a < 3; a += 1) {
          const c = l.blocks[a];
          N(c);
        }
        N(n.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && p(e),
          l.block.d(o),
          (l.token = null),
          (l = null),
          U(n, o),
          (s = !1),
          i();
      },
    }
  );
}
function ua(t, e, n) {
  let r, s, i;
  je(t, Ie, (E) => n(12, (s = E))), je(t, ea, (E) => n(0, (i = E)));
  let { $$slots: l = {}, $$scope: o } = e,
    a = !1,
    c,
    f = 0,
    h;
  const d = async () => await Promise.all([m()]);
  let _ = [{ name: "Game Rules", href: "/rules" }];
  const m = async () => {
      try {
        await Ie.sync();
      } catch (E) {
        zo({
          msg: {
            text: "Unexpected issue while syncing the status of your authentication.",
          },
          err: E,
        });
      }
    },
    v = () => {
      requestAnimationFrame(() => {
        const E = document.querySelector(".menu-row");
        if (E) {
          f = E.clientHeight;
          const A = window.innerHeight - f;
          document.documentElement.style.setProperty(
            "--sidebar-height",
            `${A}px`,
          );
        }
      });
    },
    b = (E) => {
      a && h && !h.contains(E.target) && n(1, (a = !1));
    },
    S = (E) => {
      E.stopPropagation(), n(1, (a = !a));
    },
    O = (E) => {
      E.stopPropagation(), n(1, (a = !1));
    };
  $t(async () => {
    n(11, (c = await Go())),
      window.addEventListener("resize", v),
      document.addEventListener("click", b),
      requestAnimationFrame(() => {
        v();
      });
  }),
    Qr(() => {
      document.removeEventListener("click", b),
        window.removeEventListener("resize", v);
    });
  function T() {
    let E = {
      domain: "http://localhost:8080/?canisterId=qhbym-qaaaa-aaaaa-aaafq-cai",
    };
    Ie.signIn(E);
  }
  function k() {
    Ie.signOut(), Cs("/");
  }
  function C(E) {
    tt[E ? "unshift" : "push"](() => {
      (h = E), n(2, h);
    });
  }
  return (
    (t.$$set = (E) => {
      "$$scope" in E && n(13, (o = E.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 1 &&
        n(
          3,
          (r = i
            ? [
                { name: "Agent Hub", href: "/agent-hub" },
                { name: "Contract Center", href: "/contract-center" },
                { name: "My Agencies", href: "/my-agencies" },
                { name: "Profile", href: "/profile" },
                { name: "Connect", href: "#" },
              ]
            : [{ name: "Connect", href: "#" }]),
        ),
        t.$$.dirty & 6144 && c?.syncAuthIdle(s),
        t.$$.dirty & 4096 &&
          (() => {
            if (s === void 0) return;
            document.querySelector("body > #app-spinner")?.remove();
          })();
    }),
    [i, a, h, r, d, _, m, S, O, T, k, c, s, o, l, C]
  );
}
class Ct extends te {
  constructor(e) {
    super(), ee(this, e, ua, ca, Q, {});
  }
}
function fa(t) {
  let e,
    n,
    r,
    s = "Welcome to Transfer Kings",
    i,
    l,
    o,
    a,
    c = "Become your own football agent.",
    f,
    h,
    d = '<button class="bg-Brand1b my-2 px-4 py-2 rounded-sm">Rules</button>',
    _,
    m,
    v = '<button class="bg-gray-500 my-2 px-4 py-2 rounded-sm">Play</button>',
    b;
  return (
    (l = new et({ props: { fill: "#FFFFFF", className: "w-10 ml-4" } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          (r = w("p")),
          (r.textContent = s),
          (i = D()),
          q(l.$$.fragment),
          (o = D()),
          (a = w("p")),
          (a.textContent = c),
          (f = D()),
          (h = w("a")),
          (h.innerHTML = d),
          (_ = D()),
          (m = w("a")),
          (m.innerHTML = v),
          this.h();
      },
      l(S) {
        e = $(S, "DIV", { class: !0 });
        var O = y(e);
        n = $(O, "DIV", { class: !0 });
        var T = y(n);
        (r = $(T, "P", { class: !0, "data-svelte-h": !0 })),
          oe(r) !== "svelte-f8yx6x" && (r.textContent = s),
          (i = M(T)),
          K(l.$$.fragment, T),
          T.forEach(p),
          (o = M(O)),
          (a = $(O, "P", { class: !0, "data-svelte-h": !0 })),
          oe(a) !== "svelte-12804q6" && (a.textContent = c),
          (f = M(O)),
          (h = $(O, "A", { href: !0, "data-svelte-h": !0 })),
          oe(h) !== "svelte-tn5wjp" && (h.innerHTML = d),
          (_ = M(O)),
          (m = $(O, "A", { href: !0, "data-svelte-h": !0 })),
          oe(m) !== "svelte-kk7z7q" && (m.innerHTML = v),
          O.forEach(p),
          this.h();
      },
      h() {
        u(r, "class", "text-2xl"),
          u(n, "class", "flex flex-row items-center"),
          u(a, "class", "my-2"),
          u(h, "href", "/rules"),
          u(m, "href", "/contract-center"),
          u(e, "class", "p-4");
      },
      m(S, O) {
        R(S, e, O),
          g(e, n),
          g(n, r),
          g(n, i),
          V(l, n, null),
          g(e, o),
          g(e, a),
          g(e, f),
          g(e, h),
          g(e, _),
          g(e, m),
          (b = !0);
      },
      p: L,
      i(S) {
        b || (P(l.$$.fragment, S), (b = !0));
      },
      o(S) {
        N(l.$$.fragment, S), (b = !1);
      },
      d(S) {
        S && p(e), U(l);
      },
    }
  );
}
function da(t) {
  let e, n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [fa] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const i = {};
        s & 1 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
let ha = class extends te {
  constructor(e) {
    super(), ee(this, e, null, da, Q, {});
  }
};
const pa = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: ha },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ma(t) {
  let e,
    n,
    r,
    s,
    i,
    l = "Agent Hub Coming Soon",
    o;
  return (
    (r = new et({ props: { fill: "#FFFFFF", className: "w-6 mr-2" } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          q(r.$$.fragment),
          (s = D()),
          (i = w("p")),
          (i.textContent = l),
          this.h();
      },
      l(a) {
        e = $(a, "DIV", { class: !0 });
        var c = y(e);
        n = $(c, "DIV", { class: !0 });
        var f = y(n);
        K(r.$$.fragment, f),
          (s = M(f)),
          (i = $(f, "P", { class: !0, "data-svelte-h": !0 })),
          oe(i) !== "svelte-z9g5hv" && (i.textContent = l),
          f.forEach(p),
          c.forEach(p),
          this.h();
      },
      h() {
        u(i, "class", "text-xl"),
          u(n, "class", "flex flex-row items-center"),
          u(e, "class", "p-4");
      },
      m(a, c) {
        R(a, e, c), g(e, n), V(r, n, null), g(n, s), g(n, i), (o = !0);
      },
      p: L,
      i(a) {
        o || (P(r.$$.fragment, a), (o = !0));
      },
      o(a) {
        N(r.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && p(e), U(r);
      },
    }
  );
}
function _a(t) {
  let e, n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [ma] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const i = {};
        s & 1 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
let ga = class extends te {
  constructor(e) {
    super(), ee(this, e, null, _a, Q, {});
  }
};
const va = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: ga },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ba(t) {
  return t && t.err !== void 0;
}
const Ls = ({ IDL: t }) => {
  const e = t.Record({}),
    n = t.Variant({
      DecodeError: t.Null,
      NotAllowed: t.Null,
      NotEnoughFunds: t.Null,
      NotFound: t.Null,
      NotAuthorized: t.Null,
      InvalidData: t.Null,
      AlreadyExists: t.Null,
      PaymentError: t.Null,
    }),
    r = t.Variant({ ok: e, err: n }),
    s = t.Record({
      displayName: t.Text,
      agencyName: t.Text,
      profilePicture: t.Opt(t.Vec(t.Nat8)),
    }),
    i = t.Nat,
    l = t.Variant({ ok: i, err: n }),
    o = t.Record({}),
    a = t.Variant({ ok: t.Null, err: n }),
    c = t.Record({}),
    f = t.Variant({ ok: c, err: n }),
    h = t.Record({}),
    d = t.Record({}),
    _ = t.Variant({ ok: t.Vec(d), err: n }),
    m = t.Variant({ ok: t.Bool, err: n }),
    v = t.Record({}),
    b = t.Record({}),
    S = t.Record({}),
    O = t.Variant({ ok: S, err: n });
  return t.Service({
    addContract: t.Func([e], [r], []),
    createAgent: t.Func([s], [l], []),
    endContract: t.Func([o], [a], []),
    getAgent: t.Func([], [f], ["query"]),
    getContracts: t.Func([h], [_], ["query"]),
    isAgencyNameTaken: t.Func([t.Text], [m], []),
    promoteClient: t.Func([v], [a], []),
    swapClientFocus: t.Func([b], [a], []),
    updateAgent: t.Func([S], [O], []),
  });
};
var ya = {
  BACKEND_CANISTER_ID: "gc5gl-leaaa-aaaaa-qaara-cai",
  FRONTEND_CANISTER_ID: "gf4a7-g4aaa-aaaaa-qaarq-cai",
  DFX_NETWORK: "local",
};
const Dr = ya.CANISTER_ID_BACKEND,
  wa = (t, e = {}) => {
    const n = e.agent || new zr({ ...e.agentOptions });
    return (
      e.agent &&
        e.agentOptions &&
        console.warn(
          "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.",
        ),
      n.fetchRootKey().catch((r) => {
        console.warn(
          "Unable to fetch root key. Check to ensure that your local replica is running",
        ),
          console.error(r);
      }),
      Vr.createActor(Ls, { agent: n, canisterId: t, ...e.actorOptions })
    );
  };
Dr && wa(Dr);
class ft {
  static createActor(e, n = "", r = null, s = null) {
    const i = { host: "http://127.0.0.1:8080", identity: r };
    s
      ? s.agentOptions
        ? (s.agentOptions.host = i.host)
        : (s.agentOptions = i)
      : (s = { agentOptions: i });
    const l = new zr({ ...s.agentOptions });
    return Vr.createActor(e, { agent: l, canisterId: n, ...s?.actorOptions });
  }
  static createIdentityActor(e, n) {
    let r;
    return new Promise((s, i) => {
      r = e.subscribe((l) => {
        l.identity && s(l.identity);
      });
    }).then((s) => (r(), ft.createActor(Ls, n, s)));
  }
}
var Kt = {
  BACKEND_CANISTER_ID: "gc5gl-leaaa-aaaaa-qaara-cai",
  FRONTEND_CANISTER_ID: "gf4a7-g4aaa-aaaaa-qaarq-cai",
  DFX_NETWORK: "local",
};
function $a() {
  const { subscribe: t, set: e } = Fe(null);
  async function n() {
    let o = localStorage.getItem("agent_data");
    if (o && o != "undefined") {
      const a = JSON.parse(o);
      e(a);
      return;
    }
    try {
      await r();
    } catch (a) {
      throw (console.error("Error fetching agent data:", a), a);
    }
  }
  async function r() {
    let a = await (
      await ft.createIdentityActor(Ie, Kt.BACKEND_CANISTER_ID)
    ).getAgent();
    if (ba(a)) {
      console.error("Error fetching user agent");
      return;
    }
    let f = a.ok;
    e(f);
  }
  async function s(o) {
    try {
      return await (
        await ft.createIdentityActor(Ie, Kt.BACKEND_CANISTER_ID ?? "")
      ).createAgent(o);
    } catch (a) {
      throw (console.error("Error updating username:", a), a);
    }
  }
  async function i(o) {
    try {
      const c = await (
        await ft.createIdentityActor(Ie, Kt.BACKEND_CANISTER_ID ?? "")
      ).updateAgentDetail(o);
      return n(), c;
    } catch (a) {
      throw (console.error("Error updating agent:", a), a);
    }
  }
  async function l(o) {
    try {
      if (o.size > 1e3 * 1024) return null;
      const c = new FileReader();
      c.readAsArrayBuffer(o),
        (c.onloadend = async () => {
          const f = c.result,
            h = new Uint8Array(f);
          try {
            const _ = await (
              await ft.createIdentityActor(Ie, Kt.BACKEND_CANISTER_ID ?? "")
            ).updateAgentPicture(h);
            return n(), _;
          } catch (d) {
            console.error(d);
          }
        });
    } catch (a) {
      throw (console.error("Error updating username:", a), a);
    }
  }
  return {
    subscribe: t,
    sync: n,
    createAgent: s,
    updateAgent: i,
    updateAgentPicture: l,
  };
}
const ka = $a();
kt(ka, (t) =>
  t != null && t.agentPicture !== void 0 && t.agentPicture.length > 0
    ? URL.createObjectURL(new Blob([new Uint8Array(t.agentPicture)]))
    : "placeholder.png",
);
function Mr(t) {
  let e, n;
  return {
    c() {
      (e = w("p")), (n = ye(t[6])), this.h();
    },
    l(r) {
      e = $(r, "P", { class: !0 });
      var s = y(e);
      (n = Ce(s, t[6])), s.forEach(p), this.h();
    },
    h() {
      u(e, "class", "error-message svelte-i9609a");
    },
    m(r, s) {
      R(r, e, s), g(e, n);
    },
    p(r, s) {
      s & 64 && Ge(n, r[6]);
    },
    d(r) {
      r && p(e);
    },
  };
}
function jr(t) {
  let e, n;
  return {
    c() {
      (e = w("p")), (n = ye(t[7])), this.h();
    },
    l(r) {
      e = $(r, "P", { class: !0 });
      var s = y(e);
      (n = Ce(s, t[7])), s.forEach(p), this.h();
    },
    h() {
      u(e, "class", "error-message svelte-i9609a");
    },
    m(r, s) {
      R(r, e, s), g(e, n);
    },
    p(r, s) {
      s & 128 && Ge(n, r[7]);
    },
    d(r) {
      r && p(e);
    },
  };
}
function Ea(t) {
  let e,
    n,
    r,
    s = "Create Your Agent Profile",
    i,
    l,
    o = `Your agency and display name are required fields. They should only contain letter and numbers, with a length between 5 to 50 characters. 
        Your agency name must be unique.`,
    a,
    c,
    f,
    h,
    d,
    _,
    m,
    v,
    b,
    S,
    O,
    T,
    k,
    C,
    E,
    A = "Upload Photo",
    F,
    x,
    j,
    z,
    ue = "Maximum file size: 500KB",
    se,
    ge,
    X = "Your Agency Starter Pack",
    H,
    he,
    we =
      '<div class="bg-Brand5w p-4 rounded-md flex flex-col items-center text-center"><p class="text-3xl">5</p> <div class="flex-grow"></div> <p class="text-xs sm:text-sm">All Star Players</p> <div class="flex-grow"></div></div> <div class="bg-Brand5x p-4 rounded-md flex flex-col items-center text-center"><p class="text-3xl">20</p> <div class="flex-grow"></div> <p class="text-xs sm:text-sm">Squad Players</p> <div class="flex-grow"></div></div> <div class="bg-Brand5y p-4 rounded-md flex flex-col items-center text-center"><p class="text-3xl">20</p> <div class="flex-grow"></div> <p class="text-xs sm:text-sm">Prospects</p> <div class="flex-grow"></div></div> <div class="bg-Brand5z p-4 rounded-md flex flex-col items-center text-center"><p class="text-3xl">25</p> <div class="flex-grow"></div> <p class="text-xs sm:text-sm">Academy Players</p> <div class="flex-grow"></div></div> <div class="bg-Brand5 p-4 rounded-md flex flex-col items-center text-center"><p class="text-3xl">30</p> <div class="flex-grow"></div> <p class="text-xs sm:text-sm">Lower League Players</p> <div class="flex-grow"></div></div>',
    Ee,
    ne,
    ze = "Budget: €250m",
    ae,
    $e,
    ie,
    I,
    le,
    B,
    Oe = "Begin",
    Ve,
    Ue,
    Pe,
    Ye,
    Tt,
    ce = t[6] && Mr(t),
    de = t[7] && jr(t);
  return (
    (I = new et({ props: { className: "w-6", fill: "#FFFFFF" } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          (r = w("h3")),
          (r.textContent = s),
          (i = D()),
          (l = w("p")),
          (l.textContent = o),
          (a = D()),
          (c = w("input")),
          (f = D()),
          ce && ce.c(),
          (h = D()),
          (d = w("input")),
          (_ = D()),
          de && de.c(),
          (m = D()),
          (v = w("div")),
          (b = w("div")),
          (S = w("img")),
          (T = D()),
          (k = w("div")),
          (C = w("div")),
          (E = w("button")),
          (E.textContent = A),
          (F = D()),
          (x = w("input")),
          (j = D()),
          (z = w("p")),
          (z.textContent = ue),
          (se = D()),
          (ge = w("p")),
          (ge.textContent = X),
          (H = D()),
          (he = w("div")),
          (he.innerHTML = we),
          (Ee = D()),
          (ne = w("p")),
          (ne.textContent = ze),
          (ae = D()),
          ($e = w("button")),
          (ie = w("div")),
          q(I.$$.fragment),
          (le = D()),
          (B = w("p")),
          (B.textContent = Oe),
          this.h();
      },
      l(Z) {
        e = $(Z, "DIV", { class: !0 });
        var be = y(e);
        n = $(be, "DIV", { class: !0 });
        var G = y(n);
        (r = $(G, "H3", { class: !0, "data-svelte-h": !0 })),
          oe(r) !== "svelte-1xnbblv" && (r.textContent = s),
          (i = M(G)),
          (l = $(G, "P", { class: !0, "data-svelte-h": !0 })),
          oe(l) !== "svelte-1jlmz32" && (l.textContent = o),
          (a = M(G)),
          (c = $(G, "INPUT", { type: !0, placeholder: !0, class: !0 })),
          (f = M(G)),
          ce && ce.l(G),
          (h = M(G)),
          (d = $(G, "INPUT", { type: !0, placeholder: !0, class: !0 })),
          (_ = M(G)),
          de && de.l(G),
          (m = M(G)),
          (v = $(G, "DIV", { class: !0 }));
        var jt = y(v);
        b = $(jt, "DIV", { class: !0 });
        var Yn = y(b);
        (S = $(Yn, "IMG", { src: !0, alt: !0, class: !0 })),
          Yn.forEach(p),
          (T = M(jt)),
          (k = $(jt, "DIV", { class: !0 }));
        var Bt = y(k);
        C = $(Bt, "DIV", { class: !0 });
        var zt = y(C);
        (E = $(zt, "BUTTON", { class: !0, "data-svelte-h": !0 })),
          oe(E) !== "svelte-w1z97w" && (E.textContent = A),
          (F = M(zt)),
          (x = $(zt, "INPUT", { type: !0, id: !0, accept: !0, style: !0 })),
          zt.forEach(p),
          (j = M(Bt)),
          (z = $(Bt, "P", { class: !0, "data-svelte-h": !0 })),
          oe(z) !== "svelte-10thq8t" && (z.textContent = ue),
          Bt.forEach(p),
          jt.forEach(p),
          (se = M(G)),
          (ge = $(G, "P", { "data-svelte-h": !0 })),
          oe(ge) !== "svelte-1sx5lpi" && (ge.textContent = X),
          (H = M(G)),
          (he = $(G, "DIV", { class: !0, "data-svelte-h": !0 })),
          oe(he) !== "svelte-1cyij8i" && (he.innerHTML = we),
          (Ee = M(G)),
          (ne = $(G, "P", { "data-svelte-h": !0 })),
          oe(ne) !== "svelte-qek40v" && (ne.textContent = ze),
          (ae = M(G)),
          ($e = $(G, "BUTTON", { class: !0 }));
        var Zn = y($e);
        ie = $(Zn, "DIV", { class: !0 });
        var Vt = y(ie);
        K(I.$$.fragment, Vt),
          (le = M(Vt)),
          (B = $(Vt, "P", { "data-svelte-h": !0 })),
          oe(B) !== "svelte-3pj5t9" && (B.textContent = Oe),
          Vt.forEach(p),
          Zn.forEach(p),
          G.forEach(p),
          be.forEach(p),
          this.h();
      },
      h() {
        u(r, "class", "default-header"),
          u(l, "class", "text-xs"),
          u(c, "type", "text"),
          u(c, "placeholder", "Unique Agency Name"),
          u(c, "class", "input svelte-i9609a"),
          u(d, "type", "text"),
          u(d, "placeholder", "Display Name"),
          u(d, "class", "input svelte-i9609a"),
          er(S.src, (O = t[5])) || u(S, "src", O),
          u(S, "alt", "Profile"),
          u(S, "class", "w-full rounded-lg"),
          u(b, "class", "w-1/6"),
          u(E, "class", "btn-file-upload bg-Brand5b border-2 svelte-i9609a"),
          u(x, "type", "file"),
          u(x, "id", "profile-image"),
          u(x, "accept", "image/*"),
          Ae(x, "opacity", "0"),
          Ae(x, "position", "absolute"),
          Ae(x, "left", "0"),
          Ae(x, "top", "0"),
          u(C, "class", "file-upload-wrapper pl-4"),
          u(z, "class", "ml-4 text-xs"),
          u(k, "class", "w-5/6"),
          u(v, "class", "group flex flex-row items-center"),
          u(he, "class", "grid grid-cols-3 sm:grid-cols-5 gap-1 md:gap-4"),
          u(
            ie,
            "class",
            "flex flex-row items-center justify-center w-full text-center space-x-2 py-2",
          ),
          u(
            $e,
            "class",
            (Ve =
              "px-4 py-2 rounded-md " + (t[4] ? "bg-Brand5" : "bg-gray-500")),
          ),
          ($e.disabled = Ue = !t[4]),
          u(n, "class", "flex flex-col space-y-4"),
          u(e, "class", "p-8 bg-Brand5c border-2 border-Brand3b");
      },
      m(Z, be) {
        R(Z, e, be),
          g(e, n),
          g(n, r),
          g(n, i),
          g(n, l),
          g(n, a),
          g(n, c),
          Ht(c, t[2]),
          g(n, f),
          ce && ce.m(n, null),
          g(n, h),
          g(n, d),
          Ht(d, t[3]),
          g(n, _),
          de && de.m(n, null),
          g(n, m),
          g(n, v),
          g(v, b),
          g(b, S),
          g(v, T),
          g(v, k),
          g(k, C),
          g(C, E),
          g(C, F),
          g(C, x),
          t[18](x),
          g(k, j),
          g(k, z),
          g(n, se),
          g(n, ge),
          g(n, H),
          g(n, he),
          g(n, Ee),
          g(n, ne),
          g(n, ae),
          g(n, $e),
          g($e, ie),
          V(I, ie, null),
          g(ie, le),
          g(ie, B),
          (Pe = !0),
          Ye ||
            ((Tt = [
              fe(c, "input", t[14]),
              fe(c, "input", t[8]),
              fe(c, "blur", t[15]),
              fe(d, "input", t[16]),
              fe(d, "input", t[8]),
              fe(d, "blur", t[17]),
              fe(E, "click", t[11]),
              fe(x, "change", t[12]),
              fe($e, "click", t[10]),
            ]),
            (Ye = !0));
      },
      p(Z, be) {
        be & 4 && c.value !== Z[2] && Ht(c, Z[2]),
          Z[6]
            ? ce
              ? ce.p(Z, be)
              : ((ce = Mr(Z)), ce.c(), ce.m(n, h))
            : ce && (ce.d(1), (ce = null)),
          be & 8 && d.value !== Z[3] && Ht(d, Z[3]),
          Z[7]
            ? de
              ? de.p(Z, be)
              : ((de = jr(Z)), de.c(), de.m(n, m))
            : de && (de.d(1), (de = null)),
          (!Pe || (be & 32 && !er(S.src, (O = Z[5])))) && u(S, "src", O),
          (!Pe ||
            (be & 16 &&
              Ve !==
                (Ve =
                  "px-4 py-2 rounded-md " +
                  (Z[4] ? "bg-Brand5" : "bg-gray-500")))) &&
            u($e, "class", Ve),
          (!Pe || (be & 16 && Ue !== (Ue = !Z[4]))) && ($e.disabled = Ue);
      },
      i(Z) {
        Pe || (P(I.$$.fragment, Z), (Pe = !0));
      },
      o(Z) {
        N(I.$$.fragment, Z), (Pe = !1);
      },
      d(Z) {
        Z && p(e),
          ce && ce.d(),
          de && de.d(),
          t[18](null),
          U(I),
          (Ye = !1),
          Te(Tt);
      },
    }
  );
}
function Aa(t) {
  let e, n;
  return (
    (e = new Po({
      props: { visible: t[0], $$slots: { default: [Ea] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const i = {};
        s & 1 && (i.visible = r[0]),
          s & 1048830 && (i.$$scope = { dirty: s, ctx: r }),
          e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
function Ca(t, e, n) {
  let { visible: r } = e,
    { confirmModal: s } = e,
    i,
    l = "",
    o = "",
    a = !1,
    c = "/placeholder.png",
    f = "",
    h = "";
  $t(async () => {});
  const d = () => {
      const E = /^[a-zA-Z0-9 ]{5,50}$/;
      n(4, (a = E.test(l) && E.test(o)));
    },
    _ = (E) => {
      const A = /^[a-zA-Z0-9 ]{5,50}$/;
      E === "uniqueAgencyName"
        ? n(
            6,
            (f = A.test(l)
              ? ""
              : "Agency name must be 5-50 characters long and contain only letters and numbers."),
          )
        : E === "displayName" &&
          n(
            7,
            (h = A.test(o)
              ? ""
              : "Display name must be 5-50 characters long and contain only letters and numbers."),
          ),
        d();
    },
    m = () => {
      a && s({ username: "", firstName: "", lastName: "" });
    },
    v = () => {
      i.click();
    },
    b = (E) => {
      const A = E.target;
      if (A.files && A.files[0]) {
        const F = A.files[0];
        if (F.size > 500 * 1024) {
          alert("File size exceeds 500KB");
          return;
        }
        const x = new FileReader();
        (x.onload = (j) => {
          n(5, (c = j.target?.result));
        }),
          x.readAsDataURL(F);
      }
    };
  function S() {
    (l = this.value), n(2, l);
  }
  const O = () => _("uniqueAgencyName");
  function T() {
    (o = this.value), n(3, o);
  }
  const k = () => _("displayName");
  function C(E) {
    tt[E ? "unshift" : "push"](() => {
      (i = E), n(1, i);
    });
  }
  return (
    (t.$$set = (E) => {
      "visible" in E && n(0, (r = E.visible)),
        "confirmModal" in E && n(13, (s = E.confirmModal));
    }),
    [r, i, l, o, a, c, f, h, d, _, m, v, b, s, S, O, T, k, C]
  );
}
class Ta extends te {
  constructor(e) {
    super(), ee(this, e, Ca, Aa, Q, { visible: 0, confirmModal: 13 });
  }
}
function Br(t) {
  let e, n;
  return (
    (e = new Ta({ props: { visible: t[1], confirmModal: t[2] } })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, s) {
        const i = {};
        s & 2 && (i.visible = r[1]), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
function Pa(t) {
  let e,
    n = "Welcome";
  return {
    c() {
      (e = w("p")), (e.textContent = n);
    },
    l(r) {
      (e = $(r, "P", { "data-svelte-h": !0 })),
        oe(e) !== "svelte-27nvf0" && (e.textContent = n);
    },
    m(r, s) {
      R(r, e, s);
    },
    i: L,
    o: L,
    d(r) {
      r && p(e);
    },
  };
}
function Sa(t) {
  let e, n;
  return (
    (e = new bn({})),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
function Na(t) {
  let e,
    n,
    r,
    s,
    i,
    l = "Contract Center",
    o,
    a,
    c,
    f;
  r = new et({ props: { fill: "#FFFFFF", className: "w-6 mr-2" } });
  const h = [Sa, Pa],
    d = [];
  function _(m, v) {
    return m[0] ? 0 : 1;
  }
  return (
    (a = _(t)),
    (c = d[a] = h[a](t)),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          q(r.$$.fragment),
          (s = D()),
          (i = w("p")),
          (i.textContent = l),
          (o = D()),
          c.c(),
          this.h();
      },
      l(m) {
        e = $(m, "DIV", { class: !0 });
        var v = y(e);
        n = $(v, "DIV", { class: !0 });
        var b = y(n);
        K(r.$$.fragment, b),
          (s = M(b)),
          (i = $(b, "P", { class: !0, "data-svelte-h": !0 })),
          oe(i) !== "svelte-iri5o4" && (i.textContent = l),
          b.forEach(p),
          (o = M(v)),
          c.l(v),
          v.forEach(p),
          this.h();
      },
      h() {
        u(i, "class", "text-xl"),
          u(n, "class", "flex flex-row items-center"),
          u(e, "class", "p-4");
      },
      m(m, v) {
        R(m, e, v),
          g(e, n),
          V(r, n, null),
          g(n, s),
          g(n, i),
          g(e, o),
          d[a].m(e, null),
          (f = !0);
      },
      p(m, v) {
        let b = a;
        (a = _(m)),
          a !== b &&
            (me(),
            N(d[b], 1, 1, () => {
              d[b] = null;
            }),
            _e(),
            (c = d[a]),
            c || ((c = d[a] = h[a](m)), c.c()),
            P(c, 1),
            c.m(e, null));
      },
      i(m) {
        f || (P(r.$$.fragment, m), P(c), (f = !0));
      },
      o(m) {
        N(r.$$.fragment, m), N(c), (f = !1);
      },
      d(m) {
        m && p(e), U(r), d[a].d();
      },
    }
  );
}
function xa(t) {
  let e,
    n,
    r,
    s = t[1] && Br(t);
  return (
    (n = new Ct({
      props: { $$slots: { default: [Na] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        s && s.c(), (e = D()), q(n.$$.fragment);
      },
      l(i) {
        s && s.l(i), (e = M(i)), K(n.$$.fragment, i);
      },
      m(i, l) {
        s && s.m(i, l), R(i, e, l), V(n, i, l), (r = !0);
      },
      p(i, [l]) {
        i[1]
          ? s
            ? (s.p(i, l), l & 2 && P(s, 1))
            : ((s = Br(i)), s.c(), P(s, 1), s.m(e.parentNode, e))
          : s &&
            (me(),
            N(s, 1, 1, () => {
              s = null;
            }),
            _e());
        const o = {};
        l & 9 && (o.$$scope = { dirty: l, ctx: i }), n.$set(o);
      },
      i(i) {
        r || (P(s), P(n.$$.fragment, i), (r = !0));
      },
      o(i) {
        N(s), N(n.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && p(e), s && s.d(i), U(n, i);
      },
    }
  );
}
function Oa(t, e, n) {
  let r = !0,
    s = !1;
  $t(async () => {
    try {
      n(1, (s = !0));
    } catch (l) {
      console.error("Error loading contract center", l);
    } finally {
      n(0, (r = !1));
    }
  });
  function i(l) {
    n(1, (s = !1));
  }
  return [r, s, i];
}
let Ia = class extends te {
  constructor(e) {
    super(), ee(this, e, Oa, xa, Q, {});
  }
};
const Ra = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: Ia },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Fa(t) {
  let e,
    n,
    r,
    s,
    i,
    l = "My Agencies Coming Soon",
    o;
  return (
    (r = new et({ props: { fill: "#FFFFFF", className: "w-6 mr-2" } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          q(r.$$.fragment),
          (s = D()),
          (i = w("p")),
          (i.textContent = l),
          this.h();
      },
      l(a) {
        e = $(a, "DIV", { class: !0 });
        var c = y(e);
        n = $(c, "DIV", { class: !0 });
        var f = y(n);
        K(r.$$.fragment, f),
          (s = M(f)),
          (i = $(f, "P", { class: !0, "data-svelte-h": !0 })),
          oe(i) !== "svelte-dwez54" && (i.textContent = l),
          f.forEach(p),
          c.forEach(p),
          this.h();
      },
      h() {
        u(i, "class", "text-xl"),
          u(n, "class", "flex flex-row items-center"),
          u(e, "class", "p-4");
      },
      m(a, c) {
        R(a, e, c), g(e, n), V(r, n, null), g(n, s), g(n, i), (o = !0);
      },
      p: L,
      i(a) {
        o || (P(r.$$.fragment, a), (o = !0));
      },
      o(a) {
        N(r.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && p(e), U(r);
      },
    }
  );
}
function La(t) {
  let e, n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [Fa] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const i = {};
        s & 1 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
let Da = class extends te {
  constructor(e) {
    super(), ee(this, e, null, La, Q, {});
  }
};
const Ma = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: Da },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function ja(t) {
  let e,
    n,
    r,
    s,
    i,
    l = "Profile Coming Soon",
    o;
  return (
    (r = new et({ props: { fill: "#FFFFFF", className: "w-6 mr-2" } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          q(r.$$.fragment),
          (s = D()),
          (i = w("p")),
          (i.textContent = l),
          this.h();
      },
      l(a) {
        e = $(a, "DIV", { class: !0 });
        var c = y(e);
        n = $(c, "DIV", { class: !0 });
        var f = y(n);
        K(r.$$.fragment, f),
          (s = M(f)),
          (i = $(f, "P", { class: !0, "data-svelte-h": !0 })),
          oe(i) !== "svelte-14za60w" && (i.textContent = l),
          f.forEach(p),
          c.forEach(p),
          this.h();
      },
      h() {
        u(i, "class", "text-xl"),
          u(n, "class", "flex flex-row items-center"),
          u(e, "class", "p-4");
      },
      m(a, c) {
        R(a, e, c), g(e, n), V(r, n, null), g(n, s), g(n, i), (o = !0);
      },
      p: L,
      i(a) {
        o || (P(r.$$.fragment, a), (o = !0));
      },
      o(a) {
        N(r.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && p(e), U(r);
      },
    }
  );
}
function Ba(t) {
  let e, n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [ja] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const i = {};
        s & 1 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
let za = class extends te {
  constructor(e) {
    super(), ee(this, e, null, Ba, Q, {});
  }
};
const Va = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: za },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Ua(t) {
  let e,
    n,
    r,
    s,
    i,
    l = "Transfer Kings Gameplay Rules",
    o,
    a,
    c = `<b class="text-lg"><u>How It Works</u></b> <p class="mt-2 mb-4">Transfer Kings is all about being a good football agent. 
                You run your own agency, creating contracts with football players from around the world at at all levels. 
                As your clients perform well in the real world, your portfolio value increases, earning you $FOOTBALL tokens.</p> <div class="horizontal-divider my-2 mb-4"></div> <b class="text-lg"><u>Contract Center</u></b> <b class="text-lg"></b> <p class="mt-2">You can fill contracts by accessing the &#39;Contract Center&#39; through the side navigation panel.</p> <p class="my-2">When you setup your agency you receive a default set of contracts you can fill, selecting from any player around the world.
                There are 5 Transfer Kings contract types, each is listed below with the number allocated with your starting team:</p> <ul class="my-2"><li>All Star <small>(5 Initially)</small></li> <li>Squad Player <small>(20 Initially)</small></li> <li>Prospect <small>(20 Initially)</small></li> <li>Academy <small>(25 Initially)</small></li> <li>Lower League <small>(30 Initially)</small></li></ul> <p class="mt-2 mb-4">After you have your contracts setup you can manage your clients through the &#39;Agent Hub&#39;.</p> <p>An agency starts with a budget of €250m. 
                The acquisition and sale price of a player is 10% of their value, the cost associated with the on going promotion of your clients.</p> <div class="horizontal-divider my-2 mb-4"></div> <b class="text-lg"><u>Agent Hub</u></b> <p class="mt-2">The Agent Hub is where you manage your clients on a day to day basis. 
                Here you select clients to be promoted, multiplying your rewards for real life football achievements.</p> <p class="mt-2">The Agent Hub contains 15 places, ranked from your favourite client down. 
                The client in your first promotion position will earn you the biggest multiplier, reducing as you get to promotion position 15.
                The multiplier percentages are listed below:</p> <div class="mt-2"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><ul><li>1st: 3X</li> <li>2nd: 2.8X</li> <li>3rd: 2.6X</li> <li>4th: 2.4X</li> <li>5th: 2.2X</li></ul></div> <div><ul><li>6th: 2X</li> <li>7th: 1.9X</li> <li>8th: 1.8X</li> <li>9th: 1.7X</li> <li>10th: 1.6X</li></ul></div> <div><ul><li>11th: 1.5X</li> <li>12th: 1.4X</li> <li>13th: 1.3X</li> <li>14th: 1.2X</li> <li>15th: 1.1X</li></ul></div></div></div> <p class="mt-2 mb-4">To prevent your players going stale they have to be rotated out of the Agent Hub every 4 weeks. A player is then restricted from being repromoted for a further 4 weeks. 
                This ensures each of your clients receives the attention they deserve.</p> <div class="horizontal-divider my-2 mb-4"></div> <b class="text-lg"><u>How You Earn</u></b> <p class="mt-2">Gameplay: The players you promote in the Agent Hub will earn $FOOTBALL tokens each week based on their in game performances combined with the level of competition they are playing. 
                This revenue can then be banked and viewed within the Contract Center earnings to date. Before depositing earnings into the Contract Center, you can swap earnings for additional contracts of any type.</p> <p class="mt-2 mb-4">Career Achievements: All players listed within your Contract Center will earn you $FOOTBALL tokens based on their career achievements. 
                Each achievement is weighted based on how difficult it is to acheive. All achievement rewards are multiplied by the change in value of a player since you signed their contract.
                This means that if you get a player at the beginning of their career and hold them until they win the World Cup, 
                the $FOOTBALL earned would increase by the factor the player&#39;s value changed since you purchased them.</p> <div class="horizontal-divider my-2"></div> <b class="text-lg">Growing Your Agency</b> <p class="mt-2">The players you have under contract are worth the same amount as their real world counter parts. 
                As their value changes, you will be able to increase your budget through selling high performing players.
                When a player&#39;s contract ends, the current value of that player is added back to your budget.
                You can end a contract early, receiving 80% of a player&#39;s current value.
                To grow your agency you will need to obtain more than the 100 contracts initially available for you to fill. 
                This can be done when earnings are made through the players you promote in the Agent Hub.
                To realise Agent Hub $FOOTBALL token earnings you deposit the tokens into your Contract center, increasing the contract earnings of the player. 
                When transferring these earnings you are able to select the % of earnings to transfer, obtaining additional contracts for the reduced amount.</p> <div class="horizontal-divider my-2 mb-4"></div> <b class="text-lg"><u>Private Agencies</u></b> <p class="mt-2 mb-4">Along with participating in the free global Transfer Kings game, you can setup a paid private agency to enhance your experience with your friends.
                Within a Private Agency, you select from the same group of players, with no one allowed to select the same player. 
                You can customise your league design, rewards and entry requirements to suit your needs.</p> <div class="horizontal-divider my-2 mb-4"></div> <b class="text-lg"><u>Bot Prevention Controls</u></b> <p>Our built in controls will ensure rewards are based on genuine user participation, with rewards directly effected by how often you manage your global agency.</p>`,
    f;
  return (
    (r = new et({ props: { fill: "#FFFFFF", className: "w-6 mr-2" } })),
    {
      c() {
        (e = w("div")),
          (n = w("div")),
          q(r.$$.fragment),
          (s = D()),
          (i = w("p")),
          (i.textContent = l),
          (o = D()),
          (a = w("div")),
          (a.innerHTML = c),
          this.h();
      },
      l(h) {
        e = $(h, "DIV", { class: !0 });
        var d = y(e);
        n = $(d, "DIV", { class: !0 });
        var _ = y(n);
        K(r.$$.fragment, _),
          (s = M(_)),
          (i = $(_, "P", { class: !0, "data-svelte-h": !0 })),
          oe(i) !== "svelte-1qncmot" && (i.textContent = l),
          _.forEach(p),
          (o = M(d)),
          (a = $(d, "DIV", { class: !0, "data-svelte-h": !0 })),
          oe(a) !== "svelte-689fdb" && (a.innerHTML = c),
          d.forEach(p),
          this.h();
      },
      h() {
        u(i, "class", "text-xl"),
          u(n, "class", "flex flex-row items-center"),
          u(
            a,
            "class",
            "bg-Brand5z w-full p-4 mt-4 rounded-lg border-solid border-Brand5w border-2",
          ),
          u(e, "class", "p-4");
      },
      m(h, d) {
        R(h, e, d),
          g(e, n),
          V(r, n, null),
          g(n, s),
          g(n, i),
          g(e, o),
          g(e, a),
          (f = !0);
      },
      p: L,
      i(h) {
        f || (P(r.$$.fragment, h), (f = !0));
      },
      o(h) {
        N(r.$$.fragment, h), (f = !1);
      },
      d(h) {
        h && p(e), U(r);
      },
    }
  );
}
function Ha(t) {
  let e, n;
  return (
    (e = new Ct({
      props: { $$slots: { default: [Ua] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        q(e.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r);
      },
      m(r, s) {
        V(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const i = {};
        s & 1 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
      },
      i(r) {
        n || (P(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        N(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        U(e, r);
      },
    }
  );
}
class qa extends te {
  constructor(e) {
    super(), ee(this, e, null, Ha, Q, {});
  }
}
const Ka = Object.freeze(
  Object.defineProperty(
    { __proto__: null, component: qa },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Wa(t) {
  return new Worker(
    "" + new URL("../workers/auth.worker-BGLOa3Fe.js", import.meta.url).href,
    { type: "module", name: t?.name },
  );
}
const Xa = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Wa }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export {
  dl as E,
  ll as L,
  ha as P,
  tc as R,
  qe as _,
  rc as a,
  ga as b,
  Za as c,
  sc as d,
  Ia as e,
  Da as f,
  Ja as g,
  ic as h,
  za as i,
  qa as j,
  ec as m,
  nc as n,
  Qa as s,
};
