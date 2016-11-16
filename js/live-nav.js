/**
 * Created by Administrator on 2016/9/6.
 */
window.onload=function(){
//背景随机泡泡
    var can = document.getElementById('canvas_1');
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    //step2：产生圈圈的函数
    function startShow(){
        //产生随机颜色，坐标
        var r = Math.floor(Math.random()*255),
            g = Math.floor(Math.random()*255),
            b = Math.floor(Math.random()*255),
            x = Math.floor(Math.random()*can.width),
            y = Math.floor(Math.random()*can.height),
            color = 'rgba('+r+','+g+','+b+',0.9)',
            radius = 1,
            filled = true;
        //绘制圆的动画
        jc.circle(x,y,radius,color,filled).animate({radius:100,opacity:0},1500);
    }
    //step3：用jCanvaScript开始绘制，重绘
    jc.start('canvas_1',true);
    //step4：动画：每200毫秒出现一个圈圈
    setInterval(startShow,200);

}

$(function () {
    $(".flip-box").hover(function (){
        $(this).find("div.front").addClass("flip-flip");
    }, function () {
        $(this).find("div.front").removeClass("flip-flip");
    })
})