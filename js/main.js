//AMD 基本配置
require.config({
	paths : {
		"jquery" : "../library/jquery-2.2.3",
		"underscore" : "../library/underscore.min",
		'backbone' : "../library/backbone.min",
		"text" : "../library/text",
        "swiper" : "../library/swiper-3.3.1.min",
        "zepto" : "../library/zepto",
        lazyload : "../library/jquery.lazyload.min"

	},
    shim : {
        lazyload : ['jquery']
    }


});

require(['zepto',"jquery","router",'swiper','lazyload'],function(zepo,$,router,swiper,lazyload){

})

