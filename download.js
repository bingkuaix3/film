define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas = require("$UI/demo/baas/baas");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.picturedataCustomRefresh = function(event) {
		var data = event.source;
		var params = {};
		var success = function(resultData) {
			var append = event.options && event.options.append;
			data.loadData(resultData, append);
		};
		baas.sendRequest({
			"url" : "/film",
			"action" : "queryfilm",
			"params" : params,
			"success" : success
		});
	};

	Model.prototype.orderBtnClick = function(event) {
		this.comp("contents").to("delcontent");
	};

	Model.prototype.changeBtnClick = function(event) {
//		var data = this.comp("picturedata");
//		 data.val("doctor_suggestion", data.val("doctor_suggestion"));
//		baas.sendRequest({
//			"url" : "/film",
//			"action" : "savefilm",
//			"async" : false,
//			"params" : {
//				"DemoData" : data.toJson(true)
//			},
//			"success" : function(resultData, xhr) {
//
//			}
//
//		});

		var demo = this.comp("picturedata");
		var updateDemo = demo.find([ 'id' ], [ demo.val("id") ]);
		if (updateDemo.length > 0) {
			updateDemo[0].val('doctor_suggestion', demo.val("doctor_suggestion"));
			updateDemo[0].val('price',  demo.val("price"));
			updateDemo[0].val('order_status', '已处理');
			
			baas.sendRequest({
				"url" : "/film",
				"action" : "savefilm",
				"async" : false,
				"params" : {
					"picturedata" : demo.toJson(true)
				},
				"success" : function(resultData, xhr) {
					alert("已经保存成功");
				}
			});
		}

	};

	Model.prototype.pictureBtnClick = function(event){
		var data = this.comp("picturedata");
		var params = {"picturedata" : data.val("picture")};
		var success = function(resultData) {
			
		};
		
		baas.sendRequest({
			"url" : "/weixin/downloadpicture",
			"action" : "downloadpicture",
			"params" : params,
			"success" : success
		});
	};

	return Model;
});