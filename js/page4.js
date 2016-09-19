define(['jquery','zepto'],function () {
     function submit() {
        $(".list5 li").last().click(function (){
          $(".wrap .box").css('display',"block")
        })


        $(".box2 button").eq(0).click(function () {
            $(".wrap .box").css('display',"none")
        })

        $(".list5 li").eq(3).click(function () {
            $(".box3").css('display', "block");
        })

     }


     return {
        submit : submit
     }
})