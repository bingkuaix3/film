define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/film/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cyiMfyi';
	this._flag_='82f6434de840ab999eb37108b4beab96';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"doctor_suggestion":{"define":"doctor_suggestion","label":"医生建议","name":"doctor_suggestion","relation":"doctor_suggestion","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"order_status":{"define":"order_status","label":"订单状态","name":"order_status","relation":"order_status","type":"String"},"picture":{"define":"picture","label":"图片","name":"picture","relation":"picture","type":"String"},"price":{"define":"price","label":"价格","name":"price","relation":"price","rules":{"date":true},"type":"Date"},"useraddress":{"define":"useraddress","label":"用户地址","name":"useraddress","relation":"useraddress","type":"String"},"username":{"define":"username","label":"用户名","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"picturedata"});
}}); 
return __result;});