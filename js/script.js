$(function () {

    $(window).on('load scroll',function(){
        const header = $('.header');
        const visuHeight = $('.visual').outerHeight();
        const h_Height=header.outerHeight();
        const scrollTop= $(window).scrollTop();
        const arrow = $('.arrow');


        // console.log('scrollTop:'+scrollTop)
        // console.log('header:'+h_Height)
        // console.log('visuHeight:'+visuHeight)


        header.addClass('load');
        arrow.addClass('down')

        if(scrollTop >= visuHeight - h_Height){
            header.addClass('down');
        }
        else{
            
            header.removeClass('down');
        }
    
    })

hamburger()
const cover_repeat=setInterval(cover, 3000)

function hamburger(){
    const hamburger=$('.hamburger');
    const nav = $('.nav')
    const close_icon=$('.close_icon');
    const navBg=$('.nav_bg')

    hamburger.click(function(e){
        e.preventDefault();
        nav.addClass('open')
        navBg.fadeIn(300)
    })

    close_icon.click(function(e){
        e.preventDefault();
        nav.removeClass('open')
        navBg.fadeOut(300)
    })


}


function cover() {
    const cover_num = $('.vis-images li')
    const cover_nav = $('.vis-buttons li')
    const coverLength=cover_num.length-1;
   slide();
    function slide(){
        let i =$('.vis-images li.on').index()
        let j  =$('.vis-buttons li.active').index()
        console.log(i,j)
        console.log(coverLength)
        cover_num.removeClass('on')
        cover_nav.removeClass('active')
        if(i<coverLength){
        cover_num.eq(i+1).addClass('on')
        cover_nav.eq(i+1).addClass('active')
        }

        if(i===coverLength){
            cover_num.eq(0).addClass('on')
            cover_nav.eq(0).addClass('active')  
        }


    }

    cover_nav.click(function(){
        clearInterval(cover_repeat)
        let j = $(this).index();
        cover_num.removeClass('on')
        cover_nav.removeClass('active')
        cover_num.eq(j).addClass('on')
        cover_nav.eq(j).addClass('active')  
    })
    
}





})