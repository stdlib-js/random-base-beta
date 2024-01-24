// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.1.0-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";function E(t,e){return g(t)?g(e)?null:new TypeError(f("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(f("invalid argument. First argument must be a positive number. Value: `%s`.",t))}function T(t,e,s){var n,r,i,o,a,m,d,p,l,u;for(s<1?(a=1/y(9*(m=s+1-.3333333333333333)),p=w(t(),1/s)):(a=1/y(9*(m=s-.3333333333333333)),p=1),n=!0;n;){do{u=1+a*(d=e())}while(u<=0);i=1-.331*(r=d*d)*r,o=.5*r+m*(1-(u*=u*u)+b(u)),((l=t())<i||b(l)<o)&&(n=!1)}return m*u*p}function O(t,e,s,n){var r;return s===n&&s>1.5?function(t,e,s){var n,r,i,o,a,m,d,p;for(a=w((i=s-1)+i,.5),n=!0;!0===n;)(d=.5*(1+(o=e())/a))>=0&&d<=1&&((m=t())<=(p=1-(r=w(o,4))/(p=8*s-12))?n=!1:m<(p+=.5*w(r/(8*s-8),2))&&(p=i*b(4*d*(1-d)),(p+=o*o/2)>=b(m)&&(n=!1)));return d}(t,e,s):s>1&&n>1?function(t,e,s,n){var r,i,o,a,m,d,p,l,u,h,c;for(p=(d=(a=s-1)+(m=n-1))*b(d),o=a/d,r=.5/w(d,.5),i=!0;!0===i;)(h=o+(l=e())*r)>=0&&h<=1&&(u=t(),c=a*b(h/a),c+=m*b((1-h)/m),(c+=p+.5*l*l)>=b(u)&&(i=!1));return h}(t,e,s,n):s<1&&n<1?function(t,e,s){for(var n,r,i,o,a,m;;)if(o=t(),a=t(),(i=(m=w(o,1/e))+w(a,1/s))<=1)return i>0?m/i:((n=b(o)/e)>(r=b(a)/s)?(r-=n,n=0):(n-=r,r=0),x(n-b(x(n)+x(r))))}(t,s,n):(r=T(t,e,s))/(r+T(t,e,n))}function L(){var g,b,y,w,x,T,L,N,A;if(N=!0,0===arguments.length)T=p(x={copy:!1});else if(1===arguments.length){if(!n(x=arguments[0]))throw new TypeError(f("invalid argument. Options argument must be an object. Value: `%s`.",x));if(o(x,"copy")&&!r(x.copy))throw new TypeError(f("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",x.copy));if(o(x,"prng")){if(!i(x.prng))throw new TypeError(f("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",x.prng));T=x.prng}else{if(o(x,"state")&&!c(x.state))throw new TypeError(f("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",x.state));!1===(x=j({},x)).copy?N=!1:x.state&&(x.state=u(x.state.length,x.state,1,new h(x.state.length),1)),x.copy=!1,T=p(x)}}else{if(A=E(y=arguments[0],w=arguments[1]))throw A;if(arguments.length>2){if(!n(x=arguments[2]))throw new TypeError(f("invalid argument. Options argument must be an object. Value: `%s`.",x));if(o(x,"copy")&&!r(x.copy))throw new TypeError(f("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",x.copy));if(o(x,"prng")){if(!i(x.prng))throw new TypeError(f("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",x.prng));T=x.prng}else{if(o(x,"state")&&!c(x.state))throw new TypeError(f("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",x.state));!1===(x=j({},x)).copy?N=!1:x.state&&(x.state=u(x.state.length,x.state,1,new h(x.state.length),1)),x.copy=!1,T=p(x)}}else T=p(x={copy:!1})}return x&&x.prng?b=d({prng:x.prng}):(x.state?g=x.state:(g=T.state,T.state=g),b=d({state:g,copy:!1})),t(L=void 0===y?J:z,"NAME","beta"),x&&x.prng?(t(L,"seed",null),t(L,"seedLength",null),s(L,"state",a(null),m),t(L,"stateLength",null),t(L,"byteLength",null),t(L,"toJSON",a(null)),t(L,"PRNG",T)):(e(L,"seed",V),e(L,"seedLength",P),s(L,"state",R,S),e(L,"stateLength",G),e(L,"byteLength",M),t(L,"toJSON",U),t(L,"PRNG",T),T=T.normalized),L;function V(){return T.seed}function P(){return T.seedLength}function G(){return T.stateLength}function M(){return T.byteLength}function R(){return T.state}function S(t){if(!c(t))throw new TypeError(f("invalid argument. Must provide a Uint32Array. Value: `%s`.",t));N&&(t=u(t.length,t,1,new h(t.length),1)),T.state=t}function U(){var t={type:"PRNG"};return t.name=L.NAME,t.state=v(T.state),t.params=void 0===y?[]:[y,w],t}function z(){return O(T,b,y,w)}function J(t,e){return l(t)||l(e)||t<=0||e<=0?NaN:O(T,b,t,e)}}var N=L();t(N,"factory",L);export{N as default,L as factory};
//# sourceMappingURL=index.mjs.map
