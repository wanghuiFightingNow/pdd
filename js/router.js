define(["underscore","backbone"],function(_,backbone){
	//backbone里面的路由方法 固定格式
	var router = backbone.Router.extend({
		routes : {
			// 路由        方法
			"page1" : "page1Fn",
			"page2" : "page2Fn",
			"page3" : "page3Fn",
			"page4" : "page4Fn",
			"*defAction" : "defAction"
		},
		//路由(锚点)
		page1Fn : function (){
			require(["text!../page1.html","page1"],function(content,page1){
				$("#box").html(content);
				page1.ajax();
				page1.swiper();
			})
		},
		page2Fn : function (){
			require(["text!../page2.html","page2"],function(content,page2){
				$("#box").html(content);
				page2.ajax();
				page2.tap();
				page2.tap1();
				page2.tap2();
			})
		},
		page3Fn : function (){
			require(["text!../page3.html",'page3'],function(content,page3){
				$("#box").html(content);
				page3.tiaozhuan();
			})
		},
		page4Fn : function (){
			require(["text!../page4.html","page4"],function(content,page4){
				$("#box").html(content)
				page4.submit()

			})
		},
		initialize : function(){
			location.hash = "#page1"
		},
		//当配置的路径不存在时的处理方法
		defAction : function(){
			require(["text!error.html"],function(content){
				$("#box").html(content);
				//3秒后跳回首页
				var timer=setTimeout(function(){
					location.hash = "#page1";
				},3000);
			})
		}
	});
	var w = new router();
	backbone.history.start();
});
