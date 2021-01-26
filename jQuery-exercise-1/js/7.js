$(document).ready(function() {
            
    $( "#change" ).click(function() {
        $( "div:animated" ).toggleClass( "colored" );
    });

    function animationdiv(){
    $('#a1,#a2').slideToggle('slow',animationdiv);}
    
    animationdiv();
})