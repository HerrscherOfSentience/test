(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{284:function(e,t,o){var content=o(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(81).default)("5a530a69",content,!0,{sourceMap:!1})},285:function(e,t,o){"use strict";o(284)},286:function(e,t,o){var n=o(80)((function(i){return i[1]}));n.push([e.i,".box-inner[data-v-42f53582]{display:flex;flex-direction:column;margin-top:16px;padding:16px;width:100vw;background:#abef9c}.link[data-v-42f53582]{color:#2a7fc9}button[data-v-42f53582]{background:#454fb8;color:#fff;border-radius:8px;padding:12px;margin-left:12px}input[data-v-42f53582]{padding:16px}",""]),n.locals={},e.exports=n},288:function(e,t,o){"use strict";o.r(t);o(82),o(28),o(15);var n={name:"Box",data:function(){return{text:"Hai",counter:0,names:["Name 1","Name 2","Name 3"],problems:[],pickRandom:!1,randomProblem:0,searchKeyword:"",isFetchingData:!1}},methods:{doSearch:function(e){var t=this;this.isFetchingData=!0;var o="https://codeforces.com/api/problemset.problems?tags=".concat(this.searchKeyword);this.$axios.get(o).then((function(o){t.pickRandom=e,t.problems=o.data.result.problems,t.randomProblem=Math.floor(Math.random()*t.problems.length)})).finally((function(){t.isFetchingData=!1}))}},mounted:function(){this.doSearch()}},r=(o(285),o(61)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"box-inner"},[t("div",{staticClass:"flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"Tags"},domProps:{value:e.searchKeyword},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.searchKeyword=t.target.value)}}}),e._v(" "),t("button",{on:{click:function(t){return e.doSearch(!1)}}},[e._v("Search")]),e._v(" "),t("button",{on:{click:function(t){return e.doSearch(!0)}}},[e._v("Random!")])]),e._v(" "),e.problems.length&&e.pickRandom?t("a",{staticClass:"link",attrs:{href:"https://codeforces.com/problemset/problem/".concat(e.problems[e.randomProblem].contestId,"/").concat(e.problems[e.randomProblem].index)}},[e._v("\n        "+e._s(e.problems[e.randomProblem].contestId)+e._s(e.problems[e.randomProblem].index)+" - "+e._s(e.problems[e.randomProblem].name)+"\n    ")]):e._e(),e._v(" "),e.pickRandom?e._e():[!e.isFetchingData&&e.problems.length>0?t("div",{staticClass:"flex-col"},e._l(e.problems,(function(o){return t("a",{staticClass:"link",attrs:{href:"https://codeforces.com/problemset/problem/".concat(o.contestId,"/").concat(o.index),target:"_blank"}},[e._v("\n              "+e._s(o.contestId)+e._s(o.index)+" - "+e._s(o.name)+"\n            ")])})),0):e.isFetchingData||0!==e.problems.length?e._e():t("div",[t("p",[e._v("No problems found")])])],e._v(" "),e.isFetchingData?t("div",[t("p",[e._v("Loading . . .")])]):e._e()],2)}),[],!1,null,"42f53582",null);t.default=component.exports}}]);