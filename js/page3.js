define(['jquery','zepto'], function ($,zepto) {
    function tiaozhuan() {
        $(".main2 .buy a").click(function () {
             $('.footer ul a').eq(1).find('dl').css('color','red');
              $('.footer ul a').eq(1).siblings().find('dl').css('color','#551a8b')
        })
    }



    return {
        tiaozhuan : tiaozhuan
    }
})