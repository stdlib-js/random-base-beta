// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";var E=b.isPrimitive;var T=function(t,e){return E(t)?E(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+t+"`.")},O=v,L=y,N=w;var A=function(t,e,s){var n,r,i,o,a,m,p,d,l,u;for(s<1?(a=1/L(9*(m=s+1-.3333333333333333)),d=N(t(),1/s)):(a=1/L(9*(m=s-.3333333333333333)),d=1),n=!0;n;){do{u=1+a*(p=e())}while(u<=0);i=1-.331*(r=p*p)*r,o=.5*r+m*(1-(u*=u*u)+O(u)),((l=t())<i||O(l)<o)&&(n=!1)}return m*u*d},P=w,V=v;var G=function(t,e,s){var n,r,i,o,a,m,p,d;for(a=P((i=s-1)+i,.5),n=!0;!0===n;)(p=.5*(1+(o=e())/a))>=0&&p<=1&&((m=t())<=(d=1-(r=P(o,4))/(d=8*s-12))?n=!1:m<(d+=.5*P(r/(8*s-8),2))&&(d=i*V(4*p*(1-p)),(d+=o*o/2)>=V(m)&&(n=!1)));return p},M=w,R=v;var U=function(t,e,s,n){var r,i,o,a,m,p,d,l,u,h,c;for(d=(p=(a=s-1)+(m=n-1))*R(p),o=a/p,r=.5/M(p,.5),i=!0;!0===i;)(h=o+(l=e())*r)>=0&&h<=1&&(u=t(),c=a*R(h/a),c+=m*R((1-h)/m),(c+=d+.5*l*l)>=R(u)&&(i=!1));return h},z=x,J=w,S=v;var q=function(t,e,s){for(var n,r,i,o,a,m;;)if(o=t(),a=t(),(i=(m=J(o,1/e))+J(a,1/s))<=1)return i>0?m/i:((n=S(o)/e)>(r=S(a)/s)?(r-=n,n=0):(n-=r,r=0),z(n-S(z(n)+z(r))))},k=A,B=G,C=U,D=q;var F=function(t,e,s,n){var r;return s===n&&s>1.5?B(t,e,s):s>1&&n>1?C(t,e,s,n):s<1&&n<1?D(t,s,n):(r=k(t,e,s))/(r+k(t,e,n))},H=t,I=e,K=s,Q=n,W=r.isPrimitive,X=i,Y=o,Z=a,$=m,_=p.factory,tt=d.factory,et=l,st=u,nt=h,rt=c,it=j,ot=f,at=g,mt=T,pt=F;var dt=function(){var t,e,s,n,r,i,o,a,m;if(a=!0,0===arguments.length)i=tt(r={copy:!1});else if(1===arguments.length){if(!Q(r=arguments[0]))throw new TypeError(at("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Y(r,"copy")&&!W(r.copy))throw new TypeError(at("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Y(r,"prng")){if(!X(r.prng))throw new TypeError(at("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",r.prng));i=r.prng}else{if(Y(r,"state")&&!rt(r.state))throw new TypeError(at("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state));!1===(r=it(r,1)).copy?a=!1:r.state&&(r.state=st(r.state.length,r.state,1,new nt(r.state.length),1)),r.copy=!1,i=tt(r)}}else{if(m=mt(s=arguments[0],n=arguments[1]))throw m;if(arguments.length>2){if(!Q(r=arguments[2]))throw new TypeError(at("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Y(r,"copy")&&!W(r.copy))throw new TypeError(at("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Y(r,"prng")){if(!X(r.prng))throw new TypeError(at("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",r.prng));i=r.prng}else{if(Y(r,"state")&&!rt(r.state))throw new TypeError(at("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state));!1===(r=it(r,1)).copy?a=!1:r.state&&(r.state=st(r.state.length,r.state,1,new nt(r.state.length),1)),r.copy=!1,i=tt(r)}}else i=tt(r={copy:!1})}return r&&r.prng?e=_({prng:r.prng}):(r.state?t=r.state:(t=i.state,i.state=t),e=_({state:t,copy:!1})),H(o=void 0===s?g:f,"NAME","beta"),r&&r.prng?(H(o,"seed",null),H(o,"seedLength",null),K(o,"state",Z(null),$),H(o,"stateLength",null),H(o,"byteLength",null),H(o,"toJSON",Z(null)),H(o,"PRNG",i)):(I(o,"seed",p),I(o,"seedLength",d),K(o,"state",h,c),I(o,"stateLength",l),I(o,"byteLength",u),H(o,"toJSON",j),H(o,"PRNG",i),i=i.normalized),o;function p(){return i.seed}function d(){return i.seedLength}function l(){return i.stateLength}function u(){return i.byteLength}function h(){return i.state}function c(t){if(!rt(t))throw new TypeError(at("invalid argument. Must provide a Uint32Array. Value: `%s`.",t));a&&(t=st(t.length,t,1,new nt(t.length),1)),i.state=t}function j(){var t={type:"PRNG"};return t.name=o.NAME,t.state=ot(i.state),t.params=void 0===s?[]:[s,n],t}function f(){return pt(i,e,s,n)}function g(t,s){return et(t)||et(s)||t<=0||s<=0?NaN:pt(i,e,t,s)}},lt=dt(),ut=dt;t(lt,"factory",ut);var ht=lt;export{ht as default,ut as factory};
//# sourceMappingURL=index.mjs.map
