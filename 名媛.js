
$(function(){
    $("img.smallImage").mouseenter(function(){
    var  bigImageURL=$(this).attr("bigImageURL");
    $("img.meiNv").attr("src",bigImageURL);
    
    });


    $("div.productReviewContentPart").hide();
    $("a.productMark").click(function(){
        
        $("div.productReviewContentPart").show();
        $("div.productDetailDiv").hide();
    });
    $("a.productStatus").click(function(){
        $("div.productReviewContentPart").hide();
        $("div.productDetailDiv").show();
    });
    
});

$(function(){
    var max=16;
    $("input.productNumberSetting").keyup(function(){
        var num=$("input.productNumberSetting").val();
        num=parseInt(num);
        if(isNaN(num))
        num=1;
        if(num<=0)
        num=1;
        if(num>max)
        num=max;
        $("input.productNumberSetting").val(num);

    });

    $("a.increaseNumber").click(function(){
        var num=$("input.productNumberSetting").val();
        num++;
        if(num>max)
        num=max;
        $("input.productNumberSetting").val(num);

    });

    $("a.decreaseNumber").click(function(){
        var num=$("input.productNumberSetting").val();
        --num;
        if(num<=0)
        num=1;
        $("input.productNumberSetting").val(num);

    });

});


