$(function(){

    $('#itcast').fullpage({
        navigation:true,
        sectionsColor:['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],
        afterLoad:function(a,index){

            // $('.section1').addClass('animation');
            // $('.section2').addClass('animation');

            // 下面这种判断可以，但是太麻烦，有多少屏就要判断多少次
            // if(index == 1){
            //     $('.section1').addClass('animation');
            // }

            // 找到了当前被滚出来的屏
            $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
        }
    });
})