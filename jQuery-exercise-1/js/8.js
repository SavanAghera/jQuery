$(document).ready(function() {
    $("#find").click(function() {
        $("#output").text($('em:first').attr('title'))
    })
})