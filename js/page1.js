define(["jquery"],function($){
	function ajax(){
		$.ajax({
			type : "get",
			url : "http://duif.applinzi.com/leyuan/home_data.php",
			async : true,
	        success : function(data){
	        	// console.log(data)
		        	var data1 =JSON.parse(data);
		        	var str = '';
		            for(var imgObj of data1.slider) {
		               // $('.swiper-wrapper').append('<div class="swiper-slide"><img src=" '+imgObj.img+' "/></div>')
		               str += '<div class="swiper-slide"><img src=" '+imgObj.img+' "/></div>'
		            }
		             // $('.swiper-wrapper').html(str)
                    for(var imgObj1 of data1.arealist){
                    	$('.list1').append('<li><img src=" '+imgObj1.img+' "></li>')
                    }

                    for(var imgObj2 of data1.reclist) {
                    	$('.list2').append('<li><img src="1.gif" data-original=" '+imgObj2.img+' " class="lazy"/></li>')
                    }
                   $("img.lazy").lazyload({
                        effect : "fadeIn",
                        effectspeed: 2000

                    });
	        }
		});

	};

	function swiper() {
			var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        paginationElement:"span",
	        spaceBetween: 30,
	        centeredSlides: true,
            autoplay:3000,
	        autoplayDisableOnInteraction: false
            });
		}
	return {
		ajax : ajax,
		swiper : swiper
	}

})