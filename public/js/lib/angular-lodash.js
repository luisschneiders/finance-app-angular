!function(e,t){"use strict";function n(e){return function(t){return t[e]}}var i=e.module("angular-lodash",[]),r=e.module("angular-lodash/utils",[]),u=e.module("angular-lodash/filters",[]);t._=t,t.each(["min","max","sortedIndex"],function(e){t[e]=t.wrap(t[e],function(e){var i=t.toArray(arguments).slice(1);return t.isString(i[2])?i[2]=n(i[2]):t.isString(i[1])&&(i[1]=n(i[1])),e.apply(t,i)})}),e.injector(["ng"]).invoke(["$filter",function(e){t.filter=t.select=t.wrap(e("filter"),function(e,n,i){return t.isArray(n)||(n=t.toArray(n)),e(n,i)}),t.reject=function(e,n){if(t.isString(n))return t.filter(e,"!"+n);var i=t.bind(t.difference,t,e);return i(t.filter(e,n))}}]),t.each(t.methods(t),function(n){function u(e){e[n]=t.bind(t[n],t)}t.each([i,r,e.module("angular-lodash/utils/"+n,[])],function(e){e.run(["$rootScope",u])})});var a=[["map","collect"],["reduce","inject","foldl"],["reduceRight","foldr"],["find","detect"],["filter","select"],"where","findWhere","reject","invoke","pluck","max","min","sortBy","groupBy","countBy","shuffle","toArray","size",["first","head","take"],"initial","last",["rest","tail","drop"],"compact","flatten","without","union","intersection","difference",["uniq","unique"],"zip","object","indexOf","lastIndexOf","sortedIndex","keys","values","pairs","invert",["functions","methods"],"pick","omit","tap","identity","uniqueId","escape","result","template"];t.each(a,function(n){t.isArray(n)||(n=[n]);var r=t.bind(t[n[0]],t),a=function(){return r};t.each(n,function(n){t.each([i,u,e.module("angular-lodash/filters/"+n,[])],function(e){e.filter(n,a)})})})}(angular,_);