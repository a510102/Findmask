(this.webpackJsonpmaskmap=this.webpackJsonpmaskmap||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/havemask.61fe25a1.svg"},17:function(e,t,a){e.exports=a.p+"static/media/nomask.98ee8c11.svg"},19:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=a(13),i=a.n(s),l=a(15),u=a(6);var m=function(e){var t=e.datas,a=e.setId;return r.a.createElement("ul",{className:"data-list"},t.map((function(e){var t=e.properties,n=t.name,c=t.phone,o=t.id,s=t.address,i="data-item";return 0===e.properties.mask_adult||0===e.properties.mask_child?i+=" danger":(e.properties.mask_adult<101||e.properties.mask_child<101)&&(i+=" less"),r.a.createElement("li",{key:o,className:i,onClick:function(){return a(o)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:".concat(c)},c)),r.a.createElement("a",{href:"https://www.google.com.tw/maps/place/".concat(s),target:"_blank",rel:"noopener noreferrer"},s),r.a.createElement("p",null,"\u6210\u4eba: ",e.properties.mask_adult," / \u5c0f\u5b69: ",e.properties.mask_child))})))};a(25);var p=function(e){var t=e.datasL,a=e.setPageD,c=e.pageD,o=e.setId;console.log(t);var s=Object(n.useState)(1),i=Object(u.a)(s,2),l=i[0],m=i[1],p=Object(n.useState)([]),d=Object(u.a)(p,2),f=d[0],h=d[1];Object(n.useEffect)((function(){!function(e){var t=e/5,a=[];t=Math.ceil(t);for(var n=1;n<t;n++)a.push(n);h(a),m(c)}(t)}),[t,h,m,c]);var v=f.slice(4*l-4,4*l);return r.a.createElement("ul",{className:"pages"},r.a.createElement("li",null,r.a.createElement("button",{className:1===c?"none":"",onClick:function(){o(""),a(c-1),c===v.slice(0)[0]&&m(l-1)}},"\u2190")),v.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{className:e===c?"active":"",onClick:function(){o(""),a(e)}},e))})),r.a.createElement("li",null,r.a.createElement("button",{className:c===f.slice(-1)[0]||t<7?"none":"",onClick:function(){o(""),a(c+1),c===v.slice(-1)[0]&&m(l+1)}},"\u2192")))},d={"\u81fa\u5317\u5e02":["\u4e2d\u6b63\u5340","\u5927\u540c\u5340","\u4e2d\u5c71\u5340","\u842c\u83ef\u5340","\u4fe1\u7fa9\u5340","\u677e\u5c71\u5340","\u5927\u5b89\u5340","\u5357\u6e2f\u5340","\u5317\u6295\u5340","\u5167\u6e56\u5340","\u58eb\u6797\u5340","\u6587\u5c71\u5340"],"\u65b0\u5317\u5e02":["\u677f\u6a4b\u5340","\u65b0\u838a\u5340","\u6cf0\u5c71\u5340","\u6797\u53e3\u5340","\u6de1\u6c34\u5340","\u91d1\u5c71\u5340","\u516b\u91cc\u5340","\u842c\u91cc\u5340","\u77f3\u9580\u5340","\u4e09\u829d\u5340","\u745e\u82b3\u5340","\u6c50\u6b62\u5340","\u5e73\u6eaa\u5340","\u8ca2\u5bee\u5340","\u96d9\u6eaa\u5340","\u6df1\u5751\u5340","\u77f3\u7887\u5340","\u65b0\u5e97\u5340","\u576a\u6797\u5340","\u70cf\u4f86\u5340","\u4e2d\u548c\u5340","\u6c38\u548c\u5340","\u571f\u57ce\u5340","\u4e09\u5cfd\u5340","\u6a39\u6797\u5340","\u9daf\u6b4c\u5340","\u4e09\u91cd\u5340","\u8606\u6d32\u5340","\u4e94\u80a1\u5340"],"\u57fa\u9686\u5e02":["\u4ec1\u611b\u5340","\u4e2d\u6b63\u5340","\u4fe1\u7fa9\u5340","\u4e2d\u5c71\u5340","\u5b89\u6a02\u5340","\u6696\u6696\u5340","\u4e03\u5835\u5340"],"\u6843\u5712\u5e02":["\u6843\u5712\u5340","\u4e2d\u58e2\u5340","\u5e73\u93ae\u5340","\u516b\u5fb7\u5340","\u694a\u6885\u5340","\u8606\u7af9\u5340","\u9f9c\u5c71\u5340","\u9f8d\u6f6d\u5340","\u5927\u6eaa\u5340","\u5927\u5712\u5340","\u89c0\u97f3\u5340","\u65b0\u5c4b\u5340","\u5fa9\u8208\u5340"],"\u65b0\u7af9\u7e23":["\u7af9\u5317\u5e02","\u7af9\u6771\u93ae","\u65b0\u57d4\u93ae","\u95dc\u897f\u93ae","\u5ce8\u7709\u9109","\u5bf6\u5c71\u9109","\u5317\u57d4\u9109","\u6a6b\u5c71\u9109","\u828e\u6797\u9109","\u6e56\u53e3\u9109","\u65b0\u8c50\u9109","\u5c16\u77f3\u9109","\u4e94\u5cf0\u9109"],"\u65b0\u7af9\u5e02":["\u6771\u5340","\u5317\u5340","\u9999\u5c71\u5340"],"\u82d7\u6817\u7e23":["\u82d7\u6817\u5e02","\u901a\u9704\u93ae","\u82d1\u88e1\u93ae","\u7af9\u5357\u93ae","\u982d\u4efd\u93ae","\u5f8c\u9f8d\u93ae","\u5353\u862d\u93ae","\u897f\u6e56\u9109","\u982d\u5c4b\u9109","\u516c\u9928\u9109","\u9285\u947c\u9109","\u4e09\u7fa9\u9109","\u9020\u6a4b\u9109","\u4e09\u7063\u9109","\u5357\u5e84\u9109","\u5927\u6e56\u9109","\u7345\u6f6d\u9109","\u6cf0\u5b89\u9109"],"\u81fa\u4e2d\u5e02":["\u4e2d\u5340","\u6771\u5340","\u5357\u5340","\u897f\u5340","\u5317\u5340","\u5317\u5c6f\u5340","\u897f\u5c6f\u5340","\u5357\u5c6f\u5340","\u592a\u5e73\u5340","\u5927\u91cc\u5340","\u9727\u5cf0\u5340","\u70cf\u65e5\u5340","\u8c50\u539f\u5340","\u540e\u91cc\u5340","\u6771\u52e2\u5340","\u77f3\u5ca1\u5340","\u65b0\u793e\u5340","\u548c\u5e73\u5340","\u795e\u5ca1\u5340","\u6f6d\u5b50\u5340","\u5927\u96c5\u5340","\u5927\u809a\u5340","\u9f8d\u4e95\u5340","\u6c99\u9e7f\u5340","\u68a7\u68f2\u5340","\u6e05\u6c34\u5340","\u5927\u7532\u5340","\u5916\u57d4\u5340","\u5927\u5b89\u5340"],"\u5357\u6295\u7e23":["\u5357\u6295\u5e02","\u57d4\u91cc\u93ae","\u8349\u5c6f\u93ae","\u7af9\u5c71\u93ae","\u96c6\u96c6\u93ae","\u540d\u9593\u9109","\u9e7f\u8c37\u9109","\u4e2d\u5bee\u9109","\u9b5a\u6c60\u9109","\u570b\u59d3\u9109","\u6c34\u91cc\u9109","\u4fe1\u7fa9\u9109","\u4ec1\u611b\u9109"],"\u5f70\u5316\u7e23":["\u5f70\u5316\u5e02","\u54e1\u6797\u93ae","\u548c\u7f8e\u93ae","\u9e7f\u6e2f\u93ae","\u6eaa\u6e56\u93ae","\u4e8c\u6797\u93ae","\u7530\u4e2d\u93ae","\u5317\u6597\u93ae","\u82b1\u58c7\u9109","\u82ac\u5712\u9109","\u5927\u6751\u9109","\u6c38\u9756\u9109","\u4f38\u6e2f\u9109","\u7dda\u897f\u9109","\u798f\u8208\u9109","\u79c0\u6c34\u9109","\u57d4\u5fc3\u9109","\u57d4\u9e7d\u9109","\u5927\u57ce\u9109","\u82b3\u82d1\u9109","\u7af9\u5858\u9109","\u793e\u982d\u9109","\u4e8c\u6c34\u9109","\u7530\u5c3e\u9109","\u57e4\u982d\u9109","\u6eaa\u5dde\u9109"],"\u96f2\u6797\u7e23":["\u6597\u516d\u5e02","\u6597\u5357\u93ae","\u864e\u5c3e\u93ae","\u897f\u87ba\u93ae","\u571f\u5eab\u93ae","\u5317\u6e2f\u93ae","\u83bf\u6850\u9109","\u6797\u5167\u9109","\u53e4\u5751\u9109","\u5927\u57e4\u9109","\u5d19\u80cc\u9109","\u4e8c\u5d19\u9109","\u9ea5\u5bee\u9109","\u81fa\u897f\u9109","\u6771\u52e2\u9109","\u8912\u5fe0\u9109","\u56db\u6e56\u9109","\u53e3\u6e56\u9109","\u6c34\u6797\u9109","\u5143\u9577\u9109"],"\u5609\u7fa9\u7e23":["\u592a\u4fdd\u5e02","\u6734\u5b50\u5e02","\u5e03\u888b\u93ae","\u5927\u6797\u93ae","\u6c11\u96c4\u9109","\u6eaa\u53e3\u9109","\u65b0\u6e2f\u9109","\u516d\u8173\u9109","\u6771\u77f3\u9109","\u7fa9\u7af9\u9109","\u9e7f\u8349\u9109","\u6c34\u4e0a\u9109","\u4e2d\u57d4\u9109","\u7af9\u5d0e\u9109","\u6885\u5c71\u9109","\u756a\u8def\u9109","\u5927\u57d4\u9109","\u963f\u91cc\u5c71\u9109"],"\u5609\u7fa9\u5e02":["\u6771\u5340","\u897f\u5340"],"\u81fa\u5357\u5e02":["\u4e2d\u897f\u5340","\u6771\u5340","\u5357\u5340","\u5317\u5340","\u5b89\u5e73\u5340","\u5b89\u5357\u5340","\u6c38\u5eb7\u5340","\u6b78\u4ec1\u5340","\u65b0\u5316\u5340","\u5de6\u93ae\u5340","\u7389\u4e95\u5340","\u6960\u897f\u5340","\u5357\u5316\u5340","\u4ec1\u5fb7\u5340","\u95dc\u5edf\u5340","\u9f8d\u5d0e\u5340","\u5b98\u7530\u5340","\u9ebb\u8c46\u5340","\u4f73\u91cc\u5340","\u897f\u6e2f\u5340","\u4e03\u80a1\u5340","\u5c07\u8ecd\u5340","\u5b78\u7532\u5340","\u5317\u9580\u5340","\u65b0\u71df\u5340","\u5f8c\u58c1\u5340","\u767d\u6cb3\u5340","\u6771\u5c71\u5340","\u516d\u7532\u5340","\u4e0b\u71df\u5340","\u67f3\u71df\u5340","\u9e7d\u6c34\u5340","\u5584\u5316\u5340","\u5927\u5167\u5340","\u5c71\u4e0a\u5340","\u65b0\u5e02\u5340","\u5b89\u5b9a\u5340"],"\u9ad8\u96c4\u5e02":["\u6960\u6893\u5340","\u5de6\u71df\u5340","\u9f13\u5c71\u5340","\u4e09\u6c11\u5340","\u9e7d\u57d5\u5340","\u524d\u91d1\u5340","\u65b0\u8208\u5340","\u82d3\u96c5\u5340","\u524d\u93ae\u5340","\u5c0f\u6e2f\u5340","\u65d7\u6d25\u5340","\u9cf3\u5c71\u5340","\u5927\u5bee\u5340","\u9ce5\u677e\u5340","\u6797\u5712\u5340","\u4ec1\u6b66\u5340","\u5927\u6a39\u5340","\u5927\u793e\u5340","\u5ca1\u5c71\u5340","\u8def\u7af9\u5340","\u6a4b\u982d\u5340","\u6893\u5b98\u5340","\u5f4c\u9640\u5340","\u6c38\u5b89\u5340","\u71d5\u5de2\u5340","\u7530\u5bee\u5340","\u963f\u84ee\u5340","\u8304\u8423\u5340","\u6e56\u5167\u5340","\u65d7\u5c71\u5340","\u7f8e\u6fc3\u5340","\u5167\u9580\u5340","\u6749\u6797\u5340","\u7532\u4ed9\u5340","\u516d\u9f9c\u5340","\u8302\u6797\u5340","\u6843\u6e90\u5340","\u90a3\u746a\u590f\u5340"],"\u5c4f\u6771\u7e23":["\u5c4f\u6771\u5e02","\u6f6e\u5dde\u93ae","\u6771\u6e2f\u93ae","\u6046\u6625\u93ae","\u842c\u4e39\u9109","\u9577\u6cbb\u9109","\u9e9f\u6d1b\u9109","\u4e5d\u5982\u9109","\u91cc\u6e2f\u9109","\u9e7d\u57d4\u9109","\u9ad8\u6a39\u9109","\u842c\u5dd2\u9109","\u5167\u57d4\u9109","\u7af9\u7530\u9109","\u65b0\u57e4\u9109","\u678b\u5bee\u9109","\u65b0\u5712\u9109","\u5d01\u9802\u9109","\u6797\u908a\u9109","\u5357\u5dde\u9109","\u4f73\u51ac\u9109","\u7409\u7403\u9109","\u8eca\u57ce\u9109","\u6eff\u5dde\u9109","\u678b\u5c71\u9109","\u9727\u53f0\u9109","\u746a\u5bb6\u9109","\u6cf0\u6b66\u9109","\u4f86\u7fa9\u9109","\u6625\u65e5\u9109","\u7345\u5b50\u9109","\u7261\u4e39\u9109","\u4e09\u5730\u9580\u9109"],"\u5b9c\u862d\u7e23":["\u5b9c\u862d\u5e02","\u7f85\u6771\u93ae","\u8607\u6fb3\u93ae","\u982d\u57ce\u93ae","\u7901\u6eaa\u9109","\u58ef\u570d\u9109","\u54e1\u5c71\u9109","\u51ac\u5c71\u9109","\u4e94\u7d50\u9109","\u4e09\u661f\u9109","\u5927\u540c\u9109","\u5357\u6fb3\u9109"],"\u82b1\u84ee\u7e23":["\u82b1\u84ee\u5e02","\u9cf3\u6797\u93ae","\u7389\u91cc\u93ae","\u65b0\u57ce\u9109","\u5409\u5b89\u9109","\u58fd\u8c50\u9109","\u79c0\u6797\u9109","\u5149\u5fa9\u9109","\u8c50\u6ff1\u9109","\u745e\u7a57\u9109","\u842c\u69ae\u9109","\u5bcc\u91cc\u9109","\u5353\u6eaa\u9109"],"\u81fa\u6771\u7e23":["\u81fa\u6771\u5e02","\u6210\u529f\u93ae","\u95dc\u5c71\u93ae","\u9577\u6ff1\u9109","\u6d77\u7aef\u9109","\u6c60\u4e0a\u9109","\u6771\u6cb3\u9109","\u9e7f\u91ce\u9109","\u5ef6\u5e73\u9109","\u5351\u5357\u9109","\u91d1\u5cf0\u9109","\u5927\u6b66\u9109","\u9054\u4ec1\u9109","\u7da0\u5cf6\u9109","\u862d\u5dbc\u9109","\u592a\u9ebb\u91cc\u9109"],"\u6f8e\u6e56\u7e23":["\u99ac\u516c\u5e02","\u6e56\u897f\u9109","\u767d\u6c99\u9109","\u897f\u5dbc\u9109","\u671b\u5b89\u9109","\u4e03\u7f8e\u9109"],"\u91d1\u9580\u7e23":["\u91d1\u57ce\u93ae","\u91d1\u6e56\u93ae","\u91d1\u6c99\u93ae","\u91d1\u5be7\u9109","\u70c8\u5dbc\u9109","\u70cf\u5775\u9109"],"\u9023\u6c5f\u7e23":["\u5357\u7aff\u9109","\u5317\u7aff\u9109","\u8392\u5149\u9109","\u6771\u5f15\u9109"]},f={data:["\u81fa\u5317\u5e02","\u57fa\u9686\u5e02","\u65b0\u5317\u5e02","\u9023\u6c5f\u7e23","\u5b9c\u862d\u7e23","\u65b0\u7af9\u5e02","\u65b0\u7af9\u7e23","\u6843\u5712\u5e02","\u82d7\u6817\u7e23","\u81fa\u4e2d\u5e02","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u96f2\u6797\u7e23","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u6f8e\u6e56\u7e23","\u91d1\u9580\u7e23","\u5c4f\u6771\u7e23","\u81fa\u6771\u7e23","\u82b1\u84ee\u7e23"]};a(26);var h=function(e){var t=e.cityF,a=e.areaF,c=e.setKeyWord,o=e.sliceData,s=e.filterDatas,i=e.setPageD,l=e.pageD,h=e.setId,v=e.keyWord,g=e.onhandleKeywordChange,E=e.onhandleCountyChange,b=e.onhandleTownChange,k=Object(n.useState)(!1),j=Object(u.a)(k,2),y=j[0],w=j[1],O="sidebar",N="arrow";return y&&(O+=" show",N+=" rotate"),r.a.createElement("div",{className:O},r.a.createElement("nav",{className:"sidebar-navbar"},r.a.createElement("h1",{className:"nav-title"},"Find Mask",r.a.createElement("span",{className:N,onClick:function(){return w(!y)}},">")),r.a.createElement("div",{className:"nav-selection"},r.a.createElement("select",{value:t||"",className:"selection selection-county",onChange:function(e){return E(e)}},r.a.createElement("option",{disabled:!0},"--\u8acb\u9078\u64c7\u7e23\u5e02--"),f.data.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))),r.a.createElement("select",{className:"selection selection-area",onChange:function(e){return b(e)},value:a||""},r.a.createElement("option",{disabled:!0},"--\u8acb\u9078\u64c7\u5730\u5340--"),t?d[t].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})):"")),r.a.createElement("form",{className:"nav-search",onSubmit:function(e){return g(e)}},r.a.createElement("input",{type:"text",name:"search-mask",value:v,className:"search-mask",placeholder:"\u641c\u5c0b\u5730\u5740\uff0c\u4f8b\u5982\u81fa\u4e2d\u5e02...",onChange:function(e){return c(e.target.value)}}))),r.a.createElement(m,{datas:o,setId:h}),r.a.createElement(p,{setId:h,pageD:l,datasL:s.length,setPageD:i}))},v=a(34),g=a(35),E=a(33),b=a(36),k=a(4),j=a(16),y=a.n(j),w=a(17),O=a.n(w),N=(a(27),new k.Icon({iconUrl:y.a,iconSize:[50,50]})),C=new k.Icon({iconUrl:O.a,iconSize:[50,50]});var D=function(e){var t=e.sliceData,a=e.position;return r.a.createElement(v.a,{center:a,zoom:16,id:"map"},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),t.map((function(e){var t=e.geometry.coordinates,a=e.properties,n=a.name,c=a.id,o=[t[1],t[0]];return r.a.createElement(E.a,{position:o,key:c,id:c,icon:0===e.properties.mask_adult||0===e.properties.mask_child?C:N},r.a.createElement(b.a,null,r.a.createElement("h2",null,n),r.a.createElement("h3",null,"\u6210\u4eba: ",e.properties.mask_adult,"/ \u5c0f\u5b69: ",e.properties.mask_child)),") }")})))};a(30);var S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],p=s[1],d=Object(n.useState)(""),f=Object(u.a)(d,2),v=f[0],g=f[1],E=Object(n.useState)(""),b=Object(u.a)(E,2),k=b[0],j=b[1],y=Object(n.useState)(""),w=Object(u.a)(y,2),O=w[0],N=w[1],C=Object(n.useState)(1),S=Object(u.a)(C,2),_=S[0],x=S[1],I=Object(n.useState)(""),F=Object(u.a)(I,2),W=F[0],z=F[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",e.next=3,fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.features),n=a.features.filter((function(e){return"\u81fa\u4e2d\u5e02"===e.properties.county&&"\u592a\u5e73\u5340"===e.properties.town})),g("\u81fa\u4e2d\u5e02"),j("\u592a\u5e73\u5340"),p(n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K,M,P=m.slice(5*_-5,5*_);return(K=W?P.find((function(e){return e.properties.id===W})):P.find((function(e,t,a){return 0===a.indexOf(e)})))&&(M=[K.geometry.coordinates[1],K.geometry.coordinates[0]]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h,{onhandleCountyChange:function(e){if(console.log(e.target.value),!e.target.value)return"";g(e.target.value);var t=a.filter((function(t){return t.properties.county===e.target.value}));p(t),x(1),j("")},onhandleKeywordChange:function(e){e.preventDefault();var t=a.filter((function(e){return e.properties.address.includes(O)}));p(t);var n=t[0].properties.county,r=t[0].properties.town;g(n),j(r),N(""),x(1)},onhandleTownChange:function(e){j(e.target.value);var t=a.filter((function(t){return t.properties.town===e.target.value}));p(t),x(1)},setAreaF:j,areaF:k,cityF:v,setKeyWord:N,keyWord:O,sliceData:P,filterDatas:m,pageD:_,setPageD:x,setId:z})),r.a.createElement(D,{position:M,sliceData:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.908bead1.chunk.js.map