(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var a=i(1),u=i(2),n=i(4),r=i(3),l=i(0),o=i.n(l),s=i(7),m=i.n(s),c=(i(13),function(e){Object(n.a)(i,e);var t=Object(r.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.call(this)).state={title:"React App With BeanStalk",userInput:"User text Here"},e}return Object(u.a)(i,[{key:"inputChange",value:function(e){this.setState({userInput:e.target.value?e.target.value:"User text Here"}),this.props.newsSearch(e.target.value)}},{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"logo",onClick:function(){console.log("header clicked")}},this.state.title),o.a.createElement("center",null,o.a.createElement("input",{onChange:this.inputChange.bind(this)})),o.a.createElement("p",null,this.state.userInput))}}]),i}(l.Component)),d=i(5),p=function(e){var t=e.datalist.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("h3",null,e.title),o.a.createElement("div",null,e.feed))});return o.a.createElement("div",null,t)},v=function(e){Object(n.a)(i,e);var t=Object(r.a)(i);function i(e){var u;return Object(a.a)(this,i),(u=t.call(this,e)).state={news:d,filtered:d},u}return Object(u.a)(i,[{key:"filterNews",value:function(e){var t=this.state.news.filter(function(t){return t.title.indexOf(e)>-1});this.setState({filtered:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(c,{newsSearch:function(t){e.filterNews(t)}}),o.a.createElement("hr",null),o.a.createElement(p,{datalist:this.state.filtered}))}}]),i}(l.Component);m.a.render(o.a.createElement(v,null),document.getElementById("root"))},5:function(e){e.exports=[{id:1,title:"New ES6 upgrade available $",feed:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},{id:2,title:"The importance of & REACT in the development",feed:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},{id:3,title:"REACT developers going on strike",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{id:4,title:"Say what again. I dare you,...x",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{id:5,title:"REACT developers going on strike",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{id:6,title:"REACT developers going on strike",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]},8:function(e,t,i){e.exports=i(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2621e0fa.chunk.js.map