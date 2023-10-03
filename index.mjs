// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.1.0-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";function E(t,e){return u(t)?u(e)?null:new TypeError(g("0nv72,Go",e)):new TypeError(g("0nv71,NQ",t))}function N(t,e,s){var n,r,i,o,d,m,p,a,l,h;for(s<1?(d=1/y(9*(m=s+1-.3333333333333333)),a=w(t(),1/s)):(d=1/y(9*(m=s-.3333333333333333)),a=1),n=!0;n;){do{h=1+d*(p=e())}while(h<=0);i=1-.331*(r=p*p)*r,o=.5*r+m*(1-(h*=h*h)+b(h)),((l=t())<i||b(l)<o)&&(n=!1)}return m*h*a}function T(t,e,s,n){var r;return s===n&&s>1.5?function(t,e,s){var n,r,i,o,d,m,p,a;for(d=w((i=s-1)+i,.5),n=!0;!0===n;)(p=.5*(1+(o=e())/d))>=0&&p<=1&&((m=t())<=(a=1-(r=w(o,4))/(a=8*s-12))?n=!1:m<(a+=.5*w(r/(8*s-8),2))&&(a=i*b(4*p*(1-p)),(a+=o*o/2)>=b(m)&&(n=!1)));return p}(t,e,s):s>1&&n>1?function(t,e,s,n){var r,i,o,d,m,p,a,l,h,j,c;for(a=(p=(d=s-1)+(m=n-1))*b(p),o=d/p,r=.5/w(p,.5),i=!0;!0===i;)(j=o+(l=e())*r)>=0&&j<=1&&(h=t(),c=d*b(j/d),c+=m*b((1-j)/m),(c+=a+.5*l*l)>=b(h)&&(i=!1));return j}(t,e,s,n):s<1&&n<1?function(t,e,s){for(var n,r,i,o,d,m;;)if(o=t(),d=t(),(i=(m=w(o,1/e))+w(d,1/s))<=1)return i>0?m/i:((n=b(o)/e)>(r=b(d)/s)?(r-=n,n=0):(n-=r,r=0),x(n-b(x(n)+x(r))))}(t,s,n):(r=N(t,e,s))/(r+N(t,e,n))}function L(){var u,b,y,w,x,N,L,J,G;if(J=!0,0===arguments.length)N=a(x={copy:!1});else if(1===arguments.length){if(!n(x=arguments[0]))throw new TypeError(g("0nv2V,FD",x));if(o(x,"copy")&&!r(x.copy))throw new TypeError(g("0nv2o,GE","copy",x.copy));if(o(x,"prng")){if(!i(x.prng))throw new TypeError(g("0nv6u,JI","prng",x.prng));N=x.prng}else{if(o(x,"state")&&!c(x.state))throw new TypeError(g("0nv6z,JJ","state",x.state));!1===(x=f({},x)).copy?J=!1:x.state&&(x.state=h(x.state.length,x.state,1,new j(x.state.length),1)),x.copy=!1,N=a(x)}}else{if(G=E(y=arguments[0],w=arguments[1]))throw G;if(arguments.length>2){if(!n(x=arguments[2]))throw new TypeError(g("0nv2V,FD",x));if(o(x,"copy")&&!r(x.copy))throw new TypeError(g("0nv2o,GE","copy",x.copy));if(o(x,"prng")){if(!i(x.prng))throw new TypeError(g("0nv6u,JI","prng",x.prng));N=x.prng}else{if(o(x,"state")&&!c(x.state))throw new TypeError(g("0nv6z,JJ","state",x.state));!1===(x=f({},x)).copy?J=!1:x.state&&(x.state=h(x.state.length,x.state,1,new j(x.state.length),1)),x.copy=!1,N=a(x)}}else N=a(x={copy:!1})}return x&&x.prng?b=p({prng:x.prng}):(x.state?u=x.state:(u=N.state,N.state=u),b=p({state:u,copy:!1})),t(L=void 0===y?O:M,"NAME","beta"),x&&x.prng?(t(L,"seed",null),t(L,"seedLength",null),s(L,"state",d(null),m),t(L,"stateLength",null),t(L,"byteLength",null),t(L,"toJSON",d(null)),t(L,"PRNG",N)):(e(L,"seed",z),e(L,"seedLength",P),s(L,"state",D,F),e(L,"stateLength",R),e(L,"byteLength",A),t(L,"toJSON",I),t(L,"PRNG",N),N=N.normalized),L;function z(){return N.seed}function P(){return N.seedLength}function R(){return N.stateLength}function A(){return N.byteLength}function D(){return N.state}function F(t){if(!c(t))throw new TypeError(g("0nv70,NW",t));J&&(t=h(t.length,t,1,new j(t.length),1)),N.state=t}function I(){var t={type:"PRNG"};return t.name=L.NAME,t.state=v(N.state),t.params=void 0===y?[]:[y,w],t}function M(){return T(N,b,y,w)}function O(t,e){return l(t)||l(e)||t<=0||e<=0?NaN:T(N,b,t,e)}}var J=L();t(J,"factory",L);export{J as default,L as factory};
//# sourceMappingURL=index.mjs.map
