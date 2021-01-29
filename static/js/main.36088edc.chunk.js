(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(7),r=c.n(i);var l=function(){return Object(a.jsx)("nav",{className:"grey darken-3",children:Object(a.jsxs)("div",{className:"nav-wrapper",children:[Object(a.jsx)("a",{href:"#",className:"brand-logo",children:"Simple Movies"}),Object(a.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"!#",children:"Repo"})})})]})})};c(14);var o=function(){return Object(a.jsx)("footer",{className:"grey darken-3 white-text",children:Object(a.jsx)("div",{className:"footer-copyright",children:Object(a.jsxs)("div",{className:"container",children:["@ ",(new Date).getFullYear(),Object(a.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})},h=c(2),j=c(3),d=c(5),p=c(4),b=c(8);function m(e){var t=e.Title,c=e.Year,s=e.imdbID,n=e.Type,i=e.Poster;return Object(a.jsxs)("div",{id:s,className:"card",children:[Object(a.jsx)("div",{className:"card-image",children:"N/A"===i?Object(a.jsx)("img",{src:"https://via.placeholder.com/300x450?text=".concat(t)}):Object(a.jsx)("img",{src:i})}),Object(a.jsxs)("div",{className:"card-content deep-purple lighten-3 white-text",children:[Object(a.jsx)("span",{className:"card-title white-text",children:t}),Object(a.jsxs)("p",{children:[c,Object(a.jsx)("span",{className:"right white-text",children:n})]})]})]})}function u(e){var t=e.movies,c=void 0===t?[]:t;return Object(a.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(a.jsx)(m,Object(b.a)({},e),e.imdbID)})):Object(a.jsx)("h4",{children:"There is no items"})})}function v(){return Object(a.jsx)("div",{className:"preloader-wrapper big active",children:Object(a.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(a.jsx)("div",{className:"circle-clipper left",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"gap-patch",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"circle-clipper right",children:Object(a.jsx)("div",{className:"circle"})})]})})}var x=function(e){Object(d.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:"all"},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}}),Object(a.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(a.jsx)("span",{children:"All"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(a.jsx)("span",{children:"Movies"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(a.jsx)("span",{children:"Series"})]})]})}}]),c}(n.a.Component),O="9b360c7c",g=function(e){Object(d.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:["http://www.omdbapi.com/?apikey=".concat(O,"&s=matrix")],loading:!0},e.searchMovies=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=").concat(t).concat("all"!==c?"&type=".concat(c):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(O,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(a.jsxs)("main",{className:"container content ",children:[Object(a.jsx)(x,{searchMovies:this.searchMovies}),c?Object(a.jsx)(v,{}):Object(a.jsx)(u,{movies:t})]})}}]),c}(s.Component);var y=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)(g,{className:"grey darken-4"}),Object(a.jsx)(o,{})]})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.36088edc.chunk.js.map