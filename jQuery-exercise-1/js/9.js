$(document).ready(function() {
    $('#button1').click(function(){ 
        $( "input[value='Red']" ).next().text( " Red " );
    });
})