(function(t){function e(e){for(var i,n,o=e[0],c=e[1],u=e[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f9":function(t,e,a){try{window.Popper=a("f0bd").default,window.$=window.jQuery=a("1157"),a("4989"),a("ab8b"),a("cd74")}catch(i){console.error(i)}},"034f":function(t,e,a){"use strict";a("85ec")},"1fda":function(t,e,a){},3391:function(t,e,a){t.exports={methods:{asset:function(t){var e="http://beem.test/storage/";return e+t}}}},"415b":function(t,e,a){"use strict";a("6bf8")},"46df":function(t,e,a){"use strict";a("5d98")},"4c40":function(t,e,a){"use strict";a("bead")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavbarComponent"),a("div",{attrs:{id:"main-wrapper"}},[a("div",{staticClass:"container"},[a("router-view")],1)]),a("FooterComponent")],1)},r=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"sm-nav-container nav-container"},[i("button",{staticClass:"toggle-btn",attrs:{type:"button"},on:{click:t.showMobileNav}},[i("span",{staticClass:"toggle-btn-span1"}),i("span",{staticClass:"toggle-btn-span2"}),i("span",{staticClass:"toggle-btn-span3"})]),i("router-link",{staticClass:"navbar-title",staticStyle:{"z-index":"-1"},attrs:{to:{name:"home"}}},[i("img",{staticClass:"app-title sm-app-title",attrs:{src:a("9d64")}})]),i("button",[i("i",{staticClass:"bi bi-search",attrs:{"aria-hidden":"true"},on:{click:t.showSearch}})])],1),i("div",{staticClass:"lg-nav-div"},[i("div",{staticClass:"lg-nav-container nav-container"},[i("router-link",{staticClass:"navbar-title",attrs:{to:{name:"home"}}},[i("img",{staticClass:"app-title lg-app-title",attrs:{src:a("9d64")}})]),i("div",{staticClass:"navbar-links"},[i("router-link",{attrs:{to:{name:"home"},exact:""}},[t._v("Home")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Features")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Changelog")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Support")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Get theme")])],1),i("div",{staticClass:"navbar-tools"},[i("router-link",{attrs:{to:{name:"home"}}},[t._v("Sign in")]),i("router-link",{attrs:{to:{name:"home"}}},[i("i",{staticClass:"bi bi-envelope-fill",attrs:{"aria-hidden":"true"}}),t._v(" Subscribe")]),t.is_light_mode?i("button",[i("i",{staticClass:"bi bi-moon",attrs:{"aria-hidden":"true"},on:{click:t.darkThemeSwitch}})]):i("button",[i("i",{staticClass:"bi bi-sun",attrs:{"aria-hidden":"true"},on:{click:t.darkThemeSwitch}})]),i("button",[i("i",{staticClass:"bi bi-search",attrs:{"aria-hidden":"true"},on:{click:t.showSearch}})])],1)],1)])])]),i("div",{staticClass:"aside-container vs-wrapper",on:{click:t.ctcMobileNav}},[i("aside",{staticClass:"mobile-nav"},[i("br"),i("div",{staticClass:"close-mobile-nav"},[i("button",{attrs:{type:"button"},on:{click:t.closeMobileNav}},[t._v("×")])]),i("br"),i("div",{staticClass:"aside-nav-content nav-container"},[i("div",{staticClass:"navbar-links"},[i("router-link",{attrs:{to:{name:"home"},exact:""}},[t._v("Home")]),i("router-link",{attrs:{to:{name:"home"}}},[t._v("Features")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Changelog")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Support")]),i("router-link",{attrs:{to:{name:"about"}}},[t._v("Get theme")])],1),i("br"),i("div",{staticClass:"navbar-tools"},[i("router-link",{attrs:{to:{name:"home"}}},[t._v("Sign in")]),i("router-link",{attrs:{to:{name:"home"}}},[t._v("Subscribe")]),t.is_light_mode?i("button",[i("i",{staticClass:"bi bi-moon",attrs:{"aria-hidden":"true"},on:{click:t.darkThemeSwitch}})]):i("button",[i("i",{staticClass:"bi bi-sun",attrs:{"aria-hidden":"true"},on:{click:t.darkThemeSwitch}})])],1)])])]),i("div",{staticClass:"search-container vs-wrapper"},[i("div",{staticClass:"search-container-content"},[i("div",{staticClass:"close-search-div"},[i("button",{attrs:{type:"button"},on:{click:t.closeSearch}},[t._v("×")])]),i("br"),i("br"),t._m(0)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("input",{attrs:{type:"text",placeholder:"Type to search"}}),a("button",[a("i",{staticClass:"bi bi-search",attrs:{"aria-hidden":"true"}})])])}],c=(a("96cf"),a("1da1")),u=a("d4ec"),l=a("bee2"),m=function(){function t(){Object(u["a"])(this,t)}return Object(l["a"])(t,[{key:"_addDarkTheme",value:function(){document.getElementsByTagName("html")[0].setAttribute("theme","dark-mode")}},{key:"_removeDarkTheme",value:function(){document.getElementsByTagName("html")[0].removeAtrribute("theme")}},{key:"_darkThemeSwitch",value:function(){var t=document.querySelector("#dark-theme-style");t?this._removeDarkTheme():this._addDarkTheme()}}]),t}(),d=window.jQuery=a("1157"),p={data:function(){return{themeChanger:null,is_light_mode:!0}},created:function(){this.themeChanger=new m},methods:{darkThemeSwitch:function(){this.is_light_mode=!this.is_light_mode,this.themeChanger._darkThemeSwitch()},ctcMobileNav:function(t){0===d(t.target).closest("aside").length&&this.closeMobileNav()},closeMobileNav:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(".aside-container").fadeOut();case 2:return t.next=4,d(".aside-container aside").css({left:"-100%"});case 4:case"end":return t.stop()}}),t)})))()},showMobileNav:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(".aside-container").fadeIn();case 2:return t.next=4,d(".aside-container aside").css({left:"0%"});case 4:case"end":return t.stop()}}),t)})))()},closeSearch:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(".search-container").css({transform:"scale(0)"});case 2:return t.next=4,d(".search-container").fadeOut();case 4:case"end":return t.stop()}}),t)})))()},showSearch:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(".search-container").fadeIn();case 2:return t.next=4,d(".search-container").css({transform:"scale(1)"});case 4:case"end":return t.stop()}}),t)})))()}}},h=p,v=(a("bbc4"),a("2877")),f=Object(v["a"])(h,n,o,!1,null,"31ac9c4c",null),g=f.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("footer",[i("div",{staticClass:"footer-container"},[i("img",{staticClass:"footer-title",attrs:{src:a("9d64")}}),i("br"),i("div",{staticClass:"footer-links"},[i("a",{attrs:{href:""}},[t._v("SIGN IN")]),i("a",{attrs:{href:""}},[t._v("SIGN UP")]),i("a",{attrs:{href:""}},[t._v("404")]),i("a",{attrs:{href:""}},[t._v("SUPPORT")]),i("a",{attrs:{href:""}},[t._v("GET THEME")])]),i("div",{staticClass:"footer-sm"},[i("a",{attrs:{href:""}},[i("i",{staticClass:"fab fa-facebook"})]),i("a",{attrs:{href:""}},[i("i",{staticClass:"fab fa-whatsapp"})]),i("a",{attrs:{href:""}},[i("i",{staticClass:"fab fa-twitter"})]),i("a",{attrs:{href:""}},[i("i",{staticClass:"fab fa-linkedin"})])])]),i("div",{staticClass:"copyright-div"},[t._v(" THINKTECH © 2020 - All rights reserved. ")])])])}],C=(a("6adf"),{}),k=Object(v["a"])(C,b,_,!1,null,"410a0b72",null),w=k.exports,x={components:{NavbarComponent:g,FooterComponent:w}},y=x,q=(a("034f"),Object(v["a"])(y,s,r,!1,null,null,null)),O=q.exports,j=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("TrendingComponent"),a("ArticleComponent")],1)},$=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"articles-div"},t._l(t.articles,(function(e){return a("div",{key:e.id,staticClass:"postcard mb-4"},[a("div",{staticClass:"postcard-container"},[a("router-link",{staticClass:"postcard-img-div",attrs:{to:{name:"article",params:{title:e.title_link}}}},[a("img",{staticClass:"postcard-img",attrs:{src:t.asset("assets/images/"+e.images[0]),alt:""+e.title}})]),a("div",{staticClass:"postcard-text-div"},[a("div",{staticClass:"mb-2"},[a("router-link",{staticClass:"postcard-header",attrs:{to:{name:"article",params:{title:e.title_link}}}},[t._v(" "+t._s(e.title)+" ")])],1),a("div",{staticClass:"postcard-mini mb-2"},[t._v(" "+t._s(e.body)+" ")]),a("div",{staticClass:"postcard-time"},[a("span",[t._v(" "+t._s(e.timeago)+" ")]),a("span",[t._v(" ‐ ")]),a("span",[t._v(" 2 mins read ")])])])],1)])})),0)])},S=[],A=(a("b0c0"),a("bc3a")),R=a.n(A),L=R.a.create({baseURL:"http://beem.test/api"});L.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",L.defaults.withCredentials=!0;var N=L,M={getCookie:function(t){return N.get("/csrf-cookie")}},P={getTrending:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.getCookie();case 2:return t.abrupt("return",N.get("/articles/trending"));case 3:case"end":return t.stop()}}),t)})))()},getArticles:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.getCookie();case 2:return t.abrupt("return",N.get("/articles"));case 3:case"end":return t.stop()}}),t)})))()},getAuthor:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.getCookie();case 2:return e.abrupt("return",N.get("/articles/author/"+t));case 3:case"end":return e.stop()}}),e)})))()},getTag:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.getCookie();case 2:return e.abrupt("return",N.get("/articles/tag/"+t));case 3:case"end":return e.stop()}}),e)})))()},getTitle:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.getCookie();case 2:return e.abrupt("return",N.get("/article/"+t));case 3:case"end":return e.stop()}}),e)})))()}},I={data:function(){return{articles:[]}},props:["author"],mounted:function(){return void 0!=this.author?this.fetchAuthor():"home"==this.$route.name?this.fetchPosts():"tag"==this.$route.params.type?this.fetchTag():void 0},methods:{fetchPosts:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.getArticles().then((function(e){t.articles=e.data.data})).catch((function(t){return console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchAuthor:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.getAuthor(t.author.id).then((function(e){t.articles=e.data.data})).catch((function(t){return console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchTag:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.getTag(t.$route.params.name).then((function(e){t.articles=e.data.data})).catch((function(t){return console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}},F=I,D=(a("46df"),Object(v["a"])(F,E,S,!1,null,"52f80294",null)),H=D.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bg-stories"},[a("div",{staticClass:"swiper-container"},[t.articles.length>0?a("VueSlickCarousel",{staticClass:"swiper-wrapper",attrs:{arrows:!1,dots:!0,autoplay:!0,infinite:!0}},t._l(t.articles,(function(e){return a("div",{key:e.id,staticClass:"swiper-slide featured-postcard"},[a("div",{staticClass:"postcard-container"},[a("div",{staticClass:"postcard-img-div"},[a("router-link",{attrs:{to:{name:"article",params:{title:e.title_link}}}},[a("img",{staticClass:"postcard-img featured-postcard-img",attrs:{src:t.asset("assets/images/"+e.images[0]),alt:""+e.title}})])],1),a("div",{staticClass:"postcard-text-div"},[a("div",{staticClass:"mb-4"},[a("router-link",{attrs:{to:{name:"classify",params:{type:"tag",name:e.tag}}}},[a("h4",{staticClass:"postcard-tag"},[t._v(t._s(e.tag))])])],1),a("div",{staticClass:"mb-3"},[a("router-link",{staticClass:"post-title",attrs:{to:{name:"article",params:{title:e.title_link}}}},[t._v(" "+t._s(e.title)+" ")])],1),a("div",[a("router-link",{staticClass:"postcard-author-div",attrs:{to:{name:"classify",params:{type:"author",name:e.author_link}}}},[a("img",{staticClass:"postcard-author-img",attrs:{src:t.asset("author_images/"+e.author.image),alt:e.author.name,srcset:""}}),a("h5",{staticClass:"post-author"},[t._v(t._s(e.author.name))])])],1),a("div",{staticClass:"postcard-mini"},[t._v(" "+t._s(e.body)+" ")])])])])})),0):t._e(),a("div",{staticClass:"swiper-pagination swiper-pagination-white"}),t._m(0)],1)])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-div"},[a("div",{staticClass:"swiper-button-next swiper-button-white"}),a("div",{staticClass:"swiper-button-prev swiper-button-white"})])}],V=a("a012"),B=a("a7ab"),U=a.n(B),J=(a("7b8d"),a("6a2c"),{data:function(){return{articles:[],slidesToShow:3}},components:{VueSlickCarousel:U.a,VueSkeletonLoader:V["a"]},created:function(){this.fetchTrending()},methods:{fetchTrending:function(){var t=this;P.getTrending().then((function(e){t.articles=e.data.data}))}}}),K=J,W=(a("415b"),Object(v["a"])(K,G,Q,!1,null,"509af4dd",null)),X=W.exports,z={data:function(){return{articles:[],featuredArticles:[]}},components:{ArticleComponent:H,TrendingComponent:X}},Y=z,Z=Object(v["a"])(Y,T,$,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],it={},st=Object(v["a"])(it,et,at,!1,null,null,null),rt=st.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("FindArticleComponent")],1)},ot=[],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{color:"var(--dark)"},attrs:{id:"post"}},[a("div",{staticClass:"postcard-container single-article"},[a("div",{staticClass:"post-header"},[a("div",{staticClass:"post-meta"},[a("div",{staticClass:"postcard-text-div"},[a("div",{staticClass:"mb-4"},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"classify",params:{type:"tag",name:t.article.tag}}}},[a("h4",{staticClass:"postcard-tag"},[t._v(t._s(t.article.tag))])])],1),a("div",{staticClass:"mb-1"},[a("h1",{staticClass:"post-title"},[t._v(t._s(t.article.title))])]),a("div",{staticClass:"mb-0 postcard-time"},[a("span",[t._v(" "+t._s(t.article.timeago)+" ")]),a("span",[t._v(" ‐ ")]),a("span",[t._v(" 2 mins read ")])]),a("router-link",{staticClass:"postcard-author-div p-0",attrs:{to:{name:"classify",params:{type:"author",name:t.article.author_link}}}},[a("img",{staticClass:"postcard-author-img",attrs:{src:t.asset("author_images/"+t.article.author.image),alt:"",srcset:""}}),a("h5",{staticClass:"post-author"},[t._v(t._s(t.article.author.name))])])],1)]),a("div",{staticClass:"postcard-img-div"},[a("img",{staticClass:"postcard-img",attrs:{src:t.asset("assets/images/"+t.article.images[0]),alt:""+t.article.title}})])]),a("div",{staticClass:"post-inner pt-4 pb-4"},[a("div",{staticClass:"post-article"},[a("p",[t._v(" "+t._s(t.article.body)+" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, repellendus magnam. Incidunt voluptates velit eos itaque in nobis vitae consequuntur, eveniet tempora placeat blanditiis impedit non numquam distinctio architecto corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis, accusantium culpa, possimus numquam amet veniam sit dolorem tempora modi esse sunt expedita officiis voluptatibus labore neque laborum vero saepe. ")]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit aperiam maxime dolore voluptates animi, architecto, quae harum officia, dignissimos quod excepturi labore vitae soluta quis reprehenderit ut nostrum alias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores iste, molestias excepturi natus sed quisquam reprehenderit, nobis dolorum quae et, modi cum nisi accusamus odit. Quibusdam magnam ea omnis blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora atque eveniet mollitia maxime consectetur cupiditate odio voluptates, perferendis dignissimos, autem accusamus amet totam minus. Beatae, dolorum expedita. Velit, earum error. ")]),a("h3",[t._v("Life is full of shit")]),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus amet architecto esse odio officiis, laudantium qui illum dignissimos quam blanditiis non cupiditate? Iure sunt distinctio sequi. Repellendus, impedit laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nulla et ea sit aut eius, molestias nemo, exercitationem magni recusandae voluptate excepturi, eos fugiat rerum! In nam quo natus pariatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui natus tenetur, officiis sunt ut vero error nesciunt consequuntur magnam eum sequi distinctio, reiciendis cupiditate assumenda! Odio minus repellat natus in?")]),a("figure",[a("img",{attrs:{src:t.asset("assets/images/"+t.article.images[1]),alt:""}}),a("figcaption",[t._v("Photo from adobestock")])]),a("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid iusto delectus excepturi recusandae at minima ipsum necessitatibus. Assumenda ad sit alias itaque magnam nihil eveniet commodi atque aspernatur, natus illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem soluta adipisci, tenetur quisquam, cumque magni ab, facilis sit beatae laborum fugit illum! Facilis optio voluptatum, labore ab ratione maiores inventore.")]),t._m(0),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus architecto possimus doloremque dolores. Esse eos tempora voluptas expedita maiores numquam doloribus quidem aperiam, repudiandae obcaecati, vel illo distinctio fugiat maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur saepe eos distinctio, libero voluptate fugit laborum quas nisi esse maxime necessitatibus culpa praesentium est ex magnam, veritatis debitis amet in.")]),a("h3",[t._v("Lorem, ipsum dolor sit amet ")]),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis dolorum commodi consectetur illo? Similique, aliquid. Cumque quasi possimus voluptate, nulla quia molestias laudantium aut corporis, voluptatibus quae obcaecati alias!")]),a("figure",[a("div",{staticClass:"figure-gallery"},[a("img",{attrs:{src:t.asset("assets/images/"+t.article.images[0]),alt:""}}),a("img",{attrs:{src:t.asset("assets/images/"+t.article.images[1]),alt:""}})]),a("figcaption",[t._v("Photo from adobestock")])]),t._m(1),a("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore magni exercitationem veritatis commodi eius fuga recusandae! Odio porro recusandae in soluta maxime amet numquam debitis magni, similique, quo cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio perferendis totam tempore quo reiciendis fuga esse est aliquid debitis necessitatibus nisi, aut laudantium nihil, eligendi soluta minus. Fugiat, eum.")]),a("div",{staticClass:"post-share pt-4 pb-4"},[a("p",{staticClass:"font-weight-bold"},[t._v(" Share this article:")]),a("div",{staticClass:"ml-2"},[a("a",{staticClass:"p-1 m-1",attrs:{href:"http://beem.test"+t.$route.path,target:"_blank"}},[a("i",{staticClass:"bi bi-facebook"})]),a("a",{staticClass:"p-1 m-1",attrs:{href:"http://beem.test"+t.$route.path,target:"_blank"}},[a("i",{staticClass:"bi bi-whatsapp"})]),a("a",{staticClass:"p-1 m-1",attrs:{href:"http://beem.test"+t.$route.path,target:"_blank"}},[a("i",{staticClass:"bi bi-twitter"})]),a("a",{staticClass:"p-1 m-1",attrs:{href:"http://beem.test"+t.$route.path,target:"_blank"}},[a("i",{staticClass:"bi bi-linkedin"})]),a("a",{staticClass:"p-1 m-1",attrs:{href:"http://beem.test"+t.$route.path,target:"_blank"}},[a("i",{staticClass:"bi bi-link"})])])])])]),a("div",{staticClass:"single-article-author-div"},[a("div",{staticClass:"single-article-author-content"},[a("div",{staticClass:"pl-4 pr-4"},[a("img",{staticClass:"postcard-author-img",attrs:{src:t.asset("author_images/"+t.article.author.image),alt:""+t.article.author.name,srcset:""}})]),a("div",{staticClass:"single-article-author"},[a("span",[t._v("Written by")]),a("h5",{staticClass:"post-author"},[t._v(t._s(t.article.author.name))]),a("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, temporibus quaerat? Nisi, culpa error itaque odio earum facilis quidem ullam fuga molestias nostrum, voluptate quis. Autem architecto soluta incidunt modi. ")])])])])]),a("div",{staticClass:"loadmore-div text-center m-n1"},[a("button",{staticClass:"text-uppercase p-3 bg-transparent",on:{click:function(e){return t.loadMore()}}},[t._v("Load Comments "),a("i",{staticClass:"bi bi-caret-down-fill",attrs:{"aria-hidden":"true"}})])])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("blockquote",[a("div",{staticClass:"blockquote-content"},[t._v(" Quis adipiscing ligula donec ullamcorper tellus. Id odio vulputate aliquam nullam vitae tincidunt semper etiam quam donec quis.Donec Massa Integer ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("blockquote",[a("div",{staticClass:"blockquote-content"},[t._v(" Quis adipiscing ligula donec ullamcorper tellus. Id odio vulputate aliquam nullam vitae tincidunt semper etiam quam donec quis.Donec Massa Integer ")])])}],lt={data:function(){return{article:{},similarArticles:[]}},created:function(){return this.getArticle(this.$route.params.title)},methods:{getArticle:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,P.getTitle(t).then((function(t){e.article=t.data.data.article,e.similarArticles=t.data.data.similar_articles})).catch((function(t){return console.log(t)}));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()}}},mt=lt,dt=(a("4c40"),Object(v["a"])(mt,ct,ut,!1,null,"57573330",null)),pt=dt.exports,ht={name:"Article",components:{FindArticleComponent:pt}},vt=ht,ft=Object(v["a"])(vt,nt,ot,!1,null,null,null),gt=ft.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("MetaComponent",{attrs:{author:t.author}}),a("ArticleComponent",{attrs:{author:t.author}}),a("SimilarArticlesComponent",{attrs:{author:t.author}})],1)},_t=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["author"==t.$route.params.type?a("div",{staticClass:"data-meta"},[a("div",{staticClass:"author-img-div"},[a("img",{attrs:{src:t.asset("author_images/"+t.author.image),alt:""}}),a("p",{staticClass:"author-created"},[a("i",{staticClass:"bi bi-clock"}),t._v(" "+t._s(t.author.relative_time))])]),a("div",{staticClass:"author-content"},[a("h3",[t._v(t._s(t.author.name))]),a("p",[a("i",{staticClass:"bi bi-pin"}),t._v(" "+t._s(t.author.location)+"Lagos, Ikeja")]),a("p",[t._v(t._s(t.author.bio)+" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis corrupti libero autem, odio ducimus hic quis amet quae saepe atque porro illum earum commodi fugiat perferendis eius cumque, vitae sit. ")])])]):a("div",{staticClass:"data-meta"},[a("div",{staticClass:"author-img-div align-content-center justify-content-center"},[a("h3",{staticClass:"tag-name font-weight-bold"},[t._v(t._s(t.$route.params.name))])]),t._m(0)])])},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"author-content"},[a("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis corrupti libero autem, odio ducimus hic quis amet quae saepe atque porro illum earum commodi fugiat perferendis eius cumque, vitae sit. ")])])}],wt={data:function(){return{}},props:["author"]},xt=wt,yt=(a("a068"),Object(v["a"])(xt,Ct,kt,!1,null,"00b9494e",null)),qt=yt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"articles-div"},t._l(t.similarArticles,(function(e){return a("div",{key:e.id,staticClass:"postcard mb-4"},[a("div",{staticClass:"postcard-container"},[a("router-link",{staticClass:"postcard-img-div",attrs:{to:{name:"article",params:{title:e.title_link}}}},[a("img",{staticClass:"postcard-img",attrs:{src:t.asset("assets/images/"+e.images[0]),alt:""+e.title}})]),a("div",{staticClass:"postcard-text-div"},[a("div",{staticClass:"mb-2"},[a("router-link",{staticClass:"postcard-header",attrs:{to:{name:"article",params:{title:e.title_link}}}},[t._v(" "+t._s(e.title)+" ")])],1),a("div",{staticClass:"postcard-mini mb-2"},[t._v(" "+t._s(e.body)+" ")]),a("div",{staticClass:"postcard-time"},[a("span",[t._v(" "+t._s(e.timeago)+" ")]),a("span",[t._v(" ‐ ")]),a("span",[t._v(" 2 mins read ")])])])],1)])})),0)])},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-4 pb-4"},[a("h6",[t._v("YOU MIGHT ALSO LIKE...")])])}],Tt={},$t=Object(v["a"])(Tt,Ot,jt,!1,null,null,null),Et=$t.exports,St={data:function(){return{author:{}}},components:{ArticleComponent:H,SimilarArticlesComponent:Et,MetaComponent:qt},created:function(){var t=this;if("author"==this.$route.params.type){var e=this.$route.params.name;R.a.get("http://beem.test/api/account/"+e).then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.data.data;case 2:t.author=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}else{var a=this.$route.params.name;console.log(a)}},methods:{}},At=St,Rt=Object(v["a"])(At,bt,_t,!1,null,null,null),Lt=Rt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("EditorComponent")],1)},Mt=[],Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("form",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1-12 col-form-label",attrs:{for:"inputName"}},[t._v("Title")]),a("div",{staticClass:"container"},[a("div",{staticClass:"col-sm-1-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",name:"inputName",id:"inputName",placeholder:""},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})])])]),t._m(0),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1-12 col-form-label",attrs:{for:"inputName"}},[t._v("Body")]),a("div",{staticClass:"container"},[a("div",{staticClass:"col-sm-1-12"},[a("editor",{attrs:{id:"admin-content","api-key":"cpi1dtbgs3hio5uf1etl7rpe084f0ar5k3a9s7v2vb8p0uig",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                             alignleft aligncenter alignright alignjustify |                             bullist numlist outdent indent | removeformat | help"}},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1)])]),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-sm-10"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.submitArticle(e)}}},[t._v("SAVE ARTICLE")])])])])])])},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1-12 col-form-label",attrs:{for:"inputName"}},[t._v("Category")]),a("div",{staticClass:"container"},[a("div",{staticClass:"col-sm-1-12"},[a("select",{staticClass:"form-control"},[a("option"),a("option",{attrs:{value:""}},[t._v("Technology")]),a("option",{attrs:{value:""}},[t._v("Technology")]),a("option",{attrs:{value:""}},[t._v("Technology")]),a("option",{attrs:{value:""}},[t._v("Technology")]),a("option",{attrs:{value:""}},[t._v("Technology")]),a("option",{attrs:{value:""}},[t._v("Technology")])])])])])}],Ft=a("ca72"),Dt={data:function(){return{form:{title:"",category:"",body:""}}},components:{editor:Ft["a"]},methods:{submitArticle:function(){console.log(this.form)}}},Ht=Dt,Gt=Object(v["a"])(Ht,Pt,It,!1,null,"49987b1a",null),Qt=Gt.exports,Vt={components:{EditorComponent:Qt}},Bt=Vt,Ut=Object(v["a"])(Bt,Nt,Mt,!1,null,null,null),Jt=Ut.exports,Kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"absolute inset-0 bg-gray-200 align-items-center justify-content-center"},[a("div",[t._v(" 404. page not found ")])])}],Xt={},zt=Object(v["a"])(Xt,Kt,Wt,!1,null,null,null),Yt=zt.exports;i["a"].use(j["a"]);var Zt=[{path:"*",component:Yt},{path:"/",name:"home",component:tt},{path:"/about",name:"about",component:rt},{path:"/admin/:page?",name:"adimin",props:!0,component:Jt},{path:"/:title?",name:"article",props:!0,component:gt},{path:"/:type?/:name",name:"classify",props:!0,component:Lt}],te=new j["a"]({mode:"history",linkActiveClass:"font-semibold",routes:Zt}),ee=te;i["a"].mixin(a("01f9")),i["a"].mixin(a("3391")),window.APP_NAME="BEEM",i["a"].config.productionTip=!1,new i["a"]({router:ee,render:function(t){return t(O)}}).$mount("#app")},"5d98":function(t,e,a){},"5fba":function(t,e,a){},"6adf":function(t,e,a){"use strict";a("5fba")},"6bf8":function(t,e,a){},"85ec":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.1a78b8ee.png"},a068:function(t,e,a){"use strict";a("1fda")},bbc4:function(t,e,a){"use strict";a("e07c")},bead:function(t,e,a){},e07c:function(t,e,a){}});
//# sourceMappingURL=app.8e3ec015.js.map