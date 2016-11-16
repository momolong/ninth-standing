/**
 * Created by Administrator on 2016/9/3.
 */
$(function(){
    //隐藏
    /*if(empty.html().length==0) {
     $(".left>ul>li").addClass("nonono")
     }*/
    var i=0;
    for(var i in $(".left>ul>li") ){
        var empty=$(".left>ul>li").eq(i);
        if(!empty.html()){
            $(".left>ul>li").eq(i).css("visibility","hidden")
        }
    }


    //视频控制条隐藏
    $(".video").hover(function () {
        $(".control").fadeIn(500)
    },function () {
        $(".control").fadeOut(500)
    }


    )



    //周榜月榜选项卡
    $(".tab-bar li").click(function(){
        $(this).addClass("on")//当前li高亮
            .siblings().removeClass("on"); //其他同辈li取消高亮
        //获取当前元素的索引
        var index = $(this).index();
        //利用索引将li和div联系起来
        $(".tab-box").children("div").eq(index).show()  //对应的内容显示
            .siblings().hide(); //其他同辈div隐藏
    })
    //聊天发送
    $("#sub").click(function(){
        var cont = $(".dialogue").html();
        var cont1=$("#fasong").val();
        if(cont1.length==0){
        }
        else{
            $(".dialogue").html(cont+'莫小龙：'+''+$("#fasong").val()+'<br/>');
            $("#fasong").val("");
        }
    })
    //礼物框缩放动画
    $(".gift ul li").hover(function () {
        $(this).animate({width: 150}, 200)
    }, function () {
        $(this).animate({width: 70}, 200)
    })


})
window.onload=function(){
    var vd = document.getElementById('vd');
    var btn = document.getElementById('btn');
    function playVd(){
        if(vd.paused){ //如果视频是暂停的状态
            vd.play();
            btn.value= '暂停';
        }else {
            vd.pause();
            btn.value = '播放';
        }
    }
    btn.onclick=function(){playVd();}


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