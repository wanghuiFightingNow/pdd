define(["jquery"],function($){
	function ajax(){
		$.ajax({
			type : "get",
			url : "http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城",
	        success : function(res){
		        	var RES =JSON.parse(res);
		        	setData(RES.data);
	        }
		});
	};
	function tap1(){
		$("#list5 a").click(function(){
			var text = this.innerHTML;
			$("#list2").empty();
			    $.ajax({
					type : "get",
					url : "http://duif.applinzi.com/leyuan/leyuan_data.php?address=" + text,
			        success : function(data){
				        	var data1 =JSON.parse(data);
				        	setData(data1.data)
			        }
			})
			    click(text);
		})
	}
function tap2() {
     click("全城");
}

//封装点击事件
function click(content) {
		$("#list3 li").eq(2).find('ul a').eq(1).click(function () {
				                    $("#list2").empty();
									$("#list5").css("left","-999px");
									$.ajax({
										type : "get",
										url : "http://duif.applinzi.com/leyuan/leyuan_data.php?address=" + content,
								        success : function(data){
									        	var data1 =JSON.parse(data);
									            for(var i=0;i<data1.data.length-1;i++) {
									            	for(var j=0;j<data1.data.length-1-i;j++){
									            	  if(data1.data[j].dist>data1.data[j+1].dist){
									            	  	var temp = data1.data[j];
									            	  	data1.data[j] = data1.data[j+1]
									            	  	data1.data[j+1] = temp;
									            	  }

									            	}
									            }
				                                 $("#list2").empty();
				                                 setData(data1.data)
								        }
							       })
				})
}

	function tap(){
		$("#list3 ul").css("left","-999px")
		var tag = true;
		$("#list3 li").click(function(){
			$(this).siblings().find('ul').css("left","-999px")
			if(tag){
			  $(this).find('ul').css("left","0px");
			  tag = false;
			}else{
				$(this).find('ul').css("left","-999px")
				tag = true;
			}
		})
	}
	//封装设置数据的函数
	function setData(arr) {
		 for(var i=0;i<arr.length;i++) {
    	    $("#list2").append('<li><img src="1.gif" data-original=" '+ arr[i].img +' " class="lazy"/><div class="box1"><p>'+arr[i].name+'</p><p>'+arr[i].address+'</p></div><dl><dt><img src="images/pic21.jpg"/></dt><dd>'+arr[i].dist+"公里"+'</dd></dl></li>')
        }


        $("img.lazy").lazyload({
         effect : "fadeIn",
         effectspeed : 2000
         //将临界值定为 200, 当可视区域离图片还有 200 个象素的时候开始加载图片.
         // threshold : 100

        });
	}
	return {
		ajax : ajax,
		tap : tap,
		tap1 : tap1,
		tap2 : tap2
	}
})