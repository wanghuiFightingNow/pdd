define(["underscore","backbone"],function(_,backbone){
	//backbone里面的路由方法 固定格式
	var router = backbone.Router.extend({
		routes : {
			// 路由        页面
			"page1" : "page1",
			"page2" : "page2",
			"page3" : "page3",
			"*defAction" : "defAction"
		},
		page1 : function (){
			require(["text!home.html","home"],function(content,home){
				$("#box").html(content);
				home.ajax();
				
			})
		},
		page2 : function (){
			require(["text!page2.html"],function(content){
				$("#box").html(content)
			})
		},
		page3 : function (){
			require(["text!page3.html"],function(content){
				$("#box").html(content)
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
