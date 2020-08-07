$(document).ready(function(){

    $('#simplifylist').click(function(){
        if( $('#simplifylist').is(":checked") ){
            $('#simplifylist').attr('checked','unchecked');
            $(".card-columns").css({'display':'none'});
            $(".elmts-collection").css({'display':'block'});
        }else{
            $('#simplifylist').attr('checked','checked')
            $(".card-columns").css({'display':'block'});
            $(".elmts-collection").css({'display':'none'});
        }
    });
    
    $('.update-notice-icon').click(function(){
        $('.update-notice').css({'display':'none'});
    });



});