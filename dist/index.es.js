(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.helloRollupVue = factory());
}(this, (function () {

var Hello$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',{staticClass:"hello__title"},[_vm._v(_vm._s(_vm.msg))])])},staticRenderFns: [],
  data: function data () {
    return {
      msg: 'Hello World!'
    }
  }
};

return Hello$1;

})));
