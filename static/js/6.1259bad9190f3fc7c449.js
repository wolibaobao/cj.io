webpackJsonp([6],{Tdl3:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={data:function(){return{ruleForm:{name:"",desc:"",icon:""},dialogVisible:!1,rules:{name:[{required:!0,message:"请输入活动主题",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],desc:[{required:!0,message:"请填写活动描述",trigger:"blur"}]}}},methods:{handleRemove:function(e,r){this.ruleForm.icon=""},handlePictureCardPreview:function(e){this.ruleForm.icon=e.url,this.dialogVisible=!0},success:function(e,r){this.ruleForm.icon=r.response.msg},chaochu:function(){this.$message({showClose:!0,message:"最多上传一张图片哦!",type:"warning"})},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"hd_settings_box"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动主题",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动描述",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"抽奖背景"}},[t("el-upload",{attrs:{limit:1,"on-exceed":e.chaochu,"on-success":e.success,action:"https://mail.yidonghuayuan.com/shop/file/uploadimg","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[t("i",{staticClass:"el-icon-plus"})]),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(r){e.dialogVisible=r}}},[t("img",{attrs:{width:"100%",src:e.ruleForm.icon,alt:""}})]),e._v(" "),t("p",{staticStyle:{color:"#aaaaaa","font-size":"12px"}},[e._v("抽奖背景建议尺寸最佳显示尺寸为（1920*400像素）")])],1),e._v(" "),t("el-form-item",{staticClass:"animated flipInX"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var l=t("C7Lr")(i,s,!1,function(e){t("XUjg")},"data-v-e75541c2",null);r.default=l.exports},XUjg:function(e,r){}});
//# sourceMappingURL=6.1259bad9190f3fc7c449.js.map