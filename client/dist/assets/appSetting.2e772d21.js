import{n,H as o,f as r,j as c,h as u}from"./index.4d4590a9.js";var h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"appSetting-wrapper"},[e("div",{staticClass:"header"},[e("ul",t._l(this.headerOperationData,function(l,s){return e("li",{key:s,staticClass:"itemWrapper"},[e("div",{staticClass:"topWrapper"},[e("p",{staticClass:"title"},[t._v(t._s(l))])]),t.curApp._id?e("div",{staticClass:"subWrapper"},[e("p",{staticClass:"subtitle"},[t._v(t._s(t.subTitleArr[s]))])]):t._e()])}),0)]),t._m(0),e("div",{staticClass:"content"},[e("el-form",{attrs:{labelWidth:"150px","label-position":"left"}},[e("el-form-item",{attrs:{label:"\u5E94\u7528\u540D\u79F0"}},[e("el-input",{staticClass:"shorturl",model:{value:t.curApp.appName,callback:function(s){t.$set(t.curApp,"appName",s)},expression:"curApp.appName"}})],1),e("el-form-item",{attrs:{label:"\u5E94\u7528\u77ED\u94FE\u63A5"}},[t._v(" "+t._s(this.getHost())),e("el-input",{staticClass:"shorturl",model:{value:t.curApp.shortUrl,callback:function(s){t.$set(t.curApp,"shortUrl",s)},expression:"curApp.shortUrl"}})],1),e("el-form-item",{attrs:{label:"\u5B89\u88C5\u65B9\u5F0F"}},[e("el-radio",{attrs:{label:"\u516C\u5F00"},model:{value:t.installType,callback:function(s){t.installType=s},expression:"installType"}},[t._v("\u516C\u5F00")]),e("el-radio",{attrs:{label:"\u5BC6\u7801\u5B89\u88C5"},model:{value:t.installType,callback:function(s){t.installType=s},expression:"installType"}},[t._v("\u5BC6\u7801\u5B89\u88C5")]),e("el-input",{directives:[{name:"show",rawName:"v-show",value:t.installType==="\u5BC6\u7801\u5B89\u88C5",expression:"installType === '\u5BC6\u7801\u5B89\u88C5'"}],staticClass:"installtype",attrs:{type:"password",placeholder:"\u5BC6\u7801"},model:{value:t.installPwd,callback:function(s){t.installPwd=s},expression:"installPwd"}})],1),e("el-form-item",{attrs:{label:"\u53D1\u5E03\u65B9\u5F0F"}},[e("el-radio",{attrs:{label:"\u624B\u52A8\u53D1\u5E03"},model:{value:t.publishType,callback:function(s){t.publishType=s},expression:"publishType"}},[t._v("\u624B\u52A8\u53D1\u5E03")]),e("el-radio",{attrs:{label:"\u81EA\u52A8\u53D1\u5E03"},model:{value:t.publishType,callback:function(s){t.publishType=s},expression:"publishType"}},[t._v("\u81EA\u52A8\u53D1\u5E03")])],1),e("el-form-item",{attrs:{label:"\u662F\u5426\u5C55\u793A\u5386\u53F2"}},[e("el-radio",{attrs:{label:"\u662F"},model:{value:t.showHistory,callback:function(s){t.showHistory=s},expression:"showHistory"}},[t._v("\u5C55\u793A")]),e("el-radio",{attrs:{label:"\u5426"},model:{value:t.showHistory,callback:function(s){t.showHistory=s},expression:"showHistory"}},[t._v("\u4E0D\u5C55\u793A")])],1),t.curApp.platform!="rn"?e("el-form-item",{attrs:{label:"\u5408\u5E76\u5E94\u7528"}},[e("el-dropdown",{attrs:{placement:"bottom-start",size:"medium"}},[e("div",{staticClass:"el-dropdown-link merge-select"},[t.curMerge._id?e("header-app-select",{attrs:{item:t.curMerge}}):t._e(),t.curMerge._id?t._e():e("span",[t._v("\u8BF7\u9009\u62E9\u5408\u5E76\u5E94\u7528")]),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t._l(t.mergeList,function(l){return e("el-dropdown-item",{key:l._id},[e("div",{on:{click:function(A){return t.onMergeItemClick(l)}}},[e("header-app-select",{attrs:{item:l}})],1)])}),e("el-dropdown-item",{attrs:{divided:""}},[e("div",{on:{click:function(s){return t.onMergeItemClick({})}}},[t._v(" \u89E3\u9664\u5408\u5E76 ")])])],2)],1)],1):t._e()],1),e("button",{staticClass:"bottomBtn button-style-border",attrs:{type:"button"},on:{click:t.clickSure}},[t._v("\u7ACB\u5373\u751F\u6548")])],1)])},d=[function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"top"},[a("i",{staticClass:"el-icon-setting"}),i._v(" \u8BBE\u7F6E ")])}];const m={components:{HeaderAppSelect:o},data(){return{curApp:r.getCurApp(),appList:[],mergeList:[],curMerge:{},installType:"\u516C\u5F00",publishType:"\u624B\u52A8\u53D1\u5E03",installPwd:"",mergeAppId:"",showHistory:"\u662F",headerOperationData:["Bundle ID","App Key"],subTitleArr:[]}},created(){this.$nextTick(()=>{this.getAppDetailData()})},mounted(){this.init()},methods:{init(){this.appList=r.getApps(),this.curApp=r.getCurApp(),this.mergeList=this.appList.filter(i=>i.platform!="rn"&&i.platform!=this.curApp.platform&&i._id!=this.curApp._id),this.installType=this.curApp.installWithPwd===1?"\u5BC6\u7801\u5B89\u88C5":"\u516C\u5F00",this.publishType=this.curApp.autoPublish===!0?"\u81EA\u52A8\u53D1\u5E03":"\u624B\u52A8\u53D1\u5E03",this.showHistory=this.curApp.showHistory===!0?"\u662F":"\u5426",this.installPwd=this.curApp.installPwd,this.mergeAppId=this.curApp.mergeAppId,this.curMerge=(this.mergeList||[]).find(i=>i._id==this.curApp.mergeAppId)||{}},clickSure(){if(this.installType==="\u5BC6\u7801\u5B89\u88C5"&&this.installPwd===""){this.$message.error("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");return}let i={shortUrl:this.curApp.shortUrl,appName:this.curApp.appName,installWithPwd:this.installType==="\u516C\u5F00"?0:1,installPwd:this.installPwd,mergeAppId:this.curMerge._id,autoPublish:this.publishType==="\u624B\u52A8\u53D1\u5E03"?0:1,showHistory:this.showHistory==="\u662F"};c(this.curApp._id,i).then(t=>{t.success&&(this.$message.success(t.message),this.bus.$emit("refreshAppList"),this.bus.$emit("refreshAppInfo"))},t=>{})},onMergeItemClick(i){this.curMerge=this.mergeList.find(t=>t._id==i._id)||{},console.log("this.curMerge",this.curMerge)},getAppDetailData(){this.curApp=r.getCurApp(),u(this.curApp._id).then(i=>{console.log(i),this.curApp=i.data,r.setCurApp(this.curApp),this.init(),this.subTitleArr=[],this.subTitleArr.push(this.curApp.bundleId),this.subTitleArr.push(this.curApp._id)},i=>{})},updateAppInfoSuccess(){this.getAppDetailData()},getHost(){return window.location.origin+"/"}}},p={};var _=n(m,h,d,!1,b,null,null,null);function b(i){for(let t in p)this[t]=p[t]}var f=function(){return _.exports}();export{f as default};
