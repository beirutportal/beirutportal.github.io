import * as Donations from './js/donations.js';


$(document).ready(function(){

    $('#Donations .dn-title').children('h5').text(Donations.list.length + " DONATION LINKS");


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



    




    //Donations List Builder
    for(var i = 0; i<Donations.list.length; i++){

        //Card Builder
        let $card = $("<div class='card' id='"+ Donations.list[i].id +"'></div>");
        let $img = $("<img src='"+ Donations.list[i].imgsrc + "' class='card-img-top'>");
        let $cardbody = $("<div class='card-body'></div>");
        let $cardtitle = $("<h5 class='card-title'>"+ Donations.list[i].name +"</h5>");
        let $cardtext = $("<p class='card-text'>" + Donations.list[i].excerpt + "</p>");

        let $donateurl = $("<a href=" + Donations.list[i].donateurl + " target='_blank'></a>");
        let $btndonate = $("<button type='button' class='btn btn-success green'>DONATE NOW <i class='fa fa-external-link' aria-hidden='true'></i></button>");

        let $weburl = $("<a href=" + Donations.list[i].weburl + " target='_blank'></a>");
        let $btnurl = $("<button type='button' class='btn btn-outline-secondary'>Learn more <i class='fa fa-external-link' aria-hidden='true'></i></button>");

        $('.card-columns').append($card);
        $card.append($img);
		$card.append($cardbody);
        $cardbody.append($cardtitle);
        $cardbody.append($cardtext);
        
        $cardbody.append($donateurl);
        $donateurl.append($btndonate);

        $cardbody.append($weburl);
        $weburl.append($btnurl);



        //Simplified List Builder
        let $elmt = $("<div class='elmt'></div>");
        let $p = $("<p></p>");
        let $elmtlink = $("<a href='" + Donations.list[i].donateurl + "' target='_blank'> " + Donations.list[i].name + " <i class='fa fa-external-link' aria-hidden='true'></i></a>")

        $('.elmts-collection').append($elmt);
        $elmt.append($p);
        $p.append($elmtlink);
        


    }




});