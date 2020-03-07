
$(document).ready(function(){
    $('.popup-btn').on('click',function(event){
        event.preventDefault();
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click',function(event){
        event.preventDefault();
        $('.popup').fadeOut();
    })
    /*Слайдер с отзывами*/
    $('.feedback-slider').slick({
        
    });
   
});
