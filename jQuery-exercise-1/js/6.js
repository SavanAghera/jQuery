$(document).ready(function() {
    $('#button1').click(function() {
        $('#iddiv *').addClass('border')
        $('#output').text(`${$('#iddiv *').length} element found`)
    })
})