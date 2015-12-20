window.__justep.__ResourceEngine.loadCss([{url: '/v_bd87c2437b424462832fc2c7c9776470l_zh_CNs_desktopd_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/form/css/form,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/accordion/css/accordion,$model/system/components/justep/common/css/scrollable,$model/system/components/bootstrap/pager/css/pager,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/bootstrap/navs/css/navs,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/bootstrap/navbar/css/navbar,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/bootstrap/dialog/css/dialog,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar,$model/system/components/bootstrap/tabs/css/tabs,$model/system/components/bootstrap/pagination/css/pagination'},{url: '/v_5d0c8ba5165d472faf4b4e94c008ede9l_zh_CNs_desktopd_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_a4a55b469048417b9b3f7e6d484fb9d6l_zh_CNs_desktopd_/system/components/comp2.min.js','/v_8b0a92c8594f425a825759d0938edf63l_zh_CNs_desktopd_/system/components/comp.min.js','/v_b2501c7577694b2ca1daeaa1ada24850l_zh_CNs_desktopd_/system/common.min.js','/v_b3aa9e9f0eb948168b5c41631e7396e6l_zh_CNs_desktopd_/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/input/input');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/film/download'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cyA3AF3';
	this._flag_='10d4f0bbee678bb327eaf8e7d2a1d2cd';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"doctor_suggestion":{"define":"doctor_suggestion","label":"医生建议","name":"doctor_suggestion","relation":"doctor_suggestion","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"order_status":{"define":"order_status","label":"订单状态","name":"order_status","relation":"order_status","type":"String"},"picture":{"define":"picture","label":"图片","name":"picture","relation":"picture","type":"String"},"price":{"define":"price","label":"金额","name":"price","relation":"price","rules":{"number":true},"type":"Double"},"useraddress":{"define":"useraddress","label":"用户地址","name":"useraddress","relation":"useraddress","type":"String"},"username":{"define":"username","label":"用户名","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"picturedataCustomRefresh"},"idColumn":"id","limit":20,"xid":"picturedata"});
}}); 
return __result;});
