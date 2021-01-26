$(document).ready(function(){
    $('#bold_element').click(function(){
        $('p').each(function(index,ele){
            let text = $(this).text().split(' ')[0];
            $(this).html($(this).text().replace(text,`<b>${text}</b>`))
        })
    })
})