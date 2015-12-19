<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="height:auto;left:39px;top:121px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="picturedata" idColumn="id"><column label="id" name="id" type="String" xid="xid1"></column>
  <column label="用户名" name="username" type="String" xid="xid2"></column>
  <column label="用户地址" name="useraddress" type="String" xid="xid3"></column>
  <column label="医生建议" name="doctor_suggestion" type="String" xid="xid4"></column>
  <column label="价格" name="price" type="Date" xid="xid5"></column>
  <column label="订单状态" name="order_status" type="String" xid="xid6"></column>
  <column label="图片" name="picture" type="String" xid="xid7"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="上传照片"> 
        <div class="x-titlebar-left" xid="div1"/>  
        <div class="x-titlebar-title" xid="div2">上传照片</div>  
        <div class="x-titlebar-right reverse" xid="div3"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel"
        xid="panel2"> 
        <div class="panel-heading" xid="heading1"> 
          <h4 class="panel-title" xid="h41"><![CDATA[请按要求拍摄]]></h4> 
        </div>  
        <div class="panel-body" xid="body1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default pull-left"
            label="拍照" xid="photoBtn" onClick="photoBtnClick"> 
            <i xid="i1"/>  
            <span xid="span1">拍照</span> 
          </a>  
          <img src="" alt="" xid="image1" id="photo" style="height:126px;width:146px;display:none"
            align="bottom" height="100%"/>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-default pull-right"
            label="上传" xid="updateBtn" onClick="updateBtnClick"> 
            <i xid="i2"/>  
            <span xid="span2" >上传</span>
          </a>
        </div>  
        <div class="panel-footer" xid="footer1"/> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="bottom1"/> 
  </div> 
</div>
