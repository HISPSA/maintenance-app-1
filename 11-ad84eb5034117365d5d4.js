webpackJsonp([11],{1973:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2381),a=n(794),i=n(2382),o=n(81),s=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=o.b.map(function(e){return e.sideBar.currentSection}).distinctUntilChanged(),c=i.a.combineLatest(u).flatMap(function(e){var t=s(e,2),n=t[0],r=t[1];return n.filter(function(e){return e.key===r})}).map(function(e){return{menuItems:e.items}});t.default=n.i(a.a)(c,r.a)},1986:function(e,t,n){"use strict";var r=n(0),a=(n.n(r),n(1)),i=n.n(a),o={contextTypes:{d2:i.a.object.isRequired},getTranslation:function(e){return this.context.d2.i18n.getTranslation(e)}};t.a=o},2381:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(839),o=n.n(i),s=n(427),u=n.n(s),c=n(428),l=n.n(c),m=n(426),d=n.n(m),p=n(392),f=n.n(p),y=n(1986);t.a=a.a.createClass({displayName:"MenuCards.component",propTypes:{menuItems:a.a.PropTypes.arrayOf(a.a.PropTypes.shape({name:a.a.PropTypes.string,description:a.a.PropTypes.string}))},mixins:[y.a],getDefaultProps:function(){return{menuItems:[]}},renderCard:function(e,t){var n={padding:"0",margin:".5rem",float:"left",width:"230px"},r={padding:"1rem",height:"auto",borderBottom:"1px solid #ddd",cursor:"pointer"},i={height:"85px",padding:".5rem 1rem"},s={textAlign:"right"},c={cardHeaderText:{paddingRight:0}},m=[];return e.canCreate&&m.push(a.a.createElement(f.a,{key:"add",iconClassName:"material-icons",tooltip:this.getTranslation("add"),tooltipPosition:"top-center",onClick:e.add},"")),m.push(a.a.createElement(f.a,{key:"list",iconClassName:"material-icons",tooltip:this.getTranslation("list"),tooltipPosition:"top-center",onClick:e.list},"")),a.a.createElement(o.a,{key:t,style:n},a.a.createElement(u.a,{onClick:e.list,style:r,title:e.name,textStyle:c.cardHeaderText}),a.a.createElement(l.a,{style:i},e.description),a.a.createElement(d.a,{style:s},m))},render:function(){return a.a.createElement("div",null,this.props.menuItems.map(this.renderCard),a.a.createElement("div",{style:{clear:"both"}}))}})},2382:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}var a=n(81),i=n(123),o=n.n(i),s=n(28),u=(n.n(s),n(24)),c=(n.n(u),n(106)),l=function(){var e=r(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(u.getInstance)();case 2:return r=e.sent,e.abrupt("return",t.map(function(e){return{key:e.name,name:r.i18n.getTranslation(o()(e.name)),items:e.items.map(function(t){var a=t.key;return{name:t.label,description:r.i18n.getTranslation("intro_"+o()(a)),canCreate:r.currentUser.canCreate(r.models[a]),add:function(){return n.i(c.a)("/edit/"+e.name+"/"+a+"/add")},list:function(){return n.i(c.a)("/list/"+e.name+"/"+a)}}})}}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.a=a.b.map(function(e){return e.sideBar.mainSections.map(function(e){return e.key}).reduce(function(t,n){return t.concat([{name:n,items:e.sideBar[n]||[]}])},[])}).take(1).map(function(e){return s.Observable.fromPromise(l(e))}).concatAll()}});
//# sourceMappingURL=11-ad84eb5034117365d5d4.js.map