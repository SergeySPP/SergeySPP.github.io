
$(document).ready(function(){
    $('.konsult').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeIn();
    });
    $('.popup-close').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeOut();
    })
 
   
});
$(document).ready(function(){
    $('#modal-btn').on('click',function(event){
        event.preventDefault();
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click',function(event){
        event.preventDefault();
        $('.popup').fadeOut();
    })
 
   
});


$('.form').submit(function(event){
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заказ.Мы вам перезвоним!");
        $("form").trigger("reset");
    });
    return false;
     });

