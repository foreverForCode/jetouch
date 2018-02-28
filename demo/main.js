$(function () {
     
    // 图片滚动

    // 模式1:leftLoop
    // jeSlide({
    //     mainCell: "#findslider",
    //     navCell: ".hd ul",
    //     conCell: ".bd ul",
    //     effect: "leftLoop",
    //     duration: 4,
    //     sLoad: "data-pic",
    //     isTouch: true,
    //     showNav: true,//自动分页
    //     autoPlay: $('#findslider .bd li').length > 1 ? true : false  //自动播放
    // });
    // 模式2:curtain 
    jeSlide({
        mainCell: "#findslider",
        navCell: ".hd ul",
        conCell: ".bd ul",
        effect: "curtain",
        duration: 4,
//      pageStateCell:".pageState",
        sLoad: "data-pic",
        isTouch:true,
        showNav: false,//自动分页
        autoPlay: true  //自动播放
    });
})