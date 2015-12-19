<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:pc">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:398px;top:285px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="picturedata" idColumn="id" onCustomRefresh="picturedataCustomRefresh" autoNew="true" confirmRefresh="true"><column label="id" name="id" type="String" xid="xid1"></column>
  <column label="用户名" name="username" type="String" xid="xid2"></column>
  <column label="用户地址" name="useraddress" type="String" xid="xid3"></column>
  <column label="图片" name="picture" type="String" xid="xid4"></column>
  <column label="医生建议" name="doctor_suggestion" type="String" xid="xid5"></column>
  <column label="金额" name="price" type="Double" xid="xid6"></column>
  <column label="订单状态" name="order_status" type="String" xid="xid7"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2" title="下载图片">
   <div class="x-titlebar-left" xid="div4"></div>
   <div class="x-titlebar-title" xid="div5">下载图片</div>
   <div class="x-titlebar-right reverse" xid="div6"></div></div></div>
   <div class="x-panel-content" xid="content1" style="height:100%;">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents">
   <div class="x-contents-content" xid="listcontent"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list5" data="picturedata">
   <ul class="x-list-template" xid="listTemplateUl5">
    <li xid="li5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref="ref('id')"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref="ref('username')"></div>
  <div component="$UI/system/components/justep/output/output" class="x-output" xid="output13" bind-ref="ref('order_status')"></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default pull-right" label="开药" xid="orderBtn" onClick="orderBtnClick">
   <i xid="i11"></i>
   <span xid="span11">开药</span></a></li></ul> </div></div>
  <div class="x-contents-content" xid="delcontent">
   <div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel4">
    <div class="panel-heading" xid="heading3">
     <h4 class="panel-title" xid="h43">开药</h4></div> 
    <div class="panel-body" xid="body3">
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput13">
      <label class="x-label" xid="label13" bind-text="picturedata.label('id')"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input13" bind-ref="picturedata.ref('id')"></input></div> 
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput12">
      <label class="x-label" xid="label12" bind-text="picturedata.label('username')"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input12" bind-ref="picturedata.ref('username')"></input></div> 
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput10">
      <label class="x-label" xid="label10" bind-text="picturedata.label('useraddress')"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input10" bind-ref="picturedata.ref('useraddress')"></input></div> 
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput9">
      <label class="x-label" xid="label9" bind-text="picturedata.label('doctor_suggestion')"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input9" bind-ref="picturedata.ref('doctor_suggestion')"></input></div> 
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput8">
      <label class="x-label" xid="label8" bind-text="picturedata.label('price')"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input8" bind-ref="picturedata.ref('price')"></input></div> 
     <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput11">
      <label class="x-label" xid="label11" bind-text="picturedata.label('order_status')"></label>
      <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input11" bind-ref="picturedata.ref('order_status')"></input></div> </div> 
    <div class="panel-footer" xid="footer3">
     <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="保存药方" xid="changeBtn" onClick="changeBtnClick">
      <i xid="i8"></i>
      <span xid="span8">保存药方</span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="下载图片" xid="pictureBtn">
      <i xid="i9"></i>
      <span xid="span9">下载图片</span></a> </div> </div> </div></div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="查看" xid="listBtn" target="listcontent">
   <i xid="i3"></i>
   <span xid="span3">查看</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="处理" xid="delBtn" target="delcontent">
   <i xid="i4"></i>
   <span xid="span4">处理</span></a></div></div></div></div>