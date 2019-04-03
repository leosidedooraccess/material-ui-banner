!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@material-ui/core"),require("@material-ui/core/ButtonBase"),require("@material-ui/core/styles")):"function"==typeof define&&define.amd?define(["react","@material-ui/core","@material-ui/core/ButtonBase","@material-ui/core/styles"],t):"object"==typeof exports?exports.MaterialUiBanner=t(require("react"),require("@material-ui/core"),require("@material-ui/core/ButtonBase"),require("@material-ui/core/styles")):e.MaterialUiBanner=t(e.React,e["@material-ui/core"],e["@material-ui/core/ButtonBase"],e["@material-ui/core/styles"])}(window,function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(5)()},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,n){"use strict";var o=n(6);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var o,r,a,i=n(0),u=n.n(i),c=n(3),s=n.n(c),l=n(2),p=n.n(l),f=n(1),b=n(4);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=Object(b.withStyles)(function(e){return{root:{display:"block",width:"100%",marginLeft:"auto",marginRight:"auto"},appBar:g({},e.breakpoints.up("md"),{width:1100,marginLeft:"auto",marginRight:"auto",maxWidth:"100%"}),cardContent:{paddingLeft:2*e.spacing.unit,paddingRight:e.spacing.unit,paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit},avatar:{backgroundColor:e.palette.primary.main},flex:{flexGrow:1},buttons:{alignSelf:"flex-end",paddingLeft:"90px !important"},label:{alignSelf:"center"}}})((a=r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,h(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,u.a.Component),n=t,(o=[{key:"renderButtons",value:function(){var e=this.props,t=e.classes,n=e.onClose,o=e.showDismissButton,r=e.dismissButtonLabel,a=e.buttonOnClick,i=e.buttonLabel,c=e.buttonComponent,s=e.buttonProps;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:t.flex}),u.a.createElement(f.Grid,{item:!0,className:t.buttons},o&&u.a.createElement(f.Button,{variant:"text",onClick:n},r),!!i&&u.a.createElement(f.Button,y({variant:"text",onClick:a,component:c},s),i)))}},{key:"render",value:function(){var e=this.props,t=e.open,n=e.classes,o=e.label,r=e.icon,a=e.iconProps,i=e.appBar,c=e.showDismissButton,s=e.buttonLabel,l=e.paperProps,p=e.cardProps,b=Boolean(c||s);return u.a.createElement(f.Collapse,{in:t},u.a.createElement(f.Paper,y({elevation:0,className:n.root},l),u.a.createElement(f.Card,y({elevation:0,className:i?n.appBar:""},p),u.a.createElement(f.CardContent,{className:n.cardContent},u.a.createElement(f.Grid,{container:!0,wrap:"nowrap",spacing:16,direction:"row",justify:"flex-start",alignItems:"flex-start"},r&&u.a.createElement(f.Grid,{item:!0},u.a.createElement(f.Avatar,y({className:n.avatar},a),r)),u.a.createElement(f.Grid,{item:!0,className:n.label},u.a.createElement(f.Typography,{variant:"body2"},o)),u.a.createElement(f.Hidden,{smDown:!0},i&&b&&this.renderButtons()))),!i&&b&&u.a.createElement(f.Hidden,{smDown:!0},u.a.createElement(f.CardActions,null,this.renderButtons())),b&&u.a.createElement(f.Hidden,{mdUp:!0},u.a.createElement(f.CardActions,null,this.renderButtons())),u.a.createElement(f.Hidden,{smDown:!0},u.a.createElement("div",null))),u.a.createElement(f.Divider,null)))}}])&&d(n.prototype,o),r&&d(n,r),t}(),g(r,"propTypes",{open:p.a.bool.isRequired,label:p.a.string.isRequired,buttonLabel:p.a.string,buttonOnClick:p.a.func,buttonComponent:p.a.any,buttonProps:p.a.object,showDismissButton:p.a.bool,dismissButtonLabel:p.a.string,onClose:p.a.func,icon:p.a.element,iconProps:p.a.object,appBar:p.a.bool,paperProps:p.a.object,cardProps:p.a.object}),g(r,"defaultProps",{open:!0,buttonOnClick:function(){},showDismissButton:!0,dismissButtonLabel:"Dismiss",appBar:!1,buttonComponent:f.ButtonBase,buttonProps:{},iconProps:{},paperProps:{},cardProps:{}}),o=a))||o;function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){k(e,t,n[t])})}return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=C(t).call(this,e),n=!r||"object"!==P(r)&&"function"!=typeof r?E(o):r,k(E(n),"handleClose",function(){n.setState({open:!1})}),n.state={open:!1,options:{label:"",buttonLabel:"",buttonOnClick:function(){},buttonComponent:s.a,buttonProps:{},showDismissButton:!0,dismissButtonLabel:"Dismiss",icon:null,iconProps:{}}},w.Instance=E(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,u.a.Component),S(t,null,[{key:"hide",value:function(){w.Instance.setState({open:!1})}},{key:"show",value:function(e){var t=e.label,n=void 0===t?"":t,o=e.buttonLabel,r=void 0===o?"":o,a=e.buttonOnClick,i=void 0===a?function(){}:a,u=e.buttonComponent,c=void 0===u?s.a:u,l=e.buttonProps,p=void 0===l?{}:l,f=e.showDismissButton,b=void 0===f||f,m=e.dismissButtonLabel,y=void 0===m?"Dismiss":m,d=e.icon,v=void 0===d?null:d,h=e.iconProps,O=void 0===h?{}:h;w.Instance?w.Instance.setState({open:!0,options:B({},w.Instance.state.options,{label:n,buttonLabel:r,buttonOnClick:i,showDismissButton:b,dismissButtonLabel:y,icon:v,iconProps:O,buttonProps:p,buttonComponent:c})}):(console.warn("No banner found"),console.warn(n))}}]),S(t,[{key:"render",value:function(){var e=this.state,t=e.open,n=e.options;return u.a.createElement(w,j({open:t,onClose:this.handleClose},n,{appBar:!0}))}}]),t}();k(T,"Instance",void 0),n.d(t,"StaticBanner",function(){return L}),n.d(t,"Banner",function(){return D});var L=T,D=w}])});