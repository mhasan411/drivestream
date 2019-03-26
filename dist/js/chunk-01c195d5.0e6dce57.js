(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01c195d5"],{"0309":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-layout",[a("v-card",{attrs:{"contextual-style":"dark"}},[a("span",{attrs:{slot:"header"},slot:"header"},[t._v("\n      Register\n    ")]),a("div",{attrs:{slot:"body"},slot:"body"},[a("form",{on:{submit:function(s){s.preventDefault(),t.register(t.user)}}},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-user fa-fw"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First name"},domProps:{value:t.user.firstName},on:{input:function(s){s.target.composing||t.$set(t.user,"firstName",s.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-user fa-fw"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last name"},domProps:{value:t.user.lastName},on:{input:function(s){s.target.composing||t.$set(t.user,"lastName",s.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-envelope fa-fw"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-lock fa-fw"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-lock fa-fw"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.passwordConfirm,expression:"user.passwordConfirm"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:t.user.passwordConfirm},on:{input:function(s){s.target.composing||t.$set(t.user,"passwordConfirm",s.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-outline-primary"},[t._v("\n            Register\n          ")])])])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n      Already got an account?\n      "),a("router-link",{attrs:{to:{name:"login.index"}}},[t._v("Login")])],1)])],1)},r=[],o=a("1ae2"),i=a("ae8d"),n={name:"RegisterIndex",components:{VLayout:o["a"],VCard:i["a"]},data:function(){return{user:{firstName:null,lastName:null,email:null,passwordConfirm:null,password:null}}},methods:{register:function(t){this.$store.dispatch("auth/register",t)}}},l=n,u=a("2877"),p=Object(u["a"])(l,e,r,!1,null,null,null);p.options.__file="Index.vue";s["default"]=p.exports},"1ae2":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col col-md-6 col-xs-12"},[t._t("default")],2)])])},r=[],o={name:"MinimalLayout"},i=o,n=a("2877"),l=Object(n["a"])(i,e,r,!1,null,null,null);l.options.__file="Minimal.vue";s["a"]=l.exports},ae8d:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[t.hasSlot("header")?a("h4",{class:t.classNamesHeader},[t._t("header")],2):t._e(),t.hasSlot("body")?a("div",{staticClass:"card-body"},[t._t("body")],2):t._e(),t.hasSlot("footer")?a("div",{staticClass:"card-footer"},[t._t("footer")],2):t._e()])},r=[],o={methods:{hasSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.$slots[t]}}},i={name:"Card",mixins:[o],props:{contextualStyle:{default:"primary",type:String,required:!1}},computed:{classNamesHeader:function(){var t=["card-header"];return this.contextualStyle?(t.push("bg-".concat(this.contextualStyle)),t.push("text-white")):t.push("bg-default"),t}}},n=i,l=a("2877"),u=Object(l["a"])(n,e,r,!1,null,null,null);u.options.__file="Card.vue";s["a"]=u.exports}}]);
//# sourceMappingURL=chunk-01c195d5.0e6dce57.js.map