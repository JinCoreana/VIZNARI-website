$(function () {

    $(window).on('load scroll',function(){
        const header = $('.header');
        const visuHeight = $('.visual').outerHeight();
        const h_Height=header.outerHeight();
        const scrollTop= $(window).scrollTop();
  

        // console.log('scrollTop:'+scrollTop)
        // console.log('header:'+h_Height)
        // console.log('visuHeight:'+visuHeight)


        header.addClass('load');

        if(scrollTop >= visuHeight - h_Height){
            header.addClass('down');
        }
        else{
            
            header.removeClass('down');
        }
    
    })


})