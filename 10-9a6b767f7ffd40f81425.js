webpackJsonp([10],{3304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3901);n.d(t,"default",function(){return r.a})},3335:function(e,t,n){"use strict";function r(e){return e&&y.a[e]}function a(e){var t=e.major,n=e.minor;return e.snapshot?"master":t+"."+n}function o(e,t){var n=/\$\{(.+?)\}/g;return e.replace(n,function(e,n){return t.has(n)?t.get(n):".+?"})}function i(e,t){return Object.keys(y.a).find(function(n){var r=o(n,t);return new RegExp(r).test(e)})}function l(e,t){return r(e)?o(y.a[e],t):""}function c(e,t){var r=new Map([["objectType",t]]),a=new Map([["objectType",n.i(g.camelCaseToUnderscores)(t)]]);return l(i(e,r),a)}function s(e,t){var n=e.schema,r=t.d2,o=window.location.hash.replace(/^#/,"").replace(/\?.+?$/,""),i="https://docs.dhis2.org/"+a(r.system.version),l=c(o,n);return l?m.a.createElement(h.a,{href:""+i+l,target:"_blank",rel:"noopener noreferrer",tooltip:r.i18n.getTranslation("open_user_guide"),tooltipPosition:"bottom-center",iconClassName:"material-icons",iconStyle:{top:-2}},"help_outline"):null}t.a=s;var u=n(0),m=n.n(u),p=n(1),d=n.n(p),_=n(132),h=n.n(_),g=n(721),f=(n.n(g),n(3346)),y=n.n(f);s.propTypes={schema:d.a.string.isRequired},s.contextTypes={d2:d.a.object}},3346:function(e,t){e.exports={"/edit/categorySection/categoryOptionGroupSet":"/en/user/html/manage_category.html#create_category_option_group_set","/edit/categorySection/categoryOptionGroup":"/en/user/html/manage_category.html#create_category_option_group","/edit/categorySection/categoryOptionCombo":"/en/user/html/manage_category.html#assign_code_category_option_combo","/edit/categorySection/categoryOption":"/en/user/html/manage_category.html#create_category_option","/edit/categorySection/categoryCombo":"/en/user/html/manage_category.html#create_category_combination","/edit/categorySection/category":"/en/user/html/manage_category.html#create_category","/list/categorySection":"/en/user/html/manage_category.html","/edit/dataElementSection/dataElementGroupSet":"/en/user/html/manage_data_element.html#create_data_element_group_set","/edit/dataElementSection/dataElementGroup":"/en/user/html/manage_data_element.html#create_data_element_group","/edit/dataElementSection/dataElement":"/en/user/html/manage_data_element.html#create_data_element","/list/dataElementSection":"/en/user/html/manage_data_element.html","/edit/dataSetSection/dataSet/${objectId}/sections":"/en/user/html/manage_data_set.html#manage_section_form","/edit/dataSetSection/dataSet":"/en/user/html/manage_data_set.html#create_data_set","/list/dataSetSection/dataSet":"/en/user/html/manage_data_set.html","/edit/indicatorSection/programIndicatorGroup":"/en/user/html/configure_program_indicator.html#create_program_indicator_group","/list/indicatorSection/programIndicatorGroup":"/en/user/html/configure_program_indicator.html","/edit/indicatorSection/programIndicator":"/en/user/html/configure_program_indicator.html#create_program_indicator","/list/indicatorSection/programIndicator":"/en/user/html/configure_program_indicator.html","/edit/indicatorSection/indicatorGroupSet":"/en/user/html/manage_indicator.html#create_indicator_group_set","/edit/indicatorSection/indicatorGroup":"/en/user/html/manage_indicator.html#create_indicator_group","/edit/indicatorSection/indicatorType":"/en/user/html/manage_indicator.html#create_indicator_type","/edit/indicatorSection/indicator":"/en/user/html/manage_indicator.html#create_indicator","/list/indicatorSection":"/en/user/html/manage_indicator.html","/edit/organisationUnitSection/organisationUnitGroupSet":"/en/user/html/manage_organisation_unit.html#create_organisation_unit_group_set","/edit/organisationUnitSection/organisationUnitGroup":"/en/user/html/manage_organisation_unit.html#create_organisation_unit_group","/edit/organisationUnitSection/organisationUnitLevel":"/en/user/html/manage_organisation_unit.html#name_organisation_unit_level","/edit/organisationUnitSection/organisationUnit":"/en/user/html/manage_organisation_unit.html#create_organisation_unit","/list/organisationUnitSection":"/en/user/html/manage_organisation_unit.html","/edit/programSection/trackedEntityAttribute":"/en/user/html/configure_tracked_entity.html#create_tracked_entity_attribute","/edit/programSection/programRuleVariable":"/en/user/html/configure_program_rule.html#create_program_rule_variable","/edit/programSection/relationshipType":"/en/user/html/configure_relationship_type.html#create_relationship_type","/edit/programSection/trackedEntity":"/en/user/html/configure_tracked_entity.html#about_tracked_entity","/edit/programSection/programRule":"/en/user/html/configure_program_rule.html#create_program_rule","/edit/programSection/program":"/en/user/html/configure_event_program_in_maintenance_app.html#create_event_program","/list/programSection":"/en/user/html/configure_programs_in_maintenance_app.html","/edit/validationSection/validationNotificationTemplate":"/en/user/html/manage_validation_rule.html#create_validation_notification","/edit/validationSection/validationRuleGroup":"/en/user/html/manage_validation_rule.html#create_validation_rule_group","/edit/validationSection/validationRule":"/en/user/html/manage_validation_rule.html#create_validation_rule","/list/validationSection":"/en/user/html/manage_validation_rule.html","/edit/otherSection/legendSet":"/en/user/html/manage_legend.html#create_legend","/list/otherSection/legendSet":"/en/user/html/manage_legend.html","/edit/otherSection/pushAnalysis":"/en/user/html/manage_push_report.html#create_push_report","/list/otherSection/pushAnalysis":"/en/user/html/manage_push_report.html","/edit/otherSection/externalMapLayer":"/en/user/html/manage_external_maplayer.html#create_external_map_layer","/list/otherSection/externalMapLayer":"/en/user/html/manage_external_maplayer.html","/edit/otherSection/predictorGroup":"/en/user/html/manage_predictor.html#create_predictor_group","/list/otherSection/predictorGroup":"/en/user/html/manage_predictor.html","/edit/otherSection/optionGroupSet":"/en/user/html/manage_option_set.html#create_option_group_set","/list/otherSection/optionGroupSet":"/en/user/html/manage_option_set.html#create_option_group_set","/edit/otherSection/optionGroup":"/en/user/html/manage_option_set.html#create_option_group","/list/otherSection/optionGroup":"/en/user/html/manage_option_set.html#create_option_group","/edit/otherSection/${objectType}":"/en/user/html/manage_${objectType}.html#create_${objectType}","/list/otherSection/${objectType}":"/en/user/html/manage_${objectType}.html"}},3381:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var a=e.level,o=e.schema,l=e.children,c=e.groupName,s=e.isDirtyHandler,h=e.skipTranslation,g=r(e,["level","schema","children","groupName","isDirtyHandler","skipTranslation"]);return i.a.createElement(u.a,_({},g,{level:a}),i.a.createElement(p.a,{onClick:function(){return n.i(d.b)("/list/"+c+"/"+o)},iconStyle:{top:3},isDirtyHandler:s}),h?l:t.d2.i18n.getTranslation(l),o&&i.a.createElement(m.a,{schema:o}))}var o=n(0),i=n.n(o),l=n(1),c=n.n(l),s=n(92),u=n(314),m=n(3335),p=n(3385),d=n(202),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a.propTypes={children:c.a.oneOfType([c.a.string,c.a.array]),level:c.a.number,isDirtyHandler:c.a.func,schema:c.a.string.isRequired,groupName:c.a.string.isRequired,skipTranslation:c.a.bool},a.defaultProps={isDirtyHandler:function(){},level:2,children:"",skipTranslation:!1},t.a=n.i(s.a)(a)},3385:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=e.tooltip,a=e.onClick,o=e.isDirtyHandler,l=void 0===o?u.a.getState.bind(u.a):o,s=r(e,["tooltip","onClick","isDirtyHandler"]),p=function(){l&&l()&&l().dirty?confirm(t.d2.i18n.getTranslation("abandon_unsaved_changes"))&&a.apply(void 0,arguments):a.apply(void 0,arguments)};return i.a.createElement(c.a,m({tooltip:n||t.d2.i18n.getTranslation("back"),tooltipPosition:"bottom-right",onClick:p},s,{iconClassName:"material-icons"}),"")}var o=n(0),i=n.n(o),l=n(203),c=n.n(l),s=n(92),u=n(243),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};a.propTypes={tooltip:i.a.PropTypes.string},t.a=n.i(s.a)(a)},3901:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),s=n(1),u=n.n(s),m=n(315),p=n.n(m),d=n(170),_=n.n(d),h=n(1313),g=n.n(h),f=n(442),y=n.n(f),v=n(115),S=n.n(v),b=n(1351),w=n.n(b),k=n(3381),T=n(202),E=n(255),O=n(81),j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=function(){n.i(T.a)("list/otherSection/sqlView")},D={menuItem:{paddingLeft:"1.5rem",paddingRight:"1.5rem"}},M=function(e){function t(e,n){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.openDownloadMenu=function(e){r.setState({downloadMenuOpen:!0,downloadMenuAnchor:e.currentTarget})},r.closeDownloadMenu=function(){r.setState({downloadMenuOpen:!1})},r.renderCell=function(e,t){var n="object"===(void 0===e?"undefined":j(e))&&null!=e,r=n?JSON.stringify(e,null,2):e;return c.a.createElement("td",{key:"cell"+t},r)},r.renderRow=function(e,t){return c.a.createElement("tr",{key:"row"+t},e.map(r.renderCell))},r.state={listGrid:null,downloadMenuOpen:!1,downloadMenuAnchor:null},r}return i(t,e),x(t,[{key:"componentDidMount",value:function(){this.getSqlView()}},{key:"getSqlView",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.context.d2,n=this.props.params.modelId,r="sqlViews/"+n+"/data",a={paging:!1},e.prev=4,e.next=7,t.Api.getApi().get(r,a);case 7:o=e.sent,i=o.listGrid,this.setState({listGrid:i}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0),G(),O.a.show({message:t.i18n.getTranslation("sql_query_error"),action:"ok"});case 17:case"end":return e.stop()}},e,this,[[4,12]])}));return e}()},{key:"openFileLink",value:function(e){var t=this.props.params.modelId;this.closeDownloadMenu(),window.open("../api/sqlViews/"+t+"/"+e,"_blank")}},{key:"renderHeader",value:function(){var e=this.state.listGrid.title,t=this.context.d2,n=t.i18n.getTranslation("view_data_for")+' "'+e+'"';return c.a.createElement("div",{className:"sql-view__header"},c.a.createElement(k.a,{level:1,groupName:"otherSection",schema:"sqlView",skipTranslation:!0},n),this.renderDropDownButton())}},{key:"renderDropDownButton",value:function(){var e=this.context.d2;return c.a.createElement("div",{className:"sql-view__dropdown-button"},c.a.createElement(_.a,{onClick:this.openDownloadMenu,className:"sql-view__download-btn",labelPosition:"before",primary:!0,icon:c.a.createElement(w.a,null),label:e.i18n.getTranslation("download_as")}),c.a.createElement(g.a,{open:this.state.downloadMenuOpen,anchorEl:this.state.downloadMenuAnchor,anchorOrigin:{horizontal:"right",vertical:"bottom"},targetOrigin:{horizontal:"right",vertical:"top"},onRequestClose:this.closeDownloadMenu},c.a.createElement(y.a,null,this.renderDropDownMenuItems())))}},{key:"renderDropDownMenuItems",value:function(){var e=this,t=this.context.d2;return[{label:"excel",file:"data.xls"},{label:"csv",file:"data.csv"},{label:"pdf",file:"data.pdf"},{label:"html",file:"data.html+css"},{label:"xml",file:"data.xml"},{label:"json",file:"data.json"}].map(function(n){var r=n.label,a=n.file;return c.a.createElement(S.a,{key:r,style:D.menuItem,primaryText:t.i18n.getTranslation(r),onClick:function(){return e.openFileLink(a)}})})}},{key:"renderTable",value:function(){var e=this.state.listGrid,t=e.headers,n=e.rows;return c.a.createElement("table",{className:"sql-view__table"},c.a.createElement("thead",null,c.a.createElement("tr",null,t.map(function(e){var t=e.name;return c.a.createElement("th",{key:t},t)}))),c.a.createElement("tbody",null,n.map(this.renderRow)))}},{key:"render",value:function(){return this.state.listGrid?c.a.createElement("div",null,this.renderHeader(),c.a.createElement(p.a,{className:"sql-view__content"},this.renderTable())):c.a.createElement(E.a,null)}}]),t}(l.Component);M.propTypes={params:u.a.shape({modelId:u.a.string}).isRequired},M.contextTypes={d2:u.a.object},t.a=M}});
//# sourceMappingURL=10-9a6b767f7ffd40f81425.js.map