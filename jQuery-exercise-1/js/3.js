$(document).ready(function (){
    $("#get_textareaText").click(function(){
        $('#output').text($('textarea').val());
    })
})