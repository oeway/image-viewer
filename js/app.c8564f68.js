(function(e){function t(t){for(var i,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c2c04d0a"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d07":function(e,t,n){"use strict";var i=n("3f9c"),r=n.n(i);r.a},"3f9c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"ImageLayer",(function(){return z})),n.d(i,"VectorLayer",(function(){return Y})),n.d(i,"ItkVtkLayer",(function(){return ue}));n("c975"),n("d81d"),n("a434"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=n("2877"),c={},l=Object(s["a"])(c,a,o,!1,null,null,null),u=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ImageViewer",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-page"},[n("section",{staticClass:"sidebar-layout"},[n("b-sidebar",{attrs:{position:e.position,fullheight:!0,fullwidth:!1,overlay:!1,open:e.open,mobile:e.mobile,"can-cancel":!0,"expand-on-hover":e.expandOnHover,reduce:e.reduce,type:"is-light"},on:{"update:open":function(t){e.open=t}}},[n("div",{staticClass:"p-1"},[n("div",{staticClass:"block"},[n("img",{staticStyle:{width:"220px"},attrs:{src:"static/img/kaibu-banner.svg"}})]),n("button",{staticClass:"button floating-close-btn is-small",on:{click:e.closeSidebar}},[n("b-icon",{attrs:{icon:"chevron-left"}})],1),n("div",{staticClass:"block"},[n("div",{staticClass:"field"},[n("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:e._u([{key:"trigger",fn:function(t){var i=t.active;return n("button",{staticClass:"button"},[n("span",[e._v("+ Add layer")]),n("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}])},e._l(e.layerTypes,(function(t,i){return n("b-dropdown-item",{key:i,attrs:{value:i,"aria-role":"listitem"},on:{click:function(t){return e.newLayer(i)}}},[e._v(e._s(i))])})),1)],1)]),n("b-menu",{directives:[{name:"sortable",rawName:"v-sortable",value:e.sortableOptions,expression:"sortableOptions"}],staticClass:"is-custom-mobile",on:{sorted:function(t){return e.layerSorted()}}},[n("b-menu-list",{attrs:{label:"Layers"}},e._l(e.layer_configs.slice().reverse(),(function(t){return n("b-menu-item",{key:t.id,staticClass:"layer-item",on:{click:function(n){return e.selectLayer(t)}}},[n("template",{slot:"label"},[n("button",{staticClass:"button is-small",on:{click:function(n){return e.toggleVisible(t)}}},[t.visible?n("b-icon",{attrs:{icon:"eye-outline"}}):n("b-icon",{attrs:{icon:"eye-off-outline"}})],1),e._v(" "+e._s(t.name)+" "),n("b-dropdown",{staticClass:"is-pulled-right",attrs:{"aria-role":"list",position:"is-bottom-left"}},[n("b-icon",{attrs:{slot:"trigger",icon:"dots-vertical"},slot:"trigger"}),n("b-dropdown-item",{attrs:{"aria-role":"listitem",icon:"close-circle"},on:{click:function(n){return e.removeLayer(t)}}},[e._v("Remove")])],1)],1)],2)})),1)],1),n("hr",{staticClass:"solid"}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.currentLayer,expression:"currentLayer"}],staticClass:"block",staticStyle:{"min-height":"150px"}},[n("b-menu-list",{attrs:{label:"Properties"}},e._l(e.layer_configs,(function(t){return n(e.layerTypes[t.type],{directives:[{name:"show",rawName:"v-show",value:e.currentLayer===t,expression:"currentLayer === layer"}],key:t.id,ref:"layer_"+t.id,refInFor:!0,tag:"component",attrs:{selected:t.selected,visible:t.visible,map:e.map,config:t}})})),1)],1)],1)]),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.open,expression:"!open"}],staticClass:"button floating-menu-btn",on:{click:function(t){return e.openSidebar()}}},[n("img",{staticStyle:{width:"30px"},attrs:{src:"static/img/kaibu-icon.svg"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showGallery,expression:"showGallery"}]},[n("gallery",{attrs:{collections:e.collections}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showGallery,expression:"!showGallery"}],staticClass:"p-1"},[n("div",{style:{width:e.viewerWidth},attrs:{id:"map"}}),e.activeSliders?n("section",{staticClass:"slider-container",style:{width:e.sliderWidth}},e._l(e.activeSliders,(function(t){return n("b-field",{key:t.name,staticStyle:{"margin-bottom":"0px!important"}},[n("label",{staticClass:"label slider-label"},[e._v(e._s(t.name))]),n("b-slider",{staticClass:"slider-body",attrs:{min:t.min||0,max:t.max||1,step:t.step||1},on:{input:t.changed},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"slider.value"}})],1)})),1):e._e()])],1)])},y=[],g=(n("b0c0"),n("b85c")),v=(n("96cf"),n("1da1")),w=n("5530"),b=(n("5bc0"),n("5eee")),x=n("a2c7");n("25f0");function _(){return Math.random().toString(36).substr(2,10)}var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gallery container"},[!e.collections||e.collections.length<=0?n("p",[e._v(" Nothing to show in the gallery ")]):e._e(),e._l(e.collections,(function(t){return n("div",{key:t.name,staticClass:"tile is-ancestor  is-fluid"},[n("div",{staticClass:"tile is-parent"},e._l(t.items,(function(t){return n("div",{key:t.name,staticClass:"card tile is-child"},[e._m(0,!0),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[e._m(1,!0),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[e._v(e._s(t.name))])])])])])})),0)])}))],2)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],L={name:"Gallery",props:{collections:{type:Array,default:null}}},P=L,I=Object(s["a"])(P,k,C,!1,null,null,null),O=I.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-layer"},[n("section",[n("b-field",{attrs:{label:"opacity"}},[n("b-slider",{attrs:{min:0,max:1,step:.1},on:{input:e.updateOpacity},model:{value:e.config.opacity,callback:function(t){e.$set(e.config,"opacity",t)},expression:"config.opacity"}})],1),e.config.climit?n("b-field",{attrs:{label:"contrast limit"}},[n("b-slider",{attrs:{min:1,max:255,step:.5,ticks:""},model:{value:e.config.climit,callback:function(t){e.$set(e.config,"climit",t)},expression:"config.climit"}})],1):e._e()],1)])},S=[],E=n("e7df"),V=n("c810"),$=n("f5dd"),D={name:"image-layer",type:"image",props:{map:{type:b["a"],default:null},selected:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{layer:null}},watch:{visible:function(e){this.layer.setVisible(e)}},mounted:function(){this.config.climit=[4,50],this.config.opacity=1,this.config.sliders=[{name:"Z",min:0,max:1e3,step:1,value:3,changed:function(){console.log("z slider changed.")}},{name:"T",min:0,max:100,step:1,value:3,changed:function(){console.log("t slider changed.")}}],this.config.init=this.init},beforeDestroy:function(){this.layer&&this.map.removeLayer(this.layer)},created:function(){},methods:{init:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getLayer();case 2:return e.layer=t.sent,e.map.addLayer(e.layer),e.$forceUpdate(),t.abrupt("return",e.layer);case 6:case"end":return t.stop()}}),t)})))()},updateOpacity:function(){this.layer&&this.layer.setOpacity(this.config.opacity)},selectLayer:function(){},getLayer:function(){var e=[0,0,1024,968],t=new $["a"]({code:"xkcd-image",units:"pixels",extent:e}),n=new E["a"]({attributions:'<a href="https://imgs.xkcd.com">xkcd</a>',url:"https://imgs.xkcd.com/comics/online_communities.png",projection:t,imageExtent:e}),i=new V["a"]({source:n});return i}}},T=D,R=Object(s["a"])(T,j,S,!1,null,null,null),z=R.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vector-layer"},[n("section",[n("div",{staticClass:"field"},[n("b-switch",{on:{input:function(t){return e.updateDrawInteraction()}},model:{value:e.config.enableDraw,callback:function(t){e.$set(e.config,"enableDraw",t)},expression:"config.enableDraw"}},[e._v("Enable Draw")])],1),n("div",{staticClass:"field"},[n("b-switch",{on:{input:function(t){return e.updateDrawInteraction()}},model:{value:e.config.freehand,callback:function(t){e.$set(e.config,"freehand",t)},expression:"config.freehand"}},[e._v("Freehand")])],1),n("div",{staticClass:"field"},[n("b-dropdown",{attrs:{"aria-role":"list"},on:{change:function(t){return e.updateDrawInteraction()}},scopedSlots:e._u([{key:"trigger",fn:function(t){var i=t.active;return n("button",{staticClass:"button is-primary"},[n("span",[e._v(e._s(e.config.draw_type))]),n("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}]),model:{value:e.config.draw_type,callback:function(t){e.$set(e.config,"draw_type",t)},expression:"config.draw_type"}},[n("b-dropdown-item",{attrs:{value:"Polygon","aria-role":"listitem"}},[e._v("Polygon")]),n("b-dropdown-item",{attrs:{value:"LineString","aria-role":"listitem"}},[e._v("LineString")]),n("b-dropdown-item",{attrs:{value:"Circle","aria-role":"listitem"}},[e._v("Circle")]),n("b-dropdown-item",{attrs:{value:"Point","aria-role":"listitem"}},[e._v("Point")])],1)],1)])])},M=[],U=n("3e6b"),A=n("ce2c"),B=n("6c77"),N=n("83a6"),F=n("8682"),G=n("ac29"),H=n("5831");function q(){for(var e="0123456789ABCDEF",t="#",n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t}var K={name:"vector-layer",type:"vector",props:{map:{type:b["a"],default:null},selected:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{layer:null}},watch:{selected:function(){this.updateDrawInteraction()},visible:function(e){this.layer.setVisible(e),this.updateDrawInteraction()}},mounted:function(){this.config.draw_type="Polygon",this.config.line_width=4,this.config.freehand=!0,this.config.enableDraw=!0,this.config.label="cell",this.config.color=q(),this.config.init=this.init},beforeDestroy:function(){this.layer&&(this.removeDrawInteraction(),this.map.removeLayer(this.layer))},created:function(){},methods:{init:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getLayer();case 2:return e.layer=t.sent,e.map.addLayer(e.layer),e.updateDrawInteraction(),e.$forceUpdate(),t.abrupt("return",e.layer);case 7:case"end":return t.stop()}}),t)})))()},getLayer:function(){this.vector_source=new H["a"];var e=new U["a"]({source:this.vector_source,style:new B["c"]({fill:new N["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new F["a"]({color:this.config.color,width:2}),image:new A["a"]({radius:7,fill:new N["a"]({color:"#ffcc33"})})})});return e},updateDrawInteraction:function(){this.selected&&this.visible&&this.config.enableDraw?this.setupDrawInteraction():this.removeDrawInteraction()},removeDrawInteraction:function(){this.draw&&this.map.removeInteraction(this.draw)},setupDrawInteraction:function(){var e=this;this.vector_source&&this.$nextTick((function(){e.draw&&e.map.removeInteraction(e.draw);var t=new G["a"]({source:e.vector_source,type:e.config.draw_type,freehand:e.config.freehand,style:new B["c"]({fill:new N["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new F["a"]({color:e.config.color,width:e.config.line_width})})});e.map.addInteraction(t),t.on("drawend",function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=n.feature,i.set("label",e.config.label);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.draw=t}))}}},Z=K,J=Object(s["a"])(Z,W,M,!1,null,null,null),Y=J.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"itk-vtk-layer"},[n("section",{attrs:{id:"toolbar"}}),n("b-field",{attrs:{label:"opacity"}},[n("b-slider",{attrs:{min:0,max:1,step:.1},on:{input:e.updateOpacity},model:{value:e.config.opacity,callback:function(t){e.$set(e.config,"opacity",t)},expression:"config.opacity"}})],1)],1)},Q=[],ee=(n("c19f"),n("5cc6"),n("84c3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("4105")),te=n("1af9"),ne=n("256f"),ie=n("0af5"),re=window.itkVtkViewer,ae=function(e){function t(t){e.call(this,t),this.viewerElement=document.createElement("div"),this.viewerElement.classList.add("ol-layer"),this.viewerElement.style.position="absolute",this.sync_callback=t.sync_callback}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getSourceState=function(){return"ready"},t.prototype.render=function(){return this.sync_callback&&this.sync_callback(),this.viewerElement.style.opacity=this.getOpacity(),this.viewerElement.style.width="100%",this.viewerElement},t}(te["a"]);function oe(e){return new Promise((function(t){var n=document.createElement("canvas"),i=n.getContext("2d"),r=new Image;r.onload=function(){n.width=r.width,n.height=r.height,i.drawImage(r,0,0,r.width,r.height);var e=i.getImageData(0,0,r.width,r.height);t({imageType:{dimension:2,pixelType:1,componentType:"uint8_t",components:4},name:"test image",origin:[0,0],spacing:[1,1],direction:{data:[1,0,0,1]},size:[r.width,r.height],data:new Uint8Array(e.data.buffer)})},r.crossOrigin="Anonymous",r.src=e}))}var se={name:"itk-vtk-layer",type:"itk-vtk",props:{map:{type:b["a"],default:null},selected:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{layer:null}},watch:{visible:function(e){this.layer.setVisible(e),this.synchronizeVtkCoordinate(),this.renderWindow.render()}},mounted:function(){this.config.opacity=1,this.config.sliders=[{name:"T",min:0,max:100,step:1,value:3,changed:function(){console.log("t slider changed.")}}],this.config.init=this.init},beforeDestroy:function(){this.layer&&this.map.removeLayer(this.layer)},created:function(){},methods:{init:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getLayer();case 2:return e.layer=t.sent,e.map.addLayer(e.layer),n=new ne["b"]({code:"image",units:"pixels",extent:e.extent}),e.map.setView(new x["a"]({projection:n,center:Object(ie["x"])(e.extent),zoom:1,minZoom:-10})),e.enableItkInteraction(),e.synchronizeVtkCoordinate(),e.renderWindow.render(),e.$forceUpdate(),t.abrupt("return",e.layer);case 11:case"end":return t.stop()}}),t)})))()},updateOpacity:function(){this.layer&&this.layer.setOpacity(this.config.opacity)},selectLayer:function(){},getLayer:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a,o,s,c,l,u,d,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={position:"absolute",width:"100vw",height:"100vh",minHeight:"400px",minWidth:"400px",margin:"1",padding:"1",top:"0",left:"0",overflow:"hidden",display:"block-inline"},i={backgroundColor:[0,0,0,0],containerStyle:n},r=new ae({sync_callback:e.synchronizeVtkCoordinate}),!e.config.image){t.next=7;break}a=e.config.image,t.next=11;break;case 7:if(!e.config.imageUrl){t.next=11;break}return t.next=10,oe(e.config.imageUrl);case 10:a=t.sent;case 11:return o=re.utils.vtkITKHelper.convertItkToVtkImage(a),s=o.getExtent(),e.extent=[s[0],s[2],s[1],s[3]],c=o.getDimensions(),l=2===c.length||3===c.length&&1===c[2],u=re.createViewer(r.viewerElement,{viewerStyle:i,image:o,pointSets:null,geometries:null,use2D:l,rotate:!1,uiContainer:document.getElementById("toolbar")}),d=u.getViewProxy(),f=d.getRenderWindow(),f.getViews()[0].initialize(),e.viewProxy=u.getViewProxy(),e.viewProxy.updateOrientation(2,1,[0,1,0]),e.renderWindow=e.viewProxy.getRenderWindow(),e.interactor=e.renderWindow.getInteractor(),p=e.interactor.getView(),p.getContainer().removeEventListener("wheel",e.interactor.handleWheel),p.getContainer().removeEventListener("mousedown",e.interactor.handleMouseDown),e.renderer=e.viewProxy.getRenderer(),u.setUserInterfaceCollapsed(!0),setTimeout((function(){u.setUserInterfaceCollapsed(!1)}),10),e.viewer=u,t.abrupt("return",r);case 32:case"end":return t.stop()}}),t)})))()},convertCoordinates:function(e,t){var n=this.interactor.getView(),i={x:e,y:t},r=n.getContainer().getBoundingClientRect(),a=n.getCanvas(),o=a.width/r.width,s=a.height/r.height,c=this.map.getEventPixel({clientX:i.x/o+r.left,clientY:r.height-i.y/s+r.top}),l=this.map.getCoordinateFromPixelInternal(c),u=re.utils.vtkCoordinate.newInstance();u.setRenderer(this.renderer),u.setCoordinateSystemToDisplay(),u.setValue(i.x,i.y);var d=u.getComputedWorldValue();return{mapPosition:l,worldPosition:d}},synchronizeMapCoordinate:function(){var e=this.map.getView(),t=e.getResolution(),n=e.getCenter(),i=this.convertCoordinates(0,0),r=this.convertCoordinates(1,1),a=t/(i.mapPosition[0]-r.mapPosition[0]),o=Math.abs((i.worldPosition[0]-r.worldPosition[0])*a);0!==o&&o!==t&&e.setResolution(o);var s=i.worldPosition[0]-i.mapPosition[0],c=i.worldPosition[1]-i.mapPosition[1];e.setCenter([n[0]+s,n[1]+c])},synchronizeVtkCoordinate:function(){var e=this.viewProxy.getCamera(),t=e.getParallelScale(),n=this.convertCoordinates(0,0),i=this.convertCoordinates(100,100),r=t/(n.worldPosition[0]-i.worldPosition[0]),a=Math.abs((n.mapPosition[0]-i.mapPosition[0])*r);a&&a!==t&&(e.setParallelScale(a),this.viewProxy.updateDataProbeSize(),this.viewProxy.updateScaleBar());var o=this.convertCoordinates(0,0),s=o.worldPosition[0]-o.mapPosition[0],c=o.worldPosition[1]-o.mapPosition[1],l=e.getFocalPoint(),u=e.getPosition();e.setFocalPoint(l[0]-s,l[1]-c,l[2]),e.setPosition(u[0]-s,u[1]-c,u[2]),e.computeDistance(),this.viewProxy.renderLater()},enableItkInteraction:function(){var e=this;this.itkInteraction=new ee["b"],this.itkInteraction.handleEvent=function(t){e.itkInteraction.updateTrackedPointers_(t);var n=e.interactor;return"pointermove"==t.type&&n.handleMouseMove(t.originalEvent),!0},this.map.addInteraction(this.itkInteraction)}}},ce=se,le=(n("6a21"),Object(s["a"])(ce,X,Q,!1,null,null,null)),ue=le.exports,de=n("2f62"),fe=n("aa47"),pe={},me={};for(var he in i)pe[i[he].name]=i[he],me[i[he].type]=i[he].name;pe["gallery"]=O;var ye=function(e,t,n){return fe["a"].create(e,Object(w["a"])(Object(w["a"])({},t),{},{onEnd:function(e){var i=t.layer_configs.length-e.oldIndex-1,r=t.layer_configs.length-e.newIndex-1,a=t.layer_configs,o=a[i];if(r>i)for(var s=i;s<r;s++)a[s]=a[s+1];else for(var c=i;c>r;c--)a[c]=a[c-1];a[r]=o,n.componentInstance.$emit("sorted",a)}}))},ge={name:"sortable",bind:function(e,t,n){var i=e.querySelector(".menu-list");i._sortable=ye(i,t.value,n)},update:function(e,t,n){var i=e.querySelector(".menu-list");i._sortable.destroy(),i._sortable=ye(i,t.value,n)},unbind:function(e){var t=e.querySelector(".menu-list");t._sortable.destroy()}};function ve(e,t,n){var i;return function(){var r=this,a=arguments,o=function(){i=null,n||e.apply(r,a)},s=n&&!i;clearTimeout(i),i=setTimeout(o,t),s&&e.apply(r,a)}}var we=window.itkVtkViewer;function be(e){return xe.apply(this,arguments)}function xe(){return xe=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.addLayer,e.next=3,window.imjoyLoader.loadImJoyRPC({api_version:"0.2.3"});case 3:return i=e.sent,e.next=6,i.setupRPC({name:"Kaibu",version:"0.1.0",description:"Kaibu--a web application for visualizing and annotating multi-dimensional images",type:"rpc-window"});case 6:r=e.sent,r.registerCodec({name:"itkimage",decoder:we.utils.convertToItkImage}),r.registerCodec({name:"ndarray",decoder:we.utils.ndarrayToItkImage}),a={setup:function(){r.log("Kaibu loaded successfully.")},run:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function i(){var r,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e.data||!e.data.image_array){i.next=5;break}return i.next=3,t.imshow(e.data.image_array);case 3:i.next=6;break;case 5:if(e.data&&e.data.layers){r=Object(g["a"])(e.data.layers);try{for(r.s();!(a=r.n()).done;)o=a.value,n(o)}catch(s){r.e(s)}finally{r.f()}}case 6:case"end":return i.stop()}}),i)})))()},addLayer:n,imshow:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=we.utils.vtkITKHelper.convertItkToVtkImage(e),n({type:"itk-vtk",image:i});case 2:case"end":return t.stop()}}),t)})))()}},r.export(a);case 11:case"end":return e.stop()}}),e)}))),xe.apply(this,arguments)}var _e={name:"ImageViewer",components:pe,directives:{sortable:ge},data:function(){return{sortableOptions:{chosenClass:"is-primary",draggable:".layer-item"},position:"static",open:!0,expandOnHover:!1,mobile:"fullwidth",reduce:!1,screenWidth:1e3,showGallery:!1,newLayerType:null,collections:null,layerTypes:me}},mounted:function(){this.init(),this.addLayer({type:"itk-vtk",name:"example image",imageUrl:"https://images.proteinatlas.org/19661/221_G2_1_red_green.jpg"}),this.collections=[{name:"My collection",items:[{name:"my image 1"},{name:"my image 2"},{name:"my image 3"},{name:"my image 4"},{name:"my image 5"}]}],this.sortableOptions.layer_configs=this.layer_configs,window.addEventListener("resize",this.updateSize),window.dispatchEvent(new Event("resize"))},beforeDestroy:function(){window.removeEventListener("resize",this.updateSize)},computed:Object(w["a"])({sliderWidth:function(){return this.open&&"static"===this.position?"calc(100% - 310px)":"calc(100% - 20px )"},viewerWidth:function(){return this.open&&"static"===this.position?"calc(100% - 260px)":"calc(100%)"}},Object(de["b"])({layers:function(e){return e.layers},layer_configs:function(e){return e.layer_configs},currentLayer:function(e){return e.currentLayer},map:function(e){return e.map},activeSliders:function(e){return e.activeSliders}})),methods:{closeSidebar:function(){this.open=!1,setTimeout((function(){window.dispatchEvent(new Event("resize"))}),300)},openSidebar:function(){var e=this;setTimeout((function(){e.open=!0,window.dispatchEvent(new Event("resize"))}),300)},updateSize:function(){var e=this;ve((function(){e.screenWidth=window.innerWidth,e.screenWidth>1024?("static"!=e.position&&(e.open=!0),e.position="static"):("absolute"!=e.position&&(e.open=!1),e.position="absolute"),e.$forceUpdate()}),250)()},layerSorted:function(){for(var e=0;e<this.layer_configs.length;e++)this.layers[this.layer_configs[e].id]?this.layers[this.layer_configs[e].id].setZIndex(e):console.warn("Layer not ready",this.layer_configs[e])},removeLayer:function(e){this.$store.commit("removeLayer",e),this.$forceUpdate()},toggleVisible:function(e){this.$store.commit("toggleVisible",e),this.$forceUpdate()},selectLayer:function(e){this.$store.commit("setCurrentLayer",e)},newLayer:function(e){this.addLayer({type:e,name:e+"-"+_()})},addLayer:function(e){var t=this;e.id=_(),this.$store.dispatch("addLayer",e),this.$nextTick((function(){t.layerSorted()}))},init:function(){var e=[0,0,1024,968],t=new $["a"]({code:"xkcd-image",units:"pixels",extent:e}),n=new b["a"]({target:"map",layers:[],view:new x["a"]({projection:t,center:Object(ie["x"])(e),zoom:2,maxZoom:8})});this.$store.commit("setMap",n),window.self!==window.top&&be({addLayer:this.addLayer})}}},ke=_e,Ce=(n("2d07"),Object(s["a"])(ke,h,y,!1,null,null,null)),Le=Ce.exports,Pe={name:"Home",components:{ImageViewer:Le}},Ie=Pe,Oe=Object(s["a"])(Ie,p,m,!1,null,null,null),je=Oe.exports;r["a"].use(f["a"]);var Se=[{path:"/",name:"Home",component:je},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ee=new f["a"]({mode:"history",base:"/",routes:Se}),Ve=Ee,$e=n("289d");n("5abe");r["a"].use(de["a"]),r["a"].use($e["a"]),r["a"].config.productionTip=!1;var De=new de["a"].Store({state:{layers:{},layer_configs:[],activeSliders:null,currentLayer:null,map:null},actions:{addLayer:function(e,t){e.commit("addLayer",t),r["a"].nextTick((function(){t.init&&t.init().then((function(n){n.config=t,e.commit("initialized",n),e.commit("setCurrentLayer",n.config)}))}))}},mutations:{initialized:function(e,t){e.layers[t.config.id]=t,t.setZIndex(e.layer_configs.length-1)},addLayer:function(e,t){void 0===t.visible&&(t.visible=!0),e.layer_configs.push(t)},removeLayer:function(e,t){t.selected=!1;var n=e.layer_configs.indexOf(t);n>=0&&e.layer_configs.splice(n,1)},toggleVisible:function(e,t){t.visible=!t.visible},setCurrentLayer:function(e,t){e.currentLayer!==t&&(e.currentLayer&&(e.currentLayer.selected=!1),e.currentLayer=t,t.sliders&&(e.activeSliders=t.sliders),t.selected=!0)},setMap:function(e,t){e.map=t}}});new r["a"]({router:Ve,render:function(e){return e(u)},store:De}).$mount("#app")},"6a21":function(e,t,n){"use strict";var i=n("e38f"),r=n.n(i);r.a},e38f:function(e,t,n){}});
//# sourceMappingURL=app.c8564f68.js.map