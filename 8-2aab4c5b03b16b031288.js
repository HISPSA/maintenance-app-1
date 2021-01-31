webpackJsonp([8],{3528:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){m.a.saveOrganisationUnitLevels().subscribe(function(){return S.a.show({message:e.getTranslation("organisation_unit_levels_save_success")})},function(){return S.a.show({message:e.getTranslation("organisation_unit_levels_save_failed"),action:"ok"})})}function s(e,t){var n=t.d2.currentUser.canUpdate(t.d2.models.organisationUnitLevel);if(e.isLoading)return u.a.createElement(d.a,null);var a={paperWrap:{padding:"4rem 5rem",maxWidth:700,marginTop:"2rem"},rowStyle:{display:"flex",flexDirection:"row",height:"5rem"},formWrapStyle:{flex:1,display:"flex",flexDirection:"row"},fieldWrapStyle:{flex:1,paddingRight:"1rem"},translateButtonWrap:{alignItems:"flex-end",display:"flex",flex:"5rem",height:"5rem",verticalAlign:"middle"}},r=e.fieldsForOrganisationUnitLevel.map(function(t,r){var o=null;return t.organisationUnitLevel.id&&n&&(o=u.a.createElement("div",{style:a.translateButtonWrap},u.a.createElement(y.a,{iconClassName:"material-icons",onClick:function(){return e.onTranslateClick(t.organisationUnitLevel)}},"translate"))),u.a.createElement("div",{key:r,style:a.rowStyle},u.a.createElement(g.a,{style:a.formWrapStyle,fieldWrapStyle:a.fieldWrapStyle,fields:t.map(function(e){return j({},e,{props:j({},e.props,{disabled:!n})})}),onUpdateField:function(e,n){m.a.fieldUpdate({organisationUnitLevel:t.organisationUnitLevel,fieldName:e,fieldValue:n})},onUpdateFormStatus:function(e){return m.a.updateFormStatus({levelIndex:r,formStatus:e})}}),o)});return u.a.createElement("div",null,u.a.createElement(L.a,null,t.d2.i18n.getTranslation("organisation_unit_level_management")),u.a.createElement(T.a,{style:a.paperWrap},r,u.a.createElement(_.a,null,n?u.a.createElement(O.a,{onClick:function(){return i(t.d2.i18n)},isValid:e.formStatus.every(function(e){return e}),isSaving:e.isSaving}):[])))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=n.n(l),c=n(92),f=n(3771),p=n(1374),v=n(253),d=n.n(v),g=n(1376),m=n(3898),b=n(208),y=n.n(b),h=n(324),T=n.n(h),O=n(3572),_=n(3634),S=n(80),L=n(323),E=n(3550),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};s.defaultProps={fieldsForOrganisationUnitLevel:[],formStatus:[!1],isLoading:!0,isSaving:!1},s.propTypes={fieldsForOrganisationUnitLevel:l.PropTypes.array,formStatus:l.PropTypes.array,isLoading:l.PropTypes.bool,isSaving:l.PropTypes.bool};var U=f.a,x=n.i(p.a)(U,n.i(c.a)(s));t.default=n.i(c.a)(function(e){function t(){var e;a(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];var s=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return s.state={translation:{open:!1}},s._onTranslateClick=s._onTranslateClick.bind(s),s._closeTranslationDialog=s._closeTranslationDialog.bind(s),s._translationSaved=s._translationSaved.bind(s),s._translationErrored=s._translationErrored.bind(s),s}return o(t,e),w(t,[{key:"componentDidMount",value:function(){m.a.initOrgUnitLevels()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(x,{onTranslateClick:this._onTranslateClick}),this.state.translation.model?u.a.createElement(E.a,{objectToTranslate:this.state.translation.model,objectTypeToTranslate:this.state.translation.model&&this.state.translation.model.modelDefinition,open:this.state.translation.open,onTranslationSaved:this._translationSaved,onTranslationError:this._translationErrored,onRequestClose:this._closeTranslationDialog,fieldsToTranslate:["name"]}):null)}},{key:"_onTranslateClick",value:function(e){var t=this.context.d2.models.organisationUnitLevel.create(e);this.setState({translation:{open:!0,model:t}})}},{key:"_translationSaved",value:function(){S.a.show({message:this.context.d2.i18n.getTranslation("translation_saved")})}},{key:"_translationErrored",value:function(){S.a.show({message:this.context.d2.i18n.getTranslation("translation_save_error"),action:"ok"})}},{key:"_closeTranslationDialog",value:function(){this.setState({translation:{open:!1,model:void 0}})}}]),t}(u.a.Component))},3550:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=n(1),u=n.n(l),c=n(18),f=(n.n(c),n(456)),p=n.n(f),v=n(3566),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e,o){a(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return i.i18n=o.d2.i18n,i.state={TranslationForm:n.i(v.a)(i.props.objectToTranslate)},i.translationSaved=i.translationSaved.bind(i),i.translationError=i.translationError.bind(i),i.closeTranslationDialog=i.closeTranslationDialog.bind(i),i}return o(t,e),g(t,[{key:"render",value:function(){return s.a.createElement(p.a,d({title:this.i18n.getTranslation("translation_dialog_title"),autoDetectWindowHeight:!0,autoScrollBodyContent:!0},this.props),s.a.createElement(this.state.TranslationForm,{onTranslationSaved:this.translationSaved,onTranslationError:this.translationError,onCancel:this.closeTranslationDialog,fieldsToTranslate:this.props.fieldsToTranslate}))}},{key:"componentWillReceiveProps",value:function(e){e.objectToTranslate&&this.setState({TranslationForm:n.i(v.a)(e.objectToTranslate)})}},{key:"closeTranslationDialog",value:function(){this.props.onRequestClose()}},{key:"translationSaved",value:function(e){this.props.onTranslationSaved(e),this.closeTranslationDialog()}},{key:"translationError",value:function(e){this.props.onTranslationError(e)}}]),t}(i.Component);m.propTypes={objectToTranslate:u.a.shape({id:u.a.string.isRequired}).isRequired,onTranslationSaved:u.a.func.isRequired,onTranslationError:u.a.func.isRequired,open:u.a.bool,onRequestClose:u.a.func.isRequired,fieldsToTranslate:u.a.array},m.contextTypes={d2:u.a.object},t.a=m},3565:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=n(1),u=n.n(l),c=n(326),f=n.n(c),p=n(209),v=n.n(p),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e,n){a(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));o.onLocaleChange=function(e,t,n){o.setState({locale:n}),o.props.onChange(n,e)};var i=o.context.d2.i18n;return o.getTranslation=i.getTranslation.bind(i),o}return o(t,e),g(t,[{key:"render",value:function(){var e=[{payload:"",text:""}].concat(this.props.locales).map(function(e,t){return s.a.createElement(v.a,{key:t,primaryText:e.name,value:e.locale})});return s.a.createElement(f.a,d({fullWidth:!0},this.props,{value:this.state&&this.state.locale,hintText:this.getTranslation("select_locale"),onChange:this.onLocaleChange}),e)}}]),t}(i.Component);m.propTypes={value:u.a.string,locales:u.a.arrayOf(u.a.shape({name:u.a.string.isRequired,locale:u.a.string.isRequired})).isRequired,onChange:u.a.func.isRequired},m.contextTypes={d2:u.a.object},t.a=m},3566:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=_.a.create();return n.i(T.a)(e).subscribe(function(e){t.setState(e)}),y.Observable.combineLatest(n.i(T.b)(),t,function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object.assign.apply(Object,[{objectToTranslate:e,setTranslations:function(e){t.setState({translations:e})}}].concat(a))})}function s(e){return n.i(O.a)(i(e),E)}t.a=s;var l=n(0),u=n.n(l),c=n(1),f=n.n(c),p=n(93),v=n.n(p),d=n(94),g=n.n(d),m=n(205),b=n.n(m),y=n(24),h=(n.n(y),n(3565)),T=n(3567),O=n(1374),_=n(49),S=n(171),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=function(e){function t(e,o){a(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));i.state={loading:!0,translations:{},translationValues:{},currentSelectedLocale:""},i.setCurrentLocale=function(e){i.setState({currentSelectedLocale:e})},i.setValue=function(e,t){var n=[].concat(i.props.translations),a=n.find(function(t){return t.locale===i.state.currentSelectedLocale&&t.property.toLowerCase()===g()(e)});a?t.target.value?a.value=t.target.value:n=n.filter(function(e){return e!==a}):(a={property:g()(e).toUpperCase(),locale:i.state.currentSelectedLocale,value:t.target.value},n.push(a)),i.props.setTranslations(n)},i.saveTranslations=function(){n.i(T.c)(i.props.objectToTranslate,i.props.translations).subscribe(i.props.onTranslationSaved,i.props.onTranslationError)};var s=i.context.d2.i18n;return i.getTranslation=s.getTranslation.bind(s),i}return o(t,e),L(t,[{key:"getLoadingdataElement",value:function(){return u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement(S.a,{mode:"indeterminate"}))}},{key:"renderFieldsToTranslate",value:function(){var e=this;return this.props.fieldsToTranslate.filter(function(e){return e}).map(function(t){return u.a.createElement("div",{key:t},u.a.createElement(v.a,{floatingLabelText:e.getTranslation(g()(t)),value:e.getTranslationValueFor(t),fullWidth:!0,onChange:e.setValue.bind(e,t)}),u.a.createElement("div",null,e.props.objectToTranslate[t]))})}},{key:"renderForm",value:function(){return u.a.createElement("div",null,this.renderFieldsToTranslate(),u.a.createElement(b.a,{label:this.getTranslation("save"),primary:!0,onClick:this.saveTranslations}),u.a.createElement(b.a,{style:{marginLeft:"1rem"},label:this.getTranslation("cancel"),onClick:this.props.onCancel}))}},{key:"renderHelpText",value:function(){return u.a.createElement("div",null,u.a.createElement("p",null,this.getTranslation("select_a_locale_to_enter_translations_for_that_language")))}},{key:"render",value:function(){return this.props.locales||this.props.translations?u.a.createElement("div",{style:{minHeight:250}},u.a.createElement(h.a,{locales:this.props.locales,onChange:this.setCurrentLocale}),this.state.currentSelectedLocale?this.renderForm():this.renderHelpText()):this.getLoadingdataElement()}},{key:"getTranslationValueFor",value:function(e){var t=this,n=this.props.translations.find(function(n){return n.locale===t.state.currentSelectedLocale&&n.property.toLowerCase()===g()(e)});if(n)return n.value}}]),t}(l.Component);E.propTypes={onTranslationSaved:f.a.func.isRequired,onTranslationError:f.a.func.isRequired,objectToTranslate:f.a.shape({id:f.a.string.isRequired}),fieldsToTranslate:f.a.arrayOf(f.a.string)},E.defaultProps={fieldsToTranslate:["name","shortName","description"]},E.contextTypes={d2:f.a.object}},3567:function(e,t,n){"use strict";function a(){return a.localePromise||(a.localePromise=n.i(i.getInstance)().then(function(e){return e.Api.getApi().get("locales/db")}).then(function(e){return{locales:e}})),s.Observable.fromPromise(a.localePromise)}function r(e){return e.href?e.href:e.modelDefinition.apiEndpoint+"/"+e.id}function o(e){return s.Observable.of(e).flatMap(function(e){var t=e.modelDefinition;return t||t.name?n.i(i.getInstance)().then(function(t){return t.Api.getApi().get(r(e)+"/translations")}):Promise.reject(new Error("Can not find modelDefinition for "+e.id))})}t.b=a,t.a=o,n.d(t,"c",function(){return c});var i=n(18),s=(n.n(i),n(24)),l=(n.n(s),n(114)),u=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=l.a.create("saveTranslations");c.subscribe(function(e){var t=u(e.data,2),a=t[0],o=t[1],s=e.complete,l=e.error,c=r(a)+"/translations";n.i(i.getInstance)().then(function(e){e.Api.getApi().update(c,{translations:o},{dataType:"text"}).then(function(){return s(o)}).catch(l)})})},3572:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.d2,r=e.label,o=e.isSaving,s=(e.isValid,e.onClick),l=a(e,["label","isSaving","isValid","onClick"]),u=r||(o?n.i18n.getTranslation("saving"):n.i18n.getTranslation("save"));return i.a.createElement(c.a,p({},l,{primary:!0,onClick:s,label:u,disabled:o}))}var o=n(0),i=n.n(o),s=n(1),l=n.n(s),u=n(205),c=n.n(u),f=n(92),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};r.propTypes={label:l.a.string,isSaving:l.a.bool,isValid:l.a.bool,onClick:l.a.func.isRequired},r.defaultProps={label:"",isSaving:!1,isValid:!0},t.a=n.i(f.a)(r)},3634:function(e,t,n){"use strict";function a(e){var t={marginTop:"1rem"},n={marginRight:"1rem",width:"10rem"},a=s()(e.children)?e.children:[e.children];return o.a.createElement("div",{style:Object.assign(t,e.style)},a.map(function(e,t){return o.a.cloneElement(e,{style:n,key:t})}))}t.a=a;var r=n(0),o=n.n(r),i=n(173),s=n.n(i);a.propTypes={style:o.a.PropTypes.object,children:o.a.PropTypes.oneOfType([o.a.PropTypes.array,o.a.PropTypes.object]).isRequired,isFormValid:o.a.PropTypes.func}},3771:function(e,t,n){"use strict";var a=n(49);t.a=a.a.create()},3898:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,o){try{var i=t[r](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}return a("next")})}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e){var t=e.options,n=r(e,["options"]),a=[{value:void 0,text:"Default",label:" "}].concat(t.map(function(e){return{value:e,text:e,label:e}})).map(function(e,t){return f.a.createElement(O.a,{key:t,primaryText:e.text,value:e.value,label:e.label})});return f.a.createElement(h.a,E({},n,{onChange:function(t,n,a){return e.onChange({target:{value:a}})}}),a)}function i(e){return g.a.state.fieldsForOrganisationUnitLevel.map(function(t){return t.filter(function(e){return"name"===e.name}).some(function(t){return t.value===e})}).every(function(e){return!1===e})}function s(e,t){return e.map(function(e){var n=t.map(function(t){return Object.assign({},t,{value:e[t.name]})});return n.organisationUnitLevel=e,n})}function l(e){var t=e.data;return g.a.getState().formStatus.map(function(e,n){return n===t.levelIndex?t.formStatus.valid:e})}function u(e){var t=e.organisationUnitLevels,a=e.complete,r=e.error;return n.i(d.getInstance)().then(function(e){return e.Api.getApi()}).then(function(e){return e.post("filledOrganisationUnitLevels",{organisationUnitLevels:t},{dataType:"text"})}).then(function(){return a}).catch(function(){return r})}var c=n(0),f=n.n(c),p=n(114),v=n(24),d=(n.n(v),n(18)),g=(n.n(d),n(3771)),m=n(93),b=n.n(m),y=n(326),h=n.n(y),T=n(209),O=n.n(T),_=n(1373),S=n(94),L=n.n(S),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w=function(){var e=a(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(d.getInstance)();case 2:return t=e.sent,a=t.Api.getApi(),e.next=6,a.get("filledOrganisationUnitLevels");case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=a(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(d.getInstance)();case 2:return t=e.sent,e.abrupt("return",U.map(function(e){var n=P.get(e)||{};return{name:e,component:n.component||b.a,props:Object.assign({floatingLabelText:t.i18n.getTranslation(L()(e))},n.props),validators:[{validator:i,message:t.i18n.getTranslation("value_not_unique")}]}}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),U=_.a.for("organisationUnitLevel"),x=p.a.createActionsFromNames(["initOrgUnitLevels","fieldUpdate","updateFormStatus","saveOrganisationUnitLevels"]);o.propTypes={options:c.PropTypes.array};var P=new Map([["name",{component:b.a}],["offlineLevels",{component:o,props:{options:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}}]]),k=v.Observable.fromPromise(j());x.updateFormStatus.map(l).subscribe(function(e){g.a.setState(Object.assign({},g.a.getState(),{formStatus:e}))}),x.initOrgUnitLevels.flatMap(function(){return v.Observable.combineLatest(v.Observable.fromPromise(w()),k,function(e,t){return{organisationUnitLevels:e,organisationUnitLevelFormFields:t}})}).map(function(e){var t=e.organisationUnitLevels;return{fieldConfigsForAllLevels:s(t,e.organisationUnitLevelFormFields),organisationUnitLevels:t}}).subscribe(function(e){var t=e.fieldConfigsForAllLevels,n=e.organisationUnitLevels;g.a.setState({isSaving:!1,isLoading:!1,fieldsForOrganisationUnitLevel:t,formStatus:t.map(function(){return!0}),organisationUnitLevels:n})});var C=new v.ReplaySubject(1);x.fieldUpdate.subscribe(function(e){return C.next(e)}),v.Observable.combineLatest(C,k,function(e,t){return{action:e,organisationUnitLevelFormFields:t}}).map(function(e){var t=e.action,n=e.organisationUnitLevelFormFields;return E({},t.data,{storeState:g.a.getState(),organisationUnitLevelFormFields:n})}).subscribe(function(e){var t=e.storeState,n=void 0===t?{organisationUnitLevels:[]}:t,a=e.fieldName,r=e.fieldValue,o=e.organisationUnitLevel,i=e.organisationUnitLevelFormFields,l=n.organisationUnitLevels.find(function(e){return e===o});l&&a&&(l[a]=r),g.a.setState(Object.assign({},n,{organisationUnitLevels:n.organisationUnitLevels,fieldsForOrganisationUnitLevel:s(n.organisationUnitLevels,i)}))}),x.saveOrganisationUnitLevels.map(function(e){return E({organisationUnitLevels:g.a.getState().organisationUnitLevels.map(function(e){return{name:e.name,level:e.level,offlineLevels:e.offlineLevels}})},e)}).do(function(){g.a.setState(E({},g.a.getState(),{isSaving:!0}))}).flatMap(function(e){return v.Observable.fromPromise(u(e))}).subscribe(function(e){e.call(),x.initOrgUnitLevels()}),t.a=x}});
//# sourceMappingURL=8-2aab4c5b03b16b031288.js.map