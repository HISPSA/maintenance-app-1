webpackJsonp([8],{1976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2523);n.d(t,"default",function(){return r.a})},1979:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){var t=e.level,n=e.text,a=e.style,o=e.children,l=r(e,["level","text","style","children"]),c={type:t<=6?"h"+t:"span"},u=s({fontSize:24,fontWeight:300,color:"rgba(0, 0, 0, 0.87)",padding:"16px 0 5px 0",margin:0},a);return i.a.createElement(c.type,s({},l,{style:u}),o||n)}var o=n(0),i=n.n(o),l=n(1),c=n.n(l),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a.propTypes={level:c.a.oneOf([1,2,3,4,5,6]),text:c.a.string},a.defaultProps={level:1},t.a=a},2015:function(e,t,n){"use strict";function r(e){return e&&y.a[e]}function a(e){var t=e.major,n=e.minor;return e.snapshot?"master":t+"."+n}function o(e,t){var n=/\$\{(.+?)\}/g;return e.replace(n,function(e,n){return t.has(n)?t.get(n):".+?"})}function i(e,t){return Object.keys(y.a).find(function(n){var r=o(n,t);return new RegExp(r).test(e)})}function l(e,t){return r(e)?o(y.a[e],t):""}function c(e,t){var r=new Map([["objectType",t]]),a=new Map([["objectType",n.i(g.camelCaseToUnderscores)(t)]]);return l(i(e,r),a)}function s(e,t){var n=e.schema,r=t.d2,o=window.location.hash.replace(/^#/,"").replace(/\?.+?$/,""),i="https://ci.dhis2.org/docs/"+a(r.system.version),l=c(o,n);return l?m.a.createElement(_.a,{href:""+i+l,target:"_blank",rel:"noopener noreferrer",tooltip:r.i18n.getTranslation("open_user_guide"),tooltipPosition:"bottom-center",iconClassName:"material-icons",iconStyle:{top:-2}},"help_outline"):null}t.a=s;var u=n(0),m=n.n(u),p=n(1),d=n.n(p),h=n(104),_=n.n(h),g=n(400),f=(n.n(g),n(2027)),y=n.n(f);s.propTypes={schema:d.a.string.isRequired},s.contextTypes={d2:d.a.object}},2027:function(e,t){e.exports={"/edit/categorySection/categoryOptionGroupSet":"/en/user/html/manage_category.html#create_category_option_group_set","/edit/categorySection/categoryOptionGroup":"/en/user/html/manage_category.html#create_category_option_group","/edit/categorySection/categoryOptionCombo":"/en/user/html/manage_category.html#assign_code_category_option_combo","/edit/categorySection/categoryOption":"/en/user/html/manage_category.html#create_category_option","/edit/categorySection/categoryCombo":"/en/user/html/manage_category.html#create_category_combination","/edit/categorySection/category":"/en/user/html/manage_category.html#create_category","/list/categorySection":"/en/user/html/manage_category.html","/edit/dataElementSection/dataElementGroupSet":"/en/user/html/manage_data_element.html#create_data_element_group_set","/edit/dataElementSection/dataElementGroup":"/en/user/html/manage_data_element.html#create_data_element_group","/edit/dataElementSection/dataElement":"/en/user/html/manage_data_element.html#create_data_element","/list/dataElementSection":"/en/user/html/manage_data_element.html","/edit/dataSetSection/dataSet/${objectId}/sections":"/en/user/html/manage_data_set.html#manage_section_form","/edit/dataSetSection/dataSet":"/en/user/html/manage_data_set.html#create_data_set","/list/dataSetSection/dataSet":"/en/user/html/manage_data_set.html","/edit/indicatorSection/programIndicatorGroup":"/en/user/html/configure_program_indicator.html#create_program_indicator_group","/list/indicatorSection/programIndicatorGroup":"/en/user/html/configure_program_indicator.html","/edit/indicatorSection/programIndicator":"/en/user/html/configure_program_indicator.html#create_program_indicator","/list/indicatorSection/programIndicator":"/en/user/html/configure_program_indicator.html","/edit/indicatorSection/indicatorGroupSet":"/en/user/html/manage_indicator.html#create_indicator_group_set","/edit/indicatorSection/indicatorGroup":"/en/user/html/manage_indicator.html#create_indicator_group","/edit/indicatorSection/indicatorType":"/en/user/html/manage_indicator.html#create_indicator_type","/edit/indicatorSection/indicator":"/en/user/html/manage_indicator.html#create_indicator","/list/indicatorSection":"/en/user/html/manage_indicator.html","/edit/organisationUnitSection/organisationUnitGroupSet":"/en/user/html/manage_organisation_unit.html#create_organisation_unit_group_set","/edit/organisationUnitSection/organisationUnitGroup":"/en/user/html/manage_organisation_unit.html#create_organisation_unit_group","/edit/organisationUnitSection/organisationUnitLevel":"/en/user/html/manage_organisation_unit.html#name_organisation_unit_level","/edit/organisationUnitSection/organisationUnit":"/en/user/html/manage_organisation_unit.html#create_organisation_unit","/list/organisationUnitSection":"/en/user/html/manage_organisation_unit.html","/edit/programSection/trackedEntityAttribute":"/en/user/html/configure_tracked_entity.html#create_tracked_entity_attribute","/edit/programSection/programRuleVariable":"/en/user/html/configure_program_rule.html#create_program_rule_variable","/edit/programSection/relationshipType":"/en/user/html/configure_relationship_type.html#create_relationship_type","/edit/programSection/trackedEntity":"/en/user/html/configure_tracked_entity.html#about_tracked_entity","/edit/programSection/programRule":"/en/user/html/configure_program_rule.html#create_program_rule","/edit/programSection/program":"/en/user/html/configure_event_program_in_maintenance_app.html#create_event_program","/list/programSection":"/en/user/html/configure_programs_in_maintenance_app.html","/edit/validationSection/validationNotificationTemplate":"/en/user/html/manage_validation_rule.html#create_validation_notification","/edit/validationSection/validationRuleGroup":"/en/user/html/manage_validation_rule.html#create_validation_rule_group","/edit/validationSection/validationRule":"/en/user/html/manage_validation_rule.html#create_validation_rule","/list/validationSection":"/en/user/html/manage_validation_rule.html","/edit/otherSection/legendSet":"/en/user/html/manage_legend.html#create_legend","/list/otherSection/legendSet":"/en/user/html/manage_legend.html","/edit/otherSection/pushAnalysis":"/en/user/html/manage_push_report.html#create_push_report","/list/otherSection/pushAnalysis":"/en/user/html/manage_push_report.html","/edit/otherSection/externalMapLayer":"/en/user/html/manage_external_maplayer.html#create_external_map_layer","/list/otherSection/externalMapLayer":"/en/user/html/manage_external_maplayer.html","/edit/otherSection/predictorGroup":"/en/user/html/manage_predictor.html#create_predictor_group","/list/otherSection/predictorGroup":"/en/user/html/manage_predictor.html","/edit/otherSection/optionGroupSet":"/en/user/html/manage_option_set.html#create_option_group_set","/list/otherSection/optionGroupSet":"/en/user/html/manage_option_set.html#create_option_group_set","/edit/otherSection/optionGroup":"/en/user/html/manage_option_set.html#create_option_group","/list/otherSection/optionGroup":"/en/user/html/manage_option_set.html#create_option_group","/edit/otherSection/${objectType}":"/en/user/html/manage_${objectType}.html#create_${objectType}","/list/otherSection/${objectType}":"/en/user/html/manage_${objectType}.html"}},2071:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var a=e.level,o=e.schema,l=e.children,c=e.groupName,s=e.isDirtyHandler,_=e.skipTranslation,g=r(e,["level","schema","children","groupName","isDirtyHandler","skipTranslation"]);return i.a.createElement(u.a,h({},g,{level:a}),i.a.createElement(p.a,{onClick:function(){return n.i(d.b)("/list/"+c+"/"+o)},iconStyle:{top:3},isDirtyHandler:s}),_?l:t.d2.i18n.getTranslation(l),o&&i.a.createElement(m.a,{schema:o}))}var o=n(0),i=n.n(o),l=n(1),c=n.n(l),s=n(390),u=n(1979),m=n(2015),p=n(2078),d=n(106),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a.propTypes={children:c.a.oneOfType([c.a.string,c.a.array]),level:c.a.number,isDirtyHandler:c.a.func,schema:c.a.string.isRequired,groupName:c.a.string.isRequired,skipTranslation:c.a.bool},a.defaultProps={isDirtyHandler:function(){},level:2,children:"",skipTranslation:!1},t.a=n.i(s.a)(a)},2078:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=e.tooltip,a=e.onClick,o=e.isDirtyHandler,l=void 0===o?u.a.getState.bind(u.a):o,s=r(e,["tooltip","onClick","isDirtyHandler"]),p=function(){l&&l()&&l().dirty?confirm(t.d2.i18n.getTranslation("abandon_unsaved_changes"))&&a.apply(void 0,arguments):a.apply(void 0,arguments)};return i.a.createElement(c.a,m({tooltip:n||t.d2.i18n.getTranslation("back"),tooltipPosition:"bottom-right",onClick:p},s,{iconClassName:"material-icons"}),"")}var o=n(0),i=n.n(o),l=n(392),c=n.n(l),s=n(390),u=n(234),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a.propTypes={tooltip:i.a.PropTypes.string},t.a=n.i(s.a)(a)},2523:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),s=n(1),u=n.n(s),m=n(784),p=n.n(m),d=n(786),h=n.n(d),_=n(849),g=n.n(_),f=n(403),y=n.n(f),v=n(236),S=n.n(v),b=n(851),w=n.n(b),k=n(2071),O=n(106),T=n(176),E=n(72),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=function(){n.i(O.a)("list/otherSection/sqlView")},G={menuItem:{paddingLeft:"1.5rem",paddingRight:"1.5rem"}},D=function(e){function t(e,n){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.openDownloadMenu=function(e){r.setState({downloadMenuOpen:!0,downloadMenuAnchor:e.currentTarget})},r.closeDownloadMenu=function(){r.setState({downloadMenuOpen:!1})},r.renderCell=function(e,t){return c.a.createElement("td",{key:"cell"+t},e)},r.renderRow=function(e,t){return c.a.createElement("tr",{key:"row"+t},e.map(r.renderCell))},r.state={listGrid:null,downloadMenuOpen:!1,downloadMenuAnchor:null},r}return i(t,e),x(t,[{key:"componentDidMount",value:function(){this.getSqlView()}},{key:"getSqlView",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.context.d2,n=this.props.params.modelId,r="sqlViews/"+n+"/data",a={paging:!1},e.prev=4,e.next=7,t.Api.getApi().get(r,a);case 7:o=e.sent,i=o.listGrid,this.setState({listGrid:i}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),j(),E.a.show({message:t.i18n.getTranslation("sql_query_error"),action:"ok"});case 16:case"end":return e.stop()}},e,this,[[4,12]])}));return e}()},{key:"openFileLink",value:function(e){var t=this.props.params.modelId;this.closeDownloadMenu(),window.open("../api/sqlViews/"+t+"/"+e,"_blank")}},{key:"renderHeader",value:function(){var e=this.state.listGrid.title,t=this.context.d2,n=t.i18n.getTranslation("view_data_for")+' "'+e+'"';return c.a.createElement("div",{className:"sql-view__header"},c.a.createElement(k.a,{level:1,groupName:"otherSection",schema:"sqlView",skipTranslation:!0},n),this.renderDropDownButton())}},{key:"renderDropDownButton",value:function(){var e=this.context.d2;return c.a.createElement("div",{className:"sql-view__dropdown-button"},c.a.createElement(h.a,{onClick:this.openDownloadMenu,className:"sql-view__download-btn",labelPosition:"before",primary:!0,icon:c.a.createElement(w.a,null),label:e.i18n.getTranslation("download_as")}),c.a.createElement(g.a,{open:this.state.downloadMenuOpen,anchorEl:this.state.downloadMenuAnchor,anchorOrigin:{horizontal:"right",vertical:"bottom"},targetOrigin:{horizontal:"right",vertical:"top"},onRequestClose:this.closeDownloadMenu},c.a.createElement(y.a,null,this.renderDropDownMenuItems())))}},{key:"renderDropDownMenuItems",value:function(){var e=this,t=this.context.d2;return[{label:"excel",file:"data.xls"},{label:"csv",file:"data.csv"},{label:"pdf",file:"data.pdf"},{label:"html",file:"data.html+css"},{label:"xml",file:"data.xml"},{label:"json",file:"data.json"}].map(function(n){var r=n.label,a=n.file;return c.a.createElement(S.a,{key:r,style:G.menuItem,primaryText:t.i18n.getTranslation(r),onClick:function(){return e.openFileLink(a)}})})}},{key:"renderTable",value:function(){var e=this.state.listGrid,t=e.headers,n=e.rows;return c.a.createElement("table",{className:"sql-view__table"},c.a.createElement("thead",null,c.a.createElement("tr",null,t.map(function(e){var t=e.name;return c.a.createElement("th",{key:t},t)}))),c.a.createElement("tbody",null,n.map(this.renderRow)))}},{key:"render",value:function(){return this.state.listGrid?c.a.createElement("div",null,this.renderHeader(),c.a.createElement(p.a,{className:"sql-view__content"},this.renderTable())):c.a.createElement(T.a,null)}}]),t}(l.Component);D.propTypes={params:u.a.shape({modelId:u.a.string}).isRequired},D.contextTypes={d2:u.a.object},t.a=D}});
//# sourceMappingURL=8-59ce10b27fd992c5f628.js.map